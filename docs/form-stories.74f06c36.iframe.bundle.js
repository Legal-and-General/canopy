(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[12801],{"./projects/canopy/src/lib/forms/date/date-field.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>LgDateFieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var date_field_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/date/date-field.component.scss?ngResource"),date_field_componentngResource_default=__webpack_require__.n(date_field_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),isValid=__webpack_require__("./node_modules/date-fns/esm/isValid/index.js"),parseISO=__webpack_require__("./node_modules/date-fns/esm/parseISO/index.js"),dom_service=__webpack_require__("./projects/canopy/src/lib/utils/dom.service.ts"),hint_component=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts"),error_state_matcher=__webpack_require__("./projects/canopy/src/lib/forms/validation/error-state-matcher.ts"),validation_component=__webpack_require__("./projects/canopy/src/lib/forms/validation/validation.component.ts");function omit(obj,key){if(!obj)return obj;const{[key]:_,...newObj}=obj;return 0===Object.keys(newObj).length?null:newObj}var input_directive=__webpack_require__("./projects/canopy/src/lib/forms/input/input.directive.ts"),margin_directive=__webpack_require__("./projects/canopy/src/lib/spacing/margin/margin.directive.ts"),input_field_component=__webpack_require__("./projects/canopy/src/lib/forms/input/input-field.component.ts"),label_component=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.ts"),focus_directive=__webpack_require__("./projects/canopy/src/lib/focus/focus.directive.ts");let nextUniqueId=0;const labelFieldMap={date:"day",month:"month",year:"year"};let LgDateFieldComponent=class LgDateFieldComponent{set hintElement(element){this.ariaDescribedBy=this.domService.toggleIdInStringProperty(this.ariaDescribedBy,this._hintElement,element),this._hintElement=element}set errorContentElement(element){this.ariaDescribedBy=this.domService.toggleIdInStringProperty(this.ariaDescribedBy,this._validationElement,element),this._validationElement=element}constructor(domService,errorState,ngControl,parentFormGroupDirective){this.domService=domService,this.errorState=errorState,this.ngControl=ngControl,this.parentFormGroupDirective=parentFormGroupDirective,this.uniqueId=nextUniqueId++,this.subscriptions=[],this.disabled=!1,this.dateId="lg-input-date-"+this.uniqueId++,this.monthId="lg-input-month-"+this.uniqueId++,this.yearId="lg-input-year-"+this.uniqueId++,this.class=!0,null!=this.ngControl&&(this.ngControl.valueAccessor=this),this.date=new fesm2022_forms.hs(null,[fesm2022_forms.k0.required,fesm2022_forms.k0.pattern(/^\d{1,2}$/),fesm2022_forms.k0.min(1),fesm2022_forms.k0.max(31)]),this.month=new fesm2022_forms.hs(null,[fesm2022_forms.k0.required,fesm2022_forms.k0.pattern(/^\d{1,2}$/),fesm2022_forms.k0.min(1),fesm2022_forms.k0.max(12)]),this.year=new fesm2022_forms.hs(null,[fesm2022_forms.k0.required,fesm2022_forms.k0.pattern(/^\d\d\d\d$/)]),this.dateFormGroup=new fesm2022_forms.J3({date:this.date,month:this.month,year:this.year},{updateOn:"blur"})}ngOnInit(){const validators=[this.validate.bind(this)];this.ngControl&&this.ngControl.control&&(this.ngControl.control.validator&&validators.push(this.ngControl.control.validator),this.ngControl.control.setValidators(validators),this.ngControl.control.updateValueAndValidity()),this.subscriptions.push(this.dateFormGroup.valueChanges.subscribe((date=>{const day=date.date?("0"+date.date).slice(-2):"",month=date.month?("0"+date.month).slice(-2):"",year=date.year?date.year:"",formatedDate=day||month||year?`${year}-${month}-${day}`:"";this.onChange(formatedDate)})),this.parentFormGroupDirective.ngSubmit.pipe((0,filter.p)((({type})=>"submit"===type))).subscribe((event=>{this.formGroupDirective.onSubmit(event),this.ngControl.control.updateValueAndValidity()})))}isControlInvalid(control,form){return this.errorState.isControlInvalid(control,form)}ngOnDestroy(){this.subscriptions.forEach((subscription=>subscription.unsubscribe()))}writeValue(dateString){if(!dateString)return;const[year,month,date]=dateString.split(/-/);this.dateFormGroup.setValue({date,month,year},{emitEvent:!1})}validate(control){if(this.date.setErrors(omit(this.date.errors,"invalidDate")),this.month.setErrors(omit(this.month.errors,"invalidDate")),this.year.setErrors(omit(this.year.errors,"invalidDate")),!this.date.value&&!this.month.value&&!this.year.value)return null;const invalidFields=[];Object.keys(this.dateFormGroup.controls).forEach((fieldName=>{this.dateFormGroup.controls[fieldName].invalid&&(this.dateFormGroup.controls[fieldName].dirty||this.formGroupDirective&&this.formGroupDirective.submitted)&&invalidFields.push(fieldName)}));const invalidFieldNames=[],requiredFieldNames=[];invalidFields.forEach((fieldName=>{this.dateFormGroup.controls[fieldName].hasError("required")?requiredFieldNames.push(labelFieldMap[fieldName]):invalidFieldNames.push(labelFieldMap[fieldName])}));const error={};if(invalidFieldNames.length)switch(invalidFieldNames.length){case 1:error.invalidField=invalidFieldNames[0];break;case 2:error.invalidFields=invalidFieldNames;break;default:error.invalidDate=!0}else if(requiredFieldNames.length)switch(requiredFieldNames.length){case 1:error.requiredField=requiredFieldNames[0];break;case 2:error.requiredFields=requiredFieldNames}else(this.date.valid&&this.month.valid&&this.year.valid||this.formGroupDirective&&this.formGroupDirective.submitted)&&!(0,isValid.A)((0,parseISO.A)(control.value))&&(this.date.setErrors(error),this.month.setErrors(error),this.year.setErrors(error),error.invalidDate=!0);return Object.keys(error).length?error:null}onBlur(){this.dateFormGroup.touched&&this.onTouched()}onTouched(_){}onChange(date){this.value=date}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouched=fn}setDisabledState(isDisabled){isDisabled?(this.date.disable(),this.month.disable(),this.year.disable()):(this.date.enable(),this.month.enable(),this.year.enable())}static#_=this.ctorParameters=()=>[{type:dom_service.J},{type:error_state_matcher.B},{type:fesm2022_forms.vO,decorators:[{type:core.Self},{type:core.Optional}]},{type:fesm2022_forms.j4,decorators:[{type:core.Optional},{type:core.SkipSelf}]}];static#_2=this.propDecorators={value:[{type:core.Input}],disabled:[{type:core.Input}],focus:[{type:core.Input}],dateId:[{type:core.Input}],monthId:[{type:core.Input}],yearId:[{type:core.Input}],ariaDescribedBy:[{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-date-field"]}],hintElement:[{type:core.ContentChild,args:[hint_component.m]}],errorContentElement:[{type:core.ContentChild,args:[validation_component.Q]}],formGroupDirective:[{type:core.ViewChild,args:["dateFormDirective"]}]}};LgDateFieldComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-date-field",template:'<fieldset\n  [attr.aria-describedby]="ariaDescribedBy || null"\n  [attr.tabindex]="focus ? \'-1\' : null"\n  [lgFocus]="focus"\n>\n  <legend lg-label>\n    <ng-content></ng-content>\n  </legend>\n  <ng-content select="lg-hint"></ng-content>\n  <div\n    class="lg-date-field__fields"\n    [formGroup]="dateFormGroup"\n    #dateFormDirective="ngForm"\n  >\n    <div class="lg-date-field__date">\n      <lg-input-field lgMarginBottom="none">\n        Day\n        <input\n          lgInput\n          (blur)="onBlur()"\n          (input)="date.setValue($event.target.value)"\n          formControlName="date"\n          inputmode="numeric"\n          maxlength="2"\n          placeholder="DD"\n          size="2"\n          type="text"\n        />\n      </lg-input-field>\n    </div>\n\n    <div class="lg-date-field__month">\n      <lg-input-field lgMarginBottom="none">\n        Month\n        <input\n          lgInput\n          (blur)="onBlur()"\n          (input)="month.setValue($event.target.value)"\n          formControlName="month"\n          inputmode="numeric"\n          maxlength="2"\n          placeholder="MM"\n          size="3"\n          type="text"\n        />\n      </lg-input-field>\n    </div>\n\n    <div class="lg-date-field__year">\n      <lg-input-field lgMarginBottom="none">\n        Year\n        <input\n          lgInput\n          (blur)="onBlur()"\n          (input)="year.setValue($event.target.value)"\n          formControlName="year"\n          inputmode="numeric"\n          maxlength="4"\n          placeholder="YYYY"\n          size="4"\n          type="text"\n        />\n      </lg-input-field>\n    </div>\n  </div>\n\n  <ng-content select="lg-validation"></ng-content>\n</fieldset>\n',encapsulation:core.ViewEncapsulation.None,standalone:!0,imports:[focus_directive.t,label_component.d,fesm2022_forms.X1,input_field_component.v,margin_directive.X,input_directive.d],styles:[date_field_componentngResource_default()]})],LgDateFieldComponent)},"./projects/canopy/src/lib/forms/select/select-field.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>LgSelectFieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var select_field_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/select/select-field.component.scss?ngResource"),select_field_componentngResource_default=__webpack_require__.n(select_field_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),dom_service=__webpack_require__("./projects/canopy/src/lib/utils/dom.service.ts"),hint_component=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts"),label_component=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.ts"),error_state_matcher=__webpack_require__("./projects/canopy/src/lib/forms/validation/error-state-matcher.ts"),validation_component=__webpack_require__("./projects/canopy/src/lib/forms/validation/validation.component.ts"),icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts"),select_directive=__webpack_require__("./projects/canopy/src/lib/forms/select/select.directive.ts");let nextUniqueId=0,LgSelectFieldComponent=class LgSelectFieldComponent{get errorClass(){return this.errorState.isControlInvalid(this._selectElement.control,this._selectElement.controlContainer)}set block(block){this._selectElement&&(this._selectElement.block=block),this._block=block}get block(){return this._block}set labelElement(element){this._labelElement=element,this._labelElement.for=this.id}set selectElement(element){this._selectElement=element,this._selectElement.id=this.id}set hintElement(element){this._selectElement.ariaDescribedBy=this.domService.toggleIdInStringProperty(this._selectElement.ariaDescribedBy,this._hintElement,element),this._hintElement=element}set errorElement(element){this._selectElement.ariaDescribedBy=this.domService.toggleIdInStringProperty(this._selectElement.ariaDescribedBy,this._validationElement,element),this._validationElement=element}constructor(errorState,domService){this.errorState=errorState,this.domService=domService,this.id="lg-select-"+nextUniqueId++,this.class=!0,this._block=!1}static#_=this.ctorParameters=()=>[{type:error_state_matcher.B},{type:dom_service.J}];static#_2=this.propDecorators={id:[{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-select-field"]}],errorClass:[{type:core.HostBinding,args:["class.lg-select-field--error"]}],block:[{type:core.Input}],labelElement:[{type:core.ViewChild,args:[label_component.d,{static:!0}]}],selectElement:[{type:core.ContentChild,args:[select_directive.P,{static:!0}]}],hintElement:[{type:core.ContentChild,args:[hint_component.m]}],errorElement:[{type:core.ContentChild,args:[validation_component.Q]}]}};LgSelectFieldComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-select-field",template:'<label lg-label>\n  <ng-content></ng-content>\n</label>\n<ng-content select="lg-hint"></ng-content>\n<div class="lg-select-field__outer">\n  <div class="lg-select-field__inner" [class.lg-select-field__inner--block]="block">\n    <ng-content select="[lgSelect]"></ng-content>\n    <lg-icon class="lg-select-field__icon" name="chevron-down"></lg-icon>\n  </div>\n</div>\n<ng-content select="lg-validation"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,standalone:!0,imports:[label_component.d,icon_component.A],styles:[select_field_componentngResource_default()]})],LgSelectFieldComponent)},"./projects/canopy/src/lib/forms/select/select.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>LgSelectDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_validation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/forms/validation/error-state-matcher.ts");let nextUniqueId=0,LgSelectDirective=class LgSelectDirective{get blockClass(){return this.block}get errorClass(){return this.errorState.isControlInvalid(this.control,this.controlContainer)}constructor(control,errorState,controlContainer){this.control=control,this.errorState=errorState,this.controlContainer=controlContainer,this.uniqueId=nextUniqueId++,this.class=!0,this.block=!1,this.name=`lg-select-${this.uniqueId}`,this.id=`lg-select-${this.uniqueId}`,this.ariaDescribedBy=null}static#_=this.ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_0__.vO,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Self},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional}]},{type:_validation__WEBPACK_IMPORTED_MODULE_2__.B},{type:_angular_forms__WEBPACK_IMPORTED_MODULE_0__.j4,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Host},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf}]}];static#_2=this.propDecorators={class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.lg-select"]}],blockClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.lg-select--block"]}],errorClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.aria-invalid"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["class.lg-select--error"]}],block:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["name"]}],id:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["id"]}],ariaDescribedBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input},{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.aria-describedby"]}]}};LgSelectDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({selector:"[lgSelect]",standalone:!0})],LgSelectDirective)},"./projects/canopy/src/lib/forms/sort-code/sort-code.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>LgSortCodeDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let LgSortCodeDirective=class LgSortCodeDirective{constructor(ngControl){this.ngControl=ngControl,this.placeholder="00-00-00",this.required=!0,this.inputmode="numeric",this.maxlength="8",this.size="7"}onBlur(value){this.ngControl.valid&&this.ngControl.control.setValue(this.format(value),{emitEvent:!1})}ngOnInit(){const validators=[_angular_forms__WEBPACK_IMPORTED_MODULE_0__.k0.required,_angular_forms__WEBPACK_IMPORTED_MODULE_0__.k0.pattern(/^(?:\d{6}|\d\d-\d\d-\d\d|\d\d\s\d\d\s\d\d)$/)];this.ngControl.control.validator&&validators.push(this.ngControl.control.validator),this.ngControl.control.setValidators(validators)}format(value){return value.replace(/-|\s/g,"").match(/.{1,2}/g).join("-")}static#_=this.ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_0__.vO}];static#_2=this.propDecorators={placeholder:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["placeholder"]}],required:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["required"]}],inputmode:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.inputmode"]}],maxlength:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.maxlength"]}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,args:["attr.size"]}],onBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,args:["focusout",["$event.target.value"]]}]}};LgSortCodeDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({selector:"[lgSortCode]",standalone:!0})],LgSortCodeDirective)},"./projects/canopy/src/lib/forms/validation/docs/form.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>form_stories,formValidation:()=>formValidation});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),date_field_component=__webpack_require__("./projects/canopy/src/lib/forms/date/date-field.component.ts"),parseISO=__webpack_require__("./node_modules/date-fns/esm/parseISO/index.js"),isValid=__webpack_require__("./node_modules/date-fns/esm/isValid/index.js"),toDate=__webpack_require__("./node_modules/date-fns/esm/toDate/index.js"),requiredArgs=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");function pastDateValidator(){return control=>{const date=(0,parseISO.A)(control.value);return!(0,isValid.A)(date)||function isPast(dirtyDate){return(0,requiredArgs.A)(1,arguments),(0,toDate.A)(dirtyDate).getTime()<Date.now()}(date)?null:{pastDate:!0}}}var error_state_matcher=__webpack_require__("./projects/canopy/src/lib/forms/validation/error-state-matcher.ts"),input_field_component=__webpack_require__("./projects/canopy/src/lib/forms/input/input-field.component.ts"),input_directive=__webpack_require__("./projects/canopy/src/lib/forms/input/input.directive.ts"),select_field_component=__webpack_require__("./projects/canopy/src/lib/forms/select/select-field.component.ts"),select_directive=__webpack_require__("./projects/canopy/src/lib/forms/select/select.directive.ts"),radio_group_component=__webpack_require__("./projects/canopy/src/lib/forms/radio/radio-group.component.ts"),radio_button_component=__webpack_require__("./projects/canopy/src/lib/forms/radio/radio-button.component.ts"),checkbox_group_component=__webpack_require__("./projects/canopy/src/lib/forms/checkbox-group/checkbox-group.component.ts"),toggle_component=__webpack_require__("./projects/canopy/src/lib/forms/toggle/toggle.component.ts"),validation_component=__webpack_require__("./projects/canopy/src/lib/forms/validation/validation.component.ts"),hint_component=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts"),sort_code_directive=__webpack_require__("./projects/canopy/src/lib/forms/sort-code/sort-code.directive.ts"),button_component=__webpack_require__("./projects/canopy/src/lib/button/button.component.ts");let FormGroupChildComponent=class FormGroupChildComponent{constructor(errorState,formGroupDirective){this.errorState=errorState,this.formGroupDirective=formGroupDirective}get date(){return this.parentForm?.get("innerChildFormGroup.date")}isControlInvalid(control,form){return this.errorState.isControlInvalid(control,form)}ngOnInit(){this.parentForm=this.formGroupDirective.control}static#_=this.ctorParameters=()=>[{type:error_state_matcher.B},{type:fesm2022_forms.j4}]};FormGroupChildComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-form-group-child",template:'\n    <div formGroupName="innerChildFormGroup">\n      <lg-date-field formControlName="date">\n        Inner Date Field\n        <lg-validation *ngIf="isControlInvalid(date, formGroupDirective)">\n          <ng-container *ngIf="date.hasError(\'required\')">\n            Enter a date for the inner date field\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'invalidField\')">\n            Enter a valid {{ date.errors.invalidField }}\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'invalidFields\')">\n            Enter a valid {{ date.errors.invalidFields[0] }} and\n            {{ date.errors.invalidFields[1] }}\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'requiredField\')">\n            Date must include a {{ date.errors.requiredField }}\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'requiredFields\')">\n            Date must include a {{ date.errors.requiredFields[0] }} and\n            {{ date.errors.requiredFields[1] }}\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'invalidDate\')">\n            Enter a valid date of birth\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'pastDate\')">\n            Date must be in the past\n          </ng-container>\n        </lg-validation>\n      </lg-date-field>\n    </div>\n  ',viewProviders:[{provide:fesm2022_forms.ZU,useExisting:fesm2022_forms.j4}],standalone:!0,imports:[date_field_component.N,fesm2022_forms.X1,validation_component.Q,common.NgIf]})],FormGroupChildComponent);let ReactiveFormComponent=class ReactiveFormComponent{get sortCode(){return this.form.get("sortCode")}get date(){return this.form.get("date")}get text(){return this.form.get("text")}get select(){return this.form.get("select")}get radio(){return this.form.get("radio")}get segment(){return this.form.get("segment")}get colors(){return this.form.get("colors")}get checkbox(){return this.form.get("checkbox")}get switch(){return this.form.get("switch")}constructor(fb,errorState,el){this.fb=fb,this.errorState=errorState,this.el=el,this.inputChange=new core.EventEmitter,this.formSubmit=new core.EventEmitter,this.form=this.fb.group({text:["",[fesm2022_forms.k0.required,fesm2022_forms.k0.minLength(4),control=>control.value&&"invalid"===control.value.toLowerCase()?{invalid:!0}:null]],select:["",[fesm2022_forms.k0.required,control=>control.value&&"invalid"===control.value.toLowerCase()?{invalid:!0}:null]],radio:["",[fesm2022_forms.k0.required,control=>control.value&&"invalid"===control.value.toLowerCase()?{invalid:!0}:null]],segment:["",[fesm2022_forms.k0.required,control=>control.value&&"invalid"===control.value.toLowerCase()?{invalid:!0}:null]],colors:this.fb.control([],[fesm2022_forms.k0.required]),checkbox:["",[fesm2022_forms.k0.requiredTrue]],switch:["",[fesm2022_forms.k0.requiredTrue]],sortCode:["",[fesm2022_forms.k0.required]],date:["",[fesm2022_forms.k0.required,pastDateValidator()]],innerChildFormGroup:this.fb.group({date:["",[fesm2022_forms.k0.required,pastDateValidator()]]})})}onSubmit(event){const invalidControl=this.el.nativeElement.querySelector(".ng-invalid");invalidControl&&invalidControl.focus(),this.formSubmit.emit(event)}isControlInvalid(control,form){return this.errorState.isControlInvalid(control,form)}static#_=this.ctorParameters=()=>[{type:fesm2022_forms.ze},{type:error_state_matcher.B},{type:core.ElementRef}];static#_2=this.propDecorators={inputChange:[{type:core.Output}],formSubmit:[{type:core.Output}]}};ReactiveFormComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-validation-form",template:'\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form)" #validationForm="ngForm">\n      <h2>Validation test form</h2>\n\n      <p>\n        This is a test form to ensure validation works and that the fields have the\n        correct aria controls.\n      </p>\n      <p>\n        All fields are required. selecting or typing the word \'invalid\' into a field will\n        trigger inline validation. All validation rules are also ran on submission of the\n        form.\n      </p>\n\n      <lg-input-field>\n        Text\n        <input lgInput formControlName="text" />\n        <lg-hint>This is a standard input field</lg-hint>\n        <lg-validation\n          *ngIf="isControlInvalid(text, validationForm) && text.hasError(\'required\')"\n        >\n          Text is a required field\n        </lg-validation>\n        <lg-validation\n          *ngIf="isControlInvalid(text, validationForm) && text.hasError(\'minlength\')"\n        >\n          Text should be at least 4 characters\n        </lg-validation>\n        <lg-validation\n          *ngIf="isControlInvalid(text, validationForm) && text.hasError(\'invalid\')"\n        >\n          Please enter a valid value\n        </lg-validation>\n      </lg-input-field>\n\n      <lg-select-field>\n        Select field\n        <lg-hint>This is a standard single option select field</lg-hint>\n        <select lgSelect formControlName="select">\n          <option value="blue">Blue</option>\n          <option value="red">Red</option>\n          <option value="green">Green</option>\n          <option value="yellow">Yellow</option>\n          <option value="invalid">Invalid</option>\n        </select>\n        <lg-validation\n          *ngIf="isControlInvalid(select, validationForm) && select.hasError(\'invalid\')"\n        >\n          Please select a valid option\n        </lg-validation>\n        <lg-validation\n          *ngIf="isControlInvalid(select, validationForm) && select.hasError(\'required\')"\n        >\n          Select is a required field\n        </lg-validation>\n      </lg-select-field>\n\n      <lg-radio-group formControlName="radio">\n        Radio option\n        <lg-hint>This is a standard radio group</lg-hint>\n        <lg-radio-button value="yellow">Yellow</lg-radio-button>\n        <lg-radio-button value="red">Red</lg-radio-button>\n        <lg-radio-button value="blue">Blue</lg-radio-button>\n        <lg-radio-button value="invalid">Invalid</lg-radio-button>\n        <lg-validation\n          *ngIf="isControlInvalid(radio, validationForm) && radio.hasError(\'invalid\')"\n        >\n          Please select a valid option\n        </lg-validation>\n        <lg-validation\n          *ngIf="isControlInvalid(radio, validationForm) && radio.hasError(\'required\')"\n        >\n          Please select an option\n        </lg-validation>\n      </lg-radio-group>\n      <lg-segment-group formControlName="segment">\n        Segment option\n        <lg-hint>This is a standard segment group</lg-hint>\n        <lg-segment-button value="yellow">Yellow</lg-segment-button>\n        <lg-segment-button value="red">Red</lg-segment-button>\n        <lg-segment-button value="blue">Blue</lg-segment-button>\n        <lg-segment-button value="invalid">Invalid</lg-segment-button>\n        <lg-validation\n          *ngIf="isControlInvalid(segment, validationForm) && segment.hasError(\'invalid\')"\n        >\n          Please select a valid option\n        </lg-validation>\n        <lg-validation\n          *ngIf="isControlInvalid(radio, validationForm) && radio.hasError(\'required\')"\n        >\n          Please select an option\n        </lg-validation>\n      </lg-segment-group>\n\n      <lg-checkbox-group formControlName="colors">\n        Checkbox group\n        <lg-hint>This is a standard checkbox group</lg-hint>\n        <lg-toggle value="red">Red</lg-toggle>\n        <lg-toggle value="yellow">Yellow</lg-toggle>\n        <lg-toggle value="green">Green</lg-toggle>\n        <lg-toggle value="blue">Blue</lg-toggle>\n        <lg-validation\n          *ngIf="isControlInvalid(colors, validationForm) && colors.hasError(\'required\')"\n        >\n          Please select an option\n        </lg-validation>\n      </lg-checkbox-group>\n\n      <lg-toggle formControlName="checkbox" [value]="true" variant="checkbox">\n        Checkbox\n        <lg-validation\n          *ngIf="\n            isControlInvalid(checkbox, validationForm) && checkbox.hasError(\'required\')\n          "\n        >\n          You must check the checkbox\n        </lg-validation>\n      </lg-toggle>\n\n      <lg-toggle formControlName="switch" [value]="true" variant="switch">\n        Switch\n        <lg-validation\n          *ngIf="isControlInvalid(switch, validationForm) && switch.hasError(\'required\')"\n        >\n          You must toggle the switch\n        </lg-validation>\n      </lg-toggle>\n\n      <lg-date-field formControlName="date">\n        Date of birth\n        <lg-hint>For example, 15 06 1983</lg-hint>\n        <lg-validation *ngIf="isControlInvalid(date, validationForm)">\n          <ng-container *ngIf="date.hasError(\'invalidField\')">\n            Enter a valid {{ date.errors.invalidField }}\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'invalidFields\')">\n            Enter a valid {{ date.errors.invalidFields[0] }} and\n            {{ date.errors.invalidFields[1] }}\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'requiredField\')">\n            Date of birth must include a {{ date.errors.requiredField }}\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'requiredFields\')">\n            Date of birth must include a {{ date.errors.requiredFields[0] }} and\n            {{ date.errors.requiredFields[1] }}\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'invalidDate\')">\n            Enter a valid date of birth\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'pastDate\')">\n            Date must be in the past\n          </ng-container>\n          <ng-container *ngIf="date.hasError(\'required\')">\n            Enter a date of birth\n          </ng-container>\n        </lg-validation>\n      </lg-date-field>\n\n      <lg-form-group-child></lg-form-group-child>\n\n      <lg-input-field>\n        Sort Code\n        <lg-hint>Must be 6 digits long</lg-hint>\n        <input lgInput lgSortCode formControlName="sortCode" />\n        <lg-validation *ngIf="isControlInvalid(sortCode, validationForm)">\n          <ng-container *ngIf="sortCode.hasError(\'required\')">\n            Enter a sort code\n          </ng-container>\n          <ng-container *ngIf="sortCode.hasError(\'pattern\')">\n            Enter a valid sort code\n          </ng-container>\n        </lg-validation>\n      </lg-input-field>\n\n      <button lg-button type="submit" variant="primary-dark">Submit</button>\n    </form>\n  ',standalone:!0,imports:[fesm2022_forms.X1,input_field_component.v,input_directive.d,hint_component.m,validation_component.Q,select_field_component.t,select_directive.P,radio_group_component.X,radio_button_component.g,checkbox_group_component.$,toggle_component.N,date_field_component.N,FormGroupChildComponent,sort_code_directive.M,button_component.j,common.NgIf]})],ReactiveFormComponent);const form_stories={title:"Components/Forms/Form validation/Examples",decorators:[(0,dist.moduleMetadata)({imports:[fesm2022_forms.X1,ReactiveFormComponent]})],argTypes:{formSubmit:{action:"submit",table:{disable:!0}}}},formValidation=(args=>({props:args,template:'\n<lg-validation-form\n  (formSubmit)="formSubmit($event)">\n</lg-validation-form>\n'})).bind({});formValidation.storyName="Form validation",formValidation.parameters={docs:{source:{code:null}}},formValidation.parameters={...formValidation.parameters,docs:{...formValidation.parameters?.docs,source:{originalSource:"(args: unknown) => ({\n  props: args,\n  template\n})",...formValidation.parameters?.docs?.source}}};const __namedExportsOrder=["formValidation"]},"./projects/canopy/src/lib/forms/date/date-field.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-date-field {\n  display: block;\n  margin-bottom: var(--component-margin);\n}\n\n.lg-date-field__fields {\n  display: flex;\n}\n\n.lg-date-field__date,\n.lg-date-field__month,\n.lg-date-field__year {\n  display: flex;\n  flex-direction: column;\n  margin-right: var(--space-sm);\n}\n.lg-date-field__date .lg-input-field .lg-input-field__inputs,\n.lg-date-field__month .lg-input-field .lg-input-field__inputs,\n.lg-date-field__year .lg-input-field .lg-input-field__inputs {\n  width: 100%;\n}\n\n.lg-date-field__month,\n.lg-date-field__date {\n  width: 4rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/forms/select/select-field.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-select {\n  font-size: var(--text-base-size);\n  font-weight: var(--font-weight-regular);\n  font-family: var(--font-family);\n  line-height: var(--text-base-line-height);\n  color: var(--color-text);\n  border: solid var(--border-width) var(--border-color);\n  border-radius: var(--border-radius-sm);\n  padding: var(--select-vertical-padding) calc(var(--select-icon-width) + 2 * var(--space-sm)) var(--select-vertical-padding) var(--space-sm);\n  background-color: var(--color-white);\n  outline: 0;\n  appearance: none;\n  max-width: 100%;\n}\n.lg-select:hover {\n  border-color: var(--border-hover-color);\n}\n.lg-select:focus-visible {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-select:disabled {\n  color: var(--disabled-color);\n  background-color: var(--background-disabled-color);\n  border-color: var(--border-disabled-color);\n}\n.lg-select--error, .lg-select--error:hover {\n  color: var(--form-error-color);\n  border-color: var(--form-error-border-color);\n}\n.lg-select--error:focus-visible, .lg-select--error:hover:focus-visible {\n  color: inherit;\n  border-color: inherit;\n}\n.lg-select--block {\n  width: 100%;\n}\n@media (min-width: 48rem) {\n  .lg-select--block {\n    width: auto;\n  }\n}\n\n/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-select-field {\n  display: block;\n  margin-bottom: var(--component-margin);\n}\n\n.lg-select-field__outer {\n  display: block;\n}\n\n.lg-select-field__inner {\n  display: inline-block;\n  background-color: var(--color-white);\n  max-width: 100%;\n  position: relative;\n}\n.lg-select-field__inner--block {\n  width: 100%;\n}\n@media (min-width: 48rem) {\n  .lg-select-field__inner--block {\n    width: auto;\n  }\n}\n\n.lg-select-field__icon {\n  position: absolute;\n  right: 0;\n  top: calc(50% - var(--icon-width) / 2);\n  margin-left: var(--space-sm);\n  margin-right: var(--space-sm);\n  pointer-events: none;\n}\n.lg-select-field--error .lg-select-field__icon {\n  color: var(--form-error-border-color);\n}\n.lg-select-field--error *:focus-visible + .lg-select-field__icon {\n  color: inherit;\n}\n.lg-select-field:disabled .lg-select-field__icon {\n  color: var(--disabled-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);