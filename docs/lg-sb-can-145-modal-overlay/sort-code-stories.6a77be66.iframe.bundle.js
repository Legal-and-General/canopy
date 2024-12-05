"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[7015],{"./projects/canopy/src/lib/forms/sort-code/sort-code.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>LgSortCodeDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let LgSortCodeDirective=class LgSortCodeDirective{constructor(ngControl){this.ngControl=ngControl,this.placeholder="00-00-00",this.required=!0,this.inputmode="numeric",this.maxlength="8",this.size="7"}onBlur(value){this.ngControl.valid&&this.ngControl.control.setValue(this.format(value),{emitEvent:!1})}ngOnInit(){const validators=[_angular_forms__WEBPACK_IMPORTED_MODULE_0__.k0.required,_angular_forms__WEBPACK_IMPORTED_MODULE_0__.k0.pattern(/^(?:\d{6}|\d\d-\d\d-\d\d|\d\d\s\d\d\s\d\d)$/)];this.ngControl.control.validator&&validators.push(this.ngControl.control.validator),this.ngControl.control.setValidators(validators)}format(value){return value.replace(/-|\s/g,"").match(/.{1,2}/g).join("-")}static#_=this.ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_0__.vO}];static#_2=this.propDecorators={placeholder:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["placeholder"]}],required:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["required"]}],inputmode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.inputmode"]}],maxlength:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.maxlength"]}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.size"]}],onBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,args:["focusout",["$event.target.value"]]}]}};LgSortCodeDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({selector:"[lgSortCode]",standalone:!0})],LgSortCodeDirective)},"./projects/canopy/src/lib/forms/sort-code/docs/sort-code.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,sortCode:()=>sortCode});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_sort_code_directive__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/canopy/src/lib/forms/sort-code/sort-code.directive.ts"),_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/forms/input/input-field.component.ts"),_input__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/forms/input/input.directive.ts"),_hint__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts");const template='\n<lg-input-field>\n  {{ label }}\n  <lg-hint *ngIf="hint">{{ hint }}</lg-hint>\n  <input lgInput lgSortCode formControlName="sortCode" />\n</lg-input-field>\n';let ReactiveFormComponent=class ReactiveFormComponent{set disabled(disabled){disabled?this.form.controls.sortCode.disable():this.form.controls.sortCode.enable()}get disabled(){return this.form.controls.sortCode.disabled}constructor(fb){this.fb=fb,this.inputChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.form=this.fb.group({sortCode:[""]}),this.form.valueChanges.subscribe((val=>this.inputChange.emit(val)))}static#_=this.ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ze}];static#_2=this.propDecorators={hint:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],inputChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]}};ReactiveFormComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"lg-reactive-form",template:` <form [formGroup]="form">${template}</form> `,standalone:!0,imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_2__.X1,_input__WEBPACK_IMPORTED_MODULE_4__.v,_input__WEBPACK_IMPORTED_MODULE_5__.d,_hint__WEBPACK_IMPORTED_MODULE_6__.m,_sort_code_directive__WEBPACK_IMPORTED_MODULE_7__.M,_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf]})],ReactiveFormComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Patterns/Sort code/Examples",component:_sort_code_directive__WEBPACK_IMPORTED_MODULE_7__.M,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[ReactiveFormComponent]})],argTypes:{inputChange:{action:"Input change",table:{disable:!0}},maxlength:{table:{disable:!0}},placeholder:{table:{disable:!0}},required:{table:{disable:!0}},size:{table:{disable:!0}},ngOnInit:{table:{disable:!0}},onBlur:{table:{disable:!0}}}},sortCode=(args=>({props:args,template:'\n  <lg-reactive-form\n    (inputChange)="inputChange($event)"\n    [disabled]="disabled"\n    [hint]="hint"\n    [label]="label"\n  ></lg-reactive-form>\n  '})).bind({});sortCode.storyName="Sort code",sortCode.args={label:"Sort code",hint:"Must be 6 digits long",disabled:!1},sortCode.parameters={docs:{source:{code:template}}},sortCode.parameters={...sortCode.parameters,docs:{...sortCode.parameters?.docs,source:{originalSource:'(args: LgSortCodeDirective) => ({\n  props: args,\n  template: `\n  <lg-reactive-form\n    (inputChange)="inputChange($event)"\n    [disabled]="disabled"\n    [hint]="hint"\n    [label]="label"\n  ></lg-reactive-form>\n  `\n})',...sortCode.parameters?.docs?.source}}};const __namedExportsOrder=["sortCode"]}}]);