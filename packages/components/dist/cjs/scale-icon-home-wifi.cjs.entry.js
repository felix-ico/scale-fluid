'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeWifi = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12 13.5a6.5 6.5 0 00-5.405 2.895l1.435 1.5a4.5 4.5 0 017.94 0l1.435-1.5A6.5 6.5 0 0012 13.5zM12 9a11 11 0 00-8.575 4.11l1.41 1.46a9 9 0 0114.33 0l1.41-1.46A11 11 0 0012 9zm0-4.5A15.46 15.46 0 00.285 9.855L1.68 11.3a13.5 13.5 0 0120.64 0l1.395-1.445A15.46 15.46 0 0012 4.5zM12 18a2 2 0 100 4 2 2 0 000-4z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12 17a2 2 0 110 4 2 2 0 010-4zm0-4.5c2.25 0 4.25 1.15 5.4 2.9l-1.45 1.5A4.435 4.435 0 0012 14.5c-1.7 0-3.2 1-3.95 2.4L6.6 15.4a6.458 6.458 0 015.4-2.9zM12 8c3.45 0 6.55 1.6 8.55 4.1l-1.4 1.45C17.5 11.4 14.95 10 12 10s-5.5 1.4-7.15 3.55l-1.4-1.45C5.45 9.6 8.55 8 12 8zm0-4.5c4.7 0 8.85 2.1 11.7 5.35l-1.4 1.45C19.85 7.35 16.15 5.5 12 5.5S4.15 7.35 1.7 10.3L.3 8.85C3.15 5.6 7.3 3.5 12 3.5z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
HomeWifi.style = iconCss;

exports.scale_icon_home_wifi = HomeWifi;
