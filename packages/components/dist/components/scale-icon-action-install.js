import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionInstall = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M7.745 14l3 4.57a1.5 1.5 0 002.5 0l3-4.57H23.5v5a3 3 0 01-3 3h-17a3 3 0 01-3-3v-5h7.245zM19 17h-2v2h2v-2zM12 .5c.69 0 1.25.56 1.25 1.25V11h3.17L12 17.75 7.58 11h3.17V1.75c0-.69.56-1.25 1.25-1.25z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M7.755 14l.98 1.5H2V19c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-3.5h-6.735l.98-1.5H23.5v5c0 1.655-1.345 3-3 3h-17c-1.655 0-3-1.345-3-3v-5h7.255zM19 17v2h-2v-2h2zM12 1c.415 0 .75.335.75.75V11h3.67L12 17.75 7.58 11h3.67V1.75c0-.415.335-.75.75-.75z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-install", {
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
  const components = ["scale-icon-action-install"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-install":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionInstall);
      }
      break;
  } });
}

const ScaleIconActionInstall = ActionInstall;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionInstall, defineCustomElement };
