import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const sidebarNavItemCss = ":host{--border-bottom-color:var(--telekom-color-ui-faint);--border-left-color-third-nesting:var(--telekom-color-ui-strong);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-primary:var(--telekom-color-text-and-icon-primary-standard);--background-color-before-active:var(--color-primary);--font-weight-bold:var(--telekom-typography-font-weight-bold);--box-shadow-focus:inset 0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus)}.sidebar-nav-item{border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:var(--border-bottom-color)}.sidebar-nav-item--active{position:relative;color:var(--color-primary)}.sidebar-nav-item--active::before{content:'';display:block;position:absolute;top:0;left:var(--left-current-border, 0);width:0;height:100%;background-color:var(--background-color-before-active);border-left:2px solid transparent}.sidebar-nav-item--condensed.sidebar-nav-item--active::before{left:-1px}:host([nesting-level='1']) .sidebar-nav-item,.sidebar-nav-item--bold{font-weight:var(--font-weight-bold)}:host([nesting-level='3']) .sidebar-nav-item{border-left-color:var(--border-left-color-third-nesting);border-left-style:solid;border-left-width:0.0625rem}::slotted(a){color:currentColor;display:block;padding-top:1rem;padding-right:1rem;padding-bottom:1rem;padding-left:var(--spacing-indent);border-radius:var(--telekom-radius-small);text-decoration:none;outline:none}:host([nesting-level='2']) ::slotted(a){padding-left:calc(var(--spacing-indent) + 0.75rem)}::slotted(a:hover){color:var(--color-hover)}::slotted(a:focus){box-shadow:var(--box-shadow-focus)}::slotted(a:active){color:var(--color-active)}.sidebar-nav-item--condensed{border-bottom-width:0}.sidebar-nav-item--condensed ::slotted(a){padding-top:0.5rem;padding-left:0.75rem;padding-right:0.5rem;padding-bottom:0.5rem}";

const SR_ACTIVE_TEXT = ' Zurzeit aktiv';
const isActive = (current) => {
  try {
    return !!JSON.parse(current);
  }
  catch (e) {
    if (typeof current === 'string') {
      return true;
    }
    return !!current;
  }
};
const getScreenReaderText = (current) => {
  let text;
  try {
    text = JSON.parse(current);
  }
  catch (e) {
    text = current;
  }
  return typeof text === 'string' && text.length > 0
    ? ` ${text}`
    : SR_ACTIVE_TEXT;
};
const SidebarNavItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** Used normally for third level items, remove the bottom border */
    this.condensed = false;
    /** Bold text */
    this.bold = false;
    /** Text gets the active color */
    this.active = false;
    /**
     * Mark the child link as "current" with `aria-current=page`.
     * Provide the text hint if needed, default is: "Zurzeit aktiv"
     */
    this.current = null;
  }
  nestingLevelChanged(newValue) {
    if (newValue === 1) {
      this.bold = true;
    }
  }
  currentChanged(newValue) {
    this.handleAriaCurrentInSlottedA(newValue);
    this.syncActiveToCurrent(newValue);
  }
  componentDidLoad() {
    this.handleAriaCurrentInSlottedA(this.current);
    if (this.current) {
      this.syncActiveToCurrent(this.current);
    }
  }
  /**
   * If an item is `current`, it should be `active` as well
   */
  syncActiveToCurrent(newValue) {
    this.active = isActive(newValue);
  }
  /**
   * When `current` is set, this will:
   * - set the aria-current=page attribute on the link
   * - append a text-only hint for screen readers
   * so we end up with something like this:
   * <a href="..." aria-current="page">
   *    Example<span style="...visible to SR only..."> Active link</span>
   * </a>
   * @param current this.current
   */
  handleAriaCurrentInSlottedA(current) {
    const a = this.el.querySelector('a');
    if (this.srOnlyElement != null) {
      a.removeChild(this.srOnlyElement);
      this.srOnlyElement = null;
    }
    if (a != null) {
      a.removeAttribute('aria-current');
    }
    if (isActive(current) && a != null) {
      this.srOnlyElement = this.createScreenReaderOnlySpan();
      a.appendChild(this.srOnlyElement);
      a.setAttribute('aria-current', 'page');
    }
  }
  createScreenReaderOnlySpan() {
    const text = getScreenReaderText(this.current);
    const span = document.createElement('span');
    // .sr-only but inline
    Object.assign(span.style, {
      position: 'absolute',
      left: '-10000px',
      overflow: 'hidden',
    });
    span.textContent = text;
    return span;
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("li", { part: this.getBasePartMap(), class: this.getCssClassMap(), role: "listitem" }, h("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'sidebar-nav-item';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classnames(component, this.bold && `${prefix}bold`, this.condensed && `${prefix}condensed`, this.active && `${prefix}active`);
  }
  get el() { return this; }
  static get watchers() { return {
    "nestingLevel": ["nestingLevelChanged"],
    "current": ["currentChanged"]
  }; }
  static get style() { return sidebarNavItemCss; }
}, [1, "scale-sidebar-nav-item", {
    "condensed": [4],
    "bold": [4],
    "active": [1540],
    "current": [8],
    "nestingLevel": [2, "nesting-level"],
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-sidebar-nav-item"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-sidebar-nav-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SidebarNavItem);
      }
      break;
  } });
}

const ScaleSidebarNavItem = SidebarNavItem;
const defineCustomElement = defineCustomElement$1;

export { ScaleSidebarNavItem, defineCustomElement };
