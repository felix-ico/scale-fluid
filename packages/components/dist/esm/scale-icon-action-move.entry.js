import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionMove = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M23.5 12L18 8.4v2.35h-4.75V6h2.35L12 .5 8.4 6h2.35v4.75H6V8.4L.5 12 6 15.6v-2.35h4.75V18H8.4l3.6 5.5 3.6-5.5h-2.35v-4.75H18v2.35z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M23.5 12L18 8.4v2.85h-5.25V6h2.85L12 .5 8.4 6h2.85v5.25H6V8.4L.5 12 6 15.6v-2.85h5.25V18H8.4l3.6 5.5 3.6-5.5h-2.85v-5.25H18v2.85z" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionMove.style = iconCss;

export { ActionMove as scale_icon_action_move };
