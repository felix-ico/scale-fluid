import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherMoonClear = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M15.969 17.442c-.649-.252-3.322-1.348-4.553-4.569-1.531-4.01.61-7.204 1.754-8.37l.031-.029a7.877 7.877 0 012.181-1.556l-.006-.001A9.404 9.404 0 004.32 8.968a9.368 9.368 0 00-.218 5.499 9.398 9.398 0 004.22 5.649 9.339 9.339 0 006.245 1.271 9.327 9.327 0 006.14-3.636 7.93 7.93 0 01-4.739-.31z", "fill-rule": "nonzero" }))) : (h("g", null, h("path", { d: "M15.969 17.442c-.649-.252-3.322-1.348-4.553-4.569-1.531-4.01.61-7.204 1.754-8.37l.031-.029a7.877 7.877 0 012.181-1.556l-.006-.001A9.404 9.404 0 004.32 8.968a9.368 9.368 0 00-.218 5.499 9.398 9.398 0 004.22 5.649 9.339 9.339 0 006.245 1.271 9.327 9.327 0 006.14-3.636 7.93 7.93 0 01-4.739-.31z", "fill-rule": "nonzero" })))))));
  }
  get hostElement() { return getElement(this); }
};
WeatherMoonClear.style = iconCss;

export { WeatherMoonClear as scale_icon_weather_moon_clear };
