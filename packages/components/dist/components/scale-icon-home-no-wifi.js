import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const HomeNoWifi = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M11.964 18.128a2.043 2.043 0 110 4.085 2.043 2.043 0 010-4.085zM1.331 1.775a.766.766 0 011.064-.018L20.778 20.14a.77.77 0 010 1.082.76.76 0 01-1.083 0L1.312 2.84a.766.766 0 01.02-1.064zm8.78 12.012l1.772 1.787a4.596 4.596 0 00-3.973 2.431l-1.47-1.532a6.68 6.68 0 013.67-2.686zm1.853-4.85a11.234 11.234 0 018.753 4.197l-1.435 1.49a9.191 9.191 0 00-5.265-3.39l-2.272-2.298zM6.603 10.3l1.526 1.521a9.237 9.237 0 00-3.482 2.804l-1.44-1.491A11.306 11.306 0 016.603 10.3zm5.361-5.96c4.595 0 8.962 2.003 11.96 5.485L22.498 11.3A13.731 13.731 0 009.426 6.638l-1.705-1.72a15.911 15.911 0 014.243-.578zM3.258 6.955L4.734 8.43a13.736 13.736 0 00-3.31 2.854L0 9.81a16.085 16.085 0 013.258-2.854z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M12 18a2 2 0 110 4 2 2 0 010-4zM1.57 1.97a.745.745 0 011.06 0l18 18a.745.745 0 010 1.06.754.754 0 01-.53.22.754.754 0 01-.53-.22l-18-18a.75.75 0 010-1.06zm8.615 11.795l1.74 1.735a4.5 4.5 0 00-3.895 2.38l-1.435-1.49a6.495 6.495 0 013.59-2.625zM12 9c3.465 0 6.555 1.605 8.57 4.11l-1.405 1.46a9.006 9.006 0 00-5.15-3.34L11.79 9.005c.07 0 .14-.005.21-.005zm-5.245 1.335l1.49 1.49a9.045 9.045 0 00-3.41 2.745L3.43 13.11c.91-1.13 2.04-2.075 3.325-2.775zM3.48 7.06l1.445 1.445c-1.22.755-2.315 1.7-3.24 2.795L.29 9.855c.93-1.07 2.005-2.01 3.19-2.795zM12 4.5c4.68 0 8.87 2.075 11.715 5.355L22.32 11.3A13.465 13.465 0 009.515 6.735l-1.67-1.67A15.608 15.608 0 0112 4.5z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-home-no-wifi", {
    "size": [514],
    "fill": [1],
    "color": [1],
    "selected": [516],
    "decorative": [4],
    "accessibilityTitle": [1, "accessibility-title"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-icon-home-no-wifi"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-home-no-wifi":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HomeNoWifi);
      }
      break;
  } });
}

const ScaleIconHomeNoWifi = HomeNoWifi;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconHomeNoWifi, defineCustomElement };
