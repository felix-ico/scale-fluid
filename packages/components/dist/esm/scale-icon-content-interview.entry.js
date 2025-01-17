import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentInterview = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M8 12l1.08 1.055-4.825 5.155a1.085 1.085 0 101.535 1.535l5.15-4.805L12 16l-5.185 4.84a2.57 2.57 0 01-1.765.695 2.595 2.595 0 01-1.21-.315l-2.135 2.135-1.06-1.06 2.135-2.11a2.575 2.575 0 01.38-3zm4.915-8L20 11.085l-5.745 5.73-7.07-7.07zm.635 5.39l-1.08 1.08 1.06 1.06 1.08-1.08zm3.968-7.765a4 4 0 013.807 1.05 4 4 0 01-1.66 6.68l-5-5a4 4 0 012.853-2.73z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M18.5 1.5a4.002 4.002 0 012.825 6.83A3.987 3.987 0 0118.5 9.5h-.105l1.59 1.59-5.73 5.73-1.52-1.52-5.925 5.54a2.569 2.569 0 01-1.765.695c-.42 0-.83-.115-1.21-.315L1.7 23.355l-1.06-1.06 2.135-2.135c-.505-.95-.39-2.15.385-2.975l5.545-5.92-1.52-1.52 5.73-5.735 1.59 1.59a3.97 3.97 0 011.165-2.93A3.998 3.998 0 0118.5 1.5zM9.765 12.325L4.26 18.21c-.4.43-.39 1.095.025 1.51a1.074 1.074 0 001.505.025l5.89-5.505zm3.15-6.19l-3.61 3.61 4.95 4.95 3.61-3.61zm.635 2.195l2.12 2.12-1.06 1.06-.53-.53-1.06 1.065-1.065-1.065 1.065-1.06-.535-.53z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ContentInterview.style = iconCss;

export { ContentInterview as scale_icon_content_interview };
