import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { s as statusNote } from './status-note-0089e9c9.js';

const tabNavCss = ":host{--tab-height:var(--telekom-spacing-unit-x10);--tab-spacing-horizontal:var(--telekom-spacing-unit-x3);--tab-spacing-vertical:var(--telekom-spacing-unit-x4);--tab-radius:var(--telekom-radius-small);--tab-border-size:var(--telekom-line-weight-standard);--tab-border-size-selected:var(--telekom-line-weight-highlight);--tab-border-color:var(--telekom-color-ui-subtle);--tab-height-large:var(--telekom-spacing-unit-x12);--tab-spacing-horizontal-large:var(--telekom-spacing-unit-x4);--tab-spacing-vertical-large:0.875rem}";

/**
 * @see https://github.com/GoogleChromeLabs/howto-components/blob/master/elements/howto-tabs/howto-tabs.js
 */
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const HOME = 'Home';
const END = 'End';
const TabNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** True for smaller height and font size in tab headers. */
    /** @deprecated - size should replace small */
    this.small = false;
    /** (optional) size  */
    this.size = 'small';
  }
  handleClick(event) {
    const nextTab = event.target;
    if (nextTab.getAttribute('role') !== 'tab') {
      return;
    }
    this.selectTab(nextTab);
  }
  handleKeydown(event) {
    const target = event.target;
    let nextTab;
    if (target.getAttribute('role') !== 'tab') {
      return;
    }
    // Do not handle modifier shortcuts typically used by assistive technology
    if (event.altKey) {
      return;
    }
    switch (event.key) {
      case ARROW_LEFT:
        nextTab = this.getPreviousTab();
        break;
      case ARROW_RIGHT:
        nextTab = this.getNextTab();
        break;
      case HOME:
        nextTab = this.getFirstTab();
        break;
      case END:
        nextTab = this.getLastTab();
        break;
      default:
        return;
    }
    event.preventDefault();
    this.selectTab(nextTab);
  }
  connectedCallback() {
    if (!this.el.hasAttribute('role')) {
      this.el.setAttribute('role', 'tablist');
    }
  }
  componentDidRender() {
    Promise.all([
      customElements.whenDefined('scale-tab-header'),
      customElements.whenDefined('scale-tab-panel'),
    ]).then(() => {
      this.linkPanels();
      this.propagateSizeToTabs();
    });
    if (this.small !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "small" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.el,
      });
    }
  }
  getAllTabs() {
    return Array.from(this.el.querySelectorAll('scale-tab-header'));
  }
  getAllEnabledTabs() {
    return Array.from(this.el.querySelectorAll('scale-tab-header:not([disabled])'));
  }
  getAllPanels() {
    return Array.from(this.el.querySelectorAll('scale-tab-panel'));
  }
  getPreviousTab() {
    const tabs = this.getAllEnabledTabs();
    const index = tabs.findIndex((tab) => tab.selected) - 1;
    return tabs[(index + tabs.length) % tabs.length];
  }
  getNextTab() {
    const tabs = this.getAllEnabledTabs();
    const index = tabs.findIndex((tab) => tab.selected) + 1;
    return tabs[index % tabs.length];
  }
  getFirstTab() {
    const tabs = this.getAllEnabledTabs();
    return tabs[0];
  }
  getLastTab() {
    const tabs = this.getAllEnabledTabs();
    return tabs[tabs.length - 1];
  }
  linkPanels() {
    const tabs = this.getAllEnabledTabs();
    const selectedTab = tabs.find((x) => x.selected) || tabs[0];
    tabs.forEach((tab) => {
      const panel = tab.nextElementSibling;
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', tab.id);
    });
    this.selectTab(selectedTab);
  }
  reset() {
    const tabs = this.getAllEnabledTabs();
    const panels = this.getAllPanels();
    tabs.forEach((tab) => (tab.selected = false));
    panels.forEach((panel) => (panel.hidden = true));
  }
  findPanelForTab(tab) {
    const panelId = tab.getAttribute('aria-controls');
    return this.el.querySelector(`#${panelId}`);
  }
  selectTab(nextTab) {
    const nextPanel = this.findPanelForTab(nextTab);
    this.reset();
    nextPanel.hidden = false;
    nextTab.selected = true;
  }
  /**
   * Sets or removes the `large` prop in `scale-tab-header` and `scale-tab-panel` children.
   */
  propagateSizeToTabs() {
    const action = this.size === 'large' ? 'setAttribute' : 'removeAttribute';
    const tabs = this.getAllTabs();
    const panels = this.getAllPanels();
    [...tabs, ...panels].forEach((child) => child[action]('size', 'large'));
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, h("slot", { name: "tab" }), h("slot", { name: "panel" }))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tab-nav';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classnames(component, `${prefix}`);
  }
  get el() { return getElement(this); }
};
TabNav.style = tabNavCss;

export { TabNav as scale_tab_nav };
