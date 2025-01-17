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
export class CommunicationCallOutgoing {
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
          h("path", { d: "M5.5 4.31l2.805 5.045-1.28 1.28a1.5 1.5 0 00-.105 2A29.66 29.66 0 009.035 15l.458.442c.616.583 1.258 1.14 1.922 1.668a1.5 1.5 0 002-.11l1.305-1.275 5 2.805c-.59 5.135-4.67 4.315-6 3.86-2.415-.825-4.965-2.695-7.17-4.905l-.329-.334c-2.065-2.13-3.792-4.542-4.576-6.841C1.19 8.965.37 4.885 5.5 4.31zm16.905-2.715L20.97 8.47l-2.19-2.19-5.655 5.655a.74.74 0 01-.53.22.725.725 0 01-.53-.22.745.745 0 010-1.06L17.72 5.22l-2.19-2.19z", "fill-rule": "evenodd" }))) : (h("g", null,
          h("path", { d: "M5.9 3.5l3.4 5.95-1.7 1.7c-.25.25-.3.7-.05 1 .45.55 1.15 1.4 2.05 2.3s1.75 1.6 2.3 2.05c.3.25.75.2 1-.05l1.6-1.65 5.95 3.35c-.1 1.15-.35 3.5-2.25 4.7-.8.5-1.7.65-2.5.65-1 0-1.9-.3-2.25-.4-2.3-.8-4.95-2.6-7.45-5.1-2.45-2.5-4.25-5.15-5.1-7.5-.2-.65-.85-2.9.3-4.75C2.45 3.85 4.8 3.6 5.9 3.5zm-.75 1.6c-1.25.2-2.15.7-2.6 1.45-.8 1.25-.3 2.95-.15 3.45.7 2.15 2.4 4.6 4.7 6.9 2.35 2.35 4.8 4.05 6.9 4.75.45.15 2.2.65 3.45-.15.75-.45 1.25-1.35 1.45-2.6l-4.05-2.3-.9.9c-.8.8-2.1.85-3 .15-.6-.45-1.5-1.2-2.45-2.15l-.242-.258A52.645 52.645 0 016.35 13.05c-.75-.9-.65-2.2.15-3l.95-.9zm17.3-3.5L21 8.5l-2.2-2.2-5.65 5.65c-.15.15-.35.2-.55.2s-.4-.05-.55-.2c-.3-.3-.3-.75 0-1.05l5.7-5.65-2.2-2.2 6.9-1.45z", "fill-rule": "evenodd" })))))));
  }
  static get is() { return "scale-icon-communication-call-outgoing"; }
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
