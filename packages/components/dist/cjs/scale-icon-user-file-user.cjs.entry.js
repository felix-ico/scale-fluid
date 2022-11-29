'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileUser = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12 2.75A5.08 5.08 0 006.75 8c0 3.175 2.21 6.25 5.25 6.25s5.25-3.075 5.25-6.25A5.08 5.08 0 0012 2.75zM8.905 16.5H6.64a4.73 4.73 0 00-4.685 3.97L1.78 21.5h20.44l-.175-1.03a4.73 4.73 0 00-4.685-3.97h-2.265L12 19.595 8.905 16.5z" }))) : (index.h("g", null, index.h("path", { d: "M8.9 16.5l3.1 3.1 3.1-3.1h2.25c2.35 0 4.3 1.65 4.7 3.95l.2 1.05H1.8l.15-1.05c.4-2.3 2.35-3.95 4.7-3.95zM12 2c3.5 0 6 2.5 6 6 0 3.4-2.4 7-6 7s-6-3.6-6-7c0-3.5 2.5-6 6-6zm0 1.5C9.4 3.5 7.5 5.4 7.5 8c0 2.65 1.8 5.5 4.5 5.5s4.5-2.85 4.5-5.5c0-2.6-1.9-4.5-4.5-4.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
UserFileUser.style = iconCss;

exports.scale_icon_user_file_user = UserFileUser;
