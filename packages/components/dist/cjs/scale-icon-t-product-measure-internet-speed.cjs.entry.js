'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const TProductMeasureInternetSpeed = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12 1.75a10.24 10.24 0 00-6.695 18h13.39A10.24 10.24 0 0012 1.75zM6 12H4.5a7.5 7.5 0 0113.8-4.055 2 2 0 00-.45.125l-1 .425A6 6 0 006 12zm13-1.605l-4.5 3.69a2.5 2.5 0 11-1.435-2.345l5.38-2.285a.555.555 0 01.555.94zm.5 1.535V12h-.09l.09-.07z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12 1c6.05 0 11 4.95 11 11 0 2.6-.95 5.1-2.6 7.1-.6.7-1.1 1.1-1.45 1.4H5c-.35-.3-.85-.7-1.45-1.45C1.9 17.05 1 14.6 1 12 1 5.95 5.95 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5 0 2.65 1.1 5.2 3.1 7h12.8c2-1.8 3.1-4.35 3.1-7 0-5.25-4.25-9.5-9.5-9.5zm6.45 7c.25-.15.55 0 .7.2l.03.081c.055.203-.005.488-.18.619l-4.5 3.7a2.487 2.487 0 01-2.5 2.4c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c.4 0 .75.1 1.05.3zM12 4.5c2.6 0 4.9 1.35 6.25 3.4l-1.4.6C15.75 7 14 6 12 6c-3.3 0-6 2.7-6 6H4.5c0-4.15 3.35-7.5 7.5-7.5z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
TProductMeasureInternetSpeed.style = iconCss;

exports.scale_icon_t_product_measure_internet_speed = TProductMeasureInternetSpeed;