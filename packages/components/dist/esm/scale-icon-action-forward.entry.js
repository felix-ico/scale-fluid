import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionForward = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M22.75 6.75L16 2.33V5.5h-1.84a8.67 8.67 0 00-8.66 8.66v4.09a1.25 1.25 0 102.5 0v-4.09A6.17 6.17 0 0114.16 8H16v3.17z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M20.75 7.75L14 3.33V7h-1.84C7.66 7 4 10.66 4 15.16v4.09a.749.749 0 101.5 0v-4.09a6.664 6.664 0 016.66-6.66H14v3.67z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionForward.style = iconCss;

export { ActionForward as scale_icon_action_forward };
