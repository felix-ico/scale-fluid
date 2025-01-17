import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ContentEu = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M12 3C5.65 3 .5 7.03.5 12s5.15 9 11.5 9 11.5-4.03 11.5-9S18.35 3 12 3zm-1.205 6.935h-2.58v1.41h2.5v1.25h-2.5v1.5h2.58v1.25h-3.93v-6.66h3.93zm6.2 3c.005 1.66-.89 2.565-2.47 2.565s-2.5-.92-2.5-2.59V8.685h1.34v4.06c0 1.04.32 1.5 1.14 1.5s1.14-.44 1.14-1.5v-4.06H17z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M12 3c6.35 0 11.5 4.05 11.5 9s-5.15 9-11.5 9S.5 16.95.5 12 5.65 3 12 3zm0 1.5C6.5 4.5 2 7.85 2 12s4.5 7.5 10 7.5 10-3.35 10-7.5-4.5-7.5-10-7.5zm1.35 4.2v4.05c0 1.05.35 1.5 1.15 1.5s1.15-.45 1.15-1.5 0-4.05-.05-4.05h1.35v4.25c0 1.7-.85 2.6-2.45 2.6s-2.5-.9-2.5-2.6V8.7zm-2.55 0v1.25H8.2v1.4h2.5v1.25H8.2v1.5h2.6v1.25H6.85V8.7z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ContentEu.style = iconCss;

export { ContentEu as scale_icon_content_eu };
