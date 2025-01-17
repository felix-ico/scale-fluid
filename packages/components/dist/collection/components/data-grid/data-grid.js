/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { Component, Prop, h, Element, Host, Watch, State, Event, } from '@stencil/core';
import { CELL_TYPES, DEFAULT_CELL_TYPE, CELL_DEFAULTS, } from './data-grid-cells';
import classNames from 'classnames';
import { emitEvent } from '../../utils/utils';
// [ ] add options to show nested content without the html column
// [ ] add options to pre-expand all html content
// [ ] Uber cell type where all options are available for user
// [ ] Add custom elipsis for cropped content - with a tooltip that shows full content
// Const for testing auto-width. Will stop re-render.
// Need to manually set opacity and overflow to debug.
const TEST_AUTO_WIDTH_RENDER = false;
/* Reused Private Variables */
let resizeObserver;
const name = 'data-grid';
/* Component Declaration */
export class DataGrid {
  /* 6. Lifecycle Events (call order) */
  constructor() {
    /* 2. State Variables (alphabetical) */
    /** Used to force render after sorting/selection */
    this.forceRender = 0;
    /** Pagination starting index */
    this.paginationStart = 0;
    /** Table scroll value for frozen header  */
    this.scrollY = 0;
    /** (optional) Freeze header row from scrolling */
    this.freezeHeader = false;
    /** (optional) Heading string */
    this.heading = '';
    /** (optional) Set to true to remove border */
    this.hideBorder = false;
    /** (optional) Set to true to hide header row */
    this.hideHeader = false;
    /** (optional) Set to true to remove info footer block including pagination and selection status */
    this.hideInfo = false;
    /** (optional) Set to true to hide settings menu */
    this.hideMenu = false;
    /** (optional) Set to true to add numbers column */
    this.numbered = false;
    /** (optional) Set number of rows to display per pagination page */
    this.pageSize = Infinity;
    /** (optional) Set to true to add selection column */
    this.selectable = false;
    /** Read-only selection array - populated with raw data from selected rows */
    this.selection = [];
    /** (optional) Shade every second row darker */
    this.shadeAlternate = true;
    /** (optional) Set to false to hide table, used for nested tables to re-render upon toggle */
    this.visible = true;
    /** Stored active sorting column index, for state removal */
    this.activeSortingIndex = -1;
    /** Track component width to constrict nested content, which is necessary with table layout */
    this.contentWidth = 100;
    /** Flag to know to check for data completeness */
    this.dataNeedsCheck = true;
    /** Flag to know if rendering can commence */
    this.hasData = false;
    /** Flag that is true when width below a certain limit */
    this.isMobile = false;
    /** Flag that enough data supplied to warrant pagination */
    this.isPagination = false;
    /** Flag that is true if any fields are sortable */
    this.isSortable = false;
    /** Track container width to avoid re-calculating column stretching */
    this.lastContainerWidth = 100;
    /** Index of field to use as mobile title, if any */
    this.mobileTitleIndex = -1;
    /** Determine if auto-width parsing needed */
    this.needsAutoWidthParse = false;
    /** Force column resize after render */
    this.needsColumnResize = false;
    /** Auto-calculated number column width */
    this.numberColumnWidth = 0;
    /** Selection column width */
    this.selectionColumnWidth = 22;
    this.handleMenuListClick = (event) => {
      const menuItems = ['sortBy', 'toggleVisibility'];
      const currentMenuItemsIndex = menuItems.indexOf(event.target.id);
      if (currentMenuItemsIndex > -1) {
        // check if there is already opened flyout menu list with different id, if opened, close it
        const inactiveMenuItem = this.hostElement.shadowRoot.querySelector(`#${menuItems[1 - currentMenuItemsIndex]}List`);
        if (inactiveMenuItem) {
          inactiveMenuItem.setAttribute('opened', 'false');
        }
      }
    };
    // Bind certain callbacks to scope
    this.onDividerMove = this.onDividerMove.bind(this);
    this.onDividerUp = this.onDividerUp.bind(this);
    this.applyResponsiveClasses = this.applyResponsiveClasses.bind(this);
    this.updateColumnStretching = this.updateColumnStretching.bind(this);
  }
  componentWillLoad() {
    this.fieldsHandler();
    this.rowsHandler();
  }
  componentWillUpdate() { }
  componentDidRender() {
    if (this.needsAutoWidthParse) {
      this.calculateAutoWidths();
    }
    // Wait a frame to avoid warning about possible infinite loop
    setTimeout(() => {
      if (this.needsColumnResize) {
        this.updateColumnStretching();
      }
    });
  }
  componentDidLoad() {
    this.addResizeObserver();
  }
  componentDidUpdate() { }
  disconnectedCallback() {
    this.removeResizeObserver();
  }
  /* 7. Listeners */
  fieldsHandler() {
    this.parseFields();
    this.checkForMobileTitle();
    this.checkForSortableFields();
    this.dataNeedsCheck = true;
  }
  rowsHandler() {
    this.parseRows();
    this.setInitialRowProps();
    this.resetSortingToggle();
    this.dataNeedsCheck = true;
    // Set flag to dirty to redo column width with new data
    this.needsAutoWidthParse = true;
    this.needsColumnResize = true;
    if (
    // when we run out of items on the current page
    this.rows.length <= this.paginationStart &&
      // and we are NOT on the first page
      this.paginationStart - this.pageSize > -1) {
      // step back one page
      this.paginationStart = this.paginationStart - this.pageSize;
    }
  }
  /* 8. Public Methods */
  /* 9. Local Methods */
  parseFields() {
    if (this.fields && typeof this.fields === 'string') {
      this.fields = JSON.parse(this.fields);
    }
  }
  parseRows() {
    if (this.rows && typeof this.rows === 'string') {
      this.rows = JSON.parse(this.rows);
    }
  }
  setInitialRowProps() {
    if (!this.rows || !this.rows.length) {
      return;
    }
    this.rows.forEach((row, i) => {
      // Store indices of original order on rows for resetting sorting
      row.initialIndex = i;
      // Set initial selected flag
      row.selected = false;
    });
    // Determine if pagination will be required
    this.isPagination = this.pageSize <= this.rows.length - 1;
  }
  checkHasData() {
    // Need both fields and data content in order to populate
    if (!this.fields) {
      return false;
    }
    for (let i = 0; i < this.fields.length; i++) {
      // Use default type if none set
      if (!this.fields[i].type) {
        this.fields[i].type = DEFAULT_CELL_TYPE;
      }
      if (!CELL_TYPES[this.fields[i].type]) {
        // tslint:disable-next-line: no-console
        console.warn(`Unrecognised field type: "${this.fields[i].type}"`);
        return false;
      }
    }
    if (!this.rows || !this.rows.length) {
      return false;
    }
    for (let i = 0; i < this.rows.length; i++) {
      if (this.rows[i].length !== this.fields.length) {
        // tslint:disable-next-line: no-console
        console.warn(`Unable to render ${this.heading && `"${this.heading}" `}table: row data length not equal to supplied fields.`);
        return false;
      }
    }
    return true;
  }
  checkForMobileTitle() {
    // Reset for new data
    this.mobileTitleIndex = -1;
    if (!this.fields) {
      return;
    }
    this.fields.every(({ mobileTitle }, i) => {
      if (mobileTitle) {
        this.mobileTitleIndex = i;
        return false;
      }
      return true;
    });
  }
  checkForSortableFields() {
    this.isSortable = false;
    if (!this.fields) {
      return;
    }
    this.fields.forEach(({ sortable }) => {
      if (sortable) {
        this.isSortable = true;
      }
    });
  }
  getCssClassMap() {
    return classNames(name, !this.isMobile && `${name}--desktop`, this.isMobile && `${name}--mobile`, this.shadeAlternate && `${name}--shade-alternate`, this.freezeHeader && `${name}--freeze-header`, this.hideBorder && `${name}--hide-border`, this.hideMenu && `${name}--hide-menu`);
  }
  polyfillMousePosition(e) {
    // For touch
    if (e.changedTouches && e.changedTouches.length) {
      e.x = e.changedTouches[0].pageX;
      e.y = e.changedTouches[0].pageY;
    }
    // For cross browser support
    if (e.x === undefined) {
      e.x = e.clientX;
      e.y = e.clientY;
    }
  }
  getDefaultLongestContent({ rows, columnIndex }) {
    let maxLength = 0;
    let longestContent;
    rows.forEach((row) => {
      const length = row[columnIndex].toString().length;
      if (length > maxLength) {
        longestContent = row[columnIndex];
        maxLength = length;
      }
    });
    return longestContent;
  }
  // Selection handlers
  toggleSelectAll() {
    if (!this.elToggleSelectAll) {
      return;
    }
    this.rows.forEach((row) => (row.selected = this.elToggleSelectAll.checked));
    this.updateReadableSelection();
    this.forceRender++;
  }
  toggleRowSelect({ target }, rowIndex) {
    this.rows[rowIndex].selected = target.checked;
    this.updateReadableSelection();
    this.forceRender++;
  }
  updateReadableSelection() {
    this.selection.length = 0;
    this.rows.forEach((row) => row.selected && this.selection.push(row));
    // Check header checkbox if any or none are selected
    const selectAll = this.hostElement.shadowRoot.querySelector('.thead__cell--selection scale-checkbox');
    selectAll.checked = !!this.selection.length;
    // selectAll.indeterminate = !!this.selection.length;
  }
  // Sorting handlers
  toggleTableSorting(sortDirection, columnIndex, type) {
    // Remove sorting from previous column index
    if (this.activeSortingIndex > -1 &&
      this.activeSortingIndex !== columnIndex) {
      this.fields[this.activeSortingIndex].sortDirection = 'none';
    }
    // Store new column index
    this.activeSortingIndex = columnIndex;
    const newSortDirection = sortDirection === 'none'
      ? 'ascending'
      : sortDirection === 'ascending'
        ? 'descending'
        : 'none';
    this.fields[columnIndex].sortDirection = newSortDirection;
    this.sortTable(newSortDirection, type, columnIndex);
  }
  sortTable(sortDirection, type, columnIndex) {
    if (sortDirection === 'none') {
      this.rows.sort((a, b) => {
        return a.initialIndex - b.initialIndex;
      });
    }
    else {
      switch ((CELL_TYPES[type] &&
        CELL_TYPES[type].defaults &&
        CELL_TYPES[type].defaults.sortBy) ||
        CELL_DEFAULTS.sortBy) {
        case 'text':
          if (sortDirection === 'ascending') {
            this.rows.sort((a, b) => {
              const textA = a[columnIndex].toLowerCase();
              const textB = b[columnIndex].toLowerCase();
              return textA < textB ? -1 : textA > textB ? 1 : 0;
            });
          }
          else {
            this.rows.sort((a, b) => {
              const textA = a[columnIndex].toLowerCase();
              const textB = b[columnIndex].toLowerCase();
              return textA > textB ? -1 : textA < textB ? 1 : 0;
            });
          }
          break;
        case 'number':
          if (sortDirection === 'ascending') {
            this.rows.sort((a, b) => {
              return Number(a[columnIndex]) - Number(b[columnIndex]);
            });
          }
          else {
            this.rows.sort((a, b) => {
              return Number(b[columnIndex]) - Number(a[columnIndex]);
            });
          }
          break;
      }
    }
    this.forceRender++;
    // Trigger event
    this.triggerSortEvent(sortDirection, type, columnIndex);
  }
  resetSortingToggle() {
    if (this.activeSortingIndex > -1) {
      this.fields[this.activeSortingIndex].sortDirection = 'none';
    }
    this.activeSortingIndex = -1;
  }
  // Column resize handlers
  onDividerDown(e) {
    this.polyfillMousePosition(e);
    // For touch -  Prevent mousedown firing, and native scroll
    e.preventDefault();
    // Store divider elem for use in move and end events
    this.activeDivider = e.target;
    // Store initial value to calculate change
    e.target.downX = e.x;
    // Reset to avoid reapplying previous change
    this.activeDivider.interactiveWidth = 0;
    window.addEventListener('mousemove', this.onDividerMove);
    window.addEventListener('touchmove', this.onDividerMove);
    window.addEventListener('mouseup', this.onDividerUp);
    window.addEventListener('touchend', this.onDividerUp);
  }
  onDividerMove(e) {
    // TODO: calculate width stretchWidth to drop in correct location
    this.polyfillMousePosition(e);
    const { width, min, max } = this.activeDivider.dataset;
    const diff = e.x - this.activeDivider.downX;
    const newWidth = Math.min(Number(max), Math.max(Number(min), Number(width) + diff));
    const adjustedDiff = newWidth - Number(width);
    this.activeDivider.interactiveWidth = newWidth;
    // Give immediate visual feedback
    this.activeDivider.style.transform = `translateX(${adjustedDiff}px)`;
  }
  onDividerUp() {
    const { index } = this.activeDivider.dataset;
    // Store new width on the field data
    if (this.activeDivider.interactiveWidth) {
      this.fields[Number(index)].width = this.activeDivider.interactiveWidth;
    }
    // Reset visual feedback
    this.activeDivider.style.transform = `translateX(0px)`;
    window.removeEventListener('mousemove', this.onDividerMove);
    window.removeEventListener('touchmove', this.onDividerMove);
    window.removeEventListener('mouseup', this.onDividerUp);
    window.removeEventListener('touchend', this.onDividerUp);
    // Update column stretching before rendering
    this.needsColumnResize = true;
    this.updateColumnStretching();
    // Render to apply change
    this.forceRender++;
  }
  // Column visibility toggle handlers
  toggleVisibilityMenu(e) {
    e.preventDefault();
    // TODO: replace this with contextual menu component, when available
    const visibilityToggle = this.hostElement.shadowRoot.querySelector('.visibility-toggle');
    const menu = visibilityToggle.children[1];
    // By default
    if (visibilityToggle.style.display === 'none') {
      visibilityToggle.style.display = 'block';
      menu.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
    else {
      visibilityToggle.style.display = 'none';
    }
  }
  toggleColumnVisibility(value, columnIndex) {
    this.fields[columnIndex].visible = value;
    this.forceRender++;
    // Update column stretching
    this.needsColumnResize = true;
    this.updateColumnStretching();
  }
  // Resize handlers
  addResizeObserver() {
    if (!resizeObserver) {
      // @ts-ignore
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // Skip if table not visible/attached
          if (entry.target.offsetParent === null) {
            return;
          }
          entry.target.applyResponsiveClasses(entry);
          entry.target.updateColumnStretching();
        }
      });
    }
    this.elMmainContainer = this.hostElement.shadowRoot.querySelector(`.${name}`);
    // Add this instance's callbacks, as resizeObserver is reused
    this.elMmainContainer.applyResponsiveClasses = this.applyResponsiveClasses;
    this.elMmainContainer.updateColumnStretching = this.updateColumnStretching;
    resizeObserver.observe(this.elMmainContainer);
  }
  removeResizeObserver() {
    if (this.elMmainContainer) {
      resizeObserver.unobserve(this.elMmainContainer);
    }
  }
  applyResponsiveClasses() {
    // Apply container-scoped media-query-style classes
    const newIsMobile = this.elMmainContainer.offsetWidth <= 500;
    if (this.isMobile !== newIsMobile) {
      this.forceRender++;
    }
    this.isMobile = newIsMobile;
  }
  updateColumnStretching() {
    // NOTE: any styling padding/margin width changes need to be adjusted here as well
    // Ignore auto-width-check content renders
    if (this.needsAutoWidthParse) {
      return;
    }
    const container = this.elMmainContainer;
    // Minus 2 for border
    const containerWidth = container.offsetWidth - 2;
    const hasContainerWidthChanged = this.lastContainerWidth !== containerWidth;
    // If width hasn't changed, don't re-calculate
    if (!hasContainerWidthChanged && !this.needsColumnResize) {
      return;
    }
    this.needsColumnResize = false;
    this.lastContainerWidth = containerWidth;
    // Don't calculate when mobile layout
    if (container.offsetWidth <= 500) {
      return;
    }
    // The theoretical target width - ignoring any previously applied stretching
    const targetContentWidth = (() => {
      let total = 0;
      // Extra margin on first column
      total += 8;
      if (this.numbered) {
        // 32 for padding+margin
        total += this.numberColumnWidth + 32;
        // this.selectionColumnWidth;
      }
      if (this.selectable) {
        // 32 for padding+margin
        total += this.selectionColumnWidth + 32;
        // If both selectable and numbered - adjust for reduced margin between
        if (this.numbered) {
          total -= 16;
        }
      }
      // Add each visible column's target width
      this.fields.forEach(({ visible = true, width }) => {
        if (visible) {
          // 32 for padding+margin
          total += width + 32;
        }
      });
      return total;
    })();
    // Update value passed to nested content to overcome table display layout
    this.contentWidth = Math.max(targetContentWidth, containerWidth);
    const diff = containerWidth - targetContentWidth;
    if (diff <= 0) {
      // content larger than container (scrollbar), remove all stretching
      this.fields.forEach((field) => (field.stretchWidth = 0));
    }
    else {
      // container larger than content (gap to the right), calculate stretching
      // If stretchWeight set, divide value between total to get final weight
      // If stretchWeight unset, share remainder of 1 (if any) between all unset cols
      let totalSetWeight = 0;
      let unsetColsCount = 0;
      this.fields.forEach(({ visible = true, stretchWeight }) => {
        // Disregard invisible columns
        if (!visible) {
          return;
        }
        if (typeof stretchWeight === 'number') {
          totalSetWeight += stretchWeight;
        }
        else {
          unsetColsCount++;
        }
      });
      const remainderWeight = Math.max(0, 1 - totalSetWeight);
      // Set total to be divided against to be above 1 to keep total set/unset weights equal to 1
      totalSetWeight = Math.max(1, totalSetWeight);
      this.fields.forEach((field) => {
        const { visible = true, stretchWeight } = field;
        if (!visible) {
          return;
        }
        // Actual stretch weight, out of a total 1 for all columns
        let weight = 0;
        if (typeof stretchWeight === 'number') {
          weight = stretchWeight / totalSetWeight;
        }
        else if (remainderWeight > 0) {
          weight = remainderWeight / unsetColsCount;
        }
        // Apply stretching with the weight percentage
        field.stretchWidth = diff * weight;
      });
    }
    this.forceRender++;
  }
  // Auto column width handlers
  calculateAutoWidths() {
    let isVisible = false;
    const columns = this.hostElement.shadowRoot.querySelectorAll(`.${name}__auto-width-check td`);
    columns.forEach((cell) => {
      // Make sure table is actually rendered (eg not display:none etc)
      if (!isVisible && cell.offsetParent !== null) {
        isVisible = true;
      }
      if (!isVisible) {
        return;
      }
      // Update field width with that of largest content
      this.fields[cell.dataset.columnindex].width = cell.clientWidth;
    });
    if (!isVisible) {
      return;
    }
    // Re-render now that widths are updated
    if (TEST_AUTO_WIDTH_RENDER) {
      return;
    }
    // Wrap in setTimeout to avoid warning about forcing render within render callback
    setTimeout(() => {
      this.needsAutoWidthParse = false;
      this.forceRender++;
    });
  }
  // Event triggers
  triggerSortEvent(sortDirection, type, columnIndex) {
    const data = {
      rows: this.rows,
      type,
      sortDirection,
      columnIndex,
    };
    emitEvent(this, 'scaleSort', data);
  }
  triggerEditEvent(value, rowIndex, columnIndex) {
    const data = {
      rows: this.rows,
      rowIndex,
      columnIndex,
      value,
    };
    emitEvent(this, 'scaleEdit', data);
    // Force render for checkboxes
    this.forceRender++;
  }
  onTableScroll() {
    if (!this.freezeHeader || this.hideHeader) {
      return;
    }
    // Freeze header
    const scrollY = this.elScrollContainer.scrollTop;
    this.elTableHead.style.transform = `translateY(${scrollY}px)`;
  }
  renderSettingsMenu() {
    return (h("scale-menu-flyout", { class: `${name}__settings-menu` },
      h("scale-button", { slot: "trigger", variant: "secondary", "icon-only": true, "data-sortable": this.isSortable },
        h("scale-icon-service-settings", { accessibilityTitle: "Table options" })),
      h("scale-menu-flyout-list", null,
        this.isSortable && (h("scale-menu-flyout-item", { id: "sortBy", onClick: this.handleMenuListClick },
          h("scale-icon-action-sort", { slot: "prefix" }),
          "Sort By",
          h("scale-menu-flyout-list", { slot: "sublist", id: "sortByList" }, this.fields.map(({ label, type, sortable, sortDirection = 'none' }, columnIndex) => {
            if (!sortable) {
              return '';
            }
            return (h("scale-menu-flyout-item", { "onScale-select": () => this.toggleTableSorting(sortDirection, columnIndex, type) },
              sortDirection === 'ascending' && (h("scale-icon-navigation-collapse-up", { size: 16, slot: "prefix" })),
              sortDirection === 'descending' && (h("scale-icon-navigation-collapse-down", { size: 16, slot: "prefix" })),
              sortDirection === 'none' && (h("scale-icon-navigation-collapse-up", { size: 16, slot: "prefix", style: { opacity: '0' } })),
              label || type));
          })))),
        h("scale-menu-flyout-item", { id: "toggleVisibility", onClick: this.handleMenuListClick },
          h("scale-icon-action-hide-password", { slot: "prefix" }),
          "Toggle Visibility",
          h("scale-menu-flyout-list", { slot: "sublist", "close-on-select": "false", id: "toggleVisibilityList" }, this.fields.map(({ label, type, visible = CELL_TYPES[type].defaults.visible !== undefined
            ? CELL_TYPES[type].defaults.visible
            : CELL_DEFAULTS.visible, }, columnIndex) => {
            return (h("scale-menu-flyout-item", { checkable: "checkbox", checked: !!visible, "onScale-select": () => this.toggleColumnVisibility(!visible, columnIndex) }, label || type));
          }))),
        this.selectable && (h("scale-menu-flyout-item", { "onScale-select": () => {
            this.elToggleSelectAll.checked =
              !this.elToggleSelectAll.checked;
            this.toggleSelectAll();
          } },
          h("scale-icon", { slot: "prefix", path: "M20.9328 10.6668C20.5132 10.6668 20.1731 11.0069 20.1731 11.4265V20.3269H1.5194V1.67309H16.5049C16.9245 1.67309 17.2646 1.33292 17.2646 0.913386C17.2646 0.49385 16.9245 0.153687 16.5049 0.153687H0.759699C0.340163 0.153687 0 0.49385 0 0.913386V21.0866C0 21.5062 0.340163 21.8463 0.759699 21.8463H20.9328C21.3523 21.8463 21.6925 21.5062 21.6925 21.0866V11.4265C21.6925 11.0069 21.3524 10.6668 20.9328 10.6668ZM23.7774 0.653387C23.4807 0.356739 22.9997 0.356739 22.703 0.653387L10.3293 13.0272L7.25501 9.9529C6.9583 9.65625 6.47732 9.65625 6.18061 9.9529C5.88396 10.2496 5.88396 10.7306 6.18061 11.0273L9.7921 14.6388C9.94045 14.7871 10.1349 14.8613 10.3293 14.8613C10.5237 14.8613 10.7181 14.7871 10.8665 14.6388L23.7774 1.72778C24.0741 1.43108 24.0741 0.950095 23.7774 0.653387Z" }),
          "Select / Deselect All")),
        h("slot", { name: "menu" }))));
  }
  renderTable() {
    if (this.needsAutoWidthParse) {
      return this.renderAutoWidthCheck();
    }
    return (h("div", { ref: (el) => (this.elScrollContainer = el), class: `${name}__scroll-container`, style: { height: this.height || 'auto' }, onScroll: () => this.onTableScroll() },
      h("table", { class: `${name}__table` },
        this.renderTableHead(),
        this.renderTableBody())));
  }
  renderAutoWidthCheck() {
    // Calculate number column width
    this.numberColumnWidth = this.rows.length.toString().length * 9;
    // Get columns with width option set to 'auto'
    const autoCols = [];
    this.fields.forEach(({ type, width = CELL_TYPES[type].defaults.width || CELL_DEFAULTS.width, }, columnIndex) => {
      if (width === 'auto') {
        autoCols.push(columnIndex);
      }
    });
    if (!autoCols.length) {
      this.needsAutoWidthParse = false;
      return this.renderTable();
    }
    return (h("table", { class: `${name}__auto-width-check ${name}__table` },
      h("tr", { class: `tbody__row` }, autoCols.map((columnIndex) => {
        const field = this.fields[columnIndex];
        const { type, cell = CELL_TYPES[type] } = field;
        // Find largest content of each type. Use custom getter if exists
        const getLongestContent = cell.getLongestContent || this.getDefaultLongestContent;
        const content = getLongestContent({
          rows: this.rows,
          columnIndex,
          field,
        });
        return (h("td", { class: `tbody__cell`, style: { width: 'auto' }, "data-columnindex": columnIndex }, cell.render({
          field,
          content,
          component: this,
          isAutoWidthCheck: true,
        })));
      }))));
  }
  renderTableHead() {
    return (h("thead", { ref: (el) => (this.elTableHead = el), class: `thead ${this.hideHeader ? 'sr-only' : ''}` },
      h("tr", { class: `thead__row` },
        this.numbered && this.renderTableHeadNumberedCell(),
        this.selectable && this.renderTableHeadSelectableCell(),
        this.fields.map(({ type, label = '', 
        // Params can be set optionally in the fields options, in the cell type
        // descriptor class, or falls back to common defaults
        visible = CELL_TYPES[type].defaults.visible !== undefined
          ? CELL_TYPES[type].defaults.visible
          : CELL_DEFAULTS.visible, sortable, sortDirection = 'none', resizable = CELL_TYPES[type].defaults.resizable !== undefined
          ? CELL_TYPES[type].defaults.resizable
          : CELL_DEFAULTS.resizable, width = CELL_TYPES[type].defaults.width || CELL_DEFAULTS.width, minWidth = CELL_TYPES[type].defaults.minWidth ||
          CELL_DEFAULTS.minWidth, maxWidth = CELL_TYPES[type].defaults.maxWidth ||
          CELL_DEFAULTS.maxWidth, textAlign = CELL_TYPES[type].defaults.textAlign ||
          CELL_DEFAULTS.textAlign, stretchWidth = 0, }, columnIndex) => {
          if (!visible) {
            return;
          }
          const props = {
            class: `thead__cell`,
            style: {
              width: `calc(${width}px + ${stretchWidth}px)`,
              'justify-content': textAlign,
            },
            'data-type': type,
          };
          if (sortable) {
            props['aria-sort'] = sortDirection;
          }
          return (h("th", Object.assign({ title: "Activate to sort column" }, props, (sortable
            ? {
              onKeyDown: (event) => {
                if (['Enter', ' '].includes(event.key)) {
                  this.toggleTableSorting(sortDirection, columnIndex, type);
                }
              },
              onClick: () => {
                this.toggleTableSorting(sortDirection, columnIndex, type);
              },
              tabindex: 0,
              class: `${props.class} thead-sortable`,
            }
            : {})),
            h("div", { class: `thead__title` },
              h("span", { class: `thead__text` },
                sortable && h("span", { class: `thead__arrow-top` }),
                sortable && h("span", { class: `thead__arrow-bottom` }),
                label)),
            resizable && (h("div", { class: `thead__divider`, "data-index": columnIndex, "data-width": width, "data-min": minWidth, "data-max": maxWidth, onMouseDown: (e) => this.onDividerDown(e), onTouchStart: (e) => this.onDividerDown(e), "aria-hidden": "true" },
              h("div", { class: `thead__divider-line` })))));
        }))));
  }
  renderTableHeadNumberedCell() {
    return (h("th", { class: `thead__cell  thead__cell--numbered`, style: { width: this.numberColumnWidth + 'px' } },
      h("span", { class: "scl-body" }, "#")));
  }
  renderTableHeadSelectableCell() {
    const style = {
      width: this.selectionColumnWidth + 'px',
    };
    // Make selection and numbered cells closer than regular padding
    if (this.numbered) {
      style.paddingLeft = '0px';
    }
    return (h("th", { class: `thead__cell thead__cell--selection`, style: style, title: "Select" },
      h("scale-checkbox", { ref: (el) => (this.elToggleSelectAll = el), onScaleChange: () => this.toggleSelectAll(), hideLabel: true, "aria-label": "Select" })));
  }
  renderTableBody() {
    return (h("tbody", { class: `tbody` }, (() => {
      const rows = [];
      // Pagination functionality
      const total = this.rows.length;
      const start = this.paginationStart;
      const end = Math.min(total, this.paginationStart + this.pageSize);
      for (let rowIndex = start; rowIndex < end; rowIndex++) {
        const rowData = this.rows[rowIndex];
        const rowNestedContent = [];
        let isNestedExpanded = false;
        rows.push(h("tr", { class: `tbody__row` },
          this.renderMobileTitle(rowData),
          this.numbered && this.renderTableBodyNumberedCell(rowIndex),
          this.selectable &&
            this.renderTableBodySelectableCell(rowIndex),
          rowData.map((cellContent, columnIndex) => {
            const field = this.fields[columnIndex];
            const visible = field.visible !== undefined
              ? field.visible
              : CELL_TYPES[field.type].defaults.visible !== undefined
                ? CELL_TYPES[field.type].defaults.visible
                : CELL_DEFAULTS.visible;
            if (!visible) {
              return;
            }
            // Add rows nested tables to array
            if (field.type === 'html') {
              if (!!cellContent.isExpanded) {
                isNestedExpanded = true;
              }
              rowNestedContent.push({
                content: cellContent,
              });
            }
            return this.renderTableCell(field, cellContent, rowIndex, columnIndex);
          })));
        // Add second row for nested content if any within the row are expanded
        if (rowNestedContent.length) {
          rows.push(h("div", { class: `tbody__nested`, style: {
              width: this.contentWidth + 'px',
              display: isNestedExpanded ? 'block' : 'none',
            } },
            h("td", { class: `tbody__nested-cell` }, rowNestedContent.map(({ content }) => {
              return (h("div", { ref: (el) => {
                  if (el) {
                    // Remove content from other pages
                    let child = el.lastElementChild;
                    while (child) {
                      el.removeChild(child);
                      child = el.lastElementChild;
                    }
                    // Append actual content
                    el.appendChild(content);
                  }
                } }));
            }))));
        }
      }
      return rows;
    })()));
  }
  renderMobileTitle(rowData) {
    if (this.mobileTitleIndex === -1) {
      return h("h5", { class: `tbody__mobile-title scl-h5` }, "\u00A0");
    }
    return (h("h5", { class: `tbody__mobile-title scl-h5` }, rowData[this.mobileTitleIndex]));
  }
  renderTableBodyNumberedCell(rowIndex) {
    return (h("td", { class: `tbody__cell tbody__cell--numbered`, style: { width: this.numberColumnWidth + 'px' } },
      h("p", { class: "scl-body" }, rowIndex + 1)));
  }
  renderTableBodySelectableCell(rowIndex) {
    const style = {
      width: this.selectionColumnWidth + 'px',
    };
    if (this.numbered) {
      style.marginLeft = '0px';
      style.paddingLeft = '0px';
    }
    return (h("td", { title: this.rows[rowIndex][0], class: `tbody__cell tbody__cell--selection`, style: style },
      h("scale-checkbox", { checked: this.rows[rowIndex].selected, onScaleChange: (e) => this.toggleRowSelect(e, rowIndex), hideLabel: true })));
  }
  renderTableCell(field, content, rowIndex, columnIndex) {
    const cell = CELL_TYPES[field.type];
    const { label, 
    // Use custom field, or default defined in class, or fallback default
    width = cell.defaults.width || CELL_DEFAULTS.width, stretchWidth = 0, mobileTitle, // For text cells
     } = field;
    return (h("td", { class: `tbody__cell${mobileTitle ? ` tbody__cell--used-as-mobile-title` : ``}`, style: { width: `calc(${width}px + ${stretchWidth}px)` } },
      h("div", { class: `tbody__mobile-label` }, label),
      cell.render({
        field,
        content,
        component: this,
        rowIndex,
        columnIndex,
      })));
  }
  renderTableInfo() {
    return (h("div", { class: `info` },
      this.selectable && !!this.selection.length && (h("div", { class: `info__selection` }, `${this.selection.length} row${this.selection.length > 1 ? 's' : ''} selected`)),
      this.isPagination && (h("scale-pagination", { class: `info__pagination`, hideBorder: !this.isMobile, startElement: this.paginationStart, totalElements: this.rows.length, pageSize: this.pageSize, onScalePagination: ({ detail }) => (this.paginationStart = detail.startElement) }))));
  }
  /* 10. Render */
  render() {
    if (this.dataNeedsCheck) {
      this.hasData = this.checkHasData();
    }
    return (h(Host, { style: {
        display: this.visible ? 'block' : 'none',
      } },
      this.styles && h("style", null, this.styles),
      h("div", { class: this.getCssClassMap() },
        h("div", { class: `${name}__title-block` },
          this.heading && (h("h4", { class: `${name}__heading scl-h5` }, this.heading)),
          h("div", null,
            h("slot", null)),
          this.hasData && this.renderSettingsMenu()),
        this.hasData && this.renderTable(),
        this.hasData &&
          !this.hideInfo &&
          !this.needsAutoWidthParse &&
          (this.selectable || this.isPagination) &&
          this.renderTableInfo())));
  }
  static get is() { return "scale-data-grid"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["data-grid.css"]
  }; }
  static get styleUrls() { return {
    "$": ["data-grid.css"]
  }; }
  static get properties() { return {
    "fields": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Input fields config array"
      },
      "attribute": "fields",
      "reflect": false
    },
    "freezeHeader": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Freeze header row from scrolling"
      },
      "attribute": "freeze-header",
      "reflect": false,
      "defaultValue": "false"
    },
    "heading": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Heading string"
      },
      "attribute": "heading",
      "reflect": false,
      "defaultValue": "''"
    },
    "height": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set static table height, by default will auto-resize"
      },
      "attribute": "height",
      "reflect": false
    },
    "hideBorder": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set to true to remove border"
      },
      "attribute": "hide-border",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideHeader": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set to true to hide header row"
      },
      "attribute": "hide-header",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideInfo": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set to true to remove info footer block including pagination and selection status"
      },
      "attribute": "hide-info",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideMenu": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set to true to hide settings menu"
      },
      "attribute": "hide-menu",
      "reflect": false,
      "defaultValue": "false"
    },
    "numbered": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set to true to add numbers column"
      },
      "attribute": "numbered",
      "reflect": false,
      "defaultValue": "false"
    },
    "pageSize": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set number of rows to display per pagination page"
      },
      "attribute": "page-size",
      "reflect": false,
      "defaultValue": "Infinity"
    },
    "rows": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Input data array"
      },
      "attribute": "rows",
      "reflect": false
    },
    "selectable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set to true to add selection column"
      },
      "attribute": "selectable",
      "reflect": false,
      "defaultValue": "false"
    },
    "selection": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Read-only selection array - populated with raw data from selected rows"
      },
      "defaultValue": "[]"
    },
    "shadeAlternate": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Shade every second row darker"
      },
      "attribute": "shade-alternate",
      "reflect": false,
      "defaultValue": "true"
    },
    "styles": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "(optional) Injected css styles"
      },
      "attribute": "styles",
      "reflect": false
    },
    "visible": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "(optional) Set to false to hide table, used for nested tables to re-render upon toggle"
      },
      "attribute": "visible",
      "reflect": false,
      "defaultValue": "true"
    }
  }; }
  static get states() { return {
    "forceRender": {},
    "paginationStart": {},
    "scrollY": {}
  }; }
  static get events() { return [{
      "method": "scaleEdit",
      "name": "scale-edit",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggered every time the editable cells are changed, updating the original rows data"
      },
      "complexType": {
        "original": "DataGridEditEventDetail",
        "resolved": "DataGridEditEventDetail",
        "references": {
          "DataGridEditEventDetail": {
            "location": "local"
          }
        }
      }
    }, {
      "method": "scaleEditLegacy",
      "name": "scaleEdit",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "DataGridEditEventDetail",
        "resolved": "DataGridEditEventDetail",
        "references": {
          "DataGridEditEventDetail": {
            "location": "local"
          }
        }
      }
    }, {
      "method": "scaleSort",
      "name": "scale-sort",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggered every time the data is sorted, changing original rows data"
      },
      "complexType": {
        "original": "DataGridSortedEventDetail",
        "resolved": "DataGridSortedEventDetail",
        "references": {
          "DataGridSortedEventDetail": {
            "location": "local"
          }
        }
      }
    }, {
      "method": "scaleSortLegacy",
      "name": "scaleSort",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "name": "deprecated",
            "text": "in v3 in favor of kebab-case event names"
          }],
        "text": ""
      },
      "complexType": {
        "original": "DataGridSortedEventDetail",
        "resolved": "DataGridSortedEventDetail",
        "references": {
          "DataGridSortedEventDetail": {
            "location": "local"
          }
        }
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "fields",
      "methodName": "fieldsHandler"
    }, {
      "propName": "rows",
      "methodName": "rowsHandler"
    }]; }
}
