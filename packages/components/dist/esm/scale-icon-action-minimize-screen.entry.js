import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionMinimizeScreen = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M11.245 12.755l-1.76 8.43-2.45-2.45L2.88 22.89a1.252 1.252 0 11-1.77-1.77l4.155-4.155-2.45-2.465zM22.005.743c.332 0 .65.132.885.367a1.25 1.25 0 010 1.785L18.735 7.05l2.45 2.45-8.43 1.745 1.745-8.43 2.465 2.45L21.12 1.11a1.25 1.25 0 01.885-.367z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M11.245 12.755l-1.76 8.43L6.68 18.38l-4.155 4.155a.754.754 0 01-.53.22.754.754 0 01-.53-.22.745.745 0 010-1.06L5.62 17.32l-2.805-2.805zm10.23-11.29a.745.745 0 011.06 0 .745.745 0 010 1.06L18.38 6.68l2.805 2.805-8.43 1.76 1.76-8.43L17.32 5.62z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionMinimizeScreen.style = iconCss;

export { ActionMinimizeScreen as scale_icon_action_minimize_screen };
