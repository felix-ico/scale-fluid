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
import { Component, Prop, h, Host, Method, Event, Element, } from '@stencil/core';
import classNames from 'classnames';
import { emitEvent } from '../../utils/utils';
export class MenuFlyoutItem {
  constructor() {
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
    return classNames('menu-flyout-item', this.disabled && 'menu-flyout-item--disabled', this.checkable != null && 'menu-flyout-item--checkable', this.active && 'menu-flyout-item--active');
  }
  render() {
    const checked = this.checked ? 'true' : 'false';
    return (h(Host, { role: this.checkable ? `menuitem${this.checkable}` : 'menuitem', "aria-checked": this.checkable == null ? false : checked, "aria-disabled": this.disabled ? 'true' : undefined, tabindex: "-1" },
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap(), part: "base" },
        h("span", { part: "prefix", class: "menu-flyout-item__prefix" }, this.checkable == null ? (h("slot", { name: "prefix" })) : (h("scale-icon-action-success", { class: "menu-flyout-item__check", size: 16 }))),
        h("span", { part: "label", class: "menu-flyout-item__label" },
          h("slot", null)),
        h("span", { part: "suffix", class: "menu-flyout-item__suffix" }, this.cascade ? (h("scale-icon-navigation-right", { class: "menu-flyout-item__cascade", size: 16 })) : (h("slot", { name: "suffix" })))),
      h("slot", { name: "sublist" })));
  }
  static get is() { return "scale-menu-flyout-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["menu-flyout-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["menu-flyout-item.css"]
  }; }
  static get properties() { return {
    "cascade": {
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
        "text": "(optional) Set to true to display arrow icon suffix"
      },
      "attribute": "cascade",
      "reflect": false,
      "defaultValue": "false"
    },
    "active": {
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
        "text": "(optional) Mark as active"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "checkable": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'checkbox' | 'radio' | null",
        "resolved": "\"checkbox\" | \"radio\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Whether the item should behave as a checkbox"
      },
      "attribute": "checkable",
      "reflect": false
    },
    "checked": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set to true to display check prefix, false to display empty prefix"
      },
      "attribute": "checked",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "(optional) Disabled"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "value": {
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
        "text": "(optional) value"
      },
      "attribute": "value",
      "reflect": true
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
        "text": "(optional) Injected styles"
      },
      "attribute": "styles",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "scaleSelect",
      "name": "scale-select",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggered when menu item selected"
      },
      "complexType": {
        "original": "{\n    item: HTMLElement;\n  }",
        "resolved": "{ item: HTMLElement; }",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "scaleSelectLegacy",
      "name": "scaleSelect",
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
        "original": "{\n    item: HTMLElement;\n  }",
        "resolved": "{ item: HTMLElement; }",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      }
    }]; }
  static get methods() { return {
    "triggerEvent": {
      "complexType": {
        "signature": "(event: KeyboardEvent | MouseEvent, closeOnSelect?: boolean) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "KeyboardEvent": {
            "location": "global"
          },
          "MouseEvent": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
