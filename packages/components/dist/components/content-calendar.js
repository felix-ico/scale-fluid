import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentCalendar = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M17.5 3.5v-2H16v2H8v-2H6.5v2H2V19a3 3 0 003 3h14a3 3 0 003-3V3.5h-4.5zm-10 14a1 1 0 110-2 1 1 0 010 2zm0-4.5a1 1 0 110-2 1 1 0 010 2zm4.5 4.5a1 1 0 110-2 1 1 0 010 2zm0-4.5a1 1 0 110-2 1 1 0 010 2zm4.5 4.5a1 1 0 110-2 1 1 0 010 2zm0-4.5a1 1 0 110-2 1 1 0 010 2z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M8 1.5v2h8v-2h1.5v2H22V19c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V3.5h4.5v-2H8zM20.5 8h-17v11c0 .85.65 1.5 1.5 1.5h14c.85 0 1.5-.65 1.5-1.5V8zm-13 7.5a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2zm-9-4.5a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2zm4.5 0a1 1 0 110 2 1 1 0 010-2z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-content-calendar", {
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
  const components = ["scale-icon-content-calendar"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-content-calendar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ContentCalendar);
      }
      break;
  } });
}

export { ContentCalendar as C, defineCustomElement as d };
