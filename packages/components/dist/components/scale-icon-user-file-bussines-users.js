import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const UserFileBussinesUsers = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M12 15.333a.88.88 0 01.715.367l.975 1.34a2.355 2.355 0 01-.965.81l.545 1.81 2.875-4.16h1.215a4.73 4.73 0 014.685 3.97l.175 1.03H1.78l.175-1.03A4.73 4.73 0 016.64 15.5h1.215l2.875 4.16.545-1.81a2.355 2.355 0 01-.965-.81l.975-1.34a.88.88 0 01.715-.367zM12 1.75A5.08 5.08 0 0117.25 7c0 3.175-2.21 6.25-5.25 6.25S6.75 10.175 6.75 7A5.08 5.08 0 0112 1.75z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M11.285 15.695a.885.885 0 011.43 0l.975 1.345c-.28.39-.61.655-.965.81l.545 1.81 2.875-4.16h1.215c2.33 0 4.3 1.67 4.685 3.97l.17 1.03H1.78l.175-1.03A4.738 4.738 0 016.64 15.5h1.215l2.875 4.16.545-1.81c-.355-.155-.685-.425-.965-.81zM12 1c3.475 0 6 2.525 6 6 0 3.38-2.41 7-6 7s-6-3.62-6-7c0-3.475 2.525-6 6-6zm0 1.5C9.395 2.5 7.5 4.395 7.5 7c0 2.655 1.81 5.5 4.5 5.5s4.5-2.845 4.5-5.5c0-2.605-1.895-4.5-4.5-4.5z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-user-file-bussines-users", {
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
  const components = ["scale-icon-user-file-bussines-users"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-user-file-bussines-users":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UserFileBussinesUsers);
      }
      break;
  } });
}

const ScaleIconUserFileBussinesUsers = UserFileBussinesUsers;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconUserFileBussinesUsers, defineCustomElement };
