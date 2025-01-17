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
import { h } from '@stencil/core';
// Expected content: boolean, eg `true`
// Options
// style?: string 'switch' | 'checkbox'
// editable?: boolean = false
export const CheckboxCell = {
  defaults: {
    sortBy: 'number',
  },
  getLongestContent({ rows, columnIndex }) {
    // Skip check as content width is always the same
    return rows[0][columnIndex];
  },
  render: ({ field, content, component, rowIndex, columnIndex }) => {
    const { style = 'checkbox', editable = false, label } = field;
    const props = {
      checked: content,
      disabled: !editable,
      label,
    };
    if (editable) {
      props.onScaleChange = (ev) => {
        const { value } = ev.detail;
        // Update rows data
        component.rows[rowIndex][columnIndex] = value;
        // Trigger event
        component.triggerEditEvent(value, rowIndex, columnIndex);
      };
    }
    switch (style) {
      case 'switch':
        return h("scale-switch", Object.assign({}, props));
      default:
        // 'checkbox'
        return h("scale-checkbox", Object.assign({}, props));
    }
  },
};
