(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[4740,2581],{"./projects/canopy/src/lib/filter-container/docs/filter-container.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>filter_container_stories,standardFilterContainer:()=>standardFilterContainer});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),icons_interface=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),icon_registry=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),button_module=__webpack_require__("./projects/canopy/src/lib/button/button.module.ts"),icon_module=__webpack_require__("./projects/canopy/src/lib/icon/icon.module.ts");var filter_container_componentngResource=__webpack_require__("./projects/canopy/src/lib/filter-container/filter-container.component.scss?ngResource"),filter_container_componentngResource_default=__webpack_require__.n(filter_container_componentngResource),keyboard_keys=__webpack_require__("./projects/canopy/src/lib/utils/keyboard-keys.ts"),button_toggle_directive=__webpack_require__("./projects/canopy/src/lib/button/button-toggle/button-toggle.directive.ts");var filter_container_panel_componentngResource=__webpack_require__("./projects/canopy/src/lib/filter-container/filter-container-panel/filter-container-panel.component.scss?ngResource"),filter_container_panel_componentngResource_default=__webpack_require__.n(filter_container_panel_componentngResource);var _class;let LgFilterContainerPanelComponent=((_class=class LgFilterContainerPanelComponent{constructor(){this.role="region"}get activeClass(){return this.isActive}get id(){return`lg-filter-container-panel-${this.uniqueId}`}get ariaLabelledBy(){return`lg-filter-container-toggle-${this.uniqueId}`}}).propDecorators={activeClass:[{type:core.HostBinding,args:["class.lg-filter-container-panel--active"]}],id:[{type:core.HostBinding,args:["id"]}],role:[{type:core.HostBinding,args:["attr.role"]}],ariaLabelledBy:[{type:core.HostBinding,args:["attr.aria-labelledby"]}]},_class);var filter_container_component_class;LgFilterContainerPanelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-filter-container-panel",template:'<ng-content select="lg-filter-container-panel-body"></ng-content>\n<ng-content select="lg-filter-container-panel-footer"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-filter-container-panel"},styles:[filter_container_panel_componentngResource_default()]})],LgFilterContainerPanelComponent);let nextUniqueId=0,LgFilterContainerComponent=((filter_container_component_class=class LgFilterContainerComponent{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.uniqueId=nextUniqueId++,this.id=`lg-filter-container-${this.uniqueId}`}onKeydown(event){event.key===keyboard_keys.YG.KEY_ESCAPE&&this.filterContainerToggle?.isActive&&this.filterContainerToggle.toggle()}ngAfterContentInit(){this.filterContainerToggle.id=`lg-filter-container-toggle-${this.uniqueId}`,this.filterContainerToggle.ariaControls=`lg-filter-container-panel-${this.uniqueId}`,this.filterContainerPanel.uniqueId=this.uniqueId,this.subscription=this.filterContainerToggle.toggleActive.subscribe((isActive=>{this.filterContainerPanel.isActive=isActive,this.toggleActiveClass(isActive)}))}ngOnDestroy(){this.subscription?.unsubscribe()}toggleActiveClass(isActive){isActive?this.renderer.addClass(this.hostElement.nativeElement,"lg-filter-container--active"):this.renderer.removeClass(this.hostElement.nativeElement,"lg-filter-container--active")}}).ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],filter_container_component_class.propDecorators={id:[{type:core.HostBinding,args:["id"]}],filterContainerToggle:[{type:core.ContentChild,args:[(0,core.forwardRef)((()=>button_toggle_directive.A))]}],filterContainerPanel:[{type:core.ContentChild,args:[(0,core.forwardRef)((()=>LgFilterContainerPanelComponent))]}],onKeydown:[{type:core.HostListener,args:["keydown",["$event"]]}]},filter_container_component_class);LgFilterContainerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-filter-container",template:'<ng-content></ng-content>\n\n<ng-content select="[lg-filter-container-trigger]"></ng-content>\n<ng-content select="lg-filter-container-panel"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-filter-container"},styles:[filter_container_componentngResource_default()]})],LgFilterContainerComponent);var filter_container_panel_body_componentngResource=__webpack_require__("./projects/canopy/src/lib/filter-container/filter-container-panel-body/filter-container-panel-body.component.scss?ngResource"),filter_container_panel_body_componentngResource_default=__webpack_require__.n(filter_container_panel_body_componentngResource);let LgFilterContainerPanelBodyComponent=class LgFilterContainerPanelBodyComponent{};LgFilterContainerPanelBodyComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-filter-container-panel-body",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-filter-container-panel-body"},styles:[filter_container_panel_body_componentngResource_default()]})],LgFilterContainerPanelBodyComponent);var filter_container_panel_footer_componentngResource=__webpack_require__("./projects/canopy/src/lib/filter-container/filter-container-panel-footer/filter-container-panel-footer.component.scss?ngResource"),filter_container_panel_footer_componentngResource_default=__webpack_require__.n(filter_container_panel_footer_componentngResource);let LgFilterContainerPanelFooterComponent=class LgFilterContainerPanelFooterComponent{};LgFilterContainerPanelFooterComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-filter-container-panel-footer",template:'<ng-content select="lg-button-group"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-filter-container-panel-footer"},styles:[filter_container_panel_footer_componentngResource_default()]})],LgFilterContainerPanelFooterComponent);let LgFilterContainerModule=class LgFilterContainerModule{};var filter_container_stories_class;LgFilterContainerModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,button_module.h,icon_module.r],declarations:[LgFilterContainerComponent,LgFilterContainerPanelComponent,LgFilterContainerPanelBodyComponent,LgFilterContainerPanelFooterComponent],exports:[LgFilterContainerComponent,LgFilterContainerPanelComponent,LgFilterContainerPanelBodyComponent,LgFilterContainerPanelFooterComponent,button_module.h,icon_module.r]})],LgFilterContainerModule);let StoryToggleDirective=((filter_container_stories_class=class StoryToggleDirective{constructor(registry){this.registry=registry,this.registry.registerIcons([icons_interface.lgIconFilter,icons_interface.lgIconChevronDown])}}).ctorParameters=()=>[{type:icon_registry.v}],filter_container_stories_class.propDecorators={variant:[{type:core.Input}]},filter_container_stories_class);StoryToggleDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[lgStoryToggle]"})],StoryToggleDirective);const filter_container_stories={title:"Patterns/Filter container/Examples",decorators:[(0,dist.moduleMetadata)({declarations:[StoryToggleDirective],imports:[LgFilterContainerModule]})],argTypes:{variant:{options:["primary-dark","secondary-dark"],table:{defaultValue:"primary-dark",type:{summary:"ButtonVariant"}},control:{type:"select"}}}};function setComponentCode(toggleCode){return`\n<lg-filter-container>\n  ${toggleCode}\n  <lg-filter-container-panel>\n    <lg-filter-container-panel-body>\n      Form inputs should go in here\n    </lg-filter-container-panel-body>\n\n    <lg-filter-container-panel-footer>\n      <lg-button-group>\n        <button\n          lg-button\n          variant="primary-dark"\n        >Apply</button>\n        <button\n          lg-button\n          variant="secondary-dark"\n        >Cancel</button>\n      </lg-button-group>\n    </lg-filter-container-panel-footer>\n  </lg-filter-container-panel>\n</lg-filter-container>\n`}const standardFilterContainer=(args=>({props:args,template:setComponentCode('\n<button lg-button [variant]="variant" lgButtonToggle lgStoryToggle>\n  <lg-icon name="filter" first></lg-icon>\n  Filters\n  <lg-icon name="chevron-down" second></lg-icon>\n</button>\n  ')})).bind({});standardFilterContainer.storyName="Filter container",standardFilterContainer.args={variant:"secondary-dark"},standardFilterContainer.parameters={docs:{source:{code:setComponentCode('\n  <button lg-button [variant]="variant" lgButtonToggle>\n    <lg-icon name="filter" first></lg-icon>\n    Filters\n    <lg-icon name="chevron-down" second></lg-icon>\n  </button>\n      ')}}}},"./projects/canopy/src/lib/button/button-toggle/button-toggle.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>LgButtonToggleDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgButtonToggleDirective=((_class=class LgButtonToggleDirective{constructor(hostElement){if(this.hostElement=hostElement,this._isActive=!1,this.toggleActive=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.class=!0,this.role="button","BUTTON"!==this.hostElement.nativeElement.tagName)throw Error("The `lgButtonToggle` directive should always be added to a button element. Please change the HTML tag accordingly")}get active(){return this._isActive}get idAttr(){return this.id}get ariaControlsAttr(){return this.ariaControls}onClick(){this.toggle()}toggle(){this._isActive=!this._isActive,this.toggleActive.emit(this._isActive)}get isActive(){return this._isActive}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class.propDecorators={toggleActive:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-btn-toggle"]}],role:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["role"]}],active:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-btn-toggle--active"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.aria-expanded"]}],idAttr:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["id"]}],ariaControlsAttr:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.aria-controls"]}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["click"]}]},_class);LgButtonToggleDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgButtonToggle]"})],LgButtonToggleDirective)},"./projects/canopy/src/lib/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>LgIconModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let LgIconModule=class LgIconModule{};LgIconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r],exports:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r]})],LgIconModule)},"./projects/canopy/src/lib/utils/keyboard-keys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A5:()=>isKeyRight,FG:()=>isKeyDown,NE:()=>isKeyUp,YG:()=>keyName,dO:()=>isKeyLeft});const keyName={KEY_LEFT:"ArrowLeft",KEY_UP:"ArrowUp",KEY_RIGHT:"ArrowRight",KEY_DOWN:"ArrowDown",KEY_ESCAPE:"Escape",KEY_TAB:"Tab"},isKeyLeft=event=>event.key===keyName.KEY_LEFT||"Left"===event.key,isKeyUp=event=>event.key===keyName.KEY_UP||"Up"===event.key,isKeyRight=event=>event.key===keyName.KEY_RIGHT||"Right"===event.key,isKeyDown=event=>event.key===keyName.KEY_DOWN||"Down"===event.key},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/rxjs/dist/esm5/internal/observable/interval.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>interval});var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_timer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function interval(period,scheduler){return void 0===period&&(period=0),void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.z),period<0&&(period=0),(0,_timer__WEBPACK_IMPORTED_MODULE_1__.H)(period,period,scheduler)}},"./node_modules/rxjs/dist/esm5/internal/observable/timer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>timer});var Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),isScheduler=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js");function timer(dueTime,intervalOrScheduler,scheduler){void 0===dueTime&&(dueTime=0),void 0===scheduler&&(scheduler=scheduler_async.P);var intervalDuration=-1;return null!=intervalOrScheduler&&((0,isScheduler.K)(intervalOrScheduler)?scheduler=intervalOrScheduler:intervalDuration=intervalOrScheduler),new Observable.y((function(subscriber){var due=function isValidDate(value){return value instanceof Date&&!isNaN(value)}(dueTime)?+dueTime-scheduler.now():dueTime;due<0&&(due=0);var n=0;return scheduler.schedule((function(){subscriber.closed||(subscriber.next(n++),0<=intervalDuration?this.schedule(void 0,intervalDuration):subscriber.complete())}),due)}))}},"./node_modules/rxjs/dist/esm5/internal/scheduler/async.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>async_async,z:()=>asyncScheduler});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),Action=function(_super){function Action(scheduler,work){return _super.call(this)||this}return(0,tslib_es6.ZT)(Action,_super),Action.prototype.schedule=function(state,delay){return void 0===delay&&(delay=0),this},Action}(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js").w0),intervalProvider={setInterval:function(handler,timeout){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];var delegate=intervalProvider.delegate;return(null==delegate?void 0:delegate.setInterval)?delegate.setInterval.apply(delegate,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args))):setInterval.apply(void 0,(0,tslib_es6.ev)([handler,timeout],(0,tslib_es6.CR)(args)))},clearInterval:function(handle){var delegate=intervalProvider.delegate;return((null==delegate?void 0:delegate.clearInterval)||clearInterval)(handle)},delegate:void 0},arrRemove=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"),AsyncAction=function(_super){function AsyncAction(scheduler,work){var _this=_super.call(this,scheduler,work)||this;return _this.scheduler=scheduler,_this.work=work,_this.pending=!1,_this}return(0,tslib_es6.ZT)(AsyncAction,_super),AsyncAction.prototype.schedule=function(state,delay){var _a;if(void 0===delay&&(delay=0),this.closed)return this;this.state=state;var id=this.id,scheduler=this.scheduler;return null!=id&&(this.id=this.recycleAsyncId(scheduler,id,delay)),this.pending=!0,this.delay=delay,this.id=null!==(_a=this.id)&&void 0!==_a?_a:this.requestAsyncId(scheduler,this.id,delay),this},AsyncAction.prototype.requestAsyncId=function(scheduler,_id,delay){return void 0===delay&&(delay=0),intervalProvider.setInterval(scheduler.flush.bind(scheduler,this),delay)},AsyncAction.prototype.recycleAsyncId=function(_scheduler,id,delay){if(void 0===delay&&(delay=0),null!=delay&&this.delay===delay&&!1===this.pending)return id;null!=id&&intervalProvider.clearInterval(id)},AsyncAction.prototype.execute=function(state,delay){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var error=this._execute(state,delay);if(error)return error;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},AsyncAction.prototype._execute=function(state,_delay){var errorValue,errored=!1;try{this.work(state)}catch(e){errored=!0,errorValue=e||new Error("Scheduled action threw falsy error")}if(errored)return this.unsubscribe(),errorValue},AsyncAction.prototype.unsubscribe=function(){if(!this.closed){var id=this.id,scheduler=this.scheduler,actions=scheduler.actions;this.work=this.state=this.scheduler=null,this.pending=!1,(0,arrRemove.P)(actions,this),null!=id&&(this.id=this.recycleAsyncId(scheduler,id,null)),this.delay=null,_super.prototype.unsubscribe.call(this)}},AsyncAction}(Action),dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0},Scheduler=function(){function Scheduler(schedulerActionCtor,now){void 0===now&&(now=Scheduler.now),this.schedulerActionCtor=schedulerActionCtor,this.now=now}return Scheduler.prototype.schedule=function(work,delay,state){return void 0===delay&&(delay=0),new this.schedulerActionCtor(this,work).schedule(state,delay)},Scheduler.now=dateTimestampProvider.now,Scheduler}(),asyncScheduler=new(function(_super){function AsyncScheduler(SchedulerAction,now){void 0===now&&(now=Scheduler.now);var _this=_super.call(this,SchedulerAction,now)||this;return _this.actions=[],_this._active=!1,_this}return(0,tslib_es6.ZT)(AsyncScheduler,_super),AsyncScheduler.prototype.flush=function(action){var actions=this.actions;if(this._active)actions.push(action);else{var error;this._active=!0;do{if(error=action.execute(action.state,action.delay))break}while(action=actions.shift());if(this._active=!1,error){for(;action=actions.shift();)action.unsubscribe();throw error}}},AsyncScheduler}(Scheduler))(AsyncAction),async_async=asyncScheduler},"./projects/canopy/src/lib/filter-container/filter-container-panel-body/filter-container-panel-body.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-filter-container-panel-body {\n  display: block;\n  padding: var(--space-lg) var(--space-sm);\n}\n@media (min-width: 48rem) {\n  .lg-filter-container-panel-body {\n    padding: var(--space-lg);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/filter-container/filter-container-panel-footer/filter-container-panel-footer.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-filter-container-panel-footer {\n  border-top: solid var(--border-width) var(--color-platinum);\n  display: block;\n  padding: var(--space-lg) var(--space-sm);\n}\n@media (min-width: 48rem) {\n  .lg-filter-container-panel-footer {\n    padding: var(--space-lg);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/filter-container/filter-container-panel/filter-container-panel.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-filter-container-panel {\n  border: solid var(--border-width) var(--border-color);\n  border-radius: var(--border-radius-sm);\n  clear: both;\n  display: none;\n}\n.lg-filter-container-panel--active {\n  display: block;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/filter-container/filter-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-filter-container {\n  display: flex;\n  justify-content: flex-end;\n}\n.lg-filter-container--active {\n  display: block;\n}\n\n.lg-btn-toggle {\n  display: block;\n  float: right;\n  margin-bottom: var(--space-xxs) !important;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);