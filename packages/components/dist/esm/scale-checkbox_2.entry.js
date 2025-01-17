import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { e as emitEvent } from './utils-004d7b05.js';
import { s as statusNote } from './status-note-0089e9c9.js';

const checkboxCss = ":host,scale-checkbox{--spacing-x:var(--telekom-spacing-unit-x2);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-text:var(--telekom-color-text-and-icon-standard);--color-error:var(--telekom-color-functional-danger-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--color-standard:var(--telekom-color-background-surface);--background-disabled:none;--color-primary:var(--telekom-color-primary-standard);--color-focus:var(--telekom-color-functional-focus);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--width-control:var(--telekom-spacing-unit-x5);--height-control:var(--telekom-spacing-unit-x5);--transition-control:var(--transition);--spacing-control:var(--telekom-spacing-unit-x05);--spacing-left-control:var(--telekom-spacing-unit-x1);--radius-control:var(--telekom-radius-small);--border-width-control:var(--telekom-spacing-unit-x025);--transition-helper-text:var(--transition);--spacing-left-helper-text:calc(var(--width-control) + var(--spacing-x));--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--font-weight-label:var(--telekom-typography-font-weight-medium);--transition-label:var(--transition);--color-icon-checked-disabled:var(--telekom-color-text-and-icon-disabled);--color-icon-checked-active:var(\n    --telekom-color-text-and-icon-white-standard\n  );--width-icon:var(--telekom-spacing-unit-x4);--height-icon:var(--telekom-spacing-unit-x4);--stroke-width:var(--stroke-width-checkbox, 0.5px)}scale-checkbox{position:relative;display:flex;width:fit-content;padding:0 2px 0 2px;flex-direction:column;color:var(--color-text)}scale-checkbox [part='icon'],scale-checkbox [part='checkbox'],scale-checkbox [part='label'],scale-checkbox [part='helper-text']{transition:var(--transition)}scale-checkbox [part='input'],scale-checkbox.hideLabel [part='label']{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}scale-checkbox [part='checkbox']{box-sizing:border-box;display:flex;flex:0 0 auto;justify-content:center;align-items:center;width:var(--width-control);height:var(--height-control);border-radius:var(--radius-control);border:var(--border-width-control) solid\n    var(--telekom-color-ui-border-standard)}scale-checkbox [part='label']{font-weight:var(--font-weight-label);margin-left:var(--spacing-x)}scale-checkbox [part='icon']{width:var(--width-icon);height:var(--height-icon);color:var(--color-icon-checked-active)}scale-checkbox [part='icon'] svg{width:100%;height:100%}scale-checkbox [part='icon'] svg rect,scale-checkbox [part='icon'] svg path{stroke:currentColor;stroke-width:var(--stroke-width)}scale-checkbox [part='container']{align-items:center;display:flex;line-height:var(--telekom-typography-line-spacing-standard)}scale-checkbox [part='helper-text']{font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text);padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x) +\n      calc(var(--border-width-control) * 2)\n  );display:flex;align-items:center}scale-checkbox.indeterminate [part='checkbox']{background:var(--telekom-color-primary-standard);border:none;color:var(--color-icon-checked-active)}scale-checkbox.indeterminate [part='icon']{color:var(--color-icon-checked-active)}scale-checkbox.checked [part='checkbox']{background:var(--telekom-color-primary-standard);border-color:var(--telekom-color-primary-standard);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:hover [part='checkbox']{background:var(--telekom-color-ui-state-fill-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox.checked [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed);color:var(--color-icon-checked-active)}scale-checkbox [part='input']:focus~[part='container'] [part='checkbox']{outline:var(--telekom-spacing-unit-x05) solid var(--color-focus);outline-offset:var(--telekom-spacing-unit-x025)}scale-checkbox [part='container']:hover{color:var(--color-primary-hover);cursor:pointer}scale-checkbox.checked [part='container']:hover [part='checkbox'],scale-checkbox.indeterminate [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-primary-hovered)}scale-checkbox.checked [part='input']:active~[part='container'],scale-checkbox.checked [part='container']:active{color:var(--color-primary-active)}scale-checkbox [part='input']:active~[part='container'] [part='checkbox'],scale-checkbox.checked [part='container']:active [part='checkbox'],scale-checkbox.indeterminate [part='container']:active [part='checkbox']{background:var(--telekom-color-primary-pressed);border-color:var(--telekom-color-primary-pressed)}scale-checkbox:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed)}scale-icon-alert-information,scale-icon-alert-error{color:var(--color-helper-text);display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-unit-x1)}scale-checkbox.error [part='helper-text']{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='helper-text'] scale-icon-alert-error{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05) var(--color-error);border:none}scale-checkbox.error [part='input']:focus~[part='container'] [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05) var(--color-error)}scale-checkbox.error [part='checkbox']:hover{background-color:var(--telekom-color-ui-state-fill-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='checkbox']:active{background-color:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.error:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.checked.error [part='container']:hover [part='checkbox']{background-color:var(--telekom-color-primary-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='helper-text']{padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x)\n  )}scale-checkbox.disabled{cursor:not-allowed}scale-checkbox.disabled [part='container'],scale-checkbox.disabled [part='helper-text']{color:var(--color-disabled);pointer-events:none}scale-checkbox.disabled [part='checkbox']{background:var(--telekom-color-ui-solid-fill-disabled);border-color:var(--telekom-color-ui-border-disabled)}scale-checkbox.checked.disabled [part='checkbox']{background-color:var(--telekom-color-ui-disabled);border-color:transparent}scale-checkbox.checked.disabled [part='icon']{color:var(--color-icon-checked-disabled);background-color:var(--telekom-color-ui-disabled)}scale-checkbox.disabled [part='helper-text'] scale-icon-alert-information,scale-checkbox.disabled.error [part='helper-text'] scale-icon-alert-error{color:var(--color-disabled)}";

let i = 0;
const Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    /** (optional) Input label */
    this.label = '';
    /** (optional) Hides the specified label visually */
    this.hideLabel = false;
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Input disabled */
    this.disabled = false;
    /** (optional) Active switch */
    this.checked = false;
    /** (optional) indeterminate */
    this.indeterminate = false;
    /** (optional) Input value */
    this.value = '';
    this.internalId = i++;
    this.handleChange = (ev) => {
      if (this.indeterminate) {
        this.indeterminate = false;
        this.checked = true;
        ev.target.checked = true;
      }
      else {
        this.checked = ev.target.checked;
      }
      const { checked, indeterminate, value, disabled } = this;
      emitEvent(this, 'scaleChange', { checked, indeterminate, value, disabled });
    };
  }
  componentDidRender() {
    if (this.status !== '') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.host,
      });
    }
    if (this.host.hasAttribute('aria-label')) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckbox" property!',
        type: 'warn',
        source: this.host,
      });
    }
  }
  connectedCallback() {
    if (!this.inputId) {
      this.inputId = 'input-checkbox-' + this.internalId;
    }
  }
  /* Accessibility: rendering the icon *only* when checked, otherwise is always visible in HCM */
  renderIcon() {
    if (this.indeterminate) {
      return (h("scale-icon-action-indeterminate", { part: "icon", decorative: true }));
    }
    if (this.checked) {
      return (h("scale-icon-action-success", { part: "icon", decorative: true }));
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
  renderHelperText(text) {
    if (this.helperText && this.helperText !== '') {
      return (h("div", { part: "helper-text", id: text.id, "aria-live": "polite", "aria-relevant": "additions removals" }, this.renderHelperIcon(), text.content));
    }
  }
  render() {
    const helperText = {
      id: this.helperText ? `helper-text-${this.internalId}` : null,
      content: this.helperText,
    };
    return (h(Host, { class: {
        checked: this.checked,
        indeterminate: this.indeterminate,
        disabled: this.disabled,
        error: this.status === 'error' || this.invalid,
        hideLabel: this.hideLabel,
      } }, h("input", { type: "checkbox", part: "input", name: this.name || null, id: this.inputId, value: this.value, checked: this.checked, indeterminate: this.indeterminate, "aria-label": this.ariaLabelCheckbox, "aria-checked": this.indeterminate ? 'mixed' : false, "aria-invalid": this.status === 'error' || this.invalid, "aria-describedBy": helperText.id, disabled: this.disabled, onChange: this.handleChange }), h("label", { part: "container", htmlFor: this.inputId }, h("div", { part: "checkbox" }, this.renderIcon()), h("div", { part: "label" }, this.label || h("slot", null))), this.renderHelperText(helperText)));
  }
  get host() { return getElement(this); }
};
Checkbox.style = checkboxCss;

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionIndeterminate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("rect", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "2", rx: "0.75", "fill-rule": "evenodd", x: "4", y: "11.25" }))) : (h("g", null, h("rect", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "2", rx: "0.75", "fill-rule": "evenodd", x: "4", y: "11.25" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionIndeterminate.style = iconCss;

export { Checkbox as scale_checkbox, ActionIndeterminate as scale_icon_action_indeterminate };
