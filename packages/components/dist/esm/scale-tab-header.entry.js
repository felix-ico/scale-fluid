import { r as registerInstance, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { i as isScaleIcon } from './utils-004d7b05.js';
import { s as statusNote } from './status-note-0089e9c9.js';

const tabHeaderCss = ":host{outline:none;--font-size:var(--telekom-typography-font-size-body);--font-family:var(--telekom-typography-font-family-sans, TeleNeoWeb);--font-weight:var(--telekom-typography-font-weight-bold);--height:3rem;--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--spacing-right-slotted:var(--telekom-spacing-unit-x2);--color-disabled:var(--telekom-color-text-and-icon-disabled);--radius:var(--telekom-radius-standard);--font-size-large:var(--telekom-typography-font-size-callout)}.tab-header{color:var(--color);cursor:pointer;display:inline-flex;outline:none;position:relative;box-sizing:border-box;align-items:center;height:var(--tab-height);padding-right:var(--tab-spacing-horizontal);padding-left:var(--tab-spacing-horizontal);padding-top:var(--tab-spacing-vertical);padding-bottom:var(--tab-spacing-vertical);font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);border-radius:var(--tab-radius)}.tab-header{--tab-height:var(--height)}.tab-header--disabled{cursor:auto;color:var(--color-disabled)}.tab-header--disabled:after{cursor:auto;background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header--disabled:active{color:var(--color-disabled)}.tab-header--disabled:hover{color:var(--color-disabled) !important}.tab-header--disabled:hover:after{background-color:var(--telekom-color-ui-border-disabled) !important}.tab-header:after{left:0;right:0;width:100%;bottom:0;content:'';display:block;position:absolute;height:var(--tab-border-size);background-color:var(--tab-border-color)}.tab-header:before{left:0;right:0;width:100%;bottom:0;height:0;content:'';display:block;position:absolute;border-top:1px solid transparent}.tab-header:hover{color:var(--color-hover)}.tab-header:hover:after{background-color:var(--color-hover)}.tab-header:active{color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header:active:after{background-color:var(--color-active)}.tab-header ::slotted(*){margin-right:var(--spacing-right-slotted)}.tab-header--has-focus{border-radius:var(--tab-radius);outline:var(--focus-outline);z-index:1}.tab-header--has-focus.tab-header--selected:after{border-radius:0 0 3px 3px;width:98%;margin-left:1%}.tab-header--selected{color:var(--color-selected)}.tab-header--selected:after{height:var(--tab-border-size-selected);background-color:var(--color-selected)}.tab-header--selected:before{border-top:var(--tab-border-size-selected) solid transparent}.tab-header--large{padding-right:var(--tab-spacing-horizontal-large);padding-left:var(--tab-spacing-horizontal-large);padding-top:var(--tab-spacing-vertical-large);padding-bottom:var(--tab-spacing-vertical-large);font-size:var(--font-size-large)}";

const DEFAULT_ICON_SIZE = 24;
const PER_SPEC_ICON_SIZE = 16;
let i = 0;
const TabHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.generatedId = i++;
    /** True for a disabled Tabnavigation */
    this.disabled = false;
    /** True for smaller height and font size */
    /** @deprecated - size should replace small */
    this.small = false;
    /** (optional) size  */
    this.size = 'small';
    this.hasFocus = false;
  }
  selectedChanged(newValue) {
    if (!this.disabled) {
      if (newValue === true) {
        // Having focus on the host element, and not on inner elements,
        // is required because screen readers.
        this.hostElement.focus();
      }
      this.updateSlottedIcon();
    }
  }
  componentDidLoad() {
    this.setChildrenIconSize();
  }
  componentDidRender() {
    if (this.small !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "small" is deprecated. Please use css overwrites.',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  /**
   * Find slotted icons, and if any, add the `selected` attribute accordingly.
   */
  updateSlottedIcon() {
    const slot = this.container.querySelector('slot');
    if (slot === null) {
      return;
    }
    const children = Array.from(slot.assignedNodes())
      .filter((node) => node.nodeType === 1)
      .filter((node) => node.nodeName.toUpperCase().indexOf('ICON') > -1);
    if (children.length === 0) {
      return;
    }
    const action = this.selected ? 'setAttribute' : 'removeAttribute';
    children.forEach((child) => child[action]('selected', ''));
  }
  /**
   * Set any children icon's size according the button size.
   */
  setChildrenIconSize() {
    const icons = Array.from(this.hostElement.children).filter(isScaleIcon);
    icons.forEach((icon) => {
      // This is meh people might actually want 24
      if (icon.size === DEFAULT_ICON_SIZE) {
        icon.size = PER_SPEC_ICON_SIZE;
      }
    });
  }
  render() {
    return (h(Host, { id: `scale-tab-header-${this.generatedId}`, role: this.disabled ? false : 'tab', "aria-selected": this.selected ? 'true' : 'false', tabindex: this.disabled ? false : this.selected ? '0' : '-1', onFocus: () => (this.hasFocus = true), onBlur: () => (this.hasFocus = false) }, this.styles && h("style", null, this.styles), h("span", { part: this.getBasePartMap(), ref: (el) => (this.container = el), class: this.getCssClassMap() }, h("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tab-header';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classnames(component, this.selected && `${prefix}selected`, this.size === 'large' && `${prefix}large`, this.hasFocus && `${prefix}has-focus`, this.disabled && `${prefix}disabled`);
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "selected": ["selectedChanged"]
  }; }
};
TabHeader.style = tabHeaderCss;

export { TabHeader as scale_tab_header };
