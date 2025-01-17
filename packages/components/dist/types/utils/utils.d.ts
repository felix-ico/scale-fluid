import { ComponentInterface } from '../stencil-public-runtime';
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
export declare const hasShadowDom: (el: HTMLElement) => boolean;
export declare const isPseudoClassSupported: (pseudoClass: any) => boolean;
/**
 * Call `emit` on component events twice.
 * One for the legacy camel-cased event, one for the new kebab-cased.
 * e.g. for the event `scaleChange` it will do `instance.scaleChange.emit()` and `instance.scaleChangeLegacy.emit()`.
 * It expects both `scaleChange` and `scaleChangeLegacy` event-decorated properties to exist on the component.
 *
 * @param instance {ComponentInterface} - The component instance, aka `this`
 * @param eventKey {string} - The event property, e.g. `scaleChange`
 * @param detail {any} - The custom event `detail`
 * @returns {CustomEvent[]} - The events emitted
 */
export declare function emitEvent(instance: ComponentInterface, eventKey: string, detail?: any): CustomEvent[];
export declare function isClickOutside(event: MouseEvent, host: HTMLElement): boolean;
export interface ScaleIcon extends Element {
  size?: number;
}
export declare const isScaleIcon: (el: Node) => boolean;
export declare function readMaybeJSONData(data: any): any;
