import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionMicrophone = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M18.75 9.5a.75.75 0 01.75.75V12a7.5 7.5 0 01-6.75 7.46v4.04h-1.5v-4.04A7.5 7.5 0 014.5 12v-1.75a.75.75 0 111.5 0V12a6 6 0 0012 0v-1.75a.75.75 0 01.75-.75zM12 .5l.212.005A4.5 4.5 0 0116.5 5v7a4.5 4.5 0 01-4.5 4.5l-.212-.005A4.5 4.5 0 017.5 12V5A4.5 4.5 0 0112 .5z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M18.75 9.5c.4 0 .75.35.75.75V12c0 3.9-2.95 7.1-6.75 7.45v4.05h-1.5v-4.05C7.45 19.1 4.5 15.9 4.5 12v-1.75c0-.4.35-.75.75-.75s.75.35.75.75V12c0 3.3 2.7 6 6 6s6-2.7 6-6v-1.75c0-.4.35-.75.75-.75zM12 .5c2.5 0 4.5 2 4.5 4.5v7c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5V5c0-2.5 2-4.5 4.5-4.5zM12 2c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3s3-1.35 3-3V5c0-1.65-1.35-3-3-3z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-microphone", {
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
  const components = ["scale-icon-action-microphone"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-microphone":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionMicrophone);
      }
      break;
  } });
}

const ScaleIconActionMicrophone = ActionMicrophone;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionMicrophone, defineCustomElement };
