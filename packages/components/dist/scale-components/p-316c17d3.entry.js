import{r as e,c as r,h as o,a as t,g as a}from"./p-d52b3602.js";import{e as c}from"./p-dc2600db.js";import{s as i}from"./p-c5a89792.js";let l=0;const n=class{constructor(o){e(this,o),this.scaleChange=r(this,"scale-change",7),this.scaleChangeLegacy=r(this,"scaleChange",7),this.label="",this.hideLabel=!1,this.status="",this.invalid=!1,this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.value="",this.internalId=l++,this.handleChange=e=>{this.indeterminate?(this.indeterminate=!1,this.checked=!0,e.target.checked=!0):this.checked=e.target.checked;const{checked:r,indeterminate:o,value:t,disabled:a}=this;c(this,"scaleChange",{checked:r,indeterminate:o,value:t,disabled:a})}}componentDidRender(){""!==this.status&&i({tag:"deprecated",message:'Property "status" is deprecated. Please use the "invalid" property!',type:"warn",source:this.host}),this.host.hasAttribute("aria-label")&&i({tag:"deprecated",message:'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckbox" property!',type:"warn",source:this.host})}connectedCallback(){this.inputId||(this.inputId="input-checkbox-"+this.internalId)}renderIcon(){return this.indeterminate?o("scale-icon-action-indeterminate",{part:"icon",decorative:!0}):this.checked?o("scale-icon-action-success",{part:"icon",decorative:!0}):void 0}renderHelperIcon(){return this.helperText&&!this.invalid?o("scale-icon-alert-information",{size:11}):this.invalid?o("scale-icon-alert-error",{size:11}):void 0}renderHelperText(e){if(this.helperText&&""!==this.helperText)return o("div",{part:"helper-text",id:e.id,"aria-live":"polite","aria-relevant":"additions removals"},this.renderHelperIcon(),e.content)}render(){const e={id:this.helperText?`helper-text-${this.internalId}`:null,content:this.helperText};return o(t,{class:{checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,error:"error"===this.status||this.invalid,hideLabel:this.hideLabel}},o("input",{type:"checkbox",part:"input",name:this.name||null,id:this.inputId,value:this.value,checked:this.checked,indeterminate:this.indeterminate,"aria-label":this.ariaLabelCheckbox,"aria-checked":!!this.indeterminate&&"mixed","aria-invalid":"error"===this.status||this.invalid,"aria-describedBy":e.id,disabled:this.disabled,onChange:this.handleChange}),o("label",{part:"container",htmlFor:this.inputId},o("div",{part:"checkbox"},this.renderIcon()),o("div",{part:"label"},this.label||o("slot",null))),this.renderHelperText(e))}get host(){return a(this)}};n.style=":host,scale-checkbox{--spacing-x:var(--telekom-spacing-unit-x2);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--color-text:var(--telekom-color-text-and-icon-standard);--color-error:var(--telekom-color-functional-danger-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--color-standard:var(--telekom-color-background-surface);--background-disabled:none;--color-primary:var(--telekom-color-primary-standard);--color-focus:var(--telekom-color-functional-focus);--color-primary-hover:var(--telekom-color-text-and-icon-standard);--color-primary-active:var(--telekom-color-text-and-icon-standard);--width-control:var(--telekom-spacing-unit-x5);--height-control:var(--telekom-spacing-unit-x5);--transition-control:var(--transition);--spacing-control:var(--telekom-spacing-unit-x05);--spacing-left-control:var(--telekom-spacing-unit-x1);--radius-control:var(--telekom-radius-small);--border-width-control:var(--telekom-spacing-unit-x025);--transition-helper-text:var(--transition);--spacing-left-helper-text:calc(var(--width-control) + var(--spacing-x));--font-size-helper-text:var(--telekom-typography-font-size-small);--font-weight-helper-text:var(--telekom-typography-font-weight-bold);--line-height-helper-text:var(--telekom-typography-line-spacing-standard);--color-helper-text:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--font-weight-label:var(--telekom-typography-font-weight-medium);--transition-label:var(--transition);--color-icon-checked-disabled:var(--telekom-color-text-and-icon-disabled);--color-icon-checked-active:var(\n    --telekom-color-text-and-icon-white-standard\n  );--width-icon:var(--telekom-spacing-unit-x4);--height-icon:var(--telekom-spacing-unit-x4);--stroke-width:var(--stroke-width-checkbox, 0.5px)}scale-checkbox{position:relative;display:flex;width:fit-content;padding:0 2px 0 2px;flex-direction:column;color:var(--color-text)}scale-checkbox [part='icon'],scale-checkbox [part='checkbox'],scale-checkbox [part='label'],scale-checkbox [part='helper-text']{transition:var(--transition)}scale-checkbox [part='input'],scale-checkbox.hideLabel [part='label']{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}scale-checkbox [part='checkbox']{box-sizing:border-box;display:flex;flex:0 0 auto;justify-content:center;align-items:center;width:var(--width-control);height:var(--height-control);border-radius:var(--radius-control);border:var(--border-width-control) solid\n    var(--telekom-color-ui-border-standard)}scale-checkbox [part='label']{font-weight:var(--font-weight-label);margin-left:var(--spacing-x)}scale-checkbox [part='icon']{width:var(--width-icon);height:var(--height-icon);color:var(--color-icon-checked-active)}scale-checkbox [part='icon'] svg{width:100%;height:100%}scale-checkbox [part='icon'] svg rect,scale-checkbox [part='icon'] svg path{stroke:currentColor;stroke-width:var(--stroke-width)}scale-checkbox [part='container']{align-items:center;display:flex;line-height:var(--telekom-typography-line-spacing-standard)}scale-checkbox [part='helper-text']{font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text);padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x) +\n      calc(var(--border-width-control) * 2)\n  );display:flex;align-items:center}scale-checkbox.indeterminate [part='checkbox']{background:var(--telekom-color-primary-standard);border:none;color:var(--color-icon-checked-active)}scale-checkbox.indeterminate [part='icon']{color:var(--color-icon-checked-active)}scale-checkbox.checked [part='checkbox']{background:var(--telekom-color-primary-standard);border-color:var(--telekom-color-primary-standard);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:hover [part='checkbox']{background:var(--telekom-color-ui-state-fill-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox.checked [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-ui-border-hovered);color:var(--color-icon-checked-active)}scale-checkbox [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed);color:var(--color-icon-checked-active)}scale-checkbox [part='input']:focus~[part='container'] [part='checkbox']{outline:var(--telekom-spacing-unit-x05) solid var(--color-focus);outline-offset:var(--telekom-spacing-unit-x025)}scale-checkbox [part='container']:hover{color:var(--color-primary-hover);cursor:pointer}scale-checkbox.checked [part='container']:hover [part='checkbox'],scale-checkbox.indeterminate [part='container']:hover [part='checkbox']{background:var(--telekom-color-primary-hovered);border-color:var(--telekom-color-primary-hovered)}scale-checkbox.checked [part='input']:active~[part='container'],scale-checkbox.checked [part='container']:active{color:var(--color-primary-active)}scale-checkbox [part='input']:active~[part='container'] [part='checkbox'],scale-checkbox.checked [part='container']:active [part='checkbox'],scale-checkbox.indeterminate [part='container']:active [part='checkbox']{background:var(--telekom-color-primary-pressed);border-color:var(--telekom-color-primary-pressed)}scale-checkbox:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);border-color:var(--telekom-color-ui-border-pressed)}scale-icon-alert-information,scale-icon-alert-error{color:var(--color-helper-text);display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-unit-x1)}scale-checkbox.error [part='helper-text']{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='helper-text'] scale-icon-alert-error{color:var(--telekom-color-text-and-icon-functional-danger)}scale-checkbox.error [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05) var(--color-error);border:none}scale-checkbox.error [part='input']:focus~[part='container'] [part='checkbox']{box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05) var(--color-error)}scale-checkbox.error [part='checkbox']:hover{background-color:var(--telekom-color-ui-state-fill-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='checkbox']:active{background-color:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.error:not(.checked) [part='container']:active [part='checkbox']{background:var(--telekom-color-ui-state-fill-pressed);box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-danger-pressed)}scale-checkbox.checked.error [part='container']:hover [part='checkbox']{background-color:var(--telekom-color-primary-hovered);box-shadow:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-danger-hovered)}scale-checkbox.error [part='helper-text']{padding-left:calc(\n    var(--width-control) + var(--spacing-control) + var(--spacing-x)\n  )}scale-checkbox.disabled{cursor:not-allowed}scale-checkbox.disabled [part='container'],scale-checkbox.disabled [part='helper-text']{color:var(--color-disabled);pointer-events:none}scale-checkbox.disabled [part='checkbox']{background:var(--telekom-color-ui-solid-fill-disabled);border-color:var(--telekom-color-ui-border-disabled)}scale-checkbox.checked.disabled [part='checkbox']{background-color:var(--telekom-color-ui-disabled);border-color:transparent}scale-checkbox.checked.disabled [part='icon']{color:var(--color-icon-checked-disabled);background-color:var(--telekom-color-ui-disabled)}scale-checkbox.disabled [part='helper-text'] scale-icon-alert-information,scale-checkbox.disabled.error [part='helper-text'] scale-icon-alert-error{color:var(--color-disabled)}";const s=class{constructor(r){e(this,r),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return o(t,null,o("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&o("title",null,this.accessibilityTitle),o("g",{fill:"currentColor"===this.fill?this.color:this.fill},o("g",null,o("rect",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"2",rx:"0.75","fill-rule":"evenodd",x:"4",y:"11.25"})))))}get hostElement(){return a(this)}};s.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{n as scale_checkbox,s as scale_icon_action_indeterminate}