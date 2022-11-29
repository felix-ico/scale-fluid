import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionCutPaste = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M8.5 21v1.5H6V21h2.5zM3 19.5A1.5 1.5 0 004.5 21v1.5a3 3 0 01-3-3zm14 0a3 3 0 01-3 3V21a1.5 1.5 0 001.5-1.5zM12.5 21v1.5H10V21h2.5zm4.5-5.5V18h-1.5v-2.5H17zm-14 0V18H1.5v-2.5H3zm19.5-14V14a3 3 0 01-3 3h-1V5.5H7v-4h15.5zm-5.5 10V14h-1.5v-2.5H17zm-14 0V14H1.5v-2.5H3zM17 7v3h-1.5V8.5H14V7h3zM4.5 7v1.5H3V10H1.5V7h3zm8 0v1.5H10V7h2.5zm-4 0v1.5H6V7h2.5z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M8.5 21v1.5H6V21h2.5zM3 19.5c0 .825.675 1.5 1.5 1.5v1.5c-1.655 0-3-1.345-3-3zm14 0c0 1.655-1.345 3-3 3V21c.825 0 1.5-.675 1.5-1.5zM12.5 21v1.5H10V21h2.5zM3 15.5V18H1.5v-2.5H3zm14 0V18h-1.5v-2.5H17zm5.5-14V14c0 1.655-1.345 3-3 3h-1v-1.5h1c.825 0 1.5-.675 1.5-1.5V3H8.5v2.5H7v-4h15.5zM3 11.5V14H1.5v-2.5H3zm14 0V14h-1.5v-2.5H17zM17 7v3h-1.5V8.5H14V7h3zM4.5 7v1.5H3V10H1.5V7h3zm8 0v1.5H10V7h2.5zm-4 0v1.5H6V7h2.5z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-cut-paste", {
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
  const components = ["scale-icon-action-cut-paste"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-cut-paste":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionCutPaste);
      }
      break;
  } });
}

const ScaleIconActionCutPaste = ActionCutPaste;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionCutPaste, defineCustomElement };
