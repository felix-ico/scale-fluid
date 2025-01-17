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
export class ActionThumbsDown {
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
          h("path", { "fill-rule": "evenodd", d: "M20.79 11a2.255 2.255 0 00-.715-2.935 2.315 2.315 0 00-1.115-2.91c.29-1.43-1.095-2.38-2.71-2.38h-3.22A8.87 8.87 0 008.5 4a5.635 5.635 0 01-2 .645V4H2v11.5h4.5v-2.61c1.93.55 3.125 2.765 4.17 5.135.765 1.73.94 2.11 1.305 2.825a1.535 1.535 0 002.895-.955c-.13-1-.5-4-.5-4a1 1 0 011-1.14h3.625C21 14.75 22.05 12.315 20.79 11zM5 14H3.5V5.5H5V14z" }))) : (h("g", null,
          h("path", { "fill-rule": "evenodd", d: "M21.655 10.87c.37-1.07.105-2.195-.72-3.055.245-1.125-.215-2.315-1.185-3.06a2.427 2.427 0 00-.555-1.53c-.625-.765-1.725-1.22-2.94-1.22L13.03 2h-.015c-2.46 0-4.135.93-4.845 1.33-.185.05-.745.67-3.615.67H2v11.5h4.5v-1.825c1.395.53 2.43 2.26 3.485 4.655.765 1.725.95 2.125 1.32 2.86.425.835 1.19 1.31 2.025 1.31.225 0 .45-.035.675-.105 1.1-.34 1.76-1.41 1.605-2.6l-.525-4.01a.251.251 0 01.25-.285h3.625a3.088 3.088 0 002.87-1.895c.405-.935.33-1.945-.175-2.735zm-1.205 2.14c-.205.48-.705.99-1.49.99h-3.625c-.51 0-.99.22-1.32.605-.335.385-.48.89-.41 1.385l.525 4c.075.57-.255.88-.56.975-.14.04-.62.14-.92-.455-.36-.71-.53-1.075-1.285-2.79-1.095-2.46-2.455-5.07-4.865-5.61V5.4c1.555-.2 2.325-.73 2.4-.76.665-.37 2.045-1.145 4.115-1.145h.01l3.225.005c.76 0 1.445.26 1.785.675.325.395.215.705.085 1.35.555.305.945.475 1.215 1.02.335.67.095 1.1-.18 1.735.54.425.97.715 1.12 1.31.135.525-.045.84-.4 1.515.22.225 1.04.835.575 1.905z" })))))));
  }
  static get is() { return "scale-icon-action-thumbs-down"; }
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
