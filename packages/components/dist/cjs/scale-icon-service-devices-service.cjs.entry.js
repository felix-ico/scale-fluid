'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ServiceDevicesService = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M6.84 14.95a5.04 5.04 0 012.66-.295l4.625.735a1.435 1.435 0 011.185 1.685 1 1 0 01-.05.175h.1l5.71-1.135a1.36 1.36 0 011.5.71 1.42 1.42 0 01-.65 1.945l-6.53 3.095a7 7 0 01-4.6.5l-3.06-.735a16.9 16.9 0 00-3-.44L1.285 21v-3.815zM13.18 0l.32 1.635a.59.59 0 00.895.365l1.365-.93 1.685 1.67-.945 1.365a.59.59 0 00.37.895l1.63.32V7.7l-1.635.3a.59.59 0 00-.365.895l.93 1.38-1.67 1.67L14.395 11a.59.59 0 00-.915.385l-.3 1.63h-2.36l-.3-1.63A.59.59 0 009.605 11l-1.38.93-1.67-1.67.945-1.365a.59.59 0 00-.37-.935l-1.63-.3V5.3L7.13 5a.59.59 0 00.37-.895L6.57 2.74l1.67-1.67L9.605 2a.59.59 0 00.895-.37L10.82 0h2.36zM12 4.5a2 2 0 100 4 2 2 0 000-4z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M6.6 14.25c.95-.4 2-.5 3.05-.35l4.6.75c.6.1 1.1.4 1.45.9.15.25.3.5.35.8 1.25-.2 3.55-.7 4.9-.95.95-.2 1.85.25 2.3 1.1.25.5.35 1.15.15 1.7-.2.55-.6 1-1.15 1.25l-6.55 3.1c-1.05.5-2.15.75-3.3.75-.6 0-1.2-.05-1.8-.2l-3.05-.75c-.9-.2-1.9-.35-2.85-.4L.5 21.7v-5zm2.8 1.15c-.75-.1-1.55-.05-2.25.25L2 17.7v2.55l2.75.2c1.05.05 2.1.2 3.15.45l3.05.75c1.35.3 2.85.15 4.1-.45l6.55-3.1c.35-.15.5-.6.3-.95-.1-.2-.4-.35-.65-.3-1.55.35-4.55.9-5.45 1.1-.4.65-1.1 1.05-1.9 1.05H8.55v-1.5h5.35c.35 0 .6-.25.65-.55.1-.35-.15-.75-.55-.8zM13.2 0l.3 1.6c.05.45.55.65.9.4l1.35-.9 1.65 1.65-.95 1.35c-.2.35 0 .8.4.9l1.7.35V7.7L16.9 8c-.45.05-.65.55-.4.9l.8 1.35-1.65 1.65-1.35-.95c-.35-.2-.8 0-.9.4L13.1 13h-2.35l-.3-1.65a.567.567 0 00-.9-.4l-1.35.95-1.65-1.65.95-1.35c.25-.35.05-.85-.35-.95l-1.65-.3V5.3L7.1 5c.45-.05.65-.55.4-.9l-.9-1.35L8.25 1.1l1.35.95c.35.2.8 0 .9-.4L10.85 0h2.35zM12 4.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ServiceDevicesService.style = iconCss;

exports.scale_icon_service_devices_service = ServiceDevicesService;
