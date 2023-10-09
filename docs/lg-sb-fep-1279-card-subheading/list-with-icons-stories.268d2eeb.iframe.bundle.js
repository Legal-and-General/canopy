(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[6512,2581],{"./projects/canopy/src/lib/list-with-icons/docs/list-with-icons.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{darkForegroundListWithIcons:()=>darkForegroundListWithIcons,default:()=>docs_list_with_icons_stories,internalColouredListWithIcons:()=>internalColouredListWithIcons,lightForegroundListWithIcons:()=>lightForegroundListWithIcons,neutralForegroundListWithIcons:()=>neutralForegroundListWithIcons});var _class,LgListWithIconsComponent_1,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),list_with_icons_stories=__webpack_require__("./projects/canopy/src/lib/list-with-icons/docs/list-with-icons.stories.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zbSk7CiAgICAgIH0KICAgIA%3D%3D!./projects/canopy/src/lib/list-with-icons/docs/list-with-icons.stories.ts"),list_with_icons_stories_default=__webpack_require__.n(list_with_icons_stories),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),icon_module=__webpack_require__("./projects/canopy/src/lib/icon/icon.module.ts"),list_with_icons_componentngResource=__webpack_require__("./projects/canopy/src/lib/list-with-icons/list-with-icons.component.scss?ngResource"),list_with_icons_componentngResource_default=__webpack_require__.n(list_with_icons_componentngResource);let LgListWithIconsComponent=((_class=class LgListWithIconsComponent{set variant(variant){this._variant&&this.renderer.removeClass(this.hostElement.nativeElement,`lg-list-with-icons--${this.variant}`),variant&&this.renderer.addClass(this.hostElement.nativeElement,`lg-list-with-icons--${variant}`),this._variant=variant}get variant(){return this._variant}constructor(hostElement,renderer){this.hostElement=hostElement,this.renderer=renderer}ngAfterContentInit(){this.variant=this.variant||"neutral-foreground",this.nestedListWithIconsComponents.forEach((nestedListWithIconsComponent=>{nestedListWithIconsComponent.variant=this.variant}))}}).ctorParameters=()=>[{type:core.ElementRef},{type:core.Renderer2}],_class.propDecorators={variant:[{type:core.Input}],nestedListWithIconsComponents:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>LgListWithIconsComponent_1)),{descendants:!0}]}]},LgListWithIconsComponent_1=_class);LgListWithIconsComponent=LgListWithIconsComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"[lg-list-with-icons]",template:'<ng-content select="[lg-list-with-icons-item]"></ng-content>',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-list-with-icons"},styles:[list_with_icons_componentngResource_default()]})],LgListWithIconsComponent);var list_with_icons_item_component_class,list_with_icons_item_componentngResource=__webpack_require__("./projects/canopy/src/lib/list-with-icons/list-with-icons-item/list-with-icons-item.component.scss?ngResource"),list_with_icons_item_componentngResource_default=__webpack_require__.n(list_with_icons_item_componentngResource);let LgListWithIconsItemComponent=((list_with_icons_item_component_class=class LgListWithIconsItemComponent{constructor(hostElement){this.hostElement=hostElement}ngAfterViewInit(){this.updateIconColour(this.iconColour)}ngOnChanges({iconColour}){iconColour&&this.updateIconColour(iconColour.currentValue)}updateIconColour(colour){const el=this.hostElement.nativeElement.getElementsByTagName("lg-icon")[0];if(el){const isCssVar=colour?.startsWith("--");el.style.color=isCssVar?`var(${colour})`:colour}}}).ctorParameters=()=>[{type:core.ElementRef}],list_with_icons_item_component_class.propDecorators={iconName:[{type:core.Input}],iconColour:[{type:core.Input}]},list_with_icons_item_component_class);LgListWithIconsItemComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"[lg-list-with-icons-item]",template:'<lg-icon [name]="iconName"></lg-icon>\n<div class="lg-list-with-icons-item__content">\n  <ng-content></ng-content>\n</div>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,host:{class:"lg-list-with-icons-item"},styles:[list_with_icons_item_componentngResource_default()]})],LgListWithIconsItemComponent);const components=[LgListWithIconsComponent,LgListWithIconsItemComponent];let LgListWithIconsModule=class LgListWithIconsModule{};LgListWithIconsModule=(0,tslib_es6.gn)([(0,core.NgModule)({imports:[common.CommonModule,icon_module.r],declarations:[...components],exports:[...components]})],LgListWithIconsModule);var list_with_icons_stories_class,icons_interface=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),icon_registry=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts");let ListWithIconsWrapperComponent=((list_with_icons_stories_class=class ListWithIconsWrapperComponent{get bgColour(){switch(this.variant){case"dark-foreground":return"var(--color-dandelion-yellow)";case"light-foreground":return"var(--color-super-blue)";default:return"var(--color-white)"}}constructor(registry){this.registry=registry,this.registry.registerIcons([icons_interface.lgIconDoc,icons_interface.lgIconCheckmark,icons_interface.lgIconClose])}}).ctorParameters=()=>[{type:icon_registry.v}],list_with_icons_stories_class.propDecorators={variant:[{type:core.Input}],listItems:[{type:core.Input}],colouredIcons:[{type:core.Input}],bgColour:[{type:core.HostBinding,args:["style.background-color"]}]},list_with_icons_stories_class);ListWithIconsWrapperComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"lg-list-with-icons-wrapper",template:'\n<ul lg-list-with-icons [variant]="variant">\n  <li lg-list-with-icons-item *ngFor="let item of listItems" [iconName]="item.iconName" [iconColour]="colouredIcons ? item.iconColour : null"\n  ><ng-container [ngTemplateOutlet]="item.isLink ? linkText : text" [ngTemplateOutletContext]="{text: item.text}"></ng-container>\n    <ul lg-list-with-icons *ngIf="item.children as children">\n      <li lg-list-with-icons-item *ngFor="let child of children" [iconName]="child.iconName" [iconColour]="colouredIcons ? child.iconColour : null"\n      ><ng-container [ngTemplateOutlet]="child.isLink ? linkText : text" [ngTemplateOutletContext]="{text: child.text}"></ng-container>\n      </li>\n    </ul>\n  </li>\n</ul>\n\n<ng-template #text let-text="text">{{ text }}</ng-template>\n<ng-template #linkText let-text="text"><a href="#">{{ text }}</a></ng-template>\n',styles:[list_with_icons_stories_default()]})],ListWithIconsWrapperComponent);const docs_list_with_icons_stories={title:"Components/List/Examples",decorators:[(0,dist.moduleMetadata)({declarations:[ListWithIconsWrapperComponent],imports:[LgListWithIconsModule,icon_module.r]})],parameters:{backgrounds:{disable:!0}},argTypes:{colouredIcons:{description:"Shows an example of coloured icons"},variant:{table:{disable:!0}},class:{table:{disable:!0}}}};const listWithIconsTemplate=args=>({props:args,template:'<lg-list-with-icons-wrapper [listItems]="listItems" [variant]="variant" [colouredIcons]="colouredIcons"></lg-list-with-icons-wrapper>'}),internalColouredListWithIcons=listWithIconsTemplate.bind({});internalColouredListWithIcons.storyName="Internal coloured icons",internalColouredListWithIcons.args={listItems:[{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 1"},{iconName:"close",iconColour:"--color-terracotta",text:"List item 2"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3",children:[{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3.1"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3.2",isLink:!0}]},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 4"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 5",isLink:!0}],colouredIcons:!0};const neutralForegroundListWithIcons=listWithIconsTemplate.bind({});neutralForegroundListWithIcons.storyName="List with icons - Neutral foreground",neutralForegroundListWithIcons.args={listItems:[{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 1"},{iconName:"close",iconColour:"--color-terracotta",text:"List item 2"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3",children:[{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3.1"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3.2",isLink:!0}]},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 4"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 5",isLink:!0}],colouredIcons:!1},neutralForegroundListWithIcons.parameters={docs:{source:{code:'\n<ul lg-list-with-icons>\n  <li lg-list-with-icons-item iconName="checkmark">List item 1</li>\n  <li lg-list-with-icons-item iconName="checkmark">List item 2</li>\n  <li lg-list-with-icons-item iconName="close">List item 3</li>\n</ul>\n      '}}};const darkForegroundListWithIcons=listWithIconsTemplate.bind({});darkForegroundListWithIcons.storyName="List with icons - Dark foreground",darkForegroundListWithIcons.args={variant:"dark-foreground",listItems:[{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 1"},{iconName:"close",iconColour:"--color-terracotta",text:"List item 2"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3",children:[{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3.1"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3.2",isLink:!0}]},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 4"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 5",isLink:!0}],colouredIcons:!1},darkForegroundListWithIcons.parameters={docs:{source:{code:'\n<ul lg-list-with-icons variant="dark-foreground">\n  <li lg-list-with-icons-item iconName="help">List item 1</li>\n  <li lg-list-with-icons-item iconName="idea">List item 2</li>\n  <li lg-list-with-icons-item iconName="house">List item 3</li>\n</ul>\n      '}}};const lightForegroundListWithIcons=listWithIconsTemplate.bind({});lightForegroundListWithIcons.storyName="List with icons - Light foreground",lightForegroundListWithIcons.args={variant:"light-foreground",listItems:[{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 1"},{iconName:"close",iconColour:"--color-terracotta",text:"List item 2"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3",children:[{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3.1"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 3.2",isLink:!0}]},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 4"},{iconName:"checkmark",iconColour:"--color-leafy-green",text:"List item 5",isLink:!0}],colouredIcons:!1},lightForegroundListWithIcons.argTypes={colouredIcons:{table:{disable:!0}}},lightForegroundListWithIcons.parameters={docs:{source:{code:'\n<ul lg-list-with-icons variant="light-foreground">\n  <li lg-list-with-icons-item iconName="doc">List item 1</li>\n  <li lg-list-with-icons-item iconName="doc">List item 2</li>\n  <li lg-list-with-icons-item iconName="doc">List item 3</li>\n</ul>\n      '}}}},"./projects/canopy/src/lib/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>LgIconModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts");let LgIconModule=class LgIconModule{};LgIconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],declarations:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r],exports:[_icon_component__WEBPACK_IMPORTED_MODULE_3__.r]})],LgIconModule)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/canopy/src/lib/list-with-icons/docs/list-with-icons.stories.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zbSk7CiAgICAgIH0KICAgIA%3D%3D!./projects/canopy/src/lib/list-with-icons/docs/list-with-icons.stories.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n      :host {\n        display: block;\n        padding: var(--space-sm);\n      }\n    ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/list-with-icons/list-with-icons-item/list-with-icons-item.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-list-with-icons-item {\n  display: list-item;\n  display: flex;\n  list-style: none;\n  margin-top: var(--space-sm);\n  margin-left: 0;\n}\n.lg-list-with-icons-item:first-child {\n  margin-top: 0;\n}\n.lg-list-with-icons-item .lg-icon {\n  margin-right: var(--space-sm);\n  height: 1.5em;\n  width: 1.5em;\n  min-width: 1.5em;\n  vertical-align: bottom;\n}\n.lg-list-with-icons-item .lg-list-with-icons > .lg-list-with-icons-item {\n  margin-top: var(--space-sm);\n  margin-left: calc(var(--space-md) * -1);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/list-with-icons/list-with-icons.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-list-with-icons {\n  margin-left: 0;\n}\n.lg-list-with-icons .lg-list-with-icons {\n  margin-bottom: 0;\n}\n.lg-list-with-icons--neutral-foreground {\n  color: var(--color-text);\n}\n.lg-list-with-icons--dark-foreground {\n  color: var(--color-text);\n}\n.lg-list-with-icons--dark-foreground a {\n  border-bottom: 0.125rem solid var(--dark-foreground-link-color);\n  color: var(--dark-foreground-link-color);\n  line-height: initial;\n  padding: 0 0.125rem;\n  text-decoration: none;\n}\n.lg-list-with-icons--dark-foreground a:hover, .lg-list-with-icons--dark-foreground a:hover:visited {\n  color: var(--dark-foreground-link-hover-color);\n  border-bottom: 0;\n  box-shadow: inset 0 -0.063rem 0 0 var(--dark-foreground-link-hover-color), 0 0.188rem 0 0 var(--dark-foreground-link-hover-color);\n}\n.lg-list-with-icons--dark-foreground a:visited {\n  color: var(--dark-foreground-link-visited-color);\n  border-color: var(--dark-foreground-link-visited-color);\n}\n.lg-list-with-icons--dark-foreground a:active {\n  background-color: var(--dark-foreground-link-active-bg-color);\n  border-bottom-color: var(--dark-foreground-link-active-color);\n  color: var(--dark-foreground-link-active-color);\n  outline: 0;\n}\n.lg-list-with-icons--dark-foreground a:focus-visible, .lg-list-with-icons--dark-foreground a:focus-visible:hover {\n  background-color: var(--dark-foreground-link-focus-bg-color);\n  border-bottom: 0;\n  color: var(--dark-foreground-link-focus-color);\n  outline: 0.063rem solid var(--dark-foreground-link-focus-bg-color);\n  outline-offset: 0;\n}\n.lg-list-with-icons--light-foreground {\n  color: var(--color-white);\n}\n.lg-list-with-icons--light-foreground a {\n  border-bottom: 0.125rem solid var(--light-foreground-link-color);\n  color: var(--light-foreground-link-color);\n  line-height: initial;\n  padding: 0 0.125rem;\n  text-decoration: none;\n}\n.lg-list-with-icons--light-foreground a:hover, .lg-list-with-icons--light-foreground a:hover:visited {\n  color: var(--light-foreground-link-hover-color);\n  border-bottom: 0;\n  box-shadow: inset 0 -0.063rem 0 0 var(--light-foreground-link-hover-color), 0 0.188rem 0 0 var(--light-foreground-link-hover-color);\n}\n.lg-list-with-icons--light-foreground a:visited {\n  color: var(--light-foreground-link-visited-color);\n  border-color: var(--light-foreground-link-visited-color);\n}\n.lg-list-with-icons--light-foreground a:active {\n  background-color: var(--light-foreground-link-active-bg-color);\n  border-bottom-color: var(--light-foreground-link-active-color);\n  color: var(--light-foreground-link-active-color);\n  outline: 0;\n}\n.lg-list-with-icons--light-foreground a:focus-visible, .lg-list-with-icons--light-foreground a:focus-visible:hover {\n  background-color: var(--light-foreground-link-focus-bg-color);\n  border-bottom: 0;\n  color: var(--light-foreground-link-focus-color);\n  outline: 0.063rem solid var(--light-foreground-link-focus-bg-color);\n  outline-offset: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);