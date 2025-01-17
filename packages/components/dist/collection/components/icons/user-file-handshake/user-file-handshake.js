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
import { Component, Prop, Host, Element, h } from '@stencil/core';
export class UserFileHandshake {
  constructor() {
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
    return (h(Host, null,
      h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden),
        this.accessibilityTitle && h("title", null, this.accessibilityTitle),
        h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (h("g", null,
          h("path", { "fill-rule": "evenodd", d: "M23.265 7.347l-3.526.597a2.449 2.449 0 01-2.077-.455l-1.386-1.092a3.57 3.57 0 00-3.615-.49l-.2-.167a3.737 3.737 0 00-4.409-.23L6.48 6.612a3.531 3.531 0 01-2.674.534l-2.45-.49a.735.735 0 00-.278 1.426l2.449.49a5.016 5.016 0 003.781-.754l1.577-1.069a2.238 2.238 0 012.508.044L8.043 9.67a1.47 1.47 0 001.714 2.375l3.565-2.155a1.47 1.47 0 011.93.362l3.473 4.546h.049c.43.676.367 1.518-.142 1.851a.891.891 0 01-.456.137h-.563l-.127.544a.882.882 0 01-1.088.715l-.553-.098-.24.49a.887.887 0 01-.309.367 1.009 1.009 0 01-.842.088l-.539-.161-.294.49a.877.877 0 01-.26.274 1.259 1.259 0 01-1.528-.333c.348-.813.265-1.665-.289-2.111a1.367 1.367 0 00-.9-.28 1.35 1.35 0 00-.432-.69 1.37 1.37 0 00-.872-.28 1.313 1.313 0 00-.455-.778c-.2-.156-.442-.25-.696-.27a1.352 1.352 0 00-.49-.832c-.641-.514-1.69-.304-2.448.456l-3.782-1.333a.744.744 0 00-.49 1.406l3.512 1.224a1.646 1.646 0 00.407 1.749c.2.156.442.25.695.27.089.662.67 1.145 1.338 1.111.11.651.698 1.11 1.356 1.058.07.27.22.51.431.69.573.456 1.47.339 2.185-.22a2.939 2.939 0 001.959.789 2.37 2.37 0 001.69-.7 2.376 2.376 0 001.557-.368c.21-.13.395-.296.549-.49a2.297 2.297 0 001.254-.377 2.39 2.39 0 00.842-.98c.245-.068.475-.18.681-.327a2.728 2.728 0 00.813-3.429l3.017-.7V7.347z" }))) : (h("g", null,
          h("path", { d: "M22.608 13.008l-3.024.912-3.12-4.08a2.16 2.16 0 00-2.832-.528l-3.504 2.112a.68.68 0 01-.912-.144c-.288-.288-.24-.768.048-1.056l3.6-3.12a2.853 2.853 0 011.824-.672c.624 0 1.248.192 1.728.576l1.344 1.056c.768.576 1.728.816 2.64.576l2.496-.576a.716.716 0 10-.336-1.392l-2.4.672c-.48.096-1.008 0-1.44-.336l-1.344-1.056a4.26 4.26 0 00-2.592-.912c-.912 0-1.776.288-2.544.864-1.2-1.008-3.024-1.104-4.32-.24L6.336 6.72c-.768.48-1.68.672-2.592.48l-2.4-.48a.79.79 0 00-.864.576.79.79 0 00.576.864l2.4.48c.336.048.624.096.96.096.96 0 1.92-.288 2.736-.816l1.536-1.056c.72-.48 1.68-.48 2.352 0L8.304 9.168c-.912.816-1.008 2.208-.192 3.072a2.12 2.12 0 002.736.384L14.4 10.56c.336-.192.72-.096.96.192 0 0 2.496 3.264 3.072 4.032.528.72.288 1.536-.144 1.776-.288.192-1.008.144-1.008.144s-.096.864-.528 1.104c-.384.24-1.248 0-1.248 0s-.24.672-.528.864c-.48.336-1.344-.048-1.344-.048s-.336.576-.528.72c-.24.144-.576.192-.912.048.528-1.104.384-2.352-.432-3.024a1.826 1.826 0 00-.816-.384c-.144-.24-.288-.384-.48-.576-.24-.192-.48-.288-.768-.384-.144-.24-.288-.48-.528-.672-.192-.144-.384-.24-.576-.336-.144-.288-.336-.576-.576-.768-1.008-.816-2.496-.48-3.552.672l-3.024-.912c-.384-.144-.768.096-.912.48s.096.768.48.912l2.784.912c-.336 1.008-.096 2.016.624 2.592.192.144.384.24.576.336.144.288.336.576.576.768s.48.288.768.384c.144.24.288.48.528.672s.528.336.816.384c.144.24.288.384.48.576.384.288.816.432 1.296.432.624 0 1.344-.288 1.92-.768.432.24.864.336 1.296.336s.912-.144 1.296-.384c.144-.096.24-.192.384-.288.528.048 1.056-.048 1.536-.384.192-.144.384-.288.528-.48a2.38 2.38 0 001.248-.384c.384-.24.624-.576.816-.96.24-.048.48-.144.672-.288.576-.384.96-1.008 1.056-1.776.048-.24 0-.48 0-.72l2.928-.864c.384-.096.576-.528.48-.912-.24-.48-.624-.672-1.008-.576zm-11.952 6.24c-.528.672-1.296.816-1.632.576-.24-.192-.336-.864-.336-.864s-.672.144-.96-.096-.336-.912-.336-.912-.672.144-.96-.096-.288-.912-.288-.912-.576.048-.864-.144c-.336-.288-.336-1.056.24-1.728.528-.672 1.296-.864 1.632-.576s.288.912.288.912.624-.048.864.192c.288.288.288.912.288.912s.624-.144.96.096.336.864.336.864.624-.144.96.096.336 1.008-.192 1.68z", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-user-file-handshake"; }
  static get originalStyleUrls() { return {
    "$": ["../../icon/icon.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../../icon/icon.css"]
  }; }
  static get properties() { return {
    "size": {
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
        "text": "(optional) The width and height in pixels"
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "24"
    },
    "fill": {
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
        "text": "(optional) Sets the icon color via the `fill` attribute"
      },
      "attribute": "fill",
      "reflect": false,
      "defaultValue": "'currentColor'"
    },
    "color": {
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
        "text": "(optional) Alias for `fill`"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'currentColor'"
    },
    "selected": {
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
        "text": "(optional) If `true`, the icon changes visually"
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "decorative": {
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
        "text": "(optional) If `true` the SVG element will get `aria-hidden=\"true\"`"
      },
      "attribute": "decorative",
      "reflect": false,
      "defaultValue": "false"
    },
    "accessibilityTitle": {
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
        "text": "(optional) When using the icon standalone, make it meaningful for accessibility"
      },
      "attribute": "accessibility-title",
      "reflect": false
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
