"use strict";(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[3524],{"./projects/canopy/src/lib/feature-toggle/docs/feature-toggle.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>feature_toggle_stories,featureToggle:()=>featureToggle});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js");const togglesInjectable=new core.InjectionToken("Toggles configuration"),togglesOptionsInjectable=new core.InjectionToken("Toggles options");var Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");let LgFeatureToggleService=class LgFeatureToggleService{constructor(toggles$){this.toggles$=toggles$}static#_=this.ctorParameters=()=>[{type:Observable.c,decorators:[{type:core.Inject,args:[togglesInjectable]}]}]};LgFeatureToggleService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],LgFeatureToggleService);let LgFeatureToggleDirective=class LgFeatureToggleDirective{constructor(lgFeatureToggleService,templateRef,viewContainer,options){this.lgFeatureToggleService=lgFeatureToggleService,this.templateRef=templateRef,this.viewContainer=viewContainer,this.options=options}ngOnInit(){this.subscription=this.lgFeatureToggleService.toggles$.pipe((0,tap.M)((()=>this.viewContainer.clear())),(0,filter.p)((toggles=>void 0===toggles[this.lgFeatureToggle]&&!this.isDefaultHideSet()||toggles[this.lgFeatureToggle]))).subscribe((()=>{this.viewContainer.createEmbeddedView(this.templateRef)}))}setOptions(options){this.options=options}ngOnDestroy(){this.subscription?.unsubscribe()}isDefaultHideSet(){return this.options&&this.options.defaultHide}static#_=this.ctorParameters=()=>[{type:LgFeatureToggleService},{type:core.TemplateRef},{type:core.ViewContainerRef},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[togglesOptionsInjectable]}]}];static#_2=this.propDecorators={lgFeatureToggle:[{type:core.Input}]}};var LgFeatureToggleModule_1;LgFeatureToggleDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[lgFeatureToggle]",standalone:!0})],LgFeatureToggleDirective);let LgFeatureToggleModule=LgFeatureToggleModule_1=class LgFeatureToggleModule{static forRoot(toggles,optionsInjectable){return{ngModule:LgFeatureToggleModule_1,providers:[LgFeatureToggleService,{provide:togglesInjectable,useFactory:toggles.useFactory,deps:toggles.deps},{provide:togglesOptionsInjectable,useValue:optionsInjectable}]}}};LgFeatureToggleModule=LgFeatureToggleModule_1=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[LgFeatureToggleDirective],providers:[LgFeatureToggleService],exports:[LgFeatureToggleDirective]})],LgFeatureToggleModule);var card_component=__webpack_require__("./projects/canopy/src/lib/card/card.component.ts"),card_content_component=__webpack_require__("./projects/canopy/src/lib/card/card-content/card-content.component.ts");const feature_toggle_stories={title:"Helpers/Directives/Feature toggle/Examples",component:LgFeatureToggleDirective,decorators:[(0,dist.moduleMetadata)({imports:[card_component.F,card_content_component.m,LgFeatureToggleModule.forRoot({useFactory:()=>(0,of.of)({firstFeature:!0,secondFeature:!1,thirdFeature:!0,fourthFeature:!1})},{defaultHide:!0})]})],parameters:{backgrounds:{default:"Super Blue"}},argTypes:{lgFeatureToggle:{table:{disable:!0}},ngOnInit:{table:{disable:!0}},ngOnDestroy:{table:{disable:!0}},setOptions:{table:{disable:!0}},subscription:{table:{disable:!0}}}},template="\n<lg-card *lgFeatureToggle=\"'firstFeature'\"><lg-card-content>Feature 1 showing</lg-card-content></lg-card>\n<lg-card *lgFeatureToggle=\"'secondFeature'\"><lg-card-content>Feature 2 not showing</lg-card-content></lg-card>\n<lg-card *lgFeatureToggle=\"'thirdFeature'\"><lg-card-content>Feature 3 showing</lg-card-content></lg-card>\n<lg-card *lgFeatureToggle=\"'fourthFeature'\"><lg-card-content>Feature 4 not showing</lg-card-content></lg-card>\n",featureToggle=(args=>({component:LgFeatureToggleDirective,props:args,template})).bind({});featureToggle.storyName="Feature Toggle",featureToggle.parameters={docs:{source:{code:template}}},featureToggle.parameters={...featureToggle.parameters,docs:{...featureToggle.parameters?.docs,source:{originalSource:"(args: LgFeatureToggleDirective) => ({\n  component: LgFeatureToggleDirective,\n  props: args,\n  template\n})",...featureToggle.parameters?.docs?.source}}};const __namedExportsOrder=["featureToggle"]}}]);