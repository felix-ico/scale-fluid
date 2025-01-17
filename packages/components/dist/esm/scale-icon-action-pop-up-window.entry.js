import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionPopUpWindow = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M23.5 10v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9h15zM22 13H10v6a1.5 1.5 0 001.5 1.5h9A1.5 1.5 0 0022 19v-6zM18.5 2v6.5H7v9H3.5a3 3 0 01-3-3V2h18zm-16 .875a.625.625 0 100 1.25.625.625 0 000-1.25zm2 0a.625.625 0 100 1.25.625.625 0 000-1.25zm2 0a.625.625 0 100 1.25.625.625 0 000-1.25z" }))) : (h("g", null, h("path", { d: "M23.5 10v9c0 1.65-1.35 3-3 3h-9c-1.65 0-3-1.35-3-3v-9zM22 13H10v6c0 .85.65 1.5 1.5 1.5h9c.85 0 1.5-.65 1.5-1.5zM18.5 2v6.5H17V5H2v9.5c0 .85.65 1.5 1.5 1.5H7v1.5H3.5c-1.65 0-3-1.35-3-3V2zm-12 .9c-.35 0-.6.25-.6.6s.25.65.6.65.6-.35.6-.65-.25-.6-.6-.6zm-2 0c-.35 0-.6.25-.6.6s.25.65.6.65.6-.35.6-.65-.25-.6-.6-.6zm-2 0c-.35 0-.6.25-.6.6s.25.65.6.65.6-.35.6-.65-.25-.6-.6-.6z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionPopUpWindow.style = iconCss;

export { ActionPopUpWindow as scale_icon_action_pop_up_window };
