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
import { Component, Prop, h, Host, Listen, Element, Method, } from '@stencil/core';
import classNames from 'classnames';
import { hasShadowDom, isScaleIcon } from '../../utils/utils';
const DEFAULT_ICON_SIZE = 24;
const buttonIconSizeMap = {
  small: 16,
  large: 24,
};
export class Button {
  constructor() {
    /** (optional) The size of the button */
    this.size = 'large';
    /** (optional) Button variant */
    this.variant = 'primary';
    /** (optional) If `true`, the button is disabled */
    this.disabled = false;
    /** (optional) Set to `true` when the button contains only an icon */
    this.iconOnly = false;
    /** (optional) Icon position related to the label */
    this.iconPosition = 'before';
    /** (optional) The target attribute for the <a> tag */
    this.target = '_self';
    /**
     * Hack to make the button behave has expected when inside forms.
     * @see https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/button/button.tsx#L155-L175
     */
    this.handleClick = (ev) => {
      // No need to check for `disabled` because disabled buttons won't emit clicks
      if (hasShadowDom(this.hostElement)) {
        const parentForm = this.hostElement.closest('form');
        if (parentForm) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          if (this.type) {
            fakeButton.type = this.type;
          }
          fakeButton.style.display = 'none';
          parentForm.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
  }
  /**
   * Prevent clicks from being emitted from the host
   * when the component is `disabled`.
   */
  handleHostClick(event) {
    if (this.disabled === true) {
      event.stopImmediatePropagation();
    }
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  componentDidLoad() {
    this.setChildrenIconSize();
  }
  connectedCallback() {
    this.setIconPositionProp();
    this.appendEnterKeySubmitFallback();
  }
  disconnectedCallback() {
    this.cleanUpEnterKeySubmitFallback();
  }
  /**
   * In order for forms to be submitted with the Enter key
   * there has to be a `button` or an `input[type="submit"]` in the form.
   * Browsers do not take the <button> inside the Shadow DOM into account for this matter.
   * So we carefully append an `input[type="submit"]` to overcome this.
   *
   * @see https://stackoverflow.com/a/35235768
   * @see https://github.com/telekom/scale/issues/859
   */
  appendEnterKeySubmitFallback() {
    if (hasShadowDom(this.hostElement)) {
      const parentForm = this.hostElement.closest('form');
      if (parentForm == null) {
        return;
      }
      const hasSubmitInputAlready = parentForm.querySelector('input[type="submit"]') != null;
      if (hasSubmitInputAlready) {
        return;
      }
      this.fallbackSubmitInputElement = document.createElement('input');
      this.fallbackSubmitInputElement.type = 'submit';
      this.fallbackSubmitInputElement.hidden = true;
      parentForm.appendChild(this.fallbackSubmitInputElement);
    }
  }
  cleanUpEnterKeySubmitFallback() {
    if (this.fallbackSubmitInputElement != null) {
      try {
        this.fallbackSubmitInputElement.remove();
        this.fallbackSubmitInputElement = null;
      }
      catch (err) { }
    }
  }
  /**
   * Detect whether the last node is an element (not text).
   * If so, it's probably an icon, so we set `iconPosition` to `after`.
   */
  setIconPositionProp() {
    const nodes = Array.from(this.hostElement.childNodes).filter((node) => {
      // ignore empty text nodes, which are probably due to formatting
      return !(node.nodeType === 3 && node.nodeValue.trim() === '');
    });
    const lastNode = nodes.length > 1 ? nodes[nodes.length - 1] : null;
    if (!this.iconOnly && lastNode && isScaleIcon(lastNode)) {
      this.iconPosition = 'after';
    }
  }
  /**
   * Set any children icon's size according the button size.
   */
  setChildrenIconSize() {
    if (this.size != null && buttonIconSizeMap[this.size] != null) {
      const icons = Array.from(this.hostElement.children).filter(isScaleIcon);
      icons.forEach((icon) => {
        if (icon.size === DEFAULT_ICON_SIZE) {
          icon.size = buttonIconSizeMap['small'];
        }
      });
    }
  }
  render() {
    const basePart = classNames('base', this.variant && `variant-${this.variant}`, this.iconOnly && 'icon-only', !this.iconOnly && this.iconPosition, this.disabled && 'disabled');
    return (h(Host, null,
      this.styles && h("style", null, this.styles),
      this.href ? (h("a", { ref: (el) => (this.focusableElement = el), class: this.getCssClassMap(), href: this.href, download: this.download, target: this.target, rel: this.target === '_blank' ? 'noopener noreferrer' : undefined, part: basePart, tabIndex: this.innerTabindex },
        h("slot", null))) : (h("button", { ref: (el) => (this.focusableElement = el), class: this.getCssClassMap(), onClick: this.handleClick, disabled: this.disabled, type: this.type, part: basePart, tabIndex: this.innerTabindex, name: this.name, value: this.value },
        h("slot", null)))));
  }
  getCssClassMap() {
    return classNames('button', this.size && `button--size-${this.size}`, this.variant && `button--variant-${this.variant}`, this.iconOnly && `button--icon-only`, !this.iconOnly &&
      this.iconPosition &&
      `button--icon-${this.iconPosition}`, this.disabled && !this.href && `button--disabled`);
  }
  static get is() { return "scale-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'large'",
        "resolved": "\"large\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) The size of the button"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'large'"
    },
    "variant": {
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
        "text": "(optional) Button variant"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'primary'"
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
        "text": "(optional) If `true`, the button is disabled"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'reset' | 'submit' | 'button'",
        "resolved": "\"button\" | \"reset\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Button type"
      },
      "attribute": "type",
      "reflect": false
    },
    "name": {
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
        "text": "(optional) The name of the button, submitted as a pair with the button's `value` as part of the form data"
      },
      "attribute": "name",
      "reflect": false
    },
    "value": {
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
        "text": "(optional) Defines the value associated with the button's `name`"
      },
      "attribute": "value",
      "reflect": false
    },
    "iconOnly": {
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
        "text": "(optional) Set to `true` when the button contains only an icon"
      },
      "attribute": "icon-only",
      "reflect": false,
      "defaultValue": "false"
    },
    "iconPosition": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'before' | 'after'",
        "resolved": "\"after\" | \"before\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) Icon position related to the label"
      },
      "attribute": "icon-position",
      "reflect": true,
      "defaultValue": "'before'"
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
        "text": "(optional) When present, an <a> tag will be used"
      },
      "attribute": "href",
      "reflect": false
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
        "text": "(optional) The target attribute for the <a> tag"
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
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
    "download": {
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
        "text": "(optional) Name of a file to be downloaded"
      },
      "attribute": "download",
      "reflect": false
    },
    "innerTabindex": {
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
        "text": "(optional) Set `tabindex` in the inner button or link element"
      },
      "attribute": "inner-tabindex",
      "reflect": false
    }
  }; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleHostClick",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
