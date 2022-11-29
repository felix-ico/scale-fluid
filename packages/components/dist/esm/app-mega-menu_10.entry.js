import { r as registerInstance, h, g as getElement, c as createEvent, a as Host } from './index-6d95a4bc.js';
import { s as statusNote } from './status-note-0089e9c9.js';
import { a as findSelected, f as findRootNode } from './menu-utils-28fccc0d.js';
import { r as renderIcon } from './render-icon-05777d0c.js';
import { a as isClickOutside, e as emitEvent } from './utils-004d7b05.js';
import { c as classnames } from './index-713f92a5.js';

const appMegaMenuCss = "app-mega-menu{--box-shadow:var(--telekom-shadow-top);--spacing-y:2.125rem;--spacing-right:var(--telekom-spacing-unit-x4);--spacing-left:var(--telekom-spacing-unit-x6);--background:var(--telekom-color-background-surface);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--font-size-row-title:var(--telekom-typography-font-size-body);--spacing-bottom-row-title:1.125rem;--font-weight-row-title:var(--telekom-typography-font-weight-extra-bold);--color-row-title:var(--telekom-color-text-and-icon-standard);--font-size-row-item:var(--telekom-typography-font-size-body);--line-height-row-item:var(--telekom-typography-line-spacing-loose);--font-weight-row-item:var(--telekom-typography-font-weight-medium);--color-row-item:var(--telekom-color-text-and-icon-standard);--spacing-bottom-row-item:var(--telekom-spacing-unit-x2)}.mega-menu{width:100%;position:absolute;top:calc(var(--header-brand-height) * -1);left:0;border-radius:0 0 var(--header-border-radius) var(--header-border-radius);padding-top:calc(var(--header-nav-height) + var(--header-brand-height));display:none;pointer-events:none;transition:none;box-shadow:var(--box-shadow)}.mega-menu__wrapper{padding:var(--spacing-y) var(--spacing-right) var(--spacing-y)\n    var(--spacing-left);background:var(--background);pointer-events:none;border-radius:var(--header-border-radius)}.mega-menu__container{max-width:1168px;margin:0 auto;display:grid;grid-template-columns:repeat(5, minmax(min-content, 240px));list-style:none;padding-left:var(--telekom-spacing-unit-x8)}.mega-menu__row-title{cursor:default;font-size:var(--font-size-row-title);margin-bottom:var(--spacing-bottom-row-title);font-weight:var(--font-weight-row-title);color:var(--color-row-title)}.mega-menu__row-item{font-size:var(--font-size-row-item);line-height:var(--line-height-row-item);font-weight:var(--font-weight-row-item);color:var(--color-row-item);margin-bottom:var(--spacing-bottom-row-item);text-decoration:none;transition:color, border 0.15s ease-in-out;display:block;margin-bottom:7px}.mega-menu__row-item:hover,.mega-menu__row-item:hover span{color:var(--color-hover)}.mega-menu__row-item.active span{padding-bottom:2px;margin-bottom:-2px;display:inline-block;border-bottom:1px solid var(--color-selected)}.mega-menu__row-item.active{color:var(--color-selected)}.mega-menu__row-item.active:hover{color:var(--color-hover)}.mega-menu__row-item.active:hover span{color:var(--color-hover);border-bottom:1px solid var(--color-hover)}.mega-menu__row li{list-style:none}.mega-menu__row ul{padding-inline-start:0}";

const MegaMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navigation = [];
  }
  componentWillLoad() {
    this.hasCustomBody = !!this.hostElement.querySelector('[slot="custom-body"]');
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isActive !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  render() {
    return (h("div", { class: "mega-menu" }, h("div", { class: "mega-menu__wrapper" }, this.hasCustomBody ? (h("slot", { name: "custom-body" })) : (h("ul", { class: "mega-menu__container" }, this.navigation.map((child) => (h("li", { class: "mega-menu__row" }, h("div", { class: "mega-menu__row-title" }, child.name), h("ul", null, child.children &&
      child.children.length > 0 &&
      child.children.map((menuItem) => (h("li", null, h("a", { class: `mega-menu__row-item ${this.activeRouteId === menuItem.id ? 'active' : ''}`, "aria-current": this.activeRouteId === menuItem.id
          ? 'true'
          : 'false', href: menuItem.href || 'javascript:void(0);', tabIndex: this.active || this.isActive ? 0 : -1, onClick: (event) => {
          this.hide();
          if (typeof menuItem.onClick === 'function') {
            menuItem.onClick(event);
          }
        }, onKeyDown: (event) => {
          if (['Escape', 'Esc'].includes(event.key)) {
            this.hide();
          }
        } }, h("span", null, menuItem.name), this.activeRouteId === menuItem.id && (h("span", { class: "sr-only" }, "active")))))))))))))));
  }
  get hostElement() { return getElement(this); }
};
MegaMenu.style = appMegaMenuCss;

const appNavigationMainMobileCss = "app-navigation-main-mobile{--min-height:calc(100vh - 56px - 56px);--font-size:var(--telekom-typography-font-size-headline-3);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:3.333;--border-bottom:1px solid var(--telekom-color-ui-faint);--color:var(--telekom-color-text-and-icon-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-size-child:var(--telekom-typography-font-size-headline-3);--line-height-child:2.5;--font-weight-child:var(--telekom-typography-font-weight-regular);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);width:100%}.main-navigation-mobile{width:100%;position:relative}.main-navigation-mobile__main-menu{width:100%;list-style:none;padding:0;margin:0;min-height:var(--min-height)}.main-navigation-mobile__item{font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height)}.main-navigation-mobile__item--selected{border-right:2px solid var(--color-selected)}.main-navigation-mobile__item-link{text-decoration:none;color:var(--color);transition:var(--transition)}.main-navigation-mobile__item-link--selected{color:var(--color-selected);transition:var(--transition)}.main-navigation-mobile__item-link--selected svg{margin-right:-2px}.main-navigation-mobile__item-wrapper{box-sizing:border-box;width:calc(100% - 34px);display:flex;justify-content:space-between;margin-left:34px;border-bottom:var(--border-bottom);padding-right:34px;align-items:center}.main-navigation-mobile__child-menu{position:absolute;top:0;left:0;background:var(--telekom-color-background-surface);width:100%;min-height:var(--min-height)}.main-navigation-mobile__child-menu-current-item{line-height:var(--line-height)}.main-navigation-mobile__child-menu-current-item svg{margin-right:6px;margin-top:-4px}.main-navigation-mobile__child-menu-current{font-size:var(--telekom-typography-font-size-headline-3);font-weight:var(--telekom-typography-font-weight-extra-bold);color:var(--color-selected);text-decoration:none}.main-navigation-mobile__child-menu-current-wrapper{width:calc(100% - 34px);display:flex;align-items:center;border-bottom:var(--border-bottom);margin-left:34px}.main-navigation-mobile__child-menu-current app-icon{margin-right:var(--telekom-spacing-unit-x2)}.main-navigation-mobile__child-menu-current .icon-back{fill:var(--color-selected)}.main-navigation-mobile__child-menu-items{list-style:none;margin:0;padding:0}.main-navigation-mobile__child-menu-item-link{text-decoration:none;color:var(--color)}.main-navigation-mobile__child-menu-item-link.selected{color:var(--color-selected)}.main-navigation-mobile__child-menu-item-link.selected .main-navigation-mobile__child-menu-item-wrapper{border-right:2px solid var(--color-selected)}.main-navigation-mobile__child-menu-item-link.selected svg{margin-right:38px}.main-navigation-mobile__child-menu-item{font-size:var(--font-size-child);line-height:var(--line-height-child);font-weight:var(--font-weight-child)}.main-navigation-mobile__child-menu-item-wrapper{width:calc(100% - 64px);display:flex;justify-content:space-between;align-items:center;border-bottom:var(--border-bottom);margin-left:var(--telekom-spacing-unit-x16);box-sizing:border-box}.main-navigation-mobile__child-menu-item-wrapper svg{margin-right:var(--telekom-spacing-unit-x10)}";

const MainNavigationMobile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeMenu = createEvent(this, "closeMenu", 7);
    this.selected = undefined;
    this.parent = undefined;
  }
  handleActiveRoute(newValue) {
    this.selected = findSelected(this.navigation, newValue, null).selected;
    this.parent = findSelected(this.navigation, newValue).parent;
  }
  componentWillLoad() {
    this.selected = findSelected(this.navigation, this.activeRouteId, null).selected;
    this.parent = findSelected(this.navigation, this.activeRouteId).parent;
  }
  closeMenuHandler() {
    this.closeMenu.emit();
  }
  handlePrevSelected(event, item) {
    event.preventDefault();
    const selected = findSelected(this.navigation, item.id).parent;
    this.selected = selected;
    this.parent = selected;
  }
  handleSelect(event, item) {
    const { selected, parent } = findSelected(this.navigation, item.id);
    this.selected = selected;
    this.parent = parent;
    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }
    if (!selected.children) {
      this.closeMenuHandler();
    }
  }
  childMenuPage() {
    const section = this.selected && this.selected.children ? this.selected : this.parent;
    const { selected, parent } = findSelected(this.navigation, this.activeRouteId);
    if (!section) {
      return h("div", null);
    }
    const isActive = (child) => (selected && child.id === selected.id) ||
      (parent && parent.id === child.id);
    return (h("div", { class: "main-navigation-mobile__child-menu" }, h("a", { class: "main-navigation-mobile__child-menu-current", href: section.href || 'javascript:void(0);', onClick: (event) => {
        this.handlePrevSelected(event, section);
      }, tabIndex: 0, onKeyDown: (event) => {
        if (['Enter', ' '].includes(event.key)) {
          event.preventDefault();
          this.handlePrevSelected(event, section);
          if (!this.selected) {
            // focus first main navigation item to ease tab navigation
            this.mainNavigationWrapper.querySelector('a').focus();
          }
        }
        if (['Escape', 'Esc'].includes(event.key)) {
          this.hide();
        }
      } }, h("div", { class: "main-navigation-mobile__child-menu-current-item" }, h("div", { class: "main-navigation-mobile__child-menu-current-wrapper" }, h("scale-icon-navigation-left", null), h("div", null, section.name)))), h("ul", { class: "main-navigation-mobile__child-menu-items", ref: (el) => {
        this.childrenWrapper = el;
      } }, section.children.map((child) => (h("li", { class: "main-navigation-mobile__child-menu-item" }, h("a", { "aria-current": isActive(child) ? 'true' : 'false', "aria-haspopup": child.children ? 'true' : 'false', class: `main-navigation-mobile__child-menu-item-link ${isActive(child) ? 'selected' : ''}`, href: child.href || 'javascript:void(0);', tabIndex: 0, onClick: (event) => {
        this.handleSelect(event, child);
      }, onKeyDown: (event) => {
        if (['Enter', ' '].includes(event.key)) {
          this.handleSelect(event, child);
          setTimeout(() => {
            // focus first child menu item link to ease tab navigation
            const firstChildren = this.childrenWrapper.querySelector('a');
            if (firstChildren) {
              this.childrenWrapper.querySelector('a').focus();
            }
          });
        }
        if (['Escape', 'Esc'].includes(event.key)) {
          this.hide();
        }
      } }, h("div", { class: "main-navigation-mobile__child-menu-item-wrapper" }, h("span", null, child.name), isActive(child) && h("span", { class: "sr-only" }, "active"), child.children && (h("scale-icon-navigation-right", null))))))))));
  }
  render() {
    const { selected } = findSelected(this.navigation, this.activeRouteId);
    const rootNode = selected && findRootNode(this.navigation, selected.id);
    const isActive = (itemId) => rootNode && rootNode.id === itemId;
    return (h("div", { class: "main-navigation-mobile" }, this.childMenuPage(), h("ul", { class: "main-navigation-mobile__main-menu", ref: (el) => {
        this.mainNavigationWrapper = el;
      } }, (this.navigation || []).map((item) => (h("li", { class: `main-navigation-mobile__item${isActive(item.id)
        ? ' main-navigation-mobile__item--selected'
        : ''}` }, h("a", { "aria-current": isActive(item.id) ? 'true' : 'false', "aria-haspopup": item.children ? 'true' : 'false', class: `main-navigation-mobile__item-link${isActive(item.id)
        ? ' main-navigation-mobile__item-link--selected'
        : ''}`, href: item.href || 'javascript:void(0);', onClick: (event) => {
        this.handleSelect(event, item);
      }, onKeyDown: (event) => {
        if (['Enter', ' '].includes(event.key)) {
          this.handleSelect(event, item);
          setTimeout(() => {
            // focus first child menu item link to ease tab navigation
            const firstChildren = this.childrenWrapper.querySelector('a');
            if (firstChildren) {
              this.childrenWrapper.querySelector('a').focus();
            }
          });
        }
        if (['Escape', 'Esc'].includes(event.key)) {
          this.hide();
        }
      },
      // hide from tab navigation when on childMenuPage
      tabIndex: this.selected ? -1 : 0 }, h("div", { class: "main-navigation-mobile__item-wrapper" }, h("span", null, item.name), isActive(item.id) && h("span", { class: "sr-only" }, "active"), item.children && (h("scale-icon-navigation-right", null))))))))));
  }
  static get watchers() { return {
    "activeRouteId": ["handleActiveRoute"]
  }; }
};
MainNavigationMobile.style = appNavigationMainMobileCss;

const appNavigationSectorMobileCss = "app-navigation-sector-mobile{--border-bottom:1px solid var(--telekom-color-ui-subtle);--color:var(--telekom-color-text-and-icon-standard);--font-weight:var(--telekom-typography-font-weight-bold);--font-size:var(--telekom-typography-font-size-body);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--border-bottom-selected:1px solid var(--telekom-color-primary-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);width:100%}.sector-navigation-mobile{display:flex;width:100%;list-style:none;padding:0;margin:0;border-bottom:var(--border-bottom)}.sector-navigation-mobile__item{width:100%}.sector-navigation-mobile__item-link{color:var(--color);text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);width:100%;height:54px;display:flex;align-items:center;justify-content:center;transition:var(--transition)}.sector-navigation-mobile__item-link--selected{border-bottom:var(--border-bottom-selected);color:var(--color-selected);transition:var(--transition)}";

const NavigationSectorMobile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // @ts-ignore
    this.selected = this.navigation
      ? // @ts-ignore
        this.navigation.find(({ id }) => id === this.activeSectorId) ||
          // @ts-ignore
          this.navigation[0]
      : {};
  }
  handleActiveSegment(newValue) {
    this.selected =
      this.navigation.find(({ id }) => id === newValue) || this.navigation[0];
  }
  handleSelected(event, item) {
    this.selected = item;
    if (typeof item.onClick === 'function') {
      item.onClick(event);
    }
  }
  render() {
    return (h("ul", { class: "sector-navigation-mobile" }, (this.navigation || []).map((item) => (h("li", { class: "sector-navigation-mobile__item" }, h("a", { class: `sector-navigation-mobile__item-link${this.selected.id === item.id
        ? ' sector-navigation-mobile__item-link--selected'
        : ''}`, href: item.href || 'javascript:void(0);', onClick: (event) => this.handleSelected(event, item), onKeyDown: (event) => {
        if (['Escape', 'Esc'].includes(event.key)) {
          this.hide();
        }
      }, "aria-current": this.selected.id === item.id ? 'true' : 'false' }, item.name, this.selected.id === item.id && (h("span", { class: "sr-only" }, "active"))))))));
  }
  static get watchers() { return {
    "activeSectorId": ["handleActiveSegment"]
  }; }
};
NavigationSectorMobile.style = appNavigationSectorMobileCss;

const appNavigationUserMenuCss = ":host{--border-width-divider:var(--telekom-spacing-unit-x025);--color-divider:var(--telekom-color-ui-subtle);--color-menu-item-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-menu-item-active:var(--telekom-color-text-and-icon-primary-pressed);--box-shadow-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus)}.app-navigation-user-menu{width:100%;position:relative;min-width:260px}.app-navigation-user-menu__divider{margin:var(--telekom-spacing-unit-x4) 0;border:0;border-top:var(--border-width-divider) solid var(--color-divider)}@media (min-width: 1024px){.app-navigation-user-menu__user-info{margin:var(--telekom-spacing-unit-x3) var(--telekom-spacing-unit-x6) 0\n      var(--telekom-spacing-unit-x6)}}@media (max-width: 1023px){.app-navigation-user-menu__user-info{margin:var(--telekom-spacing-unit-x6) var(--telekom-spacing-unit-x4) 0\n      var(--telekom-spacing-unit-x4)}}.app-navigation-user-menu__user-info--name{font:var(--telekom-text-style-heading-5);margin-bottom:var(--telekom-spacing-unit-x1)}.app-navigation-user-menu__user-info--email{color:var(--telekom-color-text-and-icon-additional)}.app-navigation-user-menu__item{display:flex;font:var(--telekom-text-style-heading-6);padding:var(--telekom-spacing-unit-x2) var(--telekom-spacing-unit-x4);border-radius:calc(var(--telekom-radius-small) / 2);color:var(--telekom-color-text-and-icon-standard);text-decoration:none}@media (min-width: 1024px){.app-navigation-user-menu__item{padding:var(--telekom-spacing-unit-x2) var(--telekom-spacing-unit-x6)}}.app-navigation-user-menu__item:hover{color:var(--color-menu-item-hover)}.app-navigation-user-menu__item:active{color:var(--color-menu-item-active)}.app-navigation-user-menu__item:focus{outline:none;box-shadow:var(--box-shadow-focus)}.app-navigation-user-menu__item--icon-prefix{margin-right:var(--telekom-spacing-unit-x2)}.app-navigation-user-menu__item--icon-suffix{margin-left:var(--telekom-spacing-unit-x2)}.app-navigation-user-menu__button{padding:var(--telekom-spacing-unit-x2) var(--telekom-spacing-unit-x4)}@media (min-width: 1024px){.app-navigation-user-menu__button{padding:var(--telekom-spacing-unit-x2) var(--telekom-spacing-unit-x6)}}@media (min-width: 1024px){.app-navigation-user-menu{padding-bottom:var(--telekom-spacing-unit-x1)}}";

const AppNavigationUserMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeMenu = createEvent(this, "closeMenu", 7);
  }
  handleKeydown(event) {
    if ('Escape' === event.key) {
      this.hide();
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "app-navigation-user-menu" }, this.navigation.map((item) => {
      if (item.type === 'divider') {
        return (h("hr", { class: "app-navigation-user-menu__divider", part: "rule-horizontal" }));
      }
      if (item.type === 'userInfo') {
        return (h("div", { class: "app-navigation-user-menu__user-info" }, h("div", { class: "app-navigation-user-menu__user-info--name scl-font-variant-heading-4" }, item.name), h("div", { class: "app-navigation-user-menu__user-info--email" }, item.email)));
      }
      if (item.type === 'item') {
        return (h("a", { href: item.href || 'javascript:void(0);', tabindex: 0, class: "app-navigation-user-menu__item", onClick: (e) => {
            if (item.onClick) {
              item.onClick(e);
            }
            this.hide();
          } }, item.icon &&
          (!item.iconPosition || item.iconPosition === 'prefix')
          ? renderIcon({
            tag: `scale-icon-${item.icon}`,
            attributes: {
              class: `app-navigation-user-menu__item--icon-prefix`,
            },
          })
          : null, item.name, item.icon && item.iconPosition === 'suffix'
          ? renderIcon({
            tag: `scale-icon-${item.icon}`,
            attributes: {
              class: `app-navigation-user-menu__item--icon-suffix`,
            },
          })
          : null));
      }
      if (item.type === 'button') {
        return (h("scale-button", { class: "app-navigation-user-menu__button", onClick: (e) => {
            if (item.onClick) {
              item.onClick(e);
            }
            this.hide();
          }, href: item.href, variant: item.variant || 'primary' }, item.icon &&
          (!item.iconPosition || item.iconPosition === 'prefix')
          ? renderIcon({
            tag: `scale-icon-${item.icon}`,
            attributes: {},
          })
          : null, item.name, item.icon && item.iconPosition === 'suffix'
          ? renderIcon({
            tag: `scale-icon-${item.icon}`,
            attributes: {},
          })
          : null));
      }
    }))));
  }
  get hostElement() { return getElement(this); }
};
AppNavigationUserMenu.style = appNavigationUserMenuCss;

const menuFlyoutCss = ":host{--spacing-y-list:0;--spacing-x-list:0}";

const MENU_SELECTOR = '[role="menu"]';
const isButtonOrLink = (el) => {
  if (el.tagName.toUpperCase() === 'BUTTON' ||
    el.tagName.toUpperCase() === 'A' ||
    el.getAttribute('role') === 'button') {
    return el;
  }
};
const MenuFlyout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** (optional) Determines whether the flyout should close when a menu item is selected */
    this.closeOnSelect = true;
    /** (optional) Set preference for where the menu appears, space permitting */
    this.direction = 'bottom-right';
    this.lists = new Set();
    this.closeAll = () => {
      this.lists.forEach(async (list) => {
        await list.close(); // Wait for `scale-close` event to fire
        list.active = false; // Make sure focus control is right while reopening
      });
    };
    this.toggle = () => {
      const list = this.getListElement();
      if (list.opened) {
        this.closeAll();
        return;
      }
      if (this.direction != null) {
        // Overwrite `direction` in list
        list.direction = this.direction;
      }
      list.trigger = () => this.trigger;
      list.open();
    };
  }
  async handleScaleOpen({ detail }) {
    // Close the previous active list and its parents if
    // - it's not the root and
    // - it's not the one being opened
    // (useful only with "click" interactions)
    const rootList = this.getListElement();
    if (this.activeList &&
      this.activeList.active &&
      this.activeList !== rootList &&
      this.activeList !== detail.list) {
      let list = this.activeList;
      while (list != null && list !== rootList) {
        await list.close(true);
        list = list.parentElement.closest(MENU_SELECTOR);
      }
    }
    this.activeList = detail.list;
  }
  handleScaleSelect({ detail }) {
    if (detail.closeOnSelect === false) {
      return;
    }
    if (this.closeOnSelect) {
      window.requestAnimationFrame(() => {
        this.closeAll();
      });
    }
  }
  handleScaleClose({ detail }) {
    const parent = detail.list != null
      ? detail.list.parentNode.closest(MENU_SELECTOR)
      : null;
    if (parent) {
      window.requestAnimationFrame(() => {
        parent.active = true;
        parent.setFocus();
      });
    }
  }
  handleWindowScroll() {
    this.closeAll();
  }
  handleOutsideClick(event) {
    if (isClickOutside(event, this.hostElement)) {
      this.closeAll();
    }
  }
  handleKeydown(event) {
    if ('Tab' === event.key &&
      !this.hostElement.querySelector('app-navigation-user-menu')) {
      this.closeAll();
      return;
    }
  }
  componentDidLoad() {
    const triggerSlot = this.hostElement.querySelector('[slot="trigger"]');
    if (triggerSlot && triggerSlot.tagName.toUpperCase() === 'SCALE-BUTTON') {
      this.trigger = triggerSlot.shadowRoot.querySelector('button');
    }
    else {
      this.trigger = triggerSlot;
    }
    this.lists = new Set(Array.from(this.hostElement.querySelectorAll(MENU_SELECTOR)));
    this.setTriggerAttributes();
  }
  setTriggerAttributes() {
    const triggers = Array.from(this.hostElement.querySelectorAll('[role="menuitem"]'))
      .filter((el) => el.querySelector('[slot="sublist"]') != null)
      .concat([isButtonOrLink(this.trigger)])
      .filter((x) => x != null);
    triggers.forEach((el) => {
      el.setAttribute('aria-haspopup', 'true');
      el.setAttribute('aria-expanded', 'false');
    });
  }
  getListElement() {
    // TODO use [role="menu"]?
    return Array.from(this.hostElement.children).find((el) => el.tagName.toUpperCase().startsWith('SCALE-MENU-FLYOUT'));
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: "trigger", onClick: this.toggle }, h("slot", { name: "trigger" })), h("slot", null)));
  }
  get hostElement() { return getElement(this); }
};
MenuFlyout.style = menuFlyoutCss;

const menuFlyoutListCss = ":host{box-sizing:content-box;position:fixed;z-index:100;pointer-events:none}.menu-flyout-list{display:none;position:absolute;pointer-events:initial;z-index:var(--scl-z-index-20);background:var(--telekom-color-background-surface);border-radius:var(--telekom-radius-large);box-shadow:var(--telekom-shadow-overlay);overflow-y:hidden;margin-top:var(--spacing-y-list, 0);margin-bottom:var(--spacing-y-list, 0);margin-left:var(--spacing-x-list, 0);margin-right:var(--spacing-x-list, 0)}.menu-flyout-list::after{content:'';display:block;position:absolute;width:calc(100% - 2px);height:calc(100% - 2px);inset:0;border-radius:var(--telekom-radius-standard);border:1px solid transparent;pointer-events:none}.menu-flyout-list--opened{display:flex}.menu-flyout-list__list{padding:20px 0;overflow-y:auto;overflow-y:overlay;overscroll-behavior:contain}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-bottom-left,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-right,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-left,.menu-flyout-list--direction-bottom-right{top:calc(100% + var(--telekom-spacing-unit-x1));left:0;right:auto;bottom:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-bottom-right,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-left,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-top-right,.menu-flyout-list--direction-bottom-left{top:calc(100% + var(--telekom-spacing-unit-x1));right:0;left:auto;bottom:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-top-left,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-right,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-left,.menu-flyout-list--direction-top-right{bottom:calc(100% + var(--telekom-spacing-unit-x1));left:0;right:auto;top:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-top-right,.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-left,.menu-flyout-list--flip-horizontal.menu-flyout-list--flip-vertical.menu-flyout-list--direction-bottom-right,.menu-flyout-list--direction-top-left{bottom:calc(100% + var(--telekom-spacing-unit-x1));right:0;left:auto;top:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-left,.menu-flyout-list--direction-right{left:calc(100% - var(--telekom-spacing-unit-x1));top:-20px;right:auto;bottom:auto}.menu-flyout-list--flip-horizontal.menu-flyout-list--direction-right,.menu-flyout-list--direction-left{right:calc(100% - var(--telekom-spacing-unit-x1));top:-20px;left:auto;bottom:auto}.menu-flyout-list__scroll-up-indicator,.menu-flyout-list__scroll-down-indicator{position:absolute;width:0;border:5px solid transparent;pointer-events:none;opacity:0;left:50%}.menu-flyout-list__scroll-up-indicator{top:var(--telekom-spacing-unit-x2);border-bottom:5px solid var(--telekom-color-ui-faint);border-top:0}.menu-flyout-list__scroll-down-indicator{bottom:var(--telekom-spacing-unit-x2);border-top:5px solid var(--telekom-color-ui-faint);border-bottom:0}.menu-flyout-list--can-scroll-up .menu-flyout-list__scroll-up-indicator{opacity:1}.menu-flyout-list--can-scroll-down .menu-flyout-list__scroll-down-indicator{opacity:1}";

const PAD = 10;
const ITEM_ROLES = ['menuitem', 'menuitemcheckbox', 'menuitemradio'];
const MenuFlyoutList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleOpen = createEvent(this, "scale-open", 7);
    this.scaleOpenLegacy = createEvent(this, "scaleOpen", 7);
    this.scaleClose = createEvent(this, "scale-close", 7);
    this.scaleCloseLegacy = createEvent(this, "scaleClose", 7);
    /** Used to force a re-render */
    this.forceRender = 0;
    /** */
    this.opened = false;
    /** (optional) Set preference for where the menu appears, space permitting */
    this.direction = 'bottom-right';
    /**  */
    this.active = false;
    /** (optional) Determines whether the flyout should close when a menu item is selected */
    this.closeOnSelect = true;
    /** Flags to know if content scrollable */
    this.canScrollUp = false;
    this.canScrollDown = false;
    /** When menu off the screen horizontally */
    this.flipHorizontal = false;
    /** When menu off the screen vertically */
    this.flipVertical = false;
    /** Set true when resize or when opened */
    this.needsCheckPlacement = true;
    this.handleScroll = () => {
      this.updateScrollIndicators();
    };
    this.handleWheel = (event) => {
      // TODO not sure this is doing anything atm
      this.stopWheelPropagation(event);
    };
  }
  get triggerRect() {
    return this.trigger().getBoundingClientRect();
  }
  componentDidRender() {
    if (this.opened && this.needsCheckPlacement) {
      this.setSize();
      this.checkPlacement();
    }
  }
  async open() {
    this.opened = true;
    emitEvent(this, 'scaleOpen', { list: this.hostElement });
  }
  async close(silent = false) {
    if (this.active && silent !== true) {
      emitEvent(this, 'scaleClose', { list: this.hostElement });
    }
    this.opened = false;
  }
  async setFocus() {
    if (this.focusedItemIndex != null) {
      this.focusItem();
    }
    else {
      this.setInitialItemsFocus();
    }
  }
  handleResize() {
    this.close();
  }
  handleKeydown(event) {
    if (!this.active) {
      return;
    }
    if (!this.hostElement.querySelector('app-navigation-user-menu')) {
      event.preventDefault();
    }
    if ('ArrowDown' === event.key) {
      this.shiftItemsFocus();
      return;
    }
    if ('ArrowUp' === event.key) {
      this.shiftItemsFocus(-1);
      return;
    }
    if ('ArrowLeft' === event.key || 'Escape' === event.key) {
      this.close();
      return;
    }
    if (' ' === event.key ||
      'Enter' === event.key ||
      'ArrowRight' === event.key) {
      const item = this.items[this.focusedItemIndex];
      if (item != null) {
        item.triggerEvent(event, this.closeOnSelect);
      }
    }
  }
  /**
   * We handle item clicks here, to avoid setting up
   * listeners on every item
   */
  handleClick(event) {
    const roleSelector = ITEM_ROLES.map((role) => `[role="${role}"]`).join(',');
    const item = event.target.closest(roleSelector);
    if (item != null) {
      event.stopImmediatePropagation();
      item.triggerEvent(event, this.closeOnSelect);
    }
  }
  /**
   * Focus newly selected item
   */
  handleScaleSelect({ detail }) {
    if (this.active && this.opened) {
      const index = this.items.findIndex((x) => x === detail.item);
      if (index != null) {
        this.focusedItemIndex = index;
        this.focusItem();
      }
    }
  }
  /**
   * Set `active` to false when a descendant opens
   */
  handleScaleOpen({ detail }) {
    if (detail.list !== this.hostElement) {
      this.active = false;
    }
  }
  openedChanged() {
    if (!this.opened) {
      this.active = false;
      this.focusedItemIndex = null;
      // Reset checks for boundary-aware placement
      this.needsCheckPlacement = true;
      this.flipHorizontal = false;
      this.flipVertical = false;
      this.hostElement.style.marginLeft = '';
      this.hostElement.style.marginTop = '';
      this.hostElement.style.marginRight = '';
      this.hostElement.style.marginBottom = '';
    }
    if (this.opened) {
      this.active = true;
      this.setFocus();
      this.setWindowSize();
      this.setPosition();
      this.padForNonOverlayScrollbars();
      this.updateScrollIndicators();
    }
    this.updateTriggerAttributes();
  }
  setInitialItemsFocus() {
    this.items = this.getListItems();
    this.focusedItemIndex = -1;
    if (this.items.length > 0) {
      this.shiftItemsFocus();
    }
  }
  shiftItemsFocus(direction = 1) {
    let nextIndex = this.focusedItemIndex + direction;
    if (nextIndex === this.items.length) {
      nextIndex = 0;
    }
    else if (nextIndex < 0) {
      nextIndex = this.items.length - 1;
    }
    this.focusedItemIndex = nextIndex;
    this.focusItem();
  }
  focusItem() {
    window.requestAnimationFrame(() => {
      try {
        this.items[this.focusedItemIndex].focus();
      }
      catch (err) { }
    });
  }
  updateTriggerAttributes() {
    const trigger = this.trigger();
    if (trigger && trigger.getAttribute('aria-haspopup') === 'true') {
      trigger.setAttribute('aria-expanded', String(this.opened));
    }
  }
  setWindowSize() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
  setPosition() {
    const { top, left } = this.triggerRect;
    this.hostElement.style.top = `${top}px`;
    this.hostElement.style.left = `${left}px`;
  }
  setSize() {
    const { width, height } = this.triggerRect;
    this.hostElement.style.height = `${height}px`;
    this.hostElement.style.width = `${width}px`;
  }
  checkPlacement() {
    this.needsCheckPlacement = false;
    let isOutOfBounds = false;
    const rect = this.base.getBoundingClientRect();
    // Check horizontal flips
    if (rect.left < PAD) {
      // console.log('off left edge');
      isOutOfBounds = true;
      if (this.direction.includes('left')) {
        this.flipHorizontal = true;
      }
    }
    if (rect.right > this.windowWidth - PAD) {
      // console.log('off right edge');
      isOutOfBounds = true;
      if (this.direction.includes('right')) {
        this.flipHorizontal = true;
      }
    }
    // Check vertical flips
    if (rect.top < PAD) {
      // console.log('off top edge');
      isOutOfBounds = true;
      if (this.direction.includes('top')) {
        this.flipVertical = true;
      }
    }
    if (rect.bottom > this.windowHeight - PAD) {
      // console.log('off bottom edge');
      isOutOfBounds = true;
      if (this.direction.includes('bottom')) {
        this.flipVertical = true;
      }
    }
    if (isOutOfBounds) {
      this.furtherAdjustPlacement();
    }
  }
  furtherAdjustPlacement() {
    // Apply flip class changes immediately to avoid frame flash
    this.base.className = this.getCssClassMap();
    // Force layout and style recalculation
    window.getComputedStyle(this.base);
    const rect = this.base.getBoundingClientRect();
    // TODO: add more functionality for order of priority of which edge to snap to
    // Shift to be snapped to a padded edge
    // Note can't use transform as it creates
    // a relative parent for nested position fixed elements
    let left = 0;
    let top = 0;
    if (rect.left < PAD) {
      // console.log('still off left edge');
      left = PAD - rect.left;
    }
    else if (rect.right > this.windowWidth - PAD) {
      // console.log('still off right edge');
      left = this.windowWidth - PAD - rect.right;
    }
    if (rect.top < PAD) {
      // console.log('still off top edge');
      top = PAD - rect.top;
    }
    else if (rect.bottom > this.windowHeight - PAD) {
      // console.log('still off bottom edge');
      top = this.windowHeight - PAD - rect.bottom;
    }
    this.hostElement.style.marginLeft = `${left}px`;
    this.hostElement.style.marginTop = `${top}px`;
    this.hostElement.style.marginRight = `${-left}px`;
    this.hostElement.style.marginBottom = `${-top}px`;
    // Re-render visibly next frame with correct placement to update vdom
    setTimeout(() => this.forceRender++);
  }
  /**
   * Add scrollbar width to menu, to avoid horizontal scrollbars
   * or scrollbar forcing text-overflow.
   * (This affects Firefox and Safari, where non-overlay scrollbars
   * eat into content width rather than add)
   */
  padForNonOverlayScrollbars() {
    this.base.style.paddingRight = `0px`;
    const scrollbarWidth = this.base.offsetWidth - this.base.clientWidth;
    this.base.style.paddingRight = `${scrollbarWidth}px`;
  }
  updateScrollIndicators() {
    // Reset
    this.canScrollDown = false;
    this.canScrollUp = false;
    const diff = this.list.scrollHeight - this.list.clientHeight;
    // Not scrollable
    if (diff) {
      if (this.list.scrollTop > 0) {
        this.canScrollUp = true;
      }
      if (this.list.scrollTop < diff) {
        this.canScrollDown = true;
      }
    }
    this.forceRender++;
  }
  /**
   * Check if going in a direction with content to reach, otherwise stop
   */
  stopWheelPropagation(event) {
    // This is enough for Chrome
    event.stopPropagation();
    // Needed for Safari and Firefox to prevent scrolling on non-scrollable lists
    if (!this.canScrollDown && !this.canScrollUp) {
      event.preventDefault();
    }
    // Needed for Safari to prevent scrolling past the end of a scrollable list
    if (event.deltaY > 0 && !this.canScrollDown) {
      event.preventDefault();
    }
    if (event.deltaY < 0 && !this.canScrollUp) {
      event.preventDefault();
    }
  }
  getListItems() {
    return Array.from(this.hostElement.children).filter((el) => ITEM_ROLES.includes(el.getAttribute('role')));
  }
  getCssClassMap() {
    return classnames('menu-flyout-list', `menu-flyout-list--direction-${this.direction}`, this.opened && 'menu-flyout-list--opened', this.canScrollUp && 'menu-flyout-list--can-scroll-up', this.canScrollDown && 'menu-flyout-list--can-scroll-down', this.flipHorizontal && `menu-flyout-list--flip-horizontal`, this.flipVertical && `menu-flyout-list--flip-vertical`);
  }
  render() {
    return (h(Host, { role: "menu" }, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), ref: (el) => (this.base = el), part: "base", style: { maxHeight: `calc(${this.windowHeight}px - 20px)` }, onWheelCapture: this.handleWheel }, h("div", { class: "menu-flyout-list__list", ref: (el) => (this.list = el), onScroll: this.handleScroll }, h("slot", null)), h("div", { "aria-hidden": "true", class: "menu-flyout-list__scroll-up-indicator" }), h("div", { "aria-hidden": "true", class: "menu-flyout-list__scroll-down-indicator" }))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "opened": ["openedChanged"]
  }; }
};
MenuFlyoutList.style = menuFlyoutListCss;

const navIconCss = "scale-nav-icon{--spacing-mobile:var(--telekom-spacing-unit-x0) 6px;--font-size-mobile:var(--telekom-typography-font-size-footnote);--line-height-mobile:var(--telekom-typography-line-spacing-tight);--font-weight-mobile:var(--telekom-typography-font-weight-bold);--spacing-desktop:0 0 0 var(--telekom-spacing-unit-x4);--font-size-desktop:var(--telekom-typography-font-size-small);--line-height-desktop:var(--telekom-typography-line-spacing-standard);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed)}.meta-navigation__item-link{color:var(--color);display:flex;transition:all 0.2s ease-in-out;align-items:center;font-weight:var(--font-weight-mobile);text-decoration:none;height:var(--header-nav-height)}.meta-navigation__item--selected .meta-navigation__item-link{color:var(--color)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.meta-navigation__item-link{color:var(--telekom-color-text-and-icon-inverted-standard)}}.meta-navigation__item-link:hover{color:var(--color-hover)}.meta-navigation__item-link:active{color:var(--color-active)}@media (max-width: 1023px){.meta-navigation__item-link{min-width:24px;height:auto}.meta-navigation__item-link{margin:var(--spacing-mobile);font-size:var(--font-size-mobile);line-height:var(--line-height-mobile);flex-direction:column}.meta-navigation__item.mobile-menu{width:50px;text-align:center;cursor:pointer}.meta-navigation__item-link .meta-navigation__item-link-icon{width:18px;height:18px;margin-bottom:4px}}@media (min-width: 1024px){.meta-navigation__item scale-menu-flyout{height:24px}.meta-navigation__item-link{margin:var(--spacing-desktop);font-size:var(--font-size-desktop);line-height:var(--line-height-desktop)}.meta-navigation__item-link .meta-navigation__item-link-icon{margin-right:6px}}";

const NavIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** (optional) href value */
    this.href = 'javascript:void(0);';
    // DEPRECATED - mobileMenuOpen should replace isMobileMenuOpen
    this.isMobileMenuOpen = false;
    this.mobileMenuOpen = false;
    this.badge = false;
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isActive !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: 'warn',
        source: this.host,
      });
    }
    if (this.isMobileMenuOpen !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isMobileMenuOpen" is deprecated. Please use the "mobileMenuOpen" property!',
        type: 'warn',
        source: this.host,
      });
    }
  }
  render() {
    return (h("li", { class: this.getCssClassMap() }, h("a", { class: "meta-navigation__item-link", ref: this.refMobileMenuToggle ||
        this.refMobileUserMenuToggle ||
        this.refUserMenuToggle, href: this.href, onClick: this.clickLink, onKeyDown: (event) => {
        if (!this.refMobileMenuToggle) {
          return;
        }
        if (['Enter', ' ', 'Escape', 'Esc'].includes(event.key)) {
          event.preventDefault();
          this.clickLink(event);
        }
      } }, this.badge || (this.badgeLabel && this.badge) || this.badgeLabel ? (h("scale-notification-badge", { label: this.badgeLabel, type: "nav-icon" }, renderIcon({
      tag: `scale-icon-${this.icon}`,
      attributes: {
        class: 'meta-navigation__item-link-icon',
        selected: this.active || this.isActive,
      },
    }))) : (renderIcon({
      tag: `scale-icon-${this.icon}`,
      attributes: {
        class: 'meta-navigation__item-link-icon',
        selected: this.active || this.isActive,
      },
    })), h("span", { class: "meta-navigation__item-label" }, h("slot", null)))));
  }
  getCssClassMap() {
    return classnames('meta-navigation__item', (this.active ||
      this.isActive ||
      this.mobileMenuOpen ||
      this.isMobileMenuOpen) &&
      'meta-navigation__item--selected', !!this.refMobileMenuToggle && 'mobile-menu');
  }
  get host() { return getElement(this); }
};
NavIcon.style = navIconCss;

const navMainCss = "scale-nav-main{--spacing-x:var(--telekom-typography-font-size-body);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-hovered);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-size:var(--telekom-typography-font-size-callout);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:var(--telekom-typography-line-spacing-tight)}.main-navigation__item{height:100%;padding-left:var(--spacing-x);padding-right:var(--spacing-x)}.main-navigation__item:has(a[href]){cursor:pointer}.main-navigation__item-link-text{white-space:nowrap}.main-navigation__item.mega-menu--visible .mega-menu{display:block}.main-navigation__item.mega-menu--visible .mega-menu__wrapper{pointer-events:visible}.main-navigation__item .main-navigation__item-link{display:flex;height:100%;color:var(--color);font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);transition:color, border 0.2s ease-in-out;align-items:center;text-decoration:none}.main-navigation__item:hover .main-navigation__item-link{color:var(--color-hover)}.main-navigation__item:hover .main-navigation__item-link-text{border-bottom:2px solid var(--color-hover);color:var(--color-hover);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item:active .main-navigation__item-link{color:var(--color-active)}.main-navigation__item:active .main-navigation__item-link-text{border-bottom:2px solid var(--color-active);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item.selected .main-navigation__item-link{color:var(--color-selected)}.main-navigation__item.selected:hover .main-navigation__item-link{color:var(--color-hover)}.main-navigation__item.selected .main-navigation__item-link-text{border-bottom:2px solid var(--color-selected);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item.selected:hover .main-navigation__item-link-text{color:var(--color-hover);border-bottom:2px solid var(--color-hover)}.main-navigation__item.mega-menu--visible .main-navigation__item-link-text{border-bottom:2px solid var(--color-hover);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.sr-only{position:absolute;left:-10000px;overflow:hidden}";

const NavMain = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // DEPRECATED - megaMenuVisible should replace isMegaMenuVisible
    this.isMegaMenuVisible = false;
    /** (optional) if this mega-menu is visible */
    this.megaMenuVisible = false;
    /** (optional) href value */
    this.href = 'javascript:void(0);';
  }
  componentWillLoad() {
    this.hasPopup =
      this.popup || !!this.hostElement.querySelector('app-mega-menu');
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
    if (this.isActive !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  render() {
    return (h(Host, null, h("li", { class: this.getCssClassMap() }, h("a", { class: "main-navigation__item-link", href: this.href, "aria-current": this.active || this.isActive ? 'true' : 'false', "aria-haspopup": this.hasPopup ? 'true' : 'false', onClick: this.clickLink }, h("span", { class: "main-navigation__item-link-text" }, this.name), (this.active || this.isActive) && (h("span", { class: "sr-only" }, "active"))), h("slot", null))));
  }
  getCssClassMap() {
    return classnames('main-navigation__item', (this.megaMenuVisible || this.isMegaMenuVisible) && 'mega-menu--visible', (this.active || this.isActive) && 'selected');
  }
  get hostElement() { return getElement(this); }
};
NavMain.style = navMainCss;

const navSegmentCss = "scale-nav-segment{--transition:all 0.2s ease-in-out;--color:var(--telekom-color-text-and-icon-white-standard);--spacing-y:var(--telekom-spacing-unit-x1);--font-size:var(--telekom-typography-font-size-caption);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:var(--telekom-typography-line-spacing-extra-tight);--border-bottom:1px solid var(--telekom-color-text-and-icon-white-standard)}.sr-only{position:absolute;left:-10000px;overflow:hidden}.segment-navigation__item{list-style:none}.segment-navigation__item-link{color:var(--color);padding:var(--spacing-y) 0;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);transition:var(--transition);text-decoration:none}.segment-navigation__item-link:hover,.segment-navigation__item-link.active{border-bottom:var(--border-bottom);transition:var(--transition)}";

const NavSegment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** (optional) href value */
    this.href = 'javascript:void(0);';
  }
  componentWillRender() {
    // make sure the deprecated props overwrite the actual ones if used
    // and show status note deprecated
    if (this.isActive !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "isActive" is deprecated. Please use the "active" property!',
        type: 'warn',
        source: this.host,
      });
    }
  }
  render() {
    return (h("li", { class: this.getCssClassMap() }, h("a", { class: classnames('segment-navigation__item-link', (this.active || this.isActive) && 'active'), href: this.href, onFocus: () => {
        window.scrollTo({ top: 0 });
      }, "aria-current": this.active || this.isActive ? 'true' : 'false' }, h("slot", null), (this.active || this.isActive) && (h("span", { class: "sr-only" }, "active")))));
  }
  getCssClassMap() {
    return classnames('segment-navigation__item');
  }
  get host() { return getElement(this); }
};
NavSegment.style = navSegmentCss;

const notificationBadgeCss = ":host{--padding-type-text-after-badge-slot:0 0 0 12px;--padding-type-icon-after-badge-slot:0 0 0 7px;--background-color-circle:var(--telekom-color-primary-standard);--color-circle:var(--telekom-color-text-and-icon-inverted-standard);--font-size-circle:var(--telekom-typography-font-size-footnote);--font-weight-circle:bold;--border-radius-circle:var(--telekom-radius-circle);--color-notification-badge-border-focus:var(\n    --telekom-color-functional-focus\n  );--color-notification-badge-border-hover:var(\n    --telekom-color-text-and-icon-primary-hovered\n  );--line-width-notification-badge-border-focus:2px;--padding-notification-badge-border:8px 5px 0 5px;--margin-notification-badge-border:-8px -5px 0 -5px}.notification-badge-border{display:inline-block;border:var(--line-width-notification-badge-border-focus) solid transparent;padding:var(--padding-notification-badge-border);margin:var(--margin-notification-badge-border)}.notification-badge-border:hover{color:var(--color-notification-badge-border-hover);cursor:pointer}.notification-badge-border:focus{border:var(--line-width-notification-badge-border-focus) solid\n    var(--color-notification-badge-border-focus);outline:none;padding:var(--padding-notification-badge-border);border-radius:3px}.notification-badge{display:flex;align-items:center}.notification-badge__wrapper{text-decoration:none;position:relative;display:inline-block;justify-content:center}.notification-badge--nav-icon .notification-badge__wrapper{margin-bottom:-5px}.notification-badge__circle{display:flex;position:absolute;font-size:var(--font-size-circle);font-weight:var(--font-weight-circle);border-radius:var(--border-radius-circle);background-color:var(--background-color-circle);color:var(--color-circle);align-items:center;justify-content:center}.notification-badge.notification-badge--label .notification-badge__circle{padding:0 2px}::slotted([slot='after-badge']){padding:var(--padding-type-icon-after-badge-slot)}.notification-badge.notification-badge--text ::slotted([slot='after-badge']){padding:var(--padding-type-text-after-badge-slot)}@media (min-width: 1024px){.notification-badge.notification-badge--icon .notification-badge__circle{top:-4px;right:-2px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--icon .notification-badge__circle{top:-8px;right:-5px;height:14px;min-width:10px}.notification-badge.notification-badge--nav-icon .notification-badge__circle{top:-5px;right:4px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--nav-icon .notification-badge__circle{top:-8px;right:1px;height:14px;min-width:10px}.notification-badge.notification-badge--text .notification-badge__circle{top:-5px;right:-10px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--text .notification-badge__circle{top:-10px;right:-15px;height:14px;min-width:10px}}@media (max-width: 1023px){.notification-badge.notification-badge--icon .notification-badge__circle{top:-4px;right:-1px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--icon .notification-badge__circle{top:-6px;right:-4px;height:14px;min-width:10px}.notification-badge.notification-badge--nav-icon .notification-badge__circle{top:0px;right:-1px;height:6px;min-width:6px}.notification-badge.notification-badge--label.notification-badge--nav-icon .notification-badge__circle{top:-3px;right:-4.5px;height:12px;min-width:8px}.notification-badge.notification-badge--text .notification-badge__circle{top:-4px;right:-10px;height:6px;min-width:6px}.notification-badge.notification-badge--label.notification-badge--text .notification-badge__circle{top:-6px;right:-15px;height:14px;min-width:10px}}";

const NotificationBadge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** (optional) Maximal number of characters displayed in the badge */
    this.maxCharacters = 3;
    /** (optional) Setting/Slotcontent in which the badge is used */
    this.type = 'icon';
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: 'beta' });
  }
  getBadgeLabel() {
    if (this.label) {
      if (!isNaN(this.label)) {
        let labelNumber = '' + this.label;
        if (labelNumber.length > this.maxCharacters) {
          const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
          const tier = Math.floor(Math.log10(Number(this.label)) / 3) || 0;
          if (tier > 0) {
            const scaled = Number(this.label) / Math.pow(10, tier * 3);
            labelNumber = scaled.toFixed(1).replace('.0', '') + SI_SYMBOL[tier];
          }
        }
        return labelNumber;
      }
      return this.label;
    }
  }
  getRender() {
    return (h("div", { class: this.getCssClassMap() }, h("span", { class: "notification-badge__wrapper" }, h("slot", null), h("span", { class: "notification-badge__circle" }, this.getBadgeLabel())), h("slot", { name: "after-badge" })));
  }
  render() {
    return (h(Host, null, this.type !== 'nav-icon' ? (h("div", { class: "notification-badge-border", tabIndex: 0, onClick: this.clickHandler }, this.getRender())) : (this.getRender())));
  }
  getCssClassMap() {
    return classnames(`notification-badge`, this.label && `notification-badge--label`, this.type && `notification-badge--${this.type}`);
  }
  get hostElement() { return getElement(this); }
};
NotificationBadge.style = notificationBadgeCss;

export { MegaMenu as app_mega_menu, MainNavigationMobile as app_navigation_main_mobile, NavigationSectorMobile as app_navigation_sector_mobile, AppNavigationUserMenu as app_navigation_user_menu, MenuFlyout as scale_menu_flyout, MenuFlyoutList as scale_menu_flyout_list, NavIcon as scale_nav_icon, NavMain as scale_nav_main, NavSegment as scale_nav_segment, NotificationBadge as scale_notification_badge };
