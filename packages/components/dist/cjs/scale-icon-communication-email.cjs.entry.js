'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationEmail = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M23.5 6.665V17.5a3 3 0 01-3 3h-17a3 3 0 01-3-3V6.715l8.97 7.61a3.89 3.89 0 005.06 0zm0-3.165v1.19l-9.945 8.49a2.395 2.395 0 01-3.115 0L.5 4.745V3.5z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M.5 3.5v14c0 1.65 1.35 3 3 3h17c1.65 0 3-1.35 3-3v-14zM22 5v.95l-8.45 7.25c-.9.75-2.2.75-3.1 0L2 5.95V5zm-1.5 14h-17c-.85 0-1.5-.65-1.5-1.5V7.95l7.45 6.4c.75.65 1.65.95 2.55.95s1.8-.3 2.55-.95L22 7.95v9.55c0 .85-.65 1.5-1.5 1.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
CommunicationEmail.style = iconCss;

exports.scale_icon_communication_email = CommunicationEmail;
