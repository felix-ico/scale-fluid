import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertCompliance = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M10.97 14H8a.75.75 0 110-1.5h4.06a7.865 7.865 0 011.89-1.5H8a.75.75 0 110-1.5h8a.74.74 0 01.725.575A7.535 7.535 0 0121 10.72V1H3v19a3 3 0 003 3h6.06a7.725 7.725 0 01-1.09-9zM8 6.5h8A.75.75 0 1116 8H8a.75.75 0 010-1.5zm12.895 9.035a.745.745 0 00-1.06 0L17 18.355l-1.41-1.41A.75.75 0 0014.545 18L17 20.5l3.88-3.88a.755.755 0 00.015-1.085zM17.75 11.5a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zm0 11a4.75 4.75 0 110-9.5 4.75 4.75 0 010 9.5z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M17.75 11.5c3.45 0 6.25 2.8 6.25 6.25S21.2 24 17.75 24s-6.25-2.8-6.25-6.25 2.8-6.25 6.25-6.25zM21 1v9.72a7.586 7.586 0 00-1.5-.515V2.5h-15V20c0 .825.675 1.5 1.5 1.5h4.97c.3.545.67 1.045 1.09 1.5H6c-1.655 0-3-1.345-3-3V1h18zm-.105 14.535a.745.745 0 00-1.06 0l-2.82 2.82-1.41-1.41a.745.745 0 00-1.06 0 .745.745 0 000 1.06l2.47 2.47 3.88-3.88a.754.754 0 000-1.06zM12.06 12.5a7.67 7.67 0 00-1.09 1.5H8a.749.749 0 110-1.5zm3.94-3a.74.74 0 01.725.575c-.995.13-1.935.45-2.775.925H8a.749.749 0 110-1.5zm0-3A.749.749 0 1116 8H8a.749.749 0 110-1.5z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-alert-compliance", {
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
  const components = ["scale-icon-alert-compliance"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-alert-compliance":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AlertCompliance);
      }
      break;
  } });
}

const ScaleIconAlertCompliance = AlertCompliance;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconAlertCompliance, defineCustomElement };
