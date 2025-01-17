'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeIot = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M2.824 13.779a3.407 3.407 0 013.411-3.398l.97.038.287-.819a5.304 5.304 0 012.86-3.101V4a7.638 7.638 0 00-4.77 4.061 5.75 5.75 0 00.64 11.468H8.47v-2.353H6.22a3.402 3.402 0 01-3.397-3.397zm17.2-3.661A7.586 7.586 0 0014.588 4v2.494A5.256 5.256 0 0117.76 11.2l.033 1.078 1.082.06a2.433 2.433 0 01-.131 4.838h-6.038v2.353h6.038a4.786 4.786 0 001.28-9.411zm-8.73 9.61v-2.966l3.402-3.402c.119.032.24.05.363.052A1.412 1.412 0 1013.647 12c.003.122.02.244.052.362L9.882 16.18v3.548a1.412 1.412 0 101.412 0zm.47-15.926v4.142L7.13 12.579A1.412 1.412 0 108 13.882v-.16l5.176-5.176V3.84a1.412 1.412 0 10-1.411 0v-.038z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M15.25 10.5c.85 0 1.5.65 1.5 1.5 0 .95-.9 1.7-1.9 1.45l-3.6 3.6v3.15c.45.25.75.75.75 1.3 0 .85-.65 1.5-1.5 1.5S9 22.35 9 21.5c0-.55.3-1.05.75-1.3v-3.75l4.05-4.05c-.25-1 .5-1.9 1.45-1.9zm-.5-6.5c2.85.85 5 3.35 5.35 6.4 2.1.45 3.65 2.3 3.65 4.55 0 2.55-2.05 4.6-4.6 4.6h-6.4v-1.5h6.45c1.7 0 3.1-1.4 3.1-3.1 0-1.15-.6-2.1-1.5-2.65-.75-.45-1.35-.45-2.15-.5 0-.8 0-1.35-.25-2.2-.55-1.85-1.9-3.3-3.65-4zm-4.5 0v1.6c-1.4.55-2.5 1.55-3.2 2.9-.2.45-.3.75-.5 1.3.05 0-1.1-.15-2.15.25-1.55.6-2.65 2.1-2.65 3.85 0 2.25 1.85 4.1 4.1 4.1h2.4v1.5h-2.4c-3.1 0-5.6-2.5-5.6-5.6 0-3 2.35-5.45 5.25-5.65.9-2.05 2.65-3.6 4.75-4.25zM12.5.5c.85 0 1.5.65 1.5 1.5 0 .55-.3 1.05-.75 1.4v5l-5.5 5.5c.1.9-.65 1.65-1.5 1.65s-1.5-.65-1.5-1.5c0-1.1 1.05-1.8 2.05-1.4l4.95-4.95V3.3C11.3 3.05 11 2.55 11 2c0-.85.65-1.5 1.5-1.5z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
HomeIot.style = iconCss;

exports.scale_icon_home_iot = HomeIot;
