'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionBackspace = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M20.5 3.5h-12L1 12l7.5 8.5h12a3 3 0 003-3v-11a3 3 0 00-3-3zm-2 10.925a.745.745 0 010 1.075.75.75 0 01-1.06 0L15 13.06l-2.425 2.44a.75.75 0 01-1.075 0 .745.745 0 010-1.06L13.94 12 11.5 9.575A.76.76 0 0112.575 8.5L15 10.94l2.425-2.44A.76.76 0 0118.5 9.575L16.06 12l2.44 2.425z" }))) : (index.h("g", null, index.h("path", { d: "M20 3.5c1.65 0 3 1.35 3 3v11c0 1.65-1.35 3-3 3H8L.5 12 8 3.5zM20 5H8.7l-6.2 7 6.2 7H20c.85 0 1.5-.65 1.5-1.5v-11c0-.85-.65-1.5-1.5-1.5zm-8.95 3.5c.3-.3.75-.3 1.05 0l2.4 2.45 2.45-2.45c.3-.3.75-.3 1.05 0s.3.8-.05 1.1l-2.4 2.4 2.35 2.4c.3.3.3.75 0 1.05s-.75.3-1.05 0l-2.4-2.4-2.4 2.4c-.3.3-.75.3-1.05 0s-.3-.75 0-1.05l2.45-2.45-2.4-2.4c-.3-.3-.3-.75 0-1.05z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ActionBackspace.style = iconCss;

exports.scale_icon_action_backspace = ActionBackspace;
