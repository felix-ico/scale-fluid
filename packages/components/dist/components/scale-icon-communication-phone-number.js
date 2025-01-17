import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationPhoneNumber = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M10.535 13.5a29.66 29.66 0 01-2.115-2.365 1.5 1.5 0 01.105-2l1.28-1.28L7 2.81c-5.13.575-4.31 4.655-3.855 6 .825 2.42 2.695 4.965 4.905 7.175 2.205 2.21 4.755 4.08 7.17 4.905 1.33.455 5.41 1.275 6-3.86l-5-2.805-1.305 1.275a1.5 1.5 0 01-2 .11 29.805 29.805 0 01-2.38-2.11z" }))) : (h("g", null, h("path", { d: "M16.05 13.3l-1.7 1.7c-.25.25-.7.3-1 .05-.55-.45-1.4-1.15-2.3-2.05S9.45 11.25 9 10.7a.76.76 0 01.05-1l1.7-1.7L7.4 2c-1.1.1-3.45.35-4.7 2.25C1.55 6.1 2.2 8.35 2.4 9c.85 2.35 2.65 5 5.1 7.5 2.5 2.5 5.15 4.3 7.45 5.1.35.1 1.25.4 2.25.4.8 0 1.7-.15 2.5-.65 1.9-1.2 2.15-3.55 2.25-4.7zm2.9 6.7c-1.25.8-3 .3-3.45.15-2.1-.7-4.55-2.4-6.9-4.75-2.3-2.3-4-4.75-4.7-6.9-.15-.5-.65-2.2.15-3.45C4.5 4.3 5.4 3.8 6.65 3.6l2.3 4.05-.95.9c-.8.8-.9 2.1-.15 3 .5.6 1.25 1.5 2.15 2.45.95.95 1.85 1.7 2.45 2.15.9.7 2.2.65 3-.15l.9-.9 4.05 2.3c-.25 1.25-.7 2.15-1.45 2.6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-communication-phone-number", {
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
  const components = ["scale-icon-communication-phone-number"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-communication-phone-number":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CommunicationPhoneNumber);
      }
      break;
  } });
}

const ScaleIconCommunicationPhoneNumber = CommunicationPhoneNumber;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconCommunicationPhoneNumber, defineCustomElement };
