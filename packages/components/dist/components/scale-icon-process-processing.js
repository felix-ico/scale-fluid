import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ProcessProcessing = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M1.5 13.215l6.11 2.68-2 1.32a8.255 8.255 0 004.585 2.835v.01a1.25 1.25 0 01-.545 2.44 10.765 10.765 0 01-6.15-3.915l-2 1.305v-6.675zm19.394-.404A1.255 1.255 0 0122.5 14.35a10.765 10.765 0 01-3.915 6.15l1.305 2h-6.675l2.685-6.11 1.32 2a8.24 8.24 0 002.835-4.585c.073-.462.396-.845.839-.994zM10.785 1.5l-2.68 6.11-1.32-2a8.24 8.24 0 00-2.835 4.585 1.255 1.255 0 01-1.495.945A1.245 1.245 0 011.5 9.65 10.745 10.745 0 015.415 3.5l-1.305-2h6.675zm2.359.37a1.255 1.255 0 011.206-.37 10.78 10.78 0 016.15 3.915l2-1.305v6.675l-6.11-2.68 2-1.32a8.24 8.24 0 00-4.585-2.835 1.255 1.255 0 01-.661-2.08z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M20.55 13.9c.1-.4.5-.65.9-.55.4.1.65.5.5.9-.55 2.35-1.85 4.4-3.7 5.85l1.6 2.4H13.2l2.7-6.15 1.6 2.45c1.5-1.25 2.6-2.95 3.05-4.9zM1.5 13.2l6.15 2.7-2.45 1.6c1.25 1.5 2.95 2.6 4.9 3.05.4.1.65.5.55.85-.1.4-.5.65-.9.55-2.35-.55-4.4-1.85-5.85-3.7l-2.4 1.6V13.2zM13.35 2.55c.1-.4.5-.65.9-.55 2.3.5 4.4 1.85 5.8 3.7l2.45-1.55v6.65l-6.15-2.7 2.45-1.6c-1.25-1.5-2.95-2.6-4.9-3.05-.4-.1-.65-.5-.55-.9zM10.8 1.5L8.1 7.65 6.5 5.2C5 6.45 3.9 8.15 3.45 10.1A.745.745 0 112 9.75c.5-2.3 1.85-4.4 3.7-5.8L4.1 1.5h6.7z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-process-processing", {
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
  const components = ["scale-icon-process-processing"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-process-processing":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ProcessProcessing);
      }
      break;
  } });
}

const ScaleIconProcessProcessing = ProcessProcessing;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconProcessProcessing, defineCustomElement };
