'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentDigitalMedia = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M5.355 11.5a8.76 8.76 0 007.895 5h.25v5.835a1.085 1.085 0 01-1.85.77L9.55 21H2.355A1.855 1.855 0 01.5 19.145V11.5zM19.5 10.06l3.995 2.345v1.83l-2.5-.625v6.255c0 2.095-1.59 2.415-2.46 2.345-1.35-.11-2.43-1.055-2.415-2.155s1.12-1.92 2.47-1.83c.313.02.62.091.91.21zM8.524 2.259a7.245 7.245 0 0111.881 6.596l-.145-.085L18 7.445v5.775A7.245 7.245 0 118.524 2.259zM11.5 5.17v5.33l4.615-2.665z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M5.355 11.5c.255.53.56 1.035.91 1.5H2v6.145c0 .195.16.355.355.355h7.815L12 21.33V16.4c.41.06.825.1 1.255.105.085 0 .165-.015.25-.015v5.85a1.081 1.081 0 01-1.85.765L9.55 21H2.355A1.854 1.854 0 01.5 19.145V11.5zM19.5 10.06l4 2.345v1.83l-2.51-.635v6.255c0 2.1-1.59 2.42-2.46 2.35-1.345-.11-2.425-1.055-2.41-2.155.02-1.1 1.12-1.92 2.47-1.83.32.025.63.1.91.21v-8.37zM13.25.5a7.249 7.249 0 017.25 7.25c0 .375-.04.745-.095 1.105l-1.42-.835c.005-.09.015-.18.015-.27C19 4.58 16.42 2 13.25 2S7.5 4.58 7.5 7.75s2.58 5.75 5.75 5.75c1.97 0 3.715-1 4.75-2.515v2.235A7.224 7.224 0 0113.25 15 7.249 7.249 0 016 7.75 7.249 7.249 0 0113.25.5zM11.5 5.17l4.615 2.665L11.5 10.5V5.17z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ContentDigitalMedia.style = iconCss;

exports.scale_icon_content_digital_media = ContentDigitalMedia;
