'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionMenu = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M14.335 16.055a1.25 1.25 0 010 2.5H4.75a1.25 1.25 0 110-2.5zM19.25 10.5a1.25 1.25 0 110 2.5H4.75a1.25 1.25 0 010-2.5zm0-5.5a1.25 1.25 0 110 2.5H4.75a1.25 1.25 0 110-2.5z" }))) : (index.h("g", null, index.h("path", { d: "M14.75 16.5c.4 0 .75.35.75.75s-.35.75-.75.75H4.25c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm5-5.5c.4 0 .75.35.75.75s-.35.75-.75.75H4.25c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm0-5.5c.4 0 .75.35.75.75s-.35.75-.75.75H4.25c-.4 0-.75-.35-.75-.75s.35-.75.75-.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ActionMenu.style = iconCss;

exports.scale_icon_action_menu = ActionMenu;
