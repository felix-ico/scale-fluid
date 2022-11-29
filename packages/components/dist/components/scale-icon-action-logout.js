import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionLogout = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M13.25 2.75v7.5h-6a1.5 1.5 0 000 3h6v7.5h-7.5a3 3 0 01-3-3v-12a3 3 0 013-3zm3.25 4.58l6.75 4.42-6.75 4.42V12.5H7.25a.75.75 0 110-1.5h9.25z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M14 2v5h-1.5V3.5H5.75c-1.25 0-2.25 1-2.25 2.25v12C3.5 19 4.5 20 5.75 20h6.75v-3.5H14v5H5.75C3.7 21.5 2 19.8 2 17.75v-12C2 3.7 3.7 2 5.75 2H14zm2.5 5.35l6.75 4.4-6.75 4.4V12.5H7.25c-.4 0-.75-.35-.75-.75s.35-.75.75-.75h9.25V7.35z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-logout", {
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
  const components = ["scale-icon-action-logout"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-logout":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionLogout);
      }
      break;
  } });
}

const ScaleIconActionLogout = ActionLogout;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionLogout, defineCustomElement };
