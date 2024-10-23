(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[2273],{"./projects/canopy/src/lib/card/card-hero-img/card-hero-img.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>LgCardHeroImageComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var card_hero_img_componentngResource=__webpack_require__("./projects/canopy/src/lib/card/card-hero-img/card-hero-img.component.scss?ngResource"),card_hero_img_componentngResource_default=__webpack_require__.n(card_hero_img_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let LgCardHeroImageComponent=class LgCardHeroImageComponent{constructor(){this.cover=!1,this.alt=""}get class(){return this.src?"lg-card-hero-img__img":"lg-card-hero-img__icon"}static#_=this.propDecorators={cover:[{type:core.Input}],src:[{type:core.Input}],alt:[{type:core.Input}],class:[{type:core.HostBinding,args:["class"]}]}};LgCardHeroImageComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-card-hero-img",template:'<div\n  *ngIf="cover && src"\n  class="lg-card-hero-image__cover-image"\n  [style.background-image]="\'url(\' + src + \')\'"\n></div>\n<img\n  *ngIf="!cover && src"\n  [alt]="alt"\n  [src]="src"\n  class="lg-card-hero-image__img"\n/>\n<ng-content select="lg-brand-icon"></ng-content>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,encapsulation:core.ViewEncapsulation.None,standalone:!0,imports:[common.NgIf],styles:[card_hero_img_componentngResource_default()]})],LgCardHeroImageComponent)},"./projects/canopy/src/lib/orientation/orientation.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>LgOrientationDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgOrientationDirective=class LgOrientationDirective{set lgOrientation(orientation){orientation&&(this.orientationClasses=this.toggleClasses(this.createNewOrientationClasses(orientation),this.orientationClasses))}get orientationClass(){return this.orientationClasses.length}constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement,this.orientationClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}createNewOrientationClasses(rules){const newClasses=[];return Object.keys(rules).forEach((key=>{newClasses.push(`lg-orientation--${key}--${rules[key]}`)})),newClasses}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}];static#_2=this.propDecorators={lgOrientation:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],orientationClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-orientation"]}]}};LgOrientationDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgOrientation]",standalone:!0})],LgOrientationDirective)},"./projects/canopy/src/lib/shadow/shadow.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>LgShadowDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgShadowDirective=class LgShadowDirective{constructor(){this.class=!0}static#_=this.propDecorators={class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-shadow"]}]}};LgShadowDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgShadow]",standalone:!0})],LgShadowDirective)},"./projects/canopy/src/lib/spacing/margin/margin.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LgMarginDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_spacing_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgMarginDirective=class LgMarginDirective{set lgMarginTop(margin){this.marginTopClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-top"),this.marginTopClasses)}set lgMarginRight(margin){this.marginRightClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-right"),this.marginRightClasses)}set lgMarginBottom(margin){this.marginBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-bottom"),this.marginBottomClasses)}set lgMarginLeft(margin){this.marginLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-left"),this.marginLeftClasses)}set lgMarginHorizontal(margin){this.lgMarginLeft=margin,this.lgMarginRight=margin}set lgMarginVertical(margin){this.lgMarginTop=margin,this.lgMarginBottom=margin}set lgMargin(margin){this.marginClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin"),this.marginClasses)}constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.marginTopClasses=[],this.marginRightClasses=[],this.marginBottomClasses=[],this.marginLeftClasses=[],this.marginClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef},{type:_spacing_service__WEBPACK_IMPORTED_MODULE_1__.r}];static#_2=this.propDecorators={lgMarginTop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginRight:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginBottom:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginLeft:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginHorizontal:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginVertical:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMargin:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};LgMarginDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"\n    [lgMargin],\n    [lgMarginVertical],\n    [lgMarginHorizontal],\n    [lgMarginTop],\n    [lgMarginRight],\n    [lgMarginBottom],\n    [lgMarginLeft]\n  ",standalone:!0})],LgMarginDirective)},"./projects/canopy/src/lib/spacing/padding/padding.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>LgPaddingDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_spacing_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgPaddingDirective=class LgPaddingDirective{set lgPaddingTop(padding){this.paddingTopClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-top"),this.paddingTopClasses)}set lgPaddingRight(padding){this.paddingRightClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-right"),this.paddingRightClasses)}set lgPaddingBottom(padding){this.paddingBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-bottom"),this.paddingBottomClasses)}set lgPaddingLeft(padding){this.paddingLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding-left"),this.paddingLeftClasses)}set lgPaddingHorizontal(padding){this.lgPaddingLeft=padding,this.lgPaddingRight=padding}set lgPaddingVertical(padding){this.lgPaddingTop=padding,this.lgPaddingBottom=padding}set lgPadding(padding){this.paddingClasses=this.toggleClasses(this.spacingService.createNewClasses(padding,"padding"),this.paddingClasses)}constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.paddingTopClasses=[],this.paddingRightClasses=[],this.paddingBottomClasses=[],this.paddingLeftClasses=[],this.paddingClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef},{type:_spacing_service__WEBPACK_IMPORTED_MODULE_1__.r}];static#_2=this.propDecorators={lgPaddingTop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingRight:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingBottom:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingLeft:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingHorizontal:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPaddingVertical:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgPadding:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};LgPaddingDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"\n    [lgPadding],\n    [lgPaddingVertical],\n    [lgPaddingHorizontal],\n    [lgPaddingTop],\n    [lgPaddingRight],\n    [lgPaddingBottom],\n    [lgPaddingLeft]\n  ",standalone:!0})],LgPaddingDirective)},"./projects/canopy/src/lib/spacing/spacing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>SpacingService});var BreakpointValues,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");!function(BreakpointValues){BreakpointValues.xs="0",BreakpointValues.sm="20rem",BreakpointValues.md="48rem",BreakpointValues.lg="64rem",BreakpointValues.xl="80rem",BreakpointValues.xxl="90rem"}(BreakpointValues||(BreakpointValues={}));var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let DynamicStyleService=class DynamicStyleService{constructor(document){this.document=document,this.styleTag=null,this.selectors=[],this.mediaQueries={},this.addStyleTag()}addRules(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.filter((r=>!this.selectors.includes(r.selector))).map((r=>{this.selectors.push(r.selector),styleTagCache+=`.${r.selector}{${r.declaration}}`})),this.styleTag.innerHTML=styleTagCache}addRulesToMediaQuery(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.map((r=>{if(this.mediaQueries[r.breakpoint]||(styleTagCache+=this.createMediaQuery(r.breakpoint)),this.mediaQueries[r.breakpoint].includes(r.selector))return;this.mediaQueries[r.breakpoint].push(r.selector);const rule=`.${r.selector}{${r.declaration}}`;styleTagCache=this.insertRuleInsideMediaQuery(styleTagCache,r.breakpoint,rule,r.addAtStart)})),this.styleTag.innerHTML=styleTagCache}insertRuleInsideMediaQuery(cssString,breakpoint,rule,atStart=!1){const search=`@media(min-width:${breakpoint}){`;let index=cssString.indexOf(search);if(-1===index)return console.warn("Media query not found in string, cannot add rule."),cssString;if(index+=search.length,atStart)return cssString.substring(0,index)+`${rule}`+cssString.substring(index);let balance=0,pos=null;for(let i=index;i<cssString.length;i++){const char=cssString[i];if("{"===char?balance++:"}"===char&&balance--,-1===balance){pos=i;break}}return null===pos?(console.warn("Cannot add rule to media query in CSS string, invalid CSS string"),cssString):cssString.substring(0,pos)+`${rule}`+cssString.substring(pos)}addStyleTag(){this.styleTag=this.document.createElement("style"),this.styleTag.type="text/css",this.document.getElementsByTagName("head")[0].appendChild(this.styleTag)}createMediaQuery(breakpoint){if(!this.mediaQueries[breakpoint])return this.mediaQueries[breakpoint]=[],`@media(min-width:${breakpoint}){}`}static#_=this.ctorParameters=()=>[{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]}]};var SpacingValues;DynamicStyleService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],DynamicStyleService),function(SpacingValues){SpacingValues.none="0",SpacingValues.xxxs="0.25rem",SpacingValues.xxs="0.5rem",SpacingValues.xs="0.75rem",SpacingValues.sm="1rem",SpacingValues.md="1.5rem",SpacingValues.lg="2rem",SpacingValues.xl="2.5rem",SpacingValues.xxl="3rem",SpacingValues.xxxl="4.5rem",SpacingValues.xxxxl="9rem"}(SpacingValues||(SpacingValues={}));let SpacingService=class SpacingService{constructor(dynamicStyleService){this.dynamicStyleService=dynamicStyleService}createNewClasses(spacing,cssProperty){const newClasses=[],responsiveSpacingRules=[];if(!spacing)return[];if("object"==typeof spacing)Object.keys(spacing).forEach((key=>{const selector=`lg-${cssProperty.replace("-","__")}--${key}--${spacing[key]}`;responsiveSpacingRules.push({selector,declaration:`${cssProperty}:${SpacingValues[spacing[key]]}!important`,breakpoint:BreakpointValues[key]}),newClasses.push(selector)})),this.dynamicStyleService.addRulesToMediaQuery(responsiveSpacingRules);else{const selector=`lg-${cssProperty.replace("-","__")}--${spacing}`;this.dynamicStyleService.addRules([{selector,declaration:`${cssProperty}:${SpacingValues[spacing]}!important`}]),newClasses.push(selector)}return newClasses}static#_=this.ctorParameters=()=>[{type:DynamicStyleService}]};SpacingService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],SpacingService)},"./projects/canopy/src/lib/card/card-hero-img/card-hero-img.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-card-hero-image__cover-image {\n  width: 100%;\n  height: var(--card-hero-image-height);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n\n.lg-card-hero-image__img {\n  width: 100%;\n  height: 100%;\n}\n\n.lg-card--promotion .lg-card-hero-img__icon {\n  margin-bottom: var(--space-lg);\n}\n.lg-card--promotion.lg-orientation--sm--reverse-vertical .lg-card-hero-img__icon {\n  margin: var(--space-lg) 0 0 0;\n}\n.lg-card--promotion.lg-orientation--sm--horizontal .lg-card-hero-img__icon {\n  margin: 0 var(--space-lg) 0 0;\n}\n.lg-card--promotion.lg-orientation--sm--reverse-horizontal .lg-card-hero-img__icon {\n  margin: 0 0 0 var(--space-lg);\n}\n@media (min-width: 48rem) {\n  .lg-card--promotion.lg-orientation--md--vertical .lg-card-hero-img__icon {\n    margin: 0 0 var(--space-lg) 0;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-card--promotion.lg-orientation--md--reverse-vertical .lg-card-hero-img__icon {\n    margin: var(--space-lg) 0 0 0;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-card--promotion.lg-orientation--md--horizontal .lg-card-hero-img__icon {\n    margin: 0 var(--space-lg) 0 0;\n  }\n}\n@media (min-width: 48rem) {\n  .lg-card--promotion.lg-orientation--md--reverse-horizontal .lg-card-hero-img__icon {\n    margin: 0 0 0 var(--space-lg);\n  }\n}\n@media (min-width: 64rem) {\n  .lg-card--promotion.lg-orientation--lg--vertical .lg-card-hero-img__icon {\n    margin: 0 0 var(--space-lg) 0;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-card--promotion.lg-orientation--lg--reverse-vertical .lg-card-hero-img__icon {\n    margin: var(--space-lg) 0 0 0;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-card--promotion.lg-orientation--lg--horizontal .lg-card-hero-img__icon {\n    margin: 0 var(--space-lg) 0 0;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-card--promotion.lg-orientation--lg--reverse-horizontal .lg-card-hero-img__icon {\n    margin: 0 0 0 var(--space-lg);\n  }\n}\n@media (min-width: 80rem) {\n  .lg-card--promotion.lg-orientation--xl--vertical .lg-card-hero-img__icon {\n    margin: 0 0 var(--space-lg) 0;\n  }\n}\n@media (min-width: 80rem) {\n  .lg-card--promotion.lg-orientation--xl--reverse-vertical .lg-card-hero-img__icon {\n    margin: var(--space-lg) 0 0 0;\n  }\n}\n@media (min-width: 80rem) {\n  .lg-card--promotion.lg-orientation--xl--horizontal .lg-card-hero-img__icon {\n    margin: 0 var(--space-lg) 0 0;\n  }\n}\n@media (min-width: 80rem) {\n  .lg-card--promotion.lg-orientation--xl--reverse-horizontal .lg-card-hero-img__icon {\n    margin: 0 0 0 var(--space-lg);\n  }\n}\n@media (min-width: 90rem) {\n  .lg-card--promotion.lg-orientation--xxl--vertical .lg-card-hero-img__icon {\n    margin: 0 0 var(--space-lg) 0;\n  }\n}\n@media (min-width: 90rem) {\n  .lg-card--promotion.lg-orientation--xxl--reverse-vertical .lg-card-hero-img__icon {\n    margin: var(--space-lg) 0 0 0;\n  }\n}\n@media (min-width: 90rem) {\n  .lg-card--promotion.lg-orientation--xxl--horizontal .lg-card-hero-img__icon {\n    margin: 0 var(--space-lg) 0 0;\n  }\n}\n@media (min-width: 90rem) {\n  .lg-card--promotion.lg-orientation--xxl--reverse-horizontal .lg-card-hero-img__icon {\n    margin: 0 0 0 var(--space-lg);\n  }\n}\n\n@media (min-width: 48rem) {\n  .lg-orientation.lg-orientation--md--vertical .lg-card-hero-image__cover-image, .lg-orientation.lg-orientation--md--reverse-vertical .lg-card-hero-image__cover-image {\n    width: 100%;\n    height: var(--card-hero-image-height);\n  }\n}\n@media (min-width: 48rem) {\n  .lg-orientation.lg-orientation--md--horizontal .lg-card-hero-image__cover-image, .lg-orientation.lg-orientation--md--reverse-horizontal .lg-card-hero-image__cover-image {\n    width: var(--card-hero-image-width);\n    height: 100%;\n  }\n}\n@media (min-width: 64rem) {\n  .lg-orientation.lg-orientation--lg--vertical .lg-card-hero-image__cover-image, .lg-orientation.lg-orientation--lg--reverse-vertical .lg-card-hero-image__cover-image {\n    width: 100%;\n    height: var(--card-hero-image-height);\n  }\n}\n@media (min-width: 64rem) {\n  .lg-orientation.lg-orientation--lg--horizontal .lg-card-hero-image__cover-image, .lg-orientation.lg-orientation--lg--reverse-horizontal .lg-card-hero-image__cover-image {\n    width: var(--card-hero-image-width);\n    height: 100%;\n  }\n}\n@media (min-width: 80rem) {\n  .lg-orientation.lg-orientation--xl--vertical .lg-card-hero-image__cover-image, .lg-orientation.lg-orientation--xl--reverse-vertical .lg-card-hero-image__cover-image {\n    width: 100%;\n    height: var(--card-hero-image-height);\n  }\n}\n@media (min-width: 80rem) {\n  .lg-orientation.lg-orientation--xl--horizontal .lg-card-hero-image__cover-image, .lg-orientation.lg-orientation--xl--reverse-horizontal .lg-card-hero-image__cover-image {\n    width: var(--card-hero-image-width);\n    height: 100%;\n  }\n}\n@media (min-width: 90rem) {\n  .lg-orientation.lg-orientation--xxl--vertical .lg-card-hero-image__cover-image, .lg-orientation.lg-orientation--xxl--reverse-vertical .lg-card-hero-image__cover-image {\n    width: 100%;\n    height: var(--card-hero-image-height);\n  }\n}\n@media (min-width: 90rem) {\n  .lg-orientation.lg-orientation--xxl--horizontal .lg-card-hero-image__cover-image, .lg-orientation.lg-orientation--xxl--reverse-horizontal .lg-card-hero-image__cover-image {\n    width: var(--card-hero-image-width);\n    height: 100%;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);