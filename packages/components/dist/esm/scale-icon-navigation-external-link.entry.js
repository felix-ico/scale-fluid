import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const NavigationExternalLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M13.355 3l2.585 2.585-6.835 6.835a1.75 1.75 0 002.475 2.475l6.835-6.835L21 10.645V18a3 3 0 01-3 3H6a3 3 0 01-3-3V3h10.355zm9.3-1.655L21 9.24l-2.585-2.595-7.54 7.54a.74.74 0 01-.53.22.725.725 0 01-.53-.22.745.745 0 010-1.06l7.54-7.53L14.76 3l7.895-1.655z" }))) : (h("g", null, h("path", { d: "M12.65 3l1.5 1.5H4.5V18c0 .85.65 1.5 1.5 1.5h12c.85 0 1.5-.65 1.5-1.5V9.85l1.5 1.5V18c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3V3zM22.7 1.35l-1.65 7.9-2.6-2.6-7.55 7.55c-.15.15-.35.2-.55.2s-.4-.05-.55-.2c-.3-.3-.3-.75 0-1.05l7.55-7.55-2.6-2.6 7.95-1.65z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
NavigationExternalLink.style = iconCss;

export { NavigationExternalLink as scale_icon_navigation_external_link };
