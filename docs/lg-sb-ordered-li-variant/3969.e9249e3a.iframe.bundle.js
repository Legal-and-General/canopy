(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[3969],{"./projects/canopy/src/lib/table/table-body/table-body.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>LgTableBodyComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),table_row_component=__webpack_require__("./projects/canopy/src/lib/table/table-row/table-row.component.ts");let LgTableBodyComponent=class LgTableBodyComponent{constructor(){this.class=!0}static#_=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-table-body"]}],rows:[{type:core.ContentChildren,args:[table_row_component.D]}]}};LgTableBodyComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-table-body]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0})],LgTableBodyComponent)},"./projects/canopy/src/lib/table/table-cell/table-cell.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>LgTableCellComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_cell_componentngResource=__webpack_require__("./projects/canopy/src/lib/table/table-cell/table-cell.component.scss?ngResource"),table_cell_componentngResource_default=__webpack_require__.n(table_cell_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),table_expanded_detail_component=__webpack_require__("./projects/canopy/src/lib/table/table-expanded-detail/table-expanded-detail.component.ts"),table_interface=__webpack_require__("./projects/canopy/src/lib/table/table.interface.ts"),table_row_toggle_component=__webpack_require__("./projects/canopy/src/lib/table/table-row-toggle/table-row-toggle.component.ts");let LgTableCellComponent=class LgTableCellComponent{get colspanAttr(){return void 0!==typeof this.colspan?this.colspan:null}get expandableClass(){return this.expandableDetail}get toggleClass(){return this.toggle}constructor(cd){this.cd=cd,this._align=table_interface.Q.Start,this._showLabel=!0,this._columnLabel="",this.alignOptions=table_interface.Q,this.class="lg-table-cell",this.stack=!1}set rowIndex(rowIndex){this._rowIndex=rowIndex}get rowIndex(){return this._rowIndex}set tableId(tableId){this._tableId=tableId}get tableId(){return this._tableId}set columnLabel(columnLabel){this._columnLabel=columnLabel,this.cd.detectChanges()}get columnLabel(){return this._columnLabel}set align(align){this._align=align,this.cd.detectChanges()}get align(){return this._align}set showLabel(showLabel){this._showLabel=showLabel,this.cd.detectChanges()}get showLabel(){return this._showLabel}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={colspan:[{type:core.Input}],class:[{type:core.HostBinding,args:["class"]}],colspanAttr:[{type:core.HostBinding,args:["attr.colspan"]}],expandableClass:[{type:core.HostBinding,args:["class.lg-table-cell--expandable-content"]}],toggleClass:[{type:core.HostBinding,args:["class.lg-table-cell--toggle-cell"]}],stack:[{type:core.HostBinding,args:["class.lg-table-cell--stacked"]},{type:core.Input}],label:[{type:core.ViewChild,args:["label",{static:!0}]}],content:[{type:core.ViewChild,args:["content",{static:!0}]}],expandableDetail:[{type:core.ContentChild,args:[table_expanded_detail_component.j,{static:!1}]}],toggle:[{type:core.ContentChild,args:[table_row_toggle_component.v,{static:!1}]}]}};LgTableCellComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-table-cell]",template:'<span\n  #label\n  [ngClass]="{\n    \'lg-visually-hidden\': !showLabel\n  }"\n  aria-hidden="true"\n  class="lg-table-cell__label"\n  >{{ columnLabel }}\n</span>\n<div\n  #content\n  class="lg-table-cell__content"\n  [ngClass]="{\n    \'lg-table-cell__content--align-end\': align === alignOptions.End,\n    \'lg-table-cell__content--hidden-label\': !showLabel\n  }"\n>\n  <ng-content></ng-content>\n</div>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[common.NgClass],standalone:!0,host:{ngSkipHydration:"true"},styles:[table_cell_componentngResource_default()]})],LgTableCellComponent)},"./projects/canopy/src/lib/table/table-expanded-detail/table-expanded-detail.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>LgTableExpandedDetailComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_expanded_detail_componentngResource=__webpack_require__("./projects/canopy/src/lib/table/table-expanded-detail/table-expanded-detail.component.scss?ngResource"),table_expanded_detail_componentngResource_default=__webpack_require__.n(table_expanded_detail_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgTableExpandedDetailComponent=class LgTableExpandedDetailComponent{constructor(){this.class=!0}static#_=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-table-expanded-detail"]}]}};LgTableExpandedDetailComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-table-expanded-detail",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[table_expanded_detail_componentngResource_default()]})],LgTableExpandedDetailComponent)},"./projects/canopy/src/lib/table/table-head-cell/table-head-cell.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>LgTableHeadCellComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_head_cell_componentngResource=__webpack_require__("./projects/canopy/src/lib/table/table-head-cell/table-head-cell.component.scss?ngResource"),table_head_cell_componentngResource_default=__webpack_require__.n(table_head_cell_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),table_interface=__webpack_require__("./projects/canopy/src/lib/table/table.interface.ts");let LgTableHeadCellComponent=class LgTableHeadCellComponent{get alignment(){return this.align===table_interface.Q.End?"right":"left"}constructor(element){this.element=element,this.class="lg-table-head-cell",this.align=table_interface.Q.Start,this.showLabel=!0}static#_=this.ctorParameters=()=>[{type:core.ElementRef}];static#_2=this.propDecorators={class:[{type:core.HostBinding,args:["class"]}],alignment:[{type:core.HostBinding,args:["style.text-align"]}],align:[{type:core.Input}],showLabel:[{type:core.Input}]}};LgTableHeadCellComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-table-head-cell]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[table_head_cell_componentngResource_default()]})],LgTableHeadCellComponent)},"./projects/canopy/src/lib/table/table-head/table-head.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>LgTableHeadComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_head_componentngResource=__webpack_require__("./projects/canopy/src/lib/table/table-head/table-head.component.scss?ngResource"),table_head_componentngResource_default=__webpack_require__.n(table_head_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),table_row_component=__webpack_require__("./projects/canopy/src/lib/table/table-row/table-row.component.ts");let LgTableHeadComponent=class LgTableHeadComponent{constructor(){this.class="lg-table-head"}ngAfterContentChecked(){this.headRow&&(this.headRow.isHeadRow=!0)}static#_=this.propDecorators={class:[{type:core.HostBinding,args:["class"]}],headRow:[{type:core.ContentChild,args:[table_row_component.D,{static:!1}]}]}};LgTableHeadComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-table-head]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[table_head_componentngResource_default()]})],LgTableHeadComponent)},"./projects/canopy/src/lib/table/table-row-toggle/table-row-toggle.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>LgTableRowToggleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_row_toggle_componentngResource=__webpack_require__("./projects/canopy/src/lib/table/table-row-toggle/table-row-toggle.component.scss?ngResource"),table_row_toggle_componentngResource_default=__webpack_require__.n(table_row_toggle_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let LgTableRowToggleComponent=class LgTableRowToggleComponent{constructor(cd){this.cd=cd,this.context="",this.isActive=!1,this.class="lg-table-row-toggle"}set tableId(tableId){this._tableId=tableId,this.cd.detectChanges()}get tableId(){return this._tableId}set rowId(rowId){this._rowId=rowId,this.cd.detectChanges()}get rowId(){return this._rowId}get controlsId(){return`lg-table-${this.tableId}-detail-row-${this.rowId}`}get id(){return`lg-table-${this.tableId}-toggle-row-${this.rowId}`}get labelText(){return this.isActive?"Collapse":"Expand"}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={isActive:[{type:core.Input}],class:[{type:core.HostBinding,args:["class"]}]}};LgTableRowToggleComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-table-row-toggle",template:'<button\n  type="button"\n  class="lg-table-row-toggle__btn"\n  [id]="id"\n  [attr.aria-expanded]="isActive"\n  [attr.aria-controls]="controlsId"\n>\n  <lg-icon\n    class="lg-table-row-toggle__heading-icon"\n    name="chevron-down"\n    [ngClass]="{\n      \'lg-table-row-toggle__heading-icon--active\': isActive\n    }"\n  ></lg-icon>\n  <span class="lg-table-row-toggle__label">{{ labelText }}</span>\n  <span class="lg-visually-hidden">{{ context }}</span>\n</button>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[icon_component.A,common.NgClass],styles:[table_row_toggle_componentngResource_default()]})],LgTableRowToggleComponent)},"./projects/canopy/src/lib/table/table-row/table-row.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>LgTableRowComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_row_componentngResource=__webpack_require__("./projects/canopy/src/lib/table/table-row/table-row.component.scss?ngResource"),table_row_componentngResource_default=__webpack_require__.n(table_row_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),table_cell_component=__webpack_require__("./projects/canopy/src/lib/table/table-cell/table-cell.component.ts"),table_head_cell_component=__webpack_require__("./projects/canopy/src/lib/table/table-head-cell/table-head-cell.component.ts");let LgTableRowComponent=class LgTableRowComponent{set isHeadRow(isHeadRow){this._isHeadRow=isHeadRow,this.cd.detectChanges()}get isHeadRow(){return this._isHeadRow}get hideActiveClass(){return this.isHidden}get id(){return this.ariaId}get ariaHidden(){return!!this.isHidden||null}get labelledBy(){return this.ariaLabelledBy}get isToggledActive(){return!!this.tableCellComponent?.toggleClass?.isActive}get hasToggle(){return!!this.tableCellComponent?.toggleClass}constructor(cd){this.cd=cd,this._isHeadRow=!1,this.isDetailRow=!1,this.ariaLabelledBy=null,this.ariaId=null,this.isHidden=!1,this.class="lg-table-row"}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={isHidden:[{type:core.Input}],class:[{type:core.HostBinding,args:["class"]}],hideActiveClass:[{type:core.HostBinding,args:["class.lg-table-row--hidden"]}],id:[{type:core.HostBinding,args:["attr.id"]}],ariaHidden:[{type:core.HostBinding,args:["attr.aria-hidden"]}],labelledBy:[{type:core.HostBinding,args:["attr.aria-labelledby"]}],bodyCells:[{type:core.ContentChildren,args:[table_cell_component.b]}],headCells:[{type:core.ContentChildren,args:[table_head_cell_component.J]}],tableCellComponent:[{type:core.ContentChild,args:[table_cell_component.b,{static:!0}]}],isToggledActive:[{type:core.HostBinding,args:["class.lg-table-row__toggle--active"]}],hasToggle:[{type:core.HostBinding,args:["class.lg-table-row__toggle"]}]}};LgTableRowComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-table-row]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[table_row_componentngResource_default()]})],LgTableRowComponent)},"./projects/canopy/src/lib/table/table.interface.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var AlignmentOptions,TableColumnLayoutBreakpoints;__webpack_require__.d(__webpack_exports__,{Q:()=>AlignmentOptions,j:()=>TableColumnLayoutBreakpoints}),function(AlignmentOptions){AlignmentOptions.Start="start",AlignmentOptions.End="end"}(AlignmentOptions||(AlignmentOptions={})),function(TableColumnLayoutBreakpoints){TableColumnLayoutBreakpoints.Small="sm",TableColumnLayoutBreakpoints.Medium="md",TableColumnLayoutBreakpoints.Large="lg"}(TableColumnLayoutBreakpoints||(TableColumnLayoutBreakpoints={}))},"./projects/canopy/src/lib/table/table/table.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>LgTableComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_componentngResource=__webpack_require__("./projects/canopy/src/lib/table/table/table.component.scss?ngResource"),table_componentngResource_default=__webpack_require__.n(table_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),table_body_component=__webpack_require__("./projects/canopy/src/lib/table/table-body/table-body.component.ts"),table_head_component=__webpack_require__("./projects/canopy/src/lib/table/table-head/table-head.component.ts"),table_interface=__webpack_require__("./projects/canopy/src/lib/table/table.interface.ts");let nextUniqueId=0,LgTableComponent=class LgTableComponent{set showColumnsAt(columnsBreakpoint){this.addColumnsBreakpoint(columnsBreakpoint),this._showColumnsAt=columnsBreakpoint}get showColumnsAt(){return this._showColumnsAt}set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-table--${this.variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-table--${variant}`),this._variant=variant}get variant(){return this._variant}get expandableClass(){return this.isExpandable}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.isExpandable=!1,this.id=nextUniqueId++,this.columns=new Map,this.class="lg-table",this.variant="striped",this.showColumnsAt=table_interface.j.Medium}ngAfterContentChecked(){this.tableHead&&this.tableBody&&(this.tableBody.rows.forEach((row=>row.bodyCells.forEach((cell=>{cell.expandableDetail&&(row.isDetailRow=!0)})))),this.isExpandable=this.tableBody.rows.some((row=>row.isDetailRow)),this.handleHeadCells(),this.handleDetailRows(),this.handleBodyRows())}addColumnsBreakpoint(columnsBreakpoint){this.renderer.removeClass(this.hostElement.nativeElement,`lg-table--columns-${this._showColumnsAt}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-table--columns-${columnsBreakpoint}`)}handleHeadCells(){this.tableHead.headRow.headCells.forEach(((cell,cellIndex)=>{this.columns.set(cellIndex,{align:cell.align,label:cell.element.nativeElement.innerHTML,showLabel:cell.showLabel})}))}handleDetailRows(){this.tableBody.rows.filter((row=>row.isDetailRow)).forEach(((detailRow,index)=>{detailRow.ariaId=`lg-table-${this.id}-detail-row-${index}`,detailRow.ariaLabelledBy=`lg-table-${this.id}-toggle-row-${index}`}))}handleBodyRows(){this.tableBody.rows.filter((row=>!row.isDetailRow)).forEach(((row,index)=>{row.bodyCells.filter((cell=>!cell.expandableDetail)).forEach(((cell,cellIndex)=>{const{align,showLabel,label}=this.columns.get(cellIndex);cell.align=align,cell.showLabel=showLabel,cell.label.nativeElement.innerHTML=label,cell.tableId=this.id}));let toggleContext="";row.bodyCells.forEach(((cell,cellIndex)=>{1===cellIndex&&(toggleContext=cell.content.nativeElement.innerHTML)})),row.bodyCells.filter((cell=>!!cell.toggle)).forEach((cell=>{cell.toggle.tableId=this.id,cell.toggle.rowId=index,cell.toggle.context=toggleContext}))}))}static#_=this.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}];static#_2=this.propDecorators={showColumnsAt:[{type:core.Input}],variant:[{type:core.Input}],class:[{type:core.HostBinding,args:["class"]}],tableHead:[{type:core.ContentChild,args:[table_head_component.n,{static:!1}]}],tableBody:[{type:core.ContentChild,args:[table_body_component.z,{static:!1}]}],expandableClass:[{type:core.HostBinding,args:["class.lg-table--expandable"]}]}};LgTableComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-table]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[table_componentngResource_default()]})],LgTableComponent)},"./projects/canopy/src/lib/table/table-cell/table-cell.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-table-cell {\n  display: flex;\n  align-items: center;\n}\n.lg-table-cell--stacked {\n  flex-direction: column;\n  align-items: stretch;\n}\n.lg-table-cell--stacked .lg-table-cell__label {\n  margin-bottom: var(--space-xxs);\n}\n.lg-table-cell--stacked .lg-table-cell__content {\n  margin-left: 0;\n  margin-bottom: var(--space-md);\n  text-align: start;\n}\n.lg-table-cell--stacked:last-child .lg-table-cell__content {\n  margin-bottom: 0;\n}\n.lg-table-cell--toggle-cell {\n  order: 1;\n  padding: 0;\n}\n.lg-table-cell--toggle-cell .lg-table-cell__label {\n  display: none;\n}\n.lg-table-cell--toggle-cell .lg-table-cell__content {\n  margin-left: 0;\n}\n\n.lg-table-cell__content {\n  text-align: end;\n  margin-left: auto;\n}\n\n.lg-table-cell__content--hidden-label {\n  margin-left: 0;\n  text-align: start;\n}\n\n.lg-table-cell--expandable-content .lg-table-cell__label {\n  padding-right: 0;\n}\n.lg-table-cell--expandable-content .lg-table-cell__content {\n  margin-left: 0;\n}\n\n.lg-table-cell__label {\n  font-weight: var(--font-weight-medium);\n  padding-right: var(--space-md);\n}\n\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-cell {\n    display: table-cell;\n    padding: var(--space-sm);\n  }\n}\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-cell--toggle-cell {\n    min-width: var(--table-toggle-width);\n    padding: 0;\n  }\n}\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-cell__content {\n    margin-bottom: 0;\n    text-align: left;\n  }\n}\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-cell__content--align-end {\n    text-align: right;\n  }\n}\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-cell__label {\n    display: none;\n  }\n}\n\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-cell {\n    display: table-cell;\n    padding: var(--space-sm);\n  }\n}\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-cell--toggle-cell {\n    min-width: var(--table-toggle-width);\n    padding: 0;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-cell__content {\n    margin-bottom: 0;\n    text-align: left;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-cell__content--align-end {\n    text-align: right;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-cell__label {\n    display: none;\n  }\n}\n\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-cell {\n    display: table-cell;\n    padding: var(--space-sm);\n  }\n}\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-cell--toggle-cell {\n    min-width: var(--table-toggle-width);\n    padding: 0;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-cell__content {\n    margin-bottom: 0;\n    text-align: left;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-cell__content--align-end {\n    text-align: right;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-cell__label {\n    display: none;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/table/table-expanded-detail/table-expanded-detail.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-table-expanded-detail {\n  white-space: normal;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/table/table-head-cell/table-head-cell.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-table-head-cell {\n  display: block;\n  font-weight: var(--font-weight-medium);\n  background-color: transparent;\n  border-bottom: solid var(--table-header-border-width) var(--table-header-border-color);\n  padding: var(--space-xs) 0;\n  vertical-align: bottom;\n}\n.lg-table-head-cell--align-end {\n  text-align: right;\n}\n\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-head-cell {\n    padding: var(--space-sm);\n    display: table-cell;\n  }\n}\n\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-head-cell {\n    padding: var(--space-sm);\n    display: table-cell;\n  }\n}\n\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-head-cell {\n    padding: var(--space-sm);\n    display: table-cell;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/table/table-head/table-head.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n@media (max-width: 19.94rem) {\n  .lg-table--columns-sm .lg-table-head {\n    border: 0 !important;\n    clip: rect(0 0 0 0) !important;\n    height: auto !important;\n    margin: 0 !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 0.0625em !important;\n    white-space: nowrap !important;\n  }\n}\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-head {\n    display: table-header-group;\n  }\n}\n\n@media (max-width: 47.94rem) {\n  .lg-table--columns-md .lg-table-head {\n    border: 0 !important;\n    clip: rect(0 0 0 0) !important;\n    height: auto !important;\n    margin: 0 !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 0.0625em !important;\n    white-space: nowrap !important;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-head {\n    display: table-header-group;\n  }\n}\n\n@media (max-width: 63.94rem) {\n  .lg-table--columns-lg .lg-table-head {\n    border: 0 !important;\n    clip: rect(0 0 0 0) !important;\n    height: auto !important;\n    margin: 0 !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 0.0625em !important;\n    white-space: nowrap !important;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-head {\n    display: table-header-group;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/table/table-row-toggle/table-row-toggle.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-table-row-toggle {\n  font-weight: var(--font-weight-medium);\n}\n.lg-table-row-toggle__btn {\n  border: none;\n  background: transparent;\n  appearance: none;\n  cursor: pointer;\n  padding: 0 var(--space-xxs) 0 0;\n  min-width: var(--table-toggle-width);\n  min-height: var(--table-toggle-width);\n}\n.lg-table-row-toggle__btn:focus-visible {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-table-row-toggle__heading-icon {\n  transition: transform var(--animation-duration) var(--animation-fn);\n  margin-right: var(--space-xxs);\n}\n.lg-table-row-toggle__heading-icon--active {\n  transform: rotateX(180deg);\n}\n\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-row-toggle {\n    font-weight: normal;\n  }\n}\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-row-toggle__btn {\n    padding: 0;\n  }\n}\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-row-toggle__label {\n    border: 0 !important;\n    clip: rect(0 0 0 0) !important;\n    height: auto !important;\n    margin: 0 !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 0.0625em !important;\n    white-space: nowrap !important;\n  }\n}\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-row-toggle__heading-icon {\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-row-toggle {\n    font-weight: normal;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-row-toggle__btn {\n    padding: 0;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-row-toggle__label {\n    border: 0 !important;\n    clip: rect(0 0 0 0) !important;\n    height: auto !important;\n    margin: 0 !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 0.0625em !important;\n    white-space: nowrap !important;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-row-toggle__heading-icon {\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-row-toggle {\n    font-weight: normal;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-row-toggle__btn {\n    padding: 0;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-row-toggle__label {\n    border: 0 !important;\n    clip: rect(0 0 0 0) !important;\n    height: auto !important;\n    margin: 0 !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 0.0625em !important;\n    white-space: nowrap !important;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-row-toggle__heading-icon {\n    margin-right: 0;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/table/table-row/table-row.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-table-row {\n  display: flex;\n  flex-direction: column;\n  padding: var(--space-xs);\n}\n.lg-table-row__detail {\n  padding: 0;\n}\n.lg-table-row--hidden {\n  border: 0 !important;\n  clip: rect(0 0 0 0) !important;\n  height: auto !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 0.0625em !important;\n  white-space: nowrap !important;\n}\n\n@media (min-width: 20rem) {\n  .lg-table--columns-sm .lg-table-row {\n    display: table-row;\n  }\n}\n\n@media (min-width: 48rem) {\n  .lg-table--columns-md .lg-table-row {\n    display: table-row;\n  }\n}\n\n@media (min-width: 64rem) {\n  .lg-table--columns-lg .lg-table-row {\n    display: table-row;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/table/table/table.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-table {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: var(--component-margin);\n  border-spacing: 0;\n  border-top: solid var(--table-header-border-width) var(--table-header-border-color);\n}\n.lg-table--striped:not(.lg-table--expandable) tr:nth-child(even) {\n  background-color: var(--table-stripe-color);\n}\n.lg-table--bordered {\n  border-collapse: collapse;\n}\n.lg-table--bordered tr {\n  border-bottom: solid var(--border-width) var(--table-row-border-color);\n}\n.lg-table--expandable.lg-table--striped tr:nth-child(4n+3) {\n  background-color: var(--table-stripe-color);\n}\n.lg-table--expandable.lg-table--striped tr:nth-child(4n+4) {\n  background-color: var(--table-stripe-color);\n}\n.lg-table--expandable.lg-table--bordered .lg-table-row__toggle--active {\n  border-bottom: 0;\n}\n\n@media (min-width: 20rem) {\n  .lg-table--columns-sm {\n    border-top: 0;\n    display: table;\n    table-layout: auto;\n    width: 100%;\n  }\n}\n\n@media (min-width: 48rem) {\n  .lg-table--columns-md {\n    border-top: 0;\n    display: table;\n    table-layout: auto;\n    width: 100%;\n  }\n}\n\n@media (min-width: 64rem) {\n  .lg-table--columns-lg {\n    border-top: 0;\n    display: table;\n    table-layout: auto;\n    width: 100%;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);