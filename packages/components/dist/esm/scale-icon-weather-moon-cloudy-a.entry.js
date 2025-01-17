import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherMoonCloudyA = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M10.1 8.381a5.577 5.577 0 015.242 3.639 4.246 4.246 0 012.258 3.744 4.242 4.242 0 01-4.024 4.23l-.212.006h-9.09A3.877 3.877 0 01.4 16.127c0-1.391.75-2.668 1.941-3.355a3.486 3.486 0 014.262-3.158A5.575 5.575 0 0110.1 8.381zm8.077-5.476a5.383 5.383 0 012.621-.03 4.55 4.55 0 003.058 8.515 5.374 5.374 0 01-2.934 1.969c-.913.24-1.83.23-2.685.015a5.421 5.421 0 00-1.938-2.184 6.749 6.749 0 00-2.137-2.675 5.404 5.404 0 014.015-5.61z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M10.1 8.381a5.577 5.577 0 015.242 3.639 4.246 4.246 0 012.258 3.744 4.242 4.242 0 01-4.025 4.23l-.211.006H4.273A3.877 3.877 0 01.4 16.127c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.1 8.381zm0 1.2a4.377 4.377 0 00-2.758.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166a2.677 2.677 0 00-1.585 2.44 2.676 2.676 0 002.504 2.668l.169.005h9.09a3.04 3.04 0 003.037-3.036 3.044 3.044 0 00-1.613-2.68l-.178-.088-.243-.11-.082-.253A4.381 4.381 0 0010.1 9.58zm8.076-6.675a5.38 5.38 0 012.622-.03 4.549 4.549 0 003.057 8.515 5.376 5.376 0 01-2.934 1.968c-.912.24-1.83.23-2.685.015a5.42 5.42 0 00-1.938-2.184 6.748 6.748 0 00-2.137-2.676 5.403 5.403 0 014.015-5.608z", "fill-rule": "nonzero" })))))));
  }
  get hostElement() { return getElement(this); }
};
WeatherMoonCloudyA.style = iconCss;

export { WeatherMoonCloudyA as scale_icon_weather_moon_cloudy_a };
