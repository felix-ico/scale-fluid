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
import { Component, h, Host, Element, Prop, Listen, State, } from '@stencil/core';
import cx from 'classnames';
export class TelekomHeader {
  constructor() {
    this.scrolledBack = false;
    this.pageYOffset = 0;
  }
  onScroll() {
    this.scrolled = window.pageYOffset > 2;
    this.scrolledBack =
      this.pageYOffset !== window.pageYOffset && window.pageYOffset <= 0;
    this.pageYOffset = pageYOffset;
  }
  render() {
    return (h(Host, null,
      h("header", { part: cx('base', {
          scrolled: this.scrolled,
          'scrolled-back': this.scrolledBack,
        }) },
        h("div", { part: "container" },
          h("slot", { name: "app-logo" },
            h("scale-logo", { part: "app-logo", variant: "white" })),
          h("div", { part: "horizontal-menus" },
            h("div", { part: "extended-menu" },
              h("div", { part: "extended-menu-left" },
                this.appName ? (h("div", { part: "app-name-extended" },
                  h("scale-telekom-app-name", null, this.appNameLink ? (h("a", { onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : (h("span", null, this.appName))))) : null,
                h("slot", { name: "meta-nav-ext" })),
              h("div", { part: "extended-menu-right" },
                h("slot", { name: "meta-nav" }),
                h("slot", { name: "language-switch" }))),
            h("div", { part: "app-name-and-base-menu" },
              this.appName ? (h("div", { part: "app-name" },
                h("scale-telekom-app-name", null, this.appNameLink ? (h("a", { onClick: this.appNameClick, href: this.appNameLink }, this.appName)) : (h("span", null, this.appName))))) : null,
              h("div", { part: "base-menu" },
                h("slot", { name: "main-nav" }),
                h("slot", { name: "functions" }))))))));
  }
  static get is() { return "scale-telekom-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-header.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-header.css"]
  }; }
  static get properties() { return {
    "mainNavigation": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "main-navigation",
      "reflect": false
    },
    "appName": {
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
        "text": ""
      },
      "attribute": "app-name",
      "reflect": false
    },
    "appNameLink": {
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
        "text": ""
      },
      "attribute": "app-name-link",
      "reflect": false
    },
    "appNameClick": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "app-name-click",
      "reflect": false
    }
  }; }
  static get states() { return {
    "scrolled": {},
    "scrolledBack": {},
    "pageYOffset": {}
  }; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "scroll",
      "method": "onScroll",
      "target": "document",
      "capture": false,
      "passive": true
    }]; }
}
