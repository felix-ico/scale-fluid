import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { e as emitEvent, b as isPseudoClassSupported } from './utils-004d7b05.js';
import { s as statusNote } from './status-note-0089e9c9.js';

const dropdownCss = "scale-dropdown{--font-weight:var(--telekom-typography-font-weight-bold);--height:var(--telekom-spacing-unit-x11);--spacing-x:var(--telekom-spacing-unit-x3);--spacing-dropdown:18px var(--telekom-spacing-unit-x10) 5px\n    calc(var(--spacing-x) - 1px);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--border:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-border-standard);--border-danger:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-danger-standard);--border-success:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-success-standard);--border-warning:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-warning-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--color:var(--telekom-color-text-and-icon-standard);--background-color:var(--telekom-color-ui-state-fill-standard);--margin-bottom-helper-text:var(--telekom-spacing-unit-x1);--transition-input:var(--transition);--font-size-input:var(--telekom-typography-font-size-body);--spacing-y-meta:var(--telekom-spacing-unit-x1);--color-meta:var(--telekom-color-text-and-icon-standard);--height-icon:var(--telekom-spacing-unit-x6);--color-icon:var(--telekom-color-text-and-icon-standard);--color-icon-hover:var(--telekom-color-text-and-icon-standard);--color-icon-active:var(--telekom-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--telekom-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--font-size-label:var(--telekom-typography-font-size-body);--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label-focus:var(--telekom-typography-font-size-footnote);--font-weight-label-focus:var(--telekom-typography-font-weight-bold)}.dropdown{position:relative}.dropdown .input__dropdown{width:100%;height:var(--height);margin:0;display:flex;outline:none;padding:var(--spacing-dropdown);z-index:1;box-sizing:border-box;transition:var(--transition-input);font-family:inherit;font-size:var(--font-size-input);border-radius:var(--radius);border:var(--border);white-space:nowrap;line-height:var(--font-size-input);text-overflow:ellipsis;appearance:none;-webkit-appearance:none;background-color:var(--background-color);color:var(--color)}@-moz-document url-prefix(){.dropdown .input__dropdown{text-indent:-2px}}.dropdown .input__dropdown-wrapper{position:relative}.dropdown.dropdown--helper-text .input__dropdown-wrapper{margin-bottom:var(--margin-bottom-helper-text)}.dropdown .input__meta{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}.dropdown.dropdown--disabled .input__dropdown-wrapper .input__dropdown-icon{color:var(--color-disabled)}.dropdown:not(.dropdown--disabled):hover .input__dropdown-icon{color:var(--color-icon-hover)}.dropdown:not(.dropdown--disabled):active .input__dropdown-icon{color:var(--color-icon-active)}.dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:hover{border-color:var(--border-color-hover);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:hover{border-color:var(--telekom-color-functional-danger-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-warning .input__dropdown:hover{border-color:var(--telekom-color-functional-warning-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-success .input__dropdown:hover{border-color:var(--telekom-color-functional-success-hovered);background-color:var(--telekom-color-ui-state-fill-hovered)}.dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:focus{border-color:var(--border-color-focus)}.dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:focus{border-color:var(--telekom-color-functional-danger-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-warning .input__dropdown:focus{border-color:var(--telekom-color-functional-warning-hovered)}.dropdown:not(.dropdown--disabled).dropdown--variant-success .input__dropdown:focus{border-color:var(--telekom-color-functional-success-hovered)}.dropdown:not(.dropdown--disabled) .input__dropdown:focus{outline:var(--focus-outline);outline-offset:1px}.dropdown .input__dropdown-wrapper .input__dropdown-icon{top:50%;right:var(--spacing-x);position:absolute;transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);transition:var(--transition-icon)}.input__label{top:-2px;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font-size:var(--font-size-label);transform:translate(\n    var(--spacing-x),\n    calc((var(--telekom-spacing-unit-x12) - var(--font-size-label)) / 2)\n  );font-weight:var(--font-weight-label)}.animated .input__label{transform:translate(var(--spacing-x), var(--telekom-spacing-unit-x2));font-size:var(--font-size-label-focus);font-weight:var(--font-weight-label-focus);line-height:var(--telekom-typography-font-size-small)}.dropdown--variant-danger .input__dropdown{border:var(--border-danger)}.dropdown--variant-warning .input__dropdown{border:var(--border-warning)}.dropdown--variant-success .input__dropdown{border:var(--border-success)}.dropdown--transparent .input__dropdown{background-color:transparent}.dropdown--disabled label,.dropdown--disabled .input__label,.dropdown--disabled input,.dropdown--disabled .input__dropdown{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[data-mode='dark'] .dropdown .input__dropdown{background-color:var(--telekom-color-background-canvas)}[data-mode='dark'] .dropdown:not(.dropdown--disabled):not(.dropdown--variant-danger) .input__dropdown:hover{background-color:#1b1b1b}[data-mode='dark'] .dropdown:not(.dropdown--disabled).dropdown--variant-danger .input__dropdown:hover{background-color:#1b1b1b}[data-mode='dark'] .dropdown--disabled .input__dropdown{background-color:var(--telekom-color-background-canvas)}@media (prefers-color-scheme: dark){.dropdown .input__dropdown{background-color:var(--telekom-color-background-canvas)}.dropdown:not(.dropdown--disabled):not(.dropdown--status-error) .input__dropdown:hover{background-color:#1b1b1b}.dropdown:not(.dropdown--disabled).dropdown--status-error .input__dropdown:hover{background-color:#1b1b1b}.dropdown--disabled .input__dropdown{background-color:var(--telekom-color-background-canvas)}}";

let i$3 = 0;
const Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleInput = createEvent(this, "scale-input", 7);
    this.scaleInputLegacy = createEvent(this, "scaleInput", 7);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.scaleFocus = createEvent(this, "scale-focus", 7);
    this.scaleFocusLegacy = createEvent(this, "scaleFocus", 7);
    this.scaleBlur = createEvent(this, "scale-blur", 7);
    this.scaleBlurLegacy = createEvent(this, "scaleBlur", 7);
    this.scaleKeyDown = createEvent(this, "scale-keydown", 7);
    this.scaleKeyDownLegacy = createEvent(this, "scaleKeydown", 7);
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
    /** (optional) Variant */
    this.variant = 'informational';
    /** (optional) Input value */
    this.value = '';
    /** (optional) Makes type `select` behave as a controlled component in React */
    this.controlled = false;
    // Handle change on <select> independently
    // so we can allow "controlled" (React) behavior,
    // in which only the `value` changing does update
    // the actual <select> value, not the user's input.
    this.handleSelectChange = (event) => {
      const target = event.target;
      if (this.controlled) {
        emitEvent(this, 'scaleChange', { value: target.value });
        this.selectElement.value = String(this.value);
        this.forceUpdate = String(Date.now());
      }
      else {
        this.value = target.value || '';
        this.emitChange();
      }
    };
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
    };
    this.handleBlur = () => {
      emitEvent(this, 'scaleBlur');
    };
    this.handleKeyDown = (event) => {
      emitEvent(this, 'scaleKeyDown', event);
    };
  }
  componentWillLoad() {
    this.hasSlotIcon = !!this.hostElement.querySelector('[slot="icon"]');
    if (this.inputId == null) {
      this.inputId = 'input-dropdown' + i$3++;
    }
  }
  componentDidLoad() {
    // Keep this.value up-to-date for type="select".
    // This is important also for React, where `value` is used to control the element state.
    const select = this.selectElement;
    const selectedValue = select.selectedIndex > -1
      ? select.options[select.selectedIndex].value
      : null;
    // If we have a `value` passed, set it on the <select> element
    // Otherwise, if we have an <option selected>, set its value on `value`
    if (this.value) {
      select.value = String(this.value);
    }
    else if (selectedValue) {
      this.value = selectedValue;
    }
    // This is a workaroud to prevent a bug in Stencil:
    // when using slots without Shadow DOM (possible only with Stencil)
    // sometimes an update in the Light DOM does not trigger a re-render
    // thus causing unexpected results.
    // https://gitlab.com/scale-ds/scale-telekom/-/issues/16
    if (this.selectElement) {
      this.mutationObserver = new MutationObserver(() => {
        this.forceUpdate = String(Date.now());
      });
      this.mutationObserver.observe(this.hostElement, {
        childList: true,
        subtree: true,
      });
    }
  }
  componentDidUpdate() {
    this.hasSlotIcon = !!this.hostElement.querySelector('[slot="icon"]');
  }
  componentDidRender() {
    // When type `select` and `controlled` is true,
    // make sure the <select> is always in sync with the value.
    const value = this.value == null ? '' : this.value.toString();
    if (this.controlled && this.selectElement.value.toString() !== value) {
      this.selectElement.value = value;
    }
    if (this.status !== '') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.size) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "size" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
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
    const helperTextId = `helper-message-${i$3}`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    return (h(Host, null, h("div", { class: this.getCssClassMap() }, h("label", { class: "input__label", htmlFor: this.inputId }, this.label), h("div", { class: "input__dropdown-wrapper" }, h("select", Object.assign({ ref: (el) => (this.selectElement = el), class: "input__dropdown",
      // @ts-ignore
      value: this.value, onChange: this.handleSelectChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, disabled: this.disabled, required: this.required, multiple: this.multiple, id: this.inputId, name: this.name, size: this.visibleSize }, ariaInvalidAttr, (this.helperText ? ariaDescribedByAttr : {})), h("slot", null)), h("div", { class: "input__dropdown-icon" }, this.hasSlotIcon ? (h("slot", { name: "icon" })) : (h("scale-icon-navigation-collapse-down", { decorative: true })))), this.helperText && (h("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? 'danger' : this.variant })))));
  }
  getCssClassMap() {
    return classnames('dropdown', this.disabled && `dropdown--disabled`, this.transparent && 'dropdown--transparent', this.status && `dropdown--status-${this.status}`, this.helperText && 'dropdown--helper-text', this.variant &&
      `dropdown--variant-${this.invalid ? 'danger' : this.variant}`, this.value != null && this.value !== '' && 'animated');
  }
  get hostElement() { return getElement(this); }
};
Dropdown.style = dropdownCss;

const iconCss$2 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionHidePassword = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M1.988 1.988A.75.75 0 013.03 1.97l17.25 17.25a.745.745 0 010 1.06.75.75 0 01-1.06 0L1.97 3.03a.75.75 0 01.018-1.042zM4.705 7.89l2.95 2.95A4.67 4.67 0 007.5 12a4.5 4.5 0 004.5 4.5 4.67 4.67 0 001.16-.155l2.285 2.28c-1.1.419-2.268.63-3.445.625-5.25 0-8.25-3.875-10.75-7.25a30.11 30.11 0 013.455-4.11zM12 4.75c5.25 0 8.25 3.875 10.75 7.25a30.11 30.11 0 01-3.455 4.11l-2.95-2.95c.1-.379.152-.768.155-1.16A4.5 4.5 0 0012 7.5a4.67 4.67 0 00-1.16.155l-2.285-2.28A9.562 9.562 0 0112 4.75zm-3 7.44l2.8 2.8a3 3 0 01-2.8-2.8zm3.2-3.18a3 3 0 012.8 2.8z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M2.85 2.85c.3-.3.75-.3 1.05 0L21.15 20.1c.3.3.3.75 0 1.05-.3.3-.75.3-1.05 0L2.85 3.9c-.3-.3-.3-.75 0-1.05zm1.35 4.5L5.25 8.4c-1.1 1.05-2.1 2.3-3.05 3.6 2.55 3.5 5.3 6.5 9.8 6.5 1.05 0 2-.15 2.85-.45L16 19.2c-1.2.5-2.5.8-4 .8-5.8 0-9.15-4.55-11.35-7.55L.3 12l.35-.45c.95-1.3 2.1-2.85 3.55-4.2zM12 4c5.8 0 9.15 4.55 11.35 7.55l.35.45-.35.45c-.95 1.3-2.1 2.85-3.55 4.2l-1.05-1.05c1.1-1.05 2.1-2.3 3.05-3.6-2.55-3.5-5.3-6.5-9.8-6.5-1.05 0-2 .15-2.85.45L8 4.8c1.2-.5 2.5-.8 4-.8zm-4.35 6.85l5.5 5.5c-.35.1-.75.15-1.15.15-2.5 0-4.5-2-4.5-4.5 0-.4.05-.8.15-1.15zM12 7.5c2.5 0 4.5 2 4.5 4.5 0 .4-.05.8-.15 1.15l-5.5-5.5c.35-.1.75-.15 1.15-.15z" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionHidePassword.style = iconCss$2;

const iconCss$1 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ActionSort = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M17.25 3.5c.69 0 1.25.56 1.25 1.25V14h3.17l-4.42 6.75L12.83 14H16V4.75c0-.69.56-1.25 1.25-1.25zm-10.5-.25L11.17 10H8v9.25a1.25 1.25 0 11-2.5 0V10H2.33l4.42-6.75z" }))) : (h("g", null, h("path", { d: "M17.25 4c.4 0 .75.35.75.75V14h3.65l-4.4 6.75-4.4-6.75h3.65V4.75c0-.4.35-.75.75-.75zm-10.5-.75l4.4 6.75H7.5v9.25c0 .4-.35.75-.75.75S6 19.65 6 19.25V10H2.35z", "fill-rule": "evenodd" })))))));
  }
  get hostElement() { return getElement(this); }
};
ActionSort.style = iconCss$1;

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const ServiceSettings = class {
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
    return (h(Host, null, h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && h("title", null, this.accessibilityTitle), h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null, h("path", { "fill-rule": "evenodd", d: "M20.235 14.5L23 14v-4l-2.765-.5a1 1 0 01-.64-1.555l1.595-2.31-2.825-2.825-2.31 1.595a1 1 0 01-1.555-.64L14 1h-4l-.5 2.76a1 1 0 01-1.555.645L5.635 2.81 2.81 5.635l1.595 2.31a1 1 0 01-.64 1.555L1 10v4l2.76.5a1 1 0 01.645 1.555l-1.595 2.31 2.825 2.825 2.31-1.595a1 1 0 011.555.64L10 23h4l.5-2.765a1 1 0 011.555-.64l2.31 1.595 2.825-2.825-1.595-2.31a1 1 0 01.64-1.555zM12 15a3 3 0 110-6 3 3 0 010 6z" }))) : (h("g", null, h("path", { "fill-rule": "evenodd", d: "M14 1l.5 2.75c.15.75.95 1.05 1.55.65l2.3-1.6 2.85 2.85-1.6 2.3c-.4.6-.05 1.4.65 1.55L23 10v4l-2.75.5a.994.994 0 00-.65 1.55l1.6 2.3-2.85 2.85-2.3-1.6c-.6-.4-1.4-.05-1.55.65L14 23h-4l-.5-2.75c-.15-.7-.95-1.05-1.55-.65l-2.3 1.6-2.85-2.85 1.6-2.3c.4-.6.05-1.4-.65-1.55L1 14v-4l2.75-.5a.994.994 0 00.65-1.55l-1.6-2.3L5.65 2.8l2.3 1.6c.6.4 1.4.05 1.55-.65L10 1h4zm-1.25 1.5h-1.5l-.3 1.5c-.2 1.2-1.25 2.05-2.45 2.05-.5 0-1-.15-1.4-.45l-1.3-.9-1.05 1.05.9 1.3c.5.7.6 1.6.25 2.4-.3.8-1 1.35-1.85 1.5l-1.55.3v1.5l1.55.25c.85.15 1.5.7 1.85 1.5.35.8.25 1.7-.25 2.4l-.9 1.3 1.05 1.05 1.3-.9c.4-.3.9-.45 1.4-.45 1.2 0 2.25.85 2.45 2.05l.3 1.55h1.5l.3-1.55c.2-1.2 1.25-2.05 2.45-2.05.5 0 1 .15 1.4.45l1.3.9 1.05-1.05-.9-1.3c-.5-.7-.55-1.6-.25-2.3.3-.8 1-1.35 1.85-1.5l1.55-.3v-1.5l-1.55-.3c-.85-.15-1.5-.7-1.85-1.5-.35-.8-.25-1.7.25-2.4l.9-1.3-1.05-1.05-1.3.9c-.4.3-.9.45-1.4.45-1.2 0-2.25-.85-2.45-2.05l-.3-1.55zM12 9a3 3 0 110 6 3 3 0 010-6z" })))))));
  }
  get hostElement() { return getElement(this); }
};
ServiceSettings.style = iconCss;

const menuFlyoutItemCss = ":host{--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);display:block;position:relative;outline-color:transparent;padding-left:var(--telekom-spacing-unit-x05);padding-right:var(--telekom-spacing-unit-x05)}*{-webkit-tap-highlight-color:rgba(255, 255, 255, 0)}.menu-flyout-item{position:relative;display:flex;align-items:stretch;text-align:left;font-size:var(--telekom-typography-font-size-body);line-height:2.635em;padding:0 var(--telekom-spacing-unit-x6);user-select:none;white-space:nowrap;border-radius:0;cursor:pointer;color:var(--telekom-color-text-and-icon-standard);max-width:calc(100vw - 2 * var(--telekom-spacing-unit-x6) - 2 * 10px);overflow:hidden;min-width:fit-content;min-width:-moz-fit-content}.menu-flyout-item:focus:not(.menu-flyout-item--disabled),.menu-flyout-item:hover:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-primary-hovered)}:host(:focus) .menu-flyout-item:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-standard)}:host(:focus) .menu-flyout-item:hover:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-primary-hovered)}:host(:focus) .menu-flyout-item{outline:var(--focus-outline)}:host(:active) .menu-flyout-item:not(.menu-flyout-item--disabled){color:var(--telekom-color-text-and-icon-primary-pressed)}:host([aria-expanded='true']) .menu-flyout-item{color:var(--telekom-color-text-and-icon-primary-pressed)}.menu-flyout-item--disabled{outline:none;color:var(--telekom-color-text-and-icon-disabled);cursor:not-allowed}:host([active])::before{content:'';display:block;position:absolute;top:0;left:0;height:100%;width:0;background-color:var(--telekom-color-primary-standard);border-left:var(--telekom-spacing-unit-x05) solid transparent}.menu-flyout-item--active{color:var(--telekom-color-text-and-icon-primary-standard)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.menu-flyout-item--disabled:not(.menu-flyout-item--disabled),.menu-flyout-item--active:not(.menu-flyout-item--disabled){color:white;stroke:white}}.menu-flyout-item__label{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}.menu-flyout-item__prefix{flex:0 0 auto;display:flex;align-items:center}.menu-flyout-item__check,slot[name='prefix']::slotted(:last-of-type){margin-right:var(--telekom-spacing-unit-x2)}.menu-flyout-item__check{visibility:hidden}:host([aria-checked='true']) .menu-flyout-item__check{visibility:visible}.menu-flyout-item__suffix{flex:0 0 auto;display:flex;align-items:center}.menu-flyout-item__cascade,slot[name='suffix']::slotted(:first-of-type){margin-left:var(--telekom-spacing-unit-x4)}";

const MenuFlyoutItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleSelect = createEvent(this, "scale-select", 7);
    this.scaleSelectLegacy = createEvent(this, "scaleSelect", 7);
    /** (optional) Set to true to display arrow icon suffix */
    this.cascade = false; // TODO rename to `hasMenu`?
    /** (optional) Mark as active */
    this.active = false;
    /** (optional) Set to true to display check prefix, false to display empty prefix */
    this.checked = false;
    /** (optional) Disabled */
    this.disabled = false;
    this.hasSlotSublist = false;
  }
  // TODO there is lot of room for improving this, aka edge-cases
  async triggerEvent(event, closeOnSelect = true) {
    const { key } = event;
    if (this.disabled) {
      return;
    }
    if (key === 'ArrowRight' && !this.hasSlotSublist) {
      return;
    }
    if (this.hasSlotSublist) {
      this.openSublist();
      return;
    }
    const detail = {
      eventType: event.type,
      key,
      item: this.hostElement,
      closeOnSelect,
      originalEvent: event,
    };
    emitEvent(this, 'scaleSelect', detail);
  }
  connectedCallback() {
    this.hasSlotSublist =
      this.hostElement.querySelector('[slot="sublist"]') != null;
    if (this.hasSlotSublist) {
      this.cascade = true;
    }
  }
  openSublist() {
    const sublist = this.hostElement.querySelector('[slot="sublist"]');
    if (sublist == null) {
      return;
    }
    sublist.trigger = () => this.hostElement;
    sublist.direction = 'right';
    sublist.open();
  }
  getCssClassMap() {
    return classnames('menu-flyout-item', this.disabled && 'menu-flyout-item--disabled', this.checkable != null && 'menu-flyout-item--checkable', this.active && 'menu-flyout-item--active');
  }
  render() {
    const checked = this.checked ? 'true' : 'false';
    return (h(Host, { role: this.checkable ? `menuitem${this.checkable}` : 'menuitem', "aria-checked": this.checkable == null ? false : checked, "aria-disabled": this.disabled ? 'true' : undefined, tabindex: "-1" }, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap(), part: "base" }, h("span", { part: "prefix", class: "menu-flyout-item__prefix" }, this.checkable == null ? (h("slot", { name: "prefix" })) : (h("scale-icon-action-success", { class: "menu-flyout-item__check", size: 16 }))), h("span", { part: "label", class: "menu-flyout-item__label" }, h("slot", null)), h("span", { part: "suffix", class: "menu-flyout-item__suffix" }, this.cascade ? (h("scale-icon-navigation-right", { class: "menu-flyout-item__cascade", size: 16 })) : (h("slot", { name: "suffix" })))), h("slot", { name: "sublist" })));
  }
  get hostElement() { return getElement(this); }
};
MenuFlyoutItem.style = menuFlyoutItemCss;

const paginationCss = ":host{--color:var(--telekom-color-text-and-icon-standard);--radius:var(--telekom-radius-standard);--font-size:var(--telekom-typography-font-size-small);--border:1px solid var(--telekom-color-ui-faint);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--color-button:var(--telekom-color-ui-subtle);--border-button:var(--border);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--radius-first-prompt:var(--radius) 0 0 var(--radius);--radius-last-prompt:0 var(--radius) var(--radius) 0;--radius-first-prompt-stack:0 0 0 var(--radius);--radius-last-prompt-stack:0 0 var(--radius) 0;--stroke-svg:var(--telekom-color-ui-extra-strong);--stroke-svg-high-contrast:#fff;--width-button:44px;--padding-info:var(--telekom-spacing-unit-x2);--height-button:44px;--line-height-info:calc(var(--height-button) - 2px)}.pagination{display:flex;overflow:auto;flex-wrap:wrap}.pagination__info,.pagination__info-responsive{color:var(--color);text-align:center;font-size:var(--font-size);line-height:var(--line-height-info);padding:0 var(--padding-info);border:var(--border);flex-shrink:0;border-left:0;border-right:0;white-space:nowrap;order:1}.pagination__info-responsive{display:none}.pagination__info span,.pagination__info-responsive span{font-weight:bold}button{display:flex;flex-shrink:0;justify-content:center;align-items:center;padding:0;margin:0;height:var(--height-button);width:var(--width-button);color:var(--color-button);background:none;border:var(--border-button)}button:focus{outline:var(--focus-outline);outline-offset:-3px}.pagination__first-prompt{border-radius:var(--radius-first-prompt);margin-right:-1px}.pagination__last-prompt{border-radius:var(--radius-last-prompt);margin-left:-1px;order:2}.pagination__next-prompt{order:2}button svg{display:block}button:not(:disabled){cursor:pointer}button:not(:disabled) svg{stroke:var(--stroke-svg)}button:disabled svg{stroke:var(--telekom-color-text-and-icon-disabled)}button:not(:disabled):hover{border-color:var(--telekom-color-primary-hovered);z-index:1}button:not(:disabled):hover svg{stroke:var(--color-hover)}button:not(:disabled):active{border-color:var(--color-active);z-index:1}button:not(:disabled):active svg{stroke:var(--color-active)}.pagination--hide-borders .pagination__info,.pagination--hide-borders .pagination__info-responsive{border:0}.pagination--hide-borders .pagination__info-responsive{border-bottom:var(--border)}.pagination--hide-borders button{border-radius:0;border-top-width:0;border-bottom-width:0}.pagination--hide-borders button:not(:disabled):hover{border-width:1px;border-color:var(--telekom-color-primary-hovered)}.pagination__button-wrapper{display:flex}@media screen and (forced-colors: active), (-ms-high-contrast: active){button:not(:disabled) svg{stroke:var(--stroke-svg-high-contrast)}}@media screen and (max-width: 639px){:host{width:100%}.pagination{flex-direction:column}.pagination__info-responsive{display:initial;order:0;overflow:auto;border-left:var(--border);border-right:var(--border);border-bottom:0;border-radius:var(--radius) var(--radius) 0 0;line-height:var(--line-height-info)}.pagination__info{display:none;line-height:var(--line-height-info)}.pagination__first-prompt{border-radius:var(--radius-first-prompt-stack)}.pagination__last-prompt{border-radius:var(--radius-last-prompt-stack)}.pagination__next-prompt{margin-left:-1px}button{flex:1;height:var(--height-button)}.pagination--hide-borders .pagination__first-prompt{border-left-width:0}.pagination--hide-borders .pagination__last-prompt{border-right-width:0}}";

const name = 'pagination';
const Pagination = class {
  /* 6. Lifecycle Events (call order) */
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scalePagination = createEvent(this, "scale-pagination", 7);
    this.scalePaginationLegacy = createEvent(this, "scalePagination", 7);
    /* 2. State Variables (alphabetical) */
    /* 3. Public Properties (alphabetical) */
    /** (optional) Deprecated; hideBorder should replace hideBorders */
    this.hideBorders = false;
    /** (optional) Set to true to hide top and bottom borders */
    this.hideBorder = false;
    /** (optional) Set number of rows/elements to show per page */
    this.pageSize = 10;
    /** (optional) Index of first element to display */
    this.startElement = 0;
    /** (optional) Total number of rows/elements used to calculate page displays */
    this.totalElements = 1;
    /** @deprecated - size should replace small */
    this.small = false;
    /** (optional) translation to 'Go to first page'  */
    this.ariaLabelFirstPage = 'Go to first page';
    /** (optional) translation to 'Go to next page'  */
    this.ariaLabelNextPage = 'Go to next page';
    /** (optional) translation to 'Go to previous page'  */
    this.ariaLabelPreviousPage = 'Go to previous page';
    /** (optional) translation to 'Go to last page'  */
    this.ariaLabelLastPage = 'Go to last page';
    /* 5. Private Properties (alphabetical) */
    /** Calculated width of largest text so buttons don't move while changing pages */
    this.maxWidth = 100;
  }
  componentWillLoad() {
    this.calculateWidth();
  }
  componentWillUpdate() { }
  componentDidRender() {
    if (this.hideBorders !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "hideBorders" is deprecated. Please use the "hideBorder" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.small !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "small" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.size) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "size" is deprecated. Please use css overwrite!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  componentDidLoad() { }
  componentDidUpdate() { }
  disconnectedCallback() { }
  /* 7. Listeners */
  calculateWidth() {
    // calculate max possible width
    this.maxWidth = (this.totalElements.toString().length * 3 + 3) * 9;
  }
  /* 8. Public Methods */
  /* 9. Local Methods */
  goFirstPage() {
    this.startElement = 0;
    this.emitUpdate('FIRST');
  }
  goPreviousPage() {
    // Min to prevent going below 0
    this.startElement -= Math.min(this.pageSize, this.startElement);
    this.emitUpdate('PREVIOUS');
  }
  goNextPage() {
    this.startElement += this.pageSize;
    this.emitUpdate('NEXT');
  }
  goLastPage() {
    const p = this.pageSize;
    // Make sure startElement is multiple of pageSize
    this.startElement = Math.ceil((this.totalElements - p) / p) * p;
    this.emitUpdate('LAST');
  }
  emitUpdate(direction) {
    const data = {
      startElement: this.startElement,
      direction,
    };
    emitEvent(this, 'scalePagination', data);
  }
  /* 10. Render */
  render() {
    const total = this.totalElements;
    const start = this.startElement + 1;
    const end = Math.min(this.startElement + this.pageSize, total);
    const isAtStart = start === 1;
    const isAtEnd = end === total;
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, h("div", { part: "info-responsive", class: `${name}__info-responsive` }, h("span", null, start, "-", end), ' ', "/ ", total), h("div", { class: `${name}__button-wrapper` }, h("div", { part: "info", class: `${name}__info`, style: { width: `${this.maxWidth}px` } }, h("span", null, start, "-", end), ' ', "/ ", total), h("button", { class: `${name}__first-prompt`, part: "first-prompt", disabled: isAtStart, onClick: () => this.goFirstPage(), "aria-label": this.ariaLabelFirstPage }, h("svg", { height: "12", viewBox: "0 0 48 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#cacaca" }, h("path", { d: "M44.5 48.5L21.5 26L44.5 3.5M27.5 48.5L4.5 26L27.5 3.5", "stroke-width": "6", "stroke-linecap": "round" }))), h("button", { class: `${name}__prev-prompt`, part: "prev-prompt", disabled: isAtStart, onClick: () => this.goPreviousPage(), "aria-label": this.ariaLabelPreviousPage }, h("svg", { height: "12", viewBox: "0 0 37 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#cacaca" }, h("path", { d: "M33 48L6 26L33 4", "stroke-width": "7", "stroke-linecap": "round" }))), h("button", { class: `${name}__next-prompt`, part: "next-prompt", disabled: isAtEnd, onClick: () => this.goNextPage(), "aria-label": this.ariaLabelNextPage }, h("svg", { height: "12", viewBox: "0 0 37 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#cacaca" }, h("path", { d: "M4 4L31 26L4 48", "stroke-width": "7", "stroke-linecap": "round" }))), h("button", { class: `${name}__last-prompt`, part: "last-prompt", disabled: isAtEnd, onClick: () => this.goLastPage(), "aria-label": this.ariaLabelLastPage }, h("svg", { height: "12", viewBox: "0 0 48 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "#cacaca" }, h("path", { d: "M3.5 3.5L26.5 26L3.5 48.5M20.5 3.5L43.5 26L20.5 48.5", "stroke-width": "6", "stroke-linecap": "round" })))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const prefix = mode === 'basePart' ? '' : `${name}--`;
    return classnames(name, (this.hideBorder || this.hideBorders) && `${prefix}hide-borders`);
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "totalElements": ["calculateWidth"]
  }; }
};
Pagination.style = paginationCss;

const progressBarCss = ":host{--background:var(--telekom-color-primary-standard);--background-disabled:var(--telekom-color-ui-disabled);--background-color:var(--telekom-color-ui-faint);--color-error:var(--telekom-color-text-and-icon-functional-danger);--background-error:var(--telekom-color-functional-danger-subtle);--color-success:var(--telekom-color-text-and-icon-functional-success);--color-disabled:var(--telekom-color-text-and-icon-disabled);--progress-bar-outer-size:6px;--progress-bar-inner-size:var(--telekom-spacing-unit-x1);--font-label:var(--telekom-text-style-ui);--color-inner-status:var(--telekom-color-primary-standard);--font-size-inner-status:var(--telekom-typography-font-size-small);--font-size-status:var(--telekom-typography-font-size-small);--font-weight-status:var(--telekom-typography-font-weight-extra-bold);--color-status-description:var(--telekom-color-text-and-icon-additional);--font-size-status-description:var(--telekom-typography-font-size-small);--font-weight-status-description:var(--telekom-typography-font-weight-bold)}.progress-bar{width:100%;max-width:30rem}.progress-bar--disabled{cursor:not-allowed}.progress-bar__top-container{display:flex;justify-content:space-between;align-items:center}.progress-bar--disabled .progress-bar__label,.progress-bar--disabled .progress-bar__status{color:var(--color-disabled)}.progress-bar__label{display:block;padding:var(--telekom-spacing-unit-x3) 0;font:var(--font-label)}.progress-bar__wrapper{width:100%;display:flex;box-sizing:border-box;align-items:center}.progress-bar__outer{width:100%;height:var(--progress-bar-outer-size);margin-left:0;overflow:hidden;position:relative;border-radius:100px;background-color:var(--background-color)}.progress-bar__inner{top:0;left:0;height:var(--progress-bar-inner-size);display:flex;position:absolute;align-items:center;white-space:nowrap;justify-content:flex-end;animation-fill-mode:both;border-radius:100px;background:var(--background)}.progress-bar__status{padding:var(--telekom-spacing-unit-x3) 0;font:var(--font-label);font-variant-numeric:tabular-nums}.progress-bar--completed .progress-bar__icon{color:var(--color-success)}.progress-bar--completed .progress-bar__inner{--background:var(--color-success)}.progress-bar--has-error .progress-bar__icon{color:var(--color-error)}.progress-bar--has-error .progress-bar__inner{--background:var(--color-error)}.progress-bar--has-error .progress-bar__outer{background-color:var(--background-error)}.progress-bar__status-description{color:var(--color-status-description);font-size:var(--font-size-status-description);font-weight:var(--font-weight-status-description);margin-top:var(--telekom-spacing-unit-x2)}.progress-bar__aria-live{clip:rect(0 0 0 0);width:1px;border:0;height:1px;margin:-1px;padding:0;overflow:hidden;position:absolute}";

const ICON_SIZE = 16;
let i$2 = 0;
const ProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** (optional) Progress bar busy switch */
    this.busy = false;
    /** (required) Progress bar percentage */
    this.percentage = 0;
    /** (optional) Progress bar percentage to start the animation from (default: 0) */
    this.percentageStart = 0;
    /** (optional) Progress bar percentage text */
    this.showStatus = true;
    this.transitions = (width, widthStart) => `
    @keyframes showProgress {
      from {
        width: ${widthStart}%;
      }
      to {
        width: ${width}%;
      }
    }
  `;
    this.progressStyle = () => {
      return {
        width: this.disabled ? '100%' : `${this.percentage}%`,
        border: '1px solid transparent',
        background: this.customColor
          ? this.customColor
          : this.disabled
            ? 'var(--background-disabled)'
            : `var(--background)`,
        animation: this.disabled ? 'none' : 'showProgress 3s ease-in-out',
      };
    };
  }
  componentWillLoad() {
    if (this.progressBarId == null) {
      this.progressBarId = 'progress-bar-' + i$2++;
    }
    if (this.disabled) {
      this.showStatus = false;
    }
  }
  componentWillUpdate() { }
  disconnectedCallback() { }
  componentDidRender() {
    if (this.customColor !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: `Property "customColor" is deprecated. 
          Please use css variable "--background" to set the progress bar background color;
          e.g. <scale-progress-bar percentage="20" style="--background: green"></scale-progress-bar>`,
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("style", null, this.transitions(this.percentage, this.percentageStart)), h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, h("div", { class: "progress-bar__top-container" }, !!this.label && (h("label", { part: "label", class: "progress-bar__label", htmlFor: this.progressBarId }, this.label)), !!this.showStatus && !this.hasError && this.percentage !== 100 && (h("div", { part: "status", class: "progress-bar__status", "aria-hidden": "true" }, this.percentage, "%")), this.hasError ? (h("div", { class: "progress-bar__icon" }, h("scale-icon-alert-error", { size: ICON_SIZE }))) : this.percentage === 100 ? (h("div", { class: "progress-bar__icon" }, h("scale-icon-alert-success", { size: ICON_SIZE }))) : null), h("div", { part: "wrapper", class: "progress-bar__wrapper" }, h("div", { part: "outer", class: "progress-bar__outer", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": this.percentage, "aria-busy": this.busy, "aria-valuetext": `${this.percentage}%`, "aria-label": this.label, id: this.progressBarId }, h("div", { part: "inner", class: "progress-bar__inner", style: this.progressStyle() })), h("slot", { name: "icon" }))), !!this.statusDescription && (h("div", { part: "status-description", class: "progress-bar__status-description", role: "alert" }, this.statusDescription)), !this.mute && (h("span", { "aria-live": "polite", class: "progress-bar__aria-live" }, this.percentage !== Math.round(this.percentage / 10) * 10
      ? `${Math.round(this.percentage / 10) * 10}%`
      : null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'progress-bar';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classnames(component, this.hasError && `${prefix}has-error`, this.disabled && `${prefix}disabled`, this.percentage === 100 && `${prefix}completed`);
  }
  get hostElement() { return getElement(this); }
};
ProgressBar.style = progressBarCss;

const switchCss = "scale-switch{--width:42px;--height:24px;--offset:2px;--radius:1em;--transition-duration:var(--telekom-motion-duration-immediate);--transition-easing:var(--telekom-motion-easing-standard);--shadow-thumb:0 0 2px 0 rgba(0, 0, 0, 0.24), 0 2px 4px 0 rgba(0, 0, 0, 0.24),\n    0 4px 12px 0 rgba(0, 0, 0, 0.26);--spacing-x-label:var(--telekom-spacing-unit-x2);--font-label:var(--telekom-text-style-ui);--font-io-text:var(--telekom-text-style-small-bold)}.switch{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-white, #fff);--_overlay-background:transparent;display:inline-block;position:relative}.switch__control{position:absolute;margin:0;top:0;width:var(--width);height:var(--height);opacity:0}.switch__wrapper{display:flex;align-items:center;cursor:pointer}.switch__toggle{position:relative;width:var(--width);height:var(--height);background:var(--_background);border-radius:var(--radius);transition-property:background;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing)}.switch__toggle--overlay{position:absolute;width:var(--width);height:var(--height);border-radius:var(--radius);background:var(--_overlay-background)}[data-platform='android'] .switch__toggle--overlay{display:none}.switch:hover{--_overlay-background:var(--telekom-color-ui-state-fill-hovered)}.switch:active{--_overlay-background:var(--telekom-color-ui-state-fill-pressed)}.switch--checked{--_background:var(--telekom-color-primary-standard)}[data-platform='android'] .switch.switch--checked{--_background:var(--telekom-color-primary-standard);--_color-thumb:var(--telekom-color-ui-white)}[data-platform='android'] .switch{--_color-thumb:var(--telekom-color-ui-strong)}[data-platform='android'] .switch:hover{--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch:active{--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch:hover{--_color-thumb:var(--telekom-color-ui-extra-strong)}[data-platform='android'] .switch:active{--_color-thumb:var(--telekom-color-ui-extra-strong)}[data-platform='android'] .switch--checked:active,[data-platform='android'] .switch--checked:hover{--_color-thumb:var(--telekom-color-ui-white)}[data-platform='android'] .switch--checked:hover,.switch--checked:hover{--_background:var(--telekom-color-primary-hovered)}[data-platform='android'] .switch--checked:active,.switch--checked:active{--_background:var(--telekom-color-primary-pressed)}[data-platform='android'] .switch--disabled{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-border-disabled)}[data-platform='android'] .switch--disabled:hover{--_color-thumb:var(--telekom-color-ui-border-disabled);--_background:var(--telekom-color-ui-faint)}[data-platform='android'] .switch--checked.switch--disabled:hover{--_background:var(--telekom-color-ui-border-disabled);--_color-thumb:var(--telekom-color-ui-faint)}.switch--disabled,.switch--disabled:hover,.switch--disabled:active{--_background:var(--telekom-color-ui-disabled);--_color-thumb:var(--telekom-color-ui-faint);--_overlay-background:transparent}.switch--checked .switch--disabled,.switch--checked .switch--disabled:hover,.switch--checked .switch--disabled:active{--_background:var(--telekom-color-ui-faint);--_color-thumb:var(--telekom-color-ui-disabled);box-shadow:var(--telekom-shadow-raised-standard);--_overlay-background:transparent}[data-platform='android'] .switch--disabled.switch--checked{--_background:var(--telekom-color-ui-border-disabled);--_color-thumb:var(--telekom-color-ui-faint)}.switch--disabled .switch__wrapper{cursor:not-allowed}.switch--disabled .switch__thumb{box-shadow:var(--telekom-shadow-raised-standard)}.switch--size-large{--width:56px;--height:32px}.switch--focus-visible-not-supported :focus~.switch__toggle,:focus-visible~.switch__toggle{outline:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-focus);outline-offset:var(--telekom-spacing-unit-x025)}.switch__thumb{--_size:calc(var(--height) - var(--offset) * 2);position:relative;z-index:2;box-sizing:border-box;width:var(--_size);height:var(--_size);aspect-ratio:1 / 1;background:var(--_color-thumb);border-radius:50%;box-shadow:var(--shadow-thumb);margin:var(--offset);transition-property:margin, width, height, background, color;transition-duration:var(--transition-duration);transition-timing-function:var(--transition-easing);color:transparent;border:1px solid rgba(0, 0, 0, 0.04)}.switch--checked .switch__thumb{margin-left:1em;margin-inline-start:calc(var(--width) - var(--height) + var(--offset))}.switch__io-text{position:absolute;z-index:1;top:0;left:0;display:flex;justify-content:center;align-items:center;width:50%;height:var(--height);margin-left:calc(50% - var(--offset));font:var(--font-io-text);line-height:var(--telekom-typography-line-spacing-none)}.switch--size-large .switch__io-text{margin-top:1px;font:var(--telekom-text-style-caption-bold)}.switch--checked .switch__io-text{margin-left:var(--offset);color:var(--telekom-color-text-and-icon-white-standard)}.switch--disabled .switch__io-text{color:var(--telekom-color-text-and-icon-disabled)}.switch__label-text{font:var(--font-label);margin-inline-start:var(--spacing-x-label)}[data-platform='android'] scale-switch{--width:56px;--height:32px;--offset:7px}[data-platform='android'] .switch__thumb{width:18px;height:18px}[data-platform='android'] scale-switch:not([disabled]):active .switch__thumb{width:28px;height:28px;--offset:2px}[data-platform='android'] .switch--checked .switch__thumb{width:24px;height:24px;--offset:4px}[data-platform='android'] .switch__thumb{display:flex;justify-content:center;align-items:center;box-shadow:none}scale-switch scale-icon-action-success{display:none !important}[data-platform='android'] .switch--checked scale-icon-action-success{position:absolute;display:inline-block !important;margin-top:2px;margin-left:1px}[data-platform='android'] .switch--checked .switch__thumb{color:var(--_background)}[data-platform='android'] .switch__io-text{display:none}[data-platform='android'] .switch--checked .switch__thumb{color:var(--telekom-color-primary-standard)}[data-platform='android'] .switch--disabled .switch__thumb{color:var(--telekom-color-ui-strong)}";

let i$1 = 0;
// For chrome that applies :focus upon click, and :focus-visible isn't widely supported
const isFocusVisibleSupported = isPseudoClassSupported(':focus-visible');
const Switch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    /** (optional) Active switch */
    this.checked = false;
    /** (optional) Disabled switch */
    this.disabled = false;
    this.size = 'large';
  }
  componentWillLoad() {
    if (this.inputId == null) {
      this.inputId = 'switch-' + i$1++;
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("label", { id: `${this.inputId}-label`, class: "switch__wrapper" }, h("input", { type: "checkbox", name: this.name, class: "switch__control", checked: this.checked, disabled: this.disabled, "aria-labelledby": `${this.inputId}-label`, id: this.inputId, onChange: (event) => {
        this.checked = event.target.checked;
        emitEvent(this, 'scaleChange', { value: this.checked });
      } }), h("div", { class: "switch__toggle", "aria-hidden": "true" }, h("div", { class: "switch__thumb" }, h("scale-icon-action-success", { size: 12, decorative: true, selected: true })), h("div", { class: "switch__io-text" }, h("span", null, this.checked ? 'I' : '0'))), h("div", { class: "switch__toggle--overlay", "aria-hidden": "true" }), this.label && h("span", { class: "switch__label-text" }, this.label)))));
  }
  getCssClassMap() {
    return classnames('switch', this.checked && 'switch--checked', this.disabled && 'switch--disabled', this.size && `switch--size-${this.size}`, isFocusVisibleSupported && 'switch--focus-visible-supported', !isFocusVisibleSupported && 'switch--focus-visible-not-supported');
  }
};
Switch.style = switchCss;

const tagCss = ":host{--background:var(--telekom-color-ui-extra-strong);--color:var(--telekom-color-text-and-icon-inverted-standard);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--font-weight:var(--telekom-typography-font-weight-bold);--radius:var(--telekom-radius-small);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--icon-color:var(--color);--icon-color-hover:var(--color);--background-disabled:var(--telekom-color-ui-disabled);--color-disabled:var(--telekom-color-text-and-icon-disabled);--spacing-left-dismissable:var(--telekom-spacing-unit-x05);--border-button-dismissable-focus:1px solid transparent;--box-shadow-button-dismissable-focus:var(--box-shadow-focus);--background-button-dismissable-hover:var(\n    --telekom-color-ui-state-fill-hovered\n  );--background-button-standard-strong-dismissible-hover:var(\n    --telekom-color-ui-state-fill-hovered-inverted\n  );--background-button-standard-dismissible-hover:var(\n    --telekom-color-ui-state-fill-hovered\n  );--background-button-dismissable-active:var(\n    --telekom-color-ui-state-fill-pressed\n  );--height-button-dismissable:20px;--width-button-dismissable:20px;--height-button-dismissable-small:18px;--width-button-dismissable-small:18px;--spacing-small:0 var(--telekom-spacing-unit-x2);--font-size-small:var(--telekom-typography-font-size-small);--line-height-small:var(--telekom-typography-line-spacing-loose)}.tag{border:1px solid transparent;display:inline-flex;outline:none;padding:0 8px;text-align:center;transition:all 0.15s ease-in-out;align-items:center;white-space:nowrap;border-radius:var(--telekom-radius-small);vertical-align:baseline;justify-content:center;font-size:var(--font-size);line-height:var(--line-height);font-weight:var(--font-weight);background:var(--background);color:var(--color);cursor:default}.tag scale-icon-action-close{color:var(--icon-color)}.tag:not(.tag--disabled) scale-icon-action-close:hover{color:var(--icon-color-hover)}.tag::slotted(*){padding:100px}.tag--dismissable{padding:0 0 0 8px}.tag--dismissable button{border:none;cursor:pointer;height:var(--height-button-dismissable);width:var(--width-button-dismissable);margin:0;outline:none;padding:0;background:transparent;margin-left:var(--spacing-left-dismissable);border-radius:var(--radius);align-items:center}.tag--dismissable scale-icon-action-close{padding-top:0.5px;height:20px;align-items:center}.tag--dismissable button:focus{border:var(--border-button-dismissable-focus);justify-content:center;outline:var(--focus-outline)}.tag--dismissable:not(.tag--disabled) button:hover{background:var(--background-button-dismissable-hover)}.tag--dismissable.tag--color-grey:not(.tag--disabled) button:hover{background:var(--background-button-standard-dismissible-hover)}.tag--dismissable.tag--type-strong.tag--color-grey:not(.tag--disabled) button:hover{background:var(--background-button-standard-strong-dismissible-hover)}.tag--dismissable button:active{background:var(--background-button-dismissable-active)}.tag--dismissable.tag--color-grey button:active{background:var(--background-button-standard-dismissible-hover)}.tag--dismissable.tag--type-strong.tag--color-grey button:active{background:var(--background-button-standard-strong-dismissible-hover)}.tag--dismissable button:focus scale-icon-action-close{margin-top:-1px}.tag--size-small{font-size:var(--font-size-small);padding:0 6px}.tag--size-small.tag--dismissable{padding-right:0px}.tag--size-small.tag--dismissable button{height:var(--height-button-dismissable-small);width:var(--width-button-dismissable-small)}.tag--size-small.tag--dismissable scale-icon-action-close{height:var(--height-button-dismissable-small);margin-top:-0.5px}.tag--size-small.tag--dismissable button:focus scale-icon-action-close{height:var(--height-button-dismissable-small);margin-top:-1.4px}.tag--disabled{background-color:var(--telekom-color-ui-faint) !important;color:var(--color-disabled) !important;pointer-events:none}.tag--disabled scale-icon-action-close{color:var(--color-disabled) !important;pointer-events:none}.tag--link{text-decoration:none}.tag--link:focus{border:1px solid white;outline:var(--focus-outline)}.tag--link{background:var(--background-secondary)}.tag--link:hover{background:var(--background-secondary)}.tag--link:focus{border:1px solid white}.tag--type-standard.tag--color-grey{background-color:var(--telekom-color-ui-faint);color:var(--telekom-color-text-and-icon-standard)}.tag--type-standard.tag--color-grey.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-standard)}.tag--type-standard.tag--color-cyan{background-color:var(--telekom-color-additional-cyan-subtle);color:var(--telekom-color-text-and-icon-on-subtle-cyan)}.tag--type-standard.tag--color-cyan.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-cyan)}.tag--type-standard.tag--color-yellow{background-color:var(--telekom-color-additional-yellow-subtle);color:var(--telekom-color-text-and-icon-on-subtle-yellow)}.tag--type-standard.tag--color-yellow.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-yellow)}.tag--type-standard.tag--color-green{background-color:var(--telekom-color-functional-success-subtle);color:var(--telekom-color-text-and-icon-on-subtle-success)}.tag--type-standard.tag--color-green.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-success)}.tag--type-standard.tag--color-orange{background-color:var(--telekom-color-functional-warning-subtle);color:var(--telekom-color-text-and-icon-on-subtle-warning)}.tag--type-standard.tag--color-orange.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-warning)}.tag--type-standard.tag--color-red{background-color:var(--telekom-color-functional-danger-subtle);color:var(--telekom-color-text-and-icon-on-subtle-danger)}.tag--type-standard.tag--color-red.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-danger)}.tag--type-standard.tag--color-violet{background-color:var(--telekom-color-additional-violet-subtle);color:var(--telekom-color-text-and-icon-on-subtle-violet)}.tag--type-standard.tag--color-violet.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-violet)}.tag--type-standard.tag--color-brown{background-color:var(--telekom-color-additional-brown-subtle);color:var(--telekom-color-text-and-icon-on-subtle-brown)}.tag--type-standard.tag--color-brown.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-brown)}.tag--type-standard.tag--color-olive{background-color:var(--telekom-color-additional-olive-subtle);color:var(--telekom-color-text-and-icon-on-subtle-olive)}.tag--type-standard.tag--color-olive.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-olive)}.tag--type-standard.tag--color-teal{background-color:var(--telekom-color-additional-teal-subtle);color:var(--telekom-color-text-and-icon-on-subtle-teal)}.tag--type-standard.tag--color-teal.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-on-subtle-teal)}.tag--type-strong{color:var(--telekom-color-text-and-icon-standard)}.tag--type-strong.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-additional)}.tag--type-strong.tag--color-grey{background-color:var(--telekom-color-ui-extra-strong);color:var(--telekom-color-text-and-icon-inverted-standard)}.tag--type-strong.tag--color-grey.tag--dismissable scale-icon-action-close{color:var(--telekom-color-text-and-icon-inverted-standard)}.tag--type-strong.tag--color-cyan{background-color:var(--telekom-color-additional-cyan-400)}.tag--type-strong.tag--color-yellow{background-color:var(--telekom-color-additional-yellow-400)}.tag--type-strong.tag--color-green{background-color:var(--telekom-color-functional-success-standard)}.tag--type-strong.tag--color-orange{background-color:var(--telekom-color-functional-warning-standard)}.tag--type-strong.tag--color-red{background-color:var(--telekom-color-functional-danger-standard)}.tag--type-strong.tag--color-violet{background-color:var(--telekom-color-additional-violet-300)}.tag--type-strong.tag--color-brown{background-color:var(--telekom-color-additional-brown-400)}.tag--type-strong.tag--color-olive{background-color:var(--telekom-color-additional-olive-400)}.tag--type-strong.tag--color-teal{background-color:var(--telekom-color-additional-teal-400)}";

const Tag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleClose = createEvent(this, "scale-close", 7);
    this.scaleCloseLegacy = createEvent(this, "scaleClose", 7);
    /** (optional) Tag type */
    this.type = 'standard';
    /** (optional) Tag color */
    this.color = 'grey';
    /** (optional) Tag href */
    this.href = '';
    /** (optional) Tag target */
    this.target = '_self';
    /** (optional) Tag dismissable */
    this.dismissable = false;
    /** (optional) Tag disabled */
    this.disabled = false;
    /** (optional) Dismiss label */
    this.dismissText = 'dismiss';
    this.handleClose = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      emitEvent(this, 'scaleClose', event);
    };
  }
  componentWillUpdate() { }
  disconnectedCallback() { }
  render() {
    const Element = !!this.href && !this.disabled ? 'a' : 'span';
    const linkProps = !!this.href
      ? {
        href: this.href,
        target: this.target,
      }
      : {};
    return (h(Host, null, this.styles && h("style", null, this.styles), h(Element, Object.assign({ part: this.getBasePartMap(), class: this.getCssClassMap() }, linkProps), h("slot", null), this.dismissable && (h("button", { part: "button-dismissable", disabled: this.disabled, "aria-label": this.dismissText, onClick: this.handleClose }, h("scale-icon-action-close", { part: "icon-dismissable", size: 15 }))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tag';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classnames(mode === 'basePart' ? 'base' : component, this.size && `${prefix}size-${this.size}`, this.type && `${prefix}type-${this.type}`, this.color && `${prefix}color-${this.color}`, !!this.href && `${prefix}link`, !!this.dismissable && `${prefix}dismissable`, !!this.disabled && `${prefix}disabled`);
  }
};
Tag.style = tagCss;

const textFieldCss = "scale-text-field{--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--border:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-border-standard);--border-error:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-danger-standard);--border-success:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-success-standard);--border-warning:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-warning-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--background-color-hover:var(--telekom-color-ui-state-fill-hovered);--background-color-disabled:none;--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--height:var(--telekom-spacing-unit-x11);--spacing-x:var(--telekom-spacing-unit-x3);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--border-color-readonly:var(--telekom-color-ui-border-disabled);--background-readonly:var(--telekom-color-ui-disabled);--font-weight-meta:var(--telekom-line-weight-bold);--font-size-meta:var(--telekom-typography-font-size-small);--line-height-meta:var(--telekom-typography-line-spacing-standard);--spacing-y-meta:var(--telekom-spacing-unit-x1);--color-meta:var(--telekom-color-text-and-icon-standard);--color-meta-error:var(--telekom-color-text-and-icon-functional-danger);--spacing-control:21px var(--telekom-spacing-unit-x10) 5px\n    calc(var(--spacing-x) - 1px);--transition-control:var(--transition);--font-size-control:var(--telekom-typography-font-size-body);--background-control:var(--telekom-color-ui-state-fill-standard);--margin-bottom-control:var(--telekom-spacing-unit-x1);--transition-counter:var(--transition);--font-size-counter:var(--font-size-meta);--line-height-counter:var(--line-height-meta);--color-counter-error:var(--color-meta-error);--transition-helper-text:var(--transition);--font-size-helper-text:var(--font-size-meta);--line-height-helper-text:var(--line-height-meta);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--color-helper-text-error:var(--color-meta-error);--color-helper-text-success:var(\n    --telekom-color-text-and-icon-functional-success\n  );--color-helper-text-warning:var(\n    --telekom-color-text-and-icon-functional-warning\n  );--transition-placeholder:var(--transition);--color-placeholder:var(--telekom-color-text-and-icon-additional);--color-label:var(--telekom-color-text-and-icon-additional);--color-label-readonly:var(--telekom-color-text-and-icon-standard);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--font-size-label:var(--telekom-typography-font-size-body);--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label-focus:var(--telekom-typography-font-size-footnote);--font-weight-label-focus:var(--telekom-typography-font-weight-bold)}.text-field{position:relative}.text-field .text-field__helper-text,.text-field .text-field__counter{font-weight:var(--font-weight-meta)}.text-field .text-field__control{width:100%;height:var(--height);margin:0;display:flex;outline:none;padding:var(--spacing-control);z-index:1;box-sizing:border-box;transition:var(--transition-control);font-family:inherit;font-size:var(--font-size-control);border-radius:var(--radius);border:var(--border);background-color:var(--background-control);color:var(--color-meta)}.text-field.text-field--helper-text .text-field__control{margin-bottom:var(--margin-bottom-control)}.text-field .text-field__counter{display:flex;transition:var(--transition-counter);margin-left:auto;justify-content:flex-end;font-size:var(--font-size-counter);line-height:var(--line-height-counter);color:inherit;font-weight:var(--telekom-typography-font-weight-medium)}.text-field .text-field__helper-text{transition:var(--transition-helper-text);font-size:var(--font-size-helper-text);color:var(--color-helper-text);font-weight:var(--telekom-typography-font-weight-bold);display:flex;margin:var(--telekom-spacing-unit-x1) 0 var(--telekom-spacing-unit-x1) 0}.text-field .text-field__helper-text_label{font-size:var(--telekom-typography-font-size-small)}.text-field--variant-warning .text-field__helper-text_label{color:var(--color-helper-text-warning)}.text-field--variant-success .text-field__helper-text_label{color:var(--color-helper-text-success)}.text-field .text-field__helper-text_icon{justify-content:center;padding-top:1.5px;padding-right:4.5px}.text-field--variant-warning .text-field__helper-text_icon{color:var(--color-helper-text-warning)}.text-field--variant-success .text-field__helper-text_icon{color:var(--color-helper-text-success)}.text-field .text-field__meta{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}.text-field:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover{border-color:var(--border-color-hover);background-color:var(--background-color-hover)}.text-field:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--border-color-focus);outline:var(--focus-outline);outline-offset:1px}.text-field:not(.text-field--disabled) .text-field__control:focus::placeholder{color:var(--color-placeholder)}.text-field .text-field__control::placeholder,.text-field ::placeholder{color:transparent;transition:var(--transition-placeholder)}.text-field__label{top:-1px;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font-size:var(--font-size-label);transform:translate(\n    var(--spacing-x),\n    calc((var(--height) - var(--font-size-label)) / 2)\n  );font-weight:var(--font-weight-label)}.text-field--has-focus:not(.text-field--readonly) .text-field__label,.animated .text-field__label{line-height:var(--telekom-typography-font-size-small);transform:translate(var(--spacing-x), var(--telekom-spacing-unit-x2));font-size:var(--font-size-label-focus);font-weight:var(--font-weight-label-focus)}.text-field--variant-danger .text-field__control{border:var(--border-error)}.text-field--variant-success .text-field__control{border:var(--border-success)}.text-field--variant-warning .text-field__control{border:var(--border-warning)}.text-field--variant-danger:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover,.text-field--variant-danger:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--telekom-color-functional-danger-hovered)}.text-field--variant-success:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover,.text-field--variant-success:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--telekom-color-functional-success-hovered)}.text-field--variant-warning:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:hover,.text-field--variant-warning:not(.text-field--disabled):not(.text-field--readonly) .text-field__control:focus{border-color:var(--telekom-color-functional-warning-hovered)}.text-field--variant-danger .text-field__helper-text{color:var(--color-helper-text-error)}.text-field--variant-danger .text-field__counter{color:var(--color-counter-error)}.text-field--variant-success .text-field__helper-text{color:var(--color-helper-text-success)}.text-field--variant-success .text-field__counter{color:var(--telekom-color-text-and-icon-functional-success)}.text-field--variant-warning .text-field__helper-text{color:var(--color-helper-text-warning)}.text-field--variant-warning .text-field__counter{color:var(--telekom-color-text-and-icon-functional-warning)}.text-field--transparent .text-field__control{background-color:transparent}.text-field--readonly input,.text-field--readonly .text-field__control{color:var(--color-label-readonly);border:none;background:var(--background-readonly)}.text-field--readonly .text-field__control:focus{outline:var(--focus-outline);outline-offset:1px}.text-field--disabled label,.text-field--disabled .text-field__label,.text-field--disabled input,.text-field--disabled .text-field__control,.text-field--disabled .text-field__meta,.text-field--disabled .text-field__counter,.text-field--disabled .text-field__helper-text{cursor:not-allowed;border-color:var(--border-color-disabled);background-color:var(--background-color-disabled);color:var(--color-disabled);background:transparent}.text-field--disabled.animated label.text-field__label{color:var(--color-disabled)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none}input[type='number']{-moz-appearance:textfield}input[type='datetime-local']::-webkit-calendar-picker-indicator,input[type='time']::-webkit-calendar-picker-indicator,input[type='date']::-webkit-calendar-picker-indicator,input[type='week']::-webkit-calendar-picker-indicator,input[type='month']::-webkit-calendar-picker-indicator{position:absolute;right:12px}";

let i = 0;
const TextField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleInput = createEvent(this, "scale-input", 7);
    this.scaleInputLegacy = createEvent(this, "scaleInput", 7);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleChangeLegacy = createEvent(this, "scaleChange", 7);
    this.scaleFocus = createEvent(this, "scale-focus", 7);
    this.scaleFocusLegacy = createEvent(this, "scaleFocus", 7);
    this.scaleBlur = createEvent(this, "scale-blur", 7);
    this.scaleBlurLegacy = createEvent(this, "scaleBlur", 7);
    this.scaleKeyDown = createEvent(this, "scale-keydown", 7);
    this.scaleKeyDownLegacy = createEvent(this, "scaleKeydown", 7);
    /** (optional) Input type */
    this.type = 'text';
    /** (optional) Input mode */
    this.inputModeType = 'text';
    /** (optional) Input name */
    this.name = '';
    /** Input label */
    this.label = '';
    /** (optional) Input helper text */
    this.helperText = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
    /** (optional) Variant */
    this.variant = 'informational';
    /** (optional) Input placeHolder */
    this.placeholder = '';
    /** (optional) Input value */
    this.value = '';
    /** (optional) the step attribute specifies the interval between legal numbers in an <input type="number"> element. */
    this.step = '1';
    /** (optional)) Makes type `input` behave as a controlled component in React */
    this.experimentalControlled = false;
    /** Whether the input element has focus */
    this.hasFocus = false;
    this.handleInput = (event) => {
      const target = event.target;
      if (this.experimentalControlled) {
        this.hostElement.querySelector('input').value = String(this.value);
        this.forceUpdate = String(Date.now());
      }
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
      this.inputId = 'input-text-field' + i++;
    }
  }
  componentDidRender() {
    // When `experimentalControlled` is true,
    // make sure the <input> is always in sync with the value.
    const value = this.value == null ? '' : this.value.toString();
    const input = this.hostElement.querySelector('input');
    if (this.experimentalControlled && input.value.toString() !== value) {
      input.value = value;
    }
    if (this.status !== '') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
    if (this.size) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "size" is deprecated. Please use css overwrites for a small version!',
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
    const numericTypes = [
      'number',
      'date',
      'month',
      'week',
      'time',
      'datetime-local',
    ];
    return (h(Host, null, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("label", { class: "text-field__label", htmlFor: this.inputId }, this.label), h("input", Object.assign({ type: this.type, inputMode: this.inputModeType, class: "text-field__control", value: this.value }, (!!this.name ? { name: this.name } : {}), (!!this.inputAutofocus ? { autofocus: 'true' } : {}), { required: this.required, minLength: this.minLength, maxLength: this.maxLength, min: this.min, max: this.max, id: this.inputId, list: this.list, onInput: this.handleInput, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown }, (!!this.placeholder ? { placeholder: this.placeholder } : {}), { disabled: this.disabled, readonly: this.readonly }, ariaInvalidAttr, (this.helperText ? ariaDescribedByAttr : {}), (numericTypes.includes(this.type) ? { step: this.step } : {}))), (!!this.helperText || !!this.counter) && (h("div", { class: "text-field__meta", id: helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" }, this.counter && (h("div", { class: "text-field__counter" }, !!this.value ? String(this.value).length : 0, " /", ' ', this.maxLength)))), this.helperText && (h("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? 'danger' : this.variant })))));
  }
  getCssClassMap() {
    // the numeric type as followings, eg input[type="date"], will print a placeholder in some browsers
    const numericTypes = ['date', 'month', 'week', 'time', 'datetime-local'];
    const animated = (this.value != null && this.value !== '') ||
      numericTypes.includes(this.type);
    return classnames('text-field', this.type && `text-field--type-${this.type}`, this.hasFocus && 'text-field--has-focus', this.disabled && `text-field--disabled`, this.transparent && 'text-field--transparent', this.status && `text-field--status-${this.status}`, this.invalid && `text-field--variant-danger`, this.variant && `text-field--variant-${this.variant}`, this.helperText && `text-field--helper-text`, this.readonly && `text-field--readonly`, animated && 'animated');
  }
  get hostElement() { return getElement(this); }
};
TextField.style = textFieldCss;

export { Dropdown as scale_dropdown, ActionHidePassword as scale_icon_action_hide_password, ActionSort as scale_icon_action_sort, ServiceSettings as scale_icon_service_settings, MenuFlyoutItem as scale_menu_flyout_item, Pagination as scale_pagination, ProgressBar as scale_progress_bar, Switch as scale_switch, Tag as scale_tag, TextField as scale_text_field };
