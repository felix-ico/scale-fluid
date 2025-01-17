import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionRestart = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M19.67 3.43A11.5 11.5 0 00.56 10.81a11.575 11.575 0 004.27 10.16L3.5 23h6.675L7.5 16.87l-1.3 2A8.97 8.97 0 016 5.29a9 9 0 117.5 15.57 1.24 1.24 0 00-1 1.23 1.25 1.25 0 001.255 1.255c.07.005.14.005.21 0A11.5 11.5 0 0019.67 3.43z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M10.745 1.07c-5.09.565-9.175 4.695-9.69 9.79-.395 3.915 1.275 7.46 4.04 9.695l-1.59 2.435 6.675-.015-2.68-6.11-1.575 2.415A9.454 9.454 0 012.5 12c0-5.6 4.865-10.08 10.59-9.44 4.455.5 8.01 4.175 8.375 8.645.41 5.035-3.135 9.34-7.865 10.15-.35.06-.6.375-.6.735 0 .465.42.825.88.745C19.06 21.94 23 17.435 23 12 23 5.51 17.385.335 10.745 1.07z" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionRestart.style = iconCss;

export { ActionRestart as scale_icon_action_restart };
