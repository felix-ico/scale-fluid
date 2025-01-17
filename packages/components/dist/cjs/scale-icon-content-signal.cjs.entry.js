'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentSignal = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12 10a2 2 0 01.75 3.85V22a.75.75 0 11-1.5 0v-8.15A2 2 0 0112 10zM3.65 3.65l1.5 1.5v.01a9.695 9.695 0 000 13.7l-1.5 1.5c-4.604-4.619-4.604-12.091 0-16.71zm16.705-.005c4.597 4.618 4.597 12.082 0 16.7l-1.5-1.5a9.695 9.695 0 000-13.7zM6.5 6.5L8 8a5.685 5.685 0 000 8.05l-1.5 1.5a7.825 7.825 0 010-11.05zm11.025 0a7.825 7.825 0 01-.025 11L16 16a5.685 5.685 0 00.025-8z" }))) : (index.h("g", null, index.h("path", { d: "M11.755 10.04c1.078 0 1.96.882 1.96 1.96 0 .833-.49 1.518-1.225 1.812v7.984a.753.753 0 01-.735.735.753.753 0 01-.735-.735v-7.984A1.922 1.922 0 019.796 12c0-1.078.882-1.96 1.96-1.96zM3.771 4.017L4.85 5.094c-3.82 3.82-3.82 9.992-.049 13.812l-1.029 1.029c-4.408-4.36-4.408-11.51 0-15.919zm15.968 0c4.359 4.408 4.359 11.56 0 15.919l-1.029-1.029c3.82-3.82 3.82-10.04 0-13.861zM6.563 6.808l1.029 1.029A5.813 5.813 0 005.878 12c0 1.567.636 3.037 1.714 4.163l-1.029 1.029A7.34 7.34 0 014.408 12c0-1.96.784-3.82 2.155-5.192zm10.384 0A7.34 7.34 0 0119.102 12a7.34 7.34 0 01-2.155 5.192l-1.029-1.029A5.813 5.813 0 0017.633 12a5.813 5.813 0 00-1.715-4.163z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ContentSignal.style = iconCss;

exports.scale_icon_content_signal = ContentSignal;
