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
import { Component, Prop, Method, h, State, Element, Host, } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
export class NotificationToast {
  constructor() {
    /** (optional) Toast variant */
    this.variant = 'informational';
    /** (optional) Animated toast */
    this.animated = true;
    /** (optional) Alignment choose for top and bottom */
    this.alignment = 'top-right';
    /** (optional) Toast position at the top */
    this.positionVertical = 12;
    /** (optional) Toast position right */
    this.positionHorizontal = 12;
    /** (optional) Toast auto hide */
    this.autoHide = false;
    /** (optional) Toast auto hide duration */
    this.autoHideDuration = 3000;
    /** (optional) Toast fade duration */
    this.fadeDuration = 500;
    /** (optional) Toast state height with offset */
    this.toastHeightWithOffset = 0;
    this.hideToast = false;
    this.close = () => {
      this.hideToast = true;
      setTimeout(() => {
        this.opened = false;
      }, this.fadeDuration);
    };
    this.transitions = (offset) => `
      @keyframes fadeIn {
        from {
          opacity: 0;
          ${this.alignmentVertical}: -${offset}px;
        }
        to {
          opacity: 1;
          ${this.alignmentVertical}: ${this.positionVertical}px;
        }
      }
  
      @keyframes fadeOut {
        from {
          opacity: 1;
          ${this.alignmentVertical}: ${this.positionVertical}px;
        }
        to {
          opacity: 0;
          ${this.alignmentVertical}: -${offset}px;
        }
      }
    `;
    this.animationStyle = (offset) => {
      if (this.animated) {
        return `
        .notification-toast--show {
          ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
          animation: fadeIn ${this.fadeDuration / 1000}s ease-in-out;
          ${this.alignmentVertical}: ${this.positionVertical}px;
          opacity: 1;
        },
        .notification-toast--show {
          ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
          animation: fadeOut ${this.fadeDuration / 1000}s ease-in-out;
          ${this.alignmentVertical}: -${offset}px;
          opacity: 0;
        }
      `;
      }
      return `
    .notification-toast--show {
      ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
      ${this.alignmentVertical}: ${this.positionVertical}px;
      opacity: 1;
    },
    .notification-toast--show {
      ${this.alignmentHorizontal}: ${this.positionHorizontal}px;
      ${this.alignmentVertical}: -${offset}px;
      opacity: 0;
    }
  `;
    };
  }
  connectedCallback() {
    statusNote({ source: this.element, type: 'warn' });
  }
  componentWillLoad() {
    const alignmentParts = this.alignment.split('-');
    this.alignmentVertical = alignmentParts[0];
    this.alignmentHorizontal = alignmentParts[1];
  }
  componentDidRender() {
    if (this.autoHide === true) {
      setTimeout(this.close, this.autoHideDuration);
    }
  }
  handleIcons() {
    if (this.variant) {
      switch (this.variant) {
        case 'success':
          return (h("scale-icon-alert-success", { class: "notification-toast__icon", size: 20, color: "#ffffff", selected: true, "aria-hidden": "true" }));
        case 'informational':
          return (h("scale-icon-alert-information", { class: "notification-toast__icon", size: 20, selected: true, color: "#ffffff", "aria-hidden": "true" }));
        case 'error':
          return (h("scale-icon-alert-error", { class: "notification-toast__icon", size: 20, selected: true, color: "#ffffff", "aria-hidden": "true" }));
        case 'warning':
          return (h("scale-icon-alert-warning", { class: "notification-toast__icon", color: "#ffff", size: 20, selected: true, "aria-hidden": "true" }));
      }
    }
    return;
  }
  /** Toast method: open() */
  async open() {
    this.opened = true;
    this.hideToast = false;
  }
  render() {
    if (this.opened) {
      return (h(Host, null,
        this.styles && h("style", null, this.styles),
        h("style", null, this.transitions(this.toastHeightWithOffset)),
        h("style", null, this.animationStyle(this.toastHeightWithOffset)),
        h("div", { role: "alert", style: { display: `${this.opened ? '' : 'none'}` }, class: this.getCssClassMap(), part: this.getBasePartMap(), tabindex: "0" },
          h("div", { class: "notification-toast__icon-container" }, this.handleIcons()),
          h("div", { class: "notification-toast__text-container" },
            h("slot", { name: "header" }),
            h("slot", { name: "body" }),
            h("scale-link", { href: this.href, class: "notification-toast__link", role: "link" },
              h("slot", { name: "link" }))),
          h("button", { part: "button-dismissable", type: "button", class: "notification-toast__button-close", onClick: () => this.close(), tabindex: 0, "aria-label": "close", onKeyDown: (e) => {
              if (e.key === 'Enter') {
                this.close();
              }
            } },
            h("scale-icon-action-circle-close", null)))));
    }
  }
  getToastHeightWithOffset() {
    const toastHeight = this.element.shadowRoot.querySelector('.toast').scrollHeight;
    this.toastHeightWithOffset = toastHeight + this.positionVertical;
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'notification-toast';
    const prefix = mode === 'basePart' ? '' : `${component}`;
    return classNames(mode === 'basePart' ? 'base' : component, this.variant && `${prefix}--variant-${this.variant}`, !!this.opened && `${prefix}--opened`, !!!this.hideToast && `${prefix}--show`, !!this.hideToast && `${prefix}--hide`, this.story && `${prefix}--story`);
  }
  static get is() { return "scale-notification-toast"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./notification-toast.css"]
  }; }
  static get styleUrls() { return {
    "$": ["notification-toast.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'error' | 'warning' | 'success' | 'informational'",
        "resolved": "\"error\" | \"informational\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Toast variant"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'informational'"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Toast opened"
      },
      "attribute": "opened",
      "reflect": true
    },
    "animated": {
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
        "text": "(optional) Animated toast"
      },
      "attribute": "animated",
      "reflect": false,
      "defaultValue": "true"
    },
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'bottom-right'\n    | 'bottom-left'\n    | 'top-right'\n    | 'top-left'",
        "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Alignment choose for top and bottom"
      },
      "attribute": "alignment",
      "reflect": false,
      "defaultValue": "'top-right'"
    },
    "positionVertical": {
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
        "text": "(optional) Toast position at the top"
      },
      "attribute": "position-vertical",
      "reflect": false,
      "defaultValue": "12"
    },
    "positionHorizontal": {
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
        "text": "(optional) Toast position right"
      },
      "attribute": "position-horizontal",
      "reflect": false,
      "defaultValue": "12"
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
        "text": "(optional) Toast auto hide"
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
        "text": "(optional) Toast auto hide duration"
      },
      "attribute": "auto-hide-duration",
      "reflect": false,
      "defaultValue": "3000"
    },
    "fadeDuration": {
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
        "text": "(optional) Toast fade duration"
      },
      "attribute": "fade-duration",
      "reflect": false,
      "defaultValue": "500"
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
      "reflect": true
    },
    "story": {
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
        "text": "(do not use) it is a helper prop for storybook"
      },
      "attribute": "story",
      "reflect": false
    },
    "href": {
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
      "attribute": "href",
      "reflect": false
    }
  }; }
  static get states() { return {
    "toastHeightWithOffset": {}
  }; }
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
        "text": "Toast method: open()",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "element"; }
}
