import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionCopyPaste = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M17 7v12.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3V7H17zm5.5-5.5V14a3 3 0 01-3 3h-1v-1.5h1A1.5 1.5 0 0021 14V3H8.5v2.5H7v-4h15.5z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M17 7v12.5c0 1.655-1.345 3-3 3H4.5c-1.655 0-3-1.345-3-3V7H17zm-1.5 1.5H3v11c0 .825.675 1.5 1.5 1.5H14c.825 0 1.5-.675 1.5-1.5v-11zm7-7V14c0 1.655-1.345 3-3 3h-1v-1.5h1c.825 0 1.5-.675 1.5-1.5V3H8.5v2.5H7v-4h15.5z" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionCopyPaste.style = iconCss;

export { ActionCopyPaste as scale_icon_action_copy_paste };
