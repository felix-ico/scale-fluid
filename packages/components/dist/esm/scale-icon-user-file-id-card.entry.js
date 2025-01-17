import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileIdCard = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M.5 3.5v14a3 3 0 003 3h17a3 3 0 003-3v-14H.5zm7.755 4.47a2 2 0 012.08 2.095c0 1.265-.875 2.5-2.08 2.5s-2.085-1.225-2.085-2.5A2 2 0 018.255 7.97zM4.5 15.47l.13-.72a1.665 1.665 0 011.64-1.365h.815L8.25 14.55l1.16-1.165h.815a1.665 1.665 0 011.64 1.365l.135.72H4.5zM19.25 14h-5a.75.75 0 110-1.5h5a.75.75 0 110 1.5zm0-3h-5a.75.75 0 110-1.5h5a.75.75 0 110 1.5z" }))) : (h("g", null, h("path", { d: "M23.5 3.5v14c0 1.65-1.35 3-3 3h-17c-1.65 0-3-1.35-3-3v-14zM22 5H2v12.5c0 .85.65 1.5 1.5 1.5h17c.85 0 1.5-.65 1.5-1.5zM7.15 13.5l1.15 1.1 1.1-1.1h.75c.75 0 1.4.55 1.55 1.3l.1.7H4.7l.15-.7c.15-.75.8-1.3 1.55-1.3zm12.1-1c.4 0 .75.35.75.75s-.35.75-.75.75h-5c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zm-11-4.45c1.15 0 2.1.85 2.1 2.1s-.9 2.5-2.1 2.5-2.1-1.25-2.1-2.5.95-2.1 2.1-2.1zm11 1.45c.4 0 .75.35.75.75s-.35.75-.75.75h-5c-.4 0-.75-.35-.75-.75s.35-.75.75-.75z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
UserFileIdCard.style = iconCss;

export { UserFileIdCard as scale_icon_user_file_id_card };
