import { Component, Element, h, Prop } from '@stencil/core';
import classNames from 'classnames';
import statusNote from '../../utils/status-note';
export class RadioButtonGroup {
  constructor() {
    /** (optional) Input label */
    this.label = '';
    /** (optional) Input helper text */
    this.helperText = '';
    /** @deprecated - invalid should replace status */
    this.status = '';
    /** (optional) Input status */
    this.invalid = false;
  }
  componentDidRender() {
    if (this.status !== '') {
      statusNote({
        tag: 'deprecated',
        message: 'Property "status" is deprecated. Please use the "invalid" property!',
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  renderHelperIcon() {
    if (this.helperText && !this.invalid) {
      return (h("scale-icon-alert-information", { size: 11 }));
    }
    if (this.invalid) {
      return h("scale-icon-alert-error", { size: 11 });
    }
  }
  render() {
    return (h("fieldset", { class: "radio-button-group" },
      h("legend", { class: "radio-button-group__title" },
        h("label", { class: "radio-button-group__title-label", "aria-label": this.label }, this.label),
        this.helperText ? (h("div", { role: "text", class: this.getCssClassMap(), "aria-label": this.helperText },
          this.renderHelperIcon(),
          h("span", null, this.helperText))) : null),
      h("div", { class: "radio-button-group__container" },
        h("slot", null))));
  }
  getCssClassMap() {
    return classNames('radio-button-group__helper-text', (this.status === 'error' || this.invalid) &&
      `radio-button-group__helper-text--status-error`);
  }
  static get is() { return "scale-radio-button-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./radio-button-group.css"]
  }; }
  static get styleUrls() { return {
    "$": ["radio-button-group.css"]
  }; }
  static get properties() { return {
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) Input label"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "''"
    },
    "helperText": {
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
        "text": "(optional) Input helper text"
      },
      "attribute": "helper-text",
      "reflect": false,
      "defaultValue": "''"
    },
    "status": {
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
        "tags": [{
            "name": "deprecated",
            "text": "- invalid should replace status"
          }],
        "text": ""
      },
      "attribute": "status",
      "reflect": false,
      "defaultValue": "''"
    },
    "invalid": {
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
        "text": "(optional) Input status"
      },
      "attribute": "invalid",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
