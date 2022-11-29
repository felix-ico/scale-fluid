import{r as t,c as e,h as i,a as n,g as o}from"./p-d52b3602.js";import{c as a}from"./p-c608c6dc.js";import{s as r}from"./p-c5a89792.js";import{e as s}from"./p-dc2600db.js";let l=0;const c=class{constructor(i){t(this,i),this.scaleInput=e(this,"scale-input",7),this.scaleInputLegacy=e(this,"scaleInput",7),this.scaleChange=e(this,"scale-change",7),this.scaleChangeLegacy=e(this,"scaleChange",7),this.scaleFocus=e(this,"scale-focus",7),this.scaleFocusLegacy=e(this,"scaleFocus",7),this.scaleBlur=e(this,"scale-blur",7),this.scaleBlurLegacy=e(this,"scaleBlur",7),this.scaleKeyDown=e(this,"scale-keydown",7),this.scaleKeyDownLegacy=e(this,"scaleKeyDown",7),this.type="text",this.name="",this.variant="static",this.label="",this.size="",this.helperText="",this.status="",this.invalid=!1,this.placeholder="",this.checked=!1,this.value="",this.controlled=!1,this.hasFocus=!1,this.handleCheckChange=t=>{this.checked=t.target.checked},this.handleCheckboxClick=()=>{this.disabled||(this.checked=!this.checked)},this.handleSelectChange=t=>{const e=t.target;this.controlled?(s(this,"scaleChange",{value:e.value}),this.selectElement.value=String(this.value),this.forceUpdate=String(Date.now())):(this.value=e.value||"",this.emitChange())},this.handleInput=t=>{const e=t.target;e&&(this.value=e.value||"",this.emitChange()),s(this,"scaleInput",t)},this.handleChange=t=>{const e=t.target;e&&(this.value=e.value||"",this.emitChange())},this.handleFocus=()=>{s(this,"scaleFocus"),this.hasFocus=!0},this.handleBlur=()=>{s(this,"scaleBlur"),this.hasFocus=!1},this.handleKeyDown=t=>{s(this,"scaleKeyDown",t)}}componentWillLoad(){null==this.inputId&&(this.inputId="input-"+l++),"select"===this.type&&null==this.icon&&(this.icon="M20.65 7.4c-.3-.3-.75-.3-1.05 0L12 15 4.4 7.4c-.3-.3-.75-.3-1.05 0s-.3.75 0 1.05L12 17.1l8.65-8.65c.3-.25.3-.75 0-1.05z")}componentDidLoad(){if(r({tag:"deprecated",source:this.el,type:"warn",extraMessage:`Please use <${{select:"scale-dropdown",checkbox:"scale-checkbox",radio:"scale-radio-button",textarea:"scale-textarea"}[this.type]||"scale-text-field"}> instead.`}),"select"===this.type){const t=this.selectElement,e=t.selectedIndex>-1?t.options[t.selectedIndex].value:null;this.value?t.value=String(this.value):e&&(this.value=e)}"select"===this.type&&this.selectElement&&(this.mutationObserver=new MutationObserver((()=>{this.forceUpdate=String(Date.now())})),this.mutationObserver.observe(this.el,{childList:!0,subtree:!0}))}componentWillUpdate(){}componentDidRender(){const t=null==this.value?"":this.value.toString();"select"===this.type&&this.controlled&&this.selectElement.value.toString()!==t&&(this.selectElement.value=t),""!==this.status&&r({tag:"deprecated",message:'Property "status" is deprecated. Please use the "invalid" property!',type:"warn",source:this.el})}disconnectedCallback(){this.mutationObserver&&this.mutationObserver.disconnect()}emitChange(){s(this,"scaleChange",{value:null==this.value?this.value:this.value.toString()})}checkedChanged(){s(this,"scaleChange",{value:this.checked})}render(){const t="textarea"===this.type?"textarea":"input",e="error"===this.status||this.invalid?{"aria-invalid":!0}:{},o=`helper-message-${l}`,r={"aria-describedBy":o};return"checkbox"===this.type?i(n,{checked:this.checked},i("div",{class:this.getCssClassMap()},i("input",Object.assign({type:"checkbox",name:this.name,id:this.inputId,onChange:this.handleCheckChange,value:this.value,checked:this.checked,disabled:this.disabled},e,r)),i("div",{class:a("input__checkbox-container"),onClick:this.handleCheckboxClick},i("span",{class:a("input__checkbox-placeholder")}),!!this.icon&&this.checked&&i("scale-icon",{path:this.icon,size:12})),i("label",{htmlFor:this.inputId},this.label),!!this.helperText&&i("div",{class:"input__meta",id:o,"aria-live":"polite","aria-relevant":"additions removals"},i("div",{class:"input__helper-text"},this.helperText)))):i(n,null,"radio"===this.type?i("div",{class:this.getCssClassMap()},i("input",Object.assign({type:"radio",name:this.name,id:this.inputId,onChange:this.handleCheckChange,value:this.value,checked:this.checked,disabled:this.disabled},e,r)),i("label",{htmlFor:this.inputId},this.label),!!this.helperText&&i("div",{class:"input__meta",id:o,"aria-live":"polite","aria-relevant":"additions removals"},i("div",{class:"input__helper-text"},this.helperText))):i("div",{class:this.getCssClassMap()},i("label",{class:"input__label",htmlFor:this.inputId},this.label),"select"===this.type?i("div",{class:"input__select-wrapper"},i("select",Object.assign({ref:t=>this.selectElement=t,class:a("input__select"),value:this.value,onChange:this.handleSelectChange,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,disabled:this.disabled,required:this.required,multiple:this.multiple,id:this.inputId,name:this.name,size:this.visibleSize},e,r),i("slot",null)),!!this.icon&&i("scale-icon",{path:this.icon})):i(t,Object.assign({type:this.type,class:a("input__"+("textarea"===this.type?"textarea":"input"),this.customResize&&this.customResize.id),style:!!this.resize&&{resize:this.resize},value:this.value},this.name?{name:this.name}:{},{required:this.required,minLength:this.minLength,maxLength:this.maxLength,id:this.inputId,onInput:this.handleInput,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown},this.placeholder?{placeholder:this.placeholder}:{},{disabled:this.disabled},this.rows?{rows:this.rows}:{},this.cols?{cols:this.cols}:{},e,r)),"textarea"===this.type&&"animated"===this.variant&&i("span",{class:"input__textarea-label-safety-background","aria-hidden":"true"}),(!!this.helperText||!!this.counter)&&i("div",{class:"input__meta",id:o,"aria-live":"polite","aria-relevant":"additions removals"},!!this.helperText&&i("div",{class:"input__helper-text"},this.helperText),this.counter&&i("div",{class:"input__counter"},this.value?String(this.value).length:0," /"," ",this.maxLength))))}getCssClassMap(){return a("input",this.type&&`input--type-${this.type}`,this.hasFocus&&"input--has-focus",this.checked&&"input--checked",this.resize&&`input--resize-${this.resize}`,this.variant&&`input--variant-${this.variant}`,this.disabled&&"input--disabled",this.transparent&&"input--transparent",this.status&&`input--status-${this.status}`,this.invalid&&"input--status-error",this.size&&`input--size-${this.size}`,null!=this.value&&""!==this.value&&"animated")}get el(){return o(this)}static get watchers(){return{checked:["checkedChanged"]}}};c.style=".input{position:relative}.input .input__helper-text,.input .input__counter{font-weight:var(--telekom-typography-font-weight-bold)}.input .input__input,.input .input__select{width:100%;height:var(--telekom-spacing-unit-x12);margin:0;display:flex;outline:none;padding:var(--telekom-spacing-unit-x3) var(--telekom-spacing-unit-x3);z-index:1;box-sizing:border-box;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-family:inherit;font-size:var(--telekom-typography-font-size-body);border-radius:var(--telekom-radius-standard);border:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-border-standard)}.input .input__textarea{width:100%;margin:0;resize:vertical;display:flex;outline:none;padding:var(--telekom-spacing-unit-x3) var(--telekom-spacing-unit-x3);z-index:1;box-sizing:border-box;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-family:inherit;font-size:var(--telekom-typography-font-size-body);border-radius:var(--telekom-radius-standard);border:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-border-standard)}.input .input__select{appearance:none;-webkit-appearance:none}.input .input__select-wrapper{position:relative}.input .input__counter{display:flex;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));margin-left:auto;padding-right:var(--telekom-spacing-unit-x3);justify-content:flex-end;font-size:var(--telekom-typography-font-size-small);line-height:var(--telekom-typography-line-spacing-standard);color:var(--telekom-color-text-and-icon-standard)}.input .input__helper-text{transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));padding-left:var(--telekom-spacing-unit-x3);font-size:var(--telekom-typography-font-size-small);line-height:var(--telekom-typography-line-spacing-standard);color:var(--telekom-color-text-and-icon-functional-informational)}.input .input__meta{display:flex;justify-content:space-between;margin-top:var(--telekom-spacing-unit-x1)}.input:not(.input--disabled):hover .input__select-wrapper{--icon-color:var(--telekom-color-text-and-icon-primary-hovered, #f90984)}.input:not(.input--disabled):active .input__select-wrapper{--icon-color:var(--telekom-color-text-and-icon-primary-pressed, #cb0068)}.input:not(.input--disabled) .input__input:hover,.input:not(.input--disabled) .input__input:focus,.input:not(.input--disabled) .input__select:hover,.input:not(.input--disabled) .input__select:focus,.input:not(.input--disabled) .input__textarea:hover,.input:not(.input--disabled) .input__textarea:focus{border-color:var(--telekom-color-ui-border-hovered)}.input:not(.input--disabled) .input__input:focus,.input:not(.input--disabled) .input__select:focus,.input:not(.input--disabled) .input__textarea:focus{box-shadow:0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-focus)}.input:not(.input--disabled) .input__input:focus::placeholder,.input:not(.input--disabled) .input__select:focus::placeholder,.input:not(.input--disabled) .input__textarea:focus::placeholder{color:var(--telekom-color-text-and-icon-additional);transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard))}.input .input__select-wrapper scale-icon{top:50%;right:var(--telekom-spacing-unit-x3);position:absolute;transform:translateY(-50%);pointer-events:none}.input .input__input::placeholder,.input .input__select::placeholder,.input .input__textarea::placeholder,.input ::placeholder{color:transparent;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard))}.input--variant-static .input__label{color:var(--telekom-color-text-and-icon-additional);display:flex;font-weight:var(--telekom-typography-font-weight-medium)}.input--variant-animated .input__input,.input--variant-animated .input__select{padding:var(--telekom-spacing-unit-x3) var(--telekom-spacing-unit-x3) 0\n    calc(var(--telekom-spacing-unit-x3) - 1px)}.input--variant-animated .input__textarea{padding-top:var(--telekom-spacing-unit-x6)}.input--variant-animated .input__label{top:0;left:0;color:var(--telekom-color-text-and-icon-additional);display:flex;z-index:var(--scl-z-index-10);position:absolute;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));pointer-events:none;font-size:var(--telekom-typography-font-size-body);transform:translate(\n    var(--telekom-spacing-unit-x3),\n    calc(\n      (\n          var(--telekom-spacing-unit-x12) -\n            var(--telekom-typography-font-size-body)\n        ) / 2\n    )\n  );font-weight:var(--telekom-typography-font-weight-medium)}.input--variant-animated.input--has-focus .input__label,.input--variant-animated.animated .input__label{color:var(--telekom-color-text-and-icon-additional);transform:translate(\n    var(--telekom-spacing-unit-x3),\n    var(--telekom-spacing-unit-x2)\n  );transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-size:var(--telekom-typography-font-size-footnote);font-weight:var(--telekom-typography-font-weight-bold)}.input--status-error .input__input,.input--status-error .input__textarea,.input--status-error .input__select{border:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-danger-standard)}.input--status-error .input__helper-text{color:var(--telekom-color-text-and-icon-functional-danger)}.input--status-error .input__counter{color:var(--telekom-color-text-and-icon-functional-danger)}.input--size-small .input__input{height:var(--telekom-spacing-unit-x10)}.input--size-small .input__select{height:var(--telekom-spacing-unit-x10)}.input--size-small .input__label{top:0;left:0;color:var(--telekom-color-text-and-icon-additional);display:flex;z-index:var(--scl-z-index-10);position:absolute;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));pointer-events:none;font-size:var(--telekom-typography-font-size-body);transform:translate(\n    var(--telekom-spacing-unit-x3),\n    calc(\n      (\n          var(--telekom-spacing-unit-x10) -\n            var(--telekom-typography-font-size-body)\n        ) / 2\n    )\n  );font-weight:var(--telekom-typography-font-weight-medium)}.input--size-small.input--has-focus .input__label,.input--size-small.animated .input__label{color:var(--telekom-color-text-and-icon-additional);transform:translate(\n    var(--telekom-spacing-unit-x3),\n    var(--telekom-spacing-unit-x1)\n  );transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-size:var(--telekom-typography-font-size-footnote);font-weight:var(--telekom-typography-font-weight-medium)}.input--transparent .input__input,.input--transparent .input__textarea,.input--transparent.input--type-radio .input__radio,.input--transparent .input__select{background-color:transparent}.input--type-checkbox{display:flex;flex-wrap:wrap;align-items:center}.input--type-checkbox input{width:0;height:0;opacity:0;position:absolute}.input--type-checkbox .input__meta{width:100%}.input--type-checkbox .input__helper-text{padding-left:var(--telekom-spacing-unit-x8)}.input--type-checkbox label{color:var(--telekom-color-text-and-icon-standard);font-weight:var(--telekom-typography-font-weight-medium)}.input--type-checkbox .input__checkbox-container{width:var(--telekom-spacing-unit-x4);height:var(--telekom-spacing-unit-x4);display:flex;position:relative;align-items:center;margin-right:var(--telekom-spacing-unit-x2)}.input--type-checkbox input:disabled~label{color:var(--telekom-color-ui-disabled)}.input--type-checkbox input:checked:disabled~label{color:var(--telekom-color-ui-disabled)}.input--type-checkbox input:checked:disabled~.input__checkbox-container .input__checkbox-placeholder{background:var(--telekom-color-ui-disabled)}.input--type-checkbox input:checked:disabled~.input__checkbox-container scale-icon{--icon-color:var(--telekom-color-text-and-icon-disabled)}.input--type-checkbox input:checked:not([disabled]):hover~.input__checkbox-container .input__checkbox-placeholder,.input--type-checkbox input:checked:not([disabled])~.input__checkbox-container:hover .input__checkbox-placeholder{box-shadow:none;border-color:var(--telekom-color-primary-hovered, #f90984);background:var(--telekom-color-primary-hovered, #f90984)}.input--type-checkbox input:checked:not([disabled]):active~.input__checkbox-container .input__checkbox-placeholder,.input--type-checkbox input:checked:not([disabled])~.input__checkbox-container:active .input__checkbox-placeholder{border-color:var(--telekom-color-primary-pressed, #cb0068);background:var(--telekom-color-primary-pressed, #cb0068)}.input--type-checkbox input:checked:not([disabled]):active~.input__checkbox-container scale-icon,.input--type-checkbox input:checked:not([disabled])~.input__checkbox-container:active scale-icon{--icon-color:var(--telekom-color-text-and-icon-standard)}.input--type-checkbox input:checked:not([disabled])~.input__checkbox-container .input__checkbox-placeholder{border:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-primary-standard, #e20074);background:var(--telekom-color-primary-standard, #e20074)}.input--type-checkbox input:disabled~.input__checkbox-container .input__checkbox-placeholder{border-color:var(--telekom-color-ui-disabled)}.input--type-checkbox input:focus~.input__checkbox-container .input__checkbox-placeholder{box-shadow:0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-focus)}.input--type-checkbox input:not([disabled]):hover~.input__checkbox-container .input__checkbox-placeholder,.input--type-checkbox input:not([disabled])~.input__checkbox-container:hover .input__checkbox-placeholder{box-shadow:none;border-color:var(--telekom-color-primary-hovered, #f90984)}.input--type-checkbox input:not([disabled]):hover~.input__checkbox-container~label,.input--type-checkbox input:not([disabled])~.input__checkbox-container:hover~label{color:var(--telekom-color-text-and-icon-primary-hovered, #f90984)}.input--type-checkbox input:not([disabled]):active~.input__checkbox-container .input__checkbox-placeholder,.input--type-checkbox input:not([disabled])~.input__checkbox-container:active .input__checkbox-placeholder{border-color:var(--telekom-color-primary-pressed, #cb0068);background:var(--telekom-color-primary-pressed, #cb0068)}.input--type-checkbox input:not([disabled]):active~.input__checkbox-container scale-icon,.input--type-checkbox input:not([disabled])~.input__checkbox-container:active scale-icon{--icon-color:var(--telekom-color-text-and-icon-primary-pressed, #cb0068)}.input--type-checkbox input:not([disabled]):active~.input__checkbox-container~label,.input--type-checkbox input:not([disabled])~.input__checkbox-container:active~label{color:var(--telekom-color-text-and-icon-primary-pressed, #cb0068)}.input--type-checkbox .input__checkbox-container .input__checkbox-placeholder{width:var(--telekom-spacing-unit-x4);height:var(--telekom-spacing-unit-x4);margin:0;box-sizing:border-box;transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));border-radius:var(--telekom-radius-standard);border:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-text-and-icon-standard);background:var(--telekom-color-background-surface)}.input--type-checkbox .input__checkbox-container scale-icon{top:calc(0.5 * var(--telekom-spacing-unit-x3));left:calc(0.5 * var(--telekom-spacing-unit-x3));width:var(--telekom-spacing-unit-x3);height:var(--telekom-spacing-unit-x3);position:absolute;user-select:none;--icon-color:var(--telekom-color-text-and-icon-inverted-standard)}.input--type-checkbox .input__checkbox-container~label{transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard))}.input--type-checkbox.input--status-error .input__checkbox-container .input__checkbox-placeholder{border:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-danger-standard)}.input--type-radio{display:flex;flex-wrap:wrap;align-items:center}.input--type-radio .input__meta{width:100%}.input--type-radio .input__helper-text{margin-top:var(--telekom-spacing-unit-x1);padding-left:var(--telekom-spacing-unit-x6)}.input--type-radio label{color:var(--telekom-color-text-and-icon-standard);transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));font-weight:var(--telekom-typography-font-weight-medium)}.input--type-radio input{width:var(--telekom-spacing-unit-x4);height:var(--telekom-spacing-unit-x4);transition:all var(--telekom-motion-duration-transition)\n    cubic-bezier(var(--telekom-motion-easing-standard));border-radius:var(--telekom-radius-circle);-webkit-appearance:none;background-color:#fff;border:var(--telekom-line-weight-standard) solid\n    var(--telekom-color-ui-border-standard);margin:0 var(--telekom-spacing-unit-x2) 0 0}.input--type-radio input:focus{outline:none;box-shadow:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus)}.input--type-radio:hover input:not(:checked):not([disabled]){box-shadow:none;border-color:var(--telekom-color-text-and-icon-primary-hovered)}.input--type-radio:hover input:not(:checked):not([disabled])~label{color:var(--telekom-color-text-and-icon-primary-hovered)}.input--type-radio input:active{border:var(--telekom-spacing-unit-x2) solid\n    var(--telekom-color-primary-pressed)}.input--type-radio input:not(:checked):not([disabled]):active~label{color:var(--telekom-color-text-and-icon-primary-pressed)}.input--type-radio input:disabled{border:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-border-disabled)}.input--type-radio input:disabled~label{color:var(--telekom-color-text-and-icon-disabled)}.input--type-radio.input--status-error input{border:var(--telekom-spacing-unit-x05) solid\n    var(--telekom-color-functional-danger-standard)}.input--type-radio input:checked{border:calc(0.5 * var(--telekom-spacing-unit-x3)) solid\n    var(--telekom-color-primary-standard)}.input--type-radio input:checked:active{border:calc(0.5 * var(--telekom-spacing-unit-x3)) solid\n    var(--telekom-color-primary-pressed, #cb0068)}.input--type-radio input:checked:disabled{background:var(--telekom-color-ui-disabled);border:calc(0.5 * var(--telekom-spacing-unit-x3)) solid\n    var(--telekom-color-ui-border-disabled)}.input--type-radio input:checked:disabled~label{color:var(--telekom-color-text-and-icon-disabled)}.input__textarea-label-safety-background{top:var(--telekom-spacing-unit-x05);left:var(--telekom-spacing-unit-x05);right:var(--telekom-spacing-unit-x05);position:absolute;pointer-events:none;border-radius:var(--telekom-radius-standard);height:var(--telekom-spacing-unit-x6);background-color:var(--telekom-color-background-surface, #ffffff)}.input--disabled .input__textarea-label-safety-background{background-color:transparent}.input--disabled label,.input--disabled .input__label,.input--disabled input,.input--disabled .input__input,.input--disabled .input__checkbox-container,.input--disabled .input__radio,.input--disabled .input__select,.input--disabled .input__textarea,.input--disabled .input__helper-text{cursor:not-allowed;border-color:var(--telekom-color-ui-disabled);color:var(--telekom-color-text-and-icon-disabled);background:var(--telekom-color-ui-disabled)}.input--disabled .input__select-wrapper{--icon-color:var(--telekom-color-text-and-icon-disabled)}.input--disabled.animated label.input__label{color:var(--telekom-color-text-and-icon-disabled)}";export{c as scale_input}