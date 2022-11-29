import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionAdd = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M19.5 10.75h-6.25V4.5a1.25 1.25 0 00-2.5 0v6.25H4.5a1.25 1.25 0 000 2.5h6.25v6.25a1.25 1.25 0 102.5 0v-6.25h6.25a1.25 1.25 0 100-2.5z" }))) : (h("g", null, h("path", { d: "M19.5 11.25h-6.75V4.5c0-.4-.35-.75-.75-.75s-.75.35-.75.75v6.75H4.5c-.4 0-.75.35-.75.75s.35.75.75.75h6.75v6.75c0 .4.35.75.75.75s.75-.35.75-.75v-6.75h6.75c.4 0 .75-.35.75-.75s-.35-.75-.75-.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionAdd.style = iconCss;

export { ActionAdd as scale_icon_action_add };