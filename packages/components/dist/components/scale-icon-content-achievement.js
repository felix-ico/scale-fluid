import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentAchievement = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M19 3V1.5H5V3H1.5v5.5a5 5 0 004.145 4.92 7 7 0 004.855 3.915A2.75 2.75 0 017.75 20H7v2.5h10V20h-.75a2.75 2.75 0 01-2.75-2.665 7 7 0 004.85-3.915A5 5 0 0022.5 8.5V3H19zM3 8.5v-4h2v6c.003.406.04.81.11 1.21A3.5 3.5 0 013 8.5zm11.08 3.405L12 10.615l-2.08 1.29.58-2.38-1.87-1.58 2.44-.18L12 5.5l.925 2.265 2.44.18-1.865 1.58.58 2.38zM21 8.5a3.5 3.5 0 01-2.11 3.21c.07-.4.107-.804.11-1.21v-6h2v4z" }))) : (h("g", null, h("path", { d: "M19 1.5V3h3.5v5.5c0 2.45-1.8 4.5-4.15 4.9-.9 1.95-2.7 3.45-4.85 3.9a2.756 2.756 0 002.75 2.65H17v2.5H7v-2.5h.75c1.5 0 2.7-1.15 2.75-2.65-2.15-.45-3.95-1.95-4.85-3.9C3.3 13 1.5 10.95 1.5 8.5V3H5V1.5zM17.5 3h-11v7.5c0 3.05 2.45 5.5 5.5 5.5s5.5-2.45 5.5-5.5zM12 5.5l.9 2.25 2.45.2-1.85 1.6.6 2.35-2.1-1.3-2.1 1.3.6-2.35-1.85-1.6 2.45-.2zm-7-1H3v4c0 1.45.85 2.65 2.1 3.2-.05-.4-.1-.8-.1-1.2zm16 0h-2v6c0 .4-.05.8-.1 1.2 1.25-.55 2.1-1.75 2.1-3.2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-content-achievement", {
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
  const components = ["scale-icon-content-achievement"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-content-achievement":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ContentAchievement);
      }
      break;
  } });
}

const ScaleIconContentAchievement = ContentAchievement;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconContentAchievement, defineCustomElement };
