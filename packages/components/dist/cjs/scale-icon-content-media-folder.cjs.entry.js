'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentMediaFolder = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M7.5 2.5a3.755 3.755 0 012.74 1.18l.43.46c.216.228.516.358.83.36H23V19a3 3 0 01-3 3H4a3 3 0 01-3-3V2.5h6.5zm2 6.89v7.5l5.73-3.75L9.5 9.39z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M7.5 2.5c1.05 0 2 .45 2.7 1.2l.45.45c.25.2.55.35.85.35H23V19c0 1.65-1.35 3-3 3H4c-1.65 0-3-1.35-3-3V2.5zm0 1.5h-5v15c0 .85.65 1.5 1.5 1.5h16c.85 0 1.5-.65 1.5-1.5V6h-10c-.7 0-1.4-.3-1.9-.85l-.45-.45C8.7 4.25 8.1 4 7.5 4zm2 5.4l5.75 3.75L9.5 16.9V9.4z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ContentMediaFolder.style = iconCss;

exports.scale_icon_content_media_folder = ContentMediaFolder;
