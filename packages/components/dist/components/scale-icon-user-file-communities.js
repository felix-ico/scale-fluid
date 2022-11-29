import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileCommunities = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M4.775 13.05a5 5 0 00-1.05 1.5h-.06a1.5 1.5 0 00-1.47 1.22L1.86 17.5H.335l.385-2a3 3 0 012.945-2.45zm15.56.015A3 3 0 0123.28 15.5l.36 2h-1.5l-.335-1.715a1.5 1.5 0 00-1.47-1.22h-.06a5 5 0 00-1.05-1.5zm-4.625.05a3.5 3.5 0 013.47 2.94l.24 1.445H4.58l.24-1.435a3.5 3.5 0 013.47-2.94h1.34L12 15.5l2.37-2.385zM12 2.235a4.775 4.775 0 014.88 4.885c0 3.07-2.19 5.57-4.88 5.57s-4.88-2.5-4.88-5.57A4.775 4.775 0 0112 2.235zm-5.6 1.58c.223 0 .445.019.665.055-.29.448-.513.934-.665 1.445a2.18 2.18 0 00-2.28 2.28c0 1.36.915 2.86 2.28 2.86.17 0 .338-.026.5-.075.234.457.521.885.855 1.275a3.38 3.38 0 01-1.375.3c-2.085 0-3.78-1.955-3.78-4.36a3.695 3.695 0 013.8-3.78zm11.24 0a3.695 3.695 0 013.78 3.78c0 2.405-1.695 4.36-3.78 4.36a3.38 3.38 0 01-1.375-.3c.334-.39.62-.818.855-1.275.162.049.33.074.5.075 1.365 0 2.28-1.48 2.28-2.86a2.18 2.18 0 00-2.26-2.28 5.595 5.595 0 00-.665-1.445c.22-.036.442-.055.665-.055zm-5.449.92H12A2.275 2.275 0 009.62 7.12c0 1.45 1 3.07 2.38 3.07s2.38-1.62 2.38-3.07A2.28 2.28 0 0012 4.735z" }))) : (h("g", null, h("path", { d: "M15.7 14.6c1.75 0 3.2 1.25 3.5 2.95l.25 1.45H4.6l.25-1.4c.25-1.7 1.7-2.95 3.45-2.95h1.35L12 17l2.35-2.4zm4.65-.05c1.45 0 2.7 1.05 2.95 2.45l.4 2h-1.55l-.35-1.75c-.1-.7-.75-1.2-1.45-1.2h-.05c-.25-.55-.6-1.05-1.05-1.5zm-15.55 0c-.45.45-.8.95-1.1 1.5h-.05c-.7 0-1.3.5-1.45 1.2L1.85 19H.3l.4-2c.25-1.45 1.5-2.45 2.95-2.45zM12 4.25c2.5 0 4.4 1.9 4.4 4.4 0 2.45-1.8 5.05-4.4 5.05s-4.4-2.65-4.4-5.05c0-2.5 1.9-4.4 4.4-4.4zm-5.6 1.1c.2 0 .45 0 .65.05-.25.45-.5.95-.65 1.45-1.35 0-2.3.95-2.3 2.3S5.05 12 6.4 12c.15 0 .35-.05.5-.1.25.45.5.85.85 1.25-.4.2-.85.3-1.35.3-2.1 0-3.8-1.95-3.8-4.3 0-2.15 1.65-3.8 3.8-3.8zm11.2-.1c2.15 0 3.8 1.65 3.8 3.8 0 2.4-1.7 4.35-3.8 4.35-.45 0-.9-.1-1.35-.3.35-.35.6-.8.85-1.25.15.05.3.1.5.1 1.4 0 2.3-1.45 2.3-2.85 0-1.35-.95-2.3-2.3-2.35-.15-.55-.35-1-.65-1.45.2-.05.4-.05.65-.05zm-5.6.5c-1.7 0-2.9 1.15-2.9 2.9 0 1.7 1.15 3.55 2.9 3.55s2.9-1.8 2.9-3.55c0-1.7-1.2-2.9-2.9-2.9z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-user-file-communities", {
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
  const components = ["scale-icon-user-file-communities"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-user-file-communities":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UserFileCommunities);
      }
      break;
  } });
}

const ScaleIconUserFileCommunities = UserFileCommunities;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconUserFileCommunities, defineCustomElement };
