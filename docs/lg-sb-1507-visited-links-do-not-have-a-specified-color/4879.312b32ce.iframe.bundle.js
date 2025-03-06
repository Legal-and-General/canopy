(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[4879],{"./projects/canopy/src/lib/footer/footer-copyright/footer-copyright.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>LgFooterCopyrightComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var footer_copyright_componentngResource=__webpack_require__("./projects/canopy/src/lib/footer/footer-copyright/footer-copyright.component.scss?ngResource"),footer_copyright_componentngResource_default=__webpack_require__.n(footer_copyright_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgFooterCopyrightComponent=class LgFooterCopyrightComponent{};LgFooterCopyrightComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-footer-copyright",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-footer-copyright"},standalone:!0,styles:[footer_copyright_componentngResource_default()]})],LgFooterCopyrightComponent)},"./projects/canopy/src/lib/footer/footer-logo/footer-logo.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>LgFooterLogoComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var footer_logo_componentngResource=__webpack_require__("./projects/canopy/src/lib/footer/footer-logo/footer-logo.component.scss?ngResource"),footer_logo_componentngResource_default=__webpack_require__.n(footer_logo_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let LgFooterLogoComponent=class LgFooterLogoComponent{constructor(cdr){this.cdr=cdr,this.alt=""}ngAfterContentChecked(){this.class&&this.class!==this.currentClass&&(this.currentClass=this.class,this.cdr.detectChanges())}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={alt:[{type:core.Input}],src:[{type:core.Input}]}};LgFooterLogoComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-footer-logo",template:'<img [attr.alt]="alt" [attr.src]="src" [ngClass]="class" />\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-footer-logo"},standalone:!0,imports:[common.NgClass],styles:[footer_logo_componentngResource_default()]})],LgFooterLogoComponent)},"./projects/canopy/src/lib/footer/footer-nav-item/footer-nav-item.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>LgFooterNavItemComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var footer_nav_item_componentngResource=__webpack_require__("./projects/canopy/src/lib/footer/footer-nav-item/footer-nav-item.component.scss?ngResource"),footer_nav_item_componentngResource_default=__webpack_require__.n(footer_nav_item_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgFooterNavItemComponent=class LgFooterNavItemComponent{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}ngAfterContentChecked(){if(this.variant&&this.variant!==this.currentVariant){const hostEl=this.hostElement.nativeElement;this.currentVariant=this.variant,this.renderer.addClass(hostEl,`lg-footer-nav-item--${this.variant}`);const childEl=hostEl.firstElementChild;this.renderer.addClass(childEl,"lg-footer-action"),"BUTTON"===childEl.tagName?(this.renderer.addClass(childEl,"lg-footer-action--button"),this.renderer.setAttribute(childEl,"type","button")):"A"!==childEl.tagName&&"BUTTON"!==childEl.tagName&&console.error(`Unsupported tag: ${childEl.tagName}. lg-footer-nav-item only supports A and BUTTON.`)}}static#_=this.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}]};LgFooterNavItemComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-footer-nav-item",template:'<ng-content select="[lg-footer-action]"></ng-content>\n\n<ng-content></ng-content>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-footer-nav-item",role:"listitem"},standalone:!0,styles:[footer_nav_item_componentngResource_default()]})],LgFooterNavItemComponent)},"./projects/canopy/src/lib/footer/footer-nav/footer-nav.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>LgFooterNavComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var footer_nav_componentngResource=__webpack_require__("./projects/canopy/src/lib/footer/footer-nav/footer-nav.component.scss?ngResource"),footer_nav_componentngResource_default=__webpack_require__.n(footer_nav_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),footer_nav_item_component=__webpack_require__("./projects/canopy/src/lib/footer/footer-nav-item/footer-nav-item.component.ts");let LgFooterNavComponent=class LgFooterNavComponent{constructor(renderer,hostElement){this.renderer=renderer,this.hostElement=hostElement}ngOnInit(){const el=this.hostElement.nativeElement;this.renderer.addClass(el,`lg-footer-nav--${this.variant}`),this.renderer.setAttribute(el,"aria-labelledby",`lg-footer-links-${this.variant}`)}ngAfterViewChecked(){const footerNavItemLength=this.footerNavItemComponents?.toArray().length;footerNavItemLength&&footerNavItemLength!==this.currentFooterNavItemLength&&(this.currentFooterNavItemLength=footerNavItemLength,this.footerNavItemComponents.forEach((item=>item.variant=this.variant)))}static#_=this.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}];static#_2=this.propDecorators={variant:[{type:core.Input}],footerNavItemComponents:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>footer_nav_item_component.Q)),{descendants:!0}]}]}};LgFooterNavComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-footer-nav",template:'<h2 class="lg-visually-hidden" id="lg-footer-links-{{ variant }}">{{ variant }} links</h2>\n<ul class="lg-footer-nav__list--{{ variant }}">\n  <ng-content select="lg-footer-nav-item"></ng-content>\n</ul>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-footer-nav",role:"navigation"},standalone:!0,styles:[footer_nav_componentngResource_default()]})],LgFooterNavComponent)},"./projects/canopy/src/lib/footer/footer.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>LgFooterComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var footer_componentngResource=__webpack_require__("./projects/canopy/src/lib/footer/footer.component.scss?ngResource"),footer_componentngResource_default=__webpack_require__.n(footer_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),footer_logo_component=__webpack_require__("./projects/canopy/src/lib/footer/footer-logo/footer-logo.component.ts");let LgFooterComponent=class LgFooterComponent{ngAfterContentInit(){this.footerLogos.forEach(((footerLogo,i)=>{footerLogo.class=0===i?"lg-footer-logo__img":"lg-footer-logo__second-img"}))}static#_=this.propDecorators={footerLogos:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>footer_logo_component.T)),{descendants:!0}]}]}};LgFooterComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[lg-footer]",template:'<div class="lg-footer__links">\n  <ng-content select="lg-footer-nav"></ng-content>\n</div>\n\n<div class="lg-footer__org">\n  <div class="lg-footer__logos-wrapper">\n    <ng-content select="lg-footer-logo"></ng-content>\n  </div>\n\n  <ng-content select="lg-footer-copyright"></ng-content>\n</div>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-footer",role:"contentinfo"},standalone:!0,styles:[footer_componentngResource_default()]})],LgFooterComponent)},"./projects/canopy/src/lib/footer/docs/footer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,coBrandedFooter:()=>coBrandedFooter,compactFooter:()=>compactFooter,default:()=>__WEBPACK_DEFAULT_EXPORT__,primaryLinks:()=>primaryLinks,secondaryLinks:()=>secondaryLinks,standardFooter:()=>standardFooter});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_footer_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/footer/footer.component.ts"),_footer_nav_footer_nav_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/footer/footer-nav/footer-nav.component.ts"),_footer_nav_item_footer_nav_item_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/footer/footer-nav-item/footer-nav-item.component.ts"),_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/canopy/src/lib/footer/footer-logo/footer-logo.component.ts"),_footer_copyright_footer_copyright_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/canopy/src/lib/footer/footer-copyright/footer-copyright.component.ts");const primaryLinks=[{id:"primary-link-1",text:"My account",href:"https://app.somecompany.com"},{id:"primary-link-2",text:"My quotes",href:"https://somecompany.com/quotes"},{id:"primary-link-3",text:"Support centre",href:"https://somecompany.com/support"},{id:"primary-link-4",text:"Contact",href:"https://somecompany.com/contact"}],secondaryLinks=[{id:"secondary-link-1",text:"Accessibility",href:"https://somecompany.com/accessibility"},{id:"secondary-link-2",text:"Security",href:"https://somecompany.com/security"},{id:"secondary-link-3",text:"Legal and regulatory",href:"https://somecompany.com/legal"},{id:"secondary-button-4",text:"Cookie settings",isButton:!0,class:"secondary-button-class"}],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Footer/Examples",excludeStories:["primaryLinks","secondaryLinks"],component:_footer_component__WEBPACK_IMPORTED_MODULE_1__.u,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_footer_component__WEBPACK_IMPORTED_MODULE_1__.u,_footer_nav_footer_nav_component__WEBPACK_IMPORTED_MODULE_2__.l,_footer_nav_item_footer_nav_item_component__WEBPACK_IMPORTED_MODULE_3__.Q,_footer_logo_footer_logo_component__WEBPACK_IMPORTED_MODULE_4__.T,_footer_copyright_footer_copyright_component__WEBPACK_IMPORTED_MODULE_5__.P,_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf,_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor]})],parameters:{layout:"fullscreen"},argTypes:{logo:{description:"A url link to the logo."},logoAlt:{description:"alt text to display alongside the logo.",table:{defaultValue:{summary:""}}},copyright:{description:"Copyright text to display in footer."},primaryLinks:{description:"The primary footer links."},secondaryLinks:{description:"The secondary footer links."},ngAfterContentInit:{table:{disable:!0}},footerLogos:{table:{disable:!0}}}},template='\n<footer lg-footer>\n  <lg-footer-nav variant="primary">\n    <lg-footer-nav-item *ngFor="let primaryLink of primaryLinks">\n      <a [href]="primaryLink.href" [id]="primaryLink.id" target="_blank">{{ primaryLink.text }}</a>\n    </lg-footer-nav-item>\n  </lg-footer-nav>\n\n  <lg-footer-nav variant="secondary">\n    <lg-footer-nav-item *ngFor="let secondaryLink of secondaryLinks">\n      <a *ngIf="!secondaryLink.isButton; else button" [href]="secondaryLink.href" [id]="secondaryLink.id" target="_blank">{{ secondaryLink.text }}</a>\n\n      <ng-template #button>\n        <button [class]="secondaryLink.class" [id]="secondaryLink.id">{{ secondaryLink.text }}</button>\n      </ng-template>\n    </lg-footer-nav-item>\n  </lg-footer-nav>\n\n  <lg-footer-logo [src]="logo" [alt]="logoAlt"></lg-footer-logo>\n\n  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>\n</footer>\n',standardFooter=(args=>({props:args,template})).bind({});standardFooter.storyName="Standard",standardFooter.args={logo:"legal-and-general-logo.svg",logoAlt:"Company name",copyright:"© Some Company plc 2018",secondaryLinks,primaryLinks},standardFooter.parameters={docs:{source:{code:template}}},standardFooter.argTypes={secondaryLogo:{table:{disable:!0}},secondaryLogoAlt:{table:{disable:!0}}};const compactTemplate='\n<footer lg-footer>\n  <lg-footer-nav variant="secondary">\n    <lg-footer-nav-item *ngFor="let secondaryLink of secondaryLinks">\n      <a [href]="secondaryLink.href" [id]="secondaryLink.id" target="_blank">{{ secondaryLink.text }}</a>\n    </lg-footer-nav-item>\n  </lg-footer-nav>\n\n  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>\n</footer>\n',compactFooter=(args=>({props:args,template:compactTemplate})).bind({});compactFooter.storyName="Compact",compactFooter.args={copyright:"© Some Company plc 2018",secondaryLinks},compactFooter.parameters={docs:{source:{code:compactTemplate}}},compactFooter.argTypes={primaryLinks:{table:{disable:!0}},logo:{table:{disable:!0}},logoAlt:{table:{disable:!0}},secondaryLogo:{table:{disable:!0}},secondaryLogoAlt:{table:{disable:!0}}};const coBrandedTemplate='\n<footer lg-footer>\n  <lg-footer-nav variant="primary">\n    <lg-footer-nav-item *ngFor="let primaryLink of primaryLinks">\n      <a [href]="primaryLink.href" [id]="primaryLink.id" target="_blank">{{ primaryLink.text }}</a>\n    </lg-footer-nav-item>\n  </lg-footer-nav>\n\n  <lg-footer-nav variant="secondary">\n    <lg-footer-nav-item *ngFor="let secondaryLink of secondaryLinks">\n      <a [href]="secondaryLink.href" [id]="secondaryLink.id" target="_blank">{{ secondaryLink.text }}</a>\n    </lg-footer-nav-item>\n  </lg-footer-nav>\n\n  <lg-footer-logo [src]="logo" [alt]="logoAlt"></lg-footer-logo>\n  <lg-footer-logo [src]="secondaryLogo" [alt]="secondaryLogoAlt"></lg-footer-logo>\n\n  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>\n</footer>\n',coBrandedFooter=(args=>({props:args,template:coBrandedTemplate})).bind({});coBrandedFooter.storyName="Co-branded",coBrandedFooter.args={logo:"legal-and-general-logo.svg",logoAlt:"Company name",secondaryLogo:"dummy-logo.svg",secondaryLogoAlt:"Secondary company name",copyright:"© Some Company plc 2018",secondaryLinks,primaryLinks},coBrandedFooter.parameters={docs:{source:{code:coBrandedTemplate}}},standardFooter.parameters={...standardFooter.parameters,docs:{...standardFooter.parameters?.docs,source:{originalSource:"(args: LgFooterComponent) => ({\n  props: args,\n  template\n})",...standardFooter.parameters?.docs?.source}}},compactFooter.parameters={...compactFooter.parameters,docs:{...compactFooter.parameters?.docs,source:{originalSource:"(args: LgFooterComponent) => ({\n  props: args,\n  template: compactTemplate\n})",...compactFooter.parameters?.docs?.source}}},coBrandedFooter.parameters={...coBrandedFooter.parameters,docs:{...coBrandedFooter.parameters?.docs,source:{originalSource:"(args: LgFooterComponent) => ({\n  props: args,\n  template: coBrandedTemplate\n})",...coBrandedFooter.parameters?.docs?.source}}};const __namedExportsOrder=["primaryLinks","secondaryLinks","standardFooter","compactFooter","coBrandedFooter"]},"./projects/canopy/src/lib/footer/footer-copyright/footer-copyright.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-footer-copyright {\n  display: block;\n  font-size: var(--text-fs--6-size);\n  line-height: var(--text-fs--6-line-height);\n  font-weight: var(--text-fs--6-weight);\n}\n@media (min-width: 64rem) {\n  .lg-footer-copyright {\n    text-align: right;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/footer/footer-logo/footer-logo.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-footer-logo {\n  display: contents;\n}\n.lg-footer-logo__img, .lg-footer-logo__second-img {\n  height: auto;\n  max-height: 100%;\n}\n.lg-footer-logo__img {\n  width: var(--footer-logo-width);\n}\n@media (min-width: 64rem) {\n  .lg-footer-logo__img {\n    width: var(--footer-logo-width-lg);\n  }\n}\n.lg-footer-logo__second-img {\n  margin-left: var(--space-sm);\n  width: var(--footer-second-logo-width);\n}\n@media (min-width: 64rem) {\n  .lg-footer-logo__second-img {\n    margin-left: var(--space-lg);\n    width: var(--footer-second-logo-width-lg);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/footer/footer-nav-item/footer-nav-item.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-footer-nav-item {\n  display: block;\n}\n.lg-footer-nav-item--primary {\n  margin-bottom: var(--space-xs);\n  list-style-type: none;\n}\n.lg-footer-nav-item--primary:last-child {\n  margin-bottom: 0;\n}\n@media (min-width: 64rem) {\n  .lg-footer-nav-item--primary {\n    margin-top: var(--space-sm);\n    margin-bottom: 0;\n    flex: 0 0 50%;\n  }\n}\n.lg-footer-nav-item--secondary {\n  margin-bottom: var(--space-sm);\n  list-style-type: none;\n  font-size: var(--text-fs--6-size);\n  line-height: var(--text-fs--6-line-height);\n  font-weight: var(--text-fs--6-weight);\n}\n.lg-footer-nav-item--secondary:last-child {\n  margin-bottom: 0;\n}\n@media (min-width: 64rem) {\n  .lg-footer-nav-item--secondary {\n    display: inline-block;\n    margin-right: var(--space-xs);\n    margin-bottom: 0;\n  }\n  .lg-footer-nav-item--secondary:not(:first-child):before {\n    content: "";\n    display: inline-block;\n    width: var(--border-width);\n    height: var(--space-xxs);\n    background-color: var(--footer-text-color);\n    margin-right: var(--space-xs);\n  }\n}\n\n.lg-footer-action {\n  text-decoration: underline;\n  border-bottom: 0;\n  padding: 0;\n  text-decoration: none;\n  color: var(--footer-text-color);\n}\n.lg-footer-action:hover {\n  border-bottom: 0;\n  box-shadow: none;\n  background-color: transparent;\n  color: inherit;\n}\n.lg-footer-action:active, .lg-footer-action:focus-visible, .lg-footer-action:focus-visible:hover {\n  background-color: transparent;\n  color: inherit;\n}\n.lg-footer-action:focus-visible, .lg-footer-action:focus-visible:hover {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-footer-action:hover {\n  text-decoration: underline;\n}\n.lg-footer-action:hover:focus-visible {\n  text-decoration: none;\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-footer-action--button {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  font-size: inherit;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/footer/footer-nav/footer-nav.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-footer-nav {\n  display: block;\n}\n.lg-footer-nav--primary {\n  margin-bottom: var(--component-margin);\n}\n@media (min-width: 64rem) {\n  .lg-footer-nav--primary {\n    margin-right: var(--space-xl);\n  }\n}\n.lg-footer-nav__list--primary {\n  margin-bottom: var(--space-lg);\n  margin-left: 0;\n}\n@media (min-width: 64rem) {\n  .lg-footer-nav__list--primary {\n    margin-top: var(--space-md);\n    display: flex;\n    flex-wrap: wrap;\n  }\n}\n.lg-footer-nav__list--secondary {\n  margin-bottom: var(--space-xxl);\n  margin-left: 0;\n}\n@media (min-width: 64rem) {\n  .lg-footer-nav__list--secondary {\n    margin-bottom: 0;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/footer/footer.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-footer {\n  background-color: var(--footer-bg-color);\n  padding: var(--space-xxl) var(--space-md) var(--space-md);\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 64rem) {\n  .lg-footer {\n    flex-direction: row;\n    padding: var(--space-lg);\n  }\n}\n@media (min-width: 64rem) {\n  .lg-footer__links {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    flex: 1 0 auto;\n    margin-bottom: 0;\n  }\n}\n.lg-footer__logos-wrapper {\n  display: flex;\n  align-items: center;\n  margin-bottom: var(--component-margin);\n}\n@media (min-width: 64rem) {\n  .lg-footer__org {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    flex: 0 1 auto;\n    align-items: flex-end;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);