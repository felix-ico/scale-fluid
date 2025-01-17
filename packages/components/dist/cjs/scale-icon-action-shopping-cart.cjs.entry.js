'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionShoppingCart = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M5.878 20.082a1.96 1.96 0 110 3.918 1.96 1.96 0 010-3.918zm14.693 0a1.96 1.96 0 110 3.918 1.96 1.96 0 010-3.918zM.943.537a.74.74 0 01.57.012l2.224.955a2.939 2.939 0 011.73 2.17h16.819l-.808 8.414a2.209 2.209 0 01-2.053 1.994l-12.891.832.127 1.386a1.47 1.47 0 001.47 1.333h13.175a.735.735 0 110 1.47H8.14a2.939 2.939 0 01-2.938-2.665L4.046 4.065a1.47 1.47 0 00-.902-1.17l-2.223-.98a.74.74 0 01-.387-.98.74.74 0 01.409-.398z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M5.5 20a2 2 0 110 4 2 2 0 010-4zm15 0a2 2 0 110 4 2 2 0 010-4zM.06.455A.755.755 0 011.045.06l2.27.975c.68.29 1.21.82 1.52 1.465h18.24l-.895 9.41a2.987 2.987 0 01-2.795 2.71l-13.145.85.065.67c.075.775.715 1.36 1.495 1.36h13.45a.749.749 0 110 1.5H7.8a2.98 2.98 0 01-2.985-2.715L3.63 3.655a1.505 1.505 0 00-.905-1.24L.455 1.44A.75.75 0 01.06.455zM21.43 4H5.17l.935 9.975 13.185-.85c.74-.05 1.325-.62 1.395-1.355L21.43 4z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ActionShoppingCart.style = iconCss;

exports.scale_icon_action_shopping_cart = ActionShoppingCart;
