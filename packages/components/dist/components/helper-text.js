import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './alert-error.js';
import { d as defineCustomElement$2 } from './alert-information.js';
import { d as defineCustomElement$1 } from './alert-success.js';

const helperTextCss = ":host{--font:var(--telekom-text-style-small-bold);--color-informational:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--color-warning:var(--telekom-color-text-and-icon-functional-warning);--color-danger:var(--telekom-color-text-and-icon-functional-danger);--color-success:var(--telekom-color-text-and-icon-functional-success);--color-neutral:var(--telekom-color-text-and-icon-additional)}.helper-text{display:flex;align-items:flex-start;flex-direction:row-reverse;justify-content:flex-end;font:var(--telekom-text-style-small-bold)}[part='text']{text-align:left}scale-icon-alert-information,scale-icon-alert-error,scale-icon-alert-success{display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-unit-x1);margin-top:0.1666em;}.helper-text--informational{color:var(--color-informational)}.helper-text--warning{color:var(--color-warning)}.helper-text--danger{color:var(--color-danger)}.helper-text--success{color:var(--color-success)}.helper-text--neutral{color:var(--color-neutral)}";

const ICON_SIZE = 11;
const HelperText = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** (optional) Injected CSS styles */
    this.variant = 'informational';
  }
  renderHelperIcon() {
    const variant = this.variant;
    if (variant === 'informational' || variant === 'warning') {
      return (h("scale-icon-alert-information", { size: ICON_SIZE }));
    }
    if (variant === 'danger') {
      return h("scale-icon-alert-error", { size: ICON_SIZE });
    }
    if (variant === 'success') {
      return (h("scale-icon-alert-success", { size: ICON_SIZE }));
    }
  }
  render() {
    return (h(Host, null, h("div", { class: {
        'helper-text': true,
        'helper-text--informational': this.variant === 'informational',
        'helper-text--warning': this.variant === 'warning',
        'helper-text--danger': this.variant === 'danger',
        'helper-text--success': this.variant === 'success',
        'helper-text--neutral': this.variant === 'neutral',
      }, part: "base" }, this.helperText ? (h("span", { part: "text" }, this.helperText)) : (h("span", { part: "text" }, h("slot", null))), this.renderHelperIcon()), this.styles && h("style", null, this.styles)));
  }
  static get style() { return helperTextCss; }
}, [1, "scale-helper-text", {
    "helperText": [1, "helper-text"],
    "styles": [1],
    "variant": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-helper-text", "scale-icon-alert-error", "scale-icon-alert-information", "scale-icon-alert-success"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-helper-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HelperText);
      }
      break;
    case "scale-icon-alert-error":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "scale-icon-alert-information":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "scale-icon-alert-success":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { HelperText as H, defineCustomElement as d };
