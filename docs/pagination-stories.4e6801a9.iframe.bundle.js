(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[4623,9326],{"./projects/canopy/src/lib/spacing/margin/margin.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LgMarginDirective});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_spacing_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/canopy/src/lib/spacing/spacing.service.ts");let LgMarginDirective=class LgMarginDirective{set lgMarginTop(margin){this.marginTopClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-top"),this.marginTopClasses)}set lgMarginRight(margin){this.marginRightClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-right"),this.marginRightClasses)}set lgMarginBottom(margin){this.marginBottomClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-bottom"),this.marginBottomClasses)}set lgMarginLeft(margin){this.marginLeftClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin-left"),this.marginLeftClasses)}set lgMarginHorizontal(margin){this.lgMarginLeft=margin,this.lgMarginRight=margin}set lgMarginVertical(margin){this.lgMarginTop=margin,this.lgMarginBottom=margin}set lgMargin(margin){this.marginClasses=this.toggleClasses(this.spacingService.createNewClasses(margin,"margin"),this.marginClasses)}constructor(renderer,hostElement,spacingService){this.renderer=renderer,this.hostElement=hostElement,this.spacingService=spacingService,this.marginTopClasses=[],this.marginRightClasses=[],this.marginBottomClasses=[],this.marginLeftClasses=[],this.marginClasses=[]}toggleClasses(newClasses,oldClasses){return oldClasses.length&&oldClasses.forEach((oldClass=>{this.renderer.removeClass(this.hostElement.nativeElement,oldClass)})),newClasses.forEach((newClass=>{this.renderer.addClass(this.hostElement.nativeElement,newClass)})),newClasses}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef},{type:_spacing_service__WEBPACK_IMPORTED_MODULE_1__.r}];static#_2=this.propDecorators={lgMarginTop:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginRight:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginBottom:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginLeft:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginHorizontal:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMarginVertical:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],lgMargin:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]}};LgMarginDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"\n    [lgMargin],\n    [lgMarginVertical],\n    [lgMarginHorizontal],\n    [lgMarginTop],\n    [lgMarginRight],\n    [lgMarginBottom],\n    [lgMarginLeft]\n  ",standalone:!0})],LgMarginDirective)},"./projects/canopy/src/lib/spacing/spacing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>SpacingService});var BreakpointValues,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");!function(BreakpointValues){BreakpointValues.xs="0",BreakpointValues.sm="20rem",BreakpointValues.md="48rem",BreakpointValues.lg="64rem",BreakpointValues.xl="80rem",BreakpointValues.xxl="90rem"}(BreakpointValues||(BreakpointValues={}));var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let DynamicStyleService=class DynamicStyleService{constructor(document){this.document=document,this.styleTag=null,this.selectors=[],this.mediaQueries={},this.addStyleTag()}addRules(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.filter((r=>!this.selectors.includes(r.selector))).map((r=>{this.selectors.push(r.selector),styleTagCache+=`.${r.selector}{${r.declaration}}`})),this.styleTag.innerHTML=styleTagCache}addRulesToMediaQuery(rules){let styleTagCache=this.styleTag.innerHTML.slice();rules.map((r=>{if(this.mediaQueries[r.breakpoint]||(styleTagCache+=this.createMediaQuery(r.breakpoint)),this.mediaQueries[r.breakpoint].includes(r.selector))return;this.mediaQueries[r.breakpoint].push(r.selector);const rule=`.${r.selector}{${r.declaration}}`;styleTagCache=this.insertRuleInsideMediaQuery(styleTagCache,r.breakpoint,rule,r.addAtStart)})),this.styleTag.innerHTML=styleTagCache}insertRuleInsideMediaQuery(cssString,breakpoint,rule,atStart=!1){const search=`@media(min-width:${breakpoint}){`;let index=cssString.indexOf(search);if(-1===index)return console.warn("Media query not found in string, cannot add rule."),cssString;if(index+=search.length,atStart)return cssString.substring(0,index)+`${rule}`+cssString.substring(index);let balance=0,pos=null;for(let i=index;i<cssString.length;i++){const char=cssString[i];if("{"===char?balance++:"}"===char&&balance--,-1===balance){pos=i;break}}return null===pos?(console.warn("Cannot add rule to media query in CSS string, invalid CSS string"),cssString):cssString.substring(0,pos)+`${rule}`+cssString.substring(pos)}addStyleTag(){this.styleTag=this.document.createElement("style"),this.styleTag.type="text/css",this.document.getElementsByTagName("head")[0].appendChild(this.styleTag)}createMediaQuery(breakpoint){if(!this.mediaQueries[breakpoint])return this.mediaQueries[breakpoint]=[],`@media(min-width:${breakpoint}){}`}static#_=this.ctorParameters=()=>[{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]}]};var SpacingValues;DynamicStyleService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],DynamicStyleService),function(SpacingValues){SpacingValues.none="0",SpacingValues.xxxs="0.25rem",SpacingValues.xxs="0.5rem",SpacingValues.xs="0.75rem",SpacingValues.sm="1rem",SpacingValues.md="1.5rem",SpacingValues.lg="2rem",SpacingValues.xl="2.5rem",SpacingValues.xxl="3rem",SpacingValues.xxxl="4.5rem",SpacingValues.xxxxl="9rem"}(SpacingValues||(SpacingValues={}));let SpacingService=class SpacingService{constructor(dynamicStyleService){this.dynamicStyleService=dynamicStyleService}createNewClasses(spacing,cssProperty){const newClasses=[],responsiveSpacingRules=[];if(!spacing)return[];if("object"==typeof spacing)Object.keys(spacing).forEach((key=>{const selector=`lg-${cssProperty.replace("-","__")}--${key}--${spacing[key]}`;responsiveSpacingRules.push({selector,declaration:`${cssProperty}:${SpacingValues[spacing[key]]}!important`,breakpoint:BreakpointValues[key]}),newClasses.push(selector)})),this.dynamicStyleService.addRulesToMediaQuery(responsiveSpacingRules);else{const selector=`lg-${cssProperty.replace("-","__")}--${spacing}`;this.dynamicStyleService.addRules([{selector,declaration:`${cssProperty}:${SpacingValues[spacing]}!important`}]),newClasses.push(selector)}return newClasses}static#_=this.ctorParameters=()=>[{type:DynamicStyleService}]};SpacingService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],SpacingService)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/canopy/src/lib/pagination/docs/pagination.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basicPagination:()=>basicPagination,default:()=>docs_pagination_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),pagination_stories=__webpack_require__("./projects/canopy/src/lib/pagination/docs/pagination.stories.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5jb250ZW50IHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgfQogICAg!./projects/canopy/src/lib/pagination/docs/pagination.stories.ts"),pagination_stories_default=__webpack_require__.n(pagination_stories),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");var pagination_componentngResource=__webpack_require__("./projects/canopy/src/lib/pagination/pagination.component.scss?ngResource"),pagination_componentngResource_default=__webpack_require__.n(pagination_componentngResource),icons_interface=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),icon_registry=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts"),icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts"),margin_directive=__webpack_require__("./projects/canopy/src/lib/spacing/margin/margin.directive.ts");let nextUniqueId=0,LgPaginationComponent=class LgPaginationComponent{get totalItems(){return this._totalItems}set totalItems(value){this._totalItems=value<0?0:value}get itemsPerPage(){return this._itemsPerPage}set itemsPerPage(value){this._itemsPerPage=value<1?1:value}get currentPage(){return this._currentPage}set currentPage(value){this._currentPage=value<1?1:value>this.numPages?this.numPages:value}get numPages(){return Math.ceil(this.totalItems/this.itemsPerPage)}get pages(){return[...Array(this.numPages).keys()].map((x=>x+1))}get label(){return`Showing ${this.startIndex+1}-${this.endIndex+1} of ${this.totalItems} results`}constructor(iconRegistry){this.iconRegistry=iconRegistry,this._itemsPerPage=10,this._totalItems=0,this._currentPage=1,this.startIndex=1,this.endIndex=this._itemsPerPage-1,this.class="lg-pagination",this.role="navigation",this.ariaLabel="Pagination Navigation",this.id="lg-pagination-"+nextUniqueId++,this.pageChanged=new core.EventEmitter,this.iconRegistry.registerIcons([icons_interface.$14,icons_interface.Ov1])}ngOnChanges(changes){changes.itemsPerPage&&this.goTo(this.currentPage,changes.itemsPerPage.firstChange),changes.totalItems&&this.goTo(1,changes.totalItems.firstChange),changes.currentPage&&this.goTo(changes.currentPage.currentValue,changes.currentPage.firstChange)}previous(){this.goTo(this.currentPage-1)}next(){this.goTo(this.currentPage+1)}goTo(pageNumber,silent=!1){pageNumber<1||pageNumber>this.numPages||(this.currentPage=pageNumber,this.startIndex=this.currentPage*this.itemsPerPage-this.itemsPerPage,this.endIndex=this.startIndex+this.itemsPerPage-1,this.endIndex>this.totalItems&&(this.endIndex=this.totalItems-1),silent||this.pageChanged.emit({pageNumber,startIndex:this.startIndex,endIndex:this.endIndex}))}static#_=this.ctorParameters=()=>[{type:icon_registry.g}];static#_2=this.propDecorators={class:[{type:core.HostBinding,args:["class"]}],role:[{type:core.HostBinding,args:["role"]}],ariaLabel:[{type:core.HostBinding,args:["attr.aria-label"]}],id:[{type:core.HostBinding,args:["id"]},{type:core.Input}],totalItems:[{type:core.Input}],itemsPerPage:[{type:core.Input}],currentPage:[{type:core.Input}],pageChanged:[{type:core.Output}]}};LgPaginationComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-pagination",template:'<ng-container *ngIf="pages.length > 1">\n  <ul>\n    <li>\n      <button\n        type="button"\n        class="lg-pagination__button lg-pagination__button--prevnext"\n        aria-label="Go to previous page"\n        lgMarginRight="xxs"\n        (click)="previous()"\n        [disabled]="currentPage === 1"\n      >\n        <lg-icon name="chevron-left"></lg-icon>\n      </button>\n    </li>\n    <li *ngFor="let page of pages">\n      <button\n        type="button"\n        class="lg-pagination__button"\n        lgMarginRight="xxs"\n        [attr.aria-label]="\'Go to page \' + page"\n        [attr.aria-current]="currentPage === page"\n        [class.lg-pagination__button--active]="currentPage === page"\n        (click)="goTo(page)"\n      >\n        {{ page }}\n      </button>\n    </li>\n    <li>\n      <button\n        type="button"\n        class="lg-pagination__button lg-pagination__button--prevnext"\n        aria-label="Go to next page"\n        (click)="next()"\n        [disabled]="currentPage === numPages"\n      >\n        <lg-icon name="chevron-right"></lg-icon>\n      </button>\n    </li>\n  </ul>\n  <div\n    aria-live="polite"\n    aria-atomic="true"\n    [attr.aria-label]="label"\n    class="lg-pagination__label lg-font-size-0-8"\n  >\n    {{label}}\n  </div>\n</ng-container>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.NgIf,margin_directive.X,icon_component.A,common.NgFor],styles:[pagination_componentngResource_default()]})],LgPaginationComponent);var table_component=__webpack_require__("./projects/canopy/src/lib/table/table/table.component.ts"),table_head_component=__webpack_require__("./projects/canopy/src/lib/table/table-head/table-head.component.ts"),table_row_component=__webpack_require__("./projects/canopy/src/lib/table/table-row/table-row.component.ts"),table_head_cell_component=__webpack_require__("./projects/canopy/src/lib/table/table-head-cell/table-head-cell.component.ts"),table_body_component=__webpack_require__("./projects/canopy/src/lib/table/table-body/table-body.component.ts"),table_cell_component=__webpack_require__("./projects/canopy/src/lib/table/table-cell/table-cell.component.ts");let PaginationStoryComponent=class PaginationStoryComponent{constructor(registry){this.registry=registry,this.totalItems=25,this.itemsPerPage=5,this.currentPage=1,this.allItems=[],this.pagedItems=[],this.registry.registerIcons([icons_interface.$14,icons_interface.Ov1])}ngOnInit(){this.allItems=this.getData(),this.pagedItems=this.getPagedData(0,this.itemsPerPage-1)}ngOnChanges(changes){changes.totalItems&&!changes.totalItems.firstChange&&(this.allItems=this.getData())}getData(){const result=[];for(let i=1;i<=this.totalItems;i++)result.push({id:i,name:`user ${i}`,email:`user${i}@gmail.com`});return result}getPagedData(startIndex,endIndex){return this.allItems.slice(startIndex,endIndex+1)}onPageChanged(pageData){this.pagedItems=this.getPagedData(pageData.startIndex,pageData.endIndex)}static#_=this.ctorParameters=()=>[{type:icon_registry.g}];static#_2=this.propDecorators={totalItems:[{type:core.Input}],itemsPerPage:[{type:core.Input}],currentPage:[{type:core.Input}]}};PaginationStoryComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-pagination-story",template:'\n    <div class="content">\n      <table lg-table [variant]="\'striped\'">\n        <thead lg-table-head>\n          <tr lg-table-row>\n            <th lg-table-head-cell>Id</th>\n            <th lg-table-head-cell>Name</th>\n            <th lg-table-head-cell>Email</th>\n          </tr>\n        </thead>\n        <tbody lg-table-body>\n          <tr lg-table-row *ngFor="let user of pagedItems">\n            <td lg-table-cell>{{ user.id }}</td>\n            <td lg-table-cell>{{ user.name }}</td>\n            <td lg-table-cell>{{ user.email }}</td>\n          </tr>\n        </tbody>\n      </table>\n      <lg-pagination\n        [totalItems]="allItems.length"\n        [itemsPerPage]="itemsPerPage"\n        [currentPage]="currentPage"\n        (pageChanged)="onPageChanged($event)"\n      ></lg-pagination>\n    </div>\n  ',standalone:!0,imports:[table_component.N,table_head_component.n,table_row_component.D,table_head_cell_component.J,table_body_component.z,table_cell_component.b,LgPaginationComponent,common.NgFor],styles:[pagination_stories_default()]})],PaginationStoryComponent);const docs_pagination_stories={title:"Components/Pagination (WIP)/Examples",component:LgPaginationComponent,decorators:[(0,dist.moduleMetadata)({imports:[PaginationStoryComponent]})],argTypes:{id:{description:"Optional id for the component. If none is specified then a unique id will be automatically generated",table:{type:{summary:"string"},defaultValue:{summary:"lg-pagination-[nextUniqueId]"}}},totalItems:{description:"The total number of items in the array being paged.",table:{type:{summary:"number"},defaultValue:{summary:0}}},itemsPerPage:{description:"The maximum number of items to show in each page.",table:{type:{summary:"number"},defaultValue:{summary:10}}},currentPage:{description:"The current page. This is usually controlled internally by the componment itself,  but can also be set externally.",table:{type:{summary:"number"},defaultValue:{summary:1}}},pageChanged:{table:{disable:!0}},goTo:{table:{disable:!0}},next:{table:{disable:!0}},previous:{table:{disable:!0}},ngOnChanges:{table:{disable:!0}},ariaLabel:{table:{disable:!0}},class:{table:{disable:!0}},role:{table:{disable:!0}}}},basicPagination=(args=>({props:args,template:'\n    <lg-pagination-story\n      [totalItems]="totalItems"\n      [itemsPerPage]="itemsPerPage"\n      [currentPage]="currentPage"\n    >\n    </lg-pagination-story>\n  '})).bind({});basicPagination.storyName="Basic paginiation",basicPagination.args={id:"lg-pagination-1",totalItems:25,itemsPerPage:5,currentPage:1},basicPagination.parameters={...basicPagination.parameters,docs:{...basicPagination.parameters?.docs,source:{originalSource:'(args: LgPaginationComponent) => ({\n  props: args,\n  template: `\n    <lg-pagination-story\n      [totalItems]="totalItems"\n      [itemsPerPage]="itemsPerPage"\n      [currentPage]="currentPage"\n    >\n    </lg-pagination-story>\n  `\n})',...basicPagination.parameters?.docs?.source}}};const __namedExportsOrder=["basicPagination"]},"./projects/canopy/src/lib/pagination/docs/pagination.stories.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIC5jb250ZW50IHsKICAgICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAgICAgfQogICAg!./projects/canopy/src/lib/pagination/docs/pagination.stories.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n      .content {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n      }\n    ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/pagination/pagination.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-pagination {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: var(--space-xxs);\n  row-gap: var(--space-sm);\n  --button-size: 2.75rem;\n}\n.lg-pagination ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n}\n.lg-pagination .lg-pagination__button {\n  width: var(--button-size);\n  height: var(--button-size);\n  border-width: 0;\n  border-radius: 50%;\n  font-size: var(--text-fs--8-size);\n  background-color: transparent;\n}\n.lg-pagination .lg-pagination__button:hover:not(:disabled) {\n  cursor: pointer;\n  background-color: var(--pagination-button-hover-bg-color);\n  color: var(--pagination-button-hover-color);\n}\n.lg-pagination .lg-pagination__button:focus-visible, .lg-pagination .lg-pagination__button:focus-visible:hover {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-pagination .lg-pagination__button.lg-pagination__button--prevnext:hover:not(:disabled) {\n  border-width: var(--border-width);\n  background-color: inherit;\n  border-color: var(--pagination-button-prevnext-hover-border-color);\n  color: var(--pagination-button-prevnext-hover-color);\n}\n.lg-pagination .lg-pagination__button.lg-pagination__button--active {\n  background-color: var(--pagination-button-active-bg-color);\n  color: var(--pagination-button-active-color);\n}\n.lg-pagination .lg-pagination__label {\n  width: 12.5rem;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);