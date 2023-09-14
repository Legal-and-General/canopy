"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[3635,2581],{"./projects/canopy/src/lib/forms/toggle/docs/checkbox/checkbox-group.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{checkboxGroup:()=>checkboxGroup,default:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_hint__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.module.ts"),_toggle__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./projects/canopy/src/lib/forms/toggle/toggle.module.ts"),_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/forms/checkbox-group/checkbox-group.component.ts"),_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/forms/checkbox-group/checkbox-group.module.ts");const formTemplate='\n<form [formGroup]="form">\n  <lg-checkbox-group [inline]="inline" [focus]="focus" formControlName="colors">\n    {{ label }}\n    <lg-hint *ngIf="hint">{{ hint }}</lg-hint>\n    <lg-toggle value="red" (blur)="checkboxBlur.emit($event)">Red</lg-toggle>\n    <lg-toggle value="yellow" (blur)="checkboxBlur.emit($event)">Yellow</lg-toggle>\n  </lg-checkbox-group>\n</form>\n';let ReactiveFormComponent=class ReactiveFormComponent{constructor(fb){this.fb=fb,this.inline=!1,this.focus=!1,this.checkboxChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.checkboxBlur=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.form=this.fb.group({colors:this.fb.control(["red"])}),this.form.valueChanges.subscribe((val=>this.checkboxChange.emit(val)))}set disabled(isDisabled){!0===isDisabled?this.form.controls.colors.disable():this.form.controls.colors.enable()}get disabled(){return this.form.controls.colors.disabled}};ReactiveFormComponent.ctorParameters=()=>[{type:_angular_forms__WEBPACK_IMPORTED_MODULE_2__.QS}],ReactiveFormComponent.propDecorators={inline:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],focus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],hint:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],disabled:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],checkboxChange:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}],checkboxBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]},ReactiveFormComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"lg-reactive-form",template:formTemplate})],ReactiveFormComponent);const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Forms/Checkbox/Examples",component:_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_4__.B,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[ReactiveFormComponent],imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UX,_checkbox_group_checkbox_group_module__WEBPACK_IMPORTED_MODULE_5__.D,_toggle__WEBPACK_IMPORTED_MODULE_6__.E,_hint__WEBPACK_IMPORTED_MODULE_7__.g]})],argTypes:{id:{table:{disable:!0}},name:{table:{disable:!0}},value:{table:{disable:!0}},inline:{description:"If true, displays the buttons inline rather than stacked.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},focus:{description:"Set the focus on the fieldset.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{description:"Set the inner inputs to disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},ariaDescribedBy:{table:{disable:!0}},checkboxChange:{action:"Checkbox change",table:{disable:!0}},checkboxBlur:{action:"Checkbox blur",table:{disable:!0}},_checkboxes:{table:{disable:!0}},_hintElement:{table:{disable:!0}},_validationElement:{table:{disable:!0}},_variant:{table:{disable:!0}},nextUniqueId:{table:{disable:!0}},onChange:{table:{disable:!0}},onTouched:{table:{disable:!0}},registerOnChange:{table:{disable:!0}},registerOnTouched:{table:{disable:!0}},setDisabledState:{table:{disable:!0}},writeValue:{table:{disable:!0}}}},checkboxGroup=(args=>({props:args,template:'\n    <lg-reactive-form\n      [disabled]="disabled"\n      [hint]="hint"\n      [inline]="inline"\n      [focus]="focus"\n      [label]="label"\n      (checkboxChange)="checkboxChange($event)"\n      (checkboxBlur)="checkboxBlur($event)">\n    </lg-reactive-form>\n  '})).bind({});checkboxGroup.storyName="Checkbox group",checkboxGroup.args={inline:!1,disabled:!1,focus:!1,label:"Color",hint:"Please select all colors that apply"},checkboxGroup.parameters={docs:{source:{code:formTemplate}}}},"./projects/canopy/src/lib/forms/hint/hint.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>LgHintComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgHintComponent=class LgHintComponent{constructor(){this.id="lg-hint-"+nextUniqueId++,this.class=!0}};LgHintComponent.propDecorators={id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-hint"]}]},LgHintComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-hint",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,styles:[".lg-hint {\n  display: block;\n  color: var(--color-battleship-grey);\n  margin-top: calc(var(--space-xxs) * -1);\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-regular);\n}"]})],LgHintComponent)},"./projects/canopy/src/lib/forms/hint/hint.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>LgHintModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_hint_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/forms/hint/hint.component.ts");let LgHintModule=class LgHintModule{};LgHintModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({declarations:[_hint_component__WEBPACK_IMPORTED_MODULE_2__.q],exports:[_hint_component__WEBPACK_IMPORTED_MODULE_2__.q]})],LgHintModule)},"./projects/canopy/src/lib/forms/label/label.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>LgLabelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgLabelComponent=class LgLabelComponent{constructor(){this.class=!0,this.id="lg-label-"+nextUniqueId++}};LgLabelComponent.propDecorators={class:[{type:core.Input},{type:core.HostBinding,args:["class.lg-label"]}],id:[{type:core.Input},{type:core.HostBinding,args:["attr.id"]}],for:[{type:core.Input},{type:core.HostBinding,args:["attr.for"]}]},LgLabelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"[lg-label]",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,styles:[".lg-label {\n  display: block;\n  margin-bottom: var(--space-xxs);\n  font-weight: var(--font-weight-bold);\n  width: 100%;\n}"]})],LgLabelComponent)},"./projects/canopy/src/lib/forms/label/label.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>LgLabelModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_label_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/forms/label/label.component.ts");let LgLabelModule=class LgLabelModule{};LgLabelModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({declarations:[_label_component__WEBPACK_IMPORTED_MODULE_2__.m],exports:[_label_component__WEBPACK_IMPORTED_MODULE_2__.m]})],LgLabelModule)},"./projects/canopy/src/lib/forms/validation/error-state-matcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>LgErrorStateMatcher});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgErrorStateMatcher=class LgErrorStateMatcher{isControlInvalid(control,controlContainer){return!!(control&&control.invalid&&control.touched&&control.dirty||controlContainer&&controlContainer.submitted&&control.invalid)}};LgErrorStateMatcher=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgErrorStateMatcher)},"./projects/canopy/src/lib/forms/validation/validation.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>LgValidationComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let nextUniqueId=0,LgValidationComponent=class LgValidationComponent{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.showIcon=!0,this.id="lg-validation-"+nextUniqueId++,this.class=!0,this.variant="error"}set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-variant--${this._variant}`),this.renderer.addClass(this.hostElement.nativeElement,`lg-variant--${variant}`),this._variant=variant}get variant(){return this._variant}};LgValidationComponent.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],LgValidationComponent.propDecorators={showIcon:[{type:core.Input}],variant:[{type:core.Input}],id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-validation"]}]},LgValidationComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-validation",template:'<div\n  *ngIf="showIcon && variant !== \'generic\'"\n  [ngSwitch]="variant"\n  class="lg-validation__icon"\n>\n  <lg-icon *ngSwitchCase="\'error\'" name="crossmark-spot-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'info\'" name="information-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'warning\'" name="warning-fill"></lg-icon>\n  <lg-icon *ngSwitchCase="\'success\'" name="checkmark-spot-fill"></lg-icon>\n</div>\n\n<div>\n  <ng-content></ng-content>\n</div>\n',encapsulation:core.ViewEncapsulation.None,styles:["/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-validation {\n  display: flex;\n  align-items: flex-start;\n  padding: var(--space-xs);\n  margin-top: var(--space-xxs);\n}\n.lg-validation__icon {\n  margin-right: var(--space-xs);\n}"]})],LgValidationComponent)},"./projects/canopy/src/lib/spacing/margin/margin.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>LgMarginModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),spacing_service=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgMarginDirective=class LgMarginDirective{constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.marginTopClasses=[],this.marginRightClasses=[],this.marginBottomClasses=[],this.marginLeftClasses=[],this.marginClasses=[]}set lgMarginTop(margin){this.marginTopClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-top"),this.marginTopClasses)}set lgMarginRight(margin){this.marginRightClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-right"),this.marginRightClasses)}set lgMarginBottom(margin){this.marginBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-bottom"),this.marginBottomClasses)}set lgMarginLeft(margin){this.marginLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-left"),this.marginLeftClasses)}set lgMarginHorizontal(margin){this.lgMarginLeft=margin,this.lgMarginRight=margin}set lgMarginVertical(margin){this.lgMarginTop=margin,this.lgMarginBottom=margin}set lgMargin(margin){this.marginClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin"),this.marginClasses)}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}};LgMarginDirective.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef},{type:spacing_service.i}],LgMarginDirective.propDecorators={lgMarginTop:[{type:core.Input}],lgMarginRight:[{type:core.Input}],lgMarginBottom:[{type:core.Input}],lgMarginLeft:[{type:core.Input}],lgMarginHorizontal:[{type:core.Input}],lgMarginVertical:[{type:core.Input}],lgMargin:[{type:core.Input}]},LgMarginDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"\n    [lgMargin],\n    [lgMarginVertical],\n    [lgMarginHorizontal],\n    [lgMarginTop],\n    [lgMarginRight],\n    [lgMarginBottom],\n    [lgMarginLeft]\n  "})],LgMarginDirective);let LgMarginModule=class LgMarginModule{};LgMarginModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule],declarations:[LgMarginDirective],exports:[LgMarginDirective]})],LgMarginModule)},"./projects/canopy/src/lib/spacing/spacing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>SpacingService});var BreakpointValues,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");!function(BreakpointValues){BreakpointValues.xs="0",BreakpointValues.sm="20rem",BreakpointValues.md="48rem",BreakpointValues.lg="64rem",BreakpointValues.xl="80rem",BreakpointValues.xxl="90rem"}(BreakpointValues||(BreakpointValues={}));let DynamicStyleService=class DynamicStyleService{constructor(){this.styleTag=null,this.selectors=[],this.mediaQueries={},this.addStyleTag()}addRules(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.filter((r=>!this.selectors.includes(r.selector))).map((r=>{this.selectors.push(r.selector),styleTagCache+=`.${r.selector}{${r.declaration}}`})),this.styleTag.innerHTML=styleTagCache}addRulesToMediaQuery(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.map((r=>{if(this.mediaQueries[r.breakpoint]||(styleTagCache+=this.createMediaQuery(r.breakpoint)),this.mediaQueries[r.breakpoint].includes(r.selector))return;this.mediaQueries[r.breakpoint].push(r.selector);const rule=`.${r.selector}{${r.declaration}}`;styleTagCache=this.insertRuleInsideMediaQuery(styleTagCache,r.breakpoint,rule,r.addAtStart)})),this.styleTag.innerHTML=styleTagCache}insertRuleInsideMediaQuery(cssString,breakpoint,rule,atStart=!1){const search=`@media(min-width:${breakpoint}){`;let index=cssString.indexOf(search);if(-1===index)return console.warn("Media query not found in string, cannot add rule."),cssString;if(index+=search.length,atStart)return cssString.substring(0,index)+`${rule}`+cssString.substring(index);let balance=0,pos=null;for(let i=index;i<cssString.length;i++){const char=cssString[i];if("{"===char?balance++:"}"===char&&balance--,-1===balance){pos=i;break}}return null===pos?(console.warn("Cannot add rule to media query in CSS string, invalid CSS string"),cssString):cssString.substring(0,pos)+`${rule}`+cssString.substring(pos)}addStyleTag(){this.styleTag=document.createElement("style"),this.styleTag.type="text/css",document.getElementsByTagName("head")[0].appendChild(this.styleTag)}createMediaQuery(breakpoint){if(!this.mediaQueries[breakpoint])return this.mediaQueries[breakpoint]=[],`@media(min-width:${breakpoint}){}`}};var SpacingValues;DynamicStyleService.ctorParameters=()=>[],DynamicStyleService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],DynamicStyleService),function(SpacingValues){SpacingValues.none="0",SpacingValues.xxxs="0.25rem",SpacingValues.xxs="0.5rem",SpacingValues.xs="0.75rem",SpacingValues.sm="1rem",SpacingValues.md="1.5rem",SpacingValues.lg="2rem",SpacingValues.xl="2.5rem",SpacingValues.xxl="3rem",SpacingValues.xxxl="4.5rem",SpacingValues.xxxxl="9rem"}(SpacingValues||(SpacingValues={}));let SpacingService=class SpacingService{constructor(dynamicStyleService){this.dynamicStyleService=dynamicStyleService}createNewClasses(spacing,cssProperty){const newClasses=[],responsiveSpacingRules=[];if(!spacing)return[];if("object"==typeof spacing)Object.keys(spacing).forEach((key=>{const selector=`lg-${cssProperty.replace("-","__")}--${key}--${spacing[key]}`;responsiveSpacingRules.push({selector,declaration:`${cssProperty}:${SpacingValues[spacing[key]]}!important`,breakpoint:BreakpointValues[key]}),newClasses.push(selector)})),this.dynamicStyleService.addRulesToMediaQuery(responsiveSpacingRules);else{const selector=`lg-${cssProperty.replace("-","__")}--${spacing}`;this.dynamicStyleService.addRules([{selector,declaration:`${cssProperty}:${SpacingValues[spacing]}!important`}]),newClasses.push(selector)}return newClasses}};SpacingService.ctorParameters=()=>[{type:DynamicStyleService}],SpacingService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],SpacingService)},"./projects/canopy/src/lib/utils/dom.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>LgDomService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let LgDomService=class LgDomService{toggleIdInStringProperty(property="",oldElement,newElement){return newElement||null!==property?(null===property&&(property=""),oldElement&&oldElement.id&&(property=property.replace(oldElement.id,"")),newElement&&newElement.id&&(property=`${property} ${newElement.id}`),""===(property=property.trim())&&(property=null),property):property}};LgDomService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],LgDomService)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{n:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.U)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ev)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.CR)(args))):fn(args)}(fn,args)}))}}}]);