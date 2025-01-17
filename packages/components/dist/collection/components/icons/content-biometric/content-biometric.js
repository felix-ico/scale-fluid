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
export class ContentBiometric {
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
          h("path", { "fill-rule": "evenodd", d: "M12.225 9.77c2.22 0 3.89.93 4.89 2.685a5.365 5.365 0 003.725 2.465l-.012-.002.092.031a.75.75 0 01.458.726l-.012.106a.75.75 0 01-.826.604 6.885 6.885 0 01-4.76-3.205c-.705-1.27-1.91-1.915-3.575-1.915a4.065 4.065 0 00-4.06 4.06c0 1.375.635 2.24 1.675 3.5a9.365 9.365 0 004.065 2.96.75.75 0 01-.445 1.43 10.885 10.885 0 01-4.775-3.435c-.925-1.145-2-2.45-2-4.45a5.565 5.565 0 015.56-5.56zm.025-3.01a8.245 8.245 0 015.86 2.18 9.41 9.41 0 011.5 1.88 2.5 2.5 0 001.63 1.215v-.01a.755.755 0 01-.17 1.5 4 4 0 01-2.73-1.905 7.935 7.935 0 00-1.285-1.59 6.71 6.71 0 00-4.83-1.77 7.075 7.075 0 00-7.04 7.07 7.155 7.155 0 003.405 6 .75.75 0 11-.805 1.265A8.54 8.54 0 0112.25 6.76zm-.75 6.12a2.58 2.58 0 012.76.92l.335.47c.29.443.625.856 1 1.23a6.97 6.97 0 004.035 2 .76.76 0 11-.235 1.5 8.42 8.42 0 01-4.83-2.42 9.265 9.265 0 01-1.19-1.46c-.11-.155-.21-.3-.305-.425a1.07 1.07 0 00-1.17-.375 1 1 0 00-.68.68c-.11.385-.025.67.475 1.28l.05.06a10.105 10.105 0 005.785 3.705.75.75 0 01-.365 1.455c-4.405-1.115-6.415-3.94-6.665-4.315a2.805 2.805 0 01-.71-2.595 2.5 2.5 0 011.71-1.71zm.48-9.113a11.57 11.57 0 019.175 4.198A.75.75 0 1120 8.92a10.075 10.075 0 00-15.82.35.74.74 0 01-1.035.145A.75.75 0 013 8.365a11.57 11.57 0 018.98-4.598zM12.26.75c2.311 0 4.58.62 6.57 1.795a.75.75 0 11-.75 1.3 11.42 11.42 0 00-11.825.11.73.73 0 01-.385.11.76.76 0 01-.625-.36.75.75 0 01.255-1.03A13.105 13.105 0 0112.26.75z" }))) : (h("g", null,
          h("path", { "fill-rule": "evenodd", d: "M12.1 9.95c1.1 0 2.25.4 3.3 1.15.35.25.65.55.9.85.35.4.7.8 1.35 1.2.85.6 1.95 1 3.25 1.35.45.15.65.55.55.95-.1.4-.5.65-.9.55-1.5-.4-2.7-.9-3.7-1.55-.8-.55-1.25-1.05-1.65-1.45-.25-.25-.45-.5-.7-.65-.75-.55-1.6-.85-2.4-.85-.85 0-1.65.3-2.3.85-1.55 1.3-1.75 3.5-.5 5.25.55.75 1.5 1.7 2.45 2.45.7.55 1.5 1.05 2.35 1.5.35.2.5.65.3 1s-.65.5-1 .3c-.95-.45-1.8-1-2.6-1.65-1.1-.8-2.1-1.85-2.75-2.75C6.3 16 6.6 13 8.8 11.15c.95-.75 2.1-1.2 3.3-1.2zm0-2.95c1.45 0 2.9.4 4.25 1.15.95.55 1.5 1.15 2 1.65.75.75 1.3 1.35 3 1.7.4.1.65.5.65.85-.1.4-.5.7-.9.6-2.15-.45-3-1.3-3.8-2.15-.5-.5-.95-.95-1.7-1.4-1.1-.6-2.35-.95-3.5-.95-1.55 0-3.05.55-4.25 1.55-2.75 2.35-3.15 6.25-1 9.3.45.7 1.1 1.4 1.85 2.1.3.25.35.75.05 1.05-.3.3-.75.35-1.05.05-.8-.75-1.5-1.55-2.05-2.3C3 16.55 3.5 11.75 6.9 8.9 8.35 7.7 10.2 7 12.1 7zm-1.35 6.5c.95-.85 2.3-.65 3.25.45.45.55.8.95 1.4 1.4 1.35 1 2.8 1.55 4.35 2 .4.15.65.55.55.95-.15.4-.55.6-.95.5-1.1-.35-2.85-.8-4.75-2.2-.35-.3-.65-.55-1.05-.95-.3-.35-.65-.75-.75-.9-.25-.3-.75-.4-1.1-.1-.3.3-.35.75-.1 1.05.6.75 1.2 1.4 2 2 1.55 1.25 3.35 1.9 4.05 2.15.35.15.6.55.45.95-.15.35-.55.6-.95.45-.75-.25-2.75-1-4.5-2.35-.85-.65-1.65-1.5-2.15-2.15-.85-1.15-.75-2.4.25-3.25zM12.1 4c3.35 0 6.55 1.5 8.85 4.15.25.3.2.8-.1 1.05-.3.25-.8.2-1.05-.1-2-2.3-4.75-3.6-7.65-3.6-2.25 0-4.45.85-6.2 2.3-.6.45-1.1 1-1.55 1.6-.25.3-.75.4-1.05.1-.35-.25-.4-.7-.15-1.05.5-.65 1.1-1.3 1.75-1.85C6.95 4.9 9.5 4 12.1 4zm0-3c2.3 0 4.55.55 6.65 1.65.35.2.5.65.3 1s-.65.5-1 .3C16.2 3 14.2 2.5 12.15 2.5 10.05 2.5 8 3 6.2 4c-.4.15-.85.05-1.05-.35-.2-.35-.05-.8.3-1C7.5 1.55 9.8 1 12.1 1z" })))))));
  }
  static get is() { return "scale-icon-content-biometric"; }
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
