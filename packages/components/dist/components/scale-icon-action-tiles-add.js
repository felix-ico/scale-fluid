import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionTilesAdd = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M10.5 13.5V22H4a2 2 0 01-2-2v-6.5h8.5zm7.25 0a.75.75 0 01.75.75V17h2.75a.75.75 0 010 1.5H18.5v2.75a.75.75 0 11-1.5 0V18.5h-2.75a.75.75 0 110-1.5H17v-2.75a.75.75 0 01.75-.75zM10.5 2v8.5H2V4a2 2 0 012-2h6.5zM20 2a2 2 0 012 2v6.5h-8.5V2z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M10.5 13.5V22H4c-1.1 0-2-.9-2-2v-6.5h8.5zm7.25 0c.4 0 .75.35.75.75V17h2.75c.4 0 .75.35.75.75s-.35.75-.75.75H18.5v2.75c0 .4-.35.75-.75.75s-.75-.35-.75-.75V18.5h-2.75c-.4 0-.75-.35-.75-.75s.35-.75.75-.75H17v-2.75c0-.4.35-.75.75-.75zM9 15H3.5v5c0 .3.2.5.5.5h5V15zm1.5-13v8.5H2V4c0-1.1.9-2 2-2h6.5zM20 2c1.1 0 2 .9 2 2v6.5h-8.5V2zM9 3.5H4c-.3 0-.5.2-.5.5v5H9V3.5zm11 0h-5V9h5.5V4c0-.3-.2-.5-.5-.5z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-tiles-add", {
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
  const components = ["scale-icon-action-tiles-add"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-tiles-add":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionTilesAdd);
      }
      break;
  } });
}

const ScaleIconActionTilesAdd = ActionTilesAdd;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionTilesAdd, defineCustomElement };
