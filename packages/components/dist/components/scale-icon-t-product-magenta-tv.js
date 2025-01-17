import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const TProductMagentaTv = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M22.825 10.75L18.5 3.25A2.5 2.5 0 0016.33 2H7.67A2.5 2.5 0 005.5 3.25l-4.33 7.5a2.5 2.5 0 000 2.5l4.33 7.5A2.5 2.5 0 007.67 22h8.66a2.5 2.5 0 002.17-1.25l4.33-7.5a2.5 2.5 0 00-.005-2.5zM9.5 16.33V7.67L17 12l-7.5 4.33z" }))) : (h("g", null, h("path", { d: "M16.35 2c.85 0 1.7.5 2.15 1.25l4.35 7.5c.4.75.4 1.75-.05 2.5l-4.35 7.5C18 21.5 17.2 22 16.3 22H7.65c-.9 0-1.7-.5-2.15-1.25l-4.35-7.5c-.45-.75-.45-1.75 0-2.5l4.35-7.5C5.95 2.5 6.75 2 7.65 2zm-.05 1.5H7.65c-.35 0-.65.2-.85.5l-4.35 7.5c-.2.3-.2.7 0 1L6.8 20c.15.3.5.5.85.5h8.7c.35 0 .65-.2.85-.5l4.35-7.5c.15-.3.15-.7-.05-1L17.15 4c-.15-.3-.5-.5-.85-.5zM9.5 7.65L17 12l-7.5 4.35z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-t-product-magenta-tv", {
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
  const components = ["scale-icon-t-product-magenta-tv"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-t-product-magenta-tv":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TProductMagentaTv);
      }
      break;
  } });
}

const ScaleIconTProductMagentaTv = TProductMagentaTv;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconTProductMagentaTv, defineCustomElement };
