'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeInternetAtHome = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M12 .87L.435 12.435 1.5 13.5 12 3l10.5 10.5 1.06-1.06zm-7.75 12V19a2.25 2.25 0 002.25 2.25h11A2.245 2.245 0 0019.75 19v-6.14L12 5.11zM12 18.5a.875.875 0 110-1.75.875.875 0 010 1.75zm2-1.735a2.185 2.185 0 00-4 0l-1.025-.88a3.5 3.5 0 016.07 0zm3.03-2.61l-1 .865a4.805 4.805 0 00-8.08 0l-1-.865a6.11 6.11 0 0110.08 0z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M19 12.1l1.5 1.5V19c0 1.65-1.35 3-3 3h-11c-1.65 0-3-1.35-3-3v-5.4L5 12.1V19c0 .85.65 1.5 1.5 1.5h11c.85 0 1.5-.65 1.5-1.5zm-7 3.65a.9.9 0 110 1.8.9.9 0 010-1.8zm-.05-2.65c1.3 0 2.45.7 3.05 1.75l-1 .9c-.3-.75-1.1-1.3-2.1-1.35-.9 0-1.65.55-2 1.35l-1-.9c.6-1.05 1.75-1.75 3.05-1.75zm.05-2.6c2.1 0 3.95 1.05 5.05 2.65l-1 .85c-.85-1.3-2.35-2.2-4.05-2.2s-3.2.85-4.05 2.2l-1-.85c1.1-1.6 2.95-2.65 5.05-2.65zm0-9.65l11.55 11.6-1.05 1.05L12 3 1.5 13.5.45 12.45z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
HomeInternetAtHome.style = iconCss;

exports.scale_icon_home_internet_at_home = HomeInternetAtHome;
