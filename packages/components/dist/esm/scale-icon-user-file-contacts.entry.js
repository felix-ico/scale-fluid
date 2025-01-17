import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileContacts = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M18 1.5H3v21h15a3 3 0 003-3v-15a3 3 0 00-3-3zM12 8a2 2 0 012.085 2.09c0 1.27-.88 2.5-2.085 2.5s-2.085-1.225-2.085-2.5A2 2 0 0112 8zm-3.75 7.5l.135-.72A1.665 1.665 0 0110 13.415h.82L12 14.58l1.165-1.165H14c.803.001 1.49.575 1.635 1.365l.115.72h-7.5z" }))) : (h("g", null, h("path", { d: "M18 1.5c1.65 0 3 1.35 3 3v15c0 1.65-1.35 3-3 3H3v-21zM18 3H4.5v18H18c.85 0 1.5-.65 1.5-1.5v-15c0-.85-.65-1.5-1.5-1.5zm-4 10.4c.8 0 1.45.6 1.6 1.4l.15.7h-7.5l.1-.7c.15-.8.85-1.35 1.65-1.35h.85L12 14.6l1.2-1.2zM12 8c1.15 0 2.1.85 2.1 2.1s-.9 2.5-2.1 2.5-2.1-1.25-2.1-2.5S10.85 8 12 8z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
UserFileContacts.style = iconCss;

export { UserFileContacts as scale_icon_user_file_contacts };
