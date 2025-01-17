'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileBilling = class {
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
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M19.25 4.03v1.5l1.145.105-1.4 15.435a1.5 1.5 0 01-1.5 1.365h-.14L7.4 21.53l-.15-.03H4.92A3 3 0 007.265 23l9.985.925c.092.005.183.005.275 0a3 3 0 003-2.73L22.02 4.28l-2.77-.25zM7.25 4V0l-5.5 5.5h4A1.5 1.5 0 007.25 4zm10.5 13V0h-9.5v4a2.5 2.5 0 01-2.5 2.5h-4V17a3 3 0 003 3h10a3 3 0 003-3zm-5.535-2.135c-.162.064-.33.114-.5.15-.17.035-.34.06-.5.08-.16.02-.345 0-.5 0A3.235 3.235 0 018.68 14.5a3.3 3.3 0 01-1.115-2.045h-1l.355-1h.535v-.64h-.9l.355-1h.68c.096-.43.265-.842.5-1.215a2.92 2.92 0 01.73-.805 2.71 2.71 0 01.915-.455 3.775 3.775 0 011.015-.205 5.14 5.14 0 011.74.29l-.385 1.115a2.625 2.625 0 00-.555-.15 5.44 5.44 0 00-.75-.045c-.4-.011-.794.104-1.125.33a2.05 2.05 0 00-.715 1.08h2.84l-.285 1h-2.72a1.03 1.03 0 000 .17v.47h2.5l-.285 1H8.96c.109.433.352.82.695 1.105a2 2 0 001.265.375c.268.005.536-.03.795-.1.21-.06.41-.143.6-.25l.295 1.09c-.12.1-.253.185-.395.25z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M19 4.05l2.8.25-1.55 16.95a2.98 2.98 0 01-3.25 2.7L7 23c-1.05-.05-1.9-.65-2.35-1.5H7c.05.05.1.05.15.05l9.95.9c.85.1 1.6-.55 1.65-1.35l1.4-15.45-1.15-.1v-1.5zM17.5 0v17c0 1.65-1.35 3-3 3h-10c-1.65 0-3-1.35-3-3V5l5-5h11zM16 1.5H7.5v3C7.5 5.35 6.85 6 6 6H3v11c0 .85.65 1.5 1.5 1.5h10c.85 0 1.5-.65 1.5-1.5V1.5zM8.6 7.9c1-.75 2.6-.75 3.7-.3l-.4 1.1c-.6-.25-1.75-.35-2.45.15-.3.25-.55.6-.7 1.1h2.85l-.3 1H8.55v.65h2.5l-.3 1H8.7c.15.5.4.85.7 1.1.6.45 1.75.55 2.7 0l.3 1.1c-.85.6-2.8.65-3.95-.2-.55-.45-.9-1.1-1.1-2.05h-1l.35-1h.55v-.65h-.9l.35-1h.7c.2-.8.55-1.5 1.2-2z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
UserFileBilling.style = iconCss;

exports.scale_icon_user_file_billing = UserFileBilling;
