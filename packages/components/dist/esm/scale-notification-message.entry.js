import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { s as statusNote } from './status-note-0089e9c9.js';
import { e as emitEvent } from './utils-004d7b05.js';

const notificationMessageCss = ":host{--width:100%;--radius:var(--telekom-radius-standard);--border:var(--telekom-line-weight-standard) solid transparent;--background-error:var(--telekom-color-functional-danger-subtle);--background-warning:var(--telekom-color-functional-warning-subtle);--background-informational:var(\n    --telekom-color-functional-informational-subtle\n  );--background-success:var(--telekom-color-functional-success-subtle)}.notification-message{border:var(--border);border-radius:var(--radius);width:var(--width);position:relative}.notification-message--variant-error{background:var(--background-error)}.notification-message--variant-warning{background-color:var(--background-warning)}.notification-message--variant-informational{background-color:var(--background-informational)}.notification-message--variant-success{background-color:var(--background-success)}.notification-message__heading{margin:14px 48px 14px 48px;font-weight:var(--telekom-typography-font-weight-bold);line-height:var(--telekom-typography-line-spacing-standard)}.notification-message__text{margin:8px 48px 15px 48px}::slotted(*){font-weight:var(--telekom-typography-font-weight-regular)}.notification-message__icon-close{position:absolute;top:8px;right:13.5px;border:none;cursor:pointer;margin:0;padding:0;background:transparent;color:var(--telekom-color-text-and-icon-standard)}.notification-message__icon-close svg{height:19px;width:19px;padding:6.5px;border-radius:20%}.notification-message__icon-close:hover svg{background-color:hsl(0, 0%, 100%);color:var(--telekom-color-text-and-icon-primary-hovered)}.notification-message__icon-success{position:absolute;top:12.5px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-success)}.notification-message__icon-error{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-danger)}.notification-message__icon-information{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-informational)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-message__icon-close{color:hsl(0, 0%, 100%)}}";

const NotificationMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleClose = createEvent(this, "scale-close", 7);
    this.variant = 'informational';
    this.dismissible = false;
    this.autoHide = false;
    this.autoHideDuration = 3000;
    this.close = () => {
      this.opened = false;
      emitEvent(this, 'scaleClose');
    };
  }
  componentWillLoad() {
    this.hasSlotText = !!this.hostElement.querySelector('[slot=text]');
  }
  componentDidRender() {
    if (this.autoHide === true) {
      setTimeout(this.close, this.autoHideDuration);
    }
  }
  componentDidUpdate() {
    this.hasSlotText = !!this.hostElement.querySelector('[slot=text]');
  }
  connectedCallback() {
    statusNote({ source: this.hostElement, type: 'warn' });
  }
  async open() {
    this.opened = true;
  }
  handleIcons() {
    if (this.variant) {
      switch (this.variant) {
        case 'success':
          return (h("scale-icon-alert-success", { class: "notification-message__icon-success", color: "#187431", "aria-hidden": "true" }));
        case 'informational':
          return (h("scale-icon-alert-information", { class: "notification-message__icon-information", "aria-hidden": "true" }));
        case 'error':
          return (h("scale-icon-alert-error", { class: "notification-message__icon-error", "aria-hidden": "true" }));
        case 'warning':
          return (h("scale-icon-alert-warning", { class: "notification-message__icon-information", color: "#AE461C", "aria-hidden": "true" }));
      }
    }
    return;
  }
  render() {
    if (!this.opened) {
      return null;
    }
    return (h(Host, null, h("div", { role: "alert", style: { display: `${this.opened ? '' : 'none'}` }, part: this.getBasePartMap(), class: this.getCssClassMap(), tabindex: "0" }, h("div", { part: "container", class: "notification-message__container" }, this.handleIcons(), h("div", { part: "heading", class: "notification-message__heading" }, h("slot", null, "\u2003"), this.dismissible && (h("button", { part: "button-dismissable", type: "button", class: "notification-message__icon-close", onClick: () => this.close(), tabindex: 0, "aria-label": "close", onKeyDown: (e) => {
        if (e.key === 'Enter') {
          this.close();
        }
      } }, h("scale-icon-action-circle-close", null)))), this.hasSlotText && (h("div", { part: "text", class: "notification-message__text" }, h("slot", { name: "text" })))))));
  }
  getBasePartMap() {
    return this.getCssOrBasePartMap('basePart');
  }
  getCssClassMap() {
    return this.getCssOrBasePartMap('css');
  }
  getCssOrBasePartMap(mode) {
    const name = 'notification-message';
    const prefix = mode === 'basePart' ? '' : `${name}--`;
    return classnames(name, this.variant && `${prefix}variant-${this.variant}`);
  }
  get hostElement() { return getElement(this); }
};
NotificationMessage.style = notificationMessageCss;

export { NotificationMessage as scale_notification_message };
