import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionEdit = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M21.25 19.5a.75.75 0 010 1.5H8.045l1.05-1.5zM3.355 17.15l3.14 2.205L3 20.995l.35-3.84zM15.46 1.29v.02a1.915 1.915 0 011.57 3L7.355 18.125l-3.14-2.2 9.67-13.815a1.92 1.92 0 011.575-.82z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M21.25 19.5c.4 0 .75.35.75.75s-.35.75-.75.75H8.05l1.05-1.5zm-17.9-2.35l3.15 2.2L3 21zM13.9 2.1c.55-.8 1.8-1.05 2.65-.45l.136.1c.783.625.932 1.745.364 2.55l-9.7 13.8-3.15-2.2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-edit", {
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
  const components = ["scale-icon-action-edit"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-edit":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionEdit);
      }
      break;
  } });
}

const ScaleIconActionEdit = ActionEdit;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionEdit, defineCustomElement };
