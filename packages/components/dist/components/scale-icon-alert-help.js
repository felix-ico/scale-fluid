import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertHelp = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm1.25 16.235h-2.31v-2.31h2.31zm-.18-3.705v.21h-1.965v-.5c0-1.95 2.145-2.115 2.145-3.39a.935.935 0 00-1-1c-.615 0-1 .39-1.065 1.155h-2.03a2.95 2.95 0 013.09-3c1.695 0 3.03 1.11 3.03 2.775 0 2.145-2.205 2.445-2.205 3.75z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.95 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm1.25 12.4v2.3h-2.3v-2.3zm-1-7.9c1.7 0 3 1.1 2.95 2.8 0 2.15-2.2 2.45-2.2 3.75v.2h-1.95v-.5c0-1.95 2.15-2.15 2.15-3.4 0-.65-.4-1-1-1s-1 .4-1.05 1.15h-2c.05-1.6 1.15-3 3.1-3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-alert-help", {
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
  const components = ["scale-icon-alert-help"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-alert-help":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AlertHelp);
      }
      break;
  } });
}

const ScaleIconAlertHelp = AlertHelp;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconAlertHelp, defineCustomElement };
