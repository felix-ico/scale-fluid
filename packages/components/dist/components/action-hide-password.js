import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionHidePassword = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M1.988 1.988A.75.75 0 013.03 1.97l17.25 17.25a.745.745 0 010 1.06.75.75 0 01-1.06 0L1.97 3.03a.75.75 0 01.018-1.042zM4.705 7.89l2.95 2.95A4.67 4.67 0 007.5 12a4.5 4.5 0 004.5 4.5 4.67 4.67 0 001.16-.155l2.285 2.28c-1.1.419-2.268.63-3.445.625-5.25 0-8.25-3.875-10.75-7.25a30.11 30.11 0 013.455-4.11zM12 4.75c5.25 0 8.25 3.875 10.75 7.25a30.11 30.11 0 01-3.455 4.11l-2.95-2.95c.1-.379.152-.768.155-1.16A4.5 4.5 0 0012 7.5a4.67 4.67 0 00-1.16.155l-2.285-2.28A9.562 9.562 0 0112 4.75zm-3 7.44l2.8 2.8a3 3 0 01-2.8-2.8zm3.2-3.18a3 3 0 012.8 2.8z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M2.85 2.85c.3-.3.75-.3 1.05 0L21.15 20.1c.3.3.3.75 0 1.05-.3.3-.75.3-1.05 0L2.85 3.9c-.3-.3-.3-.75 0-1.05zm1.35 4.5L5.25 8.4c-1.1 1.05-2.1 2.3-3.05 3.6 2.55 3.5 5.3 6.5 9.8 6.5 1.05 0 2-.15 2.85-.45L16 19.2c-1.2.5-2.5.8-4 .8-5.8 0-9.15-4.55-11.35-7.55L.3 12l.35-.45c.95-1.3 2.1-2.85 3.55-4.2zM12 4c5.8 0 9.15 4.55 11.35 7.55l.35.45-.35.45c-.95 1.3-2.1 2.85-3.55 4.2l-1.05-1.05c1.1-1.05 2.1-2.3 3.05-3.6-2.55-3.5-5.3-6.5-9.8-6.5-1.05 0-2 .15-2.85.45L8 4.8c1.2-.5 2.5-.8 4-.8zm-4.35 6.85l5.5 5.5c-.35.1-.75.15-1.15.15-2.5 0-4.5-2-4.5-4.5 0-.4.05-.8.15-1.15zM12 7.5c2.5 0 4.5 2 4.5 4.5 0 .4-.05.8-.15 1.15l-5.5-5.5c.35-.1.75-.15 1.15-.15z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-hide-password", {
    "size": [514],
    "fill": [1],
    "color": [1],
    "selected": [516],
    "decorative": [4],
    "accessibilityTitle": [1, "accessibility-title"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-icon-action-hide-password"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-hide-password":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionHidePassword);
      }
      break;
  } });
}

export { ActionHidePassword as A, defineCustomElement as d };