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
export interface Cell {
  defaults?: {
    maxWidth?: number;
    minWidth?: number;
    mobileTitle?: boolean;
    resizable?: boolean;
    sortable?: boolean;
    sortBy?: 'number' | 'text';
    stretchWeight?: number;
    textAlign?: 'left' | 'center' | 'right';
    visible?: boolean;
    width?: number;
  };
  getLongestContent?({ rows, columnIndex, field }: {
    rows: any;
    columnIndex: any;
    field: any;
  }): any;
  render({ field, content, component, rowIndex, columnIndex, isAutoWidthCheck, }: {
    field: any;
    content: any;
    component: any;
    rowIndex: any;
    columnIndex: any;
    isAutoWidthCheck: any;
  }): HTMLElement;
}
