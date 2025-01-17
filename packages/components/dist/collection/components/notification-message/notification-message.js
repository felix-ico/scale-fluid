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
import { Component, h, Host, Prop, Element, Method, Event, } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
import { emitEvent } from '../../utils/utils';
export class NotificationMessage {
  constructor() {
    this.variant = 'informational';
    this.dismissible = false;
    this.autoHide = false;
    this.autoHideDuration = 3000;
    this.close = () => {
      this.opened = false;
      emitEvent(this, 'scaleClose');
    };
  }
  componentWillLoad() {
    this.hasSlotText = !!this.hostElement.querySelector('[slot=text]');
  }
  componentDidRender() {
    if (this.autoHide === true) {
      setTimeout(this.close, this.autoHideDuration);
    }
  }
  componentDidUpdate() {
    this.hasSlotText = !!this.hostElement.querySelector('[slot=text]');
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, type: 'warn' });
  }
  async open() {
    this.opened = true;
  }
  handleIcons() {
    if (this.variant) {
      switch (this.variant) {
        case 'success':
          return (h("scale-icon-alert-success", { class: "notification-message__icon-success", color: "#187431", "aria-hidden": "true" }));
        case 'informational':
          return (h("scale-icon-alert-information", { class: "notification-message__icon-information", "aria-hidden": "true" }));
        case 'error':
          return (h("scale-icon-alert-error", { class: "notification-message__icon-error", "aria-hidden": "true" }));
        case 'warning':
          return (h("scale-icon-alert-warning", { class: "notification-message__icon-information", color: "#AE461C", "aria-hidden": "true" }));
      }
    }
    return;
  }
  render() {
    if (!this.opened) {
      return null;
    }
    return (h(Host, null,
      h("div", { role: "alert", style: { display: `${this.opened ? '' : 'none'}` }, part: this.getBasePartMap(), class: this.getCssClassMap(), tabindex: "0" },
        h("div", { part: "container", class: "notification-message__container" },
          this.handleIcons(),
          h("div", { part: "heading", class: "notification-message__heading" },
            h("slot", null, "\u2003"),
            this.dismissible && (h("button", { part: "button-dismissable", type: "button", class: "notification-message__icon-close", onClick: () => this.close(), tabindex: 0, "aria-label": "close", onKeyDown: (e) => {
                if (e.key === 'Enter') {
                  this.close();
                }
              } },
              h("scale-icon-action-circle-close", null)))),
          this.hasSlotText && (h("div", { part: "text", class: "notification-message__text" },
            h("slot", { name: "text" })))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const name = 'notification-message';
    const prefix = mode === 'basePart' ? '' : `${name}--`;
    return classNames(name, this.variant && `${prefix}variant-${this.variant}`);
  }
  static get is() { return "scale-notification-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["notification-message.css"]
  }; }
  static get styleUrls() { return {
    "$": ["notification-message.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'informational' | 'success' | 'warning' | 'error'",
        "resolved": "\"error\" | \"informational\" | \"success\" | \"warning\"",
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
    "dismissible": {
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
      "attribute": "dismissible",
      "reflect": false,
      "defaultValue": "false"
    },
    "opened": {
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
        "text": ""
      },
      "attribute": "opened",
      "reflect": true
    },
    "autoHide": {
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
      "attribute": "auto-hide",
      "reflect": false,
      "defaultValue": "false"
    },
    "autoHideDuration": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "auto-hide-duration",
      "reflect": false,
      "defaultValue": "3000"
    }
  }; }
  static get events() { return [{
      "method": "scaleClose",
      "name": "scale-close",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires when the notification message has been dismissed"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "open": {
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
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
