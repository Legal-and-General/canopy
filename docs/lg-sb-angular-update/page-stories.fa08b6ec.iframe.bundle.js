(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[6666],{"./projects/canopy/src/lib/page/docs/page.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>page_stories,fullWidth:()=>fullWidth,fullWidthWithHero:()=>fullWidthWithHero,oneColumn:()=>oneColumn,twoColumns:()=>twoColumns});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),footer_stories=__webpack_require__("./projects/canopy/src/lib/footer/docs/footer.stories.ts"),hero_stories=__webpack_require__("./projects/canopy/src/lib/hero/docs/hero.stories.ts");var page_componentngResource=__webpack_require__("./projects/canopy/src/lib/page/page.component.scss?ngResource"),page_componentngResource_default=__webpack_require__.n(page_componentngResource);let LgPageComponent=class LgPageComponent{constructor(){this.class=!0}skipToMain(event,$element){event.preventDefault(),$element.focus()}static#_=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-page"]}]}};LgPageComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-page",template:'<a (click)="skipToMain($event, target)" class="lg-page__skip-link" href="#main">\n  Skip to main content\n</a>\n<ng-content select="[lg-header]"></ng-content>\n\n<main class="lg-page__main" id="main" role="main" tabindex="-1" #target>\n  <ng-content></ng-content>\n</main>\n\n<ng-content select="[lg-footer]"></ng-content>\n',encapsulation:core.ViewEncapsulation.None,standalone:!0,styles:[page_componentngResource_default()]})],LgPageComponent);var header_component=__webpack_require__("./projects/canopy/src/lib/header/header.component.ts"),header_logo_component=__webpack_require__("./projects/canopy/src/lib/header/header-logo/header-logo.component.ts"),card_component=__webpack_require__("./projects/canopy/src/lib/card/card.component.ts"),card_content_component=__webpack_require__("./projects/canopy/src/lib/card/card-content/card-content.component.ts"),footer_component=__webpack_require__("./projects/canopy/src/lib/footer/footer.component.ts"),footer_nav_component=__webpack_require__("./projects/canopy/src/lib/footer/footer-nav/footer-nav.component.ts"),footer_nav_item_component=__webpack_require__("./projects/canopy/src/lib/footer/footer-nav-item/footer-nav-item.component.ts"),footer_logo_component=__webpack_require__("./projects/canopy/src/lib/footer/footer-logo/footer-logo.component.ts"),footer_copyright_component=__webpack_require__("./projects/canopy/src/lib/footer/footer-copyright/footer-copyright.component.ts"),grid_container_directive=__webpack_require__("./projects/canopy/src/lib/grid/grid-container.directive.ts"),grid_row_directive=__webpack_require__("./projects/canopy/src/lib/grid/grid-row.directive.ts"),grid_col_directive=__webpack_require__("./projects/canopy/src/lib/grid/grid-col.directive.ts"),margin_directive=__webpack_require__("./projects/canopy/src/lib/spacing/margin/margin.directive.ts"),hero_component=__webpack_require__("./projects/canopy/src/lib/hero/hero.component.ts"),hero_header_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-header/hero-header.component.ts"),hero_content_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-content/hero-content.component.ts"),hero_card_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card/hero-card.component.ts"),hero_card_content_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-content/hero-card-content.component.ts"),hero_card_header_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-header/hero-card-header.component.ts"),hero_card_title_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-title/hero-card-title.component.ts"),hero_card_subtitle_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-subtitle/hero-card-subtitle.component.ts"),hero_card_notification_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-notification/hero-card-notification.component.ts"),hero_card_principle_data_point_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-principle-data-point/hero-card-principle-data-point.component.ts"),hero_card_principle_data_point_label_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-principle-data-point-label/hero-card-principle-data-point-label.component.ts"),hero_card_principle_data_point_value_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-principle-data-point-value/hero-card-principle-data-point-value.component.ts"),hero_card_data_point_list_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-data-point-list/hero-card-data-point-list.component.ts"),hero_card_data_point_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-data-point/hero-card-data-point.component.ts"),hero_card_data_point_label_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-data-point-label/hero-card-data-point-label.component.ts"),hero_card_data_point_value_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-data-point-value/hero-card-data-point-value.component.ts"),hero_card_footer_component=__webpack_require__("./projects/canopy/src/lib/hero/hero-card-footer/hero-card-footer.component.ts"),breadcrumb_component=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb.component.ts"),breadcrumb_item_component=__webpack_require__("./projects/canopy/src/lib/breadcrumb/breadcrumb-item/breadcrumb-item.component.ts"),icons_interface=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),icon_registry=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts"),icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");const createArgs=()=>({logo:"legal-and-general-logo.svg",logoAlt:"Company name",copyright:"© Some Company plc 2019",card1:"Leverage agile frameworks to provide a robust synopsis for high level\n    overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall\n    value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity\n    and empowerment.\n    ",card2:"Bring to the table win-win survival strategies to ensure proactive domination.\n    At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading\n    towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for\n    offshoring.",card3:"Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one\n    customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art\n    customer service.",primaryLinks:footer_stories.primaryLinks,secondaryLinks:footer_stories.secondaryLinks}),header='\n  <header lg-header>\n    <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>\n  </header>\n',footer='\n<footer lg-footer>\n  <lg-footer-nav variant="primary">\n    <lg-footer-nav-item *ngFor="let primaryLink of primaryLinks">\n      <a [href]="primaryLink.href" [id]="primaryLink.id" target="_blank">{{ primaryLink.text }}</a>\n    </lg-footer-nav-item>\n  </lg-footer-nav>\n\n  <lg-footer-nav variant="secondary">\n    <lg-footer-nav-item *ngFor="let secondaryLink of secondaryLinks">\n      <a [href]="secondaryLink.href" [id]="secondaryLink.id" target="_blank">{{ secondaryLink.text }}</a>\n    </lg-footer-nav-item>\n  </lg-footer-nav>\n\n  <lg-footer-logo [src]="logo" [alt]="logoAlt"></lg-footer-logo>\n\n  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>\n</footer>\n',fullWidthWithHeroTemplate=`\n<lg-page>\n  ${header}\n  <lg-hero [overlap]="overlap">\n    ${hero_stories.productHeroHTML}\n  </lg-hero>\n  <div lgContainer>\n    <div lgRow>\n      <div lgCol="12">\n        <lg-card lgMarginHorizontal="none">\n          <lg-card-content>\n            {{card1}} <br /><br />\n            {{card2}} <br /><br />\n            {{card3}}\n          </lg-card-content>\n        </lg-card>\n      </div>\n    </div>\n  </div>\n  ${footer}\n</lg-page>\n`;let FullWidthWithHeaderComponent=class FullWidthWithHeaderComponent{constructor(registry){this.registry=registry,this.registry.registerIcons([icons_interface.ki5,icons_interface.OOL])}static#_=this.ctorParameters=()=>[{type:icon_registry.g}];static#_2=this.propDecorators={overlap:[{type:core.Input}],logo:[{type:core.Input}],logoAlt:[{type:core.Input}],copyright:[{type:core.Input}],card1:[{type:core.Input}],card2:[{type:core.Input}],card3:[{type:core.Input}],primaryLinks:[{type:core.Input}],secondaryLinks:[{type:core.Input}]}};FullWidthWithHeaderComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-full-width-with-header",template:fullWidthWithHeroTemplate,standalone:!0,imports:[LgPageComponent,hero_component.X,hero_header_component.K,hero_content_component.W,hero_card_component.F,hero_card_content_component.c,hero_card_header_component.m,hero_card_title_component.T,hero_card_subtitle_component.t,hero_card_notification_component.m,hero_card_principle_data_point_component.Z,hero_card_principle_data_point_label_component.p,hero_card_principle_data_point_value_component.U,hero_card_data_point_list_component.n,hero_card_data_point_component.Z,hero_card_data_point_label_component.x,hero_card_data_point_value_component.e,hero_card_footer_component.Q,breadcrumb_component.s,breadcrumb_item_component.n,icon_component.A,grid_container_directive.I,grid_row_directive.h,grid_col_directive.$,card_component.F,card_content_component.m,header_component.o,header_logo_component.J,footer_component.u,footer_component.u,footer_nav_component.l,footer_nav_item_component.Q,footer_logo_component.T,footer_copyright_component.P,common.NgIf,common.NgFor,margin_directive.X]})],FullWidthWithHeaderComponent);const page_stories={title:"Templates/Page/Examples",component:LgPageComponent,decorators:[(0,dist.moduleMetadata)({imports:[header_component.o,footer_component.u,LgPageComponent,grid_container_directive.I,grid_row_directive.h,grid_col_directive.$,margin_directive.X,FullWidthWithHeaderComponent,header_logo_component.J,card_component.F,card_content_component.m,margin_directive.X,footer_component.u,footer_nav_component.l,footer_nav_item_component.Q,footer_logo_component.T,footer_copyright_component.P,common.NgIf,common.NgFor]})],parameters:{layout:"fullscreen"},argTypes:{logo:{table:{category:"header"}},logoAlt:{table:{category:"header"}},copyright:{table:{category:"footer"}},primaryLinks:{table:{category:"footer"}},secondaryLinks:{table:{category:"footer"}},card1:{table:{category:"content"}},card2:{table:{category:"content"}},card3:{table:{category:"content"}},class:{table:{disable:!0}},skipToMain:{table:{disable:!0}}}},oneColumnTemplate=`\n<lg-page>\n  ${header}\n  <div lgContainer>\n    <div lgRow>\n      <div\n          lgCol="12"\n          lgColSm="10"\n          lgColSmOffset="1"\n          lgColMd="8"\n          lgColMdOffset="2"\n          lgColLg="6"\n          lgColLgOffset="3">\n        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card1}}</lg-card-content></lg-card>\n        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card2}}</lg-card-content></lg-card>\n        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card3}}</lg-card-content></lg-card>\n      </div>\n    </div>\n  </div>\n  ${footer}\n</lg-page>\n`,oneColumn=(args=>({props:args,template:oneColumnTemplate})).bind({});oneColumn.storyName="One column",oneColumn.args=createArgs(),oneColumn.parameters={docs:{source:{code:oneColumnTemplate}}};const twoColumnsTemplate=`\n<lg-page>\n  ${header}\n  <div lgContainer>\n    <div lgRow>\n      <div lgCol="12" lgColMd="8" lgColLg="5" lgColLgOffset="2">\n        <lg-card lgMarginHorizontal="none">\n          <lg-card-content>\n            {{card1}}\n          </lg-card-content>\n        </lg-card>\n      </div>\n      <div lgCol="12" lgColMd="4" lgColLg="3">\n        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card2}}</lg-card-content></lg-card>\n        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card3}}</lg-card-content></lg-card>\n      </div>\n    </div>\n  </div>\n  ${footer}\n</lg-page>\n`,twoColumns=(args=>({props:args,template:twoColumnsTemplate})).bind({});twoColumns.storyName="Two columns",twoColumns.args=createArgs(),twoColumns.parameters={docs:{source:{code:twoColumnsTemplate}}};const fullWidthTemplate=`\n<lg-page>\n  ${header}\n  <div lgContainer>\n    <div lgRow>\n      <div lgCol="12">\n        <lg-card lgMarginHorizontal="none">\n          <lg-card-content>\n            {{card1}} <br /><br />\n            {{card2}} <br /><br />\n            {{card3}}\n          </lg-card-content>\n        </lg-card>\n      </div>\n    </div>\n  </div>\n  ${footer}\n</lg-page>\n`,fullWidth=(args=>({props:args,template:fullWidthTemplate})).bind({});fullWidth.storyName="Full width",fullWidth.args=createArgs(),fullWidth.parameters={docs:{source:{code:fullWidthTemplate}}};const fullWidthWithHero=(args=>({props:args,template:'<lg-full-width-with-header\n    [overlap]="overlap"\n    [logo]="logo"\n    [logoAlt]="logoAlt"\n    [copyright]="copyright"\n    [card1]="card1"\n    [card2]="card2"\n    [card3]="card3"\n    [primaryLinks]="primaryLinks"\n    [secondaryLinks]="secondaryLinks"\n  ></lg-full-width-with-header>'})).bind({});fullWidthWithHero.storyName="Full width with Hero",fullWidthWithHero.args={...createArgs(),overlap:2},fullWidthWithHero.argTypes={overlap:{description:"The amount that the page content overlaps the hero component (rem)",table:{category:"other"}}},fullWidthWithHero.parameters={docs:{source:{code:fullWidthWithHeroTemplate}}},oneColumn.parameters={...oneColumn.parameters,docs:{...oneColumn.parameters?.docs,source:{originalSource:"(args: LgPageComponent) => ({\n  props: args,\n  template: oneColumnTemplate\n})",...oneColumn.parameters?.docs?.source}}},twoColumns.parameters={...twoColumns.parameters,docs:{...twoColumns.parameters?.docs,source:{originalSource:"(args: LgPageComponent) => ({\n  props: args,\n  template: twoColumnsTemplate\n})",...twoColumns.parameters?.docs?.source}}},fullWidth.parameters={...fullWidth.parameters,docs:{...fullWidth.parameters?.docs,source:{originalSource:"(args: LgPageComponent) => ({\n  props: args,\n  template: fullWidthTemplate\n})",...fullWidth.parameters?.docs?.source}}},fullWidthWithHero.parameters={...fullWidthWithHero.parameters,docs:{...fullWidthWithHero.parameters?.docs,source:{originalSource:'(args: LgPageComponent) => ({\n  props: args,\n  template: `<lg-full-width-with-header\n    [overlap]="overlap"\n    [logo]="logo"\n    [logoAlt]="logoAlt"\n    [copyright]="copyright"\n    [card1]="card1"\n    [card2]="card2"\n    [card3]="card3"\n    [primaryLinks]="primaryLinks"\n    [secondaryLinks]="secondaryLinks"\n  ></lg-full-width-with-header>`\n})',...fullWidthWithHero.parameters?.docs?.source}}};const __namedExportsOrder=["oneColumn","twoColumns","fullWidth","fullWidthWithHero"]},"./projects/canopy/src/lib/page/page.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-page {\n  display: flex;\n  flex-direction: column;\n  background: var(--page-bg-color);\n  min-height: 100%;\n  max-width: 100vw;\n}\n\n.lg-page__main {\n  padding: var(--page-vertical-padding) 0;\n  flex: 1 0 auto;\n}\n\n.lg-page--hero .lg-page__main {\n  padding-top: 0;\n}\n\n.lg-page__skip-link {\n  background: var(--color-white);\n  border: 0 !important;\n  clip: rect(0 0 0 0) !important;\n  height: auto !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 0.0625em !important;\n  white-space: nowrap !important;\n}\n.lg-page__skip-link:focus-visible, .lg-page__skip-link:active {\n  left: 0;\n  clip: auto !important;\n  width: auto !important;\n  height: auto !important;\n  z-index: var(--z-index-skip-link);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);