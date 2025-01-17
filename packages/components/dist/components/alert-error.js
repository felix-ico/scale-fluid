import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertError = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M23.075 18L14.6 3.32a3 3 0 00-5.2 0L.925 18a3 3 0 002.6 4.5H20.5a3 3 0 002.575-4.5zM11 8.25h2v6.5h-2v-6.5zm1 10.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M11.95 1.8c1 0 2 .5 2.6 1.5l8.5 14.7c1.2 2-.25 4.5-2.55 4.5H3.55C1.25 22.5-.2 20 .95 18l8.4-14.7c.6-1 1.6-1.5 2.6-1.5zm.105 1.5h-.11a1.44 1.44 0 00-1.245.75l-8.5 14.7c-.4.7-.15 1.25 0 1.5s.5.75 1.3.75h17c.75 0 1.15-.5 1.25-.75.15-.25.4-.8.05-1.5l-8.5-14.7c-.4-.7-1.05-.75-1.3-.75zM12 16.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm1-8V15h-2V8.5h2z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-alert-error", {
    "size": [514],
    "fill": [1],
    "color": [1],
    "selected": [516],
    "decorative": [4],
    "accessibilityTitle": [1, "accessibility-title"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-icon-alert-error"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-alert-error":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AlertError);
      }
      break;
  } });
}

export { AlertError as A, defineCustomElement as d };
