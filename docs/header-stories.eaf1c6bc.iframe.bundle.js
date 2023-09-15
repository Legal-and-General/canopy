"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[3386,2581],{"./projects/canopy/src/lib/header/docs/header.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{coBrandedHeader:()=>coBrandedHeader,default:()=>__WEBPACK_DEFAULT_EXPORT__,navHeader:()=>navHeader,standardHeader:()=>standardHeader});var _class,tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_header_header_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/header/header.component.ts"),_header_header_module__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/header/header.module.ts"),_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts"),_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/canopy/src/lib/icon/icon.module.ts");const navigationTemplate='\n<header lg-header>\n  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>\n\n  <lg-primary-nav>\n    <lg-primary-nav-list-item>\n      <a href="" [isActive]="true" lgPrimaryNavItem>Link 1</a>\n    </lg-primary-nav-list-item>\n    <lg-primary-nav-list-item>\n      <a href="" lgPrimaryNavItem>\n        Link 2\n        <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>\n      </a>\n    </lg-primary-nav-list-item>\n    <lg-primary-nav-list-item [alignRight]="true">\n      <button type="button" lgPrimaryNavItem>Button</button>\n    </lg-primary-nav-list-item>\n  </lg-primary-nav>\n\n  <lg-account-menu>\n    <lg-account-menu-list-item>\n      <button type="button" lgAccountMenuItem>\n        <lg-account-menu-item-label>Button</lg-account-menu-item-label>\n        <lg-icon name="radio-button-unselected"></lg-icon>\n        <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>\n      </button>\n    </lg-account-menu-list-item>\n    <lg-account-menu-list-item>\n      <a href="" lgAccountMenuItem>\n        <lg-account-menu-item-label>Link</lg-account-menu-item-label>\n        <lg-icon name="radio-button-unselected"></lg-icon>\n      </a>\n    </lg-account-menu-list-item>\n  </lg-account-menu>\n</header>\n';let PrimaryNavigationComponent=((_class=class PrimaryNavigationComponent{constructor(registry){this.registry=registry,this.registry.registerIcons([_icon__WEBPACK_IMPORTED_MODULE_1__.lgIconProfile,_icon__WEBPACK_IMPORTED_MODULE_1__.lgIconRadioButtonUnselected])}}).ctorParameters=()=>[{type:_icon__WEBPACK_IMPORTED_MODULE_2__.v}],_class.propDecorators={logo:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}],logoAlt:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}],logoHref:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input}]},_class);PrimaryNavigationComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({selector:"lg-navigation",template:navigationTemplate})],PrimaryNavigationComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Header/Examples",component:_header_header_component__WEBPACK_IMPORTED_MODULE_5__.V,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[PrimaryNavigationComponent],imports:[_header_header_module__WEBPACK_IMPORTED_MODULE_6__.x,_icon__WEBPACK_IMPORTED_MODULE_7__.r]})],parameters:{layout:"fullscreen"},argTypes:{logo:{description:"A url link to the logo."},logoAlt:{description:"alt text to display alongside the logo.",table:{defaultValue:{summary:""}}},logoHref:{description:"Url link if the logo is clickable."},secondaryLogo:{description:"A url link to the secondary logo."},secondaryLogoAlt:{description:"alt text to display alongside the secondary logo.",table:{defaultValue:{summary:""}}},secondaryLogoHref:{description:"Url link if the secondary logo is clickable."},class:{table:{disable:!0}},ngAfterContentInit:{table:{disable:!0}},headerLogos:{table:{disable:!0}},showResponsiveMenu:{table:{disable:!0}},menuToggled:{table:{disable:!0}},handleToggleKeydown:{table:{disable:!0}},ngOnDestroy:{table:{disable:!0}},onDocumentClickout:{table:{disable:!0}},toggleResponsiveMenu:{table:{disable:!0}},menuToggleButton:{table:{disable:!0}},primaryNav:{table:{disable:!0}},primaryNavEl:{table:{disable:!0}},navItems:{table:{disable:!0}}}},template='\n<header lg-header>\n  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>\n\n  \x3c!--  Additional code can be inserted here  --\x3e\n</header>\n',standardHeader=(args=>({props:args,template})).bind({});standardHeader.storyName="Standard",standardHeader.args={logo:"legal-and-general-logo.svg",logoAlt:"Company name",logoHref:"https://storybook.js.org"},standardHeader.parameters={docs:{source:{code:template}}},standardHeader.argTypes={secondaryLogo:{table:{disable:!0}},secondaryLogoAlt:{table:{disable:!0}},secondaryLogoHref:{table:{disable:!0}}};const coBrandedTemplate='\n<header lg-header>\n  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>\n  <lg-header-logo [src]="secondaryLogo" [alt]="secondaryLogoAlt" [href]="secondaryLogoHref"></lg-header-logo>\n\n  \x3c!--  Additional code can be inserted here  --\x3e\n</header>\n',coBrandedHeader=(args=>({props:args,template:coBrandedTemplate,styles:["\n      :host {\n        --header-second-logo-width: 100px;\n        --header-second-logo-width-lg: 300px;\n      }\n    "]})).bind({});coBrandedHeader.storyName="Co-branded",coBrandedHeader.args={logo:"legal-and-general-logo.svg",logoAlt:"Company name",logoHref:"https://storybook.js.org",secondaryLogo:"dummy-logo.svg",secondaryLogoAlt:"Second company name",secondaryLogoHref:"https://storybook.js.org"},coBrandedHeader.parameters={docs:{source:{code:coBrandedTemplate}}};const navHeader=(args=>({props:args,template:'<lg-navigation [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref"></ lg-navigation>'})).bind({});navHeader.storyName="Navigation",navHeader.args={logo:"legal-and-general-logo.svg",logoAlt:"Company name",logoHref:"https://storybook.js.org"},navHeader.parameters={docs:{source:{code:navigationTemplate}}},navHeader.argTypes={secondaryLogo:{table:{disable:!0}},secondaryLogoAlt:{table:{disable:!0}},secondaryLogoHref:{table:{disable:!0}}}},"./projects/canopy/src/lib/button/button-toggle/button-toggle.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>LgButtonToggleDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgButtonToggleDirective=((_class=class LgButtonToggleDirective{constructor(hostElement){if(this.hostElement=hostElement,this._isActive=!1,this.toggleActive=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.class=!0,this.role="button","BUTTON"!==this.hostElement.nativeElement.tagName)throw Error("The `lgButtonToggle` directive should always be added to a button element. Please change the HTML tag accordingly")}get active(){return this._isActive}get idAttr(){return this.id}get ariaControlsAttr(){return this.ariaControls}onClick(){this.toggle()}toggle(){this._isActive=!this._isActive,this.toggleActive.emit(this._isActive)}get isActive(){return this._isActive}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class.propDecorators={toggleActive:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-btn-toggle"]}],role:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["role"]}],active:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-btn-toggle--active"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.aria-expanded"]}],idAttr:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["id"]}],ariaControlsAttr:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.aria-controls"]}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["click"]}]},_class);LgButtonToggleDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgButtonToggle]"})],LgButtonToggleDirective)},"./projects/canopy/src/lib/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>LgIconModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let LgIconModule=class LgIconModule{};LgIconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r],exports:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r]})],LgIconModule)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{module.exports=function(i){return i[1]}},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.J)(1)}()((0,from.D)(args,(0,util_args.yG)(args)))}},"./node_modules/rxjs/dist/esm5/internal/operators/filter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>filter});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function filter(predicate,thisArg){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var index=0;source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(value){return predicate.call(thisArg,value,index++)&&subscriber.next(value)})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/startWith.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>startWith});var _observable_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function startWith(){for(var values=[],_i=0;_i<arguments.length;_i++)values[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.yG)(values);return(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.e)((function(source,subscriber){(scheduler?(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source,scheduler):(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source)).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>switchMap});var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function switchMap(project,resultSelector){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var innerSubscriber=null,index=0,isComplete=!1,checkComplete=function(){return isComplete&&!innerSubscriber&&subscriber.complete()};source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(value){null==innerSubscriber||innerSubscriber.unsubscribe();var innerIndex=0,outerIndex=index++;(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.Xf)(project(value,outerIndex)).subscribe(innerSubscriber=(0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(innerValue){return subscriber.next(resultSelector?resultSelector(value,innerValue,outerIndex,innerIndex++):innerValue)}),(function(){innerSubscriber=null,checkComplete()})))}),(function(){isComplete=!0,checkComplete()})))}))}}}]);