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
interface InputChangeEventDetail {
  value: string | number | boolean | undefined | null;
}
export declare class RadioButton {
  hostElement: HTMLElement;
  /** (optional) Input name */
  name?: string;
  /** (optional) Input label */
  label: string;
  /** (optional) Input helper text */
  helperText?: string;
  /** @deprecated - invalid should replace status */
  status?: string;
  /** (optional) Input status */
  invalid?: boolean;
  /** (optional) Input disabled */
  disabled?: boolean;
  /** (optional) Input checked */
  checked?: boolean;
  /** (optional) Input value */
  value?: string | number | null;
  /** (optional) Input checkbox id */
  inputId?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  scaleChange: EventEmitter<InputChangeEventDetail>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter<InputChangeEventDetail>;
  componentWillLoad(): void;
  componentDidRender(): void;
  handleCheckedChange: (event: any) => void;
  handleClick: (event: any) => void;
  uncheckSiblings(): void;
  getSiblingRadios(): HTMLElement[];
  renderHelperIcon(): any;
  render(): any;
  getCssClassMap(): string;
}
export {};
