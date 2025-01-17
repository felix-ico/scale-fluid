'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');
const menuUtils = require('./menu-utils-1e20f360.js');
const statusNote = require('./status-note-dceee5a3.js');

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
const Header = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      statusNote.statusNote({
        tag: 'deprecated',
        message: 'Property "isMegaMenuVisible" is deprecated. Please use the "megaMenuVisible" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.isMobileMenuVisible !== false) {
      statusNote.statusNote({
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
    const rootNode = menuUtils.findRootNode(readData(this.mainNavigation), this.activeRouteId);
    const isActive = (item) => rootNode && rootNode.id === item.id;
    return (index.h("ul", { class: "main-navigation", onKeyDown: (e) => {
        if (e.key === 'Escape') {
          this.visibleMegaMenu = '';
        }
      } }, this.hasSlotMenuMain ? (index.h("slot", { name: "menu-main" })) : (readData(this.mainNavigation).map((item) => (index.h("scale-nav-main", { href: item.href, active: isActive(item), megaMenuVisible: this.visibleMegaMenu === item.id, onMouseEnter: () => {
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
      }, name: item.name }, item.children && item.children.length > 0 && (index.h("app-mega-menu", { navigation: item.children, hide: () => {
        this.visibleMegaMenu = '';
      }, activeRouteId: this.activeRouteId, active: this.visibleMegaMenu === item.id }))))))));
  }
  menuIcon() {
    const { defaultName, openedName } = readData(this.iconNavigation).find(({ id }) => id === 'menu') || { defaultName: 'Menu', openedName: 'Close' };
    const { shortName = 'Login', badge, badgeLabel, } = readData(this.userNavigation).find(({ type }) => type === 'userInfo') || {
      shortName: 'Login',
    };
    return (index.h("ul", { class: "meta-navigation" }, this.hasSlotMenuIcon ? (index.h("slot", { name: "menu-icon" })) : (readData(this.iconNavigation)
      .filter(({ id }) => id !== 'menu')
      .map((item) => (index.h("scale-nav-icon", { icon: item.icon, href: item.href, badge: item.badge, badgeLabel: item.badgeLabel, clickLink: (event) => {
        if (typeof item.onClick === 'function') {
          item.onClick(event);
        }
      } }, item.name)))), readData(this.userNavigation).length > 0 && (index.h("span", null, index.h("span", { class: "header__user-menu--desktop" }, index.h("scale-menu-flyout", null, index.h("scale-nav-icon", { slot: "trigger", active: this.userMenu, icon: 'user-file-user', refUserMenuToggle: (el) => (this.userMenuToggle = el), badge: badge, badgeLabel: badgeLabel }, shortName), index.h("scale-menu-flyout-list", null, index.h("app-navigation-user-menu", { hide: () => {
        this.userMenu = false;
        this.userMenuToggle.focus();
        window.document.dispatchEvent(new Event('click'));
      }, navigation: readData(this.userNavigation) })))), index.h("span", { class: "header__user-menu--mobile" }, index.h("scale-nav-icon", { slot: "trigger", active: this.userMenuMobile, icon: 'user-file-user', refMobileUserMenuToggle: (el) => (this.userMenuMobileToggle = el), clickLink: () => {
        this.mobileMenu = false;
        this.userMenuMobile = !this.userMenuMobile;
      }, badge: badge, badgeLabel: badgeLabel }, shortName)))), (readData(this.mainNavigation).length > 0 ||
      this.hasSlotMenuMobile) && (index.h("scale-nav-icon", { mobileMenuOpen: this.mobileMenu, icon: this.mobileMenu ? 'action-circle-close' : 'action-menu', clickLink: (event) => this.handleMobileMenu(event), refMobileMenuToggle: (el) => (this.mobileMenuToggle = el), active: this.mobileMenu }, this.mobileMenu ? openedName : defaultName))));
  }
  menuSector() {
    return (index.h("ul", { class: "sector-navigation" }, this.hasSlotMenuSector ? (index.h("slot", { name: "menu-sector" })) : this.portalName ? (index.h("li", { class: "sector-navigation__portal-name" }, this.portalName)) : (readData(this.sectorNavigation).map((item) => (index.h("scale-nav-segment", { active: this.activeSegment.id === item.id, href: item.href, onClick: (event) => this.handleSelectedSegment(event, item), onFocus: () => {
        window.scrollTo({ top: 0 });
      } }, item.name))))));
  }
  menuAddon() {
    return (index.h("ul", { class: "addon-navigation" }, this.hasSlotMenuAddon ? (index.h("slot", { name: "menu-addon" })) : (readData(this.addonNavigation).map((item) => (index.h("scale-nav-segment", { href: item.href, onClick: (event) => {
        if (typeof item.onClick === 'function') {
          item.onClick(event);
        }
      }, onFocus: () => {
        window.scrollTo({ top: 0 });
      } }, item.name))))));
  }
  render() {
    return (index.h(index.Host, null, index.h("header", { class: "header__container" }, index.h("div", { class: this.getCssClassMap() }, index.h("div", { class: "header__brand" }, index.h("span", { class: "header__brand-before" }), index.h("span", { class: "header__brand-after" }), index.h("div", { class: "header__brand-content" }, index.h("div", { class: "header__brand-branding" }, this.hasSlotLogo ? (index.h("slot", { name: "logo" })) : (index.h("scale-logo", { transparent: true, language: this.claimLang, href: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, onClick: this.logoClick, variant: "white", scrollIntoViewOnFocus: true, focusable: true, styles: ":host { --logo-size: 36px;} @media (max-width: 1023px) { :host {--logo-size: 26px;} }", logoAriaDescribedBy: this.logoAriaDescribedBy }))), index.h("div", { class: "header__brand-sector" }, this.menuSector()), index.h("div", { class: "header__brand-meta" }, this.menuAddon()))), index.h("nav", { class: "header__nav", "aria-label": "top" }, index.h("span", { class: "header__nav-before" }), index.h("span", { class: "header__nav-after" }), index.h("div", { class: "header__nav-content" }, index.h("div", { class: "header__nav-logo" }, this.hasSlotLogoInverse ? (index.h("slot", { name: "logo-inverse" })) : (index.h("scale-logo", { transparent: true, language: "", href: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, onClick: this.logoClick, focusable: this.scrolled || this.sticky, size: 24, logoAriaDescribedBy: this.logoAriaDescribedBy }))), index.h("div", { class: "header__nav-menu-wrapper" }, index.h("div", { class: "header__nav-menu-main" }, this.menuMain()), index.h("div", { class: "header__nav-menu-icon" }, this.menuIcon())))), index.h("nav", { class: `header__nav__mobile-menu${this.mobileMenu ? ' header__nav__mobile-menu--opened' : ''}`, "aria-label": "main" }, this.hasSlotMenuMobile ? (index.h("slot", { name: "menu-mobile" })) : (index.h("div", null, index.h("app-navigation-sector-mobile", { navigation: readData(this.sectorNavigation), activeSectorId: this.activeSectorId, hide: () => {
        this.handleMobileMenu();
        this.mobileMenuToggle.focus();
      } }), index.h("app-navigation-main-mobile", { navigation: readData(this.mainNavigation), activeRouteId: this.activeRouteId, hide: () => {
        this.handleMobileMenu();
        this.mobileMenuToggle.focus();
      } })))), index.h("nav", { class: `header__nav__mobile-menu${this.userMenuMobile ? ' header__nav__mobile-menu--opened' : ''}`, "aria-label": "main" }, index.h("div", null, this.userMenuMobile && (index.h("app-navigation-user-menu", { hide: () => {
        this.userMenuMobile = false;
        this.userMenuMobileToggle.focus();
      }, navigation: readData(this.userNavigation) }))))))));
  }
  getCssClassMap() {
    return index$1.classnames('header', (this.scrolled || this.sticky) && 'header--sticky', (this.visibleMegaMenu || this.mobileMenu || this.userMenuMobile) &&
      'menu--open');
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "megaMenuVisible": ["megaMenuVisibleChange"],
    "isMegaMenuVisible": ["isMegaMenuVisibleChange"],
    "activeSectorId": ["handleActiveSegment"]
  }; }
};
Header.style = appHeaderCss;

exports.scale_app_header = Header;
