(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[2994,9326],{"./projects/canopy/src/lib/data-point/data-point-label/data-point-label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>LgDataPointLabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var data_point_label_componentngResource=__webpack_require__("./projects/canopy/src/lib/data-point/data-point-label/data-point-label.component.scss?ngResource"),data_point_label_componentngResource_default=__webpack_require__.n(data_point_label_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),heading_component=__webpack_require__("./projects/canopy/src/lib/heading/heading.component.ts");let LgDataPointLabelComponent=class LgDataPointLabelComponent{constructor(){this.class=!0}static#_=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point-label"]}],headingLevel:[{type:core.Input}]}};LgDataPointLabelComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-data-point-label",template:'<lg-heading [level]="headingLevel">\n  <ng-content></ng-content>\n</lg-heading>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[heading_component.v],styles:[data_point_label_componentngResource_default()]})],LgDataPointLabelComponent)},"./projects/canopy/src/lib/data-point/data-point-value/data-point-value.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>LgDataPointValueComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var data_point_value_componentngResource=__webpack_require__("./projects/canopy/src/lib/data-point/data-point-value/data-point-value.component.scss?ngResource"),data_point_value_componentngResource_default=__webpack_require__.n(data_point_value_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgDataPointValueComponent=class LgDataPointValueComponent{constructor(){this.class=!0}static#_=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point-value"]}]}};LgDataPointValueComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-data-point-value",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[data_point_value_componentngResource_default()]})],LgDataPointValueComponent)},"./projects/canopy/src/lib/data-point/data-point/data-point.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>LgDataPointComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var data_point_componentngResource=__webpack_require__("./projects/canopy/src/lib/data-point/data-point/data-point.component.scss?ngResource"),data_point_componentngResource_default=__webpack_require__.n(data_point_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgDataPointComponent=class LgDataPointComponent{constructor(){this.class=!0}get role(){return this.isListItem?"listitem":null}static#_=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point"]}],role:[{type:core.HostBinding,args:["attr.role"]}],isListItem:[{type:core.Input}]}};LgDataPointComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-data-point",template:'<ng-content select="lg-data-point-label"></ng-content>\n<ng-content select="lg-data-point-value"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[data_point_componentngResource_default()]})],LgDataPointComponent)},"./projects/canopy/src/lib/heading/heading.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>LgHeadingComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var heading_componentngResource=__webpack_require__("./projects/canopy/src/lib/heading/heading.component.scss?ngResource"),heading_componentngResource_default=__webpack_require__.n(heading_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let LgHeadingComponent=class LgHeadingComponent{static#_=this.propDecorators={level:[{type:core.Input}]}};LgHeadingComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-heading",template:'\x3c!--https://github.com/angular/angular/issues/7795--\x3e\n\n<ng-template #transclude><ng-content></ng-content></ng-template>\n\n<h1 *ngIf="+level === 1">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h1>\n<h2 *ngIf="+level === 2">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h2>\n<h3 *ngIf="+level === 3">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h3>\n<h4 *ngIf="+level === 4">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h4>\n<h5 *ngIf="+level === 5">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h5>\n<h6 *ngIf="+level === 6">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h6>\n',encapsulation:core.ViewEncapsulation.None,host:{class:"lg-heading",ngSkipHydration:"true"},standalone:!0,imports:[common.NgIf,common.NgTemplateOutlet],styles:[heading_componentngResource_default()]})],LgHeadingComponent)},"./projects/canopy/src/lib/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>LgIconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_registry=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts");let nextUniqueId=0,LgIconComponent=class LgIconComponent{set name(name){this.svgIcon&&this.hostElement.nativeElement.removeChild(this.svgIcon);const svgData=this.setSVGAttributes(this.iconRegistry.getIcon(name));this.svgIcon=this.svgElementFromString(svgData),this.hostElement.nativeElement.appendChild(this.svgIcon)}constructor(hostElement,iconRegistry,document){this.hostElement=hostElement,this.iconRegistry=iconRegistry,this.document=document,this.id=nextUniqueId++,this.class=!0,this.hidden=!0}setSVGAttributes(svgData){return svgData.replace(/id="\w+"/g,(()=>`id="lg-icon-${this.id}"`)).replace(/xlink:href="#\w+"/g,(()=>`xlink:href="#lg-icon-${this.id}"`))}svgElementFromString(svgContent){const div=this.document.createElement("div");return div.innerHTML=svgContent,div.querySelector("svg")}static#_=this.ctorParameters=()=>[{type:core.ElementRef},{type:icon_registry.g},{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]}];static#_2=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-icon"]}],hidden:[{type:core.HostBinding,args:["attr.aria-hidden"]}],name:[{type:core.Input}]}};LgIconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-icon",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,standalone:!0,host:{ngSkipHydration:"true"},styles:[icon_componentngResource_default()]})],LgIconComponent)},"./projects/canopy/src/lib/icon/icon.registry.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>LgIconRegistry});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgIconRegistry=class LgIconRegistry{constructor(){this.registry=new Map}registerIcons(icons){icons.forEach((icon=>{this.registry.set(icon.name,icon.data)}))}getIcon(name){return this.registry.has(name)||console.warn(`${name}: Icon not found, ensure it is added to the icon registry`),this.registry.get(name)}};LgIconRegistry=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgIconRegistry)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.U)(1)}()((0,from.H)(args,(0,util_args.lI)(args)))}},"./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>mergeAll});var _mergeMap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),_util_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js");function mergeAll(concurrent){return void 0===concurrent&&(concurrent=1/0),(0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__.Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__.D,concurrent)}},"./node_modules/rxjs/dist/esm5/internal/operators/startWith.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>startWith});var _observable_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function startWith(){for(var values=[],_i=0;_i<arguments.length;_i++)values[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.lI)(values);return(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.N)((function(source,subscriber){(scheduler?(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.x)(values,source,scheduler):(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.x)(values,source)).subscribe(subscriber)}))}},"./projects/canopy/src/lib/data-point/docs/data-point.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,dataPointsListStory:()=>dataPointsListStory,default:()=>data_point_stories,singleDataPoint:()=>singleDataPoint});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),data_point_component=__webpack_require__("./projects/canopy/src/lib/data-point/data-point/data-point.component.ts"),data_point_label_component=__webpack_require__("./projects/canopy/src/lib/data-point/data-point-label/data-point-label.component.ts"),data_point_value_component=__webpack_require__("./projects/canopy/src/lib/data-point/data-point-value/data-point-value.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var data_point_list_componentngResource=__webpack_require__("./projects/canopy/src/lib/data-point/data-point-list/data-point-list.component.scss?ngResource"),data_point_list_componentngResource_default=__webpack_require__.n(data_point_list_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgDataPointListComponent=class LgDataPointListComponent{constructor(){this.class=!0,this.attr="list"}ngAfterContentInit(){this.dataPoints.forEach((dataPoint=>{dataPoint.isListItem=!0}))}static#_=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-data-point-list"]}],attr:[{type:core.HostBinding,args:["attr.role"]}],dataPoints:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>data_point_component.j)),{descendants:!0}]}]}};LgDataPointListComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-data-point-list",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[data_point_list_componentngResource_default()]})],LgDataPointListComponent);var header_component=__webpack_require__("./projects/canopy/src/lib/header/header.component.ts");const data_point_stories={title:"Components/Data point/Examples",decorators:[(0,dist.moduleMetadata)({imports:[header_component.o,data_point_component.j,data_point_label_component.t,data_point_value_component.K,LgDataPointListComponent]})],argTypes:{headingLevel:{options:["1","2","3","4","5","6"],description:"The heading level set on the `<lg-data-point-label>` component",table:{type:{summary:["1","2","3","4","5","6"]}},control:{type:"select"}}}},singleTemplate='\n<lg-data-point>\n  <lg-data-point-label [headingLevel]="headingLevel">\n    Annual increase\n  </lg-data-point-label>\n  <lg-data-point-value>\n    Retail price index (RPI)\n  </lg-data-point-value>\n</lg-data-point>\n',singleDataPoint=(args=>({props:args,template:singleTemplate})).bind({});singleDataPoint.storyName="Single data point",singleDataPoint.args={headingLevel:3},singleDataPoint.parameters={docs:{source:{code:singleTemplate}}};const listTemplate='\n<lg-data-point-list>\n  <lg-data-point>\n    <lg-data-point-label [headingLevel]="headingLevel">\n      Name on account\n    </lg-data-point-label>\n    <lg-data-point-value>\n      Joe Bloggs\n    </lg-data-point-value>\n  </lg-data-point>\n  <lg-data-point>\n    <lg-data-point-label [headingLevel]="headingLevel">\n      Account number\n    </lg-data-point-label>\n    <lg-data-point-value>\n      ***5678\n    </lg-data-point-value>\n  </lg-data-point>\n  <lg-data-point>\n    <lg-data-point-label [headingLevel]="headingLevel">\n      Bank sort code\n    </lg-data-point-label>\n    <lg-data-point-value>\n      00 - 00 - **\n    </lg-data-point-value>\n  </lg-data-point>\n</lg-data-point-list>\n',dataPointsListStory=(args=>({props:args,template:listTemplate})).bind({});dataPointsListStory.storyName="Data point list",dataPointsListStory.args={headingLevel:3},dataPointsListStory.parameters={docs:{source:{code:listTemplate}}},singleDataPoint.parameters={...singleDataPoint.parameters,docs:{...singleDataPoint.parameters?.docs,source:{originalSource:"(args: LgDataPointComponent) => ({\n  props: args,\n  template: singleTemplate\n})",...singleDataPoint.parameters?.docs?.source}}},dataPointsListStory.parameters={...dataPointsListStory.parameters,docs:{...dataPointsListStory.parameters?.docs,source:{originalSource:"(args: LgDataPointListComponent) => ({\n  props: args,\n  template: listTemplate\n})",...dataPointsListStory.parameters?.docs?.source}}};const __namedExportsOrder=["singleDataPoint","dataPointsListStory"]},"./projects/canopy/src/lib/data-point/data-point-label/data-point-label.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-data-point-label {\n  margin-bottom: var(--space-xxxs);\n}\n.lg-data-point-label h1,\n.lg-data-point-label h2,\n.lg-data-point-label h3,\n.lg-data-point-label h4,\n.lg-data-point-label h5,\n.lg-data-point-label h6 {\n  font-size: var(--text-base-size);\n  font-weight: var(--font-weight-medium);\n  line-height: var(--text-fs--6-line-height);\n  color: var(--data-point-label-color);\n  margin-bottom: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/data-point/data-point-list/data-point-list.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-data-point-list {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  margin-left: 0;\n  margin-right: 0;\n}\n@media (min-width: 48rem) {\n  .lg-data-point-list {\n    flex-direction: row;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/data-point/data-point-value/data-point-value.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-data-point-value {\n  color: var(--data-point-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/data-point/data-point/data-point.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-data-point {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  margin-bottom: var(--component-margin);\n  margin-right: var(--space-sm);\n}\n.lg-data-point:last-of-type {\n  margin-right: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/heading/heading.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-heading[class*=lg-margin],\n.lg-heading[class*=lg-padding] {\n  display: block;\n}\n.lg-heading[class*=lg-margin] > h1,\n.lg-heading[class*=lg-margin] h2,\n.lg-heading[class*=lg-margin] h3,\n.lg-heading[class*=lg-margin] h4,\n.lg-heading[class*=lg-margin] h5,\n.lg-heading[class*=lg-margin] h6,\n.lg-heading[class*=lg-padding] > h1,\n.lg-heading[class*=lg-padding] h2,\n.lg-heading[class*=lg-padding] h3,\n.lg-heading[class*=lg-padding] h4,\n.lg-heading[class*=lg-padding] h5,\n.lg-heading[class*=lg-padding] h6 {\n  margin: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-icon {\n  display: inline-block;\n  vertical-align: text-top;\n  height: var(--icon-height);\n  width: var(--icon-width);\n  min-width: var(--icon-width);\n  line-height: var(--icon-line-height);\n}\n.lg-icon > svg {\n  height: inherit;\n  width: inherit;\n  fill: currentColor;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);