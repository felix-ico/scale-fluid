'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionFilter = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12.25 16.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM8.19 18a4.205 4.205 0 000 2.5H2V18zM22 18v2.5h-5.685a4.295 4.295 0 000-2.5H22zM4.75 9.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM22 11v2.5H8.815a4.295 4.295 0 000-2.5H22zm-7.25-8.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM10.69 4a4.135 4.135 0 00-.19 1.25c-.001.424.063.846.19 1.25H2V4zM22 4v2.5h-3.185a4.315 4.315 0 000-2.5H22z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12.25 16.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm-4.18 2c-.045.245-.07.495-.07.75s.025.505.07.75H2v-1.5zm13.93 0V20h-5.57c.045-.245.07-.495.07-.75s-.025-.505-.07-.75H22zm-17.25-9a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm17.25 2V13H8.93c.045-.245.07-.495.07-.75s-.025-.505-.07-.75H22zm-7.25-9a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zm-4.18 2c-.045.245-.07.495-.07.75s.025.505.07.75H2V4.5zM22 4.5V6h-3.07c.045-.245.07-.495.07-.75s-.025-.505-.07-.75H22z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ActionFilter.style = iconCss;

exports.scale_icon_action_filter = ActionFilter;
