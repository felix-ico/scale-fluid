import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionSort = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M17.25 3.5c.69 0 1.25.56 1.25 1.25V14h3.17l-4.42 6.75L12.83 14H16V4.75c0-.69.56-1.25 1.25-1.25zm-10.5-.25L11.17 10H8v9.25a1.25 1.25 0 11-2.5 0V10H2.33l4.42-6.75z" }))) : (h("g", null, h("path", { d: "M17.25 4c.4 0 .75.35.75.75V14h3.65l-4.4 6.75-4.4-6.75h3.65V4.75c0-.4.35-.75.75-.75zm-10.5-.75l4.4 6.75H7.5v9.25c0 .4-.35.75-.75.75S6 19.65 6 19.25V10H2.35z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-sort", {
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
  const components = ["scale-icon-action-sort"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-sort":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionSort);
      }
      break;
  } });
}

export { ActionSort as A, defineCustomElement as d };
