import { r as registerInstance, h, a as Host } from './index-6d95a4bc.js';

const telekomAppNameCss = ":host{--color:var(--telekom-color-primary-standard);--font-weight:var(--telekom-typography-font-weight-extra-bold);--font-size:var(--telekom-typography-font-size-body)}:host ::slotted(*){color:var(--color);font-weight:var(--font-weight);font-size:var(--font-size);text-decoration:none}";

const TelekomAppName = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
TelekomAppName.style = telekomAppNameCss;

export { TelekomAppName as scale_telekom_app_name };
