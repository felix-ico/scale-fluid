'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ServiceServices = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M18.535 3.09a8.405 8.405 0 00-14.745 7l1.34 6.525a2.715 2.715 0 00.775 5.2l4.04.42a2.155 2.155 0 10.155-1.5l-4.04-.415a1.215 1.215 0 01-.19-2.385l1.655-.34 1.775-.35a1.5 1.5 0 001.2-1.745l-.74-3.72A1.5 1.5 0 008 10.595l-1.5.29-.265-1.295a5.905 5.905 0 1111.565 0l-.265 1.295-1.47-.29A1.5 1.5 0 0014.3 11.77l-.735 3.73a1.5 1.5 0 001.18 1.765l1.76.35 2.12.435 1.63-7.945a8.39 8.39 0 00-1.72-7.015z" }))) : (index.h("g", null, index.h("path", { d: "M18.15 3.4C16.65 1.55 14.4.5 12 .5S7.4 1.55 5.9 3.4A7.844 7.844 0 004.3 10l1.35 6.45c-1.25.25-2.15 1.4-2.15 2.65 0 1.4 1.05 2.55 2.45 2.7l4.05.4c.25.95 1.05 1.6 2.1 1.6 1.2 0 2.15-.95 2.15-2.15s-.95-2.15-2.15-2.15c-.85 0-1.55.5-1.9 1.2l-4.05-.4c-.6-.05-1.1-.6-1.1-1.2 0-.55.4-1.05.95-1.2l3.4-.7c.8-.15 1.35-.95 1.2-1.75l-.75-3.7a1.52 1.52 0 00-1.75-1.2L6 11l-.25-1.3c-.4-1.9.1-3.85 1.3-5.35C8.3 2.85 10.1 2 12 2s3.75.85 4.95 2.35 1.7 3.45 1.3 5.35l-.2 1.3-1.95-.4c-.8-.15-1.6.35-1.75 1.2l-.8 3.7c-.15.8.35 1.6 1.2 1.75l3.4.7 1.6-7.95c.5-2.35-.1-4.75-1.6-6.6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ServiceServices.style = iconCss;

exports.scale_icon_service_services = ServiceServices;
