import { r as registerInstance, h, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { s as statusNote } from './status-note-0089e9c9.js';

const radioButtonGroupCss = ":host{--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label:var(--telekom-typography-font-size-body);--font-size-helper-text:var(--telekom-typography-font-size-small);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--padding-bottom-helper-text:var(--telekom-spacing-unit-x2);--margin-top-helper-text:var(--telekom-spacing-unit-x1);--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--font-size-error-helper-text:var(--telekom-typography-font-size-small);--color-error-helper-text:var(\n    --telekom-color-text-and-icon-functional-danger\n  );--padding-bottom-error-helper-text:var(--telekom-spacing-unit-x2);--margin-top-error-helper-text:var(--telekom-spacing-unit-x1);--font-weight-error-helper-text:var(--telekom-typography-font-weight-medium);--color-error-helper-text-hcm:var(\n    --telekom-color-text-and-icon-white-standard\n  );--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--font-size-title:var(--font-size-label);--font-weight-title:var(--telekom-typography-font-weight-medium);--padding-bottom-title:var(--telekom-spacing-unit-x1);--margin-left-title:var(--telekom-spacing-unit-x05);--margin-top-slotted-item:var(--telekom-spacing-unit-x3);margin-top:var(--margin-top-slotted-item)}.radio-button-group{display:inline-flex;flex-direction:column;border:0;margin:0;padding:0}.radio-button-group__container{display:flex;flex-direction:column}.radio-button-group__helper-text{color:var(--color-helper-text);font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);display:flex;align-items:center;line-height:var(--line-height-helper-text)}.radio-button-group__helper-text--status-error{color:var(--color-error-helper-text);font-size:var(--font-size-error-helper-text);font-weight:var(--font-weight-error-helper-text)}.radio-button-group__title{margin:0;padding:0}.radio-button-group__title-label{font-size:var(--font-size-title);line-height:var(--telekom-typography-line-spacing-standard);font-weight:var(--telekom-typography-font-weight-bold)}::slotted(*){margin-top:calc(var(--margin-top-slotted-item))}@media screen and (forced-colors: active), (-ms-high-contrast: active){.radio-button-group__helper-text--status-error{color:var(--color-error-helper-text-hcm)}}.radio-button-group__helper-text scale-icon-alert-success,.radio-button-group__helper-text scale-icon-alert-warning,.radio-button-group__helper-text scale-icon-alert-information,.radio-button-group__helper-text scale-icon-alert-error{margin-right:var(--telekom-spacing-unit-x1)}";

const RadioButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** (optional) Input label */
    this.label = '';
    /** (optional) Input helper text */
    this.helperText = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
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
  renderHelperIcon() {
    if (this.helperText && !this.invalid) {
      return (h("scale-icon-alert-information", { size: 11 }));
    }
    if (this.invalid) {
      return h("scale-icon-alert-error", { size: 11 });
    }
  }
  render() {
    return (h("fieldset", { class: "radio-button-group" }, h("legend", { class: "radio-button-group__title" }, h("label", { class: "radio-button-group__title-label", "aria-label": this.label }, this.label), this.helperText ? (h("div", { role: "text", class: this.getCssClassMap(), "aria-label": this.helperText }, this.renderHelperIcon(), h("span", null, this.helperText))) : null), h("div", { class: "radio-button-group__container" }, h("slot", null))));
  }
  getCssClassMap() {
    return classnames('radio-button-group__helper-text', (this.status === 'error' || this.invalid) &&
      `radio-button-group__helper-text--status-error`);
  }
  get hostElement() { return getElement(this); }
};
RadioButtonGroup.style = radioButtonGroupCss;

export { RadioButtonGroup as scale_radio_button_group };
