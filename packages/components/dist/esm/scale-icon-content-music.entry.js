import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentMusic = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M7.5 4.89v12.06a4.205 4.205 0 00-1.885-.695c-1.89-.22-3.44.88-3.465 2.455s1.5 3.03 3.385 3.25S9 21.075 9 19.5V8.11l10.5-2.19v8.53a4.205 4.205 0 00-1.885-.695c-1.89-.22-3.44.88-3.465 2.455s1.5 3.03 3.385 3.25S21 18.575 21 17V2.08z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M7.5 4.89v12.06a4.205 4.205 0 00-1.885-.695c-1.89-.215-3.44.885-3.465 2.46-.02 1.575 1.495 3.03 3.385 3.245C7.43 22.175 9 21.075 9 19.5V8.11l10.5-2.19v8.53a4.205 4.205 0 00-1.885-.695c-1.89-.215-3.44.885-3.465 2.46-.02 1.575 1.495 3.03 3.385 3.245C19.43 19.675 21 18.575 21 17V2.08z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ContentMusic.style = iconCss;

export { ContentMusic as scale_icon_content_music };
