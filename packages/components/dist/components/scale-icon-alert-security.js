import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertSecurity = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12 1.75l-8.75 2v7.4c0 5.386 3.571 10.12 8.75 11.6a12.065 12.065 0 008.75-11.6v-7.4zm4.295 8.28l-5.03 5.03-3.135-3.135a.75.75 0 111.06-1.06l2.075 2.075 3.97-3.97a.75.75 0 011.06 1.06z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M12 1l9.5 2.1v8c0 3.05-1.1 5.95-3 8.2-2.2 2.7-4.8 3.7-6.5 4.2-.8-.2-3.65-1-6.15-3.75-2.1-2.3-3.35-5.35-3.35-8.6v-8zm0 1.5L4 4.35v6.8c0 4.95 3.3 9.35 8 10.8 4.7-1.45 8-5.85 8-10.8v-6.8zm3.3 6.45c.3-.3.75-.3 1.05 0s.3.75 0 1.05l-5.05 5.05-3.15-3.15c-.3-.3-.3-.75 0-1.05s.75-.3 1.05 0l2.15 2.05z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-alert-security", {
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
  const components = ["scale-icon-alert-security"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-alert-security":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AlertSecurity);
      }
      break;
  } });
}

const ScaleIconAlertSecurity = AlertSecurity;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconAlertSecurity, defineCustomElement };
