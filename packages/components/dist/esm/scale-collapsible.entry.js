import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { e as emitEvent } from './utils-004d7b05.js';

const collapsibleCss = ":host{--spacing-y:var(--telekom-spacing-unit-x4);--font-size-button:var(--telekom-typography-font-size-callout);--font-weight-button:var(--telekom-typography-font-weight-extra-bold);--line-height-button:var(--telekom-typography-line-spacing-standard);--border-width-button:var(--telekom-spacing-unit-x05);--radius-button:var(--telekom-radius-small);--spacing-left-button:var(--telekom-spacing-unit-x1);--spacing-left-button-text:var(--telekom-spacing-unit-x2);--color-button-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-button-active:var(--telekom-color-text-and-icon-primary-pressed);--background-button-hover:var(--telekom-color-ui-state-fill-hovered);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--spacing-top-icon:calc(var(--telekom-spacing-unit-x1) + 1px);--spacing-right-content:var(--telekom-spacing-unit-x12);--spacing-left-content:var(--telekom-spacing-unit-x8);--spacing-top-content:var(--telekom-spacing-unit-x4);--spacing-bottom-content:var(--telekom-spacing-unit-x6)}.collapsible{position:relative;margin:var(--spacing-y) 0}.collapsible--expanded:before{top:0;left:0;right:0;width:100%;border:var(--telekom-spacing-unit-x025) solid transparent;content:'';display:block;position:absolute;pointer-events:none;bottom:calc(-1 * var(--spacing-y))}.collapsible__heading{margin:0}.collapsible__button{color:currentColor;width:100%;display:flex;text-align:left;align-items:flex-start;padding-top:0;border-color:transparent;border-style:solid;padding-right:0;padding-bottom:0;background-color:transparent;font-size:var(--font-size-button);font-weight:var(--font-weight-button);line-height:var(--line-height-button);border-width:var(--border-width-button);border-radius:var(--radius-button);padding-left:var(--spacing-left-button);font-family:inherit;word-spacing:inherit;letter-spacing:inherit}.collapsible__button-text{margin-left:var(--spacing-left-button-text)}.collapsible__button:hover{cursor:pointer;color:var(--color-button-hover);background-color:var(--background-button-hover)}.collapsible__button:active{color:var(--color-button-active);background-color:transparent}.collapsible__button:focus{outline:var(--focus-outline)}.collapsible__icon{transform:rotate(0.75turn);flex-shrink:0;margin-top:var(--spacing-top-icon)}.collapsible__icon-right{margin-left:auto}.collapsible__button[aria-expanded='true'] .collapsible__icon{transform:none}.collapsible__content{padding-right:var(--spacing-right-content);padding-left:var(--spacing-left-content);margin-top:var(--spacing-top-content);margin-bottom:var(--spacing-bottom-content)}";

let i = 0;
const Collapsible = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleExpand = createEvent(this, "scale-expand", 7);
    this.scaleExpandLegacy = createEvent(this, "scaleExpand", 7);
    /** Default aria-level for heading */
    this.headingLevel = 2;
    this.iconLocation = 'left';
    this.handleClick = () => {
      this.expanded = !this.expanded;
      emitEvent(this, 'scaleExpand', { expanded: this.expanded });
    };
  }
  componentWillLoad() {
    const j = i++;
    this.headingId = 'collapsable-heading-' + j;
    this.panelId = 'collapsable-panel-' + j;
  }
  componentDidLoad() {
    this.setHeadingFromLightDOM();
  }
  /**
   * @deprecated Safe to remove in 4.0
   * @see https://github.com/telekom/scale/pull/319
   */
  setHeadingFromLightDOM() {
    const lightHeading = this.hostElement.querySelector(':first-child');
    if (lightHeading == null) {
      return;
    }
    // Only proceed if the element is not a heading and has no `slot` attribute
    const isHeading = lightHeading.tagName.charAt(0).toUpperCase() === 'H';
    const hasSlotAttr = lightHeading.hasAttribute('slot');
    if (isHeading && !hasSlotAttr) {
      this.headingElement.innerHTML = lightHeading.innerHTML;
      lightHeading.style.display = 'none';
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), part: classnames('base', this.expanded && 'expanded') }, h("h2", { "aria-level": this.headingLevel, class: "collapsible__heading", part: "heading" }, h("button", { id: this.headingId, class: "collapsible__button", part: "button", onClick: this.handleClick, "aria-expanded": this.expanded ? 'true' : 'false', "aria-controls": this.panelId }, this.iconLocation === 'left' ? (h("scale-icon-navigation-collapse-down", { size: 16, decorative: true, class: "collapsible__icon", part: classnames('icon', this.expanded && 'expanded') })) : null, h("span", { ref: (el) => (this.headingElement = el), class: "collapsible__button-text", part: "button-text" }, h("slot", { name: "heading" })), this.iconLocation === 'right' ? (h("scale-icon-navigation-collapse-down", { size: 16, decorative: true, class: "collapsible__icon collapsible__icon-right", part: classnames('icon', this.expanded && 'expanded') })) : null)), h("div", { id: this.panelId, role: "region", "aria-labelledby": this.headingId, hidden: !this.expanded, class: "collapsible__content", part: "content" }, h("slot", null)))));
  }
  getCssClassMap() {
    return classnames('collapsible', this.expanded && 'collapsible--expanded');
  }
  get hostElement() { return getElement(this); }
};
Collapsible.style = collapsibleCss;

export { Collapsible as scale_collapsible };
