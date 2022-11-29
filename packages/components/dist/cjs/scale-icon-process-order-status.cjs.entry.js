'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ProcessOrderStatus = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M17.25.498A3.25 3.25 0 0118 6.91v2.73a2.235 2.235 0 010 4.22v2.73a3.25 3.25 0 01-.75 6.41l-.182-.006a3.25 3.25 0 01-.568-6.404v-2.73a2.235 2.235 0 010-4.22V6.91a3.25 3.25 0 01.75-6.412zM7.5 8.15l5.5 3.6-5.5 3.6V13H2a1.25 1.25 0 010-2.5h5.5V8.15z" }))) : (index.h("g", null, index.h("path", { d: "M17.25.5c1.8 0 3.25 1.45 3.25 3.25 0 1.55-1.05 2.8-2.5 3.15v2.75c.95.35 1.5 1.2 1.5 2.1s-.55 1.75-1.5 2.1v2.75c1.45.35 2.5 1.6 2.5 3.15 0 1.8-1.45 3.25-3.25 3.25S14 21.55 14 19.75c0-1.55 1.05-2.8 2.5-3.15v-2.75c-.95-.35-1.5-1.2-1.5-2.1s.55-1.75 1.5-2.1V6.9C15.05 6.55 14 5.3 14 3.75 14 1.95 15.45.5 17.25.5zm0 17.5c-.95 0-1.75.8-1.75 1.75s.8 1.75 1.75 1.75S19 20.7 19 19.75 18.2 18 17.25 18zM7.5 8.15l5.5 3.6-5.5 3.6V12.5H2c-.4 0-.75-.35-.75-.75S1.6 11 2 11h5.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ProcessOrderStatus.style = iconCss;

exports.scale_icon_process_order_status = ProcessOrderStatus;