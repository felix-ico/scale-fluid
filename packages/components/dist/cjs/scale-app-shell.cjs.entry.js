'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const appShellCss = ":host{--background:var(--telekom-color-background-canvas, #fff);--spacing-x:var(--telekom-spacing-unit-x6);--min-height:100vh}.sr-only{position:absolute;left:-10000px;overflow:hidden}.shell{display:flex;min-height:var(--min-height);flex-direction:column}.shell .content{box-sizing:border-box;align-self:center;width:100%;background:var(--background);padding-left:var(--spacing-x);padding-right:var(--spacing-x);flex:1}@media (min-width: 1552px){.shell .content{max-width:var(--header-max-width)}}";

const Shell = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, this.styles && index.h("style", null, this.styles), index.h("div", { part: "base", class: "shell" }, this.hasSlotHeader ? (index.h("slot", { name: "header" })) : (index.h("scale-app-header", { logoClick: this.logoClick, logoAriaDescribedBy: this.logoAriaDescribedBy, logoHref: this.logoHref, logoTitle: this.logoTitle, logoHideTitle: this.logoHideTitle, portalName: this.portalName, mainNavigation: this.mainNavigation, iconNavigation: this.iconNavigation, userNavigation: this.userNavigation, sectorNavigation: this.sectorNavigation, addonNavigation: this.addonNavigation, activeRouteId: this.activeRouteId, activeSectorId: this.activeSectorId, claimLang: this.claimLang, sticky: this.sticky })), index.h("main", { class: "content" }, index.h("slot", null)), index.h("slot", { name: "footer" }))));
  }
  get hostElement() { return index.getElement(this); }
};
Shell.style = appShellCss;

exports.scale_app_shell = Shell;
