'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const iconCss$2 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertError = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M23.075 18L14.6 3.32a3 3 0 00-5.2 0L.925 18a3 3 0 002.6 4.5H20.5a3 3 0 002.575-4.5zM11 8.25h2v6.5h-2v-6.5zm1 10.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M11.95 1.8c1 0 2 .5 2.6 1.5l8.5 14.7c1.2 2-.25 4.5-2.55 4.5H3.55C1.25 22.5-.2 20 .95 18l8.4-14.7c.6-1 1.6-1.5 2.6-1.5zm.105 1.5h-.11a1.44 1.44 0 00-1.245.75l-8.5 14.7c-.4.7-.15 1.25 0 1.5s.5.75 1.3.75h17c.75 0 1.15-.5 1.25-.75.15-.25.4-.8.05-1.5l-8.5-14.7c-.4-.7-1.05-.75-1.3-.75zM12 16.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm1-8V15h-2V8.5h2z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
AlertError.style = iconCss$2;

const iconCss$1 = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertInformation = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm1 16h-2v-6.5h2V17zm-1-8a1.25 1.25 0 110-2.5A1.25 1.25 0 0112 9z" }))) : (index.h("g", null, index.h("path", { "fill-rule": "evenodd", d: "M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm1 8V17h-2v-6.5h2zm-1-4A1.25 1.25 0 1112 9a1.25 1.25 0 010-2.5z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
AlertInformation.style = iconCss$1;

const iconCss = "scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";

const AlertSuccess = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** (optional) The width and height in pixels */
    this.size = 24;
    /** (optional) Sets the icon color via the `fill` attribute */
    this.fill = 'currentColor';
    /** (optional) Alias for `fill` */
    this.color = 'currentColor';
    /** (optional) If `true`, the icon changes visually */
    this.selected = false;
    /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
    this.decorative = false;
  }
  connectedCallback() {
    if (!this.hostElement.hasAttribute('styles')) {
      this.hostElement.style.display = 'inline-flex';
    }
  }
  render() {
    const ariaHidden = this.decorative ? { 'aria-hidden': 'true' } : {};
    return (index.h(index.Host, null, index.h("svg", Object.assign({ class: "scale-icon", xmlns: "http://www.w3.org/2000/svg", width: this.size, height: this.size, viewBox: "0 0 24 24" }, ariaHidden), this.accessibilityTitle && index.h("title", null, this.accessibilityTitle), index.h("g", { fill: ((this.fill === 'currentColor') ? this.color : this.fill) }, this.selected ? (index.h("g", null, index.h("path", { d: "M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11A11 11 0 0011 0zm5.53 8.295L9.665 15.16 5.47 10.965a.75.75 0 111.06-1.06l3.135 3.135 5.805-5.805a.755.755 0 011.06 0 .745.745 0 010 1.06z", "fill-rule": "evenodd" }))) : (index.h("g", null, index.h("path", { d: "M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm0 20.5c-5.239 0-9.5-4.262-9.5-9.5 0-5.239 4.261-9.5 9.5-9.5 5.238 0 9.5 4.261 9.5 9.5 0 5.238-4.262 9.5-9.5 9.5z" }), index.h("path", { d: "M15.47 7.236l-5.804 5.803L6.53 9.903a.75.75 0 10-1.06 1.06l4.197 4.198 6.864-6.864a.75.75 0 10-1.061-1.061z" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
AlertSuccess.style = iconCss;

exports.scale_icon_alert_error = AlertError;
exports.scale_icon_alert_information = AlertInformation;
exports.scale_icon_alert_success = AlertSuccess;
