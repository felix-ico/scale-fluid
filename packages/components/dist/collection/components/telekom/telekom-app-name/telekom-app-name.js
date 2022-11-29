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
import { Component, h, Host } from '@stencil/core';
export class TelekomAppName {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "scale-telekom-app-name"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["telekom-app-name.css"]
  }; }
  static get styleUrls() { return {
    "$": ["telekom-app-name.css"]
  }; }
}
