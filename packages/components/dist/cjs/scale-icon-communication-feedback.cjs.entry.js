'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationFeedback = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12.26.555A10.36 10.36 0 005 18.305v2.97A1.75 1.75 0 008 22.5l1.6-1.6A10.355 10.355 0 1012.26.555zm4.5 12.94H8.04a.75.75 0 110-1.5h8.72a.75.75 0 110 1.5zm0-3.5H8.04a.75.75 0 010-1.5h8.72a.75.75 0 110 1.5z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12 1c5.8 0 10.5 4.7 10.45 10.55 0 5.8-4.7 10.5-10.5 10.5-1.05 0-2.1-.15-3.05-.45l-1.45 1.45c-.35.35-.75.5-1.2.5-.9 0-1.75-.7-1.75-1.75v-2.95c-1.85-1.9-3-4.5-3-7.35C1.5 5.7 6.2 1 12 1zm0 1.5c-4.95 0-9 4.05-9 9 0 2.35.9 4.6 2.6 6.3l.45.45v3.55c0 .25.25.25.25.25.05 0 .1-.05.15-.1l2.1-2.1.85.25c.85.25 1.7.4 2.6.4 4.95 0 9-4.05 9-9s-4.05-9-9-9zm4.25 10c.45 0 .75.35.75.75s-.35.75-.75.75h-8.7c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm0-3.5c.45 0 .75.35.75.75s-.35.75-.75.75h-8.7c-.4 0-.75-.35-.75-.75S7.15 9 7.55 9z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
CommunicationFeedback.style = iconCss;

exports.scale_icon_communication_feedback = CommunicationFeedback;
