'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceDeviceTv = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M1 3.5V16a3 3 0 003 3h5.44l-.11.21A1.5 1.5 0 018 20H5.5v1.5h13V20H16a1.5 1.5 0 01-1.325-.79L14.56 19H20a3 3 0 003-3V3.5H1zm8.5 11.35v-7.2l5.5 3.6-5.5 3.6z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M23 3.5V16c0 1.65-1.35 3-3 3h-5.45l.2.2c.25.5.75.8 1.3.8h2.5v1.5h-13V20h2.5c.55 0 1.05-.3 1.3-.8l.1-.2H4c-1.65 0-3-1.35-3-3V3.5h22zM21.5 5h-19v11c0 .85.65 1.5 1.5 1.5h16c.85 0 1.5-.65 1.5-1.5V5zm-12 2.65l5.5 3.6-5.5 3.6v-7.2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
DeviceDeviceTv.style = iconCss;

exports.scale_icon_device_device_tv = DeviceDeviceTv;
