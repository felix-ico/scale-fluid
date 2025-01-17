import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceTvAndMobile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M21.5 9.5a2 2 0 012 2v10a2 2 0 01-2 2H17a2 2 0 01-2-2v-10a2 2 0 012-2zM18.09 11H17a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h4.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-1.09v1.035h-2.32V11zm1.16 9a.75.75 0 110 1.5.75.75 0 010-1.5zM14 17v1.5H5V17h9zM22.5.5v8.22a3 3 0 00-1-.175H17a3 3 0 00-3 3V16H3.5a3 3 0 01-3-3V.5h22zM10 5.96v4.58l3.5-2.29L10 5.96z" }))) : (h("g", null, h("path", { d: "M21.5 9.5c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H17c-1.1 0-2-.9-2-2v-10c0-1.1.9-2 2-2zM18 11h-1c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h4.5c.3 0 .5-.2.5-.5v-10c0-.3-.2-.5-.5-.5h-1v1H18zm1.25 9a.75.75 0 110 1.5.75.75 0 010-1.5zM22.5.5v7.65c-.3-.1-.65-.15-1-.15H21V2H2v11c0 .85.65 1.5 1.5 1.5h10v4H5V17h2.498c.278-.003.884-.059 1.402-1H3.5c-1.65 0-3-1.35-3-3V.5zM9 4.65l5.5 3.6-5.5 3.6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
DeviceTvAndMobile.style = iconCss;

export { DeviceTvAndMobile as scale_icon_device_tv_and_mobile };
