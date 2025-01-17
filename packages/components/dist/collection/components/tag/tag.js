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
import { Component, Prop, h, Host, Event } from '@stencil/core';
import classNames from 'classnames';
import { emitEvent } from '../../utils/utils';
export class Tag {
  constructor() {
    /** (optional) Tag type */
    this.type = 'standard';
    /** (optional) Tag color */
    this.color = 'grey';
    /** (optional) Tag href */
    this.href = '';
    /** (optional) Tag target */
    this.target = '_self';
    /** (optional) Tag dismissable */
    this.dismissable = false;
    /** (optional) Tag disabled */
    this.disabled = false;
    /** (optional) Dismiss label */
    this.dismissText = 'dismiss';
    this.handleClose = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled) {
        return;
      }
      emitEvent(this, 'scaleClose', event);
    };
  }
  componentWillUpdate() { }
  disconnectedCallback() { }
  render() {
    const Element = !!this.href && !this.disabled ? 'a' : 'span';
    const linkProps = !!this.href
      ? {
        href: this.href,
        target: this.target,
      }
      : {};
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      h(Element, Object.assign({ part: this.getBasePartMap(), class: this.getCssClassMap() }, linkProps),
        h("slot", null),
        this.dismissable && (h("button", { part: "button-dismissable", disabled: this.disabled, "aria-label": this.dismissText, onClick: this.handleClose },
          h("scale-icon-action-close", { part: "icon-dismissable", size: 15 }))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tag';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classNames(mode === 'basePart' ? 'base' : component, this.size && `${prefix}size-${this.size}`, this.type && `${prefix}type-${this.type}`, this.color && `${prefix}color-${this.color}`, !!this.href && `${prefix}link`, !!this.dismissable && `${prefix}dismissable`, !!this.disabled && `${prefix}disabled`);
  }
  static get is() { return "scale-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./tag.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tag.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small'",
        "resolved": "\"small\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Tag size"
      },
      "attribute": "size",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'standard' | 'strong'",
        "resolved": "\"standard\" | \"strong\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Tag type"
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'standard'"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'cyan'\n    | 'yellow'\n    | 'green'\n    | 'orange'\n    | 'red'\n    | 'violet'\n    | 'brown'\n    | 'olive'\n    | 'teal'\n    | 'black'\n    | 'dismissable'\n    | 'grey'",
        "resolved": "\"black\" | \"brown\" | \"cyan\" | \"dismissable\" | \"green\" | \"grey\" | \"olive\" | \"orange\" | \"red\" | \"teal\" | \"violet\" | \"yellow\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Tag color"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'grey'"
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Tag href"
      },
      "attribute": "href",
      "reflect": false,
      "defaultValue": "''"
    },
    "target": {
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
        "text": "(optional) Tag target"
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "dismissable": {
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
        "text": "(optional) Tag dismissable"
      },
      "attribute": "dismissable",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
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
        "text": "(optional) Tag disabled"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "dismissText": {
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
        "text": "(optional) Dismiss label"
      },
      "attribute": "dismiss-text",
      "reflect": false,
      "defaultValue": "'dismiss'"
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
      "reflect": false
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
        "text": "(optional) Close icon click event"
      },
      "complexType": {
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "scaleCloseLegacy",
      "name": "scaleClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }]; }
}
