import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const WeatherCloudySnow = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { d: "M7.08 18.622l1.04.6-.681 1.178h1.36v1.2H7.44l.68 1.178-1.04.6L6.4 22.2l-.68 1.178-1.04-.6.681-1.178H4v-1.2h1.36l-.68-1.178 1.04-.6.68 1.178.68-1.178zm5.2-3.6l1.04.6-.681 1.178h1.36V18h-1.36l.68 1.178-1.04.6-.68-1.178-.68 1.178-1.04-.6L10.56 18H9.2v-1.2h1.36l-.68-1.178 1.04-.6.68 1.178.68-1.178zm-1.785-9.077a5.56 5.56 0 015.233 3.674 4.25 4.25 0 012.261 3.753 4.24 4.24 0 01-2.698 3.952l-.191.069v-1.438a1 1 0 00-.402-.8l-.099-.066-2.5-1.443a1 1 0 00-.88-.059l-.12.059-2.498 1.438a1 1 0 00-.494.75l-.007.117v1.651h-.586l-.614-.355a1.002 1.002 0 00-.882-.059l-.119.059-.61.352h-.861A3.858 3.858 0 01.789 13.74c0-1.4.755-2.683 1.952-3.365.102-1.822 1.608-3.273 3.443-3.273.27 0 .54.033.806.098a5.53 5.53 0 013.505-1.256zm9.251 4.601a.6.6 0 01.766-.069l.083.07.85.848a.601.601 0 01-.776.912l-.074-.063-.849-.849a.601.601 0 010-.849zM16.6 4.4c1.654 0 3 1.346 3 3 0 1.132-.63 2.118-1.558 2.63a5.45 5.45 0 00-1.344-1.24 6.769 6.769 0 00-2.628-2.996A3 3 0 0116.6 4.4zm6.25 2.4a.6.6 0 01.097 1.192L22.85 8h-1.2a.6.6 0 01-.097-1.192l.097-.008h1.2zM11.757 2.556a.6.6 0 01.765-.069l.083.07.85.848a.601.601 0 01-.776.912l-.074-.063-.848-.849a.6.6 0 010-.849zm8.839 0a.6.6 0 01.917.766l-.069.083-.849.849a.599.599 0 01-.848 0 .6.6 0 01-.07-.766l.07-.083.849-.849zM16.6.55a.6.6 0 01.592.502l.008.098v1.2a.6.6 0 01-1.192.097L16 2.35v-1.2a.6.6 0 01.6-.6z", "fill-rule": "evenodd" }))) : (h("g", null, h("path", { d: "M7.08 18.622l1.04.6-.68 1.178H8.8v1.2H7.44l.68 1.178-1.04.6L6.4 22.2l-.68 1.178-1.04-.6.68-1.178H4v-1.2h1.36l-.68-1.178 1.04-.6.68 1.178.68-1.178zm5.2-3.6l1.04.6-.68 1.178H14V18h-1.36l.68 1.178-1.04.6-.68-1.178-.68 1.178-1.04-.6.68-1.178H9.2v-1.2h1.36l-.68-1.178 1.04-.6.68 1.178.68-1.178zm-1.78-9.04a5.577 5.577 0 015.242 3.638A4.246 4.246 0 0118 13.364a4.238 4.238 0 01-2.607 3.905l-.193.075v-1.306a3.039 3.039 0 001.6-2.674 3.044 3.044 0 00-1.613-2.68l-.178-.088-.243-.11-.082-.253A4.381 4.381 0 0010.5 7.18a4.377 4.377 0 00-2.757.978l-.191.165-.262.238-.335-.115a2.286 2.286 0 00-.738-.125c-1.206 0-2.196.94-2.277 2.126l-.005.156.024.517-.373.166A2.677 2.677 0 002 13.727a2.676 2.676 0 002.504 2.668l.169.005H8v1.2H4.673A3.877 3.877 0 01.8 13.727c0-1.391.75-2.669 1.942-3.355a3.486 3.486 0 014.262-3.158A5.574 5.574 0 0110.5 5.981zm9.246 4.564a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.849-.849a.6.6 0 010-.849zM16.6 4.4c1.654 0 3 1.346 3 3 0 1.132-.63 2.118-1.558 2.63a5.44 5.44 0 00-1.344-1.24 6.765 6.765 0 00-2.628-2.996A2.998 2.998 0 0116.6 4.4zm6.25 2.4a.6.6 0 01.097 1.192L22.85 8h-1.2a.6.6 0 01-.097-1.192l.097-.008h1.2zm-2.254-4.244a.6.6 0 01.917.766l-.069.083-.849.849a.598.598 0 01-.848 0 .6.6 0 01-.07-.766l.07-.083.849-.849zm-8.84 0a.6.6 0 01.766-.069l.083.07.849.848a.6.6 0 01-.774.912l-.075-.063-.848-.849a.6.6 0 010-.849zM16.6.55a.6.6 0 01.592.503l.008.097v1.2a.6.6 0 01-1.192.097L16 2.35v-1.2a.6.6 0 01.6-.6z", "fill-rule": "nonzero" })))))));
  }
  get hostElement() { return this; }
  static get style() { return iconCss; }
}, [0, "scale-icon-weather-cloudy-snow", {
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
  const components = ["scale-icon-weather-cloudy-snow"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-icon-weather-cloudy-snow":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, WeatherCloudySnow);
      }
      break;
  } });
}

const ScaleIconWeatherCloudySnow = WeatherCloudySnow;
const defineCustomElement = defineCustomElement$1;

export { ScaleIconWeatherCloudySnow, defineCustomElement };
