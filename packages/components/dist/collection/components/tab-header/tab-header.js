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
import { Component, h, Prop, Host, Watch, State, Element } from '@stencil/core';
import classNames from 'classnames';
import { isScaleIcon } from '../../utils/utils';
import statusNote from '../../utils/status-note';
const DEFAULT_ICON_SIZE = 24;
const PER_SPEC_ICON_SIZE = 16;
let i = 0;
export class TabHeader {
  constructor() {
    this.generatedId = i++;
    /** True for a disabled Tabnavigation */
    this.disabled = false;
    /** True for smaller height and font size */
    /** @deprecated - size should replace small */
    this.small = false;
    /** (optional) size  */
    this.size = 'small';
    this.hasFocus = false;
  }
  selectedChanged(newValue) {
    if (!this.disabled) {
      if (newValue === true) {
        // Having focus on the host element, and not on inner elements,
        // is required because screen readers.
        this.hostElement.focus();
      }
      this.updateSlottedIcon();
    }
  }
  componentDidLoad() {
    this.setChildrenIconSize();
  }
  componentDidRender() {
    if (this.small !== false) {
      statusNote({
        tag: 'deprecated',
        message: 'Property "small" is deprecated. Please use css overwrites.',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  /**
   * Find slotted icons, and if any, add the `selected` attribute accordingly.
   */
  updateSlottedIcon() {
    const slot = this.container.querySelector('slot');
    if (slot === null) {
      return;
    }
    const children = Array.from(slot.assignedNodes())
      .filter((node) => node.nodeType === 1)
      .filter((node) => node.nodeName.toUpperCase().indexOf('ICON') > -1);
    if (children.length === 0) {
      return;
    }
    const action = this.selected ? 'setAttribute' : 'removeAttribute';
    children.forEach((child) => child[action]('selected', ''));
  }
  /**
   * Set any children icon's size according the button size.
   */
  setChildrenIconSize() {
    const icons = Array.from(this.hostElement.children).filter(isScaleIcon);
    icons.forEach((icon) => {
      // This is meh people might actually want 24
      if (icon.size === DEFAULT_ICON_SIZE) {
        icon.size = PER_SPEC_ICON_SIZE;
      }
    });
  }
  render() {
    return (h(Host, { id: `scale-tab-header-${this.generatedId}`, role: this.disabled ? false : 'tab', "aria-selected": this.selected ? 'true' : 'false', tabindex: this.disabled ? false : this.selected ? '0' : '-1', onFocus: () => (this.hasFocus = true), onBlur: () => (this.hasFocus = false) },
      this.styles && h("style", null, this.styles),
      h("span", { part: this.getBasePartMap(), ref: (el) => (this.container = el), class: this.getCssClassMap() },
        h("slot", null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'tab-header';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classNames(component, this.selected && `${prefix}selected`, this.size === 'large' && `${prefix}large`, this.hasFocus && `${prefix}has-focus`, this.disabled && `${prefix}disabled`);
  }
  static get is() { return "scale-tab-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./tab-header.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tab-header.css"]
  }; }
  static get properties() { return {
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
        "text": "True for a disabled Tabnavigation"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "small": {
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
        "tags": [{
            "name": "deprecated",
            "text": "- size should replace small"
          }],
        "text": ""
      },
      "attribute": "small",
      "reflect": false,
      "defaultValue": "false"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'large'",
        "resolved": "\"large\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) size"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'small'"
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "selected",
      "reflect": false
    }
  }; }
  static get states() { return {
    "hasFocus": {}
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "selected",
      "methodName": "selectedChanged"
    }]; }
}
