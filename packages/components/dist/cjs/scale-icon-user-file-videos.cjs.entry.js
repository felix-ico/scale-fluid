'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileVideos = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M21 17.5L15.5 23v-4a1.5 1.5 0 011.5-1.5zM21 1v15.5h-4a2.5 2.5 0 00-2.5 2.5v4H6a3 3 0 01-3-3V1zM9.5 8.25v7.5L15.24 12z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M21 1v17l-5 5H6c-1.65 0-3-1.35-3-3V1zm-1.5 1.5h-15V20c0 .85.65 1.5 1.5 1.5h9v-3c0-.85.65-1.5 1.5-1.5h3zm-10 5.75L15.25 12 9.5 15.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
UserFileVideos.style = iconCss;

exports.scale_icon_user_file_videos = UserFileVideos;
