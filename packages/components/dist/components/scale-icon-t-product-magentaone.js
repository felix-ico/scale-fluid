import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const TProductMagentaone = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M12.315 15.1a1.255 1.255 0 00.885 2.135c.331-.001.65-.132.885-.365l2.05-2.05c.234-.235.365-.553.365-.885V1.75c0-.69-.56-1.25-1.25-1.25h-6a1.25 1.25 0 00-1 .5L3.07 8.265A1.25 1.25 0 003.375 10l4 2.77A1.24 1.24 0 009 12.625v9.625c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-3.04a1.25 1.25 0 10-2.5 0V21h-2.5V8.08c0-.04-.025-.08-.035-.125l-.04-.105a.775.775 0 00-.06-.11.695.695 0 00-.13-.195c-.03-.03-.05-.065-.08-.09l-.08-.07-.115-.085-.075-.035a1.05 1.05 0 00-.13-.065l-.11-.035-.145-.05h-.225a1.15 1.15 0 00-.13 0 .8.8 0 00-.115 0 .585.585 0 00-.1.03 1 1 0 00-.13.045.345.345 0 00-.095.05.855.855 0 00-.205.135l-.095.085a.5.5 0 00-.065.08.5.5 0 00-.09.115L7.735 10 5.84 8.695 9.915 3H14v10.415L12.315 15.1z" }))) : (h("g", null, h("path", { d: "M12.65 16.55c-.3.3-.3.75 0 1.05s.75.3 1.05 0l2.05-2.05c.15-.15.2-.35.2-.55V1.75c.05-.4-.3-.75-.7-.75h-6c-.25 0-.45.1-.6.3L3.5 8.55c-.1.15-.15.35-.15.55.05.2.15.35.3.5l4 2.75c.15.1.4.15.6.1s.4-.15.5-.35l.75-1.2v11.3c0 .4.35.75.75.75h5c.4 0 .75-.35.75-.75v-3.05c0-.4-.35-.75-.75-.75s-.75.4-.75.8v2.3H11V8.55l.8-1.3a.8.8 0 00-.25-1.05.8.8 0 00-1.05.25l-2.65 4.2-2.75-1.9 4.5-6.3h4.9V14.7z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-t-product-magentaone", {
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
  const components = ["scale-icon-t-product-magentaone"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-t-product-magentaone":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TProductMagentaone);
      }
      break;
  } });
}

const ScaleIconTProductMagentaone = TProductMagentaone;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconTProductMagentaone, defineCustomElement };
