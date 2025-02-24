(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[17762],{"./projects/canopy/src/lib/button/button-group/button-group.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>LgButtonGroupComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_group_componentngResource=__webpack_require__("./projects/canopy/src/lib/button/button-group/button-group.component.scss?ngResource"),button_group_componentngResource_default=__webpack_require__.n(button_group_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgButtonGroupComponent=class LgButtonGroupComponent{constructor(){this.class=!0}static#_=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-btn-group"]}]}};LgButtonGroupComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-button-group",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[button_group_componentngResource_default()]})],LgButtonGroupComponent)},"./projects/canopy/src/lib/focus/focus.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>LgFocusDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgFocusDirective=class LgFocusDirective{constructor(el){this.el=el}ngOnChanges({lgFocus}){if(lgFocus.currentValue){this.el.nativeElement.focus()}}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}];static#_2=this.propDecorators={lgFocus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};LgFocusDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgFocus]",standalone:!0})],LgFocusDirective)},"./projects/canopy/src/lib/spacing/padding/padding.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>LgPaddingDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_spacing_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgPaddingDirective=class LgPaddingDirective{set lgPaddingTop(padding){this.paddingTopClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-top"),this.paddingTopClasses)}set lgPaddingRight(padding){this.paddingRightClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-right"),this.paddingRightClasses)}set lgPaddingBottom(padding){this.paddingBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-bottom"),this.paddingBottomClasses)}set lgPaddingLeft(padding){this.paddingLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-left"),this.paddingLeftClasses)}set lgPaddingHorizontal(padding){this.lgPaddingLeft=padding,this.lgPaddingRight=padding}set lgPaddingVertical(padding){this.lgPaddingTop=padding,this.lgPaddingBottom=padding}set lgPadding(padding){this.paddingClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding"),this.paddingClasses)}constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.paddingTopClasses=[],this.paddingRightClasses=[],this.paddingBottomClasses=[],this.paddingLeftClasses=[],this.paddingClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef},{type:_spacing_service__WEBPACK_IMPORTED_MODULE_1__.r}];static#_2=this.propDecorators={lgPaddingTop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingRight:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingBottom:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingLeft:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingHorizontal:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingVertical:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPadding:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};LgPaddingDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"\n    [lgPadding],\n    [lgPaddingVertical],\n    [lgPaddingHorizontal],\n    [lgPaddingTop],\n    [lgPaddingRight],\n    [lgPaddingBottom],\n    [lgPaddingLeft]\n  ",standalone:!0})],LgPaddingDirective)},"./projects/canopy/src/lib/utils/keyboard-keys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$1:()=>isKeyUp,OW:()=>isKeyDown,ad:()=>isKeyRight,d2:()=>isKeyLeft,xT:()=>keyName});const keyName={KEY_LEFT:"ArrowLeft",KEY_UP:"ArrowUp",KEY_RIGHT:"ArrowRight",KEY_DOWN:"ArrowDown",KEY_ESCAPE:"Escape",KEY_TAB:"Tab"},isKeyLeft=event=>event.key===keyName.KEY_LEFT||"Left"===event.key,isKeyUp=event=>event.key===keyName.KEY_UP||"Up"===event.key,isKeyRight=event=>event.key===keyName.KEY_RIGHT||"Right"===event.key,isKeyDown=event=>event.key===keyName.KEY_DOWN||"Down"===event.key},"./projects/canopy/src/lib/modal/docs/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories,standardSeparator:()=>standardSeparator});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");var modal_componentngResource=__webpack_require__("./projects/canopy/src/lib/modal/modal.component.scss?ngResource"),modal_componentngResource_default=__webpack_require__.n(modal_componentngResource),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),a11y=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),keyboard_keys=__webpack_require__("./projects/canopy/src/lib/utils/keyboard-keys.ts"),card_content_component=__webpack_require__("./projects/canopy/src/lib/card/card-content/card-content.component.ts"),focus_directive=__webpack_require__("./projects/canopy/src/lib/focus/focus.directive.ts"),padding_directive=__webpack_require__("./projects/canopy/src/lib/spacing/padding/padding.directive.ts"),card_component=__webpack_require__("./projects/canopy/src/lib/card/card.component.ts");var modal_body_componentngResource=__webpack_require__("./projects/canopy/src/lib/modal/modal-body/modal-body.component.scss?ngResource"),modal_body_componentngResource_default=__webpack_require__.n(modal_body_componentngResource);let LgModalBodyComponent=class LgModalBodyComponent{static#_=this.propDecorators={id:[{type:core.HostBinding,args:["id"]}]}};LgModalBodyComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-modal-body",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-modal-body"},standalone:!0,styles:[modal_body_componentngResource_default()]})],LgModalBodyComponent);var modal_header_componentngResource=__webpack_require__("./projects/canopy/src/lib/modal/modal-header/modal-header.component.scss?ngResource"),modal_header_componentngResource_default=__webpack_require__.n(modal_header_componentngResource),heading_component=__webpack_require__("./projects/canopy/src/lib/heading/heading.component.ts"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");let LgModalService=class LgModalService{constructor(){this.states=new Map}add(id){this.states.set(id,new BehaviorSubject.t(void 0))}remove(id){this.close(id),this.states.delete(id)}open(id){this.states.get(id).next(!0)}close(id){this.states.get(id).next(!1)}isOpen$(id){return this.states.has(id)||this.add(id),this.states.get(id)}};LgModalService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],LgModalService);var icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let LgModalHeaderComponent=class LgModalHeaderComponent{constructor(modalService){this.modalService=modalService,this.headingLevel=2,this.closed=new core.EventEmitter}close(){this.closed.emit(),this.modalService.close(this.modalId)}static#_=this.ctorParameters=()=>[{type:LgModalService}];static#_2=this.propDecorators={headingLevel:[{type:core.Input}],closed:[{type:core.Output}],id:[{type:core.HostBinding,args:["id"]}]}};LgModalHeaderComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-modal-header",template:'<lg-heading [level]="headingLevel">\n  <ng-content></ng-content>\n</lg-heading>\n\n<button type="button" class="lg-modal-header__close" (click)="close()">\n  <span class="lg-visually-hidden">Close modal</span>\n  <lg-icon name="close"></lg-icon>\n</button>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-modal-header"},standalone:!0,imports:[heading_component.v,icon_component.A],styles:[modal_header_componentngResource_default()]})],LgModalHeaderComponent);let LgModalComponent=class LgModalComponent{constructor(document,cdr,modalService){this.document=document,this.cdr=cdr,this.modalService=modalService,this.closeOnOverlayClick=!0,this.open=new core.EventEmitter,this.closed=new core.EventEmitter,this.closedOverlayClick=new core.EventEmitter,this.closedEscKey=new core.EventEmitter}onKeydown(event){event.key===keyboard_keys.xT.KEY_ESCAPE&&this.isOpen&&(this.modalService.close(this.id),this.closedEscKey.emit())}onOverlayClick(){this.closeOnOverlayClick&&(this.modalService.close(this.id),this.closedOverlayClick.emit())}ngOnInit(){this.subscription=this.modalService.isOpen$(this.id).pipe((0,map.T)((isOpen=>{this.isOpen=isOpen;const bodyEl=this.document.querySelector("body");isOpen?(bodyEl.style.overflow="hidden",this.open.emit()):void 0!==isOpen&&(this.closed.emit(),bodyEl.style.overflow=""),this.cdr.detectChanges()}))).subscribe()}ngAfterContentInit(){this.modalHeaderComponent.id=`lg-modal-header-${this.id}`,this.modalHeaderComponent.modalId=this.id,this.modalBodyComponent.id=`lg-modal-body-${this.id}`}onModalClick(event){event.stopPropagation()}ngOnDestroy(){this.modalService.remove(this.id),this.subscription.unsubscribe()}static#_=this.ctorParameters=()=>[{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]},{type:core.ChangeDetectorRef},{type:LgModalService}];static#_2=this.propDecorators={id:[{type:core.Input}],closeOnOverlayClick:[{type:core.Input}],open:[{type:core.Output}],closed:[{type:core.Output}],closedOverlayClick:[{type:core.Output}],closedEscKey:[{type:core.Output}],modalHeaderComponent:[{type:core.ContentChild,args:[(0,core.forwardRef)((()=>LgModalHeaderComponent))]}],modalBodyComponent:[{type:core.ContentChild,args:[(0,core.forwardRef)((()=>LgModalBodyComponent))]}],onKeydown:[{type:core.HostListener,args:["keydown",["$event"]]}],onOverlayClick:[{type:core.HostListener,args:["mousedown"]}]}};LgModalComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-modal",template:'<ng-container *ngIf="isOpen">\n  <div class="lg-modal-overlay" aria-hidden="true"></div>\n  <lg-card\n    cdkTrapFocus\n    class="lg-modal"\n    role="dialog"\n    lgPadding="none"\n    [attr.aria-labelledby]="\'lg-modal-header-\' + id"\n    [attr.aria-describedby]="\'lg-modal-body-\' + id"\n    aria-modal="true"\n    tabindex="-1"\n    (mousedown)="onModalClick($event)"\n    [lgFocus]="isOpen"\n  >\n    <lg-card-content>\n      <ng-content select="lg-modal-header"></ng-content>\n      <ng-content select="lg-modal-body"></ng-content>\n      <ng-content select="lg-modal-footer"></ng-content>\n    </lg-card-content>\n  </lg-card>\n</ng-container>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-modal"},standalone:!0,imports:[common.NgIf,card_component.F,a11y.kB,padding_directive.i,focus_directive.t,card_content_component.m],styles:[modal_componentngResource_default()]})],LgModalComponent);var filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js");let LgModalTriggerDirective=class LgModalTriggerDirective{constructor(el,modalService){this.el=el,this.modalService=modalService,this.clicked=new core.EventEmitter}openModal(){this.allowFocusOnModalTrigger=!0,this.modalService.open(this.lgModalTrigger),this.clicked.emit()}ngOnInit(){this.subscription=this.modalService.isOpen$(this.lgModalTrigger).pipe((0,filter.p)((isOpen=>!isOpen&&this.allowFocusOnModalTrigger)),(0,map.T)((()=>{this.el.nativeElement.focus()}))).subscribe()}ngOnDestroy(){this.subscription.unsubscribe()}static#_=this.ctorParameters=()=>[{type:core.ElementRef},{type:LgModalService}];static#_2=this.propDecorators={lgModalTrigger:[{type:core.Input}],clicked:[{type:core.Output}],openModal:[{type:core.HostListener,args:["click"]}]}};LgModalTriggerDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[lgModalTrigger]",standalone:!0})],LgModalTriggerDirective);var modal_footer_componentngResource=__webpack_require__("./projects/canopy/src/lib/modal/modal-footer/modal-footer.component.scss?ngResource"),modal_footer_componentngResource_default=__webpack_require__.n(modal_footer_componentngResource);let LgModalFooterComponent=class LgModalFooterComponent{};LgModalFooterComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-modal-footer",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-modal-footer"},standalone:!0,styles:[modal_footer_componentngResource_default()]})],LgModalFooterComponent);var modal_body_timer_componentngResource=__webpack_require__("./projects/canopy/src/lib/modal/modal-body-timer/modal-body-timer.component.scss?ngResource"),modal_body_timer_componentngResource_default=__webpack_require__.n(modal_body_timer_componentngResource);let LgModalBodyTimerComponent=class LgModalBodyTimerComponent{set timer(seconds){"string"==typeof seconds&&(seconds=parseInt(seconds,10)),this._timer=seconds,this.formattedTime=`${Math.floor(this._timer/60)}:${("0"+this._timer%60).slice(-2)}`}static#_=this.propDecorators={timer:[{type:core.Input}]}};LgModalBodyTimerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-modal-body-timer",template:"{{ formattedTime }}\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-modal-body__timer"},standalone:!0,styles:[modal_body_timer_componentngResource_default()]})],LgModalBodyTimerComponent);var button_component=__webpack_require__("./projects/canopy/src/lib/button/button.component.ts"),button_group_component=__webpack_require__("./projects/canopy/src/lib/button/button-group/button-group.component.ts");const template='\n<button lgModalTrigger="modal-story" lg-button type="button" variant="secondary-dark">Open modal</button>\n<lg-modal id="modal-story" closeOnOverlayClick="closeOnOverlayClick">\n  <lg-modal-header [headingLevel]="headingLevel">Lorem ipsum</lg-modal-header>\n  <lg-modal-body>\n    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    <lg-modal-body-timer timer="90"></lg-modal-body-timer>\n  </lg-modal-body>\n  <lg-modal-footer>\n    <lg-button-group>\n      <button lg-button lgMarginBottom="none" variant="primary-dark" type="button">Button</button>\n      <button lg-button lgMarginBottom="none" variant="secondary-dark" type="button">Close</button>\n    </lg-button-group>\n  </lg-modal-footer>\n</lg-modal>\n';let ModalWrapperComponent=class ModalWrapperComponent{constructor(){this.headingLevel=2,this.closeOnOverlayClick=!0}static#_=this.propDecorators={headingLevel:[{type:core.Input}],closeOnOverlayClick:[{type:core.Input}]}};ModalWrapperComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-modal-wrapper",template,standalone:!0,imports:[LgModalComponent,LgModalTriggerDirective,LgModalHeaderComponent,LgModalBodyComponent,LgModalFooterComponent,LgModalBodyTimerComponent,button_component.j,button_group_component.A]})],ModalWrapperComponent);const modal_stories={title:"Components/Modal/Examples",decorators:[(0,dist.moduleMetadata)({imports:[ModalWrapperComponent]})],argTypes:{headingLevel:{options:["1","2","3","4","5","6"],description:"The level of the modal heading.",table:{type:{summary:["1","2","3","4","5","6"]}},control:{type:"select"}},closeOnOverlayClick:{description:"Whether the modal should close when the overlay is clicked.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:{type:"boolean"}},id:{table:{disable:!0}},closed:{table:{disable:!0}},closedOverlayClick:{table:{disable:!0}},closedEscKey:{table:{disable:!0}},open:{table:{disable:!0}},class:{table:{disable:!0}},isOpen:{table:{disable:!0}},ngAfterContentInit:{table:{disable:!0}},ngOnDestroy:{table:{disable:!0}},ngOnInit:{table:{disable:!0}},onKeydown:{table:{disable:!0}},onModalClick:{table:{disable:!0}},onOverlayClick:{table:{disable:!0}},subscription:{table:{disable:!0}},modalBodyComponent:{table:{disable:!0}},modalHeaderComponent:{table:{disable:!0}}}},standardSeparator=(args=>({props:args,template:'<lg-modal-wrapper [headingLevel]="headingLevel" [closeOnOverlayClick]="closeOnOverlayClick"></lg-modal-wrapper>'})).bind({});standardSeparator.storyName="Modal",standardSeparator.args={headingLevel:2,closeOnOverlayClick:!0},standardSeparator.parameters={docs:{source:{code:template}}},standardSeparator.parameters={...standardSeparator.parameters,docs:{...standardSeparator.parameters?.docs,source:{originalSource:'(args: ModalWrapperComponent) => ({\n  props: args,\n  template: \'<lg-modal-wrapper [headingLevel]="headingLevel" [closeOnOverlayClick]="closeOnOverlayClick"></lg-modal-wrapper>\'\n})',...standardSeparator.parameters?.docs?.source}}};const __namedExportsOrder=["standardSeparator"]},"./projects/canopy/src/lib/button/button-group/button-group.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-btn-group {\n  display: flex;\n  flex-flow: row wrap;\n  column-gap: var(--space-sm);\n  row-gap: var(--space-sm);\n}\n.lg-btn-group .lg-btn {\n  margin-bottom: 0;\n  margin-top: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/modal/modal-body-timer/modal-body-timer.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-modal-body__timer {\n  color: var(--modal-body-timer-color);\n  display: block;\n  margin-top: var(--space-md);\n  font-size: var(--text-fs-7-size);\n  font-weight: var(--font-weight-light);\n  line-height: 1;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/modal/modal-body/modal-body.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-modal-body {\n  display: block;\n  padding: var(--space-sm);\n}\n@media (min-width: 48rem) {\n  .lg-modal-body {\n    padding: var(--space-md);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/modal/modal-footer/modal-footer.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-modal-footer {\n  border-top: var(--border-width) solid var(--color-platinum);\n  display: block;\n  padding: var(--space-sm);\n}\n@media (min-width: 48rem) {\n  .lg-modal-footer {\n    padding: var(--space-md);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/modal/modal-header/modal-header.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-modal-header {\n  border-bottom: var(--border-width) solid var(--color-platinum);\n  display: flex;\n  justify-content: space-between;\n  padding: var(--space-sm);\n}\n@media (min-width: 48rem) {\n  .lg-modal-header {\n    padding: var(--space-md);\n  }\n}\n.lg-modal-header h1,\n.lg-modal-header h2,\n.lg-modal-header h3,\n.lg-modal-header h4,\n.lg-modal-header h5,\n.lg-modal-header h6 {\n  margin-bottom: 0;\n  font-size: var(--text-fs-2-size);\n  line-height: var(--text-fs-2-line-height);\n  font-weight: var(--text-fs-2-weight--medium);\n}\n.lg-modal-header__close {\n  background-color: transparent;\n  border: 0;\n  display: flex;\n  padding: 0 0 0 var(--space-xs);\n  font-size: var(--text-fs-3-size);\n  line-height: var(--text-fs-3-line-height);\n  font-weight: var(--text-fs-3-weight);\n}\n.lg-modal-header__close:hover {\n  cursor: pointer;\n}\n.lg-modal-header__close:focus-visible {\n  outline: 0;\n}\n.lg-modal-header__close:focus-visible > .lg-icon {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/modal/modal.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-modal-overlay {\n  background-color: var(--overlay-color);\n  height: 100%;\n  left: 0;\n  overflow: auto;\n  position: fixed;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  z-index: var(--z-index-modal-overlay);\n}\n\n.lg-modal-overlay:before,\n.lg-modal {\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n}\n\n.lg-modal {\n  animation-duration: var(--animation-duration);\n  animation-name: opacity;\n  left: 50%;\n  max-height: 100%;\n  overflow-y: auto;\n  position: fixed;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  z-index: var(--z-index-modal);\n}\n@media (min-width: 48rem) {\n  .lg-modal {\n    left: 50%;\n    max-width: 37rem;\n    position: fixed;\n    transform: translate(-50%, -50%);\n  }\n}\n.lg-modal:focus-visible {\n  outline: 0;\n}\n@keyframes opacity {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);