import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentDraftFile = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M22.5 3.5v17a3 3 0 01-3 3h-10A3 3 0 016.905 22H19.5a1.5 1.5 0 001.5-1.5V5h-2V3.5h3.5zm-5-3v17a3 3 0 01-3 3h-10a3 3 0 01-3-3V7h4A2.5 2.5 0 008 4.5v-4h9.5zM7 .5v4A1.5 1.5 0 015.5 6h-4L7 .5z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M22.5 3.5v17c0 1.655-1.345 3-3 3h-10A2.998 2.998 0 016.905 22H19.5c.825 0 1.5-.675 1.5-1.5V5h-2V3.5h3.5zm-5-3v17c0 1.655-1.345 3-3 3h-10c-1.655 0-3-1.345-3-3v-12l5-5h11zM16 2H7.5v3c0 .83-.67 1.5-1.5 1.5H3v11c0 .825.675 1.5 1.5 1.5h10c.825 0 1.5-.675 1.5-1.5V2z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-content-draft-file", {
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
  const components = ["scale-icon-content-draft-file"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-content-draft-file":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ContentDraftFile);
      }
      break;
  } });
}

const ScaleIconContentDraftFile = ContentDraftFile;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconContentDraftFile, defineCustomElement };
