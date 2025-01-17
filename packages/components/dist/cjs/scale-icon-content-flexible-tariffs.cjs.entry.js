'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentFlexibleTariffs = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M7.205 8.69L5.92 10.66l2.685 1.755A10.17 10.17 0 0112 16.08a10.175 10.175 0 013.395-3.66l2.685-1.755-1.285-1.97h6.57l-2.69 6.02-1.285-1.97-2.685 1.755a7.725 7.725 0 00-3.5 6.5v1.275a1.255 1.255 0 01-.205.7V23a1 1 0 01-.275.295H12.7a1.256 1.256 0 01-.62.205H12l-.14-.006a1.255 1.255 0 01-.915-.544.455.455 0 01-.045-.085 1.09 1.09 0 01-.16-.615V21l-.004-.28A7.725 7.725 0 007.24 14.5l-2.685-1.75-1.285 1.97L.635 8.69h6.57zM12 1l3.6 5.5h-2.35v6.25a1.25 1.25 0 01-2.5 0V6.5H8.4L12 1z" }))) : (index.h("g", null, index.h("path", { d: "M7.2 8.5l-1.55 2.4 2.7 1.75c1.65 1.1 2.9 2.6 3.65 4.4.7-1.75 2-3.3 3.65-4.4l2.7-1.75-1.55-2.4h6.65l-2.65 6-1.55-2.4-2.7 1.75c-2.35 1.55-3.75 4.1-3.75 6.9v1.45c0 .4-.35.75-.75.75l-.099-.007a.772.772 0 01-.651-.743v-1.45l-.005-.289c-.093-2.686-1.476-5.114-3.745-6.611l-2.7-1.75-1.55 2.4-2.65-6zM12 1l3.6 5.5h-2.85v6.55c0 .4-.35.75-.75.75s-.75-.35-.75-.75V6.5H8.4z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ContentFlexibleTariffs.style = iconCss;

exports.scale_icon_content_flexible_tariffs = ContentFlexibleTariffs;
