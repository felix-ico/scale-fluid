import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionShowPassword = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M12 4.75c5.25 0 8.275 3.875 10.75 7.25-2.475 3.375-5.5 7.25-10.75 7.25S3.75 15.375 1.25 12C3.725 8.625 6.75 4.75 12 4.75zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M12 4c5.8 0 9.15 4.55 11.35 7.55l.35.45-.35.45C21.15 15.45 17.8 20 12 20S2.85 15.45.65 12.45L.3 12l.35-.45C2.85 8.55 6.2 4 12 4zm0 1.5c-4.5 0-7.25 3-9.8 6.5 2.55 3.5 5.3 6.5 9.8 6.5 4.5 0 7.25-3 9.8-6.5-2.55-3.5-5.3-6.5-9.8-6.5zM12 7c2.75 0 5 2.25 5 5s-2.25 5-5 5-5-2.25-5-5 2.25-5 5-5zm0 1.5c-1.95 0-3.5 1.55-3.5 3.5s1.55 3.5 3.5 3.5 3.5-1.55 3.5-3.5-1.55-3.5-3.5-3.5z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-show-password", {
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
  const components = ["scale-icon-action-show-password"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-show-password":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionShowPassword);
      }
      break;
  } });
}

const ScaleIconActionShowPassword = ActionShowPassword;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionShowPassword, defineCustomElement };
