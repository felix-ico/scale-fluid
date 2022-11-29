import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { e as emitEvent } from './utils.js';
import { d as defineCustomElement$1 } from './action-close.js';

const tagCss = ":host{--background:var(--telekom-color-ui-extra-strong);--color:var(--telekom-color-text-and-icon-inverted-standard);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--font-weight:var(--telekom-typography-font-weight-bold);--radius:var(--telekom-radius-small);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--icon-color:var(--color);--icon-color-hover:var(--color);--background-disabled:var(--telekom-color-ui-disabled);--color-disabled:var(--telekom-color-text-and-icon-disabled);--spacing-left-dismissable:var(--telekom-spacing-unit-x05);--border-button-dismissable-focus:1px solid transparent;--box-shadow-button-dismissable-focus:var(--box-shadow-focus);--background-button-dismissable-hover:var(\n    --telekom-color-ui-state-fill-hovered\n  );--background-button-standard-strong-dismissible-hover:var(\n    --telekom-color-ui-state-fill-hovered-inverted\n  );--background-button-standard-dismissible-hover:var(\n    --telekom-color-ui-state-fill-hovered\n  );--background-button-dismissable-active:var(\n    --telekom-color-ui-state-fill-pressed\n  );--height-button-dismissable:20px;--width-button-dismissable:20px;--height-button-dismissable-small:18px;--width-button-dismissable-small:18px;--spacing-small:0 var(--telekom-spacing-unit-x2);--font-size-small:var(--telekom-typography-font-size-small);--line-height-small:var(--telekom-typography-line-spacing-loose)}.tag{border:1px solid transparent;display:inline-flex;outline:none;padding:0 8px;text-align:center;transition:all 0.15s ease-in-out;align-items:center;white-space:nowrap;border-radius:var(--telekom-radius-small);vertical-align:baseline;justify-content:center;font-size:var(--font-size);line-height:var(--line-height);font-weight:var(--font-weight);background:var(--background);color:var(--color);cursor:default}.tag scale-icon-action-close{color:var(--icon-color)}.tag:not(.tag--disabled) scale-icon-action-close:hover{color:var(--icon-color-hover)}.tag::slotted(*){padding:100px}.tag--dismissable{padding:0 0 0 8px}.tag--dismissable button{border:none;cursor:pointer;height:var(--height-button-dismissable);width:var(--width-button-dismissable);margin:0;outline:none;padding:0;background:transparent;margin-left:var(--spacing-left-dismissable);border-radius:var(--radius);align-items:center}.tag--dismissable scale-icon-action-close{padding-top:0.5px;height:20px;align-items:center}.tag--dismissable button:focus{border:var(--border-button-dismissable-focus);justify-content:center;outline:var(--focus-outline)}.tag--dismissable:not(.tag--disabled) button:hover{background:var(--background-button-dismissable-hover)}.tag--dismissable.tag--color-grey:not(.tag--disabled) button:hover{background:var(--background-button-standard-dismissible-hover)}.tag--dismissable.tag--type-strong.tag--color-grey:not(.tag--disabled) button:hover{background:var(--background-button-standard-strong-dismissible-hover)}.tag--dismissable button:active{background:var(--background-button-dismissable-active)}.tag--dismissable.tag--color-grey button:active{background:var(--background-button-standard-dismissible-hover)}.tag--dismissable.tag--type-strong.tag--color-grey button:active{background:var(--background-button-standard-strong-dismissible-hover)}.tag--dismissable button:focus scale-icon-action-close{margin-top:-1px}.tag--size-small{font-size:var(--font-size-small);padding:0 6px}.tag--size-small.tag--dismissable{padding-right:0px}.tag--size-small.tag--dismissable button{height:var(--height-button-dismissable-small);width:var(--width-button-dismissable-small)}.tag--size-small.tag--dismissable scale-icon-action-close{height:var(--height-button-dismissable-small);margin-top:-0.5px}.tag--size-small.tag--dismissable button:focus scale-icon-action-close{height:var(--height-button-dismissable-small);margin-top:-1.4px}.tag--disabled{background-color:var(--telekom-color-ui-faint) !important;color:var(--color-disabled) !important;pointer-events:none}.tag--disabled scale-icon-action-close{color:var(--color-disabled) !important;pointer-events:none}.tag--link{text-decoration:none}.tag--link:focus{border:1px solid white;outline:var(--focus-outline)}.tag--link{background:var(--background-secondary)}.tag--link:hover{background:var(--background-secondary)}.tag--link:focus{border:1px solid white}.tag--type-standard.tag--color-grey{background-color:var(--telekom-color-ui-faint);color:var(--telekom-color-text-and-icon-standard)}.tag--type-standard.tag--color-grey.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-standard)}.tag--type-standard.tag--color-cyan{background-color:var(--telekom-color-additional-cyan-subtle);color:var(--telekom-color-text-and-icon-on-subtle-cyan)}.tag--type-standard.tag--color-cyan.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-cyan)}.tag--type-standard.tag--color-yellow{background-color:var(--telekom-color-additional-yellow-subtle);color:var(--telekom-color-text-and-icon-on-subtle-yellow)}.tag--type-standard.tag--color-yellow.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-yellow)}.tag--type-standard.tag--color-green{background-color:var(--telekom-color-functional-success-subtle);color:var(--telekom-color-text-and-icon-on-subtle-success)}.tag--type-standard.tag--color-green.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-success)}.tag--type-standard.tag--color-orange{background-color:var(--telekom-color-functional-warning-subtle);color:var(--telekom-color-text-and-icon-on-subtle-warning)}.tag--type-standard.tag--color-orange.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-warning)}.tag--type-standard.tag--color-red{background-color:var(--telekom-color-functional-danger-subtle);color:var(--telekom-color-text-and-icon-on-subtle-danger)}.tag--type-standard.tag--color-red.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-danger)}.tag--type-standard.tag--color-violet{background-color:var(--telekom-color-additional-violet-subtle);color:var(--telekom-color-text-and-icon-on-subtle-violet)}.tag--type-standard.tag--color-violet.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-violet)}.tag--type-standard.tag--color-brown{background-color:var(--telekom-color-additional-brown-subtle);color:var(--telekom-color-text-and-icon-on-subtle-brown)}.tag--type-standard.tag--color-brown.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-brown)}.tag--type-standard.tag--color-olive{background-color:var(--telekom-color-additional-olive-subtle);color:var(--telekom-color-text-and-icon-on-subtle-olive)}.tag--type-standard.tag--color-olive.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-olive)}.tag--type-standard.tag--color-teal{background-color:var(--telekom-color-additional-teal-subtle);color:var(--telekom-color-text-and-icon-on-subtle-teal)}.tag--type-standard.tag--color-teal.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-teal)}.tag--type-strong{color:var(--telekom-color-text-and-icon-standard)}.tag--type-strong.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-additional)}.tag--type-strong.tag--color-grey{background-color:var(--telekom-color-ui-extra-strong);color:var(--telekom-color-text-and-icon-inverted-standard)}.tag--type-strong.tag--color-grey.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-inverted-standard)}.tag--type-strong.tag--color-cyan{background-color:var(--telekom-color-additional-cyan-400)}.tag--type-strong.tag--color-yellow{background-color:var(--telekom-color-additional-yellow-400)}.tag--type-strong.tag--color-green{background-color:var(--telekom-color-functional-success-standard)}.tag--type-strong.tag--color-orange{background-color:var(--telekom-color-functional-warning-standard)}.tag--type-strong.tag--color-red{background-color:var(--telekom-color-functional-danger-standard)}.tag--type-strong.tag--color-violet{background-color:var(--telekom-color-additional-violet-300)}.tag--type-strong.tag--color-brown{background-color:var(--telekom-color-additional-brown-400)}.tag--type-strong.tag--color-olive{background-color:var(--telekom-color-additional-olive-400)}.tag--type-strong.tag--color-teal{background-color:var(--telekom-color-additional-teal-400)}";

const Tag = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.scaleClose = createEvent(this, "scale-close", 7);
    this.scaleCloseLegacy = createEvent(this, "scaleClose", 7);
    /** (optional) Tag type */
    this.type = 'standard';
    /** (optional) Tag color */
    this.color = 'grey';
    /** (optional) Tag href */
    this.href = '';
    /** (optional) Tag target */
    this.target = '_self';
    /** (optional) Tag dismissable */
    this.dismissable = false;
    /** (optional) Tag disabled */
    this.disabled = false;
    /** (optional) Dismiss label */
    this.dismissText = 'dismiss';
    this.handleClose = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      emitEvent(this, 'scaleClose', event);
    };
  }
  componentWillUpdate() { }
  disconnectedCallback() { }
  render() {
    const Element = !!this.href && !this.disabled ? 'a' : 'span';
    const linkProps = !!this.href
      ? {
        href: this.href,
        target: this.target,
      }
      : {};
    return (h(Host, null, this.styles && h("style", null, this.styles), h(Element, Object.assign({ part: this.getBasePartMap(), class: this.getCssClassMap() }, linkProps), h("slot", null), this.dismissable && (h("button", { part: "button-dismissable", disabled: this.disabled, "aria-label": this.dismissText, onClick: this.handleClose }, h("scale-icon-action-close", { part: "icon-dismissable", size: 15 }))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tag';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classnames(mode === 'basePart' ? 'base' : component, this.size && `${prefix}size-${this.size}`, this.type && `${prefix}type-${this.type}`, this.color && `${prefix}color-${this.color}`, !!this.href && `${prefix}link`, !!this.dismissable && `${prefix}dismissable`, !!this.disabled && `${prefix}disabled`);
  }
  static get style() { return tagCss; }
}, [1, "scale-tag", {
    "size": [1],
    "type": [1],
    "color": [1],
    "href": [1],
    "target": [1],
    "dismissable": [4],
    "disabled": [4],
    "dismissText": [1, "dismiss-text"],
    "styles": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-tag", "scale-icon-action-close"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-tag":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Tag);
      }
      break;
    case "scale-icon-action-close":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Tag as T, defineCustomElement as d };
