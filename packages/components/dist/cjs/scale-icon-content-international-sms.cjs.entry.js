'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentInternationalSms = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M9.551 5.388c.245 0 .49.039.735.039v6.818c0 .417.179.814.49 1.092v.069h.088a1.41 1.41 0 00.891.309 1.47 1.47 0 00.872-.31h.176v-.127l2.116-2.116c.182.737.302 1.487.358 2.244h.798a6.573 6.573 0 00-.93-2.474l.156-.156h2.528A9.076 9.076 0 119.55 5.388zM8.327 15.492H6.284c.1 1.429.53 2.815 1.254 4.05.22.351.485.67.789.951v-5zm4.496 0h-2.047v5.001c.98-.901 1.836-2.728 2.047-5zm-8.998 0h-.798a6.563 6.563 0 001.415 3.15 12.965 12.965 0 01-.617-3.15zm12.25 0h-.798a12.965 12.965 0 01-.617 3.15 6.563 6.563 0 001.415-3.15zM4.442 10.256a6.563 6.563 0 00-1.415 3.15h.798c.075-1.072.282-2.13.617-3.15zm3.885-1.851c-.98.901-1.837 2.728-2.048 5h2.048zM24 0v9.306h-9.306l-2.939 2.939V0H24zm-9.666 3.063l-.13.003a1.102 1.102 0 00-1.122 1.117.98.98 0 00.804 1.024l.416.122c.28.073.431.176.431.411 0 .236-.176.407-.49.407a.49.49 0 01-.529-.421h-.759a1.127 1.127 0 001.25 1.102A1.107 1.107 0 0015.418 5.7a1.078 1.078 0 00-.872-1.053l-.411-.112c-.201-.054-.368-.147-.368-.397a.392.392 0 01.436-.397.44.44 0 01.49.407h.7a1.097 1.097 0 00-1.19-1.083zm6.966.02a1.19 1.19 0 00-1.17 1.1.98.98 0 00.799 1.024l.416.122c.28.073.431.176.431.411 0 .236-.176.407-.49.407a.49.49 0 01-.524-.421h-.724a1.127 1.127 0 001.249 1.102h.014a1.107 1.107 0 001.23-1.127 1.073 1.073 0 00-.892-1.053l-.416-.112c-.201-.054-.367-.147-.367-.397a.392.392 0 01.435-.397.431.431 0 01.49.407h.72a1.19 1.19 0 00-1.2-1.067zm-4.647.061h-.656v3.6h.725V4.712h.034l.877 1.587h.235l.881-1.587h.035v2.032h.705l.005-3.6h-.666L17.76 5.138h-.034l-1.073-1.994z" }))) : (index.h("g", null, index.h("path", { d: "M7.1 5.75c1.55-.35 2.75-.2 2.9-.2V14h3.65l-.15-1.35 1.25-1.25c.2.8.35 1.7.4 2.6H17c-.1-1.1-.45-2.1-.95-3h1.65c.5 1.15.8 2.4.8 3.75 0 5.1-4.15 9.25-9.25 9.25S0 19.85 0 14.75c0-4.35 3-8 7.1-9zm6.5 9.75H10v6.85c1.85-.6 3.4-3.5 3.6-6.85zm-5.1 0H4.9c.2 3.35 1.75 6.25 3.6 6.85zm-5.1 0H1.55c.2 2.4 1.6 4.5 3.55 5.75-.95-1.5-1.6-3.5-1.7-5.75zm13.55 0H15.1c-.15 2.25-.75 4.25-1.7 5.75 1.95-1.25 3.35-3.35 3.55-5.75zM8.5 7.15c-1.85.6-3.4 3.5-3.6 6.85h3.6zm-3.4 1.1C3.15 9.5 1.75 11.6 1.55 14H3.4c.15-2.25.75-4.25 1.7-5.75zM24 0v9.5h-9.5l-3 3V0zm-9.9 3.2c-.7 0-1.2.45-1.2 1.15 0 .45.2.9.8 1.05l.4.1c.3.05.45.15.45.4 0 .2-.2.4-.5.4s-.5-.15-.55-.45h-.8c.1.7.55 1.1 1.3 1.1.7 0 1.25-.4 1.2-1.1 0-.5-.35-.9-.9-1.05l-.4-.1c-.2-.05-.35-.15-.35-.4s.2-.4.45-.4c.3 0 .45.15.5.4h.8c-.05-.65-.45-1.1-1.2-1.1zm7.2 0c-.7 0-1.2.45-1.2 1.15 0 .45.2.9.8 1.05l.4.1c.3.05.45.15.45.4 0 .2-.2.4-.5.4s-.5-.15-.55-.45h-.75c.1.7.55 1.1 1.3 1.1.7 0 1.25-.4 1.2-1.1 0-.5-.35-.9-.9-1.05l-.4-.1c-.2-.05-.35-.15-.35-.4s.2-.4.45-.4c.3 0 .45.15.5.4h.75c-.05-.65-.45-1.1-1.2-1.1zm-4.8 0h-.7v3.65h.75V4.8h.05l.9 1.6h.2l.9-1.6h.05v2.1h.8V3.2h-.7l-1.1 2.05h-.05z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
ContentInternationalSms.style = iconCss;

exports.scale_icon_content_international_sms = ContentInternationalSms;
