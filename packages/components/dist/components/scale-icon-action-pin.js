import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionPin = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M13.065 6.11L18 11.06l-3.5 3.5a7 7 0 01-1.79 6.755l-.355.355-4.42-4.42-5.83 5.815A.755.755 0 011.04 22l5.835-5.81-4.42-4.42.355-.355A7 7 0 019.565 9.61l3.5-3.5zm1.536-4.646a2.25 2.25 0 012.174.581L22.08 7.35a2.245 2.245 0 010 3.18l-.146.134a2.25 2.25 0 01-3.039-.134l-5.3-5.3a2.25 2.25 0 011.006-3.766z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M22.08 7.35l-5.305-5.305a2.242 2.242 0 00-3.18 0c-.88.88-.88 2.305 0 3.18l.175.175-4.205 4.205a6.988 6.988 0 00-1.815-.24c-1.79 0-3.575.68-4.94 2.045l-.355.355 4.42 4.42L1.04 22.02a.745.745 0 000 1.06c.145.145.34.22.53.22s.385-.075.53-.22l5.835-5.83 4.42 4.42.355-.355a6.984 6.984 0 001.805-6.755l4.205-4.205.175.175a2.242 2.242 0 003.18 0 2.24 2.24 0 00.005-3.18zm-9.235 6.76l.225.835a5.535 5.535 0 01-.775 4.535l-7.65-7.65a5.446 5.446 0 013.11-.96c.485 0 .965.065 1.43.185l.835.225 4.815-4.815 2.83 2.83-4.82 4.815zm8.175-4.64a.752.752 0 01-1.06 0l-5.305-5.305a.754.754 0 010-1.06.752.752 0 011.06 0L21.02 8.41a.752.752 0 010 1.06z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-pin", {
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
  const components = ["scale-icon-action-pin"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-pin":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionPin);
      }
      break;
  } });
}

const ScaleIconActionPin = ActionPin;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionPin, defineCustomElement };
