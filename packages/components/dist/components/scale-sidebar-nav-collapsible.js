import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { d as defineCustomElement$2 } from './navigation-collapse-down.js';

const sidebarNavCollapsibleCss = ":host{--opacity-chevron:1;--border-bottom-color:var(--telekom-color-ui-faint);--border-left-color-third-nesting:var(--telekom-color-ui-strong);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-primary:var(--telekom-color-text-and-icon-primary-hovered);--background-color-before-active:var(--color-primary);--font-weight-bold:var(--telekom-typography-font-weight-bold);--box-shadow-focus:inset 0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus)}.sidebar-nav-collapsible{margin:0;border-bottom-color:var(--border-bottom-color);border-bottom-style:solid;border-bottom-width:0}.sidebar-nav-collapsible--condensed{border-bottom-width:1px}.sidebar-nav-collapsible__wrapper{border-bottom-color:var(--border-bottom-color);border-bottom-style:solid;border-bottom-width:1px}.sidebar-nav-collapsible--condensed .sidebar-nav-collapsible__wrapper{border-bottom-width:0}.sidebar-nav-collapsible__button{color:currentColor;width:100%;display:flex;box-sizing:border-box;text-align:left;align-items:center;padding-top:1rem;padding-right:calc(0.5 * var(--spacing-indent));padding-bottom:1rem;padding-left:var(--spacing-indent);justify-content:space-between;text-decoration:none;font-family:inherit;border-radius:var(--telekom-radius-small)}.sidebar-nav-collapsible__button:hover{color:var(--color-hover)}.sidebar-nav-collapsible__button:active{color:var(--color-active)}.sidebar-nav-collapsible__button:focus{outline:none;box-shadow:var(--box-shadow-focus)}.sidebar-nav-collapsible--active .sidebar-nav-collapsible__button{position:relative;color:var(--color-primary)}.sidebar-nav-collapsible--active .sidebar-nav-collapsible__button::before{content:'';display:block;position:absolute;top:0;left:var(--left-current-border, 0);width:0;height:100%;background-color:var(--color-primary);border-left:2px solid transparent}:host([nesting-level='1']) .sidebar-nav-collapsible__button,.sidebar-nav-collapsible--bold .sidebar-nav-collapsible__button{font-weight:var(--font-weight-bold)}:host([nesting-level='2']) .sidebar-nav-collapsible__button{padding-left:calc(var(--spacing-indent) + 0.75rem)}.sidebar-nav-collapsible__icon{transition:opacity 150ms}[aria-expanded='true'] .sidebar-nav-collapsible__icon{transform:rotate(0.5turn)}@media (hover: hover){[aria-expanded='false'] .sidebar-nav-collapsible__icon{opacity:var(--opacity-chevron, 1)}.sidebar-nav-collapsible__button:hover .sidebar-nav-collapsible__icon{opacity:1}.sidebar-nav-collapsible__button:focus .sidebar-nav-collapsible__icon{opacity:1}}.sidebar-nav-collapsible__list{list-style:none;padding-left:0;margin-top:0;margin-bottom:0;border-bottom-width:1px;}.sidebar-nav-collapsible--condensed .sidebar-nav-collapsible__list{margin-top:1em;margin-left:var(--spacing-indent);margin-bottom:2em}";

const SidebarNavCollapsible = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** The parent wrapper */
    this.tag = 'li';
    /** The URL where the link should point to */
    this.href = '#';
    /** Label and icon get the active color */
    this.active = false;
    /** Bold label and icon */
    this.bold = false;
    /** Used normally for third level items */
    this.condensed = false;
    this.handleClick = (event) => {
      event.preventDefault();
      this.expanded = !this.expanded;
    };
    /**
     * Simulate a <button> allowing using the Space key for toggling the menu.
     */
    this.handleKeydown = (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey) {
        return;
      }
      if (event.defaultPrevented) {
        return;
      }
      if (event.code === 'Space') {
        this.expanded = !this.expanded;
      }
    };
  }
  nestingLevelChanged(newValue) {
    if (newValue === 1) {
      this.bold = true;
    }
  }
  render() {
    const Tag = this.tag;
    return (h(Host, null, this.styles && h("style", null, this.styles), h(Tag, { part: this.getBasePartMap(), class: this.getCssClassMap(), role: "listitem" }, h("div", { class: "sidebar-nav-collapsible__wrapper", part: "wrapper" }, h("a", { href: this.href, class: "sidebar-nav-collapsible__button", onClick: this.handleClick, onKeyDown: this.handleKeydown, role: "button", "aria-expanded": this.expanded ? 'true' : 'false', part: classnames('button', this.active && 'button-active') }, this.label, h("scale-icon-navigation-collapse-down", { class: "sidebar-nav-collapsible__icon", selected: this.bold, size: 16, part: "icon" }))), h("ul", { hidden: !this.expanded, class: "sidebar-nav-collapsible__list", part: "list" }, h("slot", null)))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'sidebar-nav-collapsible';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classnames(component, this.condensed && `${prefix}condensed`, this.active && `${prefix}active`);
  }
  get el() { return this; }
  static get watchers() { return {
    "nestingLevel": ["nestingLevelChanged"]
  }; }
  static get style() { return sidebarNavCollapsibleCss; }
}, [1, "scale-sidebar-nav-collapsible", {
    "tag": [1],
    "label": [1],
    "href": [1],
    "expanded": [1540],
    "active": [4],
    "bold": [4],
    "condensed": [4],
    "nestingLevel": [2, "nesting-level"],
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-sidebar-nav-collapsible", "scale-icon-navigation-collapse-down"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-sidebar-nav-collapsible":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SidebarNavCollapsible);
      }
      break;
    case "scale-icon-navigation-collapse-down":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const ScaleSidebarNavCollapsible = SidebarNavCollapsible;
const defineCustomElement = defineCustomElement$1;

export { ScaleSidebarNavCollapsible, defineCustomElement };
