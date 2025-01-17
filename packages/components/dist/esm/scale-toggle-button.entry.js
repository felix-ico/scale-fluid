import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { e as emitEvent } from './utils-004d7b05.js';
import { s as statusNote } from './status-note-0089e9c9.js';

const toggleButtonCss = ":host{--width:auto;--spacing-x:var(--telekom-spacing-unit-x6);--spacing-x-icon-only:var(--telekom-spacing-unit-x2);--min-height:var(--telekom-spacing-unit-x6);--height-xs:var(--telekom-spacing-unit-x6);--height-small:var(--telekom-spacing-unit-x8);--height-regular:var(--telekom-spacing-unit-x10);--height-large:var(--telekom-spacing-unit-x12);--radius:var(--telekom-radius-small);--transition:all var(--telekom-motion-duration-transition)\n      var(--telekom-motion-easing-standard),\n    border-radius var(--telekom-motion-duration-instant);--box-shadow-focus:inset 0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus);--font-weight:var(--telekom-typography-font-weight-bold);--font-size-large:var(--telekom-typography-font-size-body);--font-size-small:var(--telekom-typography-font-size-caption);--font-size-xs:var(--telekom-typography-font-size-small);--line-height:var(--telekom-spacing-unit-x2);--spacing-icon-x:var(--telekom-spacing-unit-x2);--vertical-align:middle;--border-color:var(--telekom-color-ui-border-standard);--border-color-disabled:var(--telekom-color-ui-border-disabled);--color-disabled:var(--telekom-color-text-and-icon-disabled);--font-size-small:var(--telekom-typography-font-size-small);--line-height-small:var(--telekom-typography-line-spacing-standard);--min-height-small:var(--telekom-spacing-unit-x8);--radius-primary:var(--radius);--background-primary:var(--telekom-color-ui-subtle);--background-primary-disabled:var(--telekom-color-ui-disabled);--color-primary:var(--telekom-color-ui-extra-strong);--color-primary-hover:var(--telekom-color-primary-hovered);--color-primary-active:var(--telekom-color-primary-pressed);--background-secondary:transparent;--color-secondary:var(--telekom-color-text-and-icon-standard);--background-secondary-hover:var(--telekom-color-ui-state-fill-hovered);--background-secondary-active:var(--telekom-color-ui-state-fill-pressed);--background-secondary-disabled:none;--border-secondary:var(--telekom-color-ui-border-standard);--border-secondary-hover:var(--telekom-color-ui-border-hovered);--border-secondary-active:var(--telekom-color-ui-border-pressed);--border-secondary-focus:var(--telekom-color-functional-focus);--color-selected:var(--telekom-color-text-and-icon-white-standard);--background-selected-light:var(--telekom-color-primary-standard);--background-selected-hover-light:var(--telekom-color-primary-hovered);--background-selected-active-light:var(--telekom-color-primary-pressed);--background-selected-dark:var(--telekom-color-ui-extra-strong);--background-selected-hover-dark:var(--telekom-color-ui-strong);--background-selected-active-dark:var(--telekom-color-ui-strong);--color-high-contrast:var(--telekom-color-text-and-icon-white-standard)}.toggle-button{box-sizing:border-box;display:inline-flex;align-items:center;position:relative;border:0;outline:none;cursor:pointer;user-select:none;font-family:inherit;word-spacing:inherit;letter-spacing:inherit;justify-content:center;text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);min-height:var(--min-height);width:var(--width);padding-left:var(--spacing-x);padding-right:var(--spacing-x);vertical-align:var(--vertical-align);transition:var(--transition);margin:0;color:var(--color-primary)}.toggle-button--primary{background:var(--background-primary)}.toggle-button--secondary{color:var(--color-secondary);background:var(--background-secondary)}.toggle-button--icon-before ::slotted(*){margin-right:var(--spacing-icon-x);pointer-events:none}.toggle-button--icon-after ::slotted(*){margin-left:var(--spacing-icon-x);pointer-events:none}.toggle-button--icon-only ::slotted(*){pointer-events:none}.toggle-button--xs{height:var(--height-xs);font-size:var(--font-size-xs)}.toggle-button--small{height:var(--height-small);font-size:var(--font-size-small)}.toggle-button--regular{height:var(--height-regular);font-size:var(--font-size-large)}.toggle-button--large{height:var(--height-large);font-size:var(--font-size-large)}.toggle-button:not(.button--disabled):focus{box-shadow:var(--box-shadow-focus)}.toggle-button:not(.button--disabled):hover{color:var(--color-secondary-hover);background-color:var(--background-secondary-hover)}.toggle-button:not(.button--disabled):active{color:var(--color-secondary-active);background-color:var(--background-secondary-active)}.toggle-button:disabled{color:var(--color-disabled);pointer-events:none;border:1px solid var(--border-color-disabled)}.toggle-button:disabled.toggle-button--primary{background:var(--background-primary-disabled)}.toggle-button--selected.toggle-button--color{color:var(--color-selected);background:var(--background-selected-light)}.toggle-button--selected:not(.button--disabled).toggle-button--color:hover{color:var(--color-selected);background:var(--background-selected-hover-light)}.toggle-button--selected:not(.button--disabled).toggle-button--color:active{color:var(--color-selected);background:var(--background-selected-active-light)}.toggle-button--selected.toggle-button--monochrome{color:var(--telekom-color-text-and-icon-inverted-standard);background:var(--background-selected-dark)}.toggle-button--selected:not(.button--disabled).toggle-button--monochrome:hover{color:var(--color-selected);background:var(--background-selected-hover-dark)}.toggle-button--selected:not(.button--disabled).toggle-button--monochrome:active{color:var(--color-selected);background:var(--background-selected-active-dark)}.toggle-button--border{border:1px solid var(--border-color)}.toggle-button--left,.toggle-button--left:disabled{border-right:0;border-radius:var(--radius-primary) 0 0 var(--radius-primary)}.toggle-button--right,.toggle-button--right:disabled{border-left:0;border-radius:0 var(--radius-primary) var(--radius-primary) 0}.toggle-button--both,.toggle-button--both:disabled{border-radius:var(--radius-primary)}.toggle-button--all,.toggle-button--all:disabled{border-radius:var(--radius-primary)}.toggle-button--neither,.toggle-button--neither:disabled{border-right:0;border-left:0;border-radius:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){.toggle-button{color:var(--color-high-contrast)}}";

var iconSizes;
(function (iconSizes) {
  iconSizes["xs"] = "12";
  iconSizes["small"] = "16";
  iconSizes["regular"] = "22";
  iconSizes["large"] = "24";
})(iconSizes || (iconSizes = {}));
let i = 0;
const ToggleButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleClick = createEvent(this, "scale-click", 7);
    this.scaleClickLegacy = createEvent(this, "scaleClick", 7);
    /** (optional) The size of the button */
    this.size = 'regular';
    /** (optional) Button background */
    this.background = 'white';
    /** @deprecated - variant should replace colorScheme */
    this.colorScheme = 'color';
    /** (optional) background variant of a selected toggle-button */
    this.variant = 'color';
    /** (optional) If `true`, the button is disabled */
    this.disabled = false;
    /** (optional) If `true`, the button is selected */
    this.selected = false;
    /** (optional) Button type */
    this.iconOnly = false;
    /** (optional) Icon position related to the label */
    this.iconPosition = 'before';
    /** (optional) set the border-radius left, right or both */
    this.radius = null;
    /** (optional) translation of 'selected */
    this.ariaLangSelected = 'selected';
    /** (optional) translation of 'deselected */
    this.ariaLangDeselected = 'deselected';
    /** a11y text for getting meaningful value. `$buttonNumber` and `$selected` are template variables and will be replaces by their corresponding properties.  */
    this.ariaDescriptionTranslation = '$selected';
    this.hasScaleIcon = false;
    this.handleClick = (event) => {
      event.preventDefault();
      this.selected = !this.selected;
      this.handleIconShape();
      this.scaleClick.emit({ id: this.toggleButtonId, selected: this.selected });
      emitEvent(this, 'scaleClick', {
        id: this.toggleButtonId,
        selected: this.selected,
      });
    };
    this.handleIconShape = () => {
      if (this.hasScaleIcon) {
        Array.from(this.hostElement.children).forEach((node) => {
          if (node.nodeName.substr(0, 10) === 'SCALE-ICON') {
            if (this.selected) {
              node.setAttribute('selected', 'true');
            }
            else {
              node.removeAttribute('selected');
            }
          }
        });
      }
    };
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  connectedCallback() {
    this.setIconPositionProp();
    this.handleIconShape();
  }
  componentDidLoad() {
    this.handleIconSize();
  }
  componentDidRender() {
    this.handleIconSize();
    if (this.hostElement.hasAttribute('aria-label')) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelToggleButton" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  componentWillLoad() {
    if (this.toggleButtonId == null) {
      this.toggleButtonId = 'toggle-button-' + i++;
    }
  }
  getAriaDescriptionTranslation() {
    const replaceSelected = this.selected
      ? this.ariaLangSelected
      : this.ariaLangDeselected;
    const filledText = this.ariaDescriptionTranslation
      .replace(/\$position/g, `${this.position}`)
      .replace(/\$selected/g, `${replaceSelected}`);
    return filledText;
  }
  handleIconSize() {
    Array.from(this.hostElement.children).forEach((child) => {
      if (child.tagName.substr(0, 10) === 'SCALE-ICON') {
        child.setAttribute('size', iconSizes[this.size]);
      }
    });
  }
  /**
   * Detect whether a child node is a scale icon and contains text.
   * If so, we set `iconPosition` to `after`, if the icon comes after the text.
   */
  setIconPositionProp() {
    const nodes = Array.from(this.hostElement.childNodes).filter((node) => {
      if (node.nodeName.substr(0, 10) === 'SCALE-ICON') {
        this.hasScaleIcon = true;
      }
      // ignore empty text nodes, which are probably due to formatting
      return !(node.nodeType === 3 && node.nodeValue.trim() === '');
    });
    if (!this.iconOnly &&
      nodes &&
      nodes.length &&
      nodes[nodes.length - 1] &&
      nodes[nodes.length - 1].nodeName.substr(0, 10) === 'SCALE-ICON') {
      this.iconPosition = 'after';
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("button", { ref: (el) => (this.focusableElement = el), class: this.getCssClassMap(), id: this.toggleButtonId, onClick: this.handleClick, disabled: this.disabled, type: "button", "aria-label": this.ariaLabelToggleButton, "aria-pressed": this.selected, part: this.getBasePartMap(), "aria-description": this.getAriaDescriptionTranslation() }, h("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : 'toggle-button--';
    return classnames('toggle-button', this.size && `${prefix}${this.size}`, this.background &&
      `${prefix}${this.background === 'grey' ? 'primary' : 'secondary'}`, !this.iconOnly &&
      this.iconPosition &&
      `toggle-button--icon-${this.iconPosition}`, this.iconOnly && `${prefix}icon-only`, !this.disabled && this.selected && `${prefix}selected`, this.radius && `${prefix}${this.radius}`, this.colorScheme && `${prefix}${this.colorScheme}`, this.variant && `${prefix}${this.variant}`, !this.hideBorder && `${prefix}border`);
  }
  get hostElement() { return getElement(this); }
};
ToggleButton.style = toggleButtonCss;

export { ToggleButton as scale_toggle_button };
