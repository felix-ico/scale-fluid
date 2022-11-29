import{r as t,c as o,h as e,a,g as r}from"./p-d52b3602.js";import{c as i}from"./p-c608c6dc.js";import{s as n}from"./p-c5a89792.js";import{c as s}from"./p-71972792.js";import{e as l}from"./p-dc2600db.js";var c;!function(t){t.Close="Close",t.CloseSelect="CloseSelect",t.First="First",t.Last="Last",t.Next="Next",t.Open="Open",t.PageDown="PageDown",t.PageUp="PageUp",t.Previous="Previous",t.Select="Select",t.Type="Type"}(c||(c={}));const h=t=>Array.from(t.children).map((t=>({label:t.textContent.trim(),value:t.getAttribute("value"),ItemElement:e("span",{innerHTML:t.outerHTML})})));function d(t=[],o){return t.filter((t=>0===t.toLowerCase().indexOf(o.toLowerCase())))}const p=class{constructor(e){t(this,e),this.scaleChange=o(this,"scale-change",7),this.scaleFocus=o(this,"scale-focus",7),this.scaleBlur=o(this,"scale-blur",7),this.scaleKeydown=o(this,"scale-keydown",7),this.comboboxId="combobox",this.helperText="",this.invalid=!1,this.variant="informational",this.options="",this.open=!1,this.currentIndex=-1,this.queryString="",this.queryTimeout=null,this.ignoreBlur=!1,this.hasFocus=!1,this.selectOption=t=>{this.currentIndex=t,this.value=h(this.hostElement)[t].value,l(this,"scaleChange",{value:this.value})},this.handleKeyDown=t=>{const{key:o}=t,e=h(this.hostElement).length-1,a=function(t,o){const{key:e,altKey:a,ctrlKey:r,metaKey:i}=t;if(!o&&["ArrowDown","ArrowUp","Enter"," "].includes(e))return c.Open;if("Home"===e)return c.First;if("End"===e)return c.Last;if(["Backspace","Clear"].includes(e)||1===e.length&&" "!==e&&!a&&!r&&!i)return c.Type;if(o){if("ArrowUp"===e&&a)return c.CloseSelect;if("ArrowDown"===e&&!a)return c.Next;switch(e){case"ArrowUp":return c.Previous;case"PageUp":return c.PageUp;case"PageDown":return c.PageDown;case"Escape":return c.Close;case"Enter":case" ":return c.CloseSelect}}}(t,this.open);switch(l(this,"scaleKeydown",t),a){case c.Last:case c.First:this.setOpen(!0);case c.Next:case c.Previous:case c.PageUp:case c.PageDown:return t.preventDefault(),this.handleOptionChange(function(t,o,e){switch(e){case c.First:return 0;case c.Last:return o;case c.Previous:return Math.max(0,t-1);case c.Next:return Math.min(o,t+1);case c.PageUp:return Math.max(0,t-10);case c.PageDown:return Math.min(o,t+10);default:return t}}(this.currentIndex,e,a));case c.CloseSelect:t.preventDefault(),this.selectOption(this.currentIndex);case c.Close:return t.preventDefault(),this.setOpen(!1);case c.Type:return this.buildQueryString(o);case c.Open:return t.preventDefault(),this.setOpen(!0)}},this.handleBlur=()=>{this.ignoreBlur?this.ignoreBlur=!1:(this.setOpen(!1),l(this,"scaleBlur"))},this.handleFocus=()=>{l(this,"scaleFocus")},this.handleClick=()=>{this.setOpen(!this.open);const t=h(this.hostElement).findIndex((({value:t})=>t===this.value));t>-1&&setTimeout((()=>{this.bringIntoView(t)}))}}valueChange(t){this.currentIndex=h(this.hostElement).findIndex((({value:o})=>o===t))}connectedCallback(){n({source:this.hostElement,tag:"beta"}),this.currentIndex=h(this.hostElement).findIndex((({value:t})=>t===this.value))||-1}componentDidRender(){this.open&&s(this.comboEl,this.listboxPadEl,{placement:"bottom"}).then((({x:t,y:o})=>{Object.assign(this.listboxPadEl.style,{left:`${t}px`,top:`${o}px`})}))}handleOptionChange(t){this.currentIndex=t,this.bringIntoView(t)}bringIntoView(t){const o=this.listboxEl.querySelectorAll("[role=option]");var e;(e=this.listboxEl)&&e.clientHeight<e.scrollHeight&&function(t,o){const{offsetHeight:e,offsetTop:a}=t,{offsetHeight:r,scrollTop:i}=o,n=a<i;a+e>i+r?o.scrollTop=a+e-r:n&&(o.scrollTop=a)}(o[t],this.listboxEl),function(t){const o=t.getBoundingClientRect(),e=window.innerWidth||document.documentElement.clientWidth,a=window.innerHeight||document.documentElement.clientHeight;return o.top>=0&&o.left>=0&&o.bottom<=a&&o.right<=e}(o[t])||o[t].scrollIntoView({behavior:"smooth",block:"nearest"})}setOpen(t){this.open!==t&&(this.disabled||(this.open=t,this.open||(this.comboEl.scrollIntoView({behavior:"smooth",block:"nearest"}),this.comboEl.focus(),this.currentIndex=-1)))}handleOptionClick(t,o){t.stopPropagation(),this.handleOptionChange(o),this.selectOption(o),this.setOpen(!1)}getSearchString(t){return"number"==typeof this.queryTimeout&&window.clearTimeout(this.queryTimeout),this.queryTimeout=window.setTimeout((()=>{this.queryString=""}),500),this.queryString+=t,this.queryString}buildQueryString(t){this.setOpen(!0);const o=this.getSearchString(t),e=function(t,o,e=0){const a=[...t.slice(e),...t.slice(0,e)],r=d(a,o)[0];if(r)return t.indexOf(r);if((i=o.split("")).every((t=>t===i[0]))){const e=d(a,o[0]);return t.indexOf(e[0])}var i;return-1}(h(this.hostElement).map((({label:t})=>t)),o,this.currentIndex+1);e>=0?this.handleOptionChange(e):(window.clearTimeout(this.queryTimeout),this.queryString="")}render(){const t=(h(this.hostElement).find((({value:t})=>t===this.value))||{}).ItemElement;return e(a,null,e("div",{part:this.getBasePartMap()},e("div",{part:"combobox-container"},e("label",{id:`${this.comboboxId}-label`,part:"label"},this.label),e("div",Object.assign({ref:t=>this.comboEl=t,"aria-controls":`${this.comboboxId}-listbox`,"aria-expanded":this.open?"true":"false","aria-haspopup":"listbox","aria-labelledby":`${this.comboboxId}-label`,id:this.comboboxId,part:"combobox",role:"combobox",tabindex:"0",onBlur:this.handleBlur,onFocus:this.handleFocus,onClick:this.handleClick,onKeyDown:this.handleKeyDown},this.open?{"aria-activedescendant":(h(this.hostElement)[this.currentIndex]||{}).value}:{},this.helperText?{"aria-describedBy":"helper-message"}:{},this.invalid?{"aria-invalid":"true"}:{}),t),e("div",{part:"listbox-pad",ref:t=>this.listboxPadEl=t},e("div",{ref:t=>this.listboxEl=t,part:"listbox",role:"listbox",id:`${this.comboboxId}-listbox`,"aria-labelledby":`${this.comboboxId}-label`,tabindex:"-1"},h(this.hostElement).map((({value:t,ItemElement:o},a)=>e("div",Object.assign({role:"option",part:"option"+(a===this.currentIndex?" current":""),id:t,onClick:t=>{this.handleOptionClick(t,a)},onMouseDown:()=>{this.ignoreBlur=!0}},t===this.value?{"aria-selected":"true"}:{}),o,t===this.value?e("scale-icon-action-success",{size:16}):null))))),e("div",{part:"icon"},e(this.open?"scale-icon-navigation-collapse-up":"scale-icon-navigation-collapse-down",{decorative:!0}))),this.helperText&&e("scale-helper-text",{helperText:this.helperText,variant:this.invalid?"danger":this.variant})))}getBasePartMap(){return i("select",this.open&&"open",this.disabled&&"disabled",this.readonly&&"readonly",this.transparent&&"transparent",this.invalid&&"invalid",this.currentIndex>-1&&"steal-focus",null!=this.value&&""!==this.value&&"animated",this.helperText&&"has-helper-text")}get hostElement(){return r(this)}static get watchers(){return{value:["valueChange"]}}};p.style=":host{--font-weight:var(--telekom-typography-font-weight-bold);--height:var(--telekom-spacing-unit-x11);--color:var(--telekom-color-text-and-icon-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--background-hover:var(--telekom-color-ui-state-fill-hovered);--border:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-border-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--border-invalid:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-danger-hovered);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus);--spacing-x:var(--telekom-spacing-unit-x3);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--spacing-x-for-helper-text:var(--telekom-spacing-unit-x1);--transition-combobox:var(--transition);--font-size-combobox:var(--telekom-typography-font-size-body);--background-combobox:var(--telekom-color-ui-state-fill-standard);--spacing-combobox:18px var(--telekom-spacing-unit-x10) 5px\n    calc(var(--spacing-x) - 1px);--spacing-y-meta:var(--telekom-spacing-unit-x1);--color-meta:var(--telekom-color-text-and-icon-standard);--height-icon:var(--telekom-spacing-unit-x6);--color-icon:var(--telekom-color-text-and-icon-standard);--color-icon-hover:var(--telekom-color-text-and-icon-standard);--color-icon-active:var(--telekom-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--telekom-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--font-size-label:var(--telekom-typography-font-size-body);--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label-focus:var(--telekom-typography-font-size-footnote);--font-weight-label-focus:var(--telekom-typography-font-weight-bold);--line-height-label:var(--telekom-typography-font-size-body);--line-height-label-animated:var(--telekom-typography-font-size-small);--transform-label:translate(\n    var(--spacing-x),\n    calc((var(--telekom-spacing-unit-x11) - var(--font-size-label)) / 2)\n  );--transform-label-animated:translate(\n    var(--spacing-x),\n    var(--telekom-spacing-unit-x2)\n  );--background-listbox:var(--telekom-color-background-surface);--box-shadow-listbox:0 2px 4px 0 rgba(0, 0, 0, 0.1),\n    0 4px 16px 0 rgba(0, 0, 0, 0.1);--max-height-listbox:300px;--z-index-listbox:99;--outline-color-option:var(--telekom-color-functional-focus)}[part='combobox-container'] *,[part='combobox-container'] *::before,[part='combobox-container'] *::after{box-sizing:border-box}[part='combobox-container']{display:block;position:relative}[part='combobox']{width:100%;height:var(--height);margin:0;display:flex;align-items:center;outline:none;padding:var(--spacing-combobox);z-index:1;box-sizing:border-box;transition:var(--transition-combobox);font-family:inherit;font-size:var(--font-size-combobox);border-radius:var(--radius);border:var(--border);white-space:nowrap;text-overflow:ellipsis;appearance:none;-webkit-appearance:none;background-color:var(--background-combobox);color:var(--color)}[part~='select']:not([part~='disabled']) [part='combobox']:hover~[part='icon']{color:var(--color-icon-hover)}[part~='select']:not([part~='disabled']) [part='combobox']:active~[part='icon']{color:var(--color-icon-active)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:hover{border-color:var(--border-color-hover);background-color:var(--background-hover)}[part~='select']:not([part~='disabled'])[part~='invalid'] [part='combobox']:hover{background-color:var(--background-hover)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:focus{border-color:var(--border-color-focus)}[part~='select']:not([part~='disabled']):not([part~='steal-focus']) [part='combobox']:focus{outline:var(--focus-outline);outline-offset:1px}[part~='invalid'] [part='combobox']{border:var(--border-invalid)}[part~='transparent'] [part='combobox']{background-color:transparent}[part~='disabled'] [part='combobox']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part='meta']{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}[part='icon']{top:50%;right:var(--spacing-x);position:absolute;transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);transition:var(--transition-icon)}[part~='disabled'] [part='icon']{color:var(--color-disabled)}[part='label']{top:0;left:0;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font-size:var(--font-size-label);transform:var(--transform-label);font-weight:var(--font-weight-label);line-height:var(--line-height-label)}[part~='animated'] [part='label']{transform:var(--transform-label-animated);font-size:var(--font-size-label-focus);font-weight:var(--font-weight-label-focus);line-height:var(--line-height-label-animated)}[part~='disabled'] [part='label']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part='listbox']{overflow-y:auto;position:relative;max-height:var(--max-height-listbox)}[part='listbox-pad']{background:var(--background-listbox);box-shadow:var(--box-shadow-listbox);border-radius:var(--radius);padding:var(--radius) 0;margin-top:var(--telekom-line-weight-highlight);left:0;position:absolute;top:100%;width:100%;z-index:var(--z-index-listbox);display:none}[part~='open'] [part='listbox-pad']{display:block}[part~='transparent'] [part='listbox']{background-color:transparent}[part~='option']{color:var(--color)}[part~='option']:hover{background-color:var(--background-hover)}[part~='option'][part~='current']{outline:3px solid var(--outline-color-option);outline-offset:-3px}[part~='option'][aria-selected='true']{padding-right:30px;position:relative}[part~='option'][aria-selected='true'] scale-icon-action-success{position:absolute;right:16px;top:12px}[part~='option'] scale-dropdown-select-item::part(base){padding:12px}[part~='has-helper-text'] [part~='combobox-container']{margin-bottom:var(--spacing-x-for-helper-text)}";export{p as scale_dropdown_select}