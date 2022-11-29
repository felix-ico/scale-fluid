import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionPrint = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M18.5 13.5V22h-13v-8.5h13zM17 15H7v5.5h10V15zm1.5-13v4h5v9.5a3 3 0 01-3 3H20V12H4v6.5h-.5a3 3 0 01-3-3V6h5V2h13zm1 7a1 1 0 100 2 1 1 0 000-2zM17 3.5H7V6h10V3.5z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M18.5 13.5V22h-13v-8.5h13zM17 15H7v5.5h10V15zm1.5-13v4h5v9.5c0 1.655-1.345 3-3 3H20V17h.5c.825 0 1.5-.675 1.5-1.5v-8H2v8c0 .825.675 1.5 1.5 1.5H4v1.5h-.5c-1.655 0-3-1.345-3-3V6h5V2h13zm1 7a1 1 0 110 2 1 1 0 010-2zM17 3.5H7V6h10V3.5z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-print", {
    "size": [514],
    "fill": [1],
    "color": [1],
    "selected": [516],
    "decorative": [4],
    "accessibilityTitle": [1, "accessibility-title"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-icon-action-print"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-print":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionPrint);
      }
      break;
  } });
}

const ScaleIconActionPrint = ActionPrint;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionPrint, defineCustomElement };
