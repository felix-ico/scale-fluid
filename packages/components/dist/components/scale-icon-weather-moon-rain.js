import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherMoonRain = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M8.966 18.196a.142.142 0 01.234.078v.047l-.479 3.064a1.226 1.226 0 01-1.402 1.022c-.974-.152-1.364-1.319-.728-2.027l.09-.09 2.285-2.094zm-1.25-4.16a.142.142 0 01.234.08v.046l-.529 3.387-.014.051a1.34 1.34 0 11-2.593-.66c.053-.17.141-.335.27-.482l.105-.106 2.527-2.316zm4.934-1.304a.142.142 0 01.234.079v.047l-.615 3.935a1.537 1.537 0 01-1.756 1.28c-1.226-.191-1.714-1.67-.896-2.555l.096-.095 2.937-2.691zm-2.543-6.769a5.56 5.56 0 015.233 3.674 4.25 4.25 0 012.26 3.753c0 2.265-1.775 4.121-3.998 4.231l-.21.006h-.132a3.03 3.03 0 00.161-.48l.034-.168.615-3.936a1.34 1.34 0 00-2.122-1.286l-.11.091L9.14 14.32a1.342 1.342 0 00-2.124-1.26l-.11.09-2.528 2.317c-.331.304-.577.69-.71 1.118-.099.318-.13.648-.1.973A3.859 3.859 0 01.4 13.759c0-1.4.755-2.683 1.952-3.365C2.455 8.572 3.96 7.12 5.796 7.12c.27 0 .54.033.805.098a5.53 5.53 0 013.506-1.256zm8.07-5.458a5.383 5.383 0 012.621-.03 4.548 4.548 0 003.057 8.515 5.373 5.373 0 01-2.933 1.969c-.912.24-1.83.23-2.685.015A5.421 5.421 0 0016.3 8.79a6.749 6.749 0 00-2.137-2.676A5.404 5.404 0 0118.177.505z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M8.965 18.196a.141.141 0 01.235.078v.047l-.48 3.063a1.227 1.227 0 01-1.401 1.023c-.974-.152-1.365-1.319-.728-2.027l.089-.09 2.285-2.094zm-1.25-4.16a.142.142 0 01.235.079v.047l-.53 3.386-.045.181a1.339 1.339 0 01-1.488.937c-.812-.127-1.251-.899-1.105-1.602l.032-.123.046-.127a1.32 1.32 0 01.224-.356l.104-.106 2.527-2.316zm4.934-1.304a.141.141 0 01.235.079v.047l-.616 3.935a1.536 1.536 0 01-1.755 1.28c-1.227-.191-1.715-1.669-.897-2.554l.096-.096 2.937-2.691zm-2.55-6.75a5.577 5.577 0 015.243 3.638 4.245 4.245 0 012.258 3.744 4.242 4.242 0 01-4.025 4.23l-.211.006h-.085a2.88 2.88 0 00.132-.407l.043-.215.092-.587a3.038 3.038 0 002.854-3.027 3.044 3.044 0 00-1.613-2.68l-.178-.088-.243-.11-.082-.253A4.381 4.381 0 0010.1 7.18a4.377 4.377 0 00-2.757.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166a2.677 2.677 0 00-1.585 2.44c0 1.296.927 2.379 2.152 2.621-.158.37-.22.776-.187 1.184A3.877 3.877 0 01.4 13.727c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.1 5.981zM18.177.504a5.38 5.38 0 012.622-.03 4.548 4.548 0 003.057 8.515 5.376 5.376 0 01-2.934 1.969c-.912.24-1.83.23-2.685.015a5.42 5.42 0 00-1.938-2.184 6.748 6.748 0 00-2.137-2.676A5.403 5.403 0 0118.176.505z", "fill-rule": "nonzero" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-weather-moon-rain", {
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
  const components = ["scale-icon-weather-moon-rain"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-weather-moon-rain":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, WeatherMoonRain);
      }
      break;
  } });
}

const ScaleIconWeatherMoonRain = WeatherMoonRain;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconWeatherMoonRain, defineCustomElement };
