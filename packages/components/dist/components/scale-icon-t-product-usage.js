import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const TProductUsage = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12A10.25 10.25 0 0012 1.75zM7.5 12h-3c0-1.21.295-2.4.86-3.47l.05.06 2.245 2.25A4.67 4.67 0 007.5 12zm4.5 1.5a1.5 1.5 0 01-1.5-1.5c.003-.13.021-.26.055-.385L6.47 7.53a.75.75 0 011.06-1.06l4.085 4.085c.126-.034.255-.052.385-.055a1.5 1.5 0 010 3zm4.5-1.5A4.5 4.5 0 0012 7.5a4.67 4.67 0 00-1.16.155L8.59 5.41l-.06-.05A7.43 7.43 0 0112 4.5a7.5 7.5 0 017.5 7.5h-3z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M12 1c6.05 0 11 4.95 11 11s-4.95 11-11 11S1 18.05 1 12 5.95 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zM6.45 6.45c.3-.3.75-.3 1.05 0l4.1 4.1c.15-.05.25-.05.4-.05.85 0 1.5.65 1.5 1.5s-.65 1.5-1.5 1.5-1.5-.65-1.5-1.5c0-.15 0-.25.05-.4l-4.1-4.1c-.3-.3-.3-.75 0-1.05zm-1.1 2.1l2.3 2.3c-.1.35-.15.75-.15 1.15h-3c0-1.25.3-2.45.85-3.45zM12 4.5c4.15 0 7.5 3.35 7.5 7.5h-3c0-2.5-2-4.5-4.5-4.5-.4 0-.8.05-1.15.15l-2.3-2.3c1-.55 2.2-.85 3.45-.85z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-t-product-usage", {
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
  const components = ["scale-icon-t-product-usage"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-t-product-usage":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TProductUsage);
      }
      break;
  } });
}

const ScaleIconTProductUsage = TProductUsage;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconTProductUsage, defineCustomElement };
