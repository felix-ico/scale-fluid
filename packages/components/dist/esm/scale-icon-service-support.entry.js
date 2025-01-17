import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ServiceSupport = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12A10.25 10.25 0 0012 1.75zM12 2a10.03 10.03 0 012.245.265L13.34 5.9A6.255 6.255 0 0012 5.75a6.17 6.17 0 00-1.335.15l-.91-3.635A10.03 10.03 0 0112 2zM5.9 13.34l-3.635.905a9.64 9.64 0 010-4.5l3.635.905a6.06 6.06 0 000 2.68v.01zM12 22a10.03 10.03 0 01-2.245-.265l.91-3.635a6.17 6.17 0 001.335.15c.45-.002.9-.052 1.34-.15l.905 3.635A10.03 10.03 0 0112 22zm0-4.25a5.75 5.75 0 11.01-11.5 5.75 5.75 0 01-.01 11.5zm6.1-4.41c.2-.882.2-1.798 0-2.68l3.635-.905a9.64 9.64 0 010 4.5L18.1 13.34z" }))) : (h("g", null, h("path", { d: "M12 1C5.95 1 1 5.95 1 12s4.95 11 11 11 11-4.95 11-11S18.05 1 12 1zm2.4 1.8c3.3.85 5.95 3.5 6.8 6.8l-2.95.5c-.65-2.1-2.3-3.75-4.35-4.35zm-4.8 0l.5 2.95C8 6.4 6.35 8.05 5.75 10.1L2.8 9.6c.9-3.3 3.5-5.9 6.8-6.8zm0 18.4c-3.3-.85-5.95-3.5-6.8-6.8l2.95-.5c.65 2.1 2.3 3.75 4.35 4.35zM7 12c0-2.75 2.25-5 5-5s5 2.25 5 5-2.25 5-5 5-5-2.25-5-5zm7.4 9.2l-.5-2.95c2.1-.65 3.75-2.3 4.35-4.35l2.95.5c-.9 3.3-3.5 5.9-6.8 6.8z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ServiceSupport.style = iconCss;

export { ServiceSupport as scale_icon_service_support };
