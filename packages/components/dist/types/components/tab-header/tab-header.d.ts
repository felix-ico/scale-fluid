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
export declare class TabHeader {
  generatedId: number;
  container: HTMLElement;
  hostElement: HTMLElement;
  /** True for a disabled Tabnavigation */
  disabled?: boolean;
  /** True for smaller height and font size */
  /** @deprecated - size should replace small */
  small?: boolean;
  /** (optional) size  */
  size: 'small' | 'large';
  /** (optional) Injected CSS styles */
  styles?: string;
  selected: boolean;
  hasFocus: boolean;
  selectedChanged(newValue: boolean): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  /**
   * Find slotted icons, and if any, add the `selected` attribute accordingly.
   */
  updateSlottedIcon(): void;
  /**
   * Set any children icon's size according the button size.
   */
  setChildrenIconSize(): void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
