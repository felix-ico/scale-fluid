'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const telekomAppNameCss = ":host{--color:var(--telekom-color-primary-standard);--font-weight:var(--telekom-typography-font-weight-extra-bold);--font-size:var(--telekom-typography-font-size-body)}:host ::slotted(*){color:var(--color);font-weight:var(--font-weight);font-size:var(--font-size);text-decoration:none}";

const TelekomAppName = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
TelekomAppName.style = telekomAppNameCss;

exports.scale_telekom_app_name = TelekomAppName;
