import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceComputer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M24 17a2 2 0 01-2 2H2a2 2 0 01-2-2zM18.5 4.25a2.245 2.245 0 012.25 2.25v9H3.25v-9A2.245 2.245 0 015.5 4.25zm-11 3.505v5.09l1.08-1.29 1 2.385.92-.39-1-2.38 1.645.14z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M24 17c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2zM18.5 3.5c1.65 0 3 1.35 3 3v9H20v-9c0-.85-.65-1.5-1.5-1.5h-13C4.65 5 4 5.65 4 6.5v9H2.5v-9c0-1.65 1.35-3 3-3zm-11 4.25l3.65 3.55-1.65-.15 1 2.4-.95.4-1-2.4-1.05 1.3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-device-computer", {
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
  const components = ["scale-icon-device-computer"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-device-computer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DeviceComputer);
      }
      break;
  } });
}

const ScaleIconDeviceComputer = DeviceComputer;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconDeviceComputer, defineCustomElement };
