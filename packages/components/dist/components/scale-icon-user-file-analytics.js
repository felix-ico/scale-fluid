import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileAnalytics = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M21 17.5L15.5 23v-4a1.5 1.5 0 011.5-1.5h4zM21 1v15.5h-4a2.5 2.5 0 00-2.5 2.5v4H6a3 3 0 01-3-3V1h18zm-3.654 6.01a.754.754 0 00-.716.24l-3.465 3.95-3-2.5-3.935 4.56a.75.75 0 00.57 1.24.76.76 0 00.565-.265l2.965-3.44 3 2.5 4.435-5.05a.753.753 0 00-.42-1.234z" }))) : (h("g", null, h("path", { d: "M20.5 1v17l-5 5h-10c-1.65 0-3-1.35-3-3V1zM19 2.5H4V20c0 .85.65 1.5 1.5 1.5h9v-3c0-.85.65-1.5 1.5-1.5h3zm-2.85 4.75c.25-.3.75-.3 1.05-.05s.3.75.05 1.05L12.8 13.3l-3-2.5-2.95 3.45c-.15.15-.35.25-.55.25-.15 0-.35-.05-.45-.2-.35-.25-.35-.75-.1-1.05L9.7 8.7l3 2.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-user-file-analytics", {
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
  const components = ["scale-icon-user-file-analytics"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-user-file-analytics":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UserFileAnalytics);
      }
      break;
  } });
}

const ScaleIconUserFileAnalytics = UserFileAnalytics;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconUserFileAnalytics, defineCustomElement };
