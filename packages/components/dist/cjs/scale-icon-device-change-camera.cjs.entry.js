'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceChangeCamera = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M13.777 1.154l.103.011A11 11 0 0123 12a10.965 10.965 0 01-4.1 8.555L20.5 23h-6.685l2.685-6.13 1.57 2.44a9.5 9.5 0 00-4.46-16.645.762.762 0 01.27-1.5zM10.185 1L7.5 7.13 5.93 4.715a9.5 9.5 0 004.46 16.645l-.015-.025a.762.762 0 01-.27 1.5 11 11 0 01-5-19.385L3.5 1h6.685zM14.5 9v1.765L15.825 9.5h.675V14h-.675L14.5 12.735V13a1.5 1.5 0 01-1.5 1.5H9.5A1.5 1.5 0 018 13V9h6.5z" }))) : (index.h("g", null, index.h("path", { d: "M13.794 1.141l.106.009C19.05 2.1 23 6.6 23 12c0 3.45-1.6 6.55-4.1 8.6l1.6 2.4h-6.7l2.7-6.1 1.55 2.4c2.1-1.75 3.45-4.35 3.45-7.3 0-4.65-3.4-8.55-7.9-9.4-.45-.05-.75-.55-.55-1 .1-.35.5-.5.85-.45zM10.2 1L7.55 7.1l-1.6-2.4C3.85 6.45 2.5 9.05 2.5 12c0 4.65 3.4 8.55 7.9 9.35.45.05.75.55.55 1.05-.1.35-.5.5-.85.45C4.95 21.9 1 17.4 1 12c0-3.45 1.6-6.55 4.1-8.55L3.5 1zm4.3 8v1.75l1.35-1.25h.65V14h-.65l-1.35-1.25V13c0 .85-.65 1.5-1.5 1.5H9.5c-.85 0-1.5-.65-1.5-1.5V9z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
DeviceChangeCamera.style = iconCss;

exports.scale_icon_device_change_camera = DeviceChangeCamera;
