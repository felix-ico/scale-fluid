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
import { Event, EventEmitter } from '../../stencil-public-runtime';
interface InputChangeEventDetail {
  value: string | number | boolean | undefined | null;
}
export declare class Textarea {
  hostElement: HTMLElement;
  /** (optional) Input name */
  name?: string;
  /** (optional) Input label */
  label: string;
  /** (optional) textarea row */
  rows?: number;
  /** (optional) textarea column */
  cols?: number;
  /** (optional) Input helper text */
  helperText?: string;
  /** @deprecated - invalid should replace status */
  status?: string;
  /** (optional) Input status */
  invalid?: boolean;
  /** (optional) Input max length */
  maxLength?: number;
  /** (optional) Input min length */
  minLength?: number;
  /** (optional) Input placeHolder */
  placeholder?: string;
  /** (optional) Input disabled */
  disabled?: boolean;
  /** (optional) Input readonly */
  readonly?: boolean;
  /** (optional) Input required */
  required?: boolean;
  /** (optional) Input counter */
  counter?: boolean;
  /** (optional) textarea resize */
  resize?: 'unset' | 'none' | 'vertical' | 'horizontal';
  /** (optional) Input value */
  value?: string | number | null;
  /** (optional) Input checkbox id */
  inputId?: string;
  /** (optional) input background transparent */
  transparent?: boolean;
  /** (optional) the input should automatically get focus when the page loads. */
  inputAutofocus?: boolean;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** Emitted when a keyboard input occurred. */
  scaleInput: EventEmitter<KeyboardEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleInputLegacy: EventEmitter<KeyboardEvent>;
  /** Emitted when the value has changed. */
  scaleChange: EventEmitter<InputChangeEventDetail>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter<InputChangeEventDetail>;
  /** Emitted when the input has focus. */
  scaleFocus: EventEmitter<void>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleFocusLegacy: EventEmitter<void>;
  /** Emitted when the input loses focus. */
  scaleBlur: EventEmitter<void>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleBlurLegacy: EventEmitter<void>;
  /** Emitted on keydown. */
  scaleKeyDown: EventEmitter<KeyboardEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleKeyDownLegacy: EventEmitter<KeyboardEvent>;
  /** Whether the input element has focus */
  hasFocus: boolean;
  private focusableElement;
  componentWillLoad(): void;
  componentDidRender(): void;
  emitChange(): void;
  handleInput: (event: Event) => void;
  handleChange: (event: Event) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  render(): any;
  getCssClassMap(): string;
}
export {};
