/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Component, h, Prop, Method, Element, Event, State, Watch, Host, } from '@stencil/core';
import { DuetDatePicker as DuetDatePickerCustomElement } from '@duetds/date-picker/custom-element';
import statusNote from '../../utils/status-note';
import classNames from 'classnames';
import { emitEvent } from '../../utils/utils';
let i = 0;
if (typeof window !== 'undefined' &&
  typeof window.Audio !== 'undefined' &&
  !customElements.get('duet-date-picker')) {
  customElements.define('duet-date-picker', DuetDatePickerCustomElement);
}
export class DatePicker {
  constructor() {
    /**
     * Name of the date picker input.
     */
    this.name = 'date';
    /** @deprecated in v3 in favor of localization.calendarHeading */
    this.popupTitle = 'Pick a date';
    /**
     * Makes the date picker input component disabled. This prevents users from being able to
     * interact with the input, and conveys its inactive state to assistive technologies.
     */
    this.disabled = false;
    /**
     * Forces the opening direction of the calendar modal to be always left or right.
     * This setting can be useful when the input is smaller than the opening date picker
     * would be as by default the picker always opens towards right.
     */
    this.direction = 'right';
    /**
     * Should the input be marked as required?
     */
    this.required = false;
    /**
     * Date value. Must be in IS0-8601 format: YYYY-MM-DD.
     */
    this.value = '';
    /**
     * Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
     * This setting can be used alone or together with the max property.
     */
    this.min = '';
    /**
     * Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
     * This setting can be used alone or together with the min property.
     */
    this.max = '';
    /** (optional) Helper text */
    this.helperText = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Label */
    this.label = '';
    /** Whether the input element has focus */
    this.hasFocus = false;
    /** Whether the input element has value */
    this.hasValue = this.value != null && this.value !== '';
    this.helperTextId = `helper-message-${i}`;
    /**
     * Fix JAWS reading the day twice, e.g. "19 19. August"
     * It'd probably make sense to open a PR in duetds/date-picker
     * https://github.com/duetds/date-picker/blob/master/src/components/duet-date-picker/date-picker-day.tsx#L61
     */
    this.adjustButtonsLabelsForA11y = () => {
      const table = this.hostElement.querySelector('.duet-date__table');
      const options = { subtree: true, childList: true, attributes: true };
      const callback = () => {
        this.mo.disconnect(); // avoid a feedback loop
        const buttons = Array.from(this.hostElement.querySelectorAll('.duet-date__day'));
        buttons.forEach((button) => {
          const span = button.querySelector('.duet-date__vhidden');
          const text = span.textContent;
          button.setAttribute('aria-label', text);
          span.setAttribute('hidden', 'hidden');
        });
        this.mo.observe(table, options);
      };
      this.mo = new MutationObserver(callback);
      callback();
    };
  }
  /**
   * Public methods API
   */
  /**
   * Sets focus on the date picker's input. Use this method instead of the global `focus()`.
   */
  async setFocus() {
    return this.duetInput.setFocus();
  }
  /**
   * Show the calendar modal, moving focus to the calendar inside.
   */
  async show() {
    return this.duetInput.show();
  }
  /**
   * Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus
   * returning to the date picker's button. Default is true.
   */
  async hide(moveFocusToButton = true) {
    return this.duetInput.hide(moveFocusToButton);
  }
  /**
   * Watch `value` property for changes and update `hasValue` based on that.
   */
  onValueChange() {
    this.hasValue = this.value != null && this.value !== '';
    // @ts-ignore
    this.duetInput.querySelector('.duet-date__input').value = this.value;
  }
  componentWillLoad() {
    if (this.popupTitle !== 'Pick a date') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "popupTitle" is deprecate in favor of localization.calendarHeading.',
        type: 'warn',
        source: this.hostElement,
      });
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    if (this.identifier == null) {
      this.identifier = 'scale-date-picker-' + i++;
    }
  }
  componentDidLoad() {
    var _a, _b;
    const calendarIcon = this.duetInput.querySelector('.duet-date__toggle-icon');
    if (calendarIcon) {
      calendarIcon.replaceWith(document.createElement('scale-icon-content-calendar'));
    }
    const navLeftIcon = this.duetInput.querySelector('.duet-date__prev svg');
    if (navLeftIcon) {
      navLeftIcon.replaceWith(document.createElement('scale-icon-navigation-left'));
    }
    const navRightIcon = this.duetInput.querySelector('.duet-date__next svg');
    if (navRightIcon) {
      navRightIcon.replaceWith(document.createElement('scale-icon-navigation-right'));
    }
    const selectIcon = this.duetInput.querySelectorAll('.duet-date__select-label svg');
    if (selectIcon) {
      Array.from(selectIcon).forEach((icon) => icon.replaceWith(document.createElement('scale-icon-navigation-collapse-down')));
    }
    const input = this.duetInput.querySelector('.duet-date__input');
    if (input) {
      input.addEventListener('keyup', this.handleKeyPress);
    }
    if (input && this.helperText) {
      input.setAttribute('aria-describedby', this.helperTextId);
    }
    if (input && (this.status === 'error' || this.invalid)) {
      input.setAttribute('aria-invalid', 'true');
    }
    // Remove existing <h2> with `{Month} {Year}` text
    const dialog = this.hostElement.querySelector('.duet-date__dialog');
    let duetHeadingId = '';
    if (dialog) {
      duetHeadingId = dialog.getAttribute('aria-labelledby');
      if (duetHeadingId) {
        const duetHeading = this.hostElement.querySelector(`#${duetHeadingId}`);
        if (duetHeading) {
          duetHeading.parentElement.removeChild(duetHeading);
        }
      }
    }
    // Add custom <h2> heading
    const dialogContent = this.hostElement.querySelector('.duet-date__dialog-content');
    if (dialogContent) {
      const calendarHeading = ((_a = this.localization) === null || _a === void 0 ? void 0 : _a.calendarHeading) || this.popupTitle || 'Pick a date';
      const heading = document.createElement('h2');
      heading.id = duetHeadingId; // link to .duet-date__dialog[aria-labelledby]
      heading.className = 'scale-date-picker__popup-heading';
      heading.innerHTML = calendarHeading;
      dialogContent.insertBefore(heading, dialogContent.firstChild);
    }
    // truncate table headings to a single character
    const tableHeadings = this.hostElement.querySelectorAll('.duet-date__table-header span[aria-hidden="true"]');
    if (tableHeadings) {
      Array.from(tableHeadings).forEach((item) => (item.innerHTML = item.innerHTML[0]));
    }
    const today = this.hostElement.querySelector('.duet-date__day.is-today span.duet-date__vhidden');
    if (today) {
      today.innerHTML = `${today.innerHTML}, ${((_b = this.localization) === null || _b === void 0 ? void 0 : _b.today) || 'today'}`;
    }
    this.adjustButtonsLabelsForA11y();
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
    const input = this.duetInput.querySelector('.duet-date__input');
    if (input) {
      input.removeEventListener('keyup', this.handleKeyPress);
    }
    if (this.mo) {
      this.mo.disconnect();
    }
  }
  handleKeyPress(e) {
    this.hasValue = e.target.value != null && e.target.value !== '';
  }
  render() {
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h("div", { class: classNames('scale-date-picker', this.status && `scale-date-picker--status-${this.status}`, this.invalid && `scale-date-picker--status-error`, this.hasFocus && 'scale-date-picker--focus', this.disabled && 'scale-date-picker--disabled', this.hasValue && 'animated') },
        h("label", { class: "date-picker__label", htmlFor: this.identifier }, this.label),
        h("duet-date-picker", { onDuetChange: (e) => {
            emitEvent(this, 'scaleChange', e.detail);
            this.handleKeyPress(e);
          }, onDuetFocus: (e) => {
            emitEvent(this, 'scaleFocus', e.detail);
            this.hasFocus = true;
          }, onDuetBlur: (e) => {
            emitEvent(this, 'scaleBlur', e.detail);
            this.hasFocus = false;
          }, name: this.name, identifier: this.identifier, role: this.role, direction: this.direction, required: this.required, min: this.min, max: this.max, firstDayOfWeek: this.firstDayOfWeek, localization: this.localization, dateAdapter: this.dateAdapter, disabled: this.disabled, value: this.value, ref: (element) => (this.duetInput = element) }),
        !!this.helperText && (h("div", { class: "date-picker__meta", id: this.helperTextId, "aria-live": "polite", "aria-relevant": "additions removals" },
          h("div", { class: "date-picker__helper-text" }, this.helperText))))));
  }
  static get is() { return "scale-date-picker"; }
  static get originalStyleUrls() { return {
    "$": ["date-picker.css"]
  }; }
  static get styleUrls() { return {
    "$": ["date-picker.css"]
  }; }
  static get properties() { return {
    "name": {
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
        "text": "Name of the date picker input."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "'date'"
    },
    "popupTitle": {
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
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of localization.calendarHeading"
          }],
        "text": ""
      },
      "attribute": "popup-title",
      "reflect": false,
      "defaultValue": "'Pick a date'"
    },
    "identifier": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Adds a unique identifier for the date picker input. Use this instead of html `id` attribute."
      },
      "attribute": "identifier",
      "reflect": false
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Makes the date picker input component disabled. This prevents users from being able to\ninteract with the input, and conveys its inactive state to assistive technologies."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "role": {
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
        "text": "Defines a specific role attribute for the date picker input."
      },
      "attribute": "role",
      "reflect": false
    },
    "direction": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "DuetDatePickerDirection",
        "resolved": "\"left\" | \"right\"",
        "references": {
          "DuetDatePickerDirection": {
            "location": "import",
            "path": "@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Forces the opening direction of the calendar modal to be always left or right.\nThis setting can be useful when the input is smaller than the opening date picker\nwould be as by default the picker always opens towards right."
      },
      "attribute": "direction",
      "reflect": false,
      "defaultValue": "'right'"
    },
    "required": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Should the input be marked as required?"
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Date value. Must be in IS0-8601 format: YYYY-MM-DD."
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "''"
    },
    "min": {
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
        "text": "Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.\nThis setting can be used alone or together with the max property."
      },
      "attribute": "min",
      "reflect": false,
      "defaultValue": "''"
    },
    "max": {
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
        "text": "Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.\nThis setting can be used alone or together with the min property."
      },
      "attribute": "max",
      "reflect": false,
      "defaultValue": "''"
    },
    "firstDayOfWeek": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Which day is considered first day of the week? `0` for Sunday, `1` for Monday, etc.\nDefault is Monday."
      },
      "attribute": "first-day-of-week",
      "reflect": false
    },
    "localization": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "DuetLocalizedText & {\n    today: string;\n  }",
        "resolved": "DuetLocalizedText & { today: string; }",
        "references": {
          "DuetLocalizedText": {
            "location": "import",
            "path": "@duetds/date-picker/dist/types/components/duet-date-picker/date-localization"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Button labels, day names, month names, etc, used for localization.\nDefault is English."
      }
    },
    "dateAdapter": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Date adapter, for custom parsing/formatting.\nMust be object with a `parse` function which accepts a `string` and returns a `Date`,\nand a `format` function which accepts a `Date` and returns a `string`.\nDefault is IS0-8601 parsing and formatting."
      },
      "attribute": "date-adapter",
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
        "text": "(optional) Helper text"
      },
      "attribute": "helper-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "status": {
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
        "tags": [{
            "name": "deprecated",
            "text": "- invalid should replace status"
          }],
        "text": ""
      },
      "attribute": "status",
      "reflect": false,
      "defaultValue": "''"
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
        "text": "(optional) invalid status"
      },
      "attribute": "invalid",
      "reflect": false
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
        "text": "(optional) Label"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "styles": {
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
        "text": "(optional) Injected CSS styles"
      },
      "attribute": "styles",
      "reflect": false
    },
    "size": {
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
        "tags": [{
            "name": "deprecated",
            "text": undefined
          }],
        "text": ""
      },
      "attribute": "size",
      "reflect": false
    }
  }; }
  static get states() { return {
    "hasFocus": {},
    "hasValue": {}
  }; }
  static get events() { return [{
      "method": "scaleChange",
      "name": "scale-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when a date is selected."
      },
      "complexType": {
        "original": "DuetDatePickerChangeEvent",
        "resolved": "{ component: \"duet-date-picker\"; valueAsDate: Date; value: string; }",
        "references": {
          "DuetDatePickerChangeEvent": {
            "location": "import",
            "path": "@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker"
          }
        }
      }
    }, {
      "method": "scaleChangeLegacy",
      "name": "scaleChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "DuetDatePickerChangeEvent",
        "resolved": "{ component: \"duet-date-picker\"; valueAsDate: Date; value: string; }",
        "references": {
          "DuetDatePickerChangeEvent": {
            "location": "import",
            "path": "@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker"
          }
        }
      }
    }, {
      "method": "scaleBlur",
      "name": "scale-blur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted the date picker input is blurred."
      },
      "complexType": {
        "original": "DuetDatePickerFocusEvent",
        "resolved": "{ component: \"duet-date-picker\"; }",
        "references": {
          "DuetDatePickerFocusEvent": {
            "location": "import",
            "path": "@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker"
          }
        }
      }
    }, {
      "method": "scaleBlurLegacy",
      "name": "scaleBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "DuetDatePickerFocusEvent",
        "resolved": "{ component: \"duet-date-picker\"; }",
        "references": {
          "DuetDatePickerFocusEvent": {
            "location": "import",
            "path": "@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker"
          }
        }
      }
    }, {
      "method": "scaleFocus",
      "name": "scale-focus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted the date picker input is focused."
      },
      "complexType": {
        "original": "DuetDatePickerFocusEvent",
        "resolved": "{ component: \"duet-date-picker\"; }",
        "references": {
          "DuetDatePickerFocusEvent": {
            "location": "import",
            "path": "@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker"
          }
        }
      }
    }, {
      "method": "scaleFocusLegacy",
      "name": "scaleFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "DuetDatePickerFocusEvent",
        "resolved": "{ component: \"duet-date-picker\"; }",
        "references": {
          "DuetDatePickerFocusEvent": {
            "location": "import",
            "path": "@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker"
          }
        }
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets focus on the date picker's input. Use this method instead of the global `focus()`.",
        "tags": []
      }
    },
    "show": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Show the calendar modal, moving focus to the calendar inside.",
        "tags": []
      }
    },
    "hide": {
      "complexType": {
        "signature": "(moveFocusToButton?: boolean) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus\nreturning to the date picker's button. Default is true.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "onValueChange"
    }]; }
}
