import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const DeviceNoCamera = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M4.396 2.255a.75.75 0 01.734.215l18 18a.745.745 0 010 1.06.75.75 0 01-1.06 0l-18-18a.75.75 0 01.326-1.275zM3.42 5l14.76 14.76A3 3 0 0117 20H5a3 3 0 01-3-3v-6.5H.5v-4H2V5h1.42zM20 5v3.785L21.78 7h1.72v10h-1.72l-.485-.485-1.295-1.3v.005L9.78 5H20z" }))) : (h("g", null, h("path", { d: "M4.1 2.45c.3-.3.75-.3 1.05 0l18.05 18c.3.3.3.75 0 1.05-.15.15-.35.2-.55.2s-.4-.05-.55-.2l-18-18c-.3-.3-.3-.75 0-1.05zM3.4 5l1.5 1.5H3.5V17c0 .85.65 1.5 1.5 1.5h11.9l1.3 1.25c-.4.15-.8.25-1.2.25H5c-1.65 0-3-1.35-3-3v-6.5H.5v-4H2V5zM20 5v3.8L21.8 7h1.7v10h-1.7l-3.3-3.3V6.5h-7.2L9.8 5zm2 3.9l-2 2v2.2l2 2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
DeviceNoCamera.style = iconCss;

export { DeviceNoCamera as scale_icon_device_no_camera };
