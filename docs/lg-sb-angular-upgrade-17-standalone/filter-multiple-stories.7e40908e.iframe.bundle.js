(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[6486,9326],{"./projects/canopy/src/lib/forms/hint/hint.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>LgHintComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var hint_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.scss?ngResource"),hint_componentngResource_default=__webpack_require__.n(hint_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let nextUniqueId=0,LgHintComponent=class LgHintComponent{constructor(){this.id="lg-hint-"+nextUniqueId++,this.class=!0}static#_=this.propDecorators={id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-hint"]}]}};LgHintComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-hint",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,standalone:!0,styles:[hint_componentngResource_default()]})],LgHintComponent)},"./projects/canopy/src/lib/forms/label/label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>LgLabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var label_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.scss?ngResource"),label_componentngResource_default=__webpack_require__.n(label_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let nextUniqueId=0,LgLabelComponent=class LgLabelComponent{constructor(){this.class=!0,this.id="lg-label-"+nextUniqueId++}static#_=this.propDecorators={class:[{type:core.Input},{type:core.HostBinding,args:["class.lg-label"]}],id:[{type:core.Input},{type:core.HostBinding,args:["attr.id"]}],for:[{type:core.Input},{type:core.HostBinding,args:["attr.for"]}]}};LgLabelComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-label]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,standalone:!0,styles:[label_componentngResource_default()]})],LgLabelComponent)},"./projects/canopy/src/lib/forms/validation/error-state-matcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>LgErrorStateMatcher});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgErrorStateMatcher=class LgErrorStateMatcher{isControlInvalid(control,controlContainer){return!!(control&&control.invalid&&control.touched&&control.dirty||controlContainer&&controlContainer.submitted&&control.invalid)}};LgErrorStateMatcher=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgErrorStateMatcher)},"./projects/canopy/src/lib/forms/validation/validation.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>LgValidationComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var validation_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/validation/validation.component.scss?ngResource"),validation_componentngResource_default=__webpack_require__.n(validation_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let nextUniqueId=0,LgValidationComponent=class LgValidationComponent{set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-variant--${this._variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-variant--${variant}`),this._variant=variant}get variant(){return this._variant}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.showIcon=!0,this.id="lg-validation-"+nextUniqueId++,this.class=!0,this.variant="error"}static#_=this.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}];static#_2=this.propDecorators={showIcon:[{type:core.Input}],variant:[{type:core.Input}],id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-validation"]}]}};LgValidationComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-validation",template:'<div\n  *ngIf="showIcon && variant !== \'generic\'"\n  [ngSwitch]="variant"\n  class="lg-validation__icon"\n>\n  <lg-icon *ngSwitchCase="\'error\'" name="crossmark-spot-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'info\'" name="information-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'warning\'" name="warning-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'success\'" name="checkmark-spot-fill"></lg-icon>\n</div>\n\n<div>\n  <ng-content></ng-content>\n</div>\n',encapsulation:core.ViewEncapsulation.None,standalone:!0,imports:[common.NgIf,common.NgSwitch,common.NgSwitchCase,icon_component.A],styles:[validation_componentngResource_default()]})],LgValidationComponent)},"./projects/canopy/src/lib/spacing/margin/margin.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LgMarginDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_spacing_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgMarginDirective=class LgMarginDirective{set lgMarginTop(margin){this.marginTopClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-top"),this.marginTopClasses)}set lgMarginRight(margin){this.marginRightClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-right"),this.marginRightClasses)}set lgMarginBottom(margin){this.marginBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-bottom"),this.marginBottomClasses)}set lgMarginLeft(margin){this.marginLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-left"),this.marginLeftClasses)}set lgMarginHorizontal(margin){this.lgMarginLeft=margin,this.lgMarginRight=margin}set lgMarginVertical(margin){this.lgMarginTop=margin,this.lgMarginBottom=margin}set lgMargin(margin){this.marginClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin"),this.marginClasses)}constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.marginTopClasses=[],this.marginRightClasses=[],this.marginBottomClasses=[],this.marginLeftClasses=[],this.marginClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef},{type:_spacing_service__WEBPACK_IMPORTED_MODULE_1__.r}];static#_2=this.propDecorators={lgMarginTop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginRight:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginBottom:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginLeft:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginHorizontal:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginVertical:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMargin:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};LgMarginDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"\n    [lgMargin],\n    [lgMarginVertical],\n    [lgMarginHorizontal],\n    [lgMarginTop],\n    [lgMarginRight],\n    [lgMarginBottom],\n    [lgMarginLeft]\n  ",standalone:!0})],LgMarginDirective)},"./projects/canopy/src/lib/spacing/spacing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>SpacingService});var BreakpointValues,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");!function(BreakpointValues){BreakpointValues.xs="0",BreakpointValues.sm="20rem",BreakpointValues.md="48rem",BreakpointValues.lg="64rem",BreakpointValues.xl="80rem",BreakpointValues.xxl="90rem"}(BreakpointValues||(BreakpointValues={}));let DynamicStyleService=class DynamicStyleService{constructor(){this.styleTag=null,this.selectors=[],this.mediaQueries={},this.addStyleTag()}addRules(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.filter((r=>!this.selectors.includes(r.selector))).map((r=>{this.selectors.push(r.selector),styleTagCache+=`.${r.selector}{${r.declaration}}`})),this.styleTag.innerHTML=styleTagCache}addRulesToMediaQuery(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.map((r=>{if(this.mediaQueries[r.breakpoint]||(styleTagCache+=this.createMediaQuery(r.breakpoint)),this.mediaQueries[r.breakpoint].includes(r.selector))return;this.mediaQueries[r.breakpoint].push(r.selector);const rule=`.${r.selector}{${r.declaration}}`;styleTagCache=this.insertRuleInsideMediaQuery(styleTagCache,r.breakpoint,rule,r.addAtStart)})),this.styleTag.innerHTML=styleTagCache}insertRuleInsideMediaQuery(cssString,breakpoint,rule,atStart=!1){const search=`@media(min-width:${breakpoint}){`;let index=cssString.indexOf(search);if(-1===index)return console.warn("Media query not found in string, cannot add rule."),cssString;if(index+=search.length,atStart)return cssString.substring(0,index)+`${rule}`+cssString.substring(index);let balance=0,pos=null;for(let i=index;i<cssString.length;i++){const char=cssString[i];if("{"===char?balance++:"}"===char&&balance--,-1===balance){pos=i;break}}return null===pos?(console.warn("Cannot add rule to media query in CSS string, invalid CSS string"),cssString):cssString.substring(0,pos)+`${rule}`+cssString.substring(pos)}addStyleTag(){this.styleTag=document.createElement("style"),this.styleTag.type="text/css",document.getElementsByTagName("head")[0].appendChild(this.styleTag)}createMediaQuery(breakpoint){if(!this.mediaQueries[breakpoint])return this.mediaQueries[breakpoint]=[],`@media(min-width:${breakpoint}){}`}static#_=this.ctorParameters=()=>[]};var SpacingValues;DynamicStyleService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],DynamicStyleService),function(SpacingValues){SpacingValues.none="0",SpacingValues.xxxs="0.25rem",SpacingValues.xxs="0.5rem",SpacingValues.xs="0.75rem",SpacingValues.sm="1rem",SpacingValues.md="1.5rem",SpacingValues.lg="2rem",SpacingValues.xl="2.5rem",SpacingValues.xxl="3rem",SpacingValues.xxxl="4.5rem",SpacingValues.xxxxl="9rem"}(SpacingValues||(SpacingValues={}));let SpacingService=class SpacingService{constructor(dynamicStyleService){this.dynamicStyleService=dynamicStyleService}createNewClasses(spacing,cssProperty){const newClasses=[],responsiveSpacingRules=[];if(!spacing)return[];if("object"==typeof spacing)Object.keys(spacing).forEach((key=>{const selector=`lg-${cssProperty.replace("-","__")}--${key}--${spacing[key]}`;responsiveSpacingRules.push({selector,declaration:`${cssProperty}:${SpacingValues[spacing[key]]}!important`,breakpoint:BreakpointValues[key]}),newClasses.push(selector)})),this.dynamicStyleService.addRulesToMediaQuery(responsiveSpacingRules);else{const selector=`lg-${cssProperty.replace("-","__")}--${spacing}`;this.dynamicStyleService.addRules([{selector,declaration:`${cssProperty}:${SpacingValues[spacing]}!important`}]),newClasses.push(selector)}return newClasses}static#_=this.ctorParameters=()=>[{type:DynamicStyleService}]};SpacingService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],SpacingService)},"./projects/canopy/src/lib/utils/dom.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>LgDomService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgDomService=class LgDomService{toggleIdInStringProperty(property="",oldElement,newElement){return newElement||null!==property?(null===property&&(property=""),oldElement&&oldElement.id&&(property=property.replace(oldElement.id,"")),newElement&&newElement.id&&(property=`${property} ${newElement.id}`),""===(property=property.trim())&&(property=null),property):property}};LgDomService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgDomService)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{e:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.T)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)(args))):fn(args)}(fn,args)}))}},"./projects/canopy/src/lib/forms/docs/filter-buttons/filter-multiple.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,filterMultipleButtons:()=>filterMultipleButtons});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_checkbox_group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/forms/checkbox-group/checkbox-group.component.ts"),_toggle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./projects/canopy/src/lib/forms/toggle/toggle.component.ts"),_hint__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts");const formTemplate='\n<form [formGroup]="form">\n  <lg-filter-multiple-group formControlName="colors" [focus]="focus">\n    {{ label }}\n    <lg-hint>{{ hint }}</lg-hint>\n    <lg-filter-checkbox value="red" (blur)="checkboxBlur.emit($event)">Red</lg-filter-checkbox>\n    <lg-filter-checkbox value="yellow" (blur)="checkboxBlur.emit($event)">Yellow</lg-filter-checkbox>\n    <lg-filter-checkbox value="green" (blur)="checkboxBlur.emit($event)">Green</lg-filter-checkbox>\n    <lg-filter-checkbox value="blue" (blur)="checkboxBlur.emit($event)">Blue</lg-filter-checkbox>\n  </lg-filter-multiple-group>\n</form>\n';let ReactiveFormComponent=class ReactiveFormComponent{set disabled(isDisabled){!0===isDisabled?this.form.controls.colors.disable():this.form.controls.colors.enable()}get disabled(){return this.form.controls.colors.disabled}constructor(fb,registry){this.fb=fb,this.registry=registry,this.checkboxChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.checkboxBlur=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.form=this.fb.group({colors:this.fb.control(["red"])}),this.form.valueChanges.subscribe((val=>this.checkboxChange.emit(val))),this.registry.registerIcons([_icon__WEBPACK_IMPORTED_MODULE_2__.Say,_icon__WEBPACK_IMPORTED_MODULE_2__.qXC])}static#_=this.ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ze},{type:_icon__WEBPACK_IMPORTED_MODULE_4__.g}];static#_2=this.propDecorators={label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],hint:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],focus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],checkboxChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}],checkboxBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]}};ReactiveFormComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"lg-reactive-form",template:formTemplate,standalone:!0,imports:[_checkbox_group__WEBPACK_IMPORTED_MODULE_6__.$,_hint__WEBPACK_IMPORTED_MODULE_7__.m,_toggle__WEBPACK_IMPORTED_MODULE_8__.N,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.X1]})],ReactiveFormComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Filter buttons/Examples",component:_checkbox_group__WEBPACK_IMPORTED_MODULE_6__.$,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[ReactiveFormComponent]})],argTypes:{id:{table:{disable:!0}},name:{table:{disable:!0}},value:{table:{disable:!0}},focus:{description:"Set the focus on the fieldset.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{description:"Set the inner filters to disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},ariaDescribedBy:{table:{disable:!0}},checkboxChange:{action:"Checkbox change",table:{disable:!0}},checkboxBlur:{action:"Checkbox blur",table:{disable:!0}},inline:{table:{disable:!0}},_checkboxes:{table:{disable:!0}},_hintElement:{table:{disable:!0}},_validationElement:{table:{disable:!0}},_variant:{table:{disable:!0}},nextUniqueId:{table:{disable:!0}},onChange:{table:{disable:!0}},onTouched:{table:{disable:!0}},registerOnChange:{table:{disable:!0}},registerOnTouched:{table:{disable:!0}},setDisabledState:{table:{disable:!0}},writeValue:{table:{disable:!0}}}},filterMultipleButtons=(args=>({props:args,template:'\n  <lg-reactive-form\n    [disabled]="disabled"\n    [focus]="focus"\n    [label]="label"\n    [hint]="hint"\n    (checkboxChange)="checkboxChange($event)"\n    (checkboxBlur)="checkboxBlur($event)">\n  </lg-reactive-form>\n  '})).bind({});filterMultipleButtons.storyName="Select multiple",filterMultipleButtons.args={label:"Select colors",hint:"Please select all colours that apply",disabled:!1,focus:!1},filterMultipleButtons.parameters={docs:{source:{code:formTemplate}}},filterMultipleButtons.parameters={...filterMultipleButtons.parameters,docs:{...filterMultipleButtons.parameters?.docs,source:{originalSource:'(args: LgCheckboxGroupComponent) => ({\n  props: args,\n  template: `\n  <lg-reactive-form\n    [disabled]="disabled"\n    [focus]="focus"\n    [label]="label"\n    [hint]="hint"\n    (checkboxChange)="checkboxChange($event)"\n    (checkboxBlur)="checkboxBlur($event)">\n  </lg-reactive-form>\n  `\n})',...filterMultipleButtons.parameters?.docs?.source}}};const __namedExportsOrder=["filterMultipleButtons"]},"./projects/canopy/src/lib/forms/hint/hint.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-hint {\n  display: block;\n  color: var(--color-battleship-grey);\n  margin-top: calc(var(--space-xxs) * -1);\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-regular);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/forms/label/label.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-label {\n  display: block;\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-medium);\n  width: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/forms/validation/validation.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-validation {\n  display: flex;\n  align-items: flex-start;\n  padding: var(--space-xs);\n  margin-top: var(--space-xxs);\n}\n\n.lg-validation__icon {\n  margin-right: var(--space-xs);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);