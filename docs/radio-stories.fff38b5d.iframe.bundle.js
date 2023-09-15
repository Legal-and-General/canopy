(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[1566,2581],{"./projects/canopy/src/lib/forms/radio/docs/radio/radio.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,radio:()=>radio});var _class,tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_hint_hint_module__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.module.ts"),_radio_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/forms/radio/radio.module.ts"),_radio_group_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/forms/radio/radio-group.component.ts");const formTemplate='\n<form [formGroup]="form">\n  <lg-radio-group [inline]="inline" [focus]="focus" formControlName="color">\n    {{ label }}\n    <lg-hint *ngIf="hint">{{ hint }}</lg-hint>\n    <lg-radio-button value="red" [size]="size" (blur)="radioBlur.emit($event)">Red</lg-radio-button>\n    <lg-radio-button value="yellow" [size]="size" (blur)="radioBlur.emit($event)"\n      >Yellow\n      <lg-hint>Internal custom text</lg-hint>\n    </lg-radio-button>\n  </lg-radio-group>\n</form>\n';let ReactiveFormRadioComponent=((_class=class ReactiveFormRadioComponent{set disabled(isDisabled){!0===isDisabled?this.form.controls.color.disable():this.form.controls.color.enable()}get disabled(){return this.form.controls.color.disabled}constructor(fb){this.fb=fb,this.inline=!1,this.size="sm",this.focus=!1,this.radioChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.radioBlur=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.form=this.fb.group({color:"red"}),this.form.valueChanges.subscribe((val=>this.radioChange.emit(val)))}}).ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_2__.QS}],_class.propDecorators={inline:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],focus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],hint:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],radioChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}],radioBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]},_class);ReactiveFormRadioComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"lg-reactive-form-radio",template:formTemplate})],ReactiveFormRadioComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Forms/Radio/Examples",component:_radio_group_component__WEBPACK_IMPORTED_MODULE_4__.s,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[ReactiveFormRadioComponent],imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UX,_radio_module__WEBPACK_IMPORTED_MODULE_5__.Z,_hint_hint_module__WEBPACK_IMPORTED_MODULE_6__.g]})],argTypes:{id:{table:{disable:!0}},name:{table:{disable:!0}},value:{table:{disable:!0}},ngAfterContentInit:{table:{disable:!0}},focus:{description:"Set the focus on the fieldset.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},inline:{description:"Position the radio buttons inline.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},size:{options:["sm","lg"],description:"The size of the radio button.",table:{type:{summary:["sm","lg"]},defaultValue:{summary:"sm"}},control:{type:"select"}},disabled:{description:"Set the inner filters to disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},ariaDescribedBy:{table:{disable:!0}},radioChange:{action:"Radio change",table:{disable:!0}},radioBlur:{action:"Radio blur",table:{disable:!0}},stack:{table:{disable:!0}},_hintElement:{table:{disable:!0}},_radios:{table:{disable:!0}},_stack:{table:{disable:!0}},_validationElement:{table:{disable:!0}},_value:{table:{disable:!0}},class:{table:{disable:!0}},nextUniqueId:{table:{disable:!0}},variant:{table:{disable:!0}},onChange:{table:{disable:!0}},onTouched:{table:{disable:!0}},registerOnChange:{table:{disable:!0}},registerOnTouched:{table:{disable:!0}},setDisabledState:{table:{disable:!0}},writeValue:{table:{disable:!0}}}},radio=(args=>({props:args,template:'\n  <lg-reactive-form-radio\n    [disabled]="disabled"\n    [hint]="hint"\n    [inline]="inline"\n    [size]="size"\n    [label]="label"\n    [focus]="focus"\n    (radioChange)="radioChange($event)"\n    (radioBlur)="radioBlur($event)">\n  </lg-reactive-form-radio>\n  '})).bind({});radio.storyName="Radio",radio.args={disabled:!1,inline:!1,size:"sm",focus:!1,label:"Color",hint:"Please select a color"},radio.parameters={docs:{source:{code:formTemplate}}}},"./projects/canopy/src/lib/focus/focus.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>LgFocusDirective});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgFocusDirective=((_class=class LgFocusDirective{constructor(el){this.el=el}ngOnChanges({lgFocus}){if(lgFocus.currentValue){this.el.nativeElement.focus()}}}).ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}],_class.propDecorators={lgFocus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]},_class);LgFocusDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgFocus]"})],LgFocusDirective)},"./projects/canopy/src/lib/focus/focus.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>LgFocusModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_focus_directive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/focus/focus.directive.ts");let LgFocusModule=class LgFocusModule{};LgFocusModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({exports:[_focus_directive__WEBPACK_IMPORTED_MODULE_2__.S],declarations:[_focus_directive__WEBPACK_IMPORTED_MODULE_2__.S]})],LgFocusModule)},"./projects/canopy/src/lib/forms/hint/hint.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>LgHintComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,hint_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.scss?ngResource"),hint_componentngResource_default=__webpack_require__.n(hint_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgHintComponent=((_class=class LgHintComponent{constructor(){this.id="lg-hint-"+nextUniqueId++,this.class=!0}}).propDecorators={id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-hint"]}]},_class);LgHintComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-hint",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,styles:[hint_componentngResource_default()]})],LgHintComponent)},"./projects/canopy/src/lib/forms/hint/hint.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>LgHintModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_hint_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts");let LgHintModule=class LgHintModule{};LgHintModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({declarations:[_hint_component__WEBPACK_IMPORTED_MODULE_2__.q],exports:[_hint_component__WEBPACK_IMPORTED_MODULE_2__.q]})],LgHintModule)},"./projects/canopy/src/lib/forms/label/label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>LgLabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,label_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.scss?ngResource"),label_componentngResource_default=__webpack_require__.n(label_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgLabelComponent=((_class=class LgLabelComponent{constructor(){this.class=!0,this.id="lg-label-"+nextUniqueId++}}).propDecorators={class:[{type:core.Input},{type:core.HostBinding,args:["class.lg-label"]}],id:[{type:core.Input},{type:core.HostBinding,args:["attr.id"]}],for:[{type:core.Input},{type:core.HostBinding,args:["attr.for"]}]},_class);LgLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"[lg-label]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,styles:[label_componentngResource_default()]})],LgLabelComponent)},"./projects/canopy/src/lib/forms/label/label.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>LgLabelModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_label_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.ts");let LgLabelModule=class LgLabelModule{};LgLabelModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({declarations:[_label_component__WEBPACK_IMPORTED_MODULE_2__.m],exports:[_label_component__WEBPACK_IMPORTED_MODULE_2__.m]})],LgLabelModule)},"./projects/canopy/src/lib/forms/validation/error-state-matcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>LgErrorStateMatcher});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgErrorStateMatcher=class LgErrorStateMatcher{isControlInvalid(control,controlContainer){return!!(control&&control.invalid&&control.touched&&control.dirty||controlContainer&&controlContainer.submitted&&control.invalid)}};LgErrorStateMatcher=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgErrorStateMatcher)},"./projects/canopy/src/lib/forms/validation/validation.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>LgValidationComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,validation_componentngResource=__webpack_require__("./projects/canopy/src/lib/forms/validation/validation.component.scss?ngResource"),validation_componentngResource_default=__webpack_require__.n(validation_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgValidationComponent=((_class=class LgValidationComponent{set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-variant--${this._variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-variant--${variant}`),this._variant=variant}get variant(){return this._variant}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.showIcon=!0,this.id="lg-validation-"+nextUniqueId++,this.class=!0,this.variant="error"}}).ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],_class.propDecorators={showIcon:[{type:core.Input}],variant:[{type:core.Input}],id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-validation"]}]},_class);LgValidationComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-validation",template:'<div\n  *ngIf="showIcon && variant !== \'generic\'"\n  [ngSwitch]="variant"\n  class="lg-validation__icon"\n>\n  <lg-icon *ngSwitchCase="\'error\'" name="crossmark-spot-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'info\'" name="information-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'warning\'" name="warning-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'success\'" name="checkmark-spot-fill"></lg-icon>\n</div>\n\n<div>\n  <ng-content></ng-content>\n</div>\n',encapsulation:core.ViewEncapsulation.None,styles:[validation_componentngResource_default()]})],LgValidationComponent)},"./projects/canopy/src/lib/spacing/margin/margin.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>LgMarginModule});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),spacing_service=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgMarginDirective=((_class=class LgMarginDirective{set lgMarginTop(margin){this.marginTopClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-top"),this.marginTopClasses)}set lgMarginRight(margin){this.marginRightClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-right"),this.marginRightClasses)}set lgMarginBottom(margin){this.marginBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-bottom"),this.marginBottomClasses)}set lgMarginLeft(margin){this.marginLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-left"),this.marginLeftClasses)}set lgMarginHorizontal(margin){this.lgMarginLeft=margin,this.lgMarginRight=margin}set lgMarginVertical(margin){this.lgMarginTop=margin,this.lgMarginBottom=margin}set lgMargin(margin){this.marginClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin"),this.marginClasses)}constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.marginTopClasses=[],this.marginRightClasses=[],this.marginBottomClasses=[],this.marginLeftClasses=[],this.marginClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}}).ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef},{type:spacing_service.i}],_class.propDecorators={lgMarginTop:[{type:core.Input}],lgMarginRight:[{type:core.Input}],lgMarginBottom:[{type:core.Input}],lgMarginLeft:[{type:core.Input}],lgMarginHorizontal:[{type:core.Input}],lgMarginVertical:[{type:core.Input}],lgMargin:[{type:core.Input}]},_class);LgMarginDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"\n    [lgMargin],\n    [lgMarginVertical],\n    [lgMarginHorizontal],\n    [lgMarginTop],\n    [lgMarginRight],\n    [lgMarginBottom],\n    [lgMarginLeft]\n  "})],LgMarginDirective);let LgMarginModule=class LgMarginModule{};LgMarginModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgMarginDirective],exports:[LgMarginDirective]})],LgMarginModule)},"./projects/canopy/src/lib/spacing/spacing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>SpacingService});var BreakpointValues,_class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");!function(BreakpointValues){BreakpointValues.xs="0",BreakpointValues.sm="20rem",BreakpointValues.md="48rem",BreakpointValues.lg="64rem",BreakpointValues.xl="80rem",BreakpointValues.xxl="90rem"}(BreakpointValues||(BreakpointValues={}));let DynamicStyleService=((_class=class DynamicStyleService{constructor(){this.styleTag=null,this.selectors=[],this.mediaQueries={},this.addStyleTag()}addRules(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.filter((r=>!this.selectors.includes(r.selector))).map((r=>{this.selectors.push(r.selector),styleTagCache+=`.${r.selector}{${r.declaration}}`})),this.styleTag.innerHTML=styleTagCache}addRulesToMediaQuery(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.map((r=>{if(this.mediaQueries[r.breakpoint]||(styleTagCache+=this.createMediaQuery(r.breakpoint)),this.mediaQueries[r.breakpoint].includes(r.selector))return;this.mediaQueries[r.breakpoint].push(r.selector);const rule=`.${r.selector}{${r.declaration}}`;styleTagCache=this.insertRuleInsideMediaQuery(styleTagCache,r.breakpoint,rule,r.addAtStart)})),this.styleTag.innerHTML=styleTagCache}insertRuleInsideMediaQuery(cssString,breakpoint,rule,atStart=!1){const search=`@media(min-width:${breakpoint}){`;let index=cssString.indexOf(search);if(-1===index)return console.warn("Media query not found in string, cannot add rule."),cssString;if(index+=search.length,atStart)return cssString.substring(0,index)+`${rule}`+cssString.substring(index);let balance=0,pos=null;for(let i=index;i<cssString.length;i++){const char=cssString[i];if("{"===char?balance++:"}"===char&&balance--,-1===balance){pos=i;break}}return null===pos?(console.warn("Cannot add rule to media query in CSS string, invalid CSS string"),cssString):cssString.substring(0,pos)+`${rule}`+cssString.substring(pos)}addStyleTag(){this.styleTag=document.createElement("style"),this.styleTag.type="text/css",document.getElementsByTagName("head")[0].appendChild(this.styleTag)}createMediaQuery(breakpoint){if(!this.mediaQueries[breakpoint])return this.mediaQueries[breakpoint]=[],`@media(min-width:${breakpoint}){}`}}).ctorParameters=()=>[],_class);var SpacingValues,spacing_service_class;DynamicStyleService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],DynamicStyleService),function(SpacingValues){SpacingValues.none="0",SpacingValues.xxxs="0.25rem",SpacingValues.xxs="0.5rem",SpacingValues.xs="0.75rem",SpacingValues.sm="1rem",SpacingValues.md="1.5rem",SpacingValues.lg="2rem",SpacingValues.xl="2.5rem",SpacingValues.xxl="3rem",SpacingValues.xxxl="4.5rem",SpacingValues.xxxxl="9rem"}(SpacingValues||(SpacingValues={}));let SpacingService=((spacing_service_class=class SpacingService{constructor(dynamicStyleService){this.dynamicStyleService=dynamicStyleService}createNewClasses(spacing,cssProperty){const newClasses=[],responsiveSpacingRules=[];if(!spacing)return[];if("object"==typeof spacing)Object.keys(spacing).forEach((key=>{const selector=`lg-${cssProperty.replace("-","__")}--${key}--${spacing[key]}`;responsiveSpacingRules.push({selector,declaration:`${cssProperty}:${SpacingValues[spacing[key]]}!important`,breakpoint:BreakpointValues[key]}),newClasses.push(selector)})),this.dynamicStyleService.addRulesToMediaQuery(responsiveSpacingRules);else{const selector=`lg-${cssProperty.replace("-","__")}--${spacing}`;this.dynamicStyleService.addRules([{selector,declaration:`${cssProperty}:${SpacingValues[spacing]}!important`}]),newClasses.push(selector)}return newClasses}}).ctorParameters=()=>[{type:DynamicStyleService}],spacing_service_class);SpacingService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],SpacingService)},"./projects/canopy/src/lib/utils/dom.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>LgDomService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgDomService=class LgDomService{toggleIdInStringProperty(property="",oldElement,newElement){return newElement||null!==property?(null===property&&(property=""),oldElement&&oldElement.id&&(property=property.replace(oldElement.id,"")),newElement&&newElement.id&&(property=`${property} ${newElement.id}`),""===(property=property.trim())&&(property=null),property):property}};LgDomService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgDomService)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{n:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.U)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ev)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.CR)(args))):fn(args)}(fn,args)}))}},"./projects/canopy/src/lib/forms/hint/hint.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-hint {\n  display: block;\n  color: var(--color-battleship-grey);\n  margin-top: calc(var(--space-xxs) * -1);\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-regular);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/forms/label/label.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-label {\n  display: block;\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-medium);\n  width: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/forms/validation/validation.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-validation {\n  display: flex;\n  align-items: flex-start;\n  padding: var(--space-xs);\n  margin-top: var(--space-xxs);\n}\n\n.lg-validation__icon {\n  margin-right: var(--space-xs);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);