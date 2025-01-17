import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { d as defineCustomElement$2 } from './navigation-right.js';

const breadcrumbCss = ":host{--spacing-left:calc(-1 * var(--telekom-spacing-unit-x2));--font-size-list-item:var(--telekom-typography-font-size-caption);--color-separator:var(--telekom-color-ui-regular);--spacing-y-item:var(--telekom-spacing-unit-x1);--spacing-x-item:var(--telekom-spacing-unit-x2);--color-link:var(--telekom-color-text-and-icon-additional);--radius-link:var(--telekom-radius-standard);--color-link-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-link-active:var(--telekom-color-text-and-icon-primary-pressed);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--color-current:var(--telekom-color-text-and-icon-standard)}.breadcrumb{margin-left:var(--spacing-left)}.breadcrumb__list{display:flex;list-style:none;margin-top:0;padding-left:0;margin-bottom:0}.breadcrumb__list-item{display:inline-flex;font-size:var(--font-size-list-item);align-items:center}.breadcrumb__separator{display:flex;color:var(--color-separator)}.breadcrumb__item,.breadcrumb__link{padding:var(--spacing-y-item) var(--spacing-x-item)}.breadcrumb__link{text-decoration:none;color:var(--color-link);border-radius:var(--radius-link)}.breadcrumb__link:hover{color:var(--color-link-hover)}.breadcrumb__link:active{color:var(--color-link-active)}.breadcrumb__link:focus{outline:var(--focus-outline)}.breadcrumb__current{color:var(--color-current)}";

const Breadcrumb = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    return (h(Host, null, this.styles && h("style", null, this.styles), h("nav", { "aria-label": "Breadcrumb", class: this.getCssClassMap(), part: "base" }, h("ol", { class: "breadcrumb__list", part: "list" }, this.linksArray.map((element, index) => {
      const separator = this.separatorSlot != null ? (h("span", { class: "breadcrumb__separator", part: "separator", innerHTML: this.separatorSlot.innerHTML })) : (h("span", { class: "breadcrumb__separator", part: "separator" }, this.separator || (h("scale-icon-navigation-right", { size: 12 }))));
      return (h("li", { class: "breadcrumb__list-item", part: "list-item" }, element.href || element.tagName === 'SCALE-LINK' ? (h("a", Object.assign({ href: element.href, class: classnames(isLast(index) && 'breadcrumb__current', 'breadcrumb__link'), part: classnames(isLast(index) && 'current', 'link') }, getCurrentAttr(index)), element.textContent)) : (h("span", { class: classnames(isLast(index) && 'breadcrumb__current', 'breadcrumb__item'), part: classnames(isLast(index) && 'current', 'item') }, element.textContent)), isLast(index) ? null : separator));
    })))));
  }
  getCssClassMap() {
    return classnames('breadcrumb');
  }
  get hostElement() { return this; }
  static get style() { return breadcrumbCss; }
}, [1, "scale-breadcrumb", {
    "separator": [1],
    "styles": [1],
    "linksArray": [32],
    "separatorSlot": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["scale-breadcrumb", "scale-icon-navigation-right"];
  components.forEach(tagName => { switch (tagName) {
    case "scale-breadcrumb":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Breadcrumb);
      }
      break;
    case "scale-icon-navigation-right":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const ScaleBreadcrumb = Breadcrumb;
const defineCustomElement = defineCustomElement$1;

export { ScaleBreadcrumb, defineCustomElement };
