import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { r as renderIcon } from './render-icon.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './logo.js';
import { d as defineCustomElement$2 } from './logo-svg.js';

const appFooterCss = ":host{--background:var(--telekom-color-background-surface-highlight);--color:var(--telekom-color-text-and-icon-white-standard);--spacing-top:var(--telekom-spacing-unit-x8);--spacing-bottom:var(--telekom-spacing-unit-x6);--spacing-x:var(--telekom-spacing-unit-x6);--background-container:var(--telekom-color-background-canvas);--radius:var(--telekom-radius-large);--max-width:inherit;--border-top-minimal:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-faint);--color-minimal:var(--telekom-color-text-and-icon-additional);--background-minimal:var(--telekom-color-background-surface);--spacing-angular:var(--telekom-spacing-unit-x6);--spacing-minimal:var(--telekom-spacing-unit-x6);--background-mask:var(--telekom-color-background-canvas);--radius-mask:0 0 var(--telekom-radius-large) var(--telekom-radius-large);--font-size-copyright:var(--telekom-typography-font-size-caption);--color-link-standard:var(--telekom-color-text-and-icon-white-standard);--color-link-minimal:var(--telekom-color-text-and-icon-additional);--font-size-navigation-standard:var(--telekom-typography-font-size-caption);--font-family-navigation-standard:var(--telekom-typography-font-family-sans);--font-weight-navigation-standard:var(\n    --telekom-typography-font-weight-extra-bold\n  );--font-weight-navigation-minimal:var(\n    --telekom-typography-font-weight-medium\n  );--spacing-navigation-standard:var(--telekom-spacing-unit-x2);--color-navigation-standard-hover:var(\n    --telekom-color-text-and-icon-white-standard\n  );--color-navigation-minimal-hover:var(\n    --telekom-color-text-and-icon-primary-hovered\n  );--color-navigation-active-focus:var(\n    --telekom-color-text-and-icon-primary-pressed\n  );--box-shadow-navigation-focus:0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-focus);--border-color-standard-hover:var(\n    --telekom-color-text-and-icon-white-standard\n  )}.footer{width:100%;background:var(--background);color:var(--color);padding:var(--spacing-top) var(--spacing-x) var(--spacing-bottom)\n    var(--spacing-x);position:relative;bottom:0;box-sizing:border-box}.footer-container{background:var(--background)}.footer--variant-angular .footer{padding:var(--spacing-angular)}.footer--variant-minimal .footer{border-top:var(--border-top-minimal);color:var(--color-minimal);background:var(--background-minimal);padding:var(--spacing-minimal)}.footer-mask{position:relative;z-index:1;height:var(--radius);background:var(--background-mask);border-radius:var(--radius-mask)}.footer--variant-angular .footer-mask,.footer--variant-minimal .footer-mask{display:none}.footer-copyright{font-size:var(--font-size-copyright)}.footer-navigation a{color:var(--color-link-standard);text-decoration:none}.footer--variant-minimal .footer-navigation a{color:var(--color-link-minimal)}.footer-navigation ul{margin:0;padding:0;list-style:none;font-size:var(--font-size-navigation-standard);font-family:var(--font-family-navigation-standard);font-weight:var(--font-weight-navigation-standard)}.footer--variant-minimal .footer-navigation ul{font-weight:var(--font-weight-navigation-minimal)}.footer-navigation li a{display:flex;align-items:center;padding:var(--spacing-navigation-standard);margin:calc(-1 * var(--spacing-navigation-standard)) 0}.footer-navigation li span{padding:var(--telekom-spacing-unit-x1) 0}.footer-navigation li a:hover{color:var(--color-navigation-standard-hover)}.footer--variant-minimal .footer-navigation li a:hover{color:var(--color-navigation-minimal-hover)}.footer--variant-minimal .footer-navigation li a:hover span{border-bottom:1px solid transparent;margin-bottom:-1px}.footer--variant-angular .footer-navigation li a:hover span,.footer--variant-standard .footer-navigation li a:hover span{border-bottom:1px solid var(--border-color-standard-hover);margin-bottom:-1px}.footer-navigation li a:active{color:var(--color-navigation-active-focus, #cb0068)}.footer--variant-minimal .footer-navigation li a:active span{border-bottom:1px solid transparent;margin-bottom:-1px}.footer--variant-angular .footer-navigation li a:active span,.footer--variant-standard .footer-navigation li a:active span{border-bottom:1px solid var(--color-navigation-active-focus);margin-bottom:-1px}.footer-navigation li a:active:focus{color:var(--color-navigation-active-focus);box-shadow:none}.footer-navigation li a:focus{outline:none;box-shadow:var(--box-shadow-navigation-focus);border-radius:var(--radius)}.footer-navigation svg{width:auto;height:var(--telekom-spacing-unit-x4);margin-right:var(--spacing-navigation-standard)}.footer--variant-minimal .footer-copyright{justify-content:flex-start}.footer--variant-minimal .footer-branding{display:none}.footer--variant-minimal .footer-content{grid-template-areas:'copyright navigation navigation'}@media (max-width: 639px){.footer-branding{margin-bottom:var(--spacing-angular)}.footer-copyright{margin-bottom:var(--telekom-spacing-unit-x4)}.footer-navigation ul{line-height:var(--telekom-spacing-unit-x8)}.footer-navigation li a{padding:var(--telekom-spacing-unit-x1);margin:calc(-1 * var(--spacing-navigation-standard))\n      calc(-1 * var(--telekom-spacing-unit-x1))}}@media (min-width: 640px){.footer-branding{grid-area:branding;width:100%;display:flex;align-items:center;justify-content:flex-start}.footer-copyright{grid-area:copyright;width:100%;display:flex;align-items:center;justify-content:center}.footer-navigation{grid-area:navigation;width:100%;display:flex;align-items:center;justify-content:flex-end}.footer-navigation ul{display:flex;align-items:center}}@media (min-width: 640px) and (max-width: 1295px){.footer-content{display:grid;grid-template-columns:repeat(auto-fit, minmax(0, 1fr));grid-template-areas:'branding ....... .......'\n      'copyright navigation navigation'}.footer-branding{margin-bottom:var(--spacing-angular)}.footer-copyright{justify-content:flex-start}}@media (min-width: 1296px){.footer-content{display:grid;grid-template-columns:minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);grid-template-areas:'branding copyright navigation'}}@media (min-width: 1552px){.footer-content{margin:0 auto;max-width:var(--max-width)}}scale-logo:focus-visible{outline:none}";

const readData = (data) => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  }
  catch (error) {
    parsedData = data;
  }
  return parsedData;
};
const AppFooter = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.footerNavigation = [];
    this.variant = 'standard';
    this.copyright = '© Deutsche Telekom AG';
  }
  componentWillLoad() {
    this.hasSlotLogo = !!this.hostElement.querySelector('[slot="logo"]');
    this.hasSlotNavigation = !!this.hostElement.querySelector('[slot="navigation"]');
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("div", { class: "footer-mask" }), h("footer", { class: "footer" }, h("div", { class: "footer-content" }, h("div", { class: "footer-branding" }, this.hasSlotLogo ? (h("slot", { name: "logo" })) : (h("scale-logo", { transparent: true, variant: "white", language: this.claimLang, size: 24, href: this.logoHref, logoTitle: this.logoTitle, onClick: this.logoClick, logoAriaDescribedBy: this.logoAriaDescribedBy }))), h("div", { class: "footer-copyright" }, this.copyright), h("nav", { "aria-label": "bottom", class: "footer-navigation" }, this.hasSlotNavigation ? (h("slot", { name: "navigation" })) : (h("ul", null, readData(this.footerNavigation).map((item) => (h("li", { class: "footer-navigation__item" }, h("a", { class: "footer-navigation__item-link", href: item.href || 'javascript:void(0);', onClick: (event) => {
        if (typeof item.onClick === 'function') {
          item.onClick(event);
        }
      } }, item.icon &&
      renderIcon({
        tag: `scale-icon-${item.icon}`,
        attributes: {
          class: 'footer-navigation__item-link',
        },
      }), h("span", null, item.name)))))))))))));
  }
  getCssClassMap() {
    return classnames('footer-container', this.variant && `footer--variant-${this.variant}`);
  }
  get hostElement() { return this; }
  static get style() { return appFooterCss; }
}, [1, "scale-app-footer", {
    "footerNavigation": [8, "footer-navigation"],
    "variant": [1],
    "copyright": [1],
    "logoHref": [1, "logo-href"],
    "logoTitle": [1, "logo-title"],
    "logoClick": [8, "logo-click"],
    "logoAriaDescribedBy": [1, "logo-aria-described-by"],
    "claimLang": [1, "claim-lang"],
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-app-footer", "scale-icon", "scale-logo", "scale-logo-svg"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-app-footer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AppFooter);
      }
      break;
    case "scale-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "scale-logo":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "scale-logo-svg":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const ScaleAppFooter = AppFooter;
const defineCustomElement = defineCustomElement$1;

export { ScaleAppFooter, defineCustomElement };
