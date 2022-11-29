'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceFixedLineServices = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M19.75 11.5a3 3 0 013 3V24H1.25v-9.5a3 3 0 013-3V13a1.5 1.5 0 00-1.5 1.5v8h18.5v-8a1.5 1.5 0 00-1.5-1.5zM15.25 0a3 3 0 013 3v15a3 3 0 01-3 3h-6.5a3 3 0 01-3-3V3a3 3 0 013-3zM12 15a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5-2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-5 0a.75.75 0 100 1.5.75.75 0 000-1.5zM12 10a.75.75 0 100 1.5.75.75 0 000-1.5zm2.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm-5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm5.75-5h-6.5v3.5h6.5V5z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M20 11.5c1.65 0 3 1.35 3 3V24H1.5v-9.5c0-1.65 1.35-3 3-3V13c-.85 0-1.5.65-1.5 1.5v8h18.5v-8c0-.85-.65-1.5-1.5-1.5zM15.5 0c1.65 0 3 1.35 3 3v15c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3V3c0-1.65 1.35-3 3-3zm0 1.5H9c-.85 0-1.5.65-1.5 1.5v15c0 .85.65 1.5 1.5 1.5h6.5c.85 0 1.5-.65 1.5-1.5V3c0-.85-.65-1.5-1.5-1.5zM14.75 15a.75.75 0 110 1.5.75.75 0 010-1.5zm-5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5-2.5a.75.75 0 110 1.5.75.75 0 010-1.5zm-5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zM9.75 10a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm2.5 0a.75.75 0 110 1.5.75.75 0 010-1.5zm.75-5v3.5H9V5h6.5z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
DeviceFixedLineServices.style = iconCss;

exports.scale_icon_device_fixed_line_services = DeviceFixedLineServices;
