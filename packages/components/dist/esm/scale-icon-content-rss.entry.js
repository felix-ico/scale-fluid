import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentRss = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zM7.22 18.5a1.725 1.725 0 110-3.45 1.725 1.725 0 010 3.45zm6.085-.5H11.76c.11-.408.167-.828.17-1.25A4.755 4.755 0 007.18 12a4.6 4.6 0 00-1.18.155v-1.54a6.13 6.13 0 011.18-.115 6.26 6.26 0 016.125 7.5zm4.545 0h-1.5a9.37 9.37 0 00.095-1.25A9.26 9.26 0 007.18 7.5 9.23 9.23 0 006 7.585v-1.5c.391-.051.785-.08 1.18-.085 5.935.006 10.744 4.815 10.75 10.75a10.29 10.29 0 01-.08 1.25z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M19 2c1.655 0 3 1.345 3 3v14c0 1.655-1.345 3-3 3H5c-1.655 0-3-1.345-3-3V5c0-1.655 1.345-3 3-3zm0 1.5H5c-.825 0-1.5.675-1.5 1.5v14c0 .825.675 1.5 1.5 1.5h14c.825 0 1.5-.675 1.5-1.5V5c0-.825-.675-1.5-1.5-1.5zM7.22 15.06a1.72 1.72 0 110 3.44 1.72 1.72 0 010-3.44zm-.04-4.56a6.259 6.259 0 016.125 7.5H11.76c.105-.4.17-.815.17-1.25 0-2.62-2.13-4.75-4.75-4.75-.41 0-.8.06-1.18.155v-1.54c.38-.075.775-.115 1.18-.115zm0-4.5c5.93 0 10.75 4.82 10.75 10.75 0 .425-.03.84-.08 1.25h-1.515c.055-.41.095-.825.095-1.25 0-5.1-4.15-9.25-9.25-9.25-.4 0-.79.035-1.18.085V6.07c.39-.045.78-.07 1.18-.07z" })))))));
  }
  get hostElement() { return getElement(this); }
};
ContentRss.style = iconCss;

export { ContentRss as scale_icon_content_rss };
