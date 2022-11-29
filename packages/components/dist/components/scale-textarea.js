import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { e as emitEvent } from './utils.js';
import { s as statusNote } from './status-note.js';

const textareaCss = "scale-textarea{--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--border:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-border-standard);--border-error:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-danger-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--background-color-hover:var(--telekom-color-ui-state-fill-hovered);--background-color-disabled:none;--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--spacing-x-control:var(--telekom-spacing-unit-x3);--spacing-bottom-control:var(--telekom-spacing-unit-x3);--spacing-top-control:var(--telekom-spacing-unit-x6);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:transparent;--border-color-readonly:var(--telekom-color-ui-border-disabled);--background-readonly:var(--telekom-color-ui-disabled);--font-weight-meta:var(--telekom-typography-font-weight-bold);--font-size-meta:var(--telekom-typography-font-size-small);--line-height-meta:var(--telekom-typography-line-spacing-standard);--spacing-y-meta:var(--telekom-spacing-unit-x1);--color-meta:var(--telekom-color-text-and-icon-standard);--color-meta-error:var(--telekom-color-text-and-icon-functional-danger);--spacing-control:0 var(--spacing-x-control) var(--spacing-top-control);--transition-control:var(--transition);--font-size-control:var(--telekom-typography-font-size-body);--background-control:var(--telekom-color-ui-state-fill-standard);--transition-counter:var(--transition);--font-size-counter:var(--font-size-meta);--line-height-counter:var(--line-height-meta);--color-counter-error:var(--color-meta-error);--transition-helper-text:var(--transition);--font-size-helper-text:var(--font-size-meta);--line-height-helper-text:var(--line-height-meta);--color-helper-text:var(--telekom-color-functional-informational-standard);--color-helper-text-error:var(--color-meta-error);--transition-placeholder:var(--transition);--color-placeholder:var(--telekom-color-text-and-icon-additional);--color-label:var(--telekom-color-text-and-icon-additional);--color-label-readonly:var(--telekom-color-text-and-icon-standard);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--font-size-label:var(--telekom-typography-font-size-body);--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label-focus:var(--telekom-typography-font-size-footnote);--font-weight-label-focus:var(--telekom-typography-font-weight-bold)}.textarea{position:relative;display:flex;flex-direction:column}.textarea__wrapper{display:flex;flex-direction:column;border-radius:var(--radius);border:var(--border)}.textarea__wrapper .textarea__control{margin:0;width:100%;resize:vertical;display:flex;outline:none;padding:var(--spacing-control);z-index:1;box-sizing:border-box;transition:var(--transition-control);font-family:inherit;font-size:var(--font-size-control);border:none;background-color:transparent;color:var(--color-meta);margin-top:var(--spacing-top-control)}.textarea .textarea__helper-text,.textarea .textarea__counter{font-weight:var(--telekom-typography-font-weight-bold)}.textarea .textarea__counter{display:flex;transition:var(--transition-counter);margin-left:auto;padding-right:var(--telekom-spacing-unit-x3);justify-content:flex-end;font-size:var(--telekom-typography-font-size-small);line-height:var(--telekom-typography-line-spacing-standard);color:inherit}.textarea .textarea__helper-text{transition:var(--transition-helper-text);padding-left:var(--spacing-x);font-size:var(--font-size-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text)}.textarea .textarea__meta{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}.textarea:not(.textarea--disabled):not(.textarea--readonly) .textarea__wrapper:hover{border-color:var(--border-color-hover);background-color:var(--background-color-hover)}.textarea:not(.textarea--disabled):not(.textarea--readonly).textarea--has-focus .textarea__wrapper{border-color:var(--border-color-focus);outline:var(--focus-outline);outline-offset:1px}.textarea:not(.textarea--disabled) .textarea__control:focus::placeholder{color:var(--color-placeholder)}.textarea .textarea__control::placeholder,.textarea ::placeholder{color:transparent;transition:var(--transition-placeholder)}.textarea__label{top:0;left:0;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font-size:var(--font-size-label);font-weight:var(--font-weight-label);transform:translate(\n    var(--spacing-x-control),\n    calc((var(--telekom-spacing-unit-x12) - var(--font-size-label)) / 2)\n  )}.textarea--has-focus .textarea__label,.animated .textarea__label{transform:translate(\n    var(--spacing-x-control),\n    var(--telekom-spacing-unit-x2)\n  );font-size:var(--font-size-label-focus);font-weight:var(--font-weight-label-focus)}.textarea--status-error .textarea__wrapper{border:var(--border-error)}.textarea--status-error:not(.textarea--disabled):not(.textarea--readonly) .textarea__wrapper:hover,.textarea--status-error:not(.textarea--disabled):not(.textarea--readonly).textarea--has-focus .textarea__wrapper{border-color:var(--telekom-color-functional-danger-hovered)}.textarea--status-error .textarea__helper-text{color:var(--color-helper-text-error)}.textarea--status-error .textarea__counter{color:var(--color-counter-error)}.textarea--transparent .textarea__control{background-color:transparent}.textarea--readonly .textarea__wrapper{border-color:var(--border-color-readonly);background:var(--background-readonly)}.textarea--readonly.textarea--has-focus .textarea__wrapper{outline:var(--focus-outline);outline-offset:1px}.textarea--readonly textarea,.textarea--readonly .textarea__wrapper .textarea__control{color:var(--color-label-readonly)}.textarea--disabled label,.textarea--disabled .textarea__label,.textarea--disabled textarea,.textarea--disabled .textarea__wrapper,.textarea--disabled .textarea__control,.textarea--disabled .textarea__meta,.textarea--disabled .textarea__helper-text{cursor:not-allowed;color:var(--color-disabled)}.textarea--disabled .textarea__wrapper{border-color:var(--border-color-disabled);background-color:var(--background-color-disabled)}";

let i = 0;
const Textarea = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.scaleInput = createEvent(this, "scale-input", 7);
    this.scaleInputLegacy = createEvent(this, "scaleInput", 7);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.scaleFocus = createEvent(this, "scale-focus", 7);
    this.scaleFocusLegacy = createEvent(this, "scaleFocus", 7);
    this.scaleBlur = createEvent(this, "scale-blur", 7);
    this.scaleBlurLegacy = createEvent(this, "scaleBlur", 7);
    this.scaleKeyDown = createEvent(this, "scale-keydown", 7);
    this.scaleKeyDownLegacy = createEvent(this, "scaleKeyDown", 7);
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
    /** (optional) Input placeHolder */
    this.placeholder = '';
    /** (optional) Input value */
    this.value = '';
    /** Whether the input element has focus */
    this.hasFocus = false;
    this.handleInput = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
      emitEvent(this, 'scaleInput', event);
    };
    this.handleChange = (event) => {
      const target = event.target;
      if (target) {
        this.value = target.value || '';
        this.emitChange();
      }
    };
    this.handleFocus = () => {
      emitEvent(this, 'scaleFocus');
      this.hasFocus = true;
    };
    this.handleBlur = () => {
      emitEvent(this, 'scaleBlur');
      this.hasFocus = false;
    };
    this.handleKeyDown = (event) => {
      emitEvent(this, 'scaleKeyDown', event);
    };
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'input-textarea' + i++;
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
  // We're not watching `value` like we used to
  // because we get unwanted `scaleChange` events
  // because how we keep this.value up-to-date for type="select"
  // `this.value = selectedValue`
  emitChange() {
    emitEvent(this, 'scaleChange', {
      value: this.value == null ? this.value : this.value.toString(),
    });
  }
  render() {
    const ariaInvalidAttr = this.status === 'error' || this.invalid ? { 'aria-invalid': true } : {};
    const helperTextId = `helper-message-${i}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    const readonlyAttr = this.readonly ? { readonly: 'readonly' } : {};
    return (h(Host, null, h("div", { class: this.getCssClassMap() }, h("div", { class: "textarea__wrapper", onClick: () => this.focusableElement.focus(), style: !!this.resize &&
        this.resize === 'horizontal' && { width: 'max-content' } }, h("label", { class: "textarea__label", htmlFor: this.inputId }, this.label), h("textarea", Object.assign({ class: "textarea__control", style: !!this.resize && { resize: this.resize }, value: this.value }, (!!this.name ? { name: this.name } : {}), (!!this.inputAutofocus ? { autofocus: 'true' } : {}), { required: this.required, minLength: this.minLength, maxLength: this.maxLength, id: this.inputId, onInput: this.handleInput, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown }, (!!this.placeholder ? { placeholder: this.placeholder } : {}), { disabled: this.disabled }, readonlyAttr, (!!this.rows ? { rows: this.rows } : {}), (!!this.cols ? { cols: this.cols } : {}), ariaInvalidAttr, (this.helperText ? ariaDescribedByAttr : {}), { ref: (el) => (this.focusableElement = el) }))), (!!this.helperText || !!this.counter) && (h("div", { class: "textarea__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, !!this.helperText && (h("div", { class: "textarea__helper-text" }, this.helperText)), this.counter && (h("div", { class: "textarea__counter" }, !!this.value ? String(this.value).length : 0, " /", ' ', this.maxLength)))))));
  }
  getCssClassMap() {
    return classnames('textarea', this.hasFocus && 'textarea--has-focus', this.resize && `textarea--resize-${this.resize}`, this.disabled && `textarea--disabled`, this.transparent && 'textarea--transparent', this.status && `textarea--status-${this.status}`, this.invalid && `textarea--status-error`, this.readonly && `textarea--readonly`, this.value != null && this.value !== '' && 'animated');
  }
  get hostElement() { return this; }
  static get style() { return textareaCss; }
}, [0, "scale-textarea", {
    "name": [1],
    "label": [1],
    "rows": [2],
    "cols": [2],
    "helperText": [1, "helper-text"],
    "status": [1],
    "invalid": [4],
    "maxLength": [2, "max-length"],
    "minLength": [2, "min-length"],
    "placeholder": [1],
    "disabled": [4],
    "readonly": [4],
    "required": [4],
    "counter": [4],
    "resize": [1],
    "value": [1032],
    "inputId": [1, "input-id"],
    "transparent": [4],
    "inputAutofocus": [4, "input-autofocus"],
    "styles": [1],
    "hasFocus": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-textarea"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-textarea":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Textarea);
      }
      break;
  } });
}

const ScaleTextarea = Textarea;
const defineCustomElement = defineCustomElement$1;

export { ScaleTextarea, defineCustomElement };
