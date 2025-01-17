'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeHome = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M12 5.11l7.75 7.75V19a2.245 2.245 0 01-2.25 2.25h-4.75v-4.5a.75.75 0 10-1.5 0v4.5H6.5A2.245 2.245 0 014.25 19v-6.14zm0-4.24l11.565 11.565-1.06 1.06L12 2.99 1.495 13.495l-1.06-1.06z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M19 12.1l1.5 1.5V19c0 1.65-1.35 3-3 3h-11c-1.65 0-3-1.35-3-3v-5.4L5 12.1V19c0 .85.65 1.5 1.5 1.5h4.75v-3.75c0-.4.35-.75.75-.75s.75.35.75.75v3.75h4.75c.85 0 1.5-.65 1.5-1.5zM12 .85l11.55 11.6-1.05 1.05L12 3 1.5 13.5.45 12.45z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
HomeHome.style = iconCss;

exports.scale_icon_home_home = HomeHome;
