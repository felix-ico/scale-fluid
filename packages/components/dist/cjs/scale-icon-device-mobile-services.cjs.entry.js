'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceMobileServices = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M11.5.5a3 3 0 013 3v1l-.165.855-.18 1-.845-.585-.685-.5-2.26 2.26-.59.595.475.685.57.855-1 .185L9 10v4l.83.2 1 .185-.58.84-.475.69 2.85 2.85.685-.5.845-.585.18 1 .165.82v1a3 3 0 01-3 3h-8a3 3 0 01-3-3v-17a3 3 0 013-3zm-4 17.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 .5a1 1 0 110 2 1 1 0 010-2zM17.685 5.5L18 7.135a.595.595 0 00.9.365l1.375-.93 1.67 1.67L21 9.605a.59.59 0 00.37.895l1.635.32v2.38l-1.635.3a.59.59 0 00-.37.895l.935 1.38-1.67 1.67L18.9 16.5a.595.595 0 00-.9.37l-.315 1.63H15.32l-.295-1.615a.595.595 0 00-.92-.385l-1.38.93-1.67-1.67.945-1.365a.59.59 0 00-.365-.935l-1.63-.3V10.8l1.63-.3A.59.59 0 0012 9.605l-.93-1.365 1.67-1.67 1.365.94a.59.59 0 00.92-.38l.295-1.63h2.365zM16.5 10a2 2 0 100 4 2 2 0 000-4zm-7-7.75h-4v1h4v-1z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M11.5.5c1.65 0 3 1.35 3 3v.75c-.5.15-1 .3-1.5.55V3.5c0-.85-.65-1.5-1.5-1.5h-2v1.5h-4V2h-2C2.65 2 2 2.65 2 3.5v17c0 .85.65 1.5 1.5 1.5h8c.85 0 1.5-.65 1.5-1.5v-1.3c.5.25 1 .4 1.5.55v.75c0 1.65-1.35 3-3 3h-8c-1.65 0-3-1.35-3-3v-17c0-1.65 1.35-3 3-3zm-4 18a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm10.2-13l.3 1.6c.05.45.55.65.9.4l1.35-.9 1.65 1.65-.95 1.35c-.2.35 0 .8.4.9l1.65.35v2.35l-1.65.3c-.4.05-.6.55-.35.9l.85 1.3-1.65 1.65-1.35-.95c-.35-.2-.8 0-.9.4l-.3 1.65H15.3L15 16.8a.567.567 0 00-.9-.4l-1.35.95-1.65-1.65.95-1.35c.2-.35 0-.8-.4-.9l-1.65-.3V10.8l1.65-.3c.45-.05.65-.55.4-.9l-.95-1.35 1.65-1.65 1.35.95c.35.2.8 0 .9-.4l.35-1.65h2.35zM16.5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
DeviceMobileServices.style = iconCss;

exports.scale_icon_device_mobile_services = DeviceMobileServices;
