'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const floatingUi_dom_esm = require('./floating-ui.dom.esm-1bce2997.js');
const utils = require('./utils-f67712aa.js');
const statusNote = require('./status-note-dceee5a3.js');

const tooltipCss = ":host{--radius:var(--telekom-radius-small);--background:var(--telekom-color-background-surface-highlight);--color:var(--telekom-color-text-and-icon-white-standard);--font-weight:var(--telekom-typography-font-weight-regular);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing:var(--telekom-spacing-unit-x05) var(--telekom-spacing-unit-x2);--arrow-size:12px;--transition-delay-hide:var(--telekom-motion-duration-instant);--transition-duration-hide:var(--telekom-motion-duration-immediate);--transition-timing-function-hide:var(--telekom-motion-easing-standard);--transition-duration-show:var(--telekom-motion-duration-immediate);--transition-timing-function-show:var(--telekom-motion-easing-standard);--z-index:var(--scl-z-index-70);display:contents;position:relative;box-sizing:border-box}[part='tooltip']{position:absolute;z-index:var(--z-index);top:0;left:0;background:var(--background);color:var(--color);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);padding:var(--spacing);border-radius:var(--radius);transition-property:opacity;transition-duration:var(--transition-duration-show);transition-timing-function:var(--transition-timing-function-show)}[part='tooltip'][aria-hidden='true']{opacity:0;transition-delay:var(--transition-delay-hide);transition-duration:var(--transition-duration-hide);transition-timing-function:var(--transition-timing-function-hide);pointer-events:none}[part='trigger']{}[part='arrow']{position:absolute;z-index:-1;background:var(--background);width:var(--arrow-size);height:var(--arrow-size);transform:rotate(45deg)}@media screen and (-ms-high-contrast: active){[part='tooltip']{border:1px solid yellow}}";

let id = 0;
const Tooltip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.tooltipBeforeShow = index.createEvent(this, "scale-before-show", 7);
    this.tooltipShow = index.createEvent(this, "scale-show", 7);
    this.tooltipBeforeHide = index.createEvent(this, "scale-before-hide", 7);
    this.tooltipHide = index.createEvent(this, "scale-hide", 7);
    this.componentId = `tooltip-${++id}`;
    /** (optional) The content of the Tooltip, supporting text only */
    this.content = '';
    /** (optional) Position of the Tooltip around the trigger element */
    this.placement = 'top';
    /** (optional) Disable the tooltip */
    this.disabled = false;
    /** (optional) Tooltip distance from the target element (related to `placement`) */
    this.distance = 10;
    /** (optional) How much of the arrow element is "hidden" */
    this.arrowOffset = -4;
    /** (optional) Padding between the arrow and the edges of the tooltip */
    this.arrowPadding = 8;
    /** (optional) Set the tooltip to opened by default (will still be closed on closing events) */
    this.opened = false;
    /** (optional) Set custom trigger event (hover, focus, click) */
    this.trigger = 'hover focus';
    /** (optional) Switching the flip option of the tooltip on and off */
    this.flip = true;
    this.mouseOverTooltip = false;
    /**
     * @see https://floating-ui.com/docs/tutorial#arrow-middleware
     */
    this.update = async () => {
      if (this.disabled || this.triggerEl == null) {
        return;
      }
      // Position tooltip
      const { x, y, placement, middlewareData } = await floatingUi_dom_esm.computePosition(this.triggerEl, this.tooltipEl, {
        placement: this.placement,
        middleware: [
          floatingUi_dom_esm.offset(this.distance),
          ...(this.flip ? [floatingUi_dom_esm.flip()] : []),
          floatingUi_dom_esm.arrow({ element: this.arrowEl, padding: this.arrowPadding }),
          floatingUi_dom_esm.shift({ crossAxis: true }),
        ],
      });
      Object.assign(this.tooltipEl.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
      // Position arrow
      const { x: arrowX, y: arrowY } = middlewareData.arrow;
      const [side] = placement.split('-');
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[side];
      Object.assign(this.arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: `${this.arrowOffset}px`,
      });
    };
    this.handleBlur = () => {
      if (this.hasTrigger('focus')) {
        this.hideTooltip();
      }
    };
    this.handleClick = () => {
      if (this.hasTrigger('click')) {
        this.opened && !this.hasTrigger('focus')
          ? this.hideTooltip()
          : this.showTooltip();
      }
    };
    this.handleFocus = () => {
      if (this.hasTrigger('focus')) {
        this.showTooltip();
      }
    };
    this.handleKeyDown = (event) => {
      if (this.opened && event.key === 'Escape') {
        event.stopPropagation();
        this.hideTooltip();
      }
    };
    this.handleMouseOver = () => {
      if (this.hasTrigger('hover')) {
        this.showTooltip();
      }
    };
    this.handleMouseOut = () => {
      if (!this.mouseOverTooltip) {
        if (this.hasTrigger('hover')) {
          this.hideTooltip();
        }
      }
    };
    this.handleTooltipMouseOver = () => {
      this.mouseOverTooltip = true;
    };
    this.handleTooltipBlur = () => {
      this.mouseOverTooltip = false;
      this.handleMouseOut();
    };
    this.hasTrigger = (triggerType) => {
      const triggers = this.trigger.split(' ');
      return triggers.includes(triggerType);
    };
  }
  handleOpenChange() {
    this.opened ? this.showTooltip() : this.hideTooltip();
  }
  connectedCallback() {
    statusNote.statusNote({ source: this.hostElement, tag: 'beta' });
    if (this.hostElement.hasAttribute('open')) {
      statusNote.statusNote({
        tag: 'deprecated',
        message: 'The `open` prop is deprecated in favor of `opened`',
        source: this.hostElement,
      });
    }
    const children = Array.from(this.hostElement.children).filter((x) => !x.hasAttribute('slot'));
    if (children.length === 0) {
      // If not children found to be used as trigger, warn
      statusNote.statusNote({
        tag: 'warning',
        message: 'An element is required, if using text, wrap it in a `<span>`',
        type: 'warn',
        source: this.hostElement,
      });
      return;
    }
    this.triggerEl = children[0];
    this.triggerEl.addEventListener('blur', this.handleBlur, true);
    this.triggerEl.addEventListener('click', this.handleClick, true);
    this.triggerEl.addEventListener('focus', this.handleFocus, true);
    this.triggerEl.addEventListener('mouseover', this.handleMouseOver, true);
    this.triggerEl.addEventListener('mouseout', this.handleMouseOut, true);
  }
  disconnectedCallback() {
    this.triggerEl.removeEventListener('blur', this.handleBlur, true);
    this.triggerEl.removeEventListener('click', this.handleClick, true);
    this.triggerEl.removeEventListener('focus', this.handleFocus, true);
    this.triggerEl.removeEventListener('mouseover', this.handleMouseOver, true);
    this.triggerEl.removeEventListener('mouseout', this.handleMouseOut, true);
  }
  handleOutsideClick(event) {
    if (utils.isClickOutside(event, this.hostElement)) {
      this.hideTooltip();
    }
  }
  componentDidUpdate() {
    this.update();
    if (this.opened) {
      this.showTooltip();
    }
  }
  componentDidRender() {
    this.update();
  }
  async showTooltip() {
    if (this.opened) {
      return;
    }
    const scaleShow = this.tooltipBeforeShow.emit();
    if (scaleShow.defaultPrevented) {
      this.opened = false;
      return;
    }
    this.opened = true;
    this.update();
  }
  async hideTooltip() {
    if (!this.opened) {
      return;
    }
    const tooltipBeforeHide = this.tooltipBeforeHide.emit();
    if (tooltipBeforeHide.defaultPrevented) {
      this.opened = true;
      return;
    }
    this.opened = false;
    this.update();
  }
  render() {
    return (index.h(index.Host, { onKeyDown: this.handleKeyDown }, this.styles && index.h("style", null, this.styles), index.h("span", { part: "trigger", "aria-describedby": this.componentId }, index.h("slot", null)), !this.disabled && (index.h("div", { part: "tooltip", role: "tooltip", "aria-hidden": this.opened ? 'false' : 'true', ref: (el) => (this.tooltipEl = el), id: this.componentId, tabIndex: 0, onMouseOver: this.handleTooltipMouseOver, onMouseLeave: this.handleTooltipBlur }, index.h("slot", { name: "content" }, this.content), index.h("div", { part: "arrow", ref: (el) => (this.arrowEl = el) })))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "opened": ["handleOpenChange"]
  }; }
};
Tooltip.style = tooltipCss;

exports.scale_tooltip = Tooltip;
