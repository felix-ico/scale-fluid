'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a0ea3d79.js');

const linkCss = ":host{--font-weight:var(--telekom-typography-font-weight-medium);--spacing-x-icon:var(--telekom-spacing-unit-x1);--line-offset:0.0625em;--color:var(--telekom-color-text-and-icon-link-standard);--color-line-initial:var(--telekom-color-functional-interaction-subtle);--line-thickness-initial:var(--telekom-line-weight-standard);--color-visited:var(--telekom-color-text-and-icon-link-visited);--color-line-visited:currentColor;--line-thickness-visited:var(--line-thickness-initial);--color-hover:var(--telekom-color-text-and-icon-link-hovered);--color-line-hover:var(--telekom-color-functional-interaction-hovered);--line-thickness-hover:var(--line-thickness-initial);--color-focus:var(--telekom-color-text-and-icon-link-standard);--color-line-focus:var(--telekom-color-text-and-icon-link-standard);--line-thickness-focus:var(--telekom-line-weight-bold);--color-active:var(--telekom-color-text-and-icon-link-active);--color-line-active:var(--telekom-color-functional-interaction-pressed);--line-thickness-active:var(--line-thickness-initial);--color-disabled:var(--telekom-color-text-and-icon-disabled);--color-line-disabled:var(--telekom-color-ui-border-disabled);--line-thickness-disabled:var(--line-thickness-initial)}:host-context(scale-tooltip){--color:currentColor;--color-line-initial:currentColor;--color-visited:currentColor;--color-line-visited:currentColor;--color-hover:currentColor;--color-line-hover:currentColor;--color-focus:currentColor;--color-line-focus:currentColor;--color-active:currentColor;--color-line-active:currentColor}:host{display:inline;margin-bottom:calc(var(--line-offset) + var(--line-thickness-initial));--anchor-color:var(--color);--line-color:var(--color);--line-thickness:var(--line-thickness-initial)}[part='anchor']{cursor:pointer;outline:none;font-weight:var(--font-weight);color:var(--anchor-color);position:relative;display:inline-flex;text-decoration:underline;text-underline-offset:0.1875em;text-underline-position:from-font;text-decoration-thickness:var(\n    --line-thickness,\n    var(--line-thickness-initial)\n  );text-decoration-color:var(--line-color);transition:text-decoration var(--telekom-motion-duration-transition)}[part='anchor']{display:inline-flex;align-items:center}[part='content']{position:relative}slot[name='icon']::slotted(*){position:relative;margin-left:var(--spacing-x-icon)}:host(.reverse) [part='anchor']{flex-direction:row-reverse}:host(.reverse) slot[name='icon']::slotted(*){margin-left:auto;margin-right:var(--spacing-x-icon)}:host(.no-underline){--color-line-initial:transparent;--color-line-visited:transparent;--line-color:transparent}[part='anchor']:hover,[part='anchor']:focus,[part='anchor']:active{transition:text-decoration var(--telekom-motion-duration-transition);text-decoration:underline}[part='anchor']:visited{--anchor-color:var(--color-visited);--line-color:var(--color-line-visited);--line-thickness:var(--line-thickness-visited)}[part='anchor']:hover{--anchor-color:var(--color-hover);--line-color:var(--color-line-hover);--line-thickness:var(--line-thickness-hover)}[part='anchor']:focus{--anchor-color:var(--color-focus);--line-color:var(--color-line-focus);--line-thickness:var(--line-thickness-focus)}[part='anchor']:active{--anchor-color:var(--color-active);--line-color:var(--color-line-active);--line-thickness:var(--line-thickness-active)}:host(.disabled){cursor:not-allowed}:host(.disabled) [part='anchor'],:host(.disabled) [part='anchor']:visited,:host(.disabled) [part='anchor']:hover,:host(.disabled) [part='anchor']:active{--anchor-color:var(--color-disabled);--line-color:var(--color-line-disabled);cursor:not-allowed;pointer-events:none}";

const Link = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** (optional) Disabled link */
    this.disabled = false;
    /** (optional) Remove the initial line from the text (can also be achieved via `--line-thickness-initial: 0`)
     * Remove the line for every state with `--line-thickness: 0`
     */
    this.omitUnderline = false;
    /** (optional) Chnage icon/content slot order */
    this.iconPosition = 'after';
  }
  async setFocus() {
    this.focusableElement.focus();
  }
  getAnchorProps() {
    const props = {
      href: this.href || null,
      tabIndex: this.disabled ? -1 : this.innerTabindex,
      'aria-disabled': this.disabled ? 'true' : false,
      download: this.download || null,
      hreflang: this.hreflang || null,
      ping: this.ping || null,
      referrerpolicy: this.referrerpolicy || null,
      rel: this.rel || null,
      target: this.target || null,
      type: this.type || null,
    };
    return Object.assign({}, props);
  }
  render() {
    return (index.h(index.Host, { class: {
        disabled: this.disabled,
        reverse: this.iconPosition === 'before',
        'no-underline': this.omitUnderline,
      } }, this.styles && index.h("style", null, this.styles), index.h("a", Object.assign({ part: "anchor", ref: (el) => (this.focusableElement = el) }, this.getAnchorProps()), index.h("div", { part: "content" }, index.h("slot", null)), index.h("slot", { name: "icon" }))));
  }
};
Link.style = linkCss;

exports.scale_link = Link;
