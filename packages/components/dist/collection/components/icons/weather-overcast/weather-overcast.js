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
export class WeatherOvercast {
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
          h("path", { d: "M15.288 11.384c1.133 0 2.226.375 3.12 1.066.213-.045.421-.067.628-.067a3.276 3.276 0 013.255 2.934A3.614 3.614 0 0124 18.386a3.618 3.618 0 01-3.422 3.609l-.192.005h-7.954A3.936 3.936 0 018.5 18.068c0-1.43.783-2.744 2.02-3.433a5.104 5.104 0 014.768-3.251zM11.851 1.26a6.788 6.788 0 016.389 4.485A5.188 5.188 0 0121 10.327c0 .391-.047.771-.13 1.138a4.576 4.576 0 00-2.133-.372 6.444 6.444 0 00-3.449-1.01 6.375 6.375 0 00-5.798 3.662 5.203 5.203 0 00-1.448 1.492l-.153.254-3.446-.004C1.972 15.355 0 13.297 0 10.777 0 9.07.923 7.501 2.384 6.67c.124-2.225 1.962-3.996 4.204-3.996.33 0 .658.04.983.12a6.755 6.755 0 014.28-1.533z", "fill-rule": "evenodd" }))) : (h("g", null,
          h("path", { d: "M15.288 11.384c1.133 0 2.226.375 3.12 1.066.213-.045.421-.067.628-.067a3.276 3.276 0 013.255 2.934A3.615 3.615 0 0124 18.386a3.618 3.618 0 01-3.422 3.609l-.192.005h-7.954A3.936 3.936 0 018.5 18.068c0-1.43.783-2.744 2.02-3.433a5.104 5.104 0 014.768-3.251zm0 1.5a3.61 3.61 0 00-3.383 2.329l-.066.185-.101.318-.304.136A2.436 2.436 0 0010 18.069a2.435 2.435 0 002.272 2.427l.16.005h7.954a2.116 2.116 0 002.114-2.114c0-.778-.43-1.49-1.11-1.858l-.149-.073-.47-.209.027-.472c.013-.35-.02-.674-.26-1.057a1.775 1.775 0 00-1.207-.81c-.383-.065-.676.012-.976.115l-.305.107-.327-.298a3.611 3.611 0 00-2.435-.947zM11.838 1.301a6.816 6.816 0 016.405 4.44A5.191 5.191 0 0121 10.319c0 .325-.034.642-.091.95a4.662 4.662 0 00-1.46-.365c.03-.191.051-.386.051-.585a3.69 3.69 0 00-1.987-3.265l-.185-.09-.304-.137-.102-.317A5.322 5.322 0 0011.84 2.8c-1.233 0-2.423.43-3.38 1.215l-.2.174-.328.297-.418-.143a2.767 2.767 0 00-.894-.151 2.766 2.766 0 00-2.757 2.594l-.005.168.03.641-.466.208A3.244 3.244 0 001.5 10.761a3.243 3.243 0 003.055 3.234L4.74 14h4.1a5.454 5.454 0 00-1.051 1.262l-.136.238H4.739A4.744 4.744 0 010 10.761c0-1.699.914-3.259 2.367-4.1a4.267 4.267 0 014.252-3.967c.32 0 .64.037.955.11a6.815 6.815 0 014.265-1.502z", "fill-rule": "nonzero" })))))));
  }
  static get is() { return "scale-icon-weather-overcast"; }
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
