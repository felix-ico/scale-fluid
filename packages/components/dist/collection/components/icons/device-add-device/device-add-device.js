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
export class DeviceAddDevice {
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
          h("path", { "fill-rule": "evenodd", d: "M8.5 6a3 3 0 013 3v3.22a7.97 7.97 0 00-.335 10.155A3 3 0 018.5 24h-5a3 3 0 01-3-3V9a3 3 0 013-3zm9 5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1.5a5 5 0 100 10 5 5 0 000-10zM6 19.75a1 1 0 100 2 1 1 0 000-2zm11.5-5.5a.75.75 0 01.75.75v1.75H20a.75.75 0 010 1.5h-1.75V20a.75.75 0 11-1.5 0v-1.75H15a.75.75 0 110-1.5h1.75V15a.75.75 0 01.75-.75zM17.5 1a3 3 0 013 3v6.085a8 8 0 00-7.5.8V9a4.5 4.5 0 00-4.5-4.5H3.97V4a3 3 0 013-3zm-10 6.5h-3V9h3V7.5z" }))) : (h("g", null,
          h("path", { d: "M8 6c1.65 0 3 1.35 3 3v3.25c-.65.7-1.15 1.55-1.5 2.5V9c0-.85-.65-1.5-1.5-1.5H7V9H4V7.5H3c-.85 0-1.5.65-1.5 1.5v12c0 .85.65 1.5 1.5 1.5h5c.85 0 1.5-.65 1.5-1.5v-.75c.25.75.65 1.45 1.15 2.1-.5 1-1.5 1.65-2.65 1.65H3c-1.65 0-3-1.35-3-3V9c0-1.65 1.35-3 3-3zm9 5c3.6 0 6.5 2.9 6.5 6.5S20.6 24 17 24s-6.5-2.9-6.5-6.5S13.4 11 17 11zM5.5 19.75a1 1 0 110 2 1 1 0 010-2zm11.5-5.5c-.4 0-.75.35-.75.75v1.75H14.5c-.4 0-.75.35-.75.75s.35.75.75.75h1.75V20c0 .4.35.75.75.75s.75-.35.75-.75v-1.75h1.75c.4 0 .75-.35.75-.75s-.35-.75-.75-.75h-1.75V15c0-.4-.35-.75-.75-.75zM17 1c1.65 0 3 1.35 3 3v6.1c-.5-.2-1-.35-1.5-.45V4c0-.85-.65-1.5-1.5-1.5H6.5C5.65 2.5 5 3.15 5 4v.5H3.5V4c0-1.65 1.35-3 3-3z", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-device-add-device"; }
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
