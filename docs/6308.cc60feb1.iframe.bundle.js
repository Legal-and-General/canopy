"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[6308],{"./projects/canopy/src/lib/forms/hint/hint.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>LgHintComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgHintComponent=class LgHintComponent{constructor(){this.id="lg-hint-"+nextUniqueId++,this.class=!0}};LgHintComponent.propDecorators={id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-hint"]}]},LgHintComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-hint",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,styles:[".lg-hint {\n  display: block;\n  color: var(--color-battleship-grey);\n  margin-top: calc(var(--space-xxs) * -1);\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-regular);\n}"]})],LgHintComponent)},"./projects/canopy/src/lib/forms/input/input-field.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>LgInputFieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),dom_service=__webpack_require__("./projects/canopy/src/lib/utils/dom.service.ts"),hint_component=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts"),label_component=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.ts"),validation_component=__webpack_require__("./projects/canopy/src/lib/forms/validation/validation.component.ts"),button_component=__webpack_require__("./projects/canopy/src/lib/button/button.component.ts"),suffix_directive=__webpack_require__("./projects/canopy/src/lib/suffix/suffix.directive.ts"),prefix_directive=__webpack_require__("./projects/canopy/src/lib/prefix/prefix.directive.ts"),input_directive=__webpack_require__("./projects/canopy/src/lib/forms/input/input.directive.ts");let nextUniqueId=0,LgInputFieldComponent=class LgInputFieldComponent{constructor(domService){this.domService=domService,this._id=nextUniqueId++,this.hasFocus=!1,this.hasHover=!1,this.id="lg-input-"+this._id++,this.showLabel=!0,this.class=!0}set block(block){this._inputElement&&(this._inputElement.block=block)}get focusClass(){return this.hasFocus}get hoverClass(){return this.hasHover}get errorClass(){return this._inputElement.errorClass}get blockClass(){return this._inputElement.block}get disabledClass(){return this._inputElement.control&&"DISABLED"===this._inputElement.control.status}set labelElement(element){this._labelElement=element,this._labelElement.for=this.id}set inputElement(element){element&&(this._inputElement=element,this._inputElement.id=this.id)}get inputElement(){return this._inputElement}set hintElement(element){this.inputElement.ariaDescribedBy=this.domService.toggleIdInStringProperty(this.inputElement.ariaDescribedBy,this._hintElement,element),this._hintElement=element}set errorElement(element){this.inputElement.ariaDescribedBy=this.domService.toggleIdInStringProperty(this.inputElement.ariaDescribedBy,this._validationElement,element),this._validationElement=element}set suffixChildren(elements){elements.forEach((element=>{this.inputElement.ariaDescribedBy=this.domService.toggleIdInStringProperty(this.inputElement.ariaDescribedBy,this._validationElement,element)})),this._suffixChildren=elements}get suffixChildren(){return this._suffixChildren}set prefixChildren(elements){elements.forEach((element=>{this.inputElement.ariaDescribedBy=this.domService.toggleIdInStringProperty(this.inputElement.ariaDescribedBy,this._validationElement,element)})),this._prefixChildren=elements}get prefixChildren(){return this._prefixChildren}ngAfterContentInit(){this.inputElement&&this.buttonElement&&this.inputElement.control.statusChanges.subscribe((status=>{this.buttonElement.disabled="DISABLED"===status}))}ngOnDestroy(){this.disabledStateChanges&&this.disabledStateChanges.unsubscribe()}onFocusIn($event){"INPUT"===$event.target.nodeName&&(this.hasFocus=!0)}onFocusOut(){this.hasFocus=!1}onMouseOver(){this.hasHover=!0}onMouseOut(){this.hasHover=!1}};LgInputFieldComponent.ctorParameters=()=>[{type:dom_service.M}],LgInputFieldComponent.propDecorators={id:[{type:core.Input}],showLabel:[{type:core.Input}],block:[{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-input-field"]}],focusClass:[{type:core.HostBinding,args:["class.lg-input-field--focus"]}],hoverClass:[{type:core.HostBinding,args:["class.lg-input-field--hover"]}],errorClass:[{type:core.HostBinding,args:["class.lg-input-field--error"]}],blockClass:[{type:core.HostBinding,args:["class.lg-input-field--block"]}],disabledClass:[{type:core.HostBinding,args:["class.lg-input-field--disabled"]}],labelElement:[{type:core.ViewChild,args:[label_component.m,{static:!0}]}],inputElement:[{type:core.ContentChild,args:[input_directive.K,{static:!0}]}],hintElement:[{type:core.ContentChild,args:[hint_component.q]}],errorElement:[{type:core.ContentChild,args:[validation_component.H]}],buttonElement:[{type:core.ContentChild,args:[button_component.$]}],suffixChildren:[{type:core.ContentChildren,args:[suffix_directive.Y]}],prefixChildren:[{type:core.ContentChildren,args:[prefix_directive.b]}]},LgInputFieldComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-input-field",template:'<label lg-label [class.lg-visually-hidden]="!showLabel">\n  <ng-content></ng-content>\n</label>\n<ng-content select="lg-hint"></ng-content>\n<div\n  class="lg-input-field__inputs"\n  (focusin)="onFocusIn($event)"\n  (focusout)="onFocusOut()"\n  (mouseenter)="onMouseOver()"\n  (mouseleave)="onMouseOut()"\n>\n  <div class="lg-input-field__prefix" *ngIf="prefixChildren.length">\n    <ng-content select="[lgPrefix]"></ng-content>\n  </div>\n\n  <ng-content select="[lgInput]"></ng-content>\n\n  <div class="lg-input-field__suffix" *ngIf="suffixChildren.length">\n    <ng-content select="[lgSuffix]"></ng-content>\n  </div>\n</div>\n<ng-content select="lg-validation"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n:root {\n  --suffix-margin: var(--space-sm);\n  --suffix-button-margin: 0.3125rem;\n}\n.lg-input-field {\n  display: block;\n  margin-bottom: var(--component-margin);\n}\n.lg-input-field__prefix, .lg-input-field__suffix {\n  display: flex;\n  font-weight: var(--font-weight-bold);\n  align-items: center;\n}\n.lg-input-field__prefix .lg-icon, .lg-input-field__suffix .lg-icon {\n  height: var(--space-md);\n  width: var(--space-md);\n}\n.lg-input-field--focus .lg-input-field__prefix + .lg-input {\n  padding-left: var(--space-sm);\n}\n.lg-input-field__prefix {\n  margin-left: var(--suffix-margin);\n}\n.lg-input-field__suffix {\n  margin-right: var(--suffix-margin);\n}\n.lg-input-field__suffix > .lg-btn {\n  margin-bottom: 0;\n  margin-top: 0;\n  margin-right: var(--suffix-button-margin);\n}\n.lg-input-field__suffix > .lg-btn:last-child {\n  margin-right: calc(-1 * var(--suffix-margin) + var(--suffix-button-margin));\n}\n.lg-input-field__inputs {\n  display: inline-flex;\n  align-items: center;\n  background-color: var(--color-white);\n  border: solid var(--border-width) var(--border-color);\n  border-radius: var(--border-radius-sm);\n}\n.lg-input-field--hover .lg-input-field__inputs {\n  border-color: var(--border-hover-color);\n}\n.lg-input-field--error .lg-input-field__inputs {\n  border-color: var(--form-error-border-color);\n}\n.lg-input-field--error.lg-input-field--hover.lg-input-field--focus .lg-input-field__inputs {\n  color: inherit;\n}\n.lg-input-field--disabled .lg-input-field__inputs {\n  color: var(--disabled-color);\n  background-color: var(--background-disabled-color);\n  border-color: var(--border-disabled-color);\n}\n.lg-input-field--focus .lg-input-field__inputs {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-input-field--block .lg-input-field__inputs {\n  display: flex;\n}\n@media (min-width: 48rem) {\n  .lg-input-field--block .lg-input-field__inputs {\n    display: inline-flex;\n  }\n}\n.lg-input {\n  font-size: var(--text-base-size);\n  font-weight: var(--font-weight-regular);\n  font-family: var(--font-family);\n  line-height: var(--text-base-line-height);\n  color: var(--color-text);\n  flex: 1 0 auto;\n  display: block;\n  border: none;\n  line-height: var(--input-line-height);\n  margin: 0;\n  padding: var(--input-vertical-padding) var(--space-sm);\n  outline: 0;\n  max-width: 100%;\n}\n.lg-input[type=number]::-webkit-inner-spin-button, .lg-input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.lg-input:-webkit-autofill {\n  -webkit-background-clip: text;\n}\n.lg-input--error {\n  color: var(--form-error-color);\n}"]})],LgInputFieldComponent)},"./projects/canopy/src/lib/forms/input/input.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>LgInputDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),_validation_error_state_matcher__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/forms/validation/error-state-matcher.ts");let nextUniqueId=0,LgInputDirective=class LgInputDirective{constructor(control,errorState,controlContainer){this.control=control,this.errorState=errorState,this.controlContainer=controlContainer,this.uniqueId=nextUniqueId++,this.class=!0,this.block=!1,this.name=`lg-input-${this.uniqueId}`,this.id=`lg-input-${this.uniqueId}`,this.disabled=!1,this.ariaDescribedBy=null}get blockClass(){return this.block}get errorClass(){return this.errorState.isControlInvalid(this.control,this.controlContainer)}};LgInputDirective.ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_0__.a5,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Self},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional}]},{type:_validation_error_state_matcher__WEBPACK_IMPORTED_MODULE_2__.R},{type:_angular_forms__WEBPACK_IMPORTED_MODULE_0__.sg,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Host},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf}]}],LgInputDirective.propDecorators={class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.lg-input"]}],blockClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.lg-input--block"]}],errorClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.aria-invalid"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.lg-input--error"]}],block:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["name"]}],id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["id"]}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["disabled"]}],ariaDescribedBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.aria-describedby"]}]},LgInputDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({selector:"[lgInput]"})],LgInputDirective)},"./projects/canopy/src/lib/forms/input/input.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>LgInputModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),label_module=__webpack_require__("./projects/canopy/src/lib/forms/label/label.module.ts"),prefix_directive=__webpack_require__("./projects/canopy/src/lib/prefix/prefix.directive.ts");let LgPrefixModule=class LgPrefixModule{};LgPrefixModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[prefix_directive.b],exports:[prefix_directive.b]})],LgPrefixModule);var suffix_module=__webpack_require__("./projects/canopy/src/lib/suffix/suffix.module.ts"),input_field_component=__webpack_require__("./projects/canopy/src/lib/forms/input/input-field.component.ts"),input_directive=__webpack_require__("./projects/canopy/src/lib/forms/input/input.directive.ts");let LgInputModule=class LgInputModule{};LgInputModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[label_module.j,common.CommonModule,LgPrefixModule,suffix_module.k],declarations:[input_directive.K,input_field_component.z],exports:[input_directive.K,input_field_component.z,LgPrefixModule,suffix_module.k]})],LgInputModule)},"./projects/canopy/src/lib/forms/label/label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>LgLabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgLabelComponent=class LgLabelComponent{constructor(){this.class=!0,this.id="lg-label-"+nextUniqueId++}};LgLabelComponent.propDecorators={class:[{type:core.Input},{type:core.HostBinding,args:["class.lg-label"]}],id:[{type:core.Input},{type:core.HostBinding,args:["attr.id"]}],for:[{type:core.Input},{type:core.HostBinding,args:["attr.for"]}]},LgLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"[lg-label]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,styles:[".lg-label {\n  display: block;\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-bold);\n  width: 100%;\n}"]})],LgLabelComponent)},"./projects/canopy/src/lib/forms/label/label.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>LgLabelModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_label_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.ts");let LgLabelModule=class LgLabelModule{};LgLabelModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({declarations:[_label_component__WEBPACK_IMPORTED_MODULE_2__.m],exports:[_label_component__WEBPACK_IMPORTED_MODULE_2__.m]})],LgLabelModule)},"./projects/canopy/src/lib/forms/validation/error-state-matcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>LgErrorStateMatcher});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgErrorStateMatcher=class LgErrorStateMatcher{isControlInvalid(control,controlContainer){return!!(control&&control.invalid&&control.touched&&control.dirty||controlContainer&&controlContainer.submitted&&control.invalid)}};LgErrorStateMatcher=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgErrorStateMatcher)},"./projects/canopy/src/lib/forms/validation/validation.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>LgValidationComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgValidationComponent=class LgValidationComponent{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.showIcon=!0,this.id="lg-validation-"+nextUniqueId++,this.class=!0,this.variant="error"}set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-variant--${this._variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-variant--${variant}`),this._variant=variant}get variant(){return this._variant}};LgValidationComponent.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgValidationComponent.propDecorators={showIcon:[{type:core.Input}],variant:[{type:core.Input}],id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-validation"]}]},LgValidationComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-validation",template:'<div\n  *ngIf="showIcon && variant !== \'generic\'"\n  [ngSwitch]="variant"\n  class="lg-validation__icon"\n>\n  <lg-icon *ngSwitchCase="\'error\'" name="crossmark-spot-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'info\'" name="information-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'warning\'" name="warning-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'success\'" name="checkmark-spot-fill"></lg-icon>\n</div>\n\n<div>\n  <ng-content></ng-content>\n</div>\n',encapsulation:core.ViewEncapsulation.None,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-validation {\n  display: flex;\n  align-items: flex-start;\n  padding: var(--space-xs);\n  margin-top: var(--space-xxs);\n}\n.lg-validation__icon {\n  margin-right: var(--space-xs);\n}"]})],LgValidationComponent)},"./projects/canopy/src/lib/prefix/prefix.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>LgPrefixDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgPrefixDirective=class LgPrefixDirective{constructor(){this.id="lg-prefix-"+nextUniqueId++}};LgPrefixDirective.propDecorators={id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.id"]}]},LgPrefixDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgPrefix]"})],LgPrefixDirective)},"./projects/canopy/src/lib/suffix/suffix.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>LgSuffixDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgSuffixDirective=class LgSuffixDirective{constructor(){this.id="lg-suffix-"+nextUniqueId++}};LgSuffixDirective.propDecorators={id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["attr.id"]}]},LgSuffixDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgSuffix]"})],LgSuffixDirective)},"./projects/canopy/src/lib/suffix/suffix.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>LgSuffixModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_suffix_directive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/suffix/suffix.directive.ts");let LgSuffixModule=class LgSuffixModule{};LgSuffixModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({declarations:[_suffix_directive__WEBPACK_IMPORTED_MODULE_2__.Y],exports:[_suffix_directive__WEBPACK_IMPORTED_MODULE_2__.Y]})],LgSuffixModule)},"./projects/canopy/src/lib/utils/dom.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>LgDomService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgDomService=class LgDomService{toggleIdInStringProperty(property="",oldElement,newElement){return newElement||null!==property?(null===property&&(property=""),oldElement&&oldElement.id&&(property=property.replace(oldElement.id,"")),newElement&&newElement.id&&(property=`${property} ${newElement.id}`),""===(property=property.trim())&&(property=null),property):property}};LgDomService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgDomService)}}]);