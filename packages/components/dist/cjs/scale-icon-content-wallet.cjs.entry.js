'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentWallet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M15.7.225L16.625 3H20.5v2H22v6h-6a2.5 2.5 0 100 5h6v3a3 3 0 01-3 3H5a3 3 0 01-3-3V6a3 3 0 013-3h4.535zM22 12.5v2h-6a1 1 0 110-2zM14.8 2.275L8.745 5h6.965z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M20.5 5V3h-3.9L15.7.25 9.55 3H5C3.35 3 2 4.35 2 6v13c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V5h-1.5zm-4.8 0H8.75l6.05-2.75.9 2.75zm4.8 9.5H16c-.55 0-1-.45-1-1s.45-1 1-1h4.5v2zM16 11c-1.4 0-2.5 1.1-2.5 2.5S14.6 16 16 16h4.5v3c0 .85-.65 1.5-1.5 1.5H5c-.85 0-1.5-.65-1.5-1.5V6.5h17V11H16z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ContentWallet.style = iconCss;

exports.scale_icon_content_wallet = ContentWallet;
