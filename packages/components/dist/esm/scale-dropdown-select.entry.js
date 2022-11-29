import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { s as statusNote } from './status-note-0089e9c9.js';
import { c as computePosition } from './floating-ui.dom.esm-07191aca.js';
import { e as emitEvent } from './utils-004d7b05.js';

const dropdownSelectCss = ":host{--font-weight:var(--telekom-typography-font-weight-bold);--height:var(--telekom-spacing-unit-x11);--color:var(--telekom-color-text-and-icon-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--background-hover:var(--telekom-color-ui-state-fill-hovered);--border:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-border-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--border-invalid:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-danger-hovered);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--spacing-x:var(--telekom-spacing-unit-x3);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--spacing-x-for-helper-text:var(--telekom-spacing-unit-x1);--transition-combobox:var(--transition);--font-size-combobox:var(--telekom-typography-font-size-body);--background-combobox:var(--telekom-color-ui-state-fill-standard);--spacing-combobox:18px var(--telekom-spacing-unit-x10) 5px\n    calc(var(--spacing-x) - 1px);--spacing-y-meta:var(--telekom-spacing-unit-x1);--color-meta:var(--telekom-color-text-and-icon-standard);--height-icon:var(--telekom-spacing-unit-x6);--color-icon:var(--telekom-color-text-and-icon-standard);--color-icon-hover:var(--telekom-color-text-and-icon-standard);--color-icon-active:var(--telekom-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--telekom-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--font-size-label:var(--telekom-typography-font-size-body);--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label-focus:var(--telekom-typography-font-size-footnote);--font-weight-label-focus:var(--telekom-typography-font-weight-bold);--line-height-label:var(--telekom-typography-font-size-body);--line-height-label-animated:var(--telekom-typography-font-size-small);--transform-label:translate(\n    var(--spacing-x),\n    calc((var(--telekom-spacing-unit-x11) - var(--font-size-label)) / 2)\n  );--transform-label-animated:translate(\n    var(--spacing-x),\n    var(--telekom-spacing-unit-x2)\n  );--background-listbox:var(--telekom-color-background-surface);--box-shadow-listbox:0 2px 4px 0 rgba(0, 0, 0, 0.1),\n    0 4px 16px 0 rgba(0, 0, 0, 0.1);--max-height-listbox:300px;--z-index-listbox:99;--outline-color-option:var(--telekom-color-functional-focus)}[part='combobox-container'] *,[part='combobox-container'] *::before,[part='combobox-container'] *::after{box-sizing:border-box}[part='combobox-container']{display:block;position:relative}[part='combobox']{width:100%;height:var(--height);margin:0;display:flex;align-items:center;outline:none;padding:var(--spacing-combobox);z-index:1;box-sizing:border-box;transition:var(--transition-combobox);font-family:inherit;font-size:var(--font-size-combobox);border-radius:var(--radius);border:var(--border);white-space:nowrap;text-overflow:ellipsis;appearance:none;-webkit-appearance:none;background-color:var(--background-combobox);color:var(--color)}[part~='select']:not([part~='disabled']) [part='combobox']:hover~[part='icon']{color:var(--color-icon-hover)}[part~='select']:not([part~='disabled']) [part='combobox']:active~[part='icon']{color:var(--color-icon-active)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:hover{border-color:var(--border-color-hover);background-color:var(--background-hover)}[part~='select']:not([part~='disabled'])[part~='invalid'] [part='combobox']:hover{background-color:var(--background-hover)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:focus{border-color:var(--border-color-focus)}[part~='select']:not([part~='disabled']):not([part~='steal-focus']) [part='combobox']:focus{outline:var(--focus-outline);outline-offset:1px}[part~='invalid'] [part='combobox']{border:var(--border-invalid)}[part~='transparent'] [part='combobox']{background-color:transparent}[part~='disabled'] [part='combobox']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part='meta']{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}[part='icon']{top:50%;right:var(--spacing-x);position:absolute;transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);transition:var(--transition-icon)}[part~='disabled'] [part='icon']{color:var(--color-disabled)}[part='label']{top:0;left:0;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font-size:var(--font-size-label);transform:var(--transform-label);font-weight:var(--font-weight-label);line-height:var(--line-height-label)}[part~='animated'] [part='label']{transform:var(--transform-label-animated);font-size:var(--font-size-label-focus);font-weight:var(--font-weight-label-focus);line-height:var(--line-height-label-animated)}[part~='disabled'] [part='label']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part='listbox']{overflow-y:auto;position:relative;max-height:var(--max-height-listbox)}[part='listbox-pad']{background:var(--background-listbox);box-shadow:var(--box-shadow-listbox);border-radius:var(--radius);padding:var(--radius) 0;margin-top:var(--telekom-line-weight-highlight);left:0;position:absolute;top:100%;width:100%;z-index:var(--z-index-listbox);display:none}[part~='open'] [part='listbox-pad']{display:block}[part~='transparent'] [part='listbox']{background-color:transparent}[part~='option']{color:var(--color)}[part~='option']:hover{background-color:var(--background-hover)}[part~='option'][part~='current']{outline:3px solid var(--outline-color-option);outline-offset:-3px}[part~='option'][aria-selected='true']{padding-right:30px;position:relative}[part~='option'][aria-selected='true'] scale-icon-action-success{position:absolute;right:16px;top:12px}[part~='option'] scale-dropdown-select-item::part(base){padding:12px}[part~='has-helper-text'] [part~='combobox-container']{margin-bottom:var(--spacing-x-for-helper-text)}";

var Actions;
(function (Actions) {
  Actions["Close"] = "Close";
  Actions["CloseSelect"] = "CloseSelect";
  Actions["First"] = "First";
  Actions["Last"] = "Last";
  Actions["Next"] = "Next";
  Actions["Open"] = "Open";
  Actions["PageDown"] = "PageDown";
  Actions["PageUp"] = "PageUp";
  Actions["Previous"] = "Previous";
  Actions["Select"] = "Select";
  Actions["Type"] = "Type";
})(Actions || (Actions = {}));
const readOptions = (hostElement) => {
  return Array.from(hostElement.children).map((x) => ({
    label: x.textContent.trim(),
    value: x.getAttribute('value'),
    ItemElement: h("span", { innerHTML: x.outerHTML }),
  }));
};
function getActionFromKey(event, open) {
  const { key, altKey, ctrlKey, metaKey } = event;
  if (!open && ['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(key)) {
    return Actions['Open'];
  }
  if (key === 'Home') {
    return Actions['First'];
  }
  if (key === 'End') {
    return Actions['Last'];
  }
  if (['Backspace', 'Clear'].includes(key) ||
    (key.length === 1 && key !== ' ' && !altKey && !ctrlKey && !metaKey)) {
    return Actions['Type'];
  }
  if (!open) {
    return;
  }
  if (key === 'ArrowUp' && altKey) {
    return Actions['CloseSelect'];
  }
  if (key === 'ArrowDown' && !altKey) {
    return Actions['Next'];
  }
  switch (key) {
    case 'ArrowUp':
      return Actions['Previous'];
    case 'PageUp':
      return Actions['PageUp'];
    case 'PageDown':
      return Actions['PageDown'];
    case 'Escape':
      return Actions['Close'];
    case 'Enter':
      return Actions['CloseSelect'];
    case ' ':
      return Actions['CloseSelect'];
  }
}
function jumpToIndex(currentIndex, maxIndex, action) {
  const JUMP_SIZE = 10;
  switch (action) {
    case Actions['First']:
      return 0;
    case Actions['Last']:
      return maxIndex;
    case Actions['Previous']:
      return Math.max(0, currentIndex - 1);
    case Actions['Next']:
      return Math.min(maxIndex, currentIndex + 1);
    case Actions['PageUp']:
      return Math.max(0, currentIndex - JUMP_SIZE);
    case Actions['PageDown']:
      return Math.min(maxIndex, currentIndex + JUMP_SIZE);
    default:
      return currentIndex;
  }
}
function matchOptions(options = [], filter) {
  return options.filter((option) => option.toLowerCase().indexOf(filter.toLowerCase()) === 0);
}
function getIndexByChar(values, filter, startIndex = 0) {
  const sortedValues = [
    ...values.slice(startIndex),
    ...values.slice(0, startIndex),
  ];
  const firstHit = matchOptions(sortedValues, filter)[0];
  const allMatchingChars = (array) => array.every((char) => char === array[0]);
  if (firstHit) {
    return values.indexOf(firstHit);
  }
  if (allMatchingChars(filter.split(''))) {
    const hits = matchOptions(sortedValues, filter[0]);
    return values.indexOf(hits[0]);
  }
  return -1;
}
function keepInView(activeElement, scrollParent) {
  const { offsetHeight, offsetTop } = activeElement;
  const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;
  const isAboveParent = offsetTop < scrollTop;
  const isBelowParent = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;
  if (isBelowParent) {
    return (scrollParent.scrollTop =
      offsetTop + offsetHeight - parentOffsetHeight);
  }
  if (isAboveParent) {
    return (scrollParent.scrollTop = offsetTop);
  }
}
function hasOverflow(element) {
  return element && element.clientHeight < element.scrollHeight;
}
function isInView(element) {
  const rect = element.getBoundingClientRect();
  const parentRect = {
    top: 0,
    left: 0,
    right: window.innerWidth || document.documentElement.clientWidth,
    bottom: window.innerHeight || document.documentElement.clientHeight,
  };
  return (rect.top >= parentRect.top &&
    rect.left >= parentRect.left &&
    rect.bottom <= parentRect.bottom &&
    rect.right <= parentRect.right);
}
const DropdownSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleChange = createEvent(this, "scale-change", 7);
    this.scaleFocus = createEvent(this, "scale-focus", 7);
    this.scaleBlur = createEvent(this, "scale-blur", 7);
    this.scaleKeydown = createEvent(this, "scale-keydown", 7);
    this.comboboxId = 'combobox';
    this.helperText = '';
    this.invalid = false;
    this.variant = 'informational';
    this.options = '';
    this.open = false;
    this.currentIndex = -1;
    this.queryString = '';
    this.queryTimeout = null;
    this.ignoreBlur = false;
    this.hasFocus = false;
    this.selectOption = (index) => {
      this.currentIndex = index;
      this.value = readOptions(this.hostElement)[index].value;
      emitEvent(this, 'scaleChange', { value: this.value });
    };
    this.handleKeyDown = (event) => {
      const { key } = event;
      const max = readOptions(this.hostElement).length - 1;
      const action = getActionFromKey(event, this.open);
      emitEvent(this, 'scaleKeydown', event);
      switch (action) {
        case Actions['Last']:
        case Actions['First']:
          this.setOpen(true);
        case Actions['Next']:
        case Actions['Previous']:
        case Actions['PageUp']:
        case Actions['PageDown']:
          event.preventDefault();
          return this.handleOptionChange(jumpToIndex(this.currentIndex, max, action));
        case Actions['CloseSelect']:
          event.preventDefault();
          this.selectOption(this.currentIndex);
        case Actions['Close']:
          event.preventDefault();
          return this.setOpen(false);
        case Actions['Type']:
          return this.buildQueryString(key);
        case Actions['Open']:
          event.preventDefault();
          return this.setOpen(true);
      }
    };
    this.handleBlur = () => {
      if (this.ignoreBlur) {
        this.ignoreBlur = false;
        return;
      }
      this.setOpen(false);
      emitEvent(this, 'scaleBlur');
    };
    this.handleFocus = () => {
      emitEvent(this, 'scaleFocus');
    };
    this.handleClick = () => {
      this.setOpen(!this.open);
      const indexOfValue = readOptions(this.hostElement).findIndex(({ value }) => value === this.value);
      if (indexOfValue > -1) {
        setTimeout(() => {
          this.bringIntoView(indexOfValue);
        });
      }
    };
  }
  valueChange(newValue) {
    this.currentIndex = readOptions(this.hostElement).findIndex(({ value }) => value === newValue);
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, tag: 'beta' });
    this.currentIndex =
      readOptions(this.hostElement).findIndex(({ value }) => value === this.value) || -1;
  }
  componentDidRender() {
    if (!this.open) {
      return;
    }
    computePosition(this.comboEl, this.listboxPadEl, {
      placement: 'bottom',
    }).then(({ x, y }) => {
      Object.assign(this.listboxPadEl.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
  handleOptionChange(index) {
    this.currentIndex = index;
    this.bringIntoView(index);
  }
  bringIntoView(index) {
    const options = this.listboxEl.querySelectorAll('[role=option]');
    if (hasOverflow(this.listboxEl)) {
      keepInView(options[index], this.listboxEl);
    }
    if (!isInView(options[index])) {
      options[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  setOpen(open) {
    if (this.open === open) {
      return;
    }
    if (this.disabled) {
      return;
    }
    this.open = open;
    if (!this.open) {
      this.comboEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      this.comboEl.focus();
      this.currentIndex = -1;
    }
  }
  handleOptionClick(event, index) {
    event.stopPropagation();
    this.handleOptionChange(index);
    this.selectOption(index);
    this.setOpen(false);
  }
  getSearchString(char) {
    if (typeof this.queryTimeout === 'number') {
      window.clearTimeout(this.queryTimeout);
    }
    this.queryTimeout = window.setTimeout(() => {
      this.queryString = '';
    }, 500);
    this.queryString += char;
    return this.queryString;
  }
  buildQueryString(char) {
    this.setOpen(true);
    const queryString = this.getSearchString(char);
    const queryIndex = getIndexByChar(readOptions(this.hostElement).map(({ label }) => label), queryString, this.currentIndex + 1);
    if (queryIndex >= 0) {
      this.handleOptionChange(queryIndex);
    }
    else {
      window.clearTimeout(this.queryTimeout);
      this.queryString = '';
    }
  }
  render() {
    const ValueElement = (readOptions(this.hostElement).find(({ value }) => value === this.value) ||
      {}).ItemElement;
    const helperTextId = `helper-message`;
    const ariaDescribedByAttr = { 'aria-describedBy': helperTextId };
    return (h(Host, null, h("div", { part: this.getBasePartMap() }, h("div", { part: "combobox-container" }, h("label", { id: `${this.comboboxId}-label`, part: "label" }, this.label), h("div", Object.assign({ ref: (el) => (this.comboEl = el), "aria-controls": `${this.comboboxId}-listbox`, "aria-expanded": this.open ? 'true' : 'false', "aria-haspopup": "listbox", "aria-labelledby": `${this.comboboxId}-label`, id: this.comboboxId, part: "combobox", role: "combobox", tabindex: "0", onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick, onKeyDown: this.handleKeyDown }, (this.open
      ? {
        'aria-activedescendant': (readOptions(this.hostElement)[this.currentIndex] ||
          {}).value,
      }
      : {}), (this.helperText ? ariaDescribedByAttr : {}), (this.invalid ? { 'aria-invalid': 'true' } : {})), ValueElement), h("div", { part: "listbox-pad", ref: (el) => (this.listboxPadEl = el) }, h("div", { ref: (el) => (this.listboxEl = el), part: "listbox", role: "listbox", id: `${this.comboboxId}-listbox`, "aria-labelledby": `${this.comboboxId}-label`, tabindex: "-1" }, readOptions(this.hostElement).map(({ value, ItemElement }, index) => (h("div", Object.assign({ role: "option", part: `option${index === this.currentIndex ? ' current' : ''}`, id: value, onClick: (event) => {
        this.handleOptionClick(event, index);
      }, onMouseDown: () => {
        this.ignoreBlur = true;
      } }, (value === this.value
      ? { 'aria-selected': 'true' }
      : {})), ItemElement, value === this.value ? (h("scale-icon-action-success", { size: 16 })) : null))))), h("div", { part: "icon" }, this.open ? (h("scale-icon-navigation-collapse-up", { decorative: true })) : (h("scale-icon-navigation-collapse-down", { decorative: true })))), this.helperText && (h("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? 'danger' : this.variant })))));
  }
  getBasePartMap() {
    const animated = this.value != null && this.value !== '';
    return classnames('select', this.open && `open`, this.disabled && `disabled`, this.readonly && `readonly`, this.transparent && 'transparent', this.invalid && `invalid`, this.currentIndex > -1 && `steal-focus`, animated && 'animated', this.helperText && 'has-helper-text');
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChange"]
  }; }
};
DropdownSelect.style = dropdownSelectCss;

export { DropdownSelect as scale_dropdown_select };
