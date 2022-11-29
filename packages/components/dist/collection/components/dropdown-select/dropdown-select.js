import { Component, h, Host, Prop, Element, State, Watch, Event, } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
import { computePosition } from '@floating-ui/dom';
import { emitEvent } from '../../utils/utils';
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
export class DropdownSelect {
  constructor() {
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
    return (h(Host, null,
      h("div", { part: this.getBasePartMap() },
        h("div", { part: "combobox-container" },
          h("label", { id: `${this.comboboxId}-label`, part: "label" }, this.label),
          h("div", Object.assign({ ref: (el) => (this.comboEl = el), "aria-controls": `${this.comboboxId}-listbox`, "aria-expanded": this.open ? 'true' : 'false', "aria-haspopup": "listbox", "aria-labelledby": `${this.comboboxId}-label`, id: this.comboboxId, part: "combobox", role: "combobox", tabindex: "0", onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.handleClick, onKeyDown: this.handleKeyDown }, (this.open
            ? {
              'aria-activedescendant': (readOptions(this.hostElement)[this.currentIndex] ||
                {}).value,
            }
            : {}), (this.helperText ? ariaDescribedByAttr : {}), (this.invalid ? { 'aria-invalid': 'true' } : {})), ValueElement),
          h("div", { part: "listbox-pad", ref: (el) => (this.listboxPadEl = el) },
            h("div", { ref: (el) => (this.listboxEl = el), part: "listbox", role: "listbox", id: `${this.comboboxId}-listbox`, "aria-labelledby": `${this.comboboxId}-label`, tabindex: "-1" }, readOptions(this.hostElement).map(({ value, ItemElement }, index) => (h("div", Object.assign({ role: "option", part: `option${index === this.currentIndex ? ' current' : ''}`, id: value, onClick: (event) => {
                this.handleOptionClick(event, index);
              }, onMouseDown: () => {
                this.ignoreBlur = true;
              } }, (value === this.value
              ? { 'aria-selected': 'true' }
              : {})),
              ItemElement,
              value === this.value ? (h("scale-icon-action-success", { size: 16 })) : null))))),
          h("div", { part: "icon" }, this.open ? (h("scale-icon-navigation-collapse-up", { decorative: true })) : (h("scale-icon-navigation-collapse-down", { decorative: true })))),
        this.helperText && (h("scale-helper-text", { helperText: this.helperText, variant: this.invalid ? 'danger' : this.variant })))));
  }
  getBasePartMap() {
    const animated = this.value != null && this.value !== '';
    return classNames('select', this.open && `open`, this.disabled && `disabled`, this.readonly && `readonly`, this.transparent && 'transparent', this.invalid && `invalid`, this.currentIndex > -1 && `steal-focus`, animated && 'animated', this.helperText && 'has-helper-text');
  }
  static get is() { return "scale-dropdown-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dropdown-select.css"]
  }; }
  static get styleUrls() { return {
    "$": ["dropdown-select.css"]
  }; }
  static get properties() { return {
    "comboboxId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "combobox-id",
      "reflect": false,
      "defaultValue": "'combobox'"
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "helperText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "helper-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": false
    },
    "readonly": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "readonly",
      "reflect": false
    },
    "transparent": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "transparent",
      "reflect": false
    },
    "invalid": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "invalid",
      "reflect": false,
      "defaultValue": "false"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'informational' | 'warning' | 'danger' | 'success'",
        "resolved": "\"danger\" | \"informational\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'informational'"
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": true
    }
  }; }
  static get states() { return {
    "options": {},
    "open": {},
    "currentIndex": {},
    "queryString": {},
    "queryTimeout": {},
    "ignoreBlur": {},
    "hasFocus": {}
  }; }
  static get events() { return [{
      "method": "scaleChange",
      "name": "scale-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "scaleFocus",
      "name": "scale-focus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "scaleBlur",
      "name": "scale-blur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "scaleKeydown",
      "name": "scale-keydown",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "valueChange"
    }]; }
}
