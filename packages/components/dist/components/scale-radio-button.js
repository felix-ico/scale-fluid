import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { e as emitEvent } from './utils.js';
import { s as statusNote } from './status-note.js';
import { d as defineCustomElement$3 } from './alert-error.js';
import { d as defineCustomElement$2 } from './alert-information.js';

const radioButtonCss = "scale-radio-button{--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:var(--telekom-color-ui-disabled);--color-error:var(--telekom-color-text-and-icon-functional-danger);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-primary:var(--telekom-color-text-and-icon-primary-standard);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--color-focus:var(--telekom-color-functional-focus);--color-text:var(--telekom-color-text-and-icon-standard);--transition-helper-text:var(--transition);--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--spacing-left-helper-text:calc(\n    var(--width-control) + var(--telekom-spacing-unit-x2)\n  );--spacing-top-helper-text:var(--telekom-spacing-unit-x1);--color-helper-text-error:var(\n    --telekom-color-text-and-icon-functional-danger\n  );--transition-label:var(--transition);--font-weight-label:var(--telekom-typography-font-weight-medium);--color-label:var(--color-text);--width-control:var(--telekom-spacing-unit-x5);--height-control:var(--telekom-spacing-unit-x5);--transition-control:var(--transition);--spacing-control:0 var(--telekom-spacing-unit-x2) 0 0;--background-color-control:var(--telekom-color-ui-base);--border-control:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-border-standard);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--border-control-checked:calc(0.25 * var(--telekom-spacing-unit-x3)) solid\n    var(--telekom-color-background-canvas);--border-control-checked-disabled:calc(0.5 * var(--telekom-spacing-unit-x3))\n    solid var(--telekom-color-ui-border-disabled);--background-control-checked-disabled:none;--border-control-active:var(--telekom-spacing-unit-x2) solid\n    var(--telekom-color-primary-pressed);--border-control-disabled:0 0 0 var(--telekom-spacing-unit-x025)\n    var(--telekom-color-ui-border-disabled);--border-control-error:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-danger-standard);--box-shadow-control-focus:0 0 0 var(--telekom-spacing-unit-x1)\n    var(--color-focus)}.radio-button{position:relative;display:flex;flex-wrap:wrap;align-items:center;cursor:pointer;width:fit-content}.radio-button .radio-button__meta{width:100%;display:flex;padding-left:var(--spacing-left-helper-text)}.radio-button .radio-button__helper-text{transition:var(--transition-helper-text);font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text)}scale-icon-alert-information,scale-icon-alert-error{color:var(--color-helper-text);display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-unit-x1)}.radio-button--status-error .radio-button__helper-text{color:var(--color-helper-text-error)}.radio-button--status-error scale-icon-alert-error{color:var(--color-helper-text-error)}.radio-button label{color:var(--color-label);transition:var(--transition-label);font-weight:var(--font-weight-label);cursor:pointer;line-height:var(--telekom-typography-line-spacing-standard)}.radio-button input{width:var(--width-control);height:var(--height-control);transition:var(--transition-control);border-radius:50%;-webkit-appearance:none;background-color:var(--telekom-color-ui-state-fill-standard);border:var(--border-control);margin:var(--spacing-control);cursor:pointer}.radio-button:hover input:not(:checked):not([disabled]){box-shadow:none;border-color:var(--telekom-color-ui-border-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.radio-button:hover input:not(:checked):not([disabled])~label{color:var(--color-primary-hover)}.radio-button:active input:not(:checked):not([disabled]){border-color:var(--telekom-color-ui-border-pressed);background-color:var(--telekom-color-ui-state-fill-pressed)}.radio-button input:not(:checked):not([disabled]):active~label{color:var(--color-primary-active)}.radio-button input:disabled{box-shadow:var(--border-control-disabled)}.radio-button input:disabled~label{color:var(--color-disabled)}.radio-button.radio-button--status-error input{border:var(--border-control-error)}.radio-button.radio-button--status-error:hover input:not(:checked):not([disabled]){border-color:var(--telekom-color-functional-danger-hovered)}.radio-button.radio-button--status-error:active input:not(:checked):not([disabled]){border-color:var(--telekom-color-functional-danger-pressed)}.radio-button input:checked{border:var(--border-control-checked);background-color:var(--telekom-color-primary-standard);box-shadow:0 0 0 var(--telekom-spacing-unit-x025)\n    var(--telekom-color-text-and-icon-primary-standard)}.radio-button input:checked:disabled{background-color:var(--background-disabled);border:var(--border-control-checked);box-shadow:var(--border-control-disabled)}.radio-button input:checked:disabled~label{color:var(--color-disabled);border:var(--border-control-disabled)}.radio-button--disabled label,.radio-button--disabled .radio-button__label,.radio-button--disabled input,.radio-button--disabled .radio-button__helper-text{cursor:not-allowed;border-color:var(--color-disabled);color:var(--color-disabled);background:var(--telekom-color-ui-state-fill-standard)}.radio-button--disabled scale-icon-alert-information,.radio-button--disabled scale-icon-alert-error{color:var(--color-disabled)}.radio-button input:focus{outline:2px solid var(--color-focus);outline-offset:2px}";

let i = 0;
const RadioButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    /** (optional) Input name */
    this.name = '';
    /** (optional) Input label */
    this.label = '';
    /** (optional) Input helper text */
    this.helperText = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Input checked */
    this.checked = false;
    /** (optional) Input value */
    this.value = '';
    this.handleCheckedChange = (event) => {
      this.checked = event.target.checked;
      // I don't think this is ever going to be `false` but well...
      if (this.checked) {
        this.uncheckSiblings();
      }
      emitEvent(this, 'scaleChange', {
        value: this.value == null ? this.value : this.value.toString(),
      });
    };
    // Prevent click event being fired twice when the target is the label.
    this.handleClick = (event) => {
      event.stopPropagation();
      this.checked = true;
      this.uncheckSiblings();
    };
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-' + i++;
    }
  }
  componentDidRender() {
    if (this.status !== '') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  // We manually set `checked` to false on sibling <scale-radio-button> elements,
  // otherwise they stayed `checked` after being clicked once, forever.
  uncheckSiblings() {
    this.getSiblingRadios().forEach((radio) => {
      radio.checked = false;
    });
  }
  getSiblingRadios() {
    return Array.from(document.querySelectorAll(`scale-radio-button[name="${this.name}"]`)).filter((radio) => radio.inputId !== this.inputId);
  }
  renderHelperIcon() {
    if (this.helperText && !this.invalid) {
      return (h("scale-icon-alert-information", { size: 11 }));
    }
    if (this.invalid) {
      return h("scale-icon-alert-error", { size: 11 });
    }
  }
  render() {
    const ariaInvalidAttr = this.status === 'error' || this.invalid ? { 'aria-invalid': true } : {};
    const helperTextId = `helper-message-${i}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    return (h(Host, null, h("div", { class: this.getCssClassMap(), onClick: this.handleClick }, h("input", Object.assign({ type: "radio", name: this.name, id: this.inputId, onChange: this.handleCheckedChange, value: this.value, checked: this.checked, disabled: this.disabled }, ariaInvalidAttr, (this.helperText ? ariaDescribedByAttr : {}))), h("label", { htmlFor: this.inputId, onClick: this.handleClick }, this.label), !!this.helperText && (h("div", { class: "radio-button__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, this.renderHelperIcon(), h("div", { class: "radio-button__helper-text" }, this.helperText))))));
  }
  getCssClassMap() {
    return classnames('radio-button', this.checked && `radio-button--checked`, this.disabled && `radio-button--disabled`, this.status && `radio-button--status-${this.status}`, this.invalid && `radio-button--status-error`);
  }
  get hostElement() { return this; }
  static get style() { return radioButtonCss; }
}, [0, "scale-radio-button", {
    "name": [1],
    "label": [1],
    "helperText": [1, "helper-text"],
    "status": [1],
    "invalid": [4],
    "disabled": [4],
    "checked": [516],
    "value": [1032],
    "inputId": [1, "input-id"],
    "styles": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-radio-button", "scale-icon-alert-error", "scale-icon-alert-information"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-radio-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RadioButton);
      }
      break;
    case "scale-icon-alert-error":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "scale-icon-alert-information":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const ScaleRadioButton = RadioButton;
const defineCustomElement = defineCustomElement$1;

export { ScaleRadioButton, defineCustomElement };
