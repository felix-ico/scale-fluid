import { h, r as registerInstance, c as createEvent, a as Host, g as getElement } from './index-6d95a4bc.js';
import { c as classnames } from './index-713f92a5.js';
import { e as emitEvent } from './utils-004d7b05.js';

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
// Expected content: boolean, eg `true`
// Options
// style?: string 'switch' | 'checkbox'
// editable?: boolean = false
const CheckboxCell = {
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
// Expected: date/time string, eg '10:23:00'
// TODO: see if this is even worth it. It may help with sorting/filtering?
// work out format requirements - as date/time formatting is heavy eg moment.js
// const { inputFormat, outputFormat } = field;
// inputFormat: 'HH:mm:ss', // ['timestamp', '']
// outputFormat: 'HH:mm',
const DateCell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ content, isAutoWidthCheck }) => {
    let value = content;
    // Render all digits with 8s as they're the widest
    if (isAutoWidthCheck) {
      value = value.replace(/[0-9]/g, '8');
    }
    return h("p", { class: `scl-body` }, value);
  },
};

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
// Expected content: an email string (eg: 'mailto:example@domain.com)
const EmailCell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ content }) => {
    // Remove protocol (mailto:)
    const emailNoProtocol = content.replace(/^mailto:/i, '');
    return h("scale-link", { href: content }, emailNoProtocol);
  },
};

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
// Expected content: number, eg 10230.32
// Options
// style?: string 'bar' | 'progress'
// min?: number 0
// max?: number 100
const GraphCell = {
  defaults: {
    sortBy: 'number',
  },
  render: ({ field, content }) => {
    const { style = 'progress', min = 0, max = 100 } = field;
    // Convert content to 0>100 range for progress bar
    const progress = ((content - min) / (max - min)) * 100;
    switch (style) {
      case 'bar':
        return (h("div", { class: `tbody__bar-cell` },
          h("scale-progress-bar", { "aria-hidden": "true", percentage: progress, 
            // showStatus={true}
            mute: true, style: { maxWidth: '200px' }, styles: 
            /* css */ `.progress-bar__outer {
                min-width: 50px;
                max-width: 200px;
              }
              .progress-bar__inner {
                background: var(--telekom-color-ui-faint) !important;
              }
              ` }),
          h("p", { class: `scl-body` }, content)));
      default:
        // progress
        return (h("scale-progress-bar", { percentage: progress, showStatus: true, mute: true, styles: 
          /* css */ `.progress-bar__outer {
              min-width: 50px;
              max-width: 200px;
            }
            .progress-bar__inner {
                background: var(--telekom-color-functional-informational-standard) !important;
              }
            ` }));
    }
  },
};

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
// Expected content: a url string (eg: 'https://sample.com')
const LinkCell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ content }) => {
    // Remove protocol (http/https)
    const urlNoProtocol = content.replace(/^https?\:\/\//i, '');
    return (h("scale-link", { href: content, target: "_blank" }, urlNoProtocol));
  },
};

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
// Expected content: HTMLElement
const HTMLCell = {
  defaults: {},
  getLongestContent({ rows, columnIndex }) {
    // Skip check as content width is always the same
    return rows[0][columnIndex];
  },
  render: ({ content, component }) => {
    return (h("scale-button", { variant: "secondary", size: "small", "icon-only": true, "aria-label": `Activate to ${content.isExpanded ? 'collapse' : 'expand'} content`, onClick: () => {
        content.isExpanded = !content.isExpanded;
        component.forceRender++;
      } }, content.isExpanded ? (h("scale-icon-navigation-collapse-up", { size: 14 })) : (h("scale-icon-navigation-collapse-down", { size: 14 }))));
  },
};

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
// Expected content: number or string, eg `120.0`
// Options
// precision
// decimalSymbol
// groupSymbol
// editable?: boolean = false
const NumberCell = {
  defaults: {
    textAlign: 'right',
    sortBy: 'number',
  },
  render: ({ field, content, component, rowIndex, columnIndex, isAutoWidthCheck, }) => {
    const { precision = Infinity, decimalSymbol = '.', groupSymbol = '', prefix = '', suffix = '', editable = false, label, } = field;
    // Input component doesn't expand with content, so need to return a fake element that simulates width
    if (isAutoWidthCheck && editable) {
      return (h("p", { class: `scl-body`, style: { paddingRight: '26px' } }, content));
    }
    const step = `0.${(String(content).split('.')[1] || '')
      .split('')
      .map(() => '0')}`.replace(/,/g, '');
    if (editable) {
      const props = {
        type: 'number',
        size: 'small',
        step: step.slice(0, step.length - 1) + '1',
        value: String(content),
        styles: /* css */ `.text-field__control {
          text-align: right !important;
        }`,
        label,
      };
      // TODO: use blur to reduce number of changes - but doesn't pass value
      props.onScaleChange = ({ detail }) => {
        const { value } = detail;
        // Update rows data
        component.rows[rowIndex][columnIndex] = value;
        // Trigger event
        component.triggerEditEvent(value, rowIndex, columnIndex);
      };
      return h("scale-text-field", Object.assign({}, props));
    }
    else {
      let value = content;
      // Render all digits with 8s as they're the widest
      if (isAutoWidthCheck) {
        value = Number(value.toString().replace(/[0-9]/g, '8'));
      }
      // Refine to requested decimal precision
      if (precision < 100) {
        value = Number(value).toFixed(precision);
      }
      else {
        value = value.toString();
      }
      // Replace/add requested delimiters
      if (groupSymbol || decimalSymbol !== '.') {
        const parts = value.split('.');
        if (groupSymbol) {
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, groupSymbol);
        }
        value = parts.join(decimalSymbol);
      }
      // Add prefix/suffix
      if (prefix || suffix) {
        value = prefix + value + suffix;
      }
      return (h("p", { class: `scl-body`, style: { textAlign: 'right' } }, value));
    }
  },
};

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
// Expected: string
// Options
// options: string array
// editable?: boolean = false
const SelectCell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ field, content, component, rowIndex, columnIndex, isAutoWidthCheck, }) => {
    const { options, editable = false, label } = field;
    // Select component doesn't expand with content, so need to return a fake element that simulates width
    if (isAutoWidthCheck) {
      return (h("p", { class: `scl-body`, style: { paddingRight: '56px' } }, content));
    }
    const props = {
      disabled: !editable,
      value: content,
      label,
    };
    if (editable) {
      props.onScaleChange = ({ detail }) => {
        const { value } = detail;
        // Update rows data
        component.rows[rowIndex][columnIndex] = value;
        // Trigger event
        component.triggerEditEvent(value, rowIndex, columnIndex);
      };
    }
    return (h("scale-dropdown", Object.assign({ size: "small" }, props), options.map((option) => {
      return (h("option", { value: option, selected: option === content }, option));
    })));
  },
};

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
// Expected: comma delimited string (eg 'one, two, three')
const TagsCell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ content }) => {
    const tags = content.split(',').map((s) => s.trim());
    return (h("ul", { class: `tbody__tag-list` }, tags.map((tag) => (h("li", null,
      h("scale-tag", { size: "small", type: "strong" }, tag))))));
  },
};

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
// Expected content: a telephone number  string (eg: 'tel:+491234567')
const TelephoneCell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ content }) => {
    // Remove protocol (tell:)
    const telephoneNoProtocol = content.replace(/^tel:/i, '');
    return h("scale-link", { href: content }, telephoneNoProtocol);
  },
};

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
// Expected content: unformated string 'this is a string'
// Options
// variant?: string 'body' | 'h6' | 'h5' | etc
// editable?: boolean = false
// iconPrefix?: string eg 'action-download'
// iconSuffix?: string eg 'action-download'
const TextCell = {
  defaults: {
    sortBy: 'text',
  },
  render: ({ field, content, component, rowIndex, columnIndex, isAutoWidthCheck, }) => {
    const { variant = 'body', editable = false, iconPrefix, iconSuffix, label, } = field;
    // Input component doesn't expand with content, so need to return a fake element that simulates width
    if (isAutoWidthCheck && editable) {
      return (h("p", { class: `scl-body`, style: { paddingRight: '26px' } }, content));
    }
    if (editable) {
      const props = {
        type: 'text',
        value: content,
        label,
      };
      // TODO: use blur to reduce number of changes - but doesn't pass value
      // TODO: apply variant and iconPrefix/Suffix to editable text
      props.onScaleChange = ({ detail }) => {
        const { value } = detail;
        // Update rows data
        component.rows[rowIndex][columnIndex] = value;
        // Trigger event
        component.triggerEditEvent(value, rowIndex, columnIndex);
      };
      return h("scale-text-field", Object.assign({}, props));
    }
    else {
      let value = content;
      // Add an extra couple of characters for the width check to avoid clipping
      if (isAutoWidthCheck) {
        value += 'w';
      }
      return (h("div", { class: `tbody__text-cell` },
        iconPrefix && (h("span", { class: `tbody__text-cell-prefix` }, h(`scale-icon-${iconPrefix}`))),
        h("p", { class: `scl-${variant}` }, value),
        iconSuffix && (h("span", { class: `tbody__text-cell-suffix` }, h(`scale-icon-${iconSuffix}`)))));
    }
  },
};

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
var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const ActionsCell = {
  defaults: {},
  render: ({ content }) => {
    return (h("div", { class: `tbody__actions` }, content.map((action) => {
      const { label } = action, props = __rest(action, ["label"]);
      if (typeof label === 'object' && '__html' in label) {
        return (h("scale-button", Object.assign({ innerHTML: label.__html }, props)));
      }
      return h("scale-button", Object.assign({}, props), label);
    })));
  },
};

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
const CELL_TYPES = {
  checkbox: CheckboxCell,
  date: DateCell,
  email: EmailCell,
  graph: GraphCell,
  html: HTMLCell,
  link: LinkCell,
  number: NumberCell,
  select: SelectCell,
  tags: TagsCell,
  telephone: TelephoneCell,
  text: TextCell,
  actions: ActionsCell,
};
// Fallback if no type set on field
const DEFAULT_CELL_TYPE = 'text';
// Common cell defaults, can be overridden in cell type classes
const CELL_DEFAULTS = {
  maxWidth: Infinity,
  minWidth: 20,
  resizable: true,
  sortable: false,
  sortBy: 'text',
  textAlign: 'left',
  visible: true,
  width: 'auto',
};

const dataGridCss = ".scl-body{margin:0;font:var(--telekom-text-style-body)}.scl-label{margin:0;font:var(--telekom-text-style-small)}.scl-h1{margin:0;font:var(--telekom-text-style-heading-1)}.scl-h2{margin:0;font:var(--telekom-text-style-heading-2)}.scl-h3{margin:0;font:var(--telekom-text-style-heading-3)}.scl-h4{margin:0;font:var(--telekom-text-style-heading-4)}.scl-h5{margin:0;font:var(--telekom-text-style-heading-5)}.scl-h6{margin:0;font:var(--telekom-text-style-heading-6)}:host{font-family:var(--telekom-typography-font-family-sans);font-size:var(--telekom-typography-font-size-body);font-weight:var(--telekom-typography-font-weight-regular);line-height:var(--telekom-typography-line-spacing-standard);color:var(--telekom-color-text-and-icon-standard)}.data-grid input,.data-grid select{letter-spacing:inherit;font-weight:inherit;font-family:inherit;line-height:inherit}.data-grid{position:relative;display:block;background:var(--telekom-color-ui-state-fill-standard);border-radius:var(--telekom-radius-large);border:1px solid var(--telekom-color-ui-faint);overflow:hidden}.data-grid--hide-border{border:none}.data-grid__auto-width-check{opacity:0}.data-grid__title-block{display:flex;align-items:center;justify-content:space-between;padding-right:62px;padding-left:var(--telekom-spacing-unit-x6)}.data-grid__settings-menu{position:absolute;top:var(--telekom-spacing-unit-x4);right:var(--telekom-spacing-unit-x4)}.data-grid__scroll-container{overflow:auto;overflow-x:overlay;overflow-y:overlay;ms-overflow-style:-ms-autohiding-scrollbar;scrollbar-gutter:stable}.data-grid__table{border-spacing:0;border-collapse:collapse;overflow:hidden}.data-grid--hide-menu .data-grid__settings-menu{display:none}.data-grid:not(.data-grid--hide-menu) .data-grid__title-block{min-height:72px}.data-grid--hide-menu .data-grid__title-block{padding-right:var(--telekom-spacing-unit-x4)}.thead{display:block;white-space:nowrap;border-bottom:1px solid var(--telekom-color-ui-faint);position:relative;background:var(--telekom-color-ui-state-fill-standard);z-index:1}.data-grid--freeze-header .thead{z-index:30;background-color:var(--telekom-color-background-canvas)}.thead-sortable{cursor:pointer}.thead-sortable:focus{box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-focus)}.thead__cell{display:inline-flex;align-items:center;height:var(--telekom-spacing-unit-x8);text-align:left;user-select:none;position:relative;padding:0 var(--telekom-spacing-unit-x4);color:var(--telekom-color-text-and-icon-additional)}.thead__cell--numbered{text-align:right;justify-content:flex-end}.thead__cell--selection{justify-content:center;text-align:center}.thead__cell--selection xds-checkbox::part(container){justify-content:center}.thead__title{color:var(--telekom-color-text-and-icon-standard)}.thead__text{font-size:var(--telekom-typography-font-size-small);line-height:var(--telekom-typography-line-spacing-standard);position:relative}.thead__arrow-top,.thead__arrow-bottom{position:absolute;display:none;top:4px;left:-12px;border:4px solid transparent}.thead__arrow-top{border-top:none;border-bottom:5px solid var(--telekom-color-text-and-icon-standard)}.thead__arrow-bottom{border-bottom:none;border-top:5px solid var(--telekom-color-text-and-icon-standard)}.thead__sort-prompt{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;background:none;border:0;opacity:1;cursor:pointer}.thead__divider{position:absolute;right:calc(-1 * var(--telekom-spacing-unit-x2));bottom:0px;height:100%;padding:19px var(--telekom-spacing-unit-x2) 0px;box-sizing:border-box;cursor:col-resize;z-index:1}.thead__divider-line{pointer-events:none;height:100%;width:1px;background:var(--telekom-color-ui-faint)}.thead__cell:first-child{padding-left:var(--telekom-spacing-unit-x6)}.thead__cell:focus{outline:none}.thead__cell[aria-sort='ascending'] .thead__arrow-top{display:block}.thead__cell[aria-sort='descending'] .thead__arrow-bottom{display:block}.thead__cell[aria-sort]:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}.thead__cell[aria-sort='none']:hover .thead__arrow-top{display:block;border-bottom:5px solid var(--telekom-color-text-and-icon-primary-hovered)}.thead__cell[aria-sort='ascending']:hover .thead__arrow-top{border-bottom:5px solid var(--telekom-color-text-and-icon-primary-hovered)}.thead__cell[aria-sort='descending']:hover .thead__arrow-bottom{border-top:5px solid var(--telekom-color-text-and-icon-primary-hovered)}.tbody{display:block}.tbody__row{display:block;white-space:nowrap}.tbody__mobile-title{display:none}.tbody__mobile-label{display:none}.tbody__cell{display:inline-block;margin:8px;padding:8px;overflow:hidden;line-height:32px}.tbody__cell--numbered{text-align:right}.tbody__cell--selection{justify-content:center;text-align:center}.tbody__cell--selection scale-checkbox::part(container),.tbody__cell--selection scale-checkbox [part='container']{justify-content:center}.tbody__cell scale-checkbox{width:auto}.tbody__nested{white-space:nowrap;padding:0px;margin:0px}.tbody__nested-cell{display:block;padding:var(--telekom-spacing-unit-x4);margin:0px}.tbody__cell:first-of-type{margin-left:var(--telekom-spacing-unit-x4);}.tbody__nested-cell:first-child{margin-left:0px}.data-grid--shade-alternate .tbody__row:nth-of-type(even),.data-grid--shade-alternate .tbody__nested:nth-of-type(even){background:var(--telekom-color-background-surface-subtle)}.data-grid__auto-width-check .tbody__cell{padding:0}.tbody__tag-list{list-style:none;padding:0;margin:0}.tbody__tag-list li{display:inline-block;margin-right:8px}.tbody__tag-list li:last-child{margin-right:0}.data-grid input[type='checkbox']{display:block;height:14px;margin:5px 4px}.tbody__text-cell{display:flex;align-items:center}.tbody__text-cell-prefix{display:inline-flex;align-items:center;margin-right:0.5em}.tbody__text-cell-suffix{display:inline-flex;align-items:center;margin-left:0.5em}.tbody__cell p{overflow:hidden;text-overflow:ellipsis}.tbody__cell scale-link{overflow:hidden;text-overflow:ellipsis}.tbody__bar-cell{display:inline-flex;width:100%}.tbody__cell scale-progress-bar{flex-grow:1}.tbody__actions scale-button{margin-right:var(--telekom-spacing-unit-x2)}.info{height:54px;position:relative;border-top:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-subtle);display:flex;justify-content:center}.info__selection{position:absolute;bottom:0;line-height:54px;left:var(--telekom-spacing-unit-x6)}.data-grid--hide-border:not(.data-grid--mobile) .info__pagination{border-bottom:1px solid var(--telekom-color-ui-subtle);border-right:1px solid var(--telekom-color-ui-subtle)}.data-grid--mobile{border:none;background:none}.data-grid--mobile .data-grid__title-block{padding-left:0;padding-right:46px}.data-grid--hide-menu.data-grid--mobile .data-grid__title-block{padding-right:0}.data-grid--mobile .data-grid__settings-menu{right:0}.data-grid--mobile .data-grid__scroll-container{height:auto !important}.data-grid--mobile .data-grid__table{display:block;height:auto !important}.data-grid--mobile .thead{display:none}.data-grid--mobile .tbody{display:block}.data-grid--mobile .tbody__row{display:block;position:relative;white-space:initial;margin:0 0 var(--telekom-spacing-unit-x2);padding:var(--telekom-spacing-unit-x6);border-radius:var(--telekom-radius-standard);background:var(--telekom-color-background-surface);border:1px solid var(--telekom-color-ui-faint)}.data-grid--mobile .tbody__row:hover{background:var(--telekom-color-background-surface)}.data-grid--mobile .tbody__mobile-title{display:block;margin-bottom:var(--telekom-spacing-unit-x2)}.data-grid--mobile .tbody__mobile-label{display:block}.data-grid--mobile .tbody__cell{display:flex;align-items:center;width:auto !important;padding:5px 0;margin:0;min-height:var(--telekom-spacing-unit-x6);line-height:var(--telekom-spacing-unit-x6);overflow:auto;overflow-x:hidden}.data-grid--mobile .tbody__cell--used-as-mobile-title{display:none}.data-grid--mobile .tbody__mobile-label{display:block;width:100px;flex-shrink:0;color:var(--telekom-color-text-and-icon-additional);font-size:var(--telekom-typography-font-size-small);font-weight:var(--telekom-typography-font-weight-medium)}.data-grid--mobile .tbody__cell:first-child{margin-left:0px}.data-grid--mobile .tbody__cell--selection{position:absolute;top:19px;right:12px}.data-grid--mobile .tbody__cell--numbered{position:absolute;top:19px;right:56px}.data-grid--mobile .tbody__cell scale-text-field,.data-grid--mobile .tbody__cell scale-dropdown{width:100%}.data-grid--mobile .tbody__nested{width:auto !important}.data-grid--mobile .tbody__nested-cell{padding:0;margin-bottom:var(--telekom-spacing-unit-x2)}.data-grid--mobile.data-grid--shade-alternate .tbody__row:nth-of-type(even){background:var(--telekom-color-background-surface)}.data-grid--mobile .info{height:auto;border-top:none;text-align:center}.data-grid--mobile .info__selection{position:relative;left:0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";

/* Reused Private Variables */
let resizeObserver;
const name = 'data-grid';
const DataGrid = class {
  /* 6. Lifecycle Events (call order) */
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scaleEdit = createEvent(this, "scale-edit", 7);
    this.scaleEditLegacy = createEvent(this, "scaleEdit", 7);
    this.scaleSort = createEvent(this, "scale-sort", 7);
    this.scaleSortLegacy = createEvent(this, "scaleSort", 7);
    /* 2. State Variables (alphabetical) */
    /** Used to force render after sorting/selection */
    this.forceRender = 0;
    /** Pagination starting index */
    this.paginationStart = 0;
    /** Table scroll value for frozen header  */
    this.scrollY = 0;
    /** (optional) Freeze header row from scrolling */
    this.freezeHeader = false;
    /** (optional) Heading string */
    this.heading = '';
    /** (optional) Set to true to remove border */
    this.hideBorder = false;
    /** (optional) Set to true to hide header row */
    this.hideHeader = false;
    /** (optional) Set to true to remove info footer block including pagination and selection status */
    this.hideInfo = false;
    /** (optional) Set to true to hide settings menu */
    this.hideMenu = false;
    /** (optional) Set to true to add numbers column */
    this.numbered = false;
    /** (optional) Set number of rows to display per pagination page */
    this.pageSize = Infinity;
    /** (optional) Set to true to add selection column */
    this.selectable = false;
    /** Read-only selection array - populated with raw data from selected rows */
    this.selection = [];
    /** (optional) Shade every second row darker */
    this.shadeAlternate = true;
    /** (optional) Set to false to hide table, used for nested tables to re-render upon toggle */
    this.visible = true;
    /** Stored active sorting column index, for state removal */
    this.activeSortingIndex = -1;
    /** Track component width to constrict nested content, which is necessary with table layout */
    this.contentWidth = 100;
    /** Flag to know to check for data completeness */
    this.dataNeedsCheck = true;
    /** Flag to know if rendering can commence */
    this.hasData = false;
    /** Flag that is true when width below a certain limit */
    this.isMobile = false;
    /** Flag that enough data supplied to warrant pagination */
    this.isPagination = false;
    /** Flag that is true if any fields are sortable */
    this.isSortable = false;
    /** Track container width to avoid re-calculating column stretching */
    this.lastContainerWidth = 100;
    /** Index of field to use as mobile title, if any */
    this.mobileTitleIndex = -1;
    /** Determine if auto-width parsing needed */
    this.needsAutoWidthParse = false;
    /** Force column resize after render */
    this.needsColumnResize = false;
    /** Auto-calculated number column width */
    this.numberColumnWidth = 0;
    /** Selection column width */
    this.selectionColumnWidth = 22;
    this.handleMenuListClick = (event) => {
      const menuItems = ['sortBy', 'toggleVisibility'];
      const currentMenuItemsIndex = menuItems.indexOf(event.target.id);
      if (currentMenuItemsIndex > -1) {
        // check if there is already opened flyout menu list with different id, if opened, close it
        const inactiveMenuItem = this.hostElement.shadowRoot.querySelector(`#${menuItems[1 - currentMenuItemsIndex]}List`);
        if (inactiveMenuItem) {
          inactiveMenuItem.setAttribute('opened', 'false');
        }
      }
    };
    // Bind certain callbacks to scope
    this.onDividerMove = this.onDividerMove.bind(this);
    this.onDividerUp = this.onDividerUp.bind(this);
    this.applyResponsiveClasses = this.applyResponsiveClasses.bind(this);
    this.updateColumnStretching = this.updateColumnStretching.bind(this);
  }
  componentWillLoad() {
    this.fieldsHandler();
    this.rowsHandler();
  }
  componentWillUpdate() { }
  componentDidRender() {
    if (this.needsAutoWidthParse) {
      this.calculateAutoWidths();
    }
    // Wait a frame to avoid warning about possible infinite loop
    setTimeout(() => {
      if (this.needsColumnResize) {
        this.updateColumnStretching();
      }
    });
  }
  componentDidLoad() {
    this.addResizeObserver();
  }
  componentDidUpdate() { }
  disconnectedCallback() {
    this.removeResizeObserver();
  }
  /* 7. Listeners */
  fieldsHandler() {
    this.parseFields();
    this.checkForMobileTitle();
    this.checkForSortableFields();
    this.dataNeedsCheck = true;
  }
  rowsHandler() {
    this.parseRows();
    this.setInitialRowProps();
    this.resetSortingToggle();
    this.dataNeedsCheck = true;
    // Set flag to dirty to redo column width with new data
    this.needsAutoWidthParse = true;
    this.needsColumnResize = true;
    if (
    // when we run out of items on the current page
    this.rows.length <= this.paginationStart &&
      // and we are NOT on the first page
      this.paginationStart - this.pageSize > -1) {
      // step back one page
      this.paginationStart = this.paginationStart - this.pageSize;
    }
  }
  /* 8. Public Methods */
  /* 9. Local Methods */
  parseFields() {
    if (this.fields && typeof this.fields === 'string') {
      this.fields = JSON.parse(this.fields);
    }
  }
  parseRows() {
    if (this.rows && typeof this.rows === 'string') {
      this.rows = JSON.parse(this.rows);
    }
  }
  setInitialRowProps() {
    if (!this.rows || !this.rows.length) {
      return;
    }
    this.rows.forEach((row, i) => {
      // Store indices of original order on rows for resetting sorting
      row.initialIndex = i;
      // Set initial selected flag
      row.selected = false;
    });
    // Determine if pagination will be required
    this.isPagination = this.pageSize <= this.rows.length - 1;
  }
  checkHasData() {
    // Need both fields and data content in order to populate
    if (!this.fields) {
      return false;
    }
    for (let i = 0; i < this.fields.length; i++) {
      // Use default type if none set
      if (!this.fields[i].type) {
        this.fields[i].type = DEFAULT_CELL_TYPE;
      }
      if (!CELL_TYPES[this.fields[i].type]) {
        // tslint:disable-next-line: no-console
        console.warn(`Unrecognised field type: "${this.fields[i].type}"`);
        return false;
      }
    }
    if (!this.rows || !this.rows.length) {
      return false;
    }
    for (let i = 0; i < this.rows.length; i++) {
      if (this.rows[i].length !== this.fields.length) {
        // tslint:disable-next-line: no-console
        console.warn(`Unable to render ${this.heading && `"${this.heading}" `}table: row data length not equal to supplied fields.`);
        return false;
      }
    }
    return true;
  }
  checkForMobileTitle() {
    // Reset for new data
    this.mobileTitleIndex = -1;
    if (!this.fields) {
      return;
    }
    this.fields.every(({ mobileTitle }, i) => {
      if (mobileTitle) {
        this.mobileTitleIndex = i;
        return false;
      }
      return true;
    });
  }
  checkForSortableFields() {
    this.isSortable = false;
    if (!this.fields) {
      return;
    }
    this.fields.forEach(({ sortable }) => {
      if (sortable) {
        this.isSortable = true;
      }
    });
  }
  getCssClassMap() {
    return classnames(name, !this.isMobile && `${name}--desktop`, this.isMobile && `${name}--mobile`, this.shadeAlternate && `${name}--shade-alternate`, this.freezeHeader && `${name}--freeze-header`, this.hideBorder && `${name}--hide-border`, this.hideMenu && `${name}--hide-menu`);
  }
  polyfillMousePosition(e) {
    // For touch
    if (e.changedTouches && e.changedTouches.length) {
      e.x = e.changedTouches[0].pageX;
      e.y = e.changedTouches[0].pageY;
    }
    // For cross browser support
    if (e.x === undefined) {
      e.x = e.clientX;
      e.y = e.clientY;
    }
  }
  getDefaultLongestContent({ rows, columnIndex }) {
    let maxLength = 0;
    let longestContent;
    rows.forEach((row) => {
      const length = row[columnIndex].toString().length;
      if (length > maxLength) {
        longestContent = row[columnIndex];
        maxLength = length;
      }
    });
    return longestContent;
  }
  // Selection handlers
  toggleSelectAll() {
    if (!this.elToggleSelectAll) {
      return;
    }
    this.rows.forEach((row) => (row.selected = this.elToggleSelectAll.checked));
    this.updateReadableSelection();
    this.forceRender++;
  }
  toggleRowSelect({ target }, rowIndex) {
    this.rows[rowIndex].selected = target.checked;
    this.updateReadableSelection();
    this.forceRender++;
  }
  updateReadableSelection() {
    this.selection.length = 0;
    this.rows.forEach((row) => row.selected && this.selection.push(row));
    // Check header checkbox if any or none are selected
    const selectAll = this.hostElement.shadowRoot.querySelector('.thead__cell--selection scale-checkbox');
    selectAll.checked = !!this.selection.length;
    // selectAll.indeterminate = !!this.selection.length;
  }
  // Sorting handlers
  toggleTableSorting(sortDirection, columnIndex, type) {
    // Remove sorting from previous column index
    if (this.activeSortingIndex > -1 &&
      this.activeSortingIndex !== columnIndex) {
      this.fields[this.activeSortingIndex].sortDirection = 'none';
    }
    // Store new column index
    this.activeSortingIndex = columnIndex;
    const newSortDirection = sortDirection === 'none'
      ? 'ascending'
      : sortDirection === 'ascending'
        ? 'descending'
        : 'none';
    this.fields[columnIndex].sortDirection = newSortDirection;
    this.sortTable(newSortDirection, type, columnIndex);
  }
  sortTable(sortDirection, type, columnIndex) {
    if (sortDirection === 'none') {
      this.rows.sort((a, b) => {
        return a.initialIndex - b.initialIndex;
      });
    }
    else {
      switch ((CELL_TYPES[type] &&
        CELL_TYPES[type].defaults &&
        CELL_TYPES[type].defaults.sortBy) ||
        CELL_DEFAULTS.sortBy) {
        case 'text':
          if (sortDirection === 'ascending') {
            this.rows.sort((a, b) => {
              const textA = a[columnIndex].toLowerCase();
              const textB = b[columnIndex].toLowerCase();
              return textA < textB ? -1 : textA > textB ? 1 : 0;
            });
          }
          else {
            this.rows.sort((a, b) => {
              const textA = a[columnIndex].toLowerCase();
              const textB = b[columnIndex].toLowerCase();
              return textA > textB ? -1 : textA < textB ? 1 : 0;
            });
          }
          break;
        case 'number':
          if (sortDirection === 'ascending') {
            this.rows.sort((a, b) => {
              return Number(a[columnIndex]) - Number(b[columnIndex]);
            });
          }
          else {
            this.rows.sort((a, b) => {
              return Number(b[columnIndex]) - Number(a[columnIndex]);
            });
          }
          break;
      }
    }
    this.forceRender++;
    // Trigger event
    this.triggerSortEvent(sortDirection, type, columnIndex);
  }
  resetSortingToggle() {
    if (this.activeSortingIndex > -1) {
      this.fields[this.activeSortingIndex].sortDirection = 'none';
    }
    this.activeSortingIndex = -1;
  }
  // Column resize handlers
  onDividerDown(e) {
    this.polyfillMousePosition(e);
    // For touch -  Prevent mousedown firing, and native scroll
    e.preventDefault();
    // Store divider elem for use in move and end events
    this.activeDivider = e.target;
    // Store initial value to calculate change
    e.target.downX = e.x;
    // Reset to avoid reapplying previous change
    this.activeDivider.interactiveWidth = 0;
    window.addEventListener('mousemove', this.onDividerMove);
    window.addEventListener('touchmove', this.onDividerMove);
    window.addEventListener('mouseup', this.onDividerUp);
    window.addEventListener('touchend', this.onDividerUp);
  }
  onDividerMove(e) {
    // TODO: calculate width stretchWidth to drop in correct location
    this.polyfillMousePosition(e);
    const { width, min, max } = this.activeDivider.dataset;
    const diff = e.x - this.activeDivider.downX;
    const newWidth = Math.min(Number(max), Math.max(Number(min), Number(width) + diff));
    const adjustedDiff = newWidth - Number(width);
    this.activeDivider.interactiveWidth = newWidth;
    // Give immediate visual feedback
    this.activeDivider.style.transform = `translateX(${adjustedDiff}px)`;
  }
  onDividerUp() {
    const { index } = this.activeDivider.dataset;
    // Store new width on the field data
    if (this.activeDivider.interactiveWidth) {
      this.fields[Number(index)].width = this.activeDivider.interactiveWidth;
    }
    // Reset visual feedback
    this.activeDivider.style.transform = `translateX(0px)`;
    window.removeEventListener('mousemove', this.onDividerMove);
    window.removeEventListener('touchmove', this.onDividerMove);
    window.removeEventListener('mouseup', this.onDividerUp);
    window.removeEventListener('touchend', this.onDividerUp);
    // Update column stretching before rendering
    this.needsColumnResize = true;
    this.updateColumnStretching();
    // Render to apply change
    this.forceRender++;
  }
  // Column visibility toggle handlers
  toggleVisibilityMenu(e) {
    e.preventDefault();
    // TODO: replace this with contextual menu component, when available
    const visibilityToggle = this.hostElement.shadowRoot.querySelector('.visibility-toggle');
    const menu = visibilityToggle.children[1];
    // By default
    if (visibilityToggle.style.display === 'none') {
      visibilityToggle.style.display = 'block';
      menu.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
    else {
      visibilityToggle.style.display = 'none';
    }
  }
  toggleColumnVisibility(value, columnIndex) {
    this.fields[columnIndex].visible = value;
    this.forceRender++;
    // Update column stretching
    this.needsColumnResize = true;
    this.updateColumnStretching();
  }
  // Resize handlers
  addResizeObserver() {
    if (!resizeObserver) {
      // @ts-ignore
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // Skip if table not visible/attached
          if (entry.target.offsetParent === null) {
            return;
          }
          entry.target.applyResponsiveClasses(entry);
          entry.target.updateColumnStretching();
        }
      });
    }
    this.elMmainContainer = this.hostElement.shadowRoot.querySelector(`.${name}`);
    // Add this instance's callbacks, as resizeObserver is reused
    this.elMmainContainer.applyResponsiveClasses = this.applyResponsiveClasses;
    this.elMmainContainer.updateColumnStretching = this.updateColumnStretching;
    resizeObserver.observe(this.elMmainContainer);
  }
  removeResizeObserver() {
    if (this.elMmainContainer) {
      resizeObserver.unobserve(this.elMmainContainer);
    }
  }
  applyResponsiveClasses() {
    // Apply container-scoped media-query-style classes
    const newIsMobile = this.elMmainContainer.offsetWidth <= 500;
    if (this.isMobile !== newIsMobile) {
      this.forceRender++;
    }
    this.isMobile = newIsMobile;
  }
  updateColumnStretching() {
    // NOTE: any styling padding/margin width changes need to be adjusted here as well
    // Ignore auto-width-check content renders
    if (this.needsAutoWidthParse) {
      return;
    }
    const container = this.elMmainContainer;
    // Minus 2 for border
    const containerWidth = container.offsetWidth - 2;
    const hasContainerWidthChanged = this.lastContainerWidth !== containerWidth;
    // If width hasn't changed, don't re-calculate
    if (!hasContainerWidthChanged && !this.needsColumnResize) {
      return;
    }
    this.needsColumnResize = false;
    this.lastContainerWidth = containerWidth;
    // Don't calculate when mobile layout
    if (container.offsetWidth <= 500) {
      return;
    }
    // The theoretical target width - ignoring any previously applied stretching
    const targetContentWidth = (() => {
      let total = 0;
      // Extra margin on first column
      total += 8;
      if (this.numbered) {
        // 32 for padding+margin
        total += this.numberColumnWidth + 32;
        // this.selectionColumnWidth;
      }
      if (this.selectable) {
        // 32 for padding+margin
        total += this.selectionColumnWidth + 32;
        // If both selectable and numbered - adjust for reduced margin between
        if (this.numbered) {
          total -= 16;
        }
      }
      // Add each visible column's target width
      this.fields.forEach(({ visible = true, width }) => {
        if (visible) {
          // 32 for padding+margin
          total += width + 32;
        }
      });
      return total;
    })();
    // Update value passed to nested content to overcome table display layout
    this.contentWidth = Math.max(targetContentWidth, containerWidth);
    const diff = containerWidth - targetContentWidth;
    if (diff <= 0) {
      // content larger than container (scrollbar), remove all stretching
      this.fields.forEach((field) => (field.stretchWidth = 0));
    }
    else {
      // container larger than content (gap to the right), calculate stretching
      // If stretchWeight set, divide value between total to get final weight
      // If stretchWeight unset, share remainder of 1 (if any) between all unset cols
      let totalSetWeight = 0;
      let unsetColsCount = 0;
      this.fields.forEach(({ visible = true, stretchWeight }) => {
        // Disregard invisible columns
        if (!visible) {
          return;
        }
        if (typeof stretchWeight === 'number') {
          totalSetWeight += stretchWeight;
        }
        else {
          unsetColsCount++;
        }
      });
      const remainderWeight = Math.max(0, 1 - totalSetWeight);
      // Set total to be divided against to be above 1 to keep total set/unset weights equal to 1
      totalSetWeight = Math.max(1, totalSetWeight);
      this.fields.forEach((field) => {
        const { visible = true, stretchWeight } = field;
        if (!visible) {
          return;
        }
        // Actual stretch weight, out of a total 1 for all columns
        let weight = 0;
        if (typeof stretchWeight === 'number') {
          weight = stretchWeight / totalSetWeight;
        }
        else if (remainderWeight > 0) {
          weight = remainderWeight / unsetColsCount;
        }
        // Apply stretching with the weight percentage
        field.stretchWidth = diff * weight;
      });
    }
    this.forceRender++;
  }
  // Auto column width handlers
  calculateAutoWidths() {
    let isVisible = false;
    const columns = this.hostElement.shadowRoot.querySelectorAll(`.${name}__auto-width-check td`);
    columns.forEach((cell) => {
      // Make sure table is actually rendered (eg not display:none etc)
      if (!isVisible && cell.offsetParent !== null) {
        isVisible = true;
      }
      if (!isVisible) {
        return;
      }
      // Update field width with that of largest content
      this.fields[cell.dataset.columnindex].width = cell.clientWidth;
    });
    if (!isVisible) {
      return;
    }
    // Wrap in setTimeout to avoid warning about forcing render within render callback
    setTimeout(() => {
      this.needsAutoWidthParse = false;
      this.forceRender++;
    });
  }
  // Event triggers
  triggerSortEvent(sortDirection, type, columnIndex) {
    const data = {
      rows: this.rows,
      type,
      sortDirection,
      columnIndex,
    };
    emitEvent(this, 'scaleSort', data);
  }
  triggerEditEvent(value, rowIndex, columnIndex) {
    const data = {
      rows: this.rows,
      rowIndex,
      columnIndex,
      value,
    };
    emitEvent(this, 'scaleEdit', data);
    // Force render for checkboxes
    this.forceRender++;
  }
  onTableScroll() {
    if (!this.freezeHeader || this.hideHeader) {
      return;
    }
    // Freeze header
    const scrollY = this.elScrollContainer.scrollTop;
    this.elTableHead.style.transform = `translateY(${scrollY}px)`;
  }
  renderSettingsMenu() {
    return (h("scale-menu-flyout", { class: `${name}__settings-menu` }, h("scale-button", { slot: "trigger", variant: "secondary", "icon-only": true, "data-sortable": this.isSortable }, h("scale-icon-service-settings", { accessibilityTitle: "Table options" })), h("scale-menu-flyout-list", null, this.isSortable && (h("scale-menu-flyout-item", { id: "sortBy", onClick: this.handleMenuListClick }, h("scale-icon-action-sort", { slot: "prefix" }), "Sort By", h("scale-menu-flyout-list", { slot: "sublist", id: "sortByList" }, this.fields.map(({ label, type, sortable, sortDirection = 'none' }, columnIndex) => {
      if (!sortable) {
        return '';
      }
      return (h("scale-menu-flyout-item", { "onScale-select": () => this.toggleTableSorting(sortDirection, columnIndex, type) }, sortDirection === 'ascending' && (h("scale-icon-navigation-collapse-up", { size: 16, slot: "prefix" })), sortDirection === 'descending' && (h("scale-icon-navigation-collapse-down", { size: 16, slot: "prefix" })), sortDirection === 'none' && (h("scale-icon-navigation-collapse-up", { size: 16, slot: "prefix", style: { opacity: '0' } })), label || type));
    })))), h("scale-menu-flyout-item", { id: "toggleVisibility", onClick: this.handleMenuListClick }, h("scale-icon-action-hide-password", { slot: "prefix" }), "Toggle Visibility", h("scale-menu-flyout-list", { slot: "sublist", "close-on-select": "false", id: "toggleVisibilityList" }, this.fields.map(({ label, type, visible = CELL_TYPES[type].defaults.visible !== undefined
      ? CELL_TYPES[type].defaults.visible
      : CELL_DEFAULTS.visible, }, columnIndex) => {
      return (h("scale-menu-flyout-item", { checkable: "checkbox", checked: !!visible, "onScale-select": () => this.toggleColumnVisibility(!visible, columnIndex) }, label || type));
    }))), this.selectable && (h("scale-menu-flyout-item", { "onScale-select": () => {
        this.elToggleSelectAll.checked =
          !this.elToggleSelectAll.checked;
        this.toggleSelectAll();
      } }, h("scale-icon", { slot: "prefix", path: "M20.9328 10.6668C20.5132 10.6668 20.1731 11.0069 20.1731 11.4265V20.3269H1.5194V1.67309H16.5049C16.9245 1.67309 17.2646 1.33292 17.2646 0.913386C17.2646 0.49385 16.9245 0.153687 16.5049 0.153687H0.759699C0.340163 0.153687 0 0.49385 0 0.913386V21.0866C0 21.5062 0.340163 21.8463 0.759699 21.8463H20.9328C21.3523 21.8463 21.6925 21.5062 21.6925 21.0866V11.4265C21.6925 11.0069 21.3524 10.6668 20.9328 10.6668ZM23.7774 0.653387C23.4807 0.356739 22.9997 0.356739 22.703 0.653387L10.3293 13.0272L7.25501 9.9529C6.9583 9.65625 6.47732 9.65625 6.18061 9.9529C5.88396 10.2496 5.88396 10.7306 6.18061 11.0273L9.7921 14.6388C9.94045 14.7871 10.1349 14.8613 10.3293 14.8613C10.5237 14.8613 10.7181 14.7871 10.8665 14.6388L23.7774 1.72778C24.0741 1.43108 24.0741 0.950095 23.7774 0.653387Z" }), "Select / Deselect All")), h("slot", { name: "menu" }))));
  }
  renderTable() {
    if (this.needsAutoWidthParse) {
      return this.renderAutoWidthCheck();
    }
    return (h("div", { ref: (el) => (this.elScrollContainer = el), class: `${name}__scroll-container`, style: { height: this.height || 'auto' }, onScroll: () => this.onTableScroll() }, h("table", { class: `${name}__table` }, this.renderTableHead(), this.renderTableBody())));
  }
  renderAutoWidthCheck() {
    // Calculate number column width
    this.numberColumnWidth = this.rows.length.toString().length * 9;
    // Get columns with width option set to 'auto'
    const autoCols = [];
    this.fields.forEach(({ type, width = CELL_TYPES[type].defaults.width || CELL_DEFAULTS.width, }, columnIndex) => {
      if (width === 'auto') {
        autoCols.push(columnIndex);
      }
    });
    if (!autoCols.length) {
      this.needsAutoWidthParse = false;
      return this.renderTable();
    }
    return (h("table", { class: `${name}__auto-width-check ${name}__table` }, h("tr", { class: `tbody__row` }, autoCols.map((columnIndex) => {
      const field = this.fields[columnIndex];
      const { type, cell = CELL_TYPES[type] } = field;
      // Find largest content of each type. Use custom getter if exists
      const getLongestContent = cell.getLongestContent || this.getDefaultLongestContent;
      const content = getLongestContent({
        rows: this.rows,
        columnIndex,
        field,
      });
      return (h("td", { class: `tbody__cell`, style: { width: 'auto' }, "data-columnindex": columnIndex }, cell.render({
        field,
        content,
        component: this,
        isAutoWidthCheck: true,
      })));
    }))));
  }
  renderTableHead() {
    return (h("thead", { ref: (el) => (this.elTableHead = el), class: `thead ${this.hideHeader ? 'sr-only' : ''}` }, h("tr", { class: `thead__row` }, this.numbered && this.renderTableHeadNumberedCell(), this.selectable && this.renderTableHeadSelectableCell(), this.fields.map(({ type, label = '', 
    // Params can be set optionally in the fields options, in the cell type
    // descriptor class, or falls back to common defaults
    visible = CELL_TYPES[type].defaults.visible !== undefined
      ? CELL_TYPES[type].defaults.visible
      : CELL_DEFAULTS.visible, sortable, sortDirection = 'none', resizable = CELL_TYPES[type].defaults.resizable !== undefined
      ? CELL_TYPES[type].defaults.resizable
      : CELL_DEFAULTS.resizable, width = CELL_TYPES[type].defaults.width || CELL_DEFAULTS.width, minWidth = CELL_TYPES[type].defaults.minWidth ||
      CELL_DEFAULTS.minWidth, maxWidth = CELL_TYPES[type].defaults.maxWidth ||
      CELL_DEFAULTS.maxWidth, textAlign = CELL_TYPES[type].defaults.textAlign ||
      CELL_DEFAULTS.textAlign, stretchWidth = 0, }, columnIndex) => {
      if (!visible) {
        return;
      }
      const props = {
        class: `thead__cell`,
        style: {
          width: `calc(${width}px + ${stretchWidth}px)`,
          'justify-content': textAlign,
        },
        'data-type': type,
      };
      if (sortable) {
        props['aria-sort'] = sortDirection;
      }
      return (h("th", Object.assign({ title: "Activate to sort column" }, props, (sortable
        ? {
          onKeyDown: (event) => {
            if (['Enter', ' '].includes(event.key)) {
              this.toggleTableSorting(sortDirection, columnIndex, type);
            }
          },
          onClick: () => {
            this.toggleTableSorting(sortDirection, columnIndex, type);
          },
          tabindex: 0,
          class: `${props.class} thead-sortable`,
        }
        : {})), h("div", { class: `thead__title` }, h("span", { class: `thead__text` }, sortable && h("span", { class: `thead__arrow-top` }), sortable && h("span", { class: `thead__arrow-bottom` }), label)), resizable && (h("div", { class: `thead__divider`, "data-index": columnIndex, "data-width": width, "data-min": minWidth, "data-max": maxWidth, onMouseDown: (e) => this.onDividerDown(e), onTouchStart: (e) => this.onDividerDown(e), "aria-hidden": "true" }, h("div", { class: `thead__divider-line` })))));
    }))));
  }
  renderTableHeadNumberedCell() {
    return (h("th", { class: `thead__cell  thead__cell--numbered`, style: { width: this.numberColumnWidth + 'px' } }, h("span", { class: "scl-body" }, "#")));
  }
  renderTableHeadSelectableCell() {
    const style = {
      width: this.selectionColumnWidth + 'px',
    };
    // Make selection and numbered cells closer than regular padding
    if (this.numbered) {
      style.paddingLeft = '0px';
    }
    return (h("th", { class: `thead__cell thead__cell--selection`, style: style, title: "Select" }, h("scale-checkbox", { ref: (el) => (this.elToggleSelectAll = el), onScaleChange: () => this.toggleSelectAll(), hideLabel: true, "aria-label": "Select" })));
  }
  renderTableBody() {
    return (h("tbody", { class: `tbody` }, (() => {
      const rows = [];
      // Pagination functionality
      const total = this.rows.length;
      const start = this.paginationStart;
      const end = Math.min(total, this.paginationStart + this.pageSize);
      for (let rowIndex = start; rowIndex < end; rowIndex++) {
        const rowData = this.rows[rowIndex];
        const rowNestedContent = [];
        let isNestedExpanded = false;
        rows.push(h("tr", { class: `tbody__row` }, this.renderMobileTitle(rowData), this.numbered && this.renderTableBodyNumberedCell(rowIndex), this.selectable &&
          this.renderTableBodySelectableCell(rowIndex), rowData.map((cellContent, columnIndex) => {
          const field = this.fields[columnIndex];
          const visible = field.visible !== undefined
            ? field.visible
            : CELL_TYPES[field.type].defaults.visible !== undefined
              ? CELL_TYPES[field.type].defaults.visible
              : CELL_DEFAULTS.visible;
          if (!visible) {
            return;
          }
          // Add rows nested tables to array
          if (field.type === 'html') {
            if (!!cellContent.isExpanded) {
              isNestedExpanded = true;
            }
            rowNestedContent.push({
              content: cellContent,
            });
          }
          return this.renderTableCell(field, cellContent, rowIndex, columnIndex);
        })));
        // Add second row for nested content if any within the row are expanded
        if (rowNestedContent.length) {
          rows.push(h("div", { class: `tbody__nested`, style: {
              width: this.contentWidth + 'px',
              display: isNestedExpanded ? 'block' : 'none',
            } }, h("td", { class: `tbody__nested-cell` }, rowNestedContent.map(({ content }) => {
            return (h("div", { ref: (el) => {
                if (el) {
                  // Remove content from other pages
                  let child = el.lastElementChild;
                  while (child) {
                    el.removeChild(child);
                    child = el.lastElementChild;
                  }
                  // Append actual content
                  el.appendChild(content);
                }
              } }));
          }))));
        }
      }
      return rows;
    })()));
  }
  renderMobileTitle(rowData) {
    if (this.mobileTitleIndex === -1) {
      return h("h5", { class: `tbody__mobile-title scl-h5` }, "\u00A0");
    }
    return (h("h5", { class: `tbody__mobile-title scl-h5` }, rowData[this.mobileTitleIndex]));
  }
  renderTableBodyNumberedCell(rowIndex) {
    return (h("td", { class: `tbody__cell tbody__cell--numbered`, style: { width: this.numberColumnWidth + 'px' } }, h("p", { class: "scl-body" }, rowIndex + 1)));
  }
  renderTableBodySelectableCell(rowIndex) {
    const style = {
      width: this.selectionColumnWidth + 'px',
    };
    if (this.numbered) {
      style.marginLeft = '0px';
      style.paddingLeft = '0px';
    }
    return (h("td", { title: this.rows[rowIndex][0], class: `tbody__cell tbody__cell--selection`, style: style }, h("scale-checkbox", { checked: this.rows[rowIndex].selected, onScaleChange: (e) => this.toggleRowSelect(e, rowIndex), hideLabel: true })));
  }
  renderTableCell(field, content, rowIndex, columnIndex) {
    const cell = CELL_TYPES[field.type];
    const { label, 
    // Use custom field, or default defined in class, or fallback default
    width = cell.defaults.width || CELL_DEFAULTS.width, stretchWidth = 0, mobileTitle, // For text cells
     } = field;
    return (h("td", { class: `tbody__cell${mobileTitle ? ` tbody__cell--used-as-mobile-title` : ``}`, style: { width: `calc(${width}px + ${stretchWidth}px)` } }, h("div", { class: `tbody__mobile-label` }, label), cell.render({
      field,
      content,
      component: this,
      rowIndex,
      columnIndex,
    })));
  }
  renderTableInfo() {
    return (h("div", { class: `info` }, this.selectable && !!this.selection.length && (h("div", { class: `info__selection` }, `${this.selection.length} row${this.selection.length > 1 ? 's' : ''} selected`)), this.isPagination && (h("scale-pagination", { class: `info__pagination`, hideBorder: !this.isMobile, startElement: this.paginationStart, totalElements: this.rows.length, pageSize: this.pageSize, onScalePagination: ({ detail }) => (this.paginationStart = detail.startElement) }))));
  }
  /* 10. Render */
  render() {
    if (this.dataNeedsCheck) {
      this.hasData = this.checkHasData();
    }
    return (h(Host, { style: {
        display: this.visible ? 'block' : 'none',
      } }, this.styles && h("style", null, this.styles), h("div", { class: this.getCssClassMap() }, h("div", { class: `${name}__title-block` }, this.heading && (h("h4", { class: `${name}__heading scl-h5` }, this.heading)), h("div", null, h("slot", null)), this.hasData && this.renderSettingsMenu()), this.hasData && this.renderTable(), this.hasData &&
      !this.hideInfo &&
      !this.needsAutoWidthParse &&
      (this.selectable || this.isPagination) &&
      this.renderTableInfo())));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "fields": ["fieldsHandler"],
    "rows": ["rowsHandler"]
  }; }
};
DataGrid.style = dataGridCss;

export { DataGrid as scale_data_grid };
