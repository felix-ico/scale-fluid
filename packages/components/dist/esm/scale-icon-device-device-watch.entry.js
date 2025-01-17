import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceDeviceWatch = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M17.19 20.875l-.08.3A2.5 2.5 0 0114.7 23H9.3a2.5 2.5 0 01-2.41-1.825l-.08-.3h10.38zM15.97 3.5a4 4 0 014 4v9a4 4 0 01-4 4H8.03a4 4 0 01-4-4v-9a4 4 0 014-4zm5.53 7v3h-1.05v-3h1.05zM14.7.955a2.5 2.5 0 012.41 1.825l.08.3H6.81l.08-.3A2.5 2.5 0 019.3.955z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M21.5 10.5H20v-3c0-1.75-1.1-3.2-2.65-3.75l-.25-.9C16.8 1.75 15.8 1 14.7 1H9.3c-1.1 0-2.1.75-2.4 1.8l-.25.9C5.1 4.3 4 5.75 4 7.5v9c0 1.75 1.1 3.2 2.65 3.75l.25.9c.3 1.1 1.3 1.8 2.4 1.8h5.4c1.1 0 2.1-.75 2.4-1.8l.25-.9A4.004 4.004 0 0020 16.5v-3h1.5v-3zm-3 6c0 1.4-1.1 2.5-2.5 2.5H8c-1.4 0-2.5-1.1-2.5-2.5v-9C5.5 6.1 6.6 5 8 5h8c1.4 0 2.5 1.1 2.5 2.5v9z" })))))));
  }
  get hostElement() { return getElement(this); }
};
DeviceDeviceWatch.style = iconCss;

export { DeviceDeviceWatch as scale_icon_device_device_watch };
