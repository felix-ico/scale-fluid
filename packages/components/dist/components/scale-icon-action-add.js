import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionAdd = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M19.5 10.75h-6.25V4.5a1.25 1.25 0 00-2.5 0v6.25H4.5a1.25 1.25 0 000 2.5h6.25v6.25a1.25 1.25 0 102.5 0v-6.25h6.25a1.25 1.25 0 100-2.5z" }))) : (h("g", null, h("path", { d: "M19.5 11.25h-6.75V4.5c0-.4-.35-.75-.75-.75s-.75.35-.75.75v6.75H4.5c-.4 0-.75.35-.75.75s.35.75.75.75h6.75v6.75c0 .4.35.75.75.75s.75-.35.75-.75v-6.75h6.75c.4 0 .75-.35.75-.75s-.35-.75-.75-.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-add", {
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
  const components = ["scale-icon-action-add"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-add":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionAdd);
      }
      break;
  } });
}

const ScaleIconActionAdd = ActionAdd;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionAdd, defineCustomElement };
