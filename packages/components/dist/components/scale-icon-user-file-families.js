import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileFamilies = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M8.035 15.25a3.78 3.78 0 002.08-.63 7.29 7.29 0 01-.795-1.265c-.38.255-.827.392-1.285.395-1.695 0-2.835-1.815-2.835-3.5a2.71 2.71 0 012.835-2.83c.284.003.566.043.84.12.167-.48.388-.94.66-1.37a4.58 4.58 0 00-1.5-.25A4.235 4.235 0 003.7 10.235c0 2.42 1.74 5.015 4.335 5.015zm7-.355c2.5 0 4.29-2.5 4.29-5.105a4.15 4.15 0 00-4.29-4.29 4.15 4.15 0 00-4.29 4.29c0 2.595 1.805 5.105 4.29 5.105zm8.345 5.06a4 4 0 00-3.965-3.355H17.7l-2.665 2.665L12.37 16.6h-1.715a4 4 0 00-3.965 3.355l-.09.545h16.87l-.09-.545zM6.955 16.5H4.5a3.395 3.395 0 00-3.355 2.845L.93 20.5h1.5l.15-.89A1.9 1.9 0 014.5 18h1.31a5.445 5.445 0 011.145-1.5z" }))) : (h("g", null, h("path", { d: "M12.25 16.5l2.85 2.75 2.75-2.75h1.6c1.95 0 3.65 1.4 3.95 3.35l.1.65H6.6l.1-.65c.3-1.95 2-3.35 3.95-3.35zm-5.4 0c-.45.45-.8.95-1.1 1.5H4.5c-.95 0-1.75.65-1.9 1.6l-.15.9H.95l.2-1.15c.25-1.65 1.7-2.85 3.35-2.85zm8.2-11.75C18 4.75 20.1 6.9 20.1 9.8c0 2.8-2.05 5.85-5.05 5.85C12 15.65 10 12.6 10 9.8c0-2.95 2.1-5.05 5.05-5.05zm-7 1.15c.55 0 1.05.1 1.5.25-.25.4-.5.85-.65 1.35-.25-.05-.55-.1-.85-.1-1.7 0-2.85 1.2-2.85 2.85 0 1.7 1.15 3.5 2.85 3.5.5 0 .9-.15 1.3-.4.25.45.5.85.8 1.25-.6.4-1.3.65-2.1.65-2.6 0-4.35-2.6-4.35-5 0-2.5 1.9-4.35 4.35-4.35zm7 .35c-2.1 0-3.55 1.45-3.55 3.55s1.45 4.35 3.55 4.35c2.15 0 3.55-2.25 3.55-4.35s-1.45-3.55-3.55-3.55z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-user-file-families", {
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
  const components = ["scale-icon-user-file-families"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-user-file-families":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UserFileFamilies);
      }
      break;
  } });
}

const ScaleIconUserFileFamilies = UserFileFamilies;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconUserFileFamilies, defineCustomElement };
