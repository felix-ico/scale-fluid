import{r as a,h as r,a as o}from"./p-d52b3602.js";import{c as t}from"./p-c608c6dc.js";const s=class{constructor(r){a(this,r),this.to="",this.label="",this.target="_self",this.rel=""}render(){const a=this.to?"a":"div";return r(o,null,this.styles&&r("style",null,this.styles),r("div",{class:"card-border",part:"border"},r(a,Object.assign({class:this.getCssClassMap(),part:t("base",!!this.to&&"interactive")},this.to?{}:{role:"group"},this.to?{href:this.to}:{},this.target?{target:this.target}:{},this.rel?{rel:this.rel}:{},this.label?{"aria-label":this.label}:{}),r("div",{class:"card__body",part:"body"},r("slot",null)))))}getCssClassMap(){return t("card",!!this.to&&"card--interactive")}};s.style=":host{--background:var(--telekom-color-background-surface);--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-large);--box-shadow:var(--telekom-shadow-raised-standard);--box-shadow-hover:var(--telekom-shadow-raised-hover);--box-shadow-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus);--box-shadow-active:var(--telekom-shadow-raised-pressed);--spacing-body:var(--telekom-spacing-unit-x6);--spacing-body-slotted:0;--spacing-body-slotted-interactive:0}.card-border{border:1px solid transparent}.card{width:100%;overflow:hidden;box-sizing:border-box;background:var(--background);transition:var(--transition);border-radius:var(--radius);box-shadow:var(--box-shadow)}.card__body{padding:var(--spacing-body)}.card__body ::slotted(*){margin:var(--spacing-body-slotted)}.card--interactive{color:inherit;cursor:pointer;display:block;outline:none;text-decoration:none}.card--interactive:hover{box-shadow:var(--box-shadow-hover)}.card--interactive:focus{box-shadow:var(--telekom-shadow-raised-hover), var(--box-shadow-focus)}.card--interactive:active{border:none;box-shadow:var(--box-shadow-active)}.card--interactive .card__body ::slotted(*){margin:var(--spacing-body-slotted-interactive)}";export{s as scale_card}