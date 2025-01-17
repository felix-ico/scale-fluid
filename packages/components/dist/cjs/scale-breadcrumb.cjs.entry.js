'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');
const index$1 = require('./index-53f5a5fc.js');

const breadcrumbCss = ":host{--spacing-left:calc(-1 * var(--telekom-spacing-unit-x2));--font-size-list-item:var(--telekom-typography-font-size-caption);--color-separator:var(--telekom-color-ui-regular);--spacing-y-item:var(--telekom-spacing-unit-x1);--spacing-x-item:var(--telekom-spacing-unit-x2);--color-link:var(--telekom-color-text-and-icon-additional);--radius-link:var(--telekom-radius-standard);--color-link-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-link-active:var(--telekom-color-text-and-icon-primary-pressed);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--color-current:var(--telekom-color-text-and-icon-standard)}.breadcrumb{margin-left:var(--spacing-left)}.breadcrumb__list{display:flex;list-style:none;margin-top:0;padding-left:0;margin-bottom:0}.breadcrumb__list-item{display:inline-flex;font-size:var(--font-size-list-item);align-items:center}.breadcrumb__separator{display:flex;color:var(--color-separator)}.breadcrumb__item,.breadcrumb__link{padding:var(--spacing-y-item) var(--spacing-x-item)}.breadcrumb__link{text-decoration:none;color:var(--color-link);border-radius:var(--radius-link)}.breadcrumb__link:hover{color:var(--color-link-hover)}.breadcrumb__link:active{color:var(--color-link-active)}.breadcrumb__link:focus{outline:var(--focus-outline)}.breadcrumb__current{color:var(--color-current)}";

const Breadcrumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.linksArray = [];
    this.separatorSlot = null;
  }
  componentWillLoad() {
    if (this.linksArray.length === 0) {
      this.setLinksArray();
    }
    this.separatorSlot = this.hostElement.querySelector('[slot="separator"]');
  }
  componentDidLoad() {
    const observer = new MutationObserver(() => {
      this.setLinksArray();
    });
    observer.observe(this.hostElement, {
      attributes: false,
      childList: true,
      subtree: true,
    });
    this.mo = observer;
  }
  disconnectedCallback() {
    if (this.mo) {
      this.mo.disconnect();
    }
  }
  setLinksArray() {
    this.linksArray = Array.from(this.hostElement.children).filter((element) => element.slot === '');
  }
  render() {
    const isLast = (index) => index === this.linksArray.length - 1;
    // Set aria-current="page" to the last item if it's a link
    const getCurrentAttr = (index) => isLast(index) === true ? { 'aria-current': 'page' } : undefined;
    return (index.h(index.Host, null, this.styles && index.h("style", null, this.styles), index.h("nav", { "aria-label": "Breadcrumb", class: this.getCssClassMap(), part: "base" }, index.h("ol", { class: "breadcrumb__list", part: "list" }, this.linksArray.map((element, index$2) => {
      const separator = this.separatorSlot != null ? (index.h("span", { class: "breadcrumb__separator", part: "separator", innerHTML: this.separatorSlot.innerHTML })) : (index.h("span", { class: "breadcrumb__separator", part: "separator" }, this.separator || (index.h("scale-icon-navigation-right", { size: 12 }))));
      return (index.h("li", { class: "breadcrumb__list-item", part: "list-item" }, element.href || element.tagName === 'SCALE-LINK' ? (index.h("a", Object.assign({ href: element.href, class: index$1.classnames(isLast(index$2) && 'breadcrumb__current', 'breadcrumb__link'), part: index$1.classnames(isLast(index$2) && 'current', 'link') }, getCurrentAttr(index$2)), element.textContent)) : (index.h("span", { class: index$1.classnames(isLast(index$2) && 'breadcrumb__current', 'breadcrumb__item'), part: index$1.classnames(isLast(index$2) && 'current', 'item') }, element.textContent)), isLast(index$2) ? null : separator));
    })))));
  }
  getCssClassMap() {
    return index$1.classnames('breadcrumb');
  }
  get hostElement() { return index.getElement(this); }
};
Breadcrumb.style = breadcrumbCss;

exports.scale_breadcrumb = Breadcrumb;
