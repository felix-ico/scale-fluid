import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DevicePhotoCamera = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M20 6.25h-2.25l-1.5-2.5h-8.5l-1.5 2.5H4A2.245 2.245 0 001.75 8.5V17A2.245 2.245 0 004 19.25h16A2.245 2.245 0 0022.25 17V8.5A2.245 2.245 0 0020 6.25zm-8 9.42a3.67 3.67 0 110-7.34 3.67 3.67 0 010 7.34zm7-5.17a1 1 0 110-2 1 1 0 010 2z" }))) : (h("g", null, h("path", { d: "M16.7 3l1.5 2.5H20c1.65 0 3 1.35 3 3V17c0 1.65-1.35 3-3 3H4c-1.65 0-3-1.35-3-3V8.5c0-1.65 1.35-3 3-3h1.85L7.35 3zm-.9 1.5H8.15L6.65 7H4c-.85 0-1.5.65-1.5 1.5V17c0 .85.65 1.5 1.5 1.5h16c.85 0 1.5-.65 1.5-1.5V8.5c0-.85-.65-1.5-1.5-1.5h-2.7zM12 7c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 1.5c-1.95 0-3.5 1.55-3.5 3.5s1.55 3.5 3.5 3.5 3.5-1.55 3.5-3.5-1.55-3.5-3.5-3.5zm7 0a1 1 0 110 2 1 1 0 010-2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-device-photo-camera", {
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
  const components = ["scale-icon-device-photo-camera"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-device-photo-camera":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DevicePhotoCamera);
      }
      break;
  } });
}

const ScaleIconDevicePhotoCamera = DevicePhotoCamera;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconDevicePhotoCamera, defineCustomElement };