'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentLock = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M18.5 9.5v-2a6.5 6.5 0 10-13 0v2H3V19a3 3 0 003 3h12a3 3 0 003-3V9.5h-2.5zM13 16.11V18h-2v-1.89a1.5 1.5 0 112 0zm4-6.61H7v-2a5 5 0 0110 0v2z" }))) : (index.h("g", null, index.h("path", { d: "M12 1c3.6 0 6.5 2.9 6.5 6.5v2H21V19c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3V9.5h2.5v-2C5.5 3.9 8.4 1 12 1zm7.5 10h-15v8c0 .85.65 1.5 1.5 1.5h12c.85 0 1.5-.65 1.5-1.5zM12 13.5c.85 0 1.5.65 1.5 1.5 0 .45-.2.85-.5 1.1V18h-2v-1.9c-.3-.25-.5-.65-.5-1.1 0-.85.65-1.5 1.5-1.5zm0-11c-2.75 0-5 2.25-5 5v2h10v-2c0-2.75-2.25-5-5-5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ContentLock.style = iconCss;

exports.scale_icon_content_lock = ContentLock;