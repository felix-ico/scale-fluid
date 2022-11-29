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
export class DeviceDeviceRouter {
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
          h("path", { "fill-rule": "evenodd", d: "M19.5 7h-2.3L13 10.635l-1 .865-1-.845L6.8 7H4.5a3 3 0 00-3 3v10a3 3 0 003 3h15a3 3 0 003-3V10a3 3 0 00-3-3zM13 19h-2v-2h2v2zM12 3a5.5 5.5 0 014.615 2.5l1.145-1a7 7 0 00-11.525 0l1.15 1A5.5 5.5 0 0112 3zm2.3 4.5l1.165-1a4 4 0 00-6.93 0l1.165 1a2.5 2.5 0 014.6 0zm-3.3 1a1 1 0 102 0 1 1 0 00-2 0z" }))) : (h("g", null,
          h("path", { d: "M6.8 7l1.75 1.5H4.5C3.65 8.5 3 9.15 3 10v10c0 .85.65 1.5 1.5 1.5h15c.85 0 1.5-.65 1.5-1.5V10c0-.85-.65-1.5-1.5-1.5h-4.05L17.2 7h2.3c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3h-15c-1.65 0-3-1.35-3-3V10c0-1.65 1.35-3 3-3zM13 17v2h-2v-2zm-1-9.5a1 1 0 110 2 1 1 0 010-2zm0-3c1.45 0 2.75.8 3.45 2l-1.15 1C13.9 6.65 13.05 6 12 6s-1.9.6-2.3 1.5l-1.15-1c.65-1.2 2-2 3.45-2zm0-3c2.4 0 4.5 1.2 5.75 3l-1.15 1C15.65 4 13.95 3 12 3S8.35 4 7.4 5.55l-1.15-1A6.904 6.904 0 0112 1.5z", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-device-device-router"; }
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