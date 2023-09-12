"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[700],{"./projects/canopy/src/lib/skeleton/docs/skeleton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>skeleton_stories,defaultSkeleton:()=>defaultSkeleton});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),grid_module=__webpack_require__("./projects/canopy/src/lib/grid/grid.module.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let LgSkeletonDirective=class LgSkeletonDirective{constructor(hostElement){this.hostElement=hostElement,this.hasContent=!1,this.lgSkeletonWidth=null,this.lgSkeletonHeight=null,this.lgSkeletonRightAlign=!1,this.observeChanges=mutations=>{mutations.forEach((mutation=>{this.hasContent=""!==mutation.target.textContent.trim()}))},this.changes=new MutationObserver(this.observeChanges),this.changes.observe(this.hostElement.nativeElement,{subtree:!0,characterData:!0})}get skeletonClass(){return!this.hasContent}get alignClass(){return this.lgSkeletonRightAlign&&!this.hasContent}get backgroundWidth(){return this.hasContent?null:this.lgSkeletonWidth?`${this.lgSkeletonWidth}em`:"100%"}get backgroundHeight(){return this.hasContent?null:this.lgSkeletonHeight&&!this.hasContent?`${this.lgSkeletonHeight}em`:"auto"}ngOnDestroy(){this.changes.disconnect()}};LgSkeletonDirective.ctorParameters=()=>[{type:core.ElementRef}],LgSkeletonDirective.propDecorators={lgSkeletonWidth:[{type:core.Input}],lgSkeletonHeight:[{type:core.Input}],lgSkeletonRightAlign:[{type:core.Input}],skeletonClass:[{type:core.HostBinding,args:["class.lg-skeleton"]}],alignClass:[{type:core.HostBinding,args:["class.lg-skeleton--right"]}],backgroundWidth:[{type:core.HostBinding,args:["style.width"]}],backgroundHeight:[{type:core.HostBinding,args:["style.height"]}]},LgSkeletonDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgSkeleton]"})],LgSkeletonDirective);let LgSkeletonModule=class LgSkeletonModule{};LgSkeletonModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgSkeletonDirective],exports:[LgSkeletonDirective]})],LgSkeletonModule);var data_point_module=__webpack_require__("./projects/canopy/src/lib/data-point/data-point.module.ts"),card_module=__webpack_require__("./projects/canopy/src/lib/card/card.module.ts");let AsyncSkeletonLoadingCardComponent=class AsyncSkeletonLoadingCardComponent{constructor(){this.data=null}ngOnInit(){setTimeout((()=>{this.data={title:"Title of product",content:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}}),5e3)}};AsyncSkeletonLoadingCardComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-async-skeleton-loading-card",template:'\n    <lg-card>\n      <lg-card-header>\n        <lg-card-title headingLevel="4">\n          <span lgSkeleton lgSkeletonWidth="20">{{ data?.title }}</span>\n        </lg-card-title>\n      </lg-card-header>\n      <lg-card-content lgSkeleton lgSkeletonHeight="3">\n        {{ data?.content }}\n      </lg-card-content>\n    </lg-card>\n  '})],AsyncSkeletonLoadingCardComponent);let AsyncSkeletonLoadingProductCardComponent=class AsyncSkeletonLoadingProductCardComponent{constructor(){this.data=null}ngOnInit(){setTimeout((()=>{this.data={title:"Card title",subTitle:"Product name",datapoint:{label:"Last payment (after tax and deductions)",value:"230.20",prefix:"£",suffix:"as of 01 Jan 2020"}}}),5e3)}};AsyncSkeletonLoadingProductCardComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-async-skeleton-loading-product-card",template:'\n    <lg-card>\n      <lg-card-content>\n        <div lgRow>\n          <div lgCol="12" lgColMd="6">\n            <lg-card-title headingLevel="4">\n              <a href="#" lgSkeleton lgSkeletonWidth="18">{{ data?.title }}</a>\n            </lg-card-title>\n            <lg-card-subtitle lgSkeletonWidth="14" lgSkeleton>\n              {{ data?.subTitle }}\n            </lg-card-subtitle>\n          </div>\n          <lg-card-principle-data-point lgCol="12" lgColMd="6">\n            <lg-card-principle-data-point-label\n              lgSkeleton\n              lgSkeletonWidth="20"\n              lgSkeletonRightAlign="true"\n            >\n              {{ data?.datapoint.label }}\n            </lg-card-principle-data-point-label>\n            <lg-card-principle-data-point-value\n              lgSkeleton\n              lgSkeletonWidth="5"\n              lgSkeletonRightAlign="true"\n            >\n              <span\n                ><span class="lg-font-size-3">{{ data?.datapoint.prefix }}</span\n                >{{ data?.datapoint.value }}</span\n              >\n            </lg-card-principle-data-point-value>\n            <lg-card-principle-data-point-date\n              lgSkeleton\n              lgSkeletonWidth="10"\n              lgSkeletonRightAlign="true"\n            >\n              {{ data?.datapoint.suffix }}\n            </lg-card-principle-data-point-date>\n          </lg-card-principle-data-point>\n        </div>\n      </lg-card-content>\n    </lg-card>\n  '})],AsyncSkeletonLoadingProductCardComponent);let AsyncSkeletonLoadingDataPointComponent=class AsyncSkeletonLoadingDataPointComponent{constructor(){this.data=null}ngOnInit(){setTimeout((()=>{this.data={datapoint:{label:"Data point label",value:"£999.99"}}}),5e3)}};AsyncSkeletonLoadingDataPointComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-async-skeleton-loading-data-point",template:'\n    <lg-card>\n      <lg-card-content>\n        <lg-data-point>\n          <lg-data-point-label [headingLevel]="4">\n            <span lgSkeleton lgSkeletonWidth="10">{{ data?.datapoint?.label }}</span>\n          </lg-data-point-label>\n          <lg-data-point-value lgSkeleton lgSkeletonWidth="8">\n            {{ data?.datapoint?.value }}\n          </lg-data-point-value>\n        </lg-data-point>\n      </lg-card-content>\n    </lg-card>\n  '})],AsyncSkeletonLoadingDataPointComponent);const skeleton_stories={title:"Helpers/Directives/Skeleton loading/Examples",decorators:[(0,dist.moduleMetadata)({declarations:[AsyncSkeletonLoadingProductCardComponent,AsyncSkeletonLoadingCardComponent,AsyncSkeletonLoadingDataPointComponent],imports:[card_module.E,data_point_module.f,grid_module.i,LgSkeletonModule]})],parameters:{backgrounds:{default:"Super Blue"}}},skeletonTemplate="\n<lg-async-skeleton-loading-card></lg-async-skeleton-loading-card>\n<lg-async-skeleton-loading-product-card></lg-async-skeleton-loading-product-card>\n<lg-async-skeleton-loading-data-point></lg-async-skeleton-loading-data-point>\n",defaultSkeleton=(args=>({props:args,template:skeletonTemplate})).bind({});defaultSkeleton.storyName="Skeleton Loading",defaultSkeleton.parameters={docs:{source:{code:skeletonTemplate}}}},"./projects/canopy/src/lib/data-point/data-point.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>LgDataPointModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),heading_module=__webpack_require__("./projects/canopy/src/lib/heading/heading.module.ts");let LgDataPointLabelComponent=class LgDataPointLabelComponent{constructor(){this.class=!0}};LgDataPointLabelComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point-label"]}],headingLevel:[{type:core.Input}]},LgDataPointLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-data-point-label",template:'<lg-heading [level]="headingLevel">\n  <ng-content></ng-content>\n</lg-heading>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".lg-data-point-label {\n  margin-bottom: var(--space-xxxs);\n}\n.lg-data-point-label h1,\n.lg-data-point-label h2,\n.lg-data-point-label h3,\n.lg-data-point-label h4,\n.lg-data-point-label h5,\n.lg-data-point-label h6 {\n  font-size: var(--text-base-size);\n  font-weight: var(--font-weight-bold);\n  line-height: var(--text-fs--6-line-height);\n  color: var(--data-point-label-color);\n  margin-bottom: 0;\n}"]})],LgDataPointLabelComponent);let LgDataPointComponent=class LgDataPointComponent{constructor(){this.class=!0}get role(){return this.isListItem?"listitem":null}};LgDataPointComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point"]}],role:[{type:core.HostBinding,args:["attr.role"]}],isListItem:[{type:core.Input}]},LgDataPointComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-data-point",template:'<ng-content select="lg-data-point-label"></ng-content>\n<ng-content select="lg-data-point-value"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".lg-data-point {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  margin-bottom: var(--component-margin);\n  margin-right: var(--space-sm);\n}\n.lg-data-point:last-of-type {\n  margin-right: 0;\n}"]})],LgDataPointComponent);let LgDataPointListComponent=class LgDataPointListComponent{constructor(){this.class=!0,this.attr="list"}ngAfterContentInit(){this.dataPoints.forEach((dataPoint=>{dataPoint.isListItem=!0}))}};LgDataPointListComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point-list"]}],attr:[{type:core.HostBinding,args:["attr.role"]}],dataPoints:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>LgDataPointComponent)),{descendants:!0}]}]},LgDataPointListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-data-point-list",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-data-point-list {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  margin-left: 0;\n  margin-right: 0;\n}\n@media (min-width: 48rem) {\n  .lg-data-point-list {\n    flex-direction: row;\n  }\n}"]})],LgDataPointListComponent);let LgDataPointValueComponent=class LgDataPointValueComponent{constructor(){this.class=!0}};LgDataPointValueComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point-value"]}]},LgDataPointValueComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-data-point-value",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".lg-data-point-value {\n  color: var(--data-point-color);\n}"]})],LgDataPointValueComponent);let LgDataPointModule=class LgDataPointModule{};LgDataPointModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[LgDataPointListComponent,LgDataPointComponent,LgDataPointValueComponent,LgDataPointLabelComponent],exports:[LgDataPointListComponent,LgDataPointComponent,LgDataPointValueComponent,LgDataPointLabelComponent],imports:[common.CommonModule,heading_module.T]})],LgDataPointModule)},"./projects/canopy/src/lib/grid/grid.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>LgGridModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgGridColDirective=class LgGridColDirective{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}set lgCol(columns){this.lgColClass=this.toggleColumnClass(`lg-col-xs-${columns}`,this.lgColClass)}set lgColSm(columns){this.lgColSmClass=this.toggleColumnClass(`lg-col-sm-${columns}`,this.lgColSmClass)}set lgColMd(columns){this.lgColMdClass=this.toggleColumnClass(`lg-col-md-${columns}`,this.lgColMdClass)}set lgColLg(columns){this.lgColLgClass=this.toggleColumnClass(`lg-col-lg-${columns}`,this.lgColLgClass)}set lgColOffset(columns){this.lgColOffsetClass=this.toggleColumnClass(`lg-col-xs-offset-${columns}`,this.lgColOffsetClass)}set lgColSmOffset(columns){this.lgColSmOffsetClass=this.toggleColumnClass(`lg-col-sm-offset-${columns}`,this.lgColSmOffsetClass)}set lgColMdOffset(columns){this.lgColMdOffsetClass=this.toggleColumnClass(`lg-col-md-offset-${columns}`,this.lgColMdOffsetClass)}set lgColLgOffset(columns){this.lgColLgOffsetClass=this.toggleColumnClass(`lg-col-lg-offset-${columns}`,this.lgColLgOffsetClass)}toggleColumnClass(newClass,oldClass){return oldClass&&this.renderer.removeClass(this.hostElement.nativeElement,oldClass),this.renderer.addClass(this.hostElement.nativeElement,newClass),newClass}};LgGridColDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgGridColDirective.propDecorators={lgCol:[{type:core.Input}],lgColSm:[{type:core.Input}],lgColMd:[{type:core.Input}],lgColLg:[{type:core.Input}],lgColOffset:[{type:core.Input}],lgColSmOffset:[{type:core.Input}],lgColMdOffset:[{type:core.Input}],lgColLgOffset:[{type:core.Input}]},LgGridColDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgCol],[lgColSm],[lgColMd],[lgColLg]"})],LgGridColDirective);let LgGridContainerDirective=class LgGridContainerDirective{constructor(){this.class=!0}};LgGridContainerDirective.propDecorators={class:[{type:core.HostBinding,args:["class.lg-container"]}]},LgGridContainerDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgContainer]"})],LgGridContainerDirective);let LgGridRowDirective=class LgGridRowDirective{constructor(){this.class=!0}};LgGridRowDirective.propDecorators={class:[{type:core.HostBinding,args:["class.lg-row"]}]},LgGridRowDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgRow]"})],LgGridRowDirective);let LgGridModule=class LgGridModule{};LgGridModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgGridContainerDirective,LgGridColDirective,LgGridRowDirective],exports:[LgGridContainerDirective,LgGridColDirective,LgGridRowDirective]})],LgGridModule)}}]);