import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionLoop = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M8.013 6.612h5.211v2.302l5.388-3.526-5.388-3.527v2.302H8.033A7.998 7.998 0 00.029 11.29a7.807 7.807 0 001.582 5.451 1.22 1.22 0 001.66.28c.269-.188.446-.48.49-.804a1.234 1.234 0 00-.24-.98A5.358 5.358 0 012.45 12a5.554 5.554 0 015.564-5.388zM21.9 7.26a1.224 1.224 0 00-1.656-.27 1.176 1.176 0 00-.49.804 1.24 1.24 0 00.24.98A5.358 5.358 0 0121.061 12a5.554 5.554 0 01-5.564 5.388h-5.211v-2.302l-5.388 3.526 5.388 3.527v-2.302h5.192a7.998 7.998 0 008.003-7.127 7.807 7.807 0 00-1.582-5.451z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M20.945 7.3a.747.747 0 011.015.165 7.442 7.442 0 011.51 5.215c-.35 3.9-3.755 6.82-7.67 6.82h-5.3v2.85L5 18.75l5.5-3.6V18h5.32c3.295 0 6.175-2.695 6.18-5.99 0-1.36-.45-2.62-1.215-3.625-.265-.35-.2-.84.16-1.085zM13.5 1.65l5.5 3.6-5.5 3.6V6H8.18C4.885 6 2.005 8.695 2 11.99c0 1.36.45 2.62 1.215 3.625.265.35.2.84-.16 1.085a.747.747 0 01-1.015-.165A7.45 7.45 0 01.53 11.32C.88 7.42 4.285 4.5 8.2 4.5h5.3V1.65z" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionLoop.style = iconCss;

export { ActionLoop as scale_icon_action_loop };
