import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherMoonCloudyB = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M11.41 7.252a6.077 6.077 0 015.72 4.015 4.644 4.644 0 012.47 4.102c0 2.483-1.95 4.515-4.39 4.626L15 20H5C2.684 20 .8 18.104.8 15.772c0-1.53.826-2.932 2.134-3.678.112-1.992 1.757-3.577 3.764-3.577.295 0 .59.036.88.107a6.044 6.044 0 013.832-1.372zM18.66 3.68a3.83 3.83 0 011.867-.022 3.24 3.24 0 002.177 6.064 3.832 3.832 0 01-3.649 1.483 5.804 5.804 0 00-.967-.769 7.32 7.32 0 00-2.294-2.904A3.847 3.847 0 0118.66 3.68z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M11.41 7.252a6.077 6.077 0 015.719 4.015A4.644 4.644 0 0119.6 15.37c0 2.483-1.95 4.515-4.39 4.626L15 20H5C2.684 20 .8 18.104.8 15.772c0-1.53.826-2.932 2.134-3.678.111-1.992 1.757-3.577 3.763-3.577.295 0 .59.036.88.107a6.047 6.047 0 013.832-1.372zm0 1.2c-1.126 0-2.211.392-3.085 1.11l-.198.172-.263.24-.337-.116a2.542 2.542 0 00-.83-.14c-.94 0-1.764.512-2.212 1.275a2.696 2.696 0 00-.358 1.495l.027.352-.373.168A3.033 3.033 0 002 15.772c0 1.61 1.251 2.93 2.824 3.023L5 18.8h10c1.875 0 3.4-1.54 3.4-3.43a3.44 3.44 0 00-1.828-3.04l-.18-.087-.242-.11-.08-.255a4.883 4.883 0 00-4.66-3.426zm7.25-4.772a3.83 3.83 0 011.868-.022 3.239 3.239 0 002.177 6.064 3.829 3.829 0 01-3.65 1.483 5.807 5.807 0 00-.967-.769 7.317 7.317 0 00-2.294-2.904 3.847 3.847 0 012.867-3.852z", "fill-rule": "nonzero" })))))));
  }
  get hostElement() { return getElement(this); }
};
WeatherMoonCloudyB.style = iconCss;

export { WeatherMoonCloudyB as scale_icon_weather_moon_cloudy_b };
