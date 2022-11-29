import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { d as defineCustomElement$4 } from './logo.js';
import { d as defineCustomElement$3 } from './logo-svg.js';
import { d as defineCustomElement$2 } from './telekom-app-name.js';

const telekomHeaderCss = ":host{--shadow:0px 2px 9px rgba(0, 0, 0, 0.15);--background:var(--telekom-color-background-canvas);--background-logo:var(--telekom-color-primary-standard);--transition:height var(--telekom-motion-duration-immediate)\n      var(--telekom-motion-easing-standard),\n    width var(--telekom-motion-duration-immediate)\n      var(--telekom-motion-easing-standard),\n    margin-right var(--telekom-motion-duration-immediate)\n      var(--telekom-motion-easing-standard);--_height:60px;--_height-logo:36px;--_height-base-menu:60px;--_height-extended-menu:0;--_display-app-name:none;--_display-app-name-extended:none;--_display-main-nav:none;--_display-meta-nav:none;--_display-meta-nav-ext:none;--_display-language-switch:none;--_spacing-x:0 16px 0 0;--_spacing-left-horizontal-menus:0;--_spacing-right-app-name-extended:32px;--_spacing-right-app-name:32px;--_base-menu-justify-content:end}@media screen and (min-width: 640px){:host{--_display-app-name:block;--_spacing-x:0 16px;--_spacing-left-horizontal-menus:32px}}@media screen and (min-width: 1040px){:host,:host::part(scrolled-back){--_height:84px;--_height-logo:44px;--_height-extended-menu:30px;--_height-base-menu:54px;--_display-main-nav:block;--_display-meta-nav:block;--_display-meta-nav-ext:block;--_display-language-switch:block;--_display-app-name-extended:block;--_display-app-name:none;--_spacing-x:0 24px;--_spacing-left-horizontal-menus:44px;--_spacing-right-app-name:0;--_base-menu-justify-content:space-between}:host::part(scrolled){--_height:72px;--_height-logo:40px;--_height-extended-menu:0;--_height-base-menu:72px;--_display-meta-nav:none;--_display-meta-nav-ext:none;--_display-language-switch:none;--_display-app-name-extended:none;--_display-app-name:block;--_spacing-right-app-name:32px;--_animation-app-name:slideInLeft var(--telekom-motion-duration-animation)\n        forwards,\n      appear var(--telekom-motion-duration-animation) forwards}:host::part(scrolled-back){--_display-app-name:block;--_animation-app-name:slideOutLeft var(--telekom-motion-duration-animation)\n        forwards,\n      disappear var(--telekom-motion-duration-animation) forwards}}@media screen and (min-width: 1296px){:host,:host::part(scrolled-back){--_height:96px;--_height-logo:48px;--_height-extended-menu:30px;--_height-base-menu:66px;--_spacing-x:0 24px;--_spacing-left-horizontal-menus:96px}:host::part(scrolled),:host::part(scrolled-back){--_spacing-x:0 24px;--_spacing-left-horizontal-menus:96px}}@media screen and (min-width: 1552px){:host,:host::part(scrolled-back){--_height:120px;--_height-logo:60px;--_height-extended-menu:30px;--_height-base-menu:90px;--_spacing-x:0 96px 0 120px;--_spacing-left-horizontal-menus:72px}:host::part(scrolled),:host::part(scrolled-back){--_spacing-x:0 96px 0 120px;--_spacing-left-horizontal-menus:72px}}slot[name='app-logo']{height:var(--_height);width:var(--_height);background:var(--background-logo);display:flex;align-items:center;justify-content:center;transition:var(--transition)}:host::part(app-name){display:var(--_display-app-name);animation:var(--_animation-app-name);margin-right:var(--_spacing-right-app-name);transition:var(--transition)}:host::part(app-name-extended){display:var(--_display-app-name-extended);margin-right:var(--_spacing-right-app-name-extended);transition:var(--transition)}slot[name='meta-nav']{display:var(--_display-meta-nav)}slot[name='meta-nav-ext']{display:var(--_display-meta-nav-ext)}slot[name='language-switch']{display:var(--_display-language-switch)}slot[name='main-nav']{display:var(--_display-main-nav)}slot[name='functions']{display:flex;justify-content:end}:host::part(base){height:var(--_height);background-color:var(--background);box-shadow:var(--shadow);position:fixed;top:0;width:100%;transition:var(--transition)}:host::part(container){margin:var(--_spacing-x);display:flex}:host::part(icon),:host::part(app-logo){display:flex}:host::part(app-logo){height:var(--_height);width:var(--_height);display:flex;align-items:center;justify-content:center;transition:var(--transition)}:host::part(logo-svg){height:var(--_height-logo);transition:var(--transition)}:host::part(logo){height:calc(var(--_height) - 6px);width:calc(var(--_height) - 6px);display:flex;align-items:center;justify-content:center;transition:var(--transition)}:host::part(horizontal-menus){display:block;width:100%;margin-left:var(--_spacing-left-horizontal-menus)}:host::part(extended-menu-left){display:inline-flex}:host::part(extended-menu-right){display:inline-flex}:host::part(extended-menu){height:var(--_height-extended-menu);display:flex;justify-content:space-between;align-items:end;width:100%;transition:var(--transition)}:host::part(base-menu){justify-content:var(--_base-menu-justify-content);height:var(--_height-base-menu);display:flex;flex:1;transition:var(--transition)}:host::part(app-name-and-base-menu){display:flex;justify-content:space-between;align-items:center}@keyframes slideInLeft{0%{transform:translateX(-150px)}30%{transform:translateX(-150px)}100%{transform:translateX(0px)}}@keyframes slideOutLeft{0%{transform:translateX(0px)}30%{transform:translateX(0px)}100%{transform:translateX(-150px)}}@keyframes appear{0%{opacity:0;visibility:hidden;max-width:0}30%{opacity:0;visibility:hidden;max-width:150px}100%{opacity:1;visibility:visible;max-width:150px}}@keyframes disappear{0%{opacity:1;visibility:visible;max-width:150px}30%{visibility:visible;max-width:150px}50%{opacity:0}100%{opacity:0;visibility:hidden;max-width:0}}";

const TelekomHeader = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.scrolledBack = false;
    this.pageYOffset = 0;
  }
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
    this.scrolledBack =
      this.pageYOffset !== window.pageYOffset && window.pageYOffset <= 0;
    this.pageYOffset = pageYOffset;
  }
  render() {
    return (h(Host, null, h("header", { part: classnames('base', {
        scrolled: this.scrolled,
        'scrolled-back': this.scrolledBack,
      }) }, h("div", { part: "container" }, h("slot", { name: "app-logo" }, h("scale-logo", { part: "app-logo", variant: "white" })), h("div", { part: "horizontal-menus" }, h("div", { part: "extended-menu" }, h("div", { part: "extended-menu-left" }, this.appName ? (h("div", { part: "app-name-extended" }, h("scale-telekom-app-name", null, this.appNameLink ? (h("a", { onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : (h("span", null, this.appName))))) : null, h("slot", { name: "meta-nav-ext" })), h("div", { part: "extended-menu-right" }, h("slot", { name: "meta-nav" }), h("slot", { name: "language-switch" }))), h("div", { part: "app-name-and-base-menu" }, this.appName ? (h("div", { part: "app-name" }, h("scale-telekom-app-name", null, this.appNameLink ? (h("a", { onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : (h("span", null, this.appName))))) : null, h("div", { part: "base-menu" }, h("slot", { name: "main-nav" }), h("slot", { name: "functions" }))))))));
  }
  get hostElement() { return this; }
  static get style() { return telekomHeaderCss; }
}, [1, "scale-telekom-header", {
    "mainNavigation": [8, "main-navigation"],
    "appName": [1, "app-name"],
    "appNameLink": [1, "app-name-link"],
    "appNameClick": [8, "app-name-click"],
    "scrolled": [32],
    "scrolledBack": [32],
    "pageYOffset": [32]
  }, [[5, "scroll", "onScroll"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-telekom-header", "scale-logo", "scale-logo-svg", "scale-telekom-app-name"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-telekom-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TelekomHeader);
      }
      break;
    case "scale-logo":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "scale-logo-svg":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "scale-telekom-app-name":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const ScaleTelekomHeader = TelekomHeader;
const defineCustomElement = defineCustomElement$1;

export { ScaleTelekomHeader, defineCustomElement };
