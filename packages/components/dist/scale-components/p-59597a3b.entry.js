import{r as t,h as i,a as s,g as a}from"./p-d52b3602.js";const e=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},i("g",null,i("path",this.selected?{"fill-rule":"evenodd",d:"M21.385 19.615l-4.92-4.915a8 8 0 10-1.765 1.765l4.915 4.92c.49.487 1.28.487 1.77 0a1.26 1.26 0 000-1.77zM10.75 13a.75.75 0 11-1.5 0v-2.25H7a.75.75 0 110-1.5h2.25V7a.75.75 0 011.5 0v2.25H13a.75.75 0 110 1.5h-2.25V13z"}:{"fill-rule":"evenodd",d:"M10 2c4.42 0 8 3.58 8 8 0 1.76-.575 3.38-1.535 4.695l4.92 4.92c.485.49.485 1.28.005 1.77a1.245 1.245 0 01-.885.365c-.32 0-.64-.12-.885-.365l-4.92-4.92A7.961 7.961 0 0110 18c-4.42 0-8-3.58-8-8s3.58-8 8-8zm0 1.5A6.506 6.506 0 003.5 10c0 3.585 2.915 6.5 6.5 6.5s6.5-2.915 6.5-6.5-2.915-6.5-6.5-6.5zm0 2.75c.415 0 .75.335.75.75v2.25H13a.749.749 0 110 1.5h-2.25V13a.749.749 0 11-1.5 0v-2.25H7a.749.749 0 110-1.5h2.25V7c0-.415.335-.75.75-.75z"})))))}get hostElement(){return a(this)}};e.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{e as scale_icon_action_zoom_in}