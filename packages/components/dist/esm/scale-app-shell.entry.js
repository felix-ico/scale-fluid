import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';

const appShellCss = ":host{--background:var(--telekom-color-background-canvas, #fff);--spacing-x:var(--telekom-spacing-unit-x6);--min-height:100vh}.sr-only{position:absolute;left:-10000px;overflow:hidden}.shell{display:flex;min-height:var(--min-height);flex-direction:column}.shell .content{box-sizing:border-box;align-self:center;width:100%;background:var(--background);padding-left:var(--spacing-x);padding-right:var(--spacing-x);flex:1}@media (min-width: 1552px){.shell .content{max-width:var(--header-max-width)}}";

const Shell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.portalName = '';
    this.claimLang = 'de';
    this.mainNavigation = [];
    this.iconNavigation = [];
    this.userNavigation = [];
    this.sectorNavigation = [];
    this.addonNavigation = [];
    this.activeRouteId = '';
    this.activeSectorId = '';
    this.sticky = false;
    this.scrolled = false;
  }
  componentWillLoad() {
    this.hasSlotHeader = !!this.hostElement.querySelector('[slot="header"]');
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: "base", class: "shell" }, this.hasSlotHeader ? (h("slot", { name: "header" })) : (h("scale-app-header", { logoClick: this.logoClick, logoAriaDescribedBy: this.logoAriaDescribedBy, logoHref: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, portalName: this.portalName, mainNavigation: this.mainNavigation, iconNavigation: this.iconNavigation, userNavigation: this.userNavigation, sectorNavigation: this.sectorNavigation, addonNavigation: this.addonNavigation, activeRouteId: this.activeRouteId, activeSectorId: this.activeSectorId, claimLang: this.claimLang, sticky: this.sticky })), h("main", { class: "content" }, h("slot", null)), h("slot", { name: "footer" }))));
  }
  get hostElement() { return getElement(this); }
};
Shell.style = appShellCss;

export { Shell as scale_app_shell };
