import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { f as findRootNode, d as defineCustomElement$f } from './app-navigation-main-mobile2.js';
import { s as statusNote } from './status-note.js';
import { d as defineCustomElement$g } from './app-mega-menu2.js';
import { d as defineCustomElement$e } from './app-navigation-sector-mobile2.js';
import { d as defineCustomElement$d } from './app-navigation-user-menu2.js';
import { d as defineCustomElement$c } from './button.js';
import { d as defineCustomElement$b } from './icon.js';
import { d as defineCustomElement$a } from './navigation-left.js';
import { d as defineCustomElement$9 } from './navigation-right.js';
import { d as defineCustomElement$8 } from './logo.js';
import { d as defineCustomElement$7 } from './logo-svg.js';
import { d as defineCustomElement$6 } from './menu-flyout.js';
import { d as defineCustomElement$5 } from './menu-flyout-list.js';
import { d as defineCustomElement$4 } from './nav-icon.js';
import { d as defineCustomElement$3 } from './nav-main.js';
import { d as defineCustomElement$2 } from './nav-segment.js';
import { d as defineCustomElement$1 } from './notification-badge.js';

const appHeaderCss = "scale-app-header{--header-nav-height:var(--telekom-spacing-unit-x14);--header-brand-height:var(--telekom-spacing-unit-x18);--header-border-radius:var(--telekom-radius-large);--header-transition-speed:var(--telekom-motion-duration-transition);--header-brand-collapsed-height:var(--telekom-spacing-unit-x1);--header-max-width:inherit;--background:var(--telekom-color-primary-standard);--font-weight:var(--telekom-typography-font-weight-regular);--border:1px solid var(--telekom-color-ui-faint);--color-brand:var(--telekom-color-text-and-icon-inverted-standard);--background-brand:var(--telekom-color-primary-standard);--color-nav:var(--telekom-color-text-and-icon-standard);--background-nav:var(--telekom-color-background-canvas);--background-nav-sticky:var(--telekom-color-background-surface);--background-header-sticky:var(--telekom-color-background-canvas);--spacing-nav:0 var(--telekom-spacing-unit-x4)}@keyframes keyframes-slideUp{from{top:0}to{top:-56px}}.header__container{background:var(--background-header-sticky);width:100%;height:128px}.header__user-menu--desktop{display:block}.header__user-menu--mobile{display:none}@media (max-width: 1023px){.header__container{width:100%;height:66px}.header__user-menu--desktop{display:none}.header__user-menu--mobile{display:block}}.header{width:100%;z-index:99;position:fixed;background:var(--background);font-weight:var(--font-weight)}.header .header__brand{color:var(--color-brand);background:var(--background-brand);display:flex;align-items:center}.header .header__nav{box-sizing:border-box;color:var(--color-nav);background:var(--background-nav);display:flex;align-items:center;border-top-left-radius:var(--header-border-radius);border-top-right-radius:var(--header-border-radius);border-bottom:1px solid transparent}.header__nav,.header.header--sticky .header__nav{border-bottom:var(--border);background:var(--background-nav-sticky)}.header .header__nav-content{width:100%;display:flex;align-items:center}.header .header__nav-menu-wrapper{width:100%;display:flex;align-items:center;justify-content:space-between}.header.header--sticky .header__nav-before,.header.header--sticky .header__nav-after{width:var(--header-border-radius);bottom:calc(-2 * var(--header-border-radius));height:calc(2 * var(--header-border-radius));position:absolute;border-top:var(--border);box-shadow:0 calc(-1 * var(--header-border-radius)) 0 0\n    var(--telekom-color-background-surface);background-color:transparent}.header.header--sticky.menu--open .header__nav-before,.header.header--sticky .header__nav-before{left:-1px;z-index:97;border-left:var(--border);border-top-left-radius:var(--header-border-radius)}.header.header--sticky.menu--open .header__nav-after,.header.header--sticky .header__nav-after{right:-1px;z-index:98;border-right:var(--border);border-top-right-radius:var(--header-border-radius)}.header *[slot='menu-icon'],.header .meta-navigation{display:flex;padding:0;list-style:none;align-items:center;margin-block-start:0;margin-block-end:0}@media (max-width: 1023px){.header{height:var(--header-nav-height)}.header.menu--open .header__nav-before,.header.header--sticky .header__nav-before,.header.header--sticky .header__nav-after,.header.menu--open .header__nav-after{top:51px}.header .sector-navigation,.header .addon-navigation,.header *[slot='menu-main'],.header .main-navigation{display:none !important}.header .header__brand{width:100%;height:var(--header-nav-height);display:flex;padding:var(--spacing-nav);z-index:96;position:absolute;transition:height var(--header-transition-speed) ease-in-out;align-items:center;animation-name:keyframes-slideUp;animation-delay:0.5s;justify-content:space-between;animation-duration:0.75s;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(0.42, 0, 0.1, 1)}.header .header__nav{top:4px;width:100%;height:calc(var(--header-nav-height) - 4px);padding:var(--spacing-nav);z-index:95;position:absolute}.header.menu--open .header__nav{background-color:var(--telekom-color-background-surface)}.header .header__nav__mobile-menu{top:var(--header-nav-height);width:100%;display:none;position:relative}.header .header__nav__mobile-menu--opened{height:calc(100vh - var(--header-nav-height));display:block;overflow-y:auto;background:var(--telekom-color-background-surface)}.header .header__brand .header__brand-before,.header .header__brand .header__brand-after{width:var(--header-border-radius);bottom:calc(-2 * var(--header-border-radius));height:calc(2 * var(--header-border-radius));position:absolute;border-top:transparent;box-shadow:0 calc(-1 * var(--header-border-radius)) 0 0\n      var(--telekom-color-primary-standard);background-color:transparent}.header .header__brand .header__brand-before{left:-1px;z-index:97;border-left:transparent;border-top-left-radius:var(--header-border-radius)}.header .header__brand .header__brand-after{right:-1px;z-index:98;border-right:transparent;border-top-right-radius:var(--header-border-radius)}.header .header__brand .logo svg{width:auto;height:26px}}.header .header__nav .header__nav-logo svg path{fill:var(--telekom-color-text-and-icon-primary-standard) !important}@media (min-width: 1024px){.header .header__nav-before{top:55px}.header .header__nav-after{top:55px}.header .mobile-menu,.header .header__nav__mobile-menu{display:none}.header .header__brand{height:var(--header-brand-height);padding:0 var(--telekom-spacing-unit-x6);transition:height var(--header-transition-speed) ease-in-out;justify-content:space-between}.header .header__brand-content{top:0;width:100%;display:flex;opacity:1;position:relative;transition:opacity var(--header-transition-speed) ease-in-out,\n      top var(--header-transition-speed) ease-in-out;align-items:center}.header .header__nav{height:var(--header-nav-height);padding:0 var(--telekom-spacing-unit-x6);position:relative}.header .header__nav-logo{width:50px;opacity:0;transition:none;font-weight:var(--telekom-typography-font-weight-bold);margin-right:var(--telekom-spacing-unit-x4);pointer-events:none}.header.header--sticky .header__nav-logo{pointer-events:all;margin-right:var(--telekom-spacing-unit-x8)}.header scale-nav-main:first-child li{padding-left:0}.header *[slot='menu-main'],.header .main-navigation{height:var(--header-nav-height);margin:0;display:flex;padding:0;list-style:none;transition:margin-left var(--header-transition-speed) ease-in-out;align-items:center;margin-left:calc(-50px - var(--telekom-spacing-unit-x4))}.header *[slot='menu-sector'],.header *[slot='menu-addon'],.header .sector-navigation{display:flex;padding:0}.header .addon-navigation{display:flex;list-style:none}.header .sector-navigation .segment-navigation__item-link{margin:0 7px}.header .addon-navigation .segment-navigation__item-link{margin:0 0 0 14px}.header.header--sticky{--header-brand-height:4px}.header.header--sticky .header__nav-logo{opacity:1;transition:opacity var(--header-transition-speed) ease-in-out}.header.header--sticky .header__brand-content{opacity:0;transition:opacity var(--header-transition-speed) ease-in-out,\n      top var(--header-transition-speed) ease-in-out}.header *[slot='menu-main'],.header.header--sticky .main-navigation{transition:margin-left var(--header-transition-speed) ease-in-out;margin-left:0}.header .sector-navigation .sector-navigation__portal-name{font-weight:var(--telekom-typography-font-weight-extra-bold);font-size:var(--telekom-typography-font-size-callout);list-style-type:none}.header *[slot='menu-main'],scale-nav-main{height:100%}.header *[slot='logo'],.header .header__brand-content .header__brand-branding{width:100%;display:flex;align-items:center;justify-content:flex-start}.header .header__brand-content .header__brand-sector{width:100%;display:flex;align-items:center;justify-content:center}.header .header__brand-content .header__brand-meta{width:100%;display:flex;align-items:center;justify-content:flex-end}}@media (min-width: 1552px){.header .header__nav-content,.header .header__brand-content{margin:0 auto;max-width:var(--header-max-width)}}";

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
const Header = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.portalName = '';
    this.mainNavigation = [];
    this.iconNavigation = [];
    this.userNavigation = [];
    this.sectorNavigation = [];
    this.addonNavigation = [];
    this.sticky = false;
    // DEPRECATED - megaMenuVisible should replace isMegaMenuVisible
    this.isMegaMenuVisible = false;
    this.megaMenuVisible = false;
    // DEPRECATED - mobileMenuVisible should replace isMobileMenuVisible
    this.isMobileMenuVisible = false;
    this.mobileMenuVisible = false;
    this.activeSegment = readData(this.sectorNavigation).find(({ id }) => id === this.activeSectorId) || readData(this.sectorNavigation)[0];
    this.mobileMenu = false;
    this.userMenu = false;
    this.userMenuMobile = false;
    this.visibleMegaMenu = '';
    this.scrolled = false;
  }
  megaMenuVisibleChange(isVisible) {
    this.visibleMegaMenu = isVisible;
  }
  // DEPRECATED - megaMenuVisible should replace isMegaMenuVisible
  isMegaMenuVisibleChange(isVisible) {
    this.visibleMegaMenu = isVisible;
  }
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
  }
  handleCloseMenu() {
    if (this.mobileMenu) {
      this.mobileMenuToggle.focus();
    }
    this.mobileMenu = false;
  }
  handleCloseUserMenu() {
    if (this.userMenuToggle) {
      this.userMenuToggle.focus();
    }
    this.userMenu = false;
  }
  handleOpenUserMenu() {
    this.userMenu = true;
  }
  handleActiveSegment(newValue) {
    this.activeSegment =
      readData(this.sectorNavigation).find(({ id }) => id === newValue) || {};
  }
  componentWillLoad() {
    this.hasSlotMenuMain =
      !!this.hostElement.querySelector('[slot="menu-main"]');
    this.hasSlotMenuIcon =
      !!this.hostElement.querySelector('[slot="menu-icon"]');
    this.hasSlotMenuSector = !!this.hostElement.querySelector('[slot="menu-sector"]');
    this.hasSlotMenuAddon = !!this.hostElement.querySelector('[slot="menu-addon"]');
    this.hasSlotMenuMobile = !!this.hostElement.querySelector('[slot="menu-mobile"]');
    this.hasSlotLogo = !!this.hostElement.querySelector('[slot="logo"]');
    this.hasSlotLogoInverse = !!this.hostElement.querySelector('[slot="logo-inverse"]');
  }
  componentDidUpdate() {
    this.hasSlotMenuMain =
      !!this.hostElement.querySelector('[slot="menu-main"]');
    this.hasSlotMenuIcon =
      !!this.hostElement.querySelector('[slot="menu-icon"]');
    this.hasSlotMenuSector = !!this.hostElement.querySelector('[slot="menu-sector"]');
    this.hasSlotMenuAddon = !!this.hostElement.querySelector('[slot="menu-addon"]');
    this.hasSlotMenuMobile = !!this.hostElement.querySelector('[slot="menu-mobile"]');
    this.hasSlotLogo = !!this.hostElement.querySelector('[slot="logo"]');
    this.hasSlotLogoInverse = !!this.hostElement.querySelector('[slot="logo-inverse"]');
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isMegaMenuVisible !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isMegaMenuVisible" is deprecated. Please use the "megaMenuVisible" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.isMobileMenuVisible !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isMobileMenuVisible" is deprecated. Please use the "mobileMenuVisible" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  handleMobileMenu(event) {
    if (event) {
      event.preventDefault();
    }
    if (event && 'key' in event) {
      if (!['Escape', 'Enter'].includes(event.key)) {
        return;
      }
      if (event.key === 'Escape' && !this.mobileMenu) {
        return;
      }
      if (event.key === 'Enter' && this.mobileMenu) {
        return;
      }
    }
    this.userMenuMobile = false;
    this.mobileMenu = !this.mobileMenu;
  }
  handleSelectedSegment(event, item) {
    this.activeSegment = item;
    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }
  }
  menuMain() {
    const rootNode = findRootNode(readData(this.mainNavigation), this.activeRouteId);
    const isActive = (item) => rootNode && rootNode.id === item.id;
    return (h("ul", { class: "main-navigation", onKeyDown: (e) => {
        if (e.key === 'Escape') {
          this.visibleMegaMenu = '';
        }
      } }, this.hasSlotMenuMain ? (h("slot", { name: "menu-main" })) : (readData(this.mainNavigation).map((item) => (h("scale-nav-main", { href: item.href, active: isActive(item), megaMenuVisible: this.visibleMegaMenu === item.id, onMouseEnter: () => {
        this.visibleMegaMenu = item.children ? item.id : null;
      }, onMouseLeave: () => {
        this.visibleMegaMenu = '';
      }, clickLink: (event) => {
        if (item.href) {
          this.visibleMegaMenu = '';
        }
        if (typeof item.onClick === 'function') {
          item.onClick(event);
        }
        this.visibleMegaMenu = item.children ? item.id : null;
      }, name: item.name }, item.children && item.children.length > 0 && (h("app-mega-menu", { navigation: item.children, hide: () => {
        this.visibleMegaMenu = '';
      }, activeRouteId: this.activeRouteId, active: this.visibleMegaMenu === item.id }))))))));
  }
  menuIcon() {
    const { defaultName, openedName } = readData(this.iconNavigation).find(({ id }) => id === 'menu') || { defaultName: 'Menu', openedName: 'Close' };
    const { shortName = 'Login', badge, badgeLabel, } = readData(this.userNavigation).find(({ type }) => type === 'userInfo') || {
      shortName: 'Login',
    };
    return (h("ul", { class: "meta-navigation" }, this.hasSlotMenuIcon ? (h("slot", { name: "menu-icon" })) : (readData(this.iconNavigation)
      .filter(({ id }) => id !== 'menu')
      .map((item) => (h("scale-nav-icon", { icon: item.icon, href: item.href, badge: item.badge, badgeLabel: item.badgeLabel, clickLink: (event) => {
        if (typeof item.onClick === 'function') {
          item.onClick(event);
        }
      } }, item.name)))), readData(this.userNavigation).length > 0 && (h("span", null, h("span", { class: "header__user-menu--desktop" }, h("scale-menu-flyout", null, h("scale-nav-icon", { slot: "trigger", active: this.userMenu, icon: 'user-file-user', refUserMenuToggle: (el) => (this.userMenuToggle = el), badge: badge, badgeLabel: badgeLabel }, shortName), h("scale-menu-flyout-list", null, h("app-navigation-user-menu", { hide: () => {
        this.userMenu = false;
        this.userMenuToggle.focus();
        window.document.dispatchEvent(new Event('click'));
      }, navigation: readData(this.userNavigation) })))), h("span", { class: "header__user-menu--mobile" }, h("scale-nav-icon", { slot: "trigger", active: this.userMenuMobile, icon: 'user-file-user', refMobileUserMenuToggle: (el) => (this.userMenuMobileToggle = el), clickLink: () => {
        this.mobileMenu = false;
        this.userMenuMobile = !this.userMenuMobile;
      }, badge: badge, badgeLabel: badgeLabel }, shortName)))), (readData(this.mainNavigation).length > 0 ||
      this.hasSlotMenuMobile) && (h("scale-nav-icon", { mobileMenuOpen: this.mobileMenu, icon: this.mobileMenu ? 'action-circle-close' : 'action-menu', clickLink: (event) => this.handleMobileMenu(event), refMobileMenuToggle: (el) => (this.mobileMenuToggle = el), active: this.mobileMenu }, this.mobileMenu ? openedName : defaultName))));
  }
  menuSector() {
    return (h("ul", { class: "sector-navigation" }, this.hasSlotMenuSector ? (h("slot", { name: "menu-sector" })) : this.portalName ? (h("li", { class: "sector-navigation__portal-name" }, this.portalName)) : (readData(this.sectorNavigation).map((item) => (h("scale-nav-segment", { active: this.activeSegment.id === item.id, href: item.href, onClick: (event) => this.handleSelectedSegment(event, item), onFocus: () => {
        window.scrollTo({ top: 0 });
      } }, item.name))))));
  }
  menuAddon() {
    return (h("ul", { class: "addon-navigation" }, this.hasSlotMenuAddon ? (h("slot", { name: "menu-addon" })) : (readData(this.addonNavigation).map((item) => (h("scale-nav-segment", { href: item.href, onClick: (event) => {
        if (typeof item.onClick === 'function') {
          item.onClick(event);
        }
      }, onFocus: () => {
        window.scrollTo({ top: 0 });
      } }, item.name))))));
  }
  render() {
    return (h(Host, null, h("header", { class: "header__container" }, h("div", { class: this.getCssClassMap() }, h("div", { class: "header__brand" }, h("span", { class: "header__brand-before" }), h("span", { class: "header__brand-after" }), h("div", { class: "header__brand-content" }, h("div", { class: "header__brand-branding" }, this.hasSlotLogo ? (h("slot", { name: "logo" })) : (h("scale-logo", { transparent: true, language: this.claimLang, href: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, onClick: this.logoClick, variant: "white", scrollIntoViewOnFocus: true, focusable: true, styles: ":host { --logo-size: 36px;} @media (max-width: 1023px) { :host {--logo-size: 26px;} }", logoAriaDescribedBy: this.logoAriaDescribedBy }))), h("div", { class: "header__brand-sector" }, this.menuSector()), h("div", { class: "header__brand-meta" }, this.menuAddon()))), h("nav", { class: "header__nav", "aria-label": "top" }, h("span", { class: "header__nav-before" }), h("span", { class: "header__nav-after" }), h("div", { class: "header__nav-content" }, h("div", { class: "header__nav-logo" }, this.hasSlotLogoInverse ? (h("slot", { name: "logo-inverse" })) : (h("scale-logo", { transparent: true, language: "", href: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, onClick: this.logoClick, focusable: this.scrolled || this.sticky, size: 24, logoAriaDescribedBy: this.logoAriaDescribedBy }))), h("div", { class: "header__nav-menu-wrapper" }, h("div", { class: "header__nav-menu-main" }, this.menuMain()), h("div", { class: "header__nav-menu-icon" }, this.menuIcon())))), h("nav", { class: `header__nav__mobile-menu${this.mobileMenu ? ' header__nav__mobile-menu--opened' : ''}`, "aria-label": "main" }, this.hasSlotMenuMobile ? (h("slot", { name: "menu-mobile" })) : (h("div", null, h("app-navigation-sector-mobile", { navigation: readData(this.sectorNavigation), activeSectorId: this.activeSectorId, hide: () => {
        this.handleMobileMenu();
        this.mobileMenuToggle.focus();
      } }), h("app-navigation-main-mobile", { navigation: readData(this.mainNavigation), activeRouteId: this.activeRouteId, hide: () => {
        this.handleMobileMenu();
        this.mobileMenuToggle.focus();
      } })))), h("nav", { class: `header__nav__mobile-menu${this.userMenuMobile ? ' header__nav__mobile-menu--opened' : ''}`, "aria-label": "main" }, h("div", null, this.userMenuMobile && (h("app-navigation-user-menu", { hide: () => {
        this.userMenuMobile = false;
        this.userMenuMobileToggle.focus();
      }, navigation: readData(this.userNavigation) }))))))));
  }
  getCssClassMap() {
    return classnames('header', (this.scrolled || this.sticky) && 'header--sticky', (this.visibleMegaMenu || this.mobileMenu || this.userMenuMobile) &&
      'menu--open');
  }
  get hostElement() { return this; }
  static get watchers() { return {
    "megaMenuVisible": ["megaMenuVisibleChange"],
    "isMegaMenuVisible": ["isMegaMenuVisibleChange"],
    "activeSectorId": ["handleActiveSegment"]
  }; }
  static get style() { return appHeaderCss; }
}, [4, "scale-app-header", {
    "logoHref": [1, "logo-href"],
    "logoTitle": [1, "logo-title"],
    "logoHideTitle": [4, "logo-hide-title"],
    "logoClick": [8, "logo-click"],
    "logoAriaDescribedBy": [1, "logo-aria-described-by"],
    "claimLang": [1, "claim-lang"],
    "portalName": [1, "portal-name"],
    "mainNavigation": [8, "main-navigation"],
    "iconNavigation": [8, "icon-navigation"],
    "userNavigation": [8, "user-navigation"],
    "sectorNavigation": [8, "sector-navigation"],
    "addonNavigation": [8, "addon-navigation"],
    "activeRouteId": [1, "active-route-id"],
    "activeSectorId": [1, "active-sector-id"],
    "sticky": [4],
    "isMegaMenuVisible": [4, "is-mega-menu-visible"],
    "megaMenuVisible": [4, "mega-menu-visible"],
    "isMobileMenuVisible": [4, "is-mobile-menu-visible"],
    "mobileMenuVisible": [4, "mobile-menu-visible"],
    "activeSegment": [32],
    "mobileMenu": [32],
    "userMenu": [32],
    "userMenuMobile": [32],
    "visibleMegaMenu": [32],
    "scrolled": [32]
  }, [[9, "scroll", "onScroll"], [0, "closeMenu", "handleCloseMenu"], [0, "scale-close", "handleCloseUserMenu"], [0, "scale-open", "handleOpenUserMenu"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-app-header", "app-mega-menu", "app-navigation-main-mobile", "app-navigation-sector-mobile", "app-navigation-user-menu", "scale-button", "scale-icon", "scale-icon-navigation-left", "scale-icon-navigation-right", "scale-logo", "scale-logo-svg", "scale-menu-flyout", "scale-menu-flyout-list", "scale-nav-icon", "scale-nav-main", "scale-nav-segment", "scale-notification-badge"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-app-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Header);
      }
      break;
    case "app-mega-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$g();
      }
      break;
    case "app-navigation-main-mobile":
      if (!customElements.get(tagName)) {
        defineCustomElement$f();
      }
      break;
    case "app-navigation-sector-mobile":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "app-navigation-user-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "scale-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "scale-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "scale-icon-navigation-left":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "scale-icon-navigation-right":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "scale-logo":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "scale-logo-svg":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "scale-menu-flyout":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "scale-menu-flyout-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "scale-nav-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "scale-nav-main":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "scale-nav-segment":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "scale-notification-badge":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { Header as H, defineCustomElement as d };
