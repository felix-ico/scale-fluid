import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionDisabledMicrophone = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M5.25 9.5a.75.75 0 01.75.75V12a6 6 0 008.34 5.525l1.125 1.12a7.5 7.5 0 01-2.715.815v4.04h-1.5v-4.04A7.5 7.5 0 014.5 12v-1.75a.75.75 0 01.75-.75zM2.863 2.863a.75.75 0 011.042-.018l17.25 17.25a.745.745 0 010 1.06.75.75 0 01-1.06 0L2.845 3.905a.75.75 0 01.018-1.042zM7.5 10.68l5.66 5.665A4.67 4.67 0 0112 16.5 4.5 4.5 0 017.5 12v-1.32zM18.75 9.5a.75.75 0 01.75.75V12a7.435 7.435 0 01-.88 3.465L17.5 14.34A6 6 0 0018 12v-1.75a.75.75 0 01.75-.75zM12.104.539l.212.01A4.5 4.5 0 0116.5 5v7a4.67 4.67 0 01-.155 1.16L7.55 4.37A4.5 4.5 0 0112.316.549z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M5.25 9.5c.4 0 .75.35.75.75V12c0 3.3 2.7 6 6 6 .85 0 1.6-.15 2.35-.5l1.1 1.15c-.8.4-1.75.7-2.7.8v4.05h-1.5v-4.05C7.45 19.1 4.5 15.9 4.5 12v-1.75c0-.4.35-.75.75-.75zm-2.4-6.65c.3-.3.75-.3 1.05 0L21.15 20.1c.3.3.3.75 0 1.05-.3.3-.75.3-1.05 0L2.85 3.9c-.3-.3-.3-.75 0-1.05zM7.5 10.7L9 12.2c.1 1.5 1.3 2.7 2.8 2.8l1.35 1.35c-.35.1-.75.15-1.15.15-2.5 0-4.5-2-4.5-4.5v-1.3zm11.25-1.2c.4 0 .75.35.75.75V12c0 1.25-.3 2.45-.9 3.45l-1.1-1.1c.35-.75.5-1.5.5-2.35v-1.75c0-.4.35-.75.75-.75zM12 .5c2.5 0 4.5 2 4.5 4.5v7c0 .4-.05.8-.15 1.15L15 11.8V5c0-1.65-1.35-3-3-3S9 3.35 9 5v.8L7.55 4.35C7.85 2.2 9.75.5 12 .5z" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-action-disabled-microphone", {
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
  const components = ["scale-icon-action-disabled-microphone"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-action-disabled-microphone":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ActionDisabledMicrophone);
      }
      break;
  } });
}

const ScaleIconActionDisabledMicrophone = ActionDisabledMicrophone;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconActionDisabledMicrophone, defineCustomElement };
