import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionVolumeUp = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M13 3.5v17h-2l-4.5-4H5a3 3 0 01-3-3v-3a3 3 0 013-3h1.5l4.5-4h2zm6 4.75a.75.75 0 01.75.75v2.25H22a.75.75 0 110 1.5h-2.25V15a.75.75 0 11-1.5 0v-2.25H16a.75.75 0 010-1.5h2.25V9a.75.75 0 01.75-.75z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M13 3.5v17h-2l-4.5-4H5c-1.655 0-3-1.345-3-3v-3c0-1.655 1.345-3 3-3h1.5l4.5-4h2zm-1.5 1.56L7.07 9H5c-.825 0-1.5.675-1.5 1.5v3c0 .825.675 1.5 1.5 1.5h2.07l4.43 3.94V5.06zM19 8.25c.415 0 .75.335.75.75v2.25H22a.749.749 0 110 1.5h-2.25V15a.749.749 0 11-1.5 0v-2.25H16a.749.749 0 110-1.5h2.25V9c0-.415.335-.75.75-.75z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-volume-up", {
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
  const components = ["scale-icon-action-volume-up"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-volume-up":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionVolumeUp);
      }
      break;
  } });
}

const ScaleIconActionVolumeUp = ActionVolumeUp;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionVolumeUp, defineCustomElement };
