'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentShop = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M20.25 7.75H16.5V5.5a4.5 4.5 0 10-9 0v2.25H3.75l-.835 12.095A2.25 2.25 0 005.16 22.25h13.68a2.25 2.25 0 002.245-2.405L20.25 7.75zM9 5.5a3 3 0 116 0v2.25H9V5.5zm-.75 6.25a1 1 0 110-2 1 1 0 010 2zm7.5 0a1 1 0 110-2 1 1 0 010 2z" }))) : (index.h("g", null, index.h("path", { d: "M12 1c2.5 0 4.5 2 4.5 4.5V7h4.45l.9 12.8c.05.8-.25 1.65-.8 2.25s-1.35.95-2.2.95H5.15c-.85 0-1.65-.35-2.2-.95s-.85-1.4-.8-2.25L3.05 7H7.5V5.5C7.5 3 9.5 1 12 1zm7.55 7.5H4.45l-.8 11.35c-.05.45.1.8.4 1.15s.7.5 1.1.5h13.7c.4 0 .8-.2 1.1-.5.25-.3.4-.7.4-1.1zM8.25 9.75a1 1 0 110 2 1 1 0 010-2zm7.5 0a1 1 0 110 2 1 1 0 010-2zM12 2.5c-1.65 0-3 1.35-3 3V7h6V5.5c0-1.65-1.35-3-3-3z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ContentShop.style = iconCss;

exports.scale_icon_content_shop = ContentShop;
