import{r as t,h as a,a as o,g as r}from"./p-d52b3602.js";import{c as e}from"./p-c608c6dc.js";import{s as l}from"./p-c5a89792.js";const s=class{constructor(a){t(this,a),this.showSort=!1,this.striped=!1,this.slots={}}componentWillLoad(){this.hostElement.querySelectorAll("th").forEach((t=>{t.insertAdjacentHTML("afterbegin",'\n          <span class="scale-sort-indicator" aria-hidden="true">\n            <svg viewBox="0 0 16 16">\n             <polygon transform="translate(8.242641, 10.242641) rotate(45.000000) translate(-8.242641, -10.242641) " points="5.24264069 7.24264069 11.2426407 7.24264069 5.24264069 13.2426407"/></polygon>\n             <polygon transform="translate(8.242641, 6.242641) scale(1, -1) rotate(45.000000) translate(-8.242641, -6.242641) " points="5.24264069 3.24264069 11.2426407 3.24264069 5.24264069 9.24264069"/>\n            </svg>\n          </span>')}))}componentDidLoad(){const t=this.hostElement.querySelectorAll("scale-progress-bar");t&&t.forEach((t=>{t.showStatus=!1}))}componentDidRender(){this.size&&l({tag:"deprecated",message:'Property "size" is deprecated. Please use css overwrites for a small version!',type:"warn",source:this.hostElement})}render(){return a(o,{class:this.getCssClassMap()},this.styles&&a("style",null,this.styles),a("slot",null))}getCssClassMap(){return e("table",this.showSort&&"table--sortable",this.striped&&"table--striped")}get hostElement(){return r(this)}};s.style="scale-table{--radius:var(--telekom-radius-standard) var(--telekom-radius-standard) 0 0;--background:var(--telekom-color-ui-state-fill-standard);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--font-size:var(--telekom-typography-font-size-small);--font-weight:var(--telekom-typography-font-weight-bold);--spacing-tbody-td:var(--telekom-spacing-unit-x4)\n    var(--telekom-spacing-unit-x2);--border-bottom-tbody-td:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-faint);--background-tbody:var(--telekom-color-ui-state-fill-standard);--background-tbody-tr-hover:var(--telekom-color-ui-state-fill-hovered);--background-tfoot:var(--telekom-color-ui-state-fill-standard);--border-bottom-tfoot-td:var(--telekom-spacing-unit-x025) solid\n    var(--telekom-color-ui-extra-strong);--spacing-th-sortable:0 var(--telekom-spacing-unit-x2) 0 0;--background-th-sortable-hover:var(--telekom-color-ui-subtle);--background-th-sortable-active:var(--telekom-color-ui-faint);--box-shadow-th-sortable-focus:inset 0 0 0 var(--telekom-spacing-unit-x05)\n    var(--telekom-color-functional-focus);--background-tr-striped:var(--telekom-color-ui-subtle);--padding:var(--telekom-spacing-unit-x0) var(--telekom-spacing-unit-x2)}.table{display:block;overflow:auto;border-radius:var(--radius);background:var(--background);color:var(--color)}.table table{width:100%;white-space:nowrap;border-spacing:0;border-collapse:collapse}.table th{padding:var(--padding);text-align:left;line-height:32px;color:var(--color);font-size:var(--font-size);background:var(--telekom-color-background-surface-subtle)}.table td{padding:var(--padding)}.table tbody tr td{padding:8px}.table tbody td{border-bottom:var(--border-bottom-tbody-td)}.table thead tr th:last-of-type,.table tbody tr td:last-of-type,.table tfoot tr td:last-of-type{padding-right:12px}.table tfoot{background:var(--background-tfoot)}.table tbody{background:var(--background-tbody)}.table tfoot tr td{padding:8px;font-weight:var(--font-weight);border-bottom:var(--border-bottom-tfoot-td)}.table .scale-sort-indicator svg{display:none}.table tbody tr:hover{background:var(--background-tbody-tr-hover)}.table th:focus{outline:none}.table--size-default tbody tr td{padding:var(--spacing-tbody-td)}.table--sortable th{cursor:pointer;padding:var(--spacing-th-sortable)}.table--sortable th:hover{padding:var(--spacing-th-sortable);background:var(--background-th-sortable-hover)}.table--sortable th:active{background:var(--background-th-sortable-active)}.table--sortable th:focus{box-shadow:var(--box-shadow-th-sortable-focus);border-radius:var(--radius)}.table--sortable th .scale-sort-indicator svg{display:block}.table--sortable th[aria-disabled]{padding:var(--padding);pointer-events:none}.table--sortable th:not([aria-sort]){padding:var(--padding)}.table--sortable th[aria-sort='none']{padding:var(--padding)}.table--sortable th[aria-sort='ascending'] .scale-sort-indicator polygon:first-of-type{fill:var(--color)}.table--sortable th:hover .scale-sort-indicator polygon:first-of-type{fill:var(--color-hover)}.table--sortable th:hover[aria-sort='ascending'] .scale-sort-indicator polygon:first-of-type{fill:var(--color-hover)}.table--sortable th:active[aria-sort='ascending'] .scale-sort-indicator polygon:first-of-type{fill:var(--color-active)}.table--sortable th[aria-sort='ascending'] .scale-sort-indicator polygon{fill:transparent}.table--sortable th:hover[aria-sort='ascending'] .scale-sort-indicator polygon{fill:transparent}.table--sortable th:active[aria-sort='ascending'] .scale-sort-indicator polygon{fill:transparent}.table--sortable th[aria-sort='descending'] .scale-sort-indicator polygon:first-of-type{fill:transparent}.table--sortable th:hover[aria-sort='descending'] .scale-sort-indicator polygon:first-of-type{fill:transparent}.table--sortable th:active[aria-sort='descending'] .scale-sort-indicator polygon:first-of-type{fill:transparent}.table--sortable th[aria-sort='descending'] .scale-sort-indicator polygon{fill:var(--color)}.table--sortable th:hover[aria-sort='descending'] .scale-sort-indicator polygon{fill:var(--color-hover)}.table--sortable th:active[aria-sort='descending'] .scale-sort-indicator polygon{fill:var(--color-active)}.table--sortable th .scale-sort-indicator{width:16px;height:16px;margin:0 0 0 4px;display:inline-block;position:relative}.table--sortable th .scale-sort-indicator>svg{top:4px;left:0;width:16px;height:16px;position:absolute}.table--sortable th .scale-sort-indicator polygon{fill:transparent}.table--sortable th[aria-sort='none']:hover{padding:0 8px 0 0}.table--sortable th[aria-sort='none'] .scale-sort-indicator{display:none}.table--sortable th:not([aria-sort]):hover{padding:0 8px 0 0}.table--sortable th:not([aria-sort]) .scale-sort-indicator{display:none}.table--sortable th:hover .scale-sort-indicator{display:inline-block}.table--striped table tr:nth-child(even){background:var(--background-tr-striped)}";export{s as scale_table}