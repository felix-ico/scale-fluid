import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionClose = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M13.77 12l4.415-4.42a1.25 1.25 0 10-1.765-1.765L12 10.23 7.58 5.815A1.25 1.25 0 105.815 7.58L10.23 12l-4.415 4.42a1.245 1.245 0 000 1.765c.232.237.549.37.88.37.332 0 .65-.134.885-.37L12 13.77l4.42 4.415c.234.236.553.37.885.37.331 0 .648-.133.88-.37a1.245 1.245 0 000-1.765L13.77 12z" }))) : (h("g", null, h("path", { d: "M13.05 12l4.75-4.75c.3-.3.3-.75 0-1.05s-.75-.3-1.05 0L12 10.95 7.25 6.2c-.3-.3-.75-.3-1.05 0s-.3.75 0 1.05L10.95 12 6.2 16.75c-.3.3-.3.75 0 1.05s.75.3 1.05 0L12 13.05l4.75 4.75c.3.3.75.3 1.05 0s.3-.75 0-1.05z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionClose.style = iconCss;

export { ActionClose as scale_icon_action_close };
