'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');
const utils = require('./utils-f67712aa.js');

/**
 * Copy/pasted from https://github.com/andreasbm/focus-trap
 */
/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * We need to traverse each child-depth one at a time because if an element should be skipped
 * (for example because it is hidden) we need to skip all of it's children. If we use querySelectorAll("*")
 * the information of whether the children is within a hidden parent is lost.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
function queryShadowRoot(root, skipNode, isMatch, maxDepth = 20, depth = 0) {
  const matches = [];
  // If the depth is above the max depth, abort the searching here.
  if (depth >= maxDepth) {
    return matches;
  }
  // Traverses a slot element
  const traverseSlot = ($slot) => {
    // Only check nodes that are of the type Node.ELEMENT_NODE
    // Read more here https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    const assignedNodes = $slot
      .assignedNodes()
      .filter((node) => node.nodeType === 1);
    if (assignedNodes.length > 0) {
      const $slotParent = assignedNodes[0].parentElement;
      return queryShadowRoot($slotParent, skipNode, isMatch, maxDepth, depth + 1);
    }
    return [];
  };
  // Go through each child and continue the traversing if necessary
  // Even though the typing says that children can't be undefined, Edge 15 sometimes gives an undefined value.
  // Therefore we fallback to an empty array if it is undefined.
  const children = Array.from(root.children || []);
  for (const $child of children) {
    // Check if the element and its descendants should be skipped
    if (skipNode($child)) {
      // console.log('-- SKIP', $child);
      continue;
    }
    // console.log('$child', $child);
    // If the element matches we always add it
    if (isMatch($child)) {
      matches.push($child);
    }
    if ($child.shadowRoot != null) {
      // If the element has a shadow root we need to traverse it
      matches.push(...queryShadowRoot($child.shadowRoot, skipNode, isMatch, maxDepth, depth + 1));
    }
    else if ($child.tagName === 'SLOT') {
      // If the child is a slot we need to traverse each assigned node
      matches.push(...traverseSlot($child));
    }
    else {
      // Traverse the children of the element
      matches.push(...queryShadowRoot($child, skipNode, isMatch, maxDepth, depth + 1));
    }
  }
  return matches;
}
/**
 * Returns whether the element is hidden.
 * @param $elem
 */
function isHidden($elem) {
  return ($elem.hasAttribute('hidden') ||
    ($elem.hasAttribute('aria-hidden') &&
      $elem.getAttribute('aria-hidden') !== 'false') ||
    // A quick and dirty way to check whether the element is hidden.
    // For a more fine-grained check we could use "window.getComputedStyle" but we don't because of bad performance.
    // If the element has visibility set to "hidden" or "collapse", display set to "none" or opacity set to "0" through CSS
    // we won't be able to catch it here. We accept it due to the huge performance benefits.
    $elem.style.display === `none` ||
    $elem.style.opacity === `0` ||
    $elem.style.visibility === `hidden` ||
    $elem.style.visibility === `collapse`);
  // If offsetParent is null we can assume that the element is hidden
  // https://stackoverflow.com/questions/306305/what-would-make-offsetparent-null
  // || $elem.offsetParent == null;
}
/**
 * Returns whether the element is disabled.
 * @param $elem
 */
function isDisabled($elem) {
  return ($elem.hasAttribute('disabled') ||
    ($elem.hasAttribute('aria-disabled') &&
      $elem.getAttribute('aria-disabled') !== 'false'));
}
/**
 * Determines whether an element is focusable.
 * Read more here: https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus/1600194#1600194
 * Or here: https://stackoverflow.com/questions/18261595/how-to-check-if-a-dom-element-is-focusable
 * @param $elem
 */
function isFocusable($elem) {
  // Discard elements that are removed from the tab order.
  if ($elem.getAttribute('tabindex') === '-1' ||
    isHidden($elem) ||
    isDisabled($elem)) {
    return false;
  }
  return (
  // At this point we know that the element can have focus (eg. won't be -1) if the tabindex attribute exists
  $elem.hasAttribute('tabindex') ||
    // Anchor tags or area tags with a href set
    (($elem instanceof HTMLAnchorElement || $elem instanceof HTMLAreaElement) &&
      $elem.hasAttribute('href')) ||
    // Form elements which are not disabled
    $elem instanceof HTMLButtonElement ||
    $elem instanceof HTMLInputElement ||
    $elem instanceof HTMLTextAreaElement ||
    $elem instanceof HTMLSelectElement ||
    // IFrames
    $elem instanceof HTMLIFrameElement);
}

/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/**
 * @see https://www.youtube.com/watch?v=9-6CKCz58A8
 */
function animateTo(element, keyframes, options) {
  const anim = element.animate(keyframes, Object.assign(Object.assign({}, options), { fill: 'both' }));
  anim.addEventListener('finish', () => {
    // @ts-ignore
    anim.commitStyles();
    anim.cancel();
  });
  return anim;
}
const keyframeDefaults = {
  easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
};
const KEYFRAMES = {
  fadeIn: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 0 }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 1 }),
  ],
  fadeOut: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 1 }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 0 }),
  ],
  fadeInTop: [
    Object.assign(Object.assign({ offset: 0 }, keyframeDefaults), { opacity: 0, 
      /**
       * we are not using transform here to avoid breaking positioning for nested fixed elements (i.e. a flyout menu in an animated modal)
       * see 'fixed' section @link https://developer.mozilla.org/en-US/docs/Web/CSS/position
       */
      top: '-3rem' }),
    Object.assign(Object.assign({ offset: 1 }, keyframeDefaults), { opacity: 1, top: 0 }),
  ],
};

const modalCss = ":host{--spacing-x:var(--telekom-spacing-unit-x4);--background-overlay:var(\n    --telekom-color-background-backdrop,\n    rgba(108, 108, 108, 0.7)\n  );--max-height-window:calc(100vh - (2 * var(--telekom-spacing-unit-x20)));--radius-window:var(--telekom-radius-large);--box-shadow-window:var(--telekom-shadow-top);--background-window:var(--telekom-color-background-surface);--color-window:var(--telekom-color-text-and-icon-standard);--size-window-small:calc(\n    (6 * var(--telekom-spacing-unit-x14, 3.5rem)) +\n      (5 * var(--telekom-spacing-unit-x8))\n  );--size-window-default:calc(\n    (8 * var(--telekom-spacing-unit-x14, 3.5rem)) +\n      (7 * var(--telekom-spacing-unit-x8))\n  );--size-window-large:calc(\n    (12 * var(--telekom-spacing-unit-x14, 3.5rem)) +\n      (11 * var(--telekom-spacing-unit-x8))\n  );--spacing-x-header:var(--telekom-spacing-unit-x6);--spacing-y-header:var(--telekom-spacing-unit-x6);--border-bottom-header-has-scroll:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-subtle);--font-family-heading:var(--telekom-typography-font-family-sans);--font-size-heading:var(--telekom-typography-font-size-callout);--font-weight-heading:var(--telekom-typography-font-weight-extra-bold);--spacing-close-button:var(--telekom-spacing-unit-x2);--radius-close-button:var(--telekom-radius-standard);--transition-close-button:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--box-shadow-close-button-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus);--color-close-button:var(--telekom-color-text-and-icon-standard);--color-close-button-hover:var(--telekom-color-primary-hovered);--color-close-button-active:var(--telekom-color-primary-pressed);--spacing-x-body-wrapper:var(--telekom-spacing-unit-x6);--spacing-y-body:var(--telekom-spacing-unit-x6);--spacing-actions:var(--telekom-spacing-unit-x6);--spacing-x-actions-slotted:var(--telekom-spacing-unit-x2);--background-actions-has-scroll:var(\n    --telekom-color-background-surface-subtle\n  )}.modal{top:0;left:0;width:100%;bottom:0;display:none;z-index:100;position:fixed;background:var(--background-overlay);box-sizing:border-box;align-items:center;justify-content:center;padding-left:var(--spacing-x);padding-right:var(--spacing-x)}.modal.modal--is-open{display:flex}.modal__backdrop{top:0;left:0;width:100%;height:100%;z-index:0;position:absolute}.modal__window{width:100%;height:auto;display:flex;z-index:1;position:relative;overflow-y:auto;flex-direction:column;background-color:var(--background-window);color:var(--color-window);max-height:var(--max-height-window);min-height:var(--min-height-window);border-radius:var(--radius-window);box-shadow:var(--box-shadow-window)}.modal__window .modal__body-wrapper{overflow-y:auto;flex-shrink:1;flex-grow:1}.modal--size-small .modal__window{max-width:var(--size-window-small)}.modal--size-default .modal__window{max-width:var(--size-window-default)}.modal--size-large .modal__window{max-width:var(--size-window-large)}@media (max-height: 30em){.modal__window{max-height:calc(100vh - var(--telekom-spacing-unit-x6))}}.modal__window:after{top:0;left:0;width:100%;border:1px solid transparent;height:100%;content:'';display:block;position:absolute;box-sizing:border-box;pointer-events:none;border-radius:var(--radius-window)}.modal__header{display:flex;align-items:flex-start;flex-shrink:0;justify-content:space-between;margin-left:var(--spacing-x-header);margin-right:var(--spacing-x-header);padding-top:var(--spacing-y-header);padding-bottom:var(--spacing-y-header)}.modal--has-scroll .modal__header{border-bottom:var(--border-bottom-header-has-scroll)}.modal__heading{margin:0;font-family:var(--font-family-heading);font-size:var(--font-size-heading);font-weight:var(--font-weight-heading)}.modal__close-button{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;padding:var(--spacing-close-button);margin-bottom:calc(-2 * var(--spacing-close-button));border:0;border-radius:var(--radius-close-button);outline:none;color:var(--color-close-button);background:transparent;transition:var(--transition-close-button);transform:translate(\n    var(--spacing-close-button),\n    calc(-1 * var(--spacing-close-button))\n  );appearance:none;cursor:pointer;user-select:none}.modal__close-button:focus{box-shadow:var(--box-shadow-close-button-focus)}.modal__close-button:hover{color:var(--color-close-button-hover)}.modal__close-button:active{color:var(--color-close-button-active)}.modal__body-wrapper{padding-left:var(--spacing-x-body-wrapper);padding-right:var(--spacing-x-body-wrapper)}.modal--has-body .modal__body-wrapper{min-height:var(--telekom-spacing-related-lg)}.modal--has-body .modal__body{margin-top:var(--spacing-y-body);margin-bottom:var(--spacing-y-body)}.modal__actions{display:none;flex-shrink:0;justify-content:flex-end;padding:var(--spacing-actions)}.modal__actions ::slotted(*){margin-left:var(--spacing-x-actions-slotted)}.modal--has-actions .modal__actions{display:flex}.modal--align-actions-left .modal__actions{justify-content:flex-start}.modal--has-scroll .modal__actions{background-color:var(--background-actions-has-scroll)}";

const supportsResizeObserver = 'ResizeObserver' in window;
const Modal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.scaleOpen = index.createEvent(this, "scale-open", 7);
    this.scaleOpenLegacy = index.createEvent(this, "scaleOpen", 7);
    this.scaleBeforeClose = index.createEvent(this, "scale-before-close", 7);
    this.scaleBeforeCloseLegacy = index.createEvent(this, "scaleBeforeClose", 7);
    this.scaleClose = index.createEvent(this, "scale-close", 7);
    this.scaleCloseLegacy = index.createEvent(this, "scaleClose", 7);
    /** (optional) Modal size */
    this.size = 'default';
    /** (optional) If `true`, the Modal is open. */
    this.opened = false;
    /** (optional) Transition duration */
    this.duration = 200;
    /** (optional) Label for close button */
    this.closeButtonLabel = 'Close Pop-up';
    /** (optional) title for close button */
    this.closeButtonTitle = 'Close';
    /** (optional) hide close button */
    this.omitCloseButton = false;
    /** (optional) Alignment of action buttons */
    this.alignActions = 'right';
    /** (optional) allow to inject css style {overflow: hidden} to body when modal is open */
    this.allowInjectingStyleToBody = false;
    /** What actually triggers opening/closing the modal */
    this.isOpen = this.opened || false;
    /** Check wheter there are actions slots, style accordingly */
    this.hasActionsSlot = false;
    /** Check wheter there's content in the body, style accordingly */
    this.hasBody = false;
    /** Useful for toggling scroll-specific styles */
    this.hasScroll = false;
    /** store document body original overflow style if applicable, this is useful when modal opens and inject overflow style to body */
    this.bodyOverflowValue = '';
    this.focusableElements = [];
    this.handleKeypress = (event) => {
      if (!this.isOpen) {
        return;
      }
      if (event.key === 'Escape') {
        this.emitBeforeClose('ESCAPE_KEY');
      }
    };
    this.handleTopFocus = () => {
      this.attemptFocus(this.getLastFocusableElement());
    };
    this.handleBottomFocus = () => {
      this.attemptFocus(this.getFirstFocusableElement());
    };
  }
  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  /**
   * Set `hasActionsSlot` and `hasBody`.
   */
  componentWillRender() {
    const actionSlots = this.hostElement.querySelectorAll('[slot="action"]');
    const bodySlot = Array.from(this.hostElement.shadowRoot.querySelectorAll('slot')).find((x) => !x.name);
    this.hasActionsSlot = actionSlots.length > 0;
    if (bodySlot != null) {
      this.hasBody = bodySlot.assignedElements().length > 0;
    }
  }
  emitBeforeClose(trigger) {
    const emittedEvents = utils.emitEvent(this, 'scaleBeforeClose', { trigger });
    const prevented = emittedEvents.some((event) => event.defaultPrevented);
    if (!prevented) {
      this.opened = false;
    }
  }
  componentDidLoad() {
    // Query all focusable elements and store them in `focusableElements`.
    // Needed for the "focus trap" functionality.
    this.focusableElements = queryShadowRoot(this.hostElement.shadowRoot, (el) => isHidden(el) || el.matches('[data-focus-trap-edge]'), isFocusable);
    // Set `hasScroll` state dynamically on resize.
    if (supportsResizeObserver) {
      // @ts-ignore
      this.resizeObserver = new ResizeObserver(() => {
        this.setHasScroll();
      });
      this.resizeObserver.observe(this.modalBody);
    }
    this.setHasScroll();
  }
  setHasScroll() {
    const container = this.modalBody;
    this.hasScroll = container.scrollHeight > container.clientHeight;
  }
  getFirstFocusableElement() {
    return this.focusableElements[0];
  }
  getLastFocusableElement() {
    return this.focusableElements[this.focusableElements.length - 1];
  }
  attemptFocus(element) {
    if (element == null) {
      this.closeButton.focus();
      return;
    }
    element.focus();
  }
  openedChanged(newValue) {
    if (newValue === true) {
      this.open();
      if (this.allowInjectingStyleToBody) {
        this.bodyOverflowValue = document.body.style.overflow;
        // The following style will disable body from scrolling when modal is open
        document.body.style.setProperty('overflow', 'hidden');
      }
    }
    else {
      this.close();
      if (this.allowInjectingStyleToBody) {
        // remove injected overflow style or set it to original value
        document.body.style.setProperty('overflow', this.bodyOverflowValue);
      }
    }
  }
  open() {
    this.isOpen = true;
    try {
      animateTo(this.modalWindow, KEYFRAMES.fadeInTop, {
        duration: this.duration,
        delay: this.duration * 0.5,
      });
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeIn, {
        duration: this.duration,
      });
      anim.addEventListener('finish', () => {
        this.attemptFocus(this.getFirstFocusableElement());
        utils.emitEvent(this, 'scaleOpen');
      });
      this.hostElement.addEventListener('keydown', this.handleKeypress);
    }
    catch (err) {
      utils.emitEvent(this, 'scaleOpen');
    }
  }
  close() {
    try {
      const anim = animateTo(this.modalContainer, KEYFRAMES.fadeOut, {
        duration: this.duration,
      });
      anim.addEventListener('finish', () => {
        this.isOpen = false;
        utils.emitEvent(this, 'scaleClose');
      });
      this.hostElement.removeEventListener('keydown', this.handleKeypress);
    }
    catch (err) {
      this.isOpen = false;
      utils.emitEvent(this, 'scaleClose');
    }
  }
  render() {
    return (index.h(index.Host, null, this.styles && index.h("style", null, this.styles), index.h("div", { ref: (el) => (this.modalContainer = el), class: this.getCssClassMap(), part: index$1.classnames('base', this.isOpen && 'open') }, index.h("div", { class: "modal__backdrop", part: "backdrop", onClick: () => this.emitBeforeClose('BACKDROP') }), index.h("div", { "data-focus-trap-edge": true, onFocus: this.handleTopFocus, tabindex: "0" }), index.h("div", { class: "modal__window", part: index$1.classnames('window', this.size && `size-${this.size}`), ref: (el) => (this.modalWindow = el), role: "dialog", "aria-modal": "true", "aria-label": this.heading }, index.h("div", { class: "modal__header", part: index$1.classnames('header', this.hasScroll && 'has-scroll') }, index.h("h2", { class: "modal__heading", part: "heading" }, this.heading), !this.omitCloseButton && (index.h("button", { ref: (el) => (this.closeButton = el), class: "modal__close-button", part: "close-button", onClick: () => this.emitBeforeClose('CLOSE_BUTTON'), "aria-label": this.closeButtonLabel, title: this.closeButtonTitle }, index.h("slot", { name: "close-icon" }, index.h("scale-icon-action-circle-close", { decorative: true }))))), index.h("div", { ref: (el) => (this.modalBody = el), class: "modal__body-wrapper", part: index$1.classnames('body-wrapper', this.hasBody && 'has-body') }, index.h("div", { class: "modal__body", part: index$1.classnames('body', this.hasBody && 'has-body') }, index.h("slot", null))), index.h("div", { class: "modal__actions", part: index$1.classnames('actions', `align-${this.alignActions}`, this.hasActionsSlot && 'has-actions', this.hasScroll && 'has-scroll') }, index.h("slot", { name: "action" }))), index.h("div", { "data-focus-trap-edge": true, onFocus: this.handleBottomFocus, tabindex: "0" }))));
  }
  getCssClassMap() {
    return index$1.classnames('modal', this.isOpen && 'modal--is-open', this.hasActionsSlot && 'modal--has-actions', `modal--align-actions-${this.alignActions}`, this.hasScroll && 'modal--has-scroll', this.hasBody && 'modal--has-body', this.size && `modal--size-${this.size}`);
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "opened": ["openedChanged"]
  }; }
};
Modal.style = modalCss;

exports.scale_modal = Modal;
