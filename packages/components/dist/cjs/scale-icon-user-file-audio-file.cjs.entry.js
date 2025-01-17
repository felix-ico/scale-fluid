'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileAudioFile = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M21 17.5L15.5 23v-4a1.5 1.5 0 011.5-1.5zM21 1v15.5h-4a2.5 2.5 0 00-2.5 2.5v4H6a3 3 0 01-3-3V1zm-9.5 4.225v7a3 3 0 00-.91-.205c-1.345-.09-2.45.73-2.465 1.83s1.065 2.04 2.41 2.15c.87.07 2.465-.25 2.465-2.345V8.79l2.375.565V7.58z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M20.5 1v17l-5 5h-10c-1.65 0-3-1.35-3-3V1zM19 2.5H4V20c0 .85.65 1.5 1.5 1.5h9v-3c0-.85.65-1.5 1.5-1.5h3zm-8 2.65l4 2.45v1.75l-2.5-.6v4.9c0 2.1-1.6 2.4-2.45 2.35-1.35-.1-2.4-1.05-2.4-2.15S8.75 11.9 10.1 12c.3 0 .6.1.9.2z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
UserFileAudioFile.style = iconCss;

exports.scale_icon_user_file_audio_file = UserFileAudioFile;
