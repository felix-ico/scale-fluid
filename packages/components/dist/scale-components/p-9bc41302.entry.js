import{r as t,h as e,a,g as s}from"./p-d52b3602.js";import{c as r}from"./p-c608c6dc.js";import{s as i}from"./p-c5a89792.js";const l=class{constructor(e){t(this,e),this.small=!1,this.size="small"}handleClick(t){const e=t.target;"tab"===e.getAttribute("role")&&this.selectTab(e)}handleKeydown(t){let e;if("tab"===t.target.getAttribute("role")&&!t.altKey){switch(t.key){case"ArrowLeft":e=this.getPreviousTab();break;case"ArrowRight":e=this.getNextTab();break;case"Home":e=this.getFirstTab();break;case"End":e=this.getLastTab();break;default:return}t.preventDefault(),this.selectTab(e)}}connectedCallback(){this.el.hasAttribute("role")||this.el.setAttribute("role","tablist")}componentDidRender(){Promise.all([customElements.whenDefined("scale-tab-header"),customElements.whenDefined("scale-tab-panel")]).then((()=>{this.linkPanels(),this.propagateSizeToTabs()})),!1!==this.small&&i({tag:"deprecated",message:'Property "small" is deprecated. Please use css overwrite!',type:"warn",source:this.el})}getAllTabs(){return Array.from(this.el.querySelectorAll("scale-tab-header"))}getAllEnabledTabs(){return Array.from(this.el.querySelectorAll("scale-tab-header:not([disabled])"))}getAllPanels(){return Array.from(this.el.querySelectorAll("scale-tab-panel"))}getPreviousTab(){const t=this.getAllEnabledTabs(),e=t.findIndex((t=>t.selected))-1;return t[(e+t.length)%t.length]}getNextTab(){const t=this.getAllEnabledTabs(),e=t.findIndex((t=>t.selected))+1;return t[e%t.length]}getFirstTab(){return this.getAllEnabledTabs()[0]}getLastTab(){const t=this.getAllEnabledTabs();return t[t.length-1]}linkPanels(){const t=this.getAllEnabledTabs(),e=t.find((t=>t.selected))||t[0];t.forEach((t=>{const e=t.nextElementSibling;t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id)})),this.selectTab(e)}reset(){const t=this.getAllEnabledTabs(),e=this.getAllPanels();t.forEach((t=>t.selected=!1)),e.forEach((t=>t.hidden=!0))}findPanelForTab(t){const e=t.getAttribute("aria-controls");return this.el.querySelector(`#${e}`)}selectTab(t){const e=this.findPanelForTab(t);this.reset(),e.hidden=!1,t.selected=!0}propagateSizeToTabs(){const t="large"===this.size?"setAttribute":"removeAttribute";[...this.getAllTabs(),...this.getAllPanels()].forEach((e=>e[t]("size","large")))}render(){return e(a,null,this.styles&&e("style",null,this.styles),e("div",{part:this.getBasePartMap(),class:this.getCssClassMap()},e("slot",{name:"tab"}),e("slot",{name:"panel"})))}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){return r("tab-nav",""+("basePart"===t?"":"tab-nav--"))}get el(){return s(this)}};l.style=":host{--tab-height:var(--telekom-spacing-unit-x10);--tab-spacing-horizontal:var(--telekom-spacing-unit-x3);--tab-spacing-vertical:var(--telekom-spacing-unit-x4);--tab-radius:var(--telekom-radius-small);--tab-border-size:var(--telekom-line-weight-standard);--tab-border-size-selected:var(--telekom-line-weight-highlight);--tab-border-color:var(--telekom-color-ui-subtle);--tab-height-large:var(--telekom-spacing-unit-x12);--tab-spacing-horizontal-large:var(--telekom-spacing-unit-x4);--tab-spacing-vertical-large:0.875rem}";export{l as scale_tab_nav}