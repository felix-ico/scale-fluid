import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const NavigationCircleTopUp = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M19.25 4.75a10.255 10.255 0 10-14.506 14.5A10.255 10.255 0 0019.25 4.75zm-4.3 9L12 10.6l-2.95 3.16-1.1-1L12 8.4l4.05 4.34z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M4.2 4.2c4.3-4.25 11.3-4.25 15.6 0 4.25 4.3 4.25 11.3 0 15.6-2.15 2.15-5 3.2-7.8 3.2s-5.65-1.1-7.8-3.2C-.05 15.5-.05 8.5 4.2 4.2zm14.55 1.1C15.05 1.6 9 1.6 5.3 5.3S1.6 15 5.25 18.7c3.7 3.7 9.75 3.7 13.45 0s3.7-9.7.05-13.4zM12 8.4l4.05 4.35c.25.3.25.75-.05 1.05-.3.25-.75.25-1.05-.05L12 10.6l-2.95 3.15c-.25.3-.75.35-1.05.05a.725.725 0 01-.05-1.05z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-navigation-circle-top-up", {
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
  const components = ["scale-icon-navigation-circle-top-up"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-navigation-circle-top-up":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NavigationCircleTopUp);
      }
      break;
  } });
}

const ScaleIconNavigationCircleTopUp = NavigationCircleTopUp;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconNavigationCircleTopUp, defineCustomElement };
