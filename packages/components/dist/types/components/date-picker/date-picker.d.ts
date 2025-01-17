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
import { EventEmitter } from '../../stencil-public-runtime';
import { DuetDatePickerChangeEvent, DuetDatePickerDirection, DuetDatePickerFocusEvent, DuetDatePicker } from '@duetds/date-picker/dist/types/components/duet-date-picker/duet-date-picker';
import { DuetLocalizedText } from '@duetds/date-picker/dist/types/components/duet-date-picker/date-localization';
export declare class DatePicker {
  duetInput: DuetDatePicker & HTMLElement;
  hostElement: HTMLElement;
  /**
   * Name of the date picker input.
   */
  name: string;
  /** @deprecated in v3 in favor of localization.calendarHeading */
  popupTitle: string;
  /**
   * Adds a unique identifier for the date picker input. Use this instead of html `id` attribute.
   */
  identifier: string;
  /**
   * Makes the date picker input component disabled. This prevents users from being able to
   * interact with the input, and conveys its inactive state to assistive technologies.
   */
  disabled: boolean;
  /**
   * Defines a specific role attribute for the date picker input.
   */
  role: string;
  /**
   * Forces the opening direction of the calendar modal to be always left or right.
   * This setting can be useful when the input is smaller than the opening date picker
   * would be as by default the picker always opens towards right.
   */
  direction: DuetDatePickerDirection;
  /**
   * Should the input be marked as required?
   */
  required: boolean;
  /**
   * Date value. Must be in IS0-8601 format: YYYY-MM-DD.
   */
  value: string;
  /**
   * Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
   * This setting can be used alone or together with the max property.
   */
  min: string;
  /**
   * Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD.
   * This setting can be used alone or together with the min property.
   */
  max: string;
  /**
   * Which day is considered first day of the week? `0` for Sunday, `1` for Monday, etc.
   * Default is Monday.
   */
  firstDayOfWeek?: any;
  /**
   * Button labels, day names, month names, etc, used for localization.
   * Default is English.
   */
  localization?: DuetLocalizedText & {
    today: string;
  };
  /**
   * Date adapter, for custom parsing/formatting.
   * Must be object with a `parse` function which accepts a `string` and returns a `Date`,
   * and a `format` function which accepts a `Date` and returns a `string`.
   * Default is IS0-8601 parsing and formatting.
   */
  dateAdapter?: any;
  /** (optional) Helper text */
  helperText?: string;
  /** @deprecated - invalid should replace status */
  status?: string;
  /** (optional) invalid status */
  invalid?: boolean;
  /** (optional) Label */
  label: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** @deprecated */
  size?: string;
  /** Whether the input element has focus */
  hasFocus: boolean;
  /** Whether the input element has value */
  hasValue: boolean;
  /**
   * Events section.
   */
  /**
   * Event emitted when a date is selected.
   */
  scaleChange: EventEmitter<DuetDatePickerChangeEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter<DuetDatePickerChangeEvent>;
  /**
   * Event emitted the date picker input is blurred.
   */
  scaleBlur: EventEmitter<DuetDatePickerFocusEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleBlurLegacy: EventEmitter<DuetDatePickerFocusEvent>;
  /**
   * Event emitted the date picker input is focused.
   */
  scaleFocus: EventEmitter<DuetDatePickerFocusEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleFocusLegacy: EventEmitter<DuetDatePickerFocusEvent>;
  private helperTextId;
  private mo;
  /**
   * Public methods API
   */
  /**
   * Sets focus on the date picker's input. Use this method instead of the global `focus()`.
   */
  setFocus(): Promise<void>;
  /**
   * Show the calendar modal, moving focus to the calendar inside.
   */
  show(): Promise<void>;
  /**
   * Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus
   * returning to the date picker's button. Default is true.
   */
  hide(moveFocusToButton?: boolean): Promise<void>;
  /**
   * Watch `value` property for changes and update `hasValue` based on that.
   */
  onValueChange(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  /**
   * Fix JAWS reading the day twice, e.g. "19 19. August"
   * It'd probably make sense to open a PR in duetds/date-picker
   * https://github.com/duetds/date-picker/blob/master/src/components/duet-date-picker/date-picker-day.tsx#L61
   */
  adjustButtonsLabelsForA11y: () => void;
  disconnectedCallback(): void;
  handleKeyPress(e: any): void;
  render(): any;
}
