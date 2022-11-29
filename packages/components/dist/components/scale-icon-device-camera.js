import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceCamera = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M21.78 7L20 8.785V5H2v1.5H.5v4H2V17a3 3 0 003 3h12a3 3 0 003-3v-1.785L21.78 17h1.72V7h-1.72zM9 15.775v-6.55l5 3.275-5 3.275z" }))) : (h("g", null, h("path", { d: "M20 5v3.8L21.8 7h1.7v10h-1.7L20 15.2V17c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3v-6.5H.5v-4H2V5zm-1.5 1.5h-15V17c0 .85.65 1.5 1.5 1.5h12c.85 0 1.5-.65 1.5-1.5zM9 9.25l5 3.25-5 3.25zm13-.35l-2 2v2.2l2 2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-device-camera", {
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
  const components = ["scale-icon-device-camera"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-device-camera":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DeviceCamera);
      }
      break;
  } });
}

const ScaleIconDeviceCamera = DeviceCamera;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconDeviceCamera, defineCustomElement };
