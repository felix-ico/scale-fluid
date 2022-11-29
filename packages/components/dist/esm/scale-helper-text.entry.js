import { r as registerInstance, h, a as Host } from './index-6d95a4bc.js';

const helperTextCss = ":host{--font:var(--telekom-text-style-small-bold);--color-informational:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--color-warning:var(--telekom-color-text-and-icon-functional-warning);--color-danger:var(--telekom-color-text-and-icon-functional-danger);--color-success:var(--telekom-color-text-and-icon-functional-success);--color-neutral:var(--telekom-color-text-and-icon-additional)}.helper-text{display:flex;align-items:flex-start;flex-direction:row-reverse;justify-content:flex-end;font:var(--telekom-text-style-small-bold)}[part='text']{text-align:left}scale-icon-alert-information,scale-icon-alert-error,scale-icon-alert-success{display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-unit-x1);margin-top:0.1666em;}.helper-text--informational{color:var(--color-informational)}.helper-text--warning{color:var(--color-warning)}.helper-text--danger{color:var(--color-danger)}.helper-text--success{color:var(--color-success)}.helper-text--neutral{color:var(--color-neutral)}";

const ICON_SIZE = 11;
const HelperText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** (optional) Injected CSS styles */
    this.variant = 'informational';
  }
  renderHelperIcon() {
    const variant = this.variant;
    if (variant === 'informational' || variant === 'warning') {
      return (h("scale-icon-alert-information", { size: ICON_SIZE }));
    }
    if (variant === 'danger') {
      return h("scale-icon-alert-error", { size: ICON_SIZE });
    }
    if (variant === 'success') {
      return (h("scale-icon-alert-success", { size: ICON_SIZE }));
    }
  }
  render() {
    return (h(Host, null, h("div", { class: {
        'helper-text': true,
        'helper-text--informational': this.variant === 'informational',
        'helper-text--warning': this.variant === 'warning',
        'helper-text--danger': this.variant === 'danger',
        'helper-text--success': this.variant === 'success',
        'helper-text--neutral': this.variant === 'neutral',
      }, part: "base" }, this.helperText ? (h("span", { part: "text" }, this.helperText)) : (h("span", { part: "text" }, h("slot", null))), this.renderHelperIcon()), this.styles && h("style", null, this.styles)));
  }
};
HelperText.style = helperTextCss;

export { HelperText as scale_helper_text };
