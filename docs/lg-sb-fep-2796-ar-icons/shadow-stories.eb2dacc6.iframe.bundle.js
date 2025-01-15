"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[69191],{"./projects/canopy/src/lib/shadow/shadow.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>LgShadowDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let LgShadowDirective=class LgShadowDirective{constructor(){this.class=!0}static#_=this.propDecorators={class:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.lg-shadow"]}]}};LgShadowDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[lgShadow]",standalone:!0})],LgShadowDirective)},"./projects/canopy/src/lib/shadow/docs/shadow.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,shadowStory:()=>shadowStory});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_shadow_directive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/shadow/shadow.directive.ts"),_card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/canopy/src/lib/card/card.component.ts"),_card__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/card/card-content/card-content.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Helpers/Directives/Shadow/Examples",component:_shadow_directive__WEBPACK_IMPORTED_MODULE_1__.v,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_card__WEBPACK_IMPORTED_MODULE_2__.F,_card__WEBPACK_IMPORTED_MODULE_3__.m]})],parameters:{backgrounds:{default:"White Smoke"}},argTypes:{class:{table:{disable:!0}}}},template="\n<lg-card lgShadow>\n  <lg-card-content>\n    Look, I have a shadow\n  </lg-card-content>\n</lg-card>\n",shadowStory=(args=>({props:args,template})).bind({});shadowStory.storyName="Shadow",shadowStory.parameters={docs:{source:{code:template}}},shadowStory.parameters={...shadowStory.parameters,docs:{...shadowStory.parameters?.docs,source:{originalSource:"(args: LgShadowDirective) => ({\n  props: args,\n  template\n})",...shadowStory.parameters?.docs?.source}}};const __namedExportsOrder=["shadowStory"]}}]);