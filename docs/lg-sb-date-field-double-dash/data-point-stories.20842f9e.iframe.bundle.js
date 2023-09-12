"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[7864,2581],{"./projects/canopy/src/lib/data-point/docs/data-point.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{dataPointsListStory:()=>dataPointsListStory,default:()=>__WEBPACK_DEFAULT_EXPORT__,singleDataPoint:()=>singleDataPoint});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_header__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/header/header.module.ts"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/data-point/data-point.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Data point/Examples",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[___WEBPACK_IMPORTED_MODULE_1__.f,_header__WEBPACK_IMPORTED_MODULE_2__.x]})],argTypes:{headingLevel:{options:["1","2","3","4","5","6"],description:"The heading level set on the `<lg-data-point-label>` component",table:{type:{summary:["1","2","3","4","5","6"]}},control:{type:"select"}}}},singleTemplate='\n<lg-data-point>\n  <lg-data-point-label [headingLevel]="headingLevel">\n    Annual increase\n  </lg-data-point-label>\n  <lg-data-point-value>\n    Retail price index (RPI)\n  </lg-data-point-value>\n</lg-data-point>\n',singleDataPoint=(args=>({props:args,template:singleTemplate})).bind({});singleDataPoint.storyName="Single data point",singleDataPoint.args={headingLevel:3},singleDataPoint.parameters={docs:{source:{code:singleTemplate}}};const listTemplate='\n<lg-data-point-list>\n  <lg-data-point>\n    <lg-data-point-label [headingLevel]="headingLevel">\n      Name on account\n    </lg-data-point-label>\n    <lg-data-point-value>\n      Joe Bloggs\n    </lg-data-point-value>\n  </lg-data-point>\n  <lg-data-point>\n    <lg-data-point-label [headingLevel]="headingLevel">\n      Account number\n    </lg-data-point-label>\n    <lg-data-point-value>\n      ***5678\n    </lg-data-point-value>\n  </lg-data-point>\n  <lg-data-point>\n    <lg-data-point-label [headingLevel]="headingLevel">\n      Bank sort code\n    </lg-data-point-label>\n    <lg-data-point-value>\n      00 - 00 - **\n    </lg-data-point-value>\n  </lg-data-point>\n</lg-data-point-list>\n',dataPointsListStory=(args=>({props:args,template:listTemplate})).bind({});dataPointsListStory.storyName="Data point list",dataPointsListStory.args={headingLevel:3},dataPointsListStory.parameters={docs:{source:{code:listTemplate}}}},"./projects/canopy/src/lib/button/button-toggle/button-toggle.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LgButtonToggleDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgButtonToggleDirective=class LgButtonToggleDirective{constructor(hostElement){if(this.hostElement=hostElement,this._isActive=!1,this.toggleActive=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.class=!0,this.role="button","BUTTON"!==this.hostElement.nativeElement.tagName)throw Error("The `lgButtonToggle` directive should always be added to a button element. Please change the HTML tag accordingly")}get active(){return this._isActive}get idAttr(){return this.id}get ariaControlsAttr(){return this.ariaControls}onClick(){this.toggle()}toggle(){this._isActive=!this._isActive,this.toggleActive.emit(this._isActive)}get isActive(){return this._isActive}};LgButtonToggleDirective.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],LgButtonToggleDirective.propDecorators={toggleActive:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-btn-toggle"]}],role:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["role"]}],active:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-btn-toggle--active"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.aria-expanded"]}],idAttr:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["id"]}],ariaControlsAttr:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.aria-controls"]}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["click"]}]},LgButtonToggleDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgButtonToggle]"})],LgButtonToggleDirective)},"./projects/canopy/src/lib/data-point/data-point.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>LgDataPointModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),heading_module=__webpack_require__("./projects/canopy/src/lib/heading/heading.module.ts");let LgDataPointLabelComponent=class LgDataPointLabelComponent{constructor(){this.class=!0}};LgDataPointLabelComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point-label"]}],headingLevel:[{type:core.Input}]},LgDataPointLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-data-point-label",template:'<lg-heading [level]="headingLevel">\n  <ng-content></ng-content>\n</lg-heading>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".lg-data-point-label {\n  margin-bottom: var(--space-xxxs);\n}\n.lg-data-point-label h1,\n.lg-data-point-label h2,\n.lg-data-point-label h3,\n.lg-data-point-label h4,\n.lg-data-point-label h5,\n.lg-data-point-label h6 {\n  font-size: var(--text-base-size);\n  font-weight: var(--font-weight-bold);\n  line-height: var(--text-fs--6-line-height);\n  color: var(--data-point-label-color);\n  margin-bottom: 0;\n}"]})],LgDataPointLabelComponent);let LgDataPointComponent=class LgDataPointComponent{constructor(){this.class=!0}get role(){return this.isListItem?"listitem":null}};LgDataPointComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point"]}],role:[{type:core.HostBinding,args:["attr.role"]}],isListItem:[{type:core.Input}]},LgDataPointComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-data-point",template:'<ng-content select="lg-data-point-label"></ng-content>\n<ng-content select="lg-data-point-value"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".lg-data-point {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  margin-bottom: var(--component-margin);\n  margin-right: var(--space-sm);\n}\n.lg-data-point:last-of-type {\n  margin-right: 0;\n}"]})],LgDataPointComponent);let LgDataPointListComponent=class LgDataPointListComponent{constructor(){this.class=!0,this.attr="list"}ngAfterContentInit(){this.dataPoints.forEach((dataPoint=>{dataPoint.isListItem=!0}))}};LgDataPointListComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point-list"]}],attr:[{type:core.HostBinding,args:["attr.role"]}],dataPoints:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>LgDataPointComponent)),{descendants:!0}]}]},LgDataPointListComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-data-point-list",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-data-point-list {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  margin-left: 0;\n  margin-right: 0;\n}\n@media (min-width: 48rem) {\n  .lg-data-point-list {\n    flex-direction: row;\n  }\n}"]})],LgDataPointListComponent);let LgDataPointValueComponent=class LgDataPointValueComponent{constructor(){this.class=!0}};LgDataPointValueComponent.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point-value"]}]},LgDataPointValueComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-data-point-value",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[".lg-data-point-value {\n  color: var(--data-point-color);\n}"]})],LgDataPointValueComponent);let LgDataPointModule=class LgDataPointModule{};LgDataPointModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[LgDataPointListComponent,LgDataPointComponent,LgDataPointValueComponent,LgDataPointLabelComponent],exports:[LgDataPointListComponent,LgDataPointComponent,LgDataPointValueComponent,LgDataPointLabelComponent],imports:[common.CommonModule,heading_module.T]})],LgDataPointModule)},"./projects/canopy/src/lib/heading/heading.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>LgHeadingComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgHeadingComponent=class LgHeadingComponent{};LgHeadingComponent.propDecorators={level:[{type:core.Input}]},LgHeadingComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-heading",template:'\x3c!--https://github.com/angular/angular/issues/7795--\x3e\n\n<ng-template #transclude><ng-content></ng-content></ng-template>\n\n<h1 *ngIf="+level === 1">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h1>\n<h2 *ngIf="+level === 2">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h2>\n<h3 *ngIf="+level === 3">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h3>\n<h4 *ngIf="+level === 4">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h4>\n<h5 *ngIf="+level === 5">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h5>\n<h6 *ngIf="+level === 6">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h6>\n',encapsulation:core.ViewEncapsulation.None,host:{class:"lg-heading"},styles:[".lg-heading[class*=lg-margin],\n.lg-heading[class*=lg-padding] {\n  display: block;\n}\n.lg-heading[class*=lg-margin] > h1,\n.lg-heading[class*=lg-margin] h2,\n.lg-heading[class*=lg-margin] h3,\n.lg-heading[class*=lg-margin] h4,\n.lg-heading[class*=lg-margin] h5,\n.lg-heading[class*=lg-margin] h6,\n.lg-heading[class*=lg-padding] > h1,\n.lg-heading[class*=lg-padding] h2,\n.lg-heading[class*=lg-padding] h3,\n.lg-heading[class*=lg-padding] h4,\n.lg-heading[class*=lg-padding] h5,\n.lg-heading[class*=lg-padding] h6 {\n  margin: 0;\n}"]})],LgHeadingComponent)},"./projects/canopy/src/lib/heading/heading.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>LgHeadingModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_heading_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/heading/heading.component.ts");let LgHeadingModule=class LgHeadingModule{};LgHeadingModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_heading_component__WEBPACK_IMPORTED_MODULE_3__.N],exports:[_heading_component__WEBPACK_IMPORTED_MODULE_3__.N]})],LgHeadingModule)},"./projects/canopy/src/lib/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>LgIconModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let LgIconModule=class LgIconModule{};LgIconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r],exports:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r]})],LgIconModule)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.J)(1)}()((0,from.D)(args,(0,util_args.yG)(args)))}},"./node_modules/rxjs/dist/esm5/internal/operators/filter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>filter});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function filter(predicate,thisArg){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var index=0;source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(value){return predicate.call(thisArg,value,index++)&&subscriber.next(value)})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/startWith.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>startWith});var _observable_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function startWith(){for(var values=[],_i=0;_i<arguments.length;_i++)values[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.yG)(values);return(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.e)((function(source,subscriber){(scheduler?(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source,scheduler):(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source)).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>switchMap});var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function switchMap(project,resultSelector){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var innerSubscriber=null,index=0,isComplete=!1,checkComplete=function(){return isComplete&&!innerSubscriber&&subscriber.complete()};source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(value){null==innerSubscriber||innerSubscriber.unsubscribe();var innerIndex=0,outerIndex=index++;(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.Xf)(project(value,outerIndex)).subscribe(innerSubscriber=(0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(innerValue){return subscriber.next(resultSelector?resultSelector(value,innerValue,outerIndex,innerIndex++):innerValue)}),(function(){innerSubscriber=null,checkComplete()})))}),(function(){isComplete=!0,checkComplete()})))}))}}}]);