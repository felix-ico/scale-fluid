'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationRecipient = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M17.75 11.36a5.885 5.885 0 015.89 5.89 5.89 5.89 0 11-5.89-5.89zm0 1.5a4.39 4.39 0 100 8.78 4.39 4.39 0 000-8.78zm1.88 2.345a.755.755 0 011.06 0c.289.29.289.76 0 1.05l-3.62 3.625-2.32-2.32a.755.755 0 010-1.06.745.745 0 011.06 0l1.26 1.265zm-.465-9.445v4.38a7.25 7.25 0 00-8.665 7.11v.035h-8a2.5 2.5 0 01-2.5-2.5V5.88l7.395 6.345a3.35 3.35 0 004.385 0l7.385-6.465zm0-2.645v.655L10.8 11.09a1.86 1.86 0 01-2.43 0L0 3.9v-.785h19.165z" }))) : (index.h("g", null, index.h("path", { d: "M17.75 11.5c3.45 0 6.25 2.8 6.25 6.25S21.2 24 17.75 24s-6.25-2.8-6.25-6.25 2.8-6.25 6.25-6.25zm3.1 4.05c-.3-.3-.75-.3-1.05 0l-2.8 2.8-1.4-1.4c-.3-.3-.75-.3-1.05 0s-.3.75 0 1.05L17 20.5l3.9-3.9c.3-.3.25-.75-.05-1.05zM19 3v7.1c-.4-.05-.8-.1-1.25-.1h-.25V7.15l-5.8 4.95c-.65.55-1.4.8-2.2.8s-1.55-.25-2.2-.8L1.5 7.15v7.4c0 .5.45.95 1 .95h7.85c-.15.5-.25 1-.3 1.5H2.5C1.1 17 0 15.9 0 14.55V3zm-1.5 1.5h-16v.7l6.75 5.75c.7.6 1.75.6 2.45 0l6.8-5.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
CommunicationRecipient.style = iconCss;

exports.scale_icon_communication_recipient = CommunicationRecipient;
