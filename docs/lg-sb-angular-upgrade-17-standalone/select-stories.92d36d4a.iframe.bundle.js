(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[8683,9326],{"./projects/canopy/src/lib/forms/hint/hint.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>LgHintComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var hint_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.scss?ngResource"),hint_componentngResource_default=__webpack_require__.n(hint_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let nextUniqueId=0,LgHintComponent=class LgHintComponent{constructor(){this.id="lg-hint-"+nextUniqueId++,this.class=!0}static#_=this.propDecorators={id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-hint"]}]}};LgHintComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-hint",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,standalone:!0,styles:[hint_componentngResource_default()]})],LgHintComponent)},"./projects/canopy/src/lib/forms/label/label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>LgLabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var label_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.scss?ngResource"),label_componentngResource_default=__webpack_require__.n(label_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let nextUniqueId=0,LgLabelComponent=class LgLabelComponent{constructor(){this.class=!0,this.id="lg-label-"+nextUniqueId++}static#_=this.propDecorators={class:[{type:core.Input},{type:core.HostBinding,args:["class.lg-label"]}],id:[{type:core.Input},{type:core.HostBinding,args:["attr.id"]}],for:[{type:core.Input},{type:core.HostBinding,args:["attr.for"]}]}};LgLabelComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-label]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,standalone:!0,styles:[label_componentngResource_default()]})],LgLabelComponent)},"./projects/canopy/src/lib/forms/select/select-field.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>LgSelectFieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var select_field_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/select/select-field.component.scss?ngResource"),select_field_componentngResource_default=__webpack_require__.n(select_field_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),dom_service=__webpack_require__("./projects/canopy/src/lib/utils/dom.service.ts"),hint_component=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts"),label_component=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.ts"),error_state_matcher=__webpack_require__("./projects/canopy/src/lib/forms/validation/error-state-matcher.ts"),validation_component=__webpack_require__("./projects/canopy/src/lib/forms/validation/validation.component.ts"),icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts"),select_directive=__webpack_require__("./projects/canopy/src/lib/forms/select/select.directive.ts");let nextUniqueId=0,LgSelectFieldComponent=class LgSelectFieldComponent{get errorClass(){return this.errorState.isControlInvalid(this._selectElement.control,this._selectElement.controlContainer)}set block(block){this._selectElement&&(this._selectElement.block=block),this._block=block}get block(){return this._block}set labelElement(element){this._labelElement=element,this._labelElement.for=this.id}set selectElement(element){this._selectElement=element,this._selectElement.id=this.id}set hintElement(element){this._selectElement.ariaDescribedBy=this.domService.toggleIdInStringProperty(this._selectElement.ariaDescribedBy,this._hintElement,element),this._hintElement=element}set errorElement(element){this._selectElement.ariaDescribedBy=this.domService.toggleIdInStringProperty(this._selectElement.ariaDescribedBy,this._validationElement,element),this._validationElement=element}constructor(errorState,domService){this.errorState=errorState,this.domService=domService,this.id="lg-select-"+nextUniqueId++,this.class=!0,this._block=!1}static#_=this.ctorParameters=()=>[{type:error_state_matcher.B},{type:dom_service.J}];static#_2=this.propDecorators={id:[{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-select-field"]}],errorClass:[{type:core.HostBinding,args:["class.lg-select-field--error"]}],block:[{type:core.Input}],labelElement:[{type:core.ViewChild,args:[label_component.d,{static:!0}]}],selectElement:[{type:core.ContentChild,args:[select_directive.P,{static:!0}]}],hintElement:[{type:core.ContentChild,args:[hint_component.m]}],errorElement:[{type:core.ContentChild,args:[validation_component.Q]}]}};LgSelectFieldComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-select-field",template:'<label lg-label>\n  <ng-content></ng-content>\n</label>\n<ng-content select="lg-hint"></ng-content>\n<div class="lg-select-field__outer">\n  <div class="lg-select-field__inner" [class.lg-select-field__inner--block]="block">\n    <ng-content select="[lgSelect]"></ng-content>\n    <lg-icon class="lg-select-field__icon" name="chevron-down"></lg-icon>\n  </div>\n</div>\n<ng-content select="lg-validation"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,standalone:!0,imports:[label_component.d,icon_component.A],styles:[select_field_componentngResource_default()]})],LgSelectFieldComponent)},"./projects/canopy/src/lib/forms/select/select.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>LgSelectDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_validation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/forms/validation/error-state-matcher.ts");let nextUniqueId=0,LgSelectDirective=class LgSelectDirective{get blockClass(){return this.block}get errorClass(){return this.errorState.isControlInvalid(this.control,this.controlContainer)}constructor(control,errorState,controlContainer){this.control=control,this.errorState=errorState,this.controlContainer=controlContainer,this.uniqueId=nextUniqueId++,this.class=!0,this.block=!1,this.name=`lg-select-${this.uniqueId}`,this.id=`lg-select-${this.uniqueId}`,this.ariaDescribedBy=null}static#_=this.ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_0__.vO,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Self},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional}]},{type:_validation__WEBPACK_IMPORTED_MODULE_2__.B},{type:_angular_forms__WEBPACK_IMPORTED_MODULE_0__.j4,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Host},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf}]}];static#_2=this.propDecorators={class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.lg-select"]}],blockClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.lg-select--block"]}],errorClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.aria-invalid"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.lg-select--error"]}],block:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["name"]}],id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["id"]}],ariaDescribedBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.aria-describedby"]}]}};LgSelectDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({selector:"[lgSelect]",standalone:!0})],LgSelectDirective)},"./projects/canopy/src/lib/forms/validation/error-state-matcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>LgErrorStateMatcher});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgErrorStateMatcher=class LgErrorStateMatcher{isControlInvalid(control,controlContainer){return!!(control&&control.invalid&&control.touched&&control.dirty||controlContainer&&controlContainer.submitted&&control.invalid)}};LgErrorStateMatcher=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgErrorStateMatcher)},"./projects/canopy/src/lib/forms/validation/validation.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>LgValidationComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var validation_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/validation/validation.component.scss?ngResource"),validation_componentngResource_default=__webpack_require__.n(validation_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let nextUniqueId=0,LgValidationComponent=class LgValidationComponent{set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-variant--${this._variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-variant--${variant}`),this._variant=variant}get variant(){return this._variant}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.showIcon=!0,this.id="lg-validation-"+nextUniqueId++,this.class=!0,this.variant="error"}static#_=this.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}];static#_2=this.propDecorators={showIcon:[{type:core.Input}],variant:[{type:core.Input}],id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-validation"]}]}};LgValidationComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-validation",template:'<div\n  *ngIf="showIcon && variant !== \'generic\'"\n  [ngSwitch]="variant"\n  class="lg-validation__icon"\n>\n  <lg-icon *ngSwitchCase="\'error\'" name="crossmark-spot-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'info\'" name="information-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'warning\'" name="warning-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'success\'" name="checkmark-spot-fill"></lg-icon>\n</div>\n\n<div>\n  <ng-content></ng-content>\n</div>\n',encapsulation:core.ViewEncapsulation.None,standalone:!0,imports:[common.NgIf,common.NgSwitch,common.NgSwitchCase,icon_component.A],styles:[validation_componentngResource_default()]})],LgValidationComponent)},"./projects/canopy/src/lib/utils/dom.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>LgDomService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgDomService=class LgDomService{toggleIdInStringProperty(property="",oldElement,newElement){return newElement||null!==property?(null===property&&(property=""),oldElement&&oldElement.id&&(property=property.replace(oldElement.id,"")),newElement&&newElement.id&&(property=`${property} ${newElement.id}`),""===(property=property.trim())&&(property=null),property):property}};LgDomService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgDomService)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{e:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.T)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)(args))):fn(args)}(fn,args)}))}},"./projects/canopy/src/lib/forms/select/docs/select.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,select:()=>select});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_select_field_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/forms/select/select-field.component.ts"),_hint__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts"),_select_directive__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./projects/canopy/src/lib/forms/select/select.directive.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts");const template='\n<lg-select-field [block]="block">\n  {{ label }}\n  <lg-hint *ngIf="hint">{{ hint }}</lg-hint>\n  <select lgSelect formControlName="color">\n    <option *ngFor="let option of options" [value]="option">{{ option }}</option>\n  </select>\n</lg-select-field>\n';let ReactiveFormComponent=class ReactiveFormComponent{set disabled(disabled){!0===disabled?this.form.controls.color.disable():this.form.controls.color.enable()}get disabled(){return this.form.controls.color.disabled}constructor(fb,registry){this.fb=fb,this.registry=registry,this.selectChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.form=this.fb.group({color:{value:"",disabled:!1}}),this.form.valueChanges.subscribe((val=>this.selectChange.emit(val))),this.registry.registerIcons([_icon__WEBPACK_IMPORTED_MODULE_2__.Q$D])}static#_=this.ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ze},{type:_icon__WEBPACK_IMPORTED_MODULE_4__.g}];static#_2=this.propDecorators={block:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],hint:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],options:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],selectChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]}};ReactiveFormComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"lg-reactive-form",template:` <form [formGroup]="form">${template}</form> `,standalone:!0,imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_3__.X1,_select_field_component__WEBPACK_IMPORTED_MODULE_6__.t,_hint__WEBPACK_IMPORTED_MODULE_7__.m,_select_directive__WEBPACK_IMPORTED_MODULE_8__.P,_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf,_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgFor]})],ReactiveFormComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Forms/Select/Examples",component:_select_field_component__WEBPACK_IMPORTED_MODULE_6__.t,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[ReactiveFormComponent]})],argTypes:{id:{table:{disable:!0}},block:{description:"Property to make the select field full width (for small screens only)."},selectChange:{action:"Select change",table:{disable:!0}},_block:{table:{disable:!0}},_hintElement:{table:{disable:!0}},_labelElement:{table:{disable:!0}},_selectElement:{table:{disable:!0}},_validationElement:{table:{disable:!0}},class:{table:{disable:!0}}}},select=(args=>({props:args,template:'\n  <lg-reactive-form\n    (selectChange)="selectChange($event)"\n    [block]="block"\n    [disabled]="disabled"\n    [hint]="hint"\n    [label]="label"\n    [options]="options"\n  ></lg-reactive-form>\n  '})).bind({});select.storyName="Select",select.args={label:"Color",hint:"Please select a color",block:!1,options:["Red","Blue","Green","Yellow"],disabled:!1},select.parameters={docs:{source:{code:template}}},select.parameters={...select.parameters,docs:{...select.parameters?.docs,source:{originalSource:'(args: LgSelectFieldComponent) => ({\n  props: args,\n  template: `\n  <lg-reactive-form\n    (selectChange)="selectChange($event)"\n    [block]="block"\n    [disabled]="disabled"\n    [hint]="hint"\n    [label]="label"\n    [options]="options"\n  ></lg-reactive-form>\n  `\n})',...select.parameters?.docs?.source}}};const __namedExportsOrder=["select"]},"./projects/canopy/src/lib/forms/hint/hint.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-hint {\n  display: block;\n  color: var(--color-battleship-grey);\n  margin-top: calc(var(--space-xxs) * -1);\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-regular);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/forms/label/label.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-label {\n  display: block;\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-medium);\n  width: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/forms/select/select-field.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-select {\n  font-size: var(--text-base-size);\n  font-weight: var(--font-weight-regular);\n  font-family: var(--font-family);\n  line-height: var(--text-base-line-height);\n  color: var(--color-text);\n  border: solid var(--border-width) var(--border-color);\n  border-radius: var(--border-radius-sm);\n  padding: var(--select-vertical-padding) calc(var(--select-icon-width) + 2 * var(--space-sm)) var(--select-vertical-padding) var(--space-sm);\n  background-color: var(--color-white);\n  outline: 0;\n  -webkit-appearance: none;\n          appearance: none;\n  max-width: 100%;\n}\n.lg-select:hover {\n  border-color: var(--border-hover-color);\n}\n.lg-select:focus-visible {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-select:disabled {\n  color: var(--disabled-color);\n  background-color: var(--background-disabled-color);\n  border-color: var(--border-disabled-color);\n}\n.lg-select--error, .lg-select--error:hover {\n  color: var(--form-error-color);\n  border-color: var(--form-error-border-color);\n}\n.lg-select--error:focus-visible, .lg-select--error:hover:focus-visible {\n  color: inherit;\n  border-color: inherit;\n}\n.lg-select--block {\n  width: 100%;\n}\n@media (min-width: 48rem) {\n  .lg-select--block {\n    width: auto;\n  }\n}\n\n/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-select-field {\n  display: block;\n  margin-bottom: var(--component-margin);\n}\n\n.lg-select-field__outer {\n  display: block;\n}\n\n.lg-select-field__inner {\n  display: inline-block;\n  background-color: var(--color-white);\n  max-width: 100%;\n  position: relative;\n}\n.lg-select-field__inner--block {\n  width: 100%;\n}\n@media (min-width: 48rem) {\n  .lg-select-field__inner--block {\n    width: auto;\n  }\n}\n\n.lg-select-field__icon {\n  position: absolute;\n  right: 0;\n  top: calc(50% - var(--icon-width) / 2);\n  margin-left: var(--space-sm);\n  margin-right: var(--space-sm);\n  pointer-events: none;\n}\n.lg-select-field--error .lg-select-field__icon {\n  color: var(--form-error-border-color);\n}\n.lg-select-field--error *:focus-visible + .lg-select-field__icon {\n  color: inherit;\n}\n.lg-select-field:disabled .lg-select-field__icon {\n  color: var(--disabled-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/forms/validation/validation.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-validation {\n  display: flex;\n  align-items: flex-start;\n  padding: var(--space-xs);\n  margin-top: var(--space-xxs);\n}\n\n.lg-validation__icon {\n  margin-right: var(--space-xs);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);