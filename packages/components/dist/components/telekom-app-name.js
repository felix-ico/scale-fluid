import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const telekomAppNameCss = ":host{--color:var(--telekom-color-primary-standard);--font-weight:var(--telekom-typography-font-weight-extra-bold);--font-size:var(--telekom-typography-font-size-body)}:host ::slotted(*){color:var(--color);font-weight:var(--font-weight);font-size:var(--font-size);text-decoration:none}";

const TelekomAppName = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return telekomAppNameCss; }
}, [1, "scale-telekom-app-name"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-telekom-app-name"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-telekom-app-name":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TelekomAppName);
      }
      break;
  } });
}

export { TelekomAppName as T, defineCustomElement as d };
