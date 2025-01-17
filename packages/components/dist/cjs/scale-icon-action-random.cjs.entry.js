'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionRandom = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M2.674 4.163c1.949.003 3.78.93 4.937 2.498l6.858 9.257a3.678 3.678 0 002.938 1.47h.715v-2.302l5.388 3.526-5.388 3.527v-2.302h-.715a6.147 6.147 0 01-4.937-2.498L5.613 8.082a3.678 3.678 0 00-2.939-1.47h-.98a1.224 1.224 0 010-2.449zm5.246 8.66l1.528 2.057-1.837 2.478a6.147 6.147 0 01-4.922 2.479h-.98a1.224 1.224 0 110-2.45h.98a3.678 3.678 0 002.939-1.469l2.292-3.095zM18.122 1.86l5.388 3.527-5.388 3.526V6.612h-.73a3.678 3.678 0 00-2.938 1.47L12.2 11.177 10.673 9.12l1.836-2.478a6.147 6.147 0 014.898-2.479h.715V1.861z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M2.23 4.5c1.815 0 3.54.87 4.625 2.33l7 9.45A4.277 4.277 0 0017.27 18H18v-2.85l5.5 3.6-5.5 3.6V19.5h-.735c-1.815 0-3.54-.87-4.62-2.33l-7-9.45A4.277 4.277 0 002.23 6h-.98a.749.749 0 110-1.5zm5.65 8.76l.935 1.26-1.965 2.65a5.766 5.766 0 01-4.62 2.33h-.98a.749.749 0 110-1.5h.98a4.27 4.27 0 003.415-1.72l2.235-3.02zM18 1.65l5.5 3.6-5.5 3.6V6h-.73c-1.34 0-2.615.645-3.415 1.72l-2.235 3.02-.935-1.26 1.965-2.65a5.766 5.766 0 014.62-2.33H18V1.65z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ActionRandom.style = iconCss;

exports.scale_icon_action_random = ActionRandom;
