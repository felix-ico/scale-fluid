import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentMoneyAt = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M13.545 2.435C7.415 2.435 2.79 7.28 2.79 13.7c0 4.845 3.4 8.36 8.08 8.36a10.26 10.26 0 005.03-1.315l.19-.105-.715-1.815-.25.135a8.605 8.605 0 01-4.235 1.1c-3.5 0-5.96-2.615-5.96-6.36 0-5.28 3.695-9.26 8.57-9.26 3.805 0 6 2.095 6 5.74 0 2.5-1.08 5.125-2.885 5.125a.84.84 0 01-.665-.245 1.5 1.5 0 01-.175-1.17l.905-6.345h-2.14L14.4 8.59a2.845 2.845 0 00-2.535-1.335c-2.875 0-4.43 3.08-4.43 6 0 2.41 1.4 4.03 3.5 4.03a3.32 3.32 0 002.8-1.535c.28.77 1 1.535 2.66 1.535 2.53 0 5.225-2.5 5.225-7.085-.02-4.7-3.18-7.765-8.075-7.765zm.3 9.065c0 1.765-.87 3.64-2.5 3.64-1.435 0-1.65-1.3-1.65-2.07 0-1.785.785-3.71 2.5-3.71 1.495.01 1.65 1.505 1.65 2.14z" }))) : (h("g", null, h("path", { d: "M21.35 10.18c0 3.205-1.725 6.83-4.975 6.83-1.46 0-2.3-.62-2.52-1.725H13.7c-.595 1.04-1.55 1.725-2.785 1.725-1.97 0-3.23-1.525-3.23-3.78 0-2.895 1.525-5.725 4.18-5.725 1.325 0 2.21.71 2.585 1.77h.11l.2-1.48h1.635l-.86 6.06c-.155.995.135 1.7 1.085 1.7 2.055 0 3.14-2.895 3.14-5.375 0-3.76-2.275-5.99-6.235-5.99-5.195 0-8.845 4.265-8.845 9.505 0 4.09 2.785 6.61 6.215 6.61 1.725 0 3.14-.465 4.355-1.13l.53 1.35a10.047 10.047 0 01-4.91 1.285c-4.245 0-7.825-3.075-7.825-8.115 0-6.08 4.375-11.01 10.5-11.01 4.82 0 7.805 2.92 7.805 7.495zm-7.255 1.33c0-1.44-.64-2.39-1.88-2.39-1.77 0-2.765 1.835-2.765 3.96 0 1.37.62 2.32 1.9 2.32 1.73 0 2.745-1.88 2.745-3.89z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-content-money-at", {
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
  const components = ["scale-icon-content-money-at"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-content-money-at":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ContentMoneyAt);
      }
      break;
  } });
}

const ScaleIconContentMoneyAt = ContentMoneyAt;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconContentMoneyAt, defineCustomElement };
