import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionSoundOn = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M13 3.5v17h-2l-4.5-4H5a3 3 0 01-3-3v-3a3 3 0 013-3h1.5l4.5-4zm6.7.8c4.252 4.253 4.252 11.147 0 15.4l-1.06-1.06a9.39 9.39 0 000-13.28zm-2.665 2.665l.025.025a7.12 7.12 0 010 10.07L16 16a5.625 5.625 0 000-7.975z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M13 3.5v17h-2l-4.5-4H5c-1.655 0-3-1.345-3-3v-3c0-1.655 1.345-3 3-3h1.5l4.5-4h2zm6.7.8a10.8 10.8 0 013.19 7.7 10.8 10.8 0 01-3.19 7.7l-1.06-1.06A9.322 9.322 0 0021.39 12c0-2.51-.975-4.865-2.75-6.64zm-8.2.76L7.07 9H5c-.825 0-1.5.675-1.5 1.5v3c0 .825.675 1.5 1.5 1.5h2.07l4.43 3.94V5.06zm5.535 1.905A7.068 7.068 0 0119.12 12c0 1.905-.74 3.69-2.085 5.035l-1.06-1.06A5.59 5.59 0 0017.62 12a5.582 5.582 0 00-1.645-3.975z" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionSoundOn.style = iconCss;

export { ActionSoundOn as scale_icon_action_sound_on };
