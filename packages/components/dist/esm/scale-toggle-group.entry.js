import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { e as emitEvent } from './utils-004d7b05.js';
import { s as statusNote } from './status-note-0089e9c9.js';

const toggleGroupCss = ":host{--border-color:var(--telekom-color-ui-border-standard);--border-color-disabled:var(--telekom-color-ui-border-disabled);--border:var(--telekom-spacing-unit-x025) solid var(--border-color);--border-disabled:var(--telekom-spacing-unit-x025) solid\n    var(--border-color-disabled);--radius:var(--telekom-radius-standard)}.toggle-group--inline{display:inline-flex}.toggle-group--block{display:flex}.toggle-group--block ::slotted(*){flex-grow:1}";

const ToggleGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    /** toggle button position within group */
    this.position = 0;
    /** number of slotted toggle-buttons */
    this.slottedButtons = 0;
    /** state */
    this.status = [];
    /** (optional) The size of the button */
    this.size = 'regular';
    /** (optional) Button Group background */
    this.background = 'white';
    /** (optional) 100% width */
    this.fullWidth = false;
    /** (optional) If `true`, the button is disabled */
    this.disabled = false;
    /** (optional) If `true`, the group has a border */
    this.hideBorder = false;
    /** (optional) more than one button selected possible */
    this.singleSelect = false;
    /** (optional) aria-label attribute needed for icon-only buttons */
    this.ariaLabelTranslation = `toggle button group with $slottedButtons buttons`;
    /** @deprecated - variant should replace colorScheme */
    this.colorScheme = 'color';
    /** (optional) background variant of a selected toggle-button */
    this.variant = 'color';
  }
  scaleClickHandler(ev) {
    let tempState;
    if (this.singleSelect) {
      if (!ev.detail.selected) {
        tempState = this.status.map((obj) => ev.detail.id === obj.id ? ev.detail : Object.assign({}, obj));
        /* clicked button has now selected state */
      }
      else {
        tempState = this.status.map((obj) => ev.detail.id === obj.id ? ev.detail : Object.assign(Object.assign({}, obj), { selected: false }));
      }
    }
    else {
      tempState = this.status.map((obj) => ev.detail.id === obj.id ? ev.detail : Object.assign({}, obj));
    }
    this.setNewState(tempState);
  }
  handlePropsChange() {
    this.propagatePropsToChildren();
  }
  componentDidLoad() {
    const tempState = [];
    const toggleButtons = this.getAllToggleButtons();
    this.slottedButtons = toggleButtons.length;
    toggleButtons.forEach((toggleButton) => {
      this.position++;
      tempState.push({
        id: toggleButton.getAttribute('toggle-button-id'),
        selected: toggleButton.hasAttribute('selected'),
      });
      toggleButton.setAttribute('position', this.position.toString());
      toggleButton.setAttribute('aria-description-translation', '$position $selected');
    });
    this.propagatePropsToChildren();
    this.position = 0;
    this.status = tempState;
  }
  getAllToggleButtons() {
    return Array.from(this.hostElement.querySelectorAll('scale-toggle-button'));
  }
  /**
   * Keep props, needed in children buttons, in sync
   */
  propagatePropsToChildren() {
    this.getAllToggleButtons().forEach((el) => {
      el.setAttribute('size', this.size);
      el.setAttribute('background', this.background);
      el.setAttribute('disabled', this.disabled && 'disabled');
      /** DEPRECATED */
      // if attribute variant is set it overrides color-scheme
      el.setAttribute('color-scheme', this.variant !== 'color' ? this.variant : this.colorScheme);
      // if attribute color-scheme is set it overrides variant
      el.setAttribute('variant', this.colorScheme !== 'color' ? this.colorScheme : this.variant);
      el.setAttribute('hide-border', this.hideBorder ? 'true' : 'false');
    });
  }
  getAriaLabelTranslation() {
    const filledText = this.ariaLabelTranslation.replace(/\$slottedButtons/g, `${this.slottedButtons}`);
    return filledText;
  }
  componentDidRender() {
    if (this.fullWidth) {
      this.setButtonWidth();
    }
    this.setChildrenCorners();
    if (this.colorScheme !== 'color') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "colorScheme" is deprecated. Please use the "variant" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  setNewState(tempState) {
    const toggleButtons = Array.from(this.hostElement.querySelectorAll('scale-toggle-button'));
    toggleButtons.forEach((button, i) => {
      button.setAttribute('selected', tempState[i].selected ? 'true' : 'false');
    });
    this.status = tempState;
    emitEvent(this, 'scaleChange', this.status);
  }
  setButtonWidth() {
    Array.from(this.hostElement.children).forEach((child) => {
      const button = child.shadowRoot.querySelector('button');
      button.style.width = '100%';
    });
  }
  setChildrenCorners() {
    const children = Array.from(this.hostElement.children);
    if (children.length === 1) {
      // set four border radius when there is only one child
      children[0].setAttribute('radius', 'all');
    }
    else {
      for (let i = 0; i < children.length; i++) {
        if (i === 0) {
          children[i].setAttribute('radius', 'left');
        }
        if (i > 0 && i < children.length - 1) {
          children[i].setAttribute('radius', 'neither');
        }
        if (i === children.length - 1) {
          children[i].setAttribute('radius', 'right');
        }
      }
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), part: this.getBasePartMap(), "aria-label": this.getAriaLabelTranslation(), role: "group" }, h("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : 'toggle-group--';
    return classnames('toggle-group', this.fullWidth && `${prefix}block`, !this.fullWidth && `${prefix}inline`, this.disabled && `${prefix}disabled`);
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "background": ["handlePropsChange"],
    "disabled": ["handlePropsChange"],
    "hideBorder": ["handlePropsChange"],
    "size": ["handlePropsChange"],
    "variant": ["handlePropsChange"]
  }; }
};
ToggleGroup.style = toggleGroupCss;

export { ToggleGroup as scale_toggle_group };
