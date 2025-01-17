'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceMobileDevicesCombination = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M10 6a2.5 2.5 0 012.5 2.5v13A2.5 2.5 0 0110 24H4a2.5 2.5 0 01-2.5-2.5v-13A2.5 2.5 0 014 6zM7 19.75a1 1 0 100 2 1 1 0 000-2zM19.5 0a3 3 0 013 3v14.5a3 3 0 01-3 3H14V19h5.5a1.5 1.5 0 001.5-1.5V3a1.5 1.5 0 00-1.5-1.5H10A1.5 1.5 0 008.5 3v1.5H7V3a3 3 0 013-3zm-4.75 16a1 1 0 110 2 1 1 0 010-2zM8.5 7.5h-3V9h3V7.5z" }))) : (index.h("g", null, index.h("path", { d: "M10 6c1.4 0 2.5 1.1 2.5 2.5v13c0 1.4-1.1 2.5-2.5 2.5H4c-1.4 0-2.5-1.1-2.5-2.5v-13C1.5 7.1 2.6 6 4 6zM5.5 7.5H4c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-13c0-.55-.45-1-1-1H8.5V9h-3zM7 19.75a1 1 0 110 2 1 1 0 010-2zM19.5 0c1.65 0 3 1.35 3 3v14.5c0 1.65-1.35 3-3 3H14V19h5.5c.85 0 1.5-.65 1.5-1.5V3c0-.85-.65-1.5-1.5-1.5H10c-.85 0-1.5.65-1.5 1.5v1.5H7V3c0-1.65 1.35-3 3-3zm-4.75 16a1 1 0 110 2 1 1 0 010-2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
DeviceMobileDevicesCombination.style = iconCss;

exports.scale_icon_device_mobile_devices_combination = DeviceMobileDevicesCombination;
