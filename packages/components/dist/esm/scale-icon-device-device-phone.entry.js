import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceDevicePhone = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M16 .5a3 3 0 013 3v17a3 3 0 01-3 3H8a3 3 0 01-3-3v-17a3 3 0 013-3zm-4 17.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 .5a1 1 0 110 2 1 1 0 010-2zm2-16.5h-4v1h4v-1z" }))) : (h("g", null, h("path", { d: "M16 .5c1.65 0 3 1.35 3 3v17c0 1.65-1.35 3-3 3H8c-1.65 0-3-1.35-3-3v-17c0-1.65 1.35-3 3-3zM10 2H8c-.85 0-1.5.65-1.5 1.5v17c0 .85.65 1.5 1.5 1.5h8c.85 0 1.5-.65 1.5-1.5v-17c0-.85-.65-1.5-1.5-1.5h-2v1.5h-4zm2 16.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
DeviceDevicePhone.style = iconCss;

export { DeviceDevicePhone as scale_icon_device_device_phone };
