'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceMediaReceiver = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M23.5 13v5a3 3 0 01-3 3h-17a3 3 0 01-3-3v-5h23zM19 16h-2v2h2v-2zm.175-11.53l1.06 1.06A11.42 11.42 0 0112.1 8.9a11.41 11.41 0 01-8.13-3.37l1.06-1.06A9.93 9.93 0 0012.1 7.4a9.935 9.935 0 007.075-2.93zm-2.83-2.83l1.06 1.06A7.44 7.44 0 0112.1 4.9a7.435 7.435 0 01-5.3-2.2l1.06-1.06A5.95 5.95 0 0012.1 3.4a5.96 5.96 0 004.245-1.76z" }))) : (index.h("g", null, index.h("path", { d: "M23.5 13v5c0 1.65-1.35 3-3 3h-17c-1.65 0-3-1.35-3-3v-5zM22 14.5H2V18c0 .85.65 1.5 1.5 1.5h17c.85 0 1.5-.65 1.5-1.5zM19 16v2h-2v-2zm.2-11.5l1.05 1.05C18.05 7.7 15.3 8.9 12.2 8.9s-6-1.2-8.15-3.35L5.1 4.5c1.85 1.9 4.4 2.95 7.05 2.95S17.3 6.4 19.2 4.5zm-2.85-2.85L17.4 2.7c-1.4 1.4-3.3 2.2-5.3 2.2s-3.9-.8-5.3-2.2l1.05-1.05A5.935 5.935 0 0012.1 3.4c1.6 0 3.1-.6 4.25-1.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
DeviceMediaReceiver.style = iconCss;

exports.scale_icon_device_media_receiver = DeviceMediaReceiver;
