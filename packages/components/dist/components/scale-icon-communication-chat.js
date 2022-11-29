import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const CommunicationChat = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M3.5 8.5V10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18H5v2.32l1.88-1.88.44-.44H12a1.5 1.5 0 001.11-.5h.275l.92.92A3 3 0 0112 19.5H7.94l-2.375 2.355A1.21 1.21 0 013.5 21v-1.5a3 3 0 01-3-3v-5a3 3 0 013-3zm19.5-6V13a3 3 0 01-3 3h-.5v1.875a1.5 1.5 0 01-2.565 1.06L14 16H8a3 3 0 01-3-3V2.5h18z" }))) : (h("g", null, h("path", { d: "M3.5 8.5V10c-.85 0-1.5.65-1.5 1.5v5c0 .85.65 1.5 1.5 1.5H5v2.3L7.3 18h5c.45 0 .8-.2 1.1-.5l1.05 1.05c-.55.55-1.3.9-2.15.9H7.95l-2.4 2.4c-.25.25-.55.35-.85.35-.6 0-1.2-.45-1.2-1.2v-1.5c-1.65 0-3-1.35-3-3v-5c0-1.65 1.35-3 3-3zm19.5-6V13c0 1.65-1.35 3-3 3h-.5v1.9c0 .9-.75 1.5-1.5 1.5-.35 0-.75-.15-1.05-.45L14 16H8c-1.65 0-3-1.35-3-3V2.5zM21.5 4h-15v9c0 .85.65 1.5 1.5 1.5h6.65L18 17.85V14.5h2c.85 0 1.5-.65 1.5-1.5z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-communication-chat", {
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
  const components = ["scale-icon-communication-chat"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-communication-chat":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CommunicationChat);
      }
      break;
  } });
}

const ScaleIconCommunicationChat = CommunicationChat;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconCommunicationChat, defineCustomElement };