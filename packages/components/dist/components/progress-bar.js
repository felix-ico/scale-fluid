import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { s as statusNote } from './status-note.js';
import { d as defineCustomElement$2 } from './alert-error.js';
import { d as defineCustomElement$1 } from './alert-success.js';

const progressBarCss = ":host{--background:var(--telekom-color-primary-standard);--background-disabled:var(--telekom-color-ui-disabled);--background-color:var(--telekom-color-ui-faint);--color-error:var(--telekom-color-text-and-icon-functional-danger);--background-error:var(--telekom-color-functional-danger-subtle);--color-success:var(--telekom-color-text-and-icon-functional-success);--color-disabled:var(--telekom-color-text-and-icon-disabled);--progress-bar-outer-size:6px;--progress-bar-inner-size:var(--telekom-spacing-unit-x1);--font-label:var(--telekom-text-style-ui);--color-inner-status:var(--telekom-color-primary-standard);--font-size-inner-status:var(--telekom-typography-font-size-small);--font-size-status:var(--telekom-typography-font-size-small);--font-weight-status:var(--telekom-typography-font-weight-extra-bold);--color-status-description:var(--telekom-color-text-and-icon-additional);--font-size-status-description:var(--telekom-typography-font-size-small);--font-weight-status-description:var(--telekom-typography-font-weight-bold)}.progress-bar{width:100%;max-width:30rem}.progress-bar--disabled{cursor:not-allowed}.progress-bar__top-container{display:flex;justify-content:space-between;align-items:center}.progress-bar--disabled .progress-bar__label,.progress-bar--disabled .progress-bar__status{color:var(--color-disabled)}.progress-bar__label{display:block;padding:var(--telekom-spacing-unit-x3) 0;font:var(--font-label)}.progress-bar__wrapper{width:100%;display:flex;box-sizing:border-box;align-items:center}.progress-bar__outer{width:100%;height:var(--progress-bar-outer-size);margin-left:0;overflow:hidden;position:relative;border-radius:100px;background-color:var(--background-color)}.progress-bar__inner{top:0;left:0;height:var(--progress-bar-inner-size);display:flex;position:absolute;align-items:center;white-space:nowrap;justify-content:flex-end;animation-fill-mode:both;border-radius:100px;background:var(--background)}.progress-bar__status{padding:var(--telekom-spacing-unit-x3) 0;font:var(--font-label);font-variant-numeric:tabular-nums}.progress-bar--completed .progress-bar__icon{color:var(--color-success)}.progress-bar--completed .progress-bar__inner{--background:var(--color-success)}.progress-bar--has-error .progress-bar__icon{color:var(--color-error)}.progress-bar--has-error .progress-bar__inner{--background:var(--color-error)}.progress-bar--has-error .progress-bar__outer{background-color:var(--background-error)}.progress-bar__status-description{color:var(--color-status-description);font-size:var(--font-size-status-description);font-weight:var(--font-weight-status-description);margin-top:var(--telekom-spacing-unit-x2)}.progress-bar__aria-live{clip:rect(0 0 0 0);width:1px;border:0;height:1px;margin:-1px;padding:0;overflow:hidden;position:absolute}";

const ICON_SIZE = 16;
let i = 0;
const ProgressBar = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /** (optional) Progress bar busy switch */
    this.busy = false;
    /** (required) Progress bar percentage */
    this.percentage = 0;
    /** (optional) Progress bar percentage to start the animation from (default: 0) */
    this.percentageStart = 0;
    /** (optional) Progress bar percentage text */
    this.showStatus = true;
    this.transitions = (width, widthStart) => `
    @keyframes showProgress {
      from {
        width: ${widthStart}%;
      }
      to {
        width: ${width}%;
      }
    }
  `;
    this.progressStyle = () => {
      return {
        width: this.disabled ? '100%' : `${this.percentage}%`,
        border: '1px solid transparent',
        background: this.customColor
          ? this.customColor
          : this.disabled
            ? 'var(--background-disabled)'
            : `var(--background)`,
        animation: this.disabled ? 'none' : 'showProgress 3s ease-in-out',
      };
    };
  }
  componentWillLoad() {
    if (this.progressBarId == null) {
      this.progressBarId = 'progress-bar-' + i++;
    }
    if (this.disabled) {
      this.showStatus = false;
    }
  }
  componentWillUpdate() { }
  disconnectedCallback() { }
  componentDidRender() {
    if (this.customColor !== undefined) {
      statusNote({
        tag: 'deprecated',
        message: `Property "customColor" is deprecated. 
          Please use css variable "--background" to set the progress bar background color;
          e.g. <scale-progress-bar percentage="20" style="--background: green"></scale-progress-bar>`,
        type: 'warn',
        source: this.hostElement,
      });
    }
  }
  render() {
    return (h(Host, null, this.styles && h("style", null, this.styles), h("style", null, this.transitions(this.percentage, this.percentageStart)), h("div", { part: this.getBasePartMap(), class: this.getCssClassMap() }, h("div", { class: "progress-bar__top-container" }, !!this.label && (h("label", { part: "label", class: "progress-bar__label", htmlFor: this.progressBarId }, this.label)), !!this.showStatus && !this.hasError && this.percentage !== 100 && (h("div", { part: "status", class: "progress-bar__status", "aria-hidden": "true" }, this.percentage, "%")), this.hasError ? (h("div", { class: "progress-bar__icon" }, h("scale-icon-alert-error", { size: ICON_SIZE }))) : this.percentage === 100 ? (h("div", { class: "progress-bar__icon" }, h("scale-icon-alert-success", { size: ICON_SIZE }))) : null), h("div", { part: "wrapper", class: "progress-bar__wrapper" }, h("div", { part: "outer", class: "progress-bar__outer", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": this.percentage, "aria-busy": this.busy, "aria-valuetext": `${this.percentage}%`, "aria-label": this.label, id: this.progressBarId }, h("div", { part: "inner", class: "progress-bar__inner", style: this.progressStyle() })), h("slot", { name: "icon" }))), !!this.statusDescription && (h("div", { part: "status-description", class: "progress-bar__status-description", role: "alert" }, this.statusDescription)), !this.mute && (h("span", { "aria-live": "polite", class: "progress-bar__aria-live" }, this.percentage !== Math.round(this.percentage / 10) * 10
      ? `${Math.round(this.percentage / 10) * 10}%`
      : null))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const component = 'progress-bar';
    const prefix = mode === 'basePart' ? '' : `${component}--`;
    return classnames(component, this.hasError && `${prefix}has-error`, this.disabled && `${prefix}disabled`, this.percentage === 100 && `${prefix}completed`);
  }
  get hostElement() { return this; }
  static get style() { return progressBarCss; }
}, [1, "scale-progress-bar", {
    "busy": [4],
    "percentage": [2],
    "percentageStart": [2, "percentage-start"],
    "customColor": [1, "custom-color"],
    "showStatus": [4, "show-status"],
    "icon": [1],
    "statusDescription": [1, "status-description"],
    "hasError": [4, "has-error"],
    "disabled": [4],
    "progressBarId": [1, "progress-bar-id"],
    "label": [1],
    "mute": [4],
    "styles": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-progress-bar", "scale-icon-alert-error", "scale-icon-alert-success"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-progress-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ProgressBar);
      }
      break;
    case "scale-icon-alert-error":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "scale-icon-alert-success":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { ProgressBar as P, defineCustomElement as d };
