import{r as t,h as s,a as i,g as e}from"./p-d52b3602.js";const l=class{constructor(s){t(this,s),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return s(i,null,s("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&s("title",null,this.accessibilityTitle),s("g",{fill:"currentColor"===this.fill?this.color:this.fill},s("g",null,s("path",this.selected?{"fill-rule":"evenodd",d:"M13.77 12l4.415-4.42a1.25 1.25 0 10-1.765-1.765L12 10.23 7.58 5.815A1.25 1.25 0 105.815 7.58L10.23 12l-4.415 4.42a1.245 1.245 0 000 1.765c.232.237.549.37.88.37.332 0 .65-.134.885-.37L12 13.77l4.42 4.415c.234.236.553.37.885.37.331 0 .648-.133.88-.37a1.245 1.245 0 000-1.765L13.77 12z"}:{d:"M13.05 12l4.75-4.75c.3-.3.3-.75 0-1.05s-.75-.3-1.05 0L12 10.95 7.25 6.2c-.3-.3-.75-.3-1.05 0s-.3.75 0 1.05L10.95 12 6.2 16.75c-.3.3-.3.75 0 1.05s.75.3 1.05 0L12 13.05l4.75 4.75c.3.3.75.3 1.05 0s.3-.75 0-1.05z","fill-rule":"evenodd"})))))}get hostElement(){return e(this)}};l.style="scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)\n    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{l as scale_icon_action_close}