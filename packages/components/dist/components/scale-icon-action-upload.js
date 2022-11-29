import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionUpload = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M21.25 20.185a1.065 1.065 0 010 2.13H2.75a1.065 1.065 0 110-2.13zM12 2l4.58 7h-3.33v6.75a1.25 1.25 0 11-2.5 0V9H7.42L12 2z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M21.25 20.5c.4 0 .75.35.75.75s-.35.75-.75.75H2.75c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zM12 2l4.6 7h-3.85v6.75c0 .4-.35.75-.75.75s-.75-.35-.75-.75V9H7.4L12 2z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-upload", {
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
  const components = ["scale-icon-action-upload"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-upload":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionUpload);
      }
      break;
  } });
}

const ScaleIconActionUpload = ActionUpload;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionUpload, defineCustomElement };
