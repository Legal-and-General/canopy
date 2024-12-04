(self.webpackChunk_legal_and_general_canopy=self.webpackChunk_legal_and_general_canopy||[]).push([[7589],{"./projects/canopy/src/lib/heading/heading.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>LgHeadingComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var heading_componentngResource=__webpack_require__("./projects/canopy/src/lib/heading/heading.component.scss?ngResource"),heading_componentngResource_default=__webpack_require__.n(heading_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let LgHeadingComponent=class LgHeadingComponent{static#_=this.propDecorators={level:[{type:core.Input}]}};LgHeadingComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-heading",template:'\x3c!--https://github.com/angular/angular/issues/7795--\x3e\n\n<ng-template #transclude><ng-content></ng-content></ng-template>\n\n<h1 *ngIf="+level === 1">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h1>\n<h2 *ngIf="+level === 2">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h2>\n<h3 *ngIf="+level === 3">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h3>\n<h4 *ngIf="+level === 4">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h4>\n<h5 *ngIf="+level === 5">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h5>\n<h6 *ngIf="+level === 6">\n  <ng-container *ngTemplateOutlet="transclude"></ng-container>\n</h6>\n',encapsulation:core.ViewEncapsulation.None,host:{class:"lg-heading"},standalone:!0,imports:[common.NgIf,common.NgTemplateOutlet],styles:[heading_componentngResource_default()]})],LgHeadingComponent)},"./projects/canopy/src/lib/carousel/docs/carousel.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,autoPlayEnabledCarousel:()=>autoPlayEnabledCarousel,default:()=>carousel_stories,defaultCarousel:()=>defaultCarousel,loopModeEnabledCarousel:()=>loopModeEnabledCarousel});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var carousel_componentngResource=__webpack_require__("./projects/canopy/src/lib/carousel/carousel.component.scss?ngResource"),carousel_componentngResource_default=__webpack_require__.n(carousel_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js"),defer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/defer.js"),interval=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/interval.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),withLatestFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),icons_interface=__webpack_require__("./projects/canopy/src/lib/icon/icons.interface.ts"),icon_registry=__webpack_require__("./projects/canopy/src/lib/icon/icon.registry.ts"),icon_component=__webpack_require__("./projects/canopy/src/lib/icon/icon.component.ts"),heading_component=__webpack_require__("./projects/canopy/src/lib/heading/heading.component.ts");var carousel_item_componentngResource=__webpack_require__("./projects/canopy/src/lib/carousel/carousel-item/carousel-item.component.scss?ngResource"),carousel_item_componentngResource_default=__webpack_require__.n(carousel_item_componentngResource);let LgCarouselItemComponent=class LgCarouselItemComponent{constructor(element){this.element=element,this.class=!0,this.role="tabpanel",this.selected=!1}get itemContent(){return this.element.nativeElement.innerHTML}static#_=this.ctorParameters=()=>[{type:core.ElementRef}];static#_2=this.propDecorators={class:[{type:core.HostBinding,args:["class.lg-carousel-item"]}],role:[{type:core.HostBinding,args:["attr.role"]}],selected:[{type:core.HostBinding,args:["attr.aria-selected"]}]}};LgCarouselItemComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-carousel-item",template:"<ng-content></ng-content>\n",encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[carousel_item_componentngResource_default()]})],LgCarouselItemComponent);var auto_play_componentngResource=__webpack_require__("./projects/canopy/src/lib/carousel/auto-play/auto-play.component.scss?ngResource"),auto_play_componentngResource_default=__webpack_require__.n(auto_play_componentngResource);let LgAutoplayComponent=class LgAutoplayComponent{constructor(element,iconRegistry){this.element=element,this.iconRegistry=iconRegistry,this.class=!0,this.iconRegistry.registerIcons([icons_interface.$pJ,icons_interface.juP])}static#_=this.ctorParameters=()=>[{type:core.ElementRef},{type:icon_registry.g}];static#_2=this.propDecorators={pause:[{type:core.Input}],class:[{type:core.HostBinding,args:["class.lg-carousel-autoplay"]}]}};LgAutoplayComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-auto-play",template:'<button\n  class="lg-carousel-autoplay__btn lg-carousel-autoplay__btn--pause"\n  *ngIf="!pause.value"\n  (click)="pause.next(true)"\n  type="button"\n>\n  <span class="lg-visually-hidden">Stop Animation</span>\n  <lg-icon name="pause-spot"></lg-icon>\n</button>\n<button\n  class="lg-carousel-autoplay__btn lg-carousel-autoplay__btn--play"\n  *ngIf="pause.value"\n  (click)="pause.next(false)"\n  type="button"\n>\n  <span class="lg-visually-hidden">Start Animation</span>\n  <lg-icon name="play-spot"></lg-icon>\n</button>\n',encapsulation:core.ViewEncapsulation.None,standalone:!0,imports:[common.NgIf,icon_component.A],styles:[auto_play_componentngResource_default()]})],LgAutoplayComponent);let LgCarouselComponent=class LgCarouselComponent{constructor(cd,iconRegistry){this.cd=cd,this.iconRegistry=iconRegistry,this.unsubscribe=new Subject.B,this.selectedItemIndexSet$=new BehaviorSubject.t(0),this.pause=new BehaviorSubject.t(!1),this.loopMode=!1,this.slideDuration=500,this.autoPlay=!1,this.autoPlayDelay=2e3,this.carouselItems=new core.QueryList,this.iconRegistry.registerIcons([icons_interface.$14,icons_interface.Ov1])}pauseCarousel(){this.pause.next(!0)}playCarousel(){this.pause.next(!1)}selectCarouselItem(index){this.selectedItemIndexSet$.next(index),this.selectedItem=this.carouselItems.get(index),this.selectedItemContent=this.selectedItem.itemContent,this.carouselItems.forEach((carouselItem=>{carouselItem.selected=!1})),this.selectedItem.selected=!0,this.cd.detectChanges()}nextCarouselItem(){this.selectedItemIndex===this.carouselItemCount-1?this.selectCarouselItem(0):this.selectCarouselItem(this.selectedItemIndex+1)}previousCarouselItem(){0===this.selectedItemIndex?this.selectCarouselItem(this.carouselItemCount-1):this.selectCarouselItem(this.selectedItemIndex-1)}setAutoPlayInterval(){this.pausableTimer$=(0,defer.v)((()=>(0,interval.Y)(this.autoPlayDelay).pipe((0,takeUntil.Q)(this.unsubscribe),(0,withLatestFrom.E)(this.pause),(0,filter.p)((([,paused])=>!paused)),(0,map.T)((()=>this.nextCarouselItem()))))),this.pausableTimer$.subscribe(),this.cd.detectChanges()}ngAfterContentInit(){this.selectedItemIndexSet$.pipe((0,takeUntil.Q)(this.unsubscribe)).subscribe((itemIndex=>{this.selectedItemIndex=itemIndex})),this.carouselItemCount=this.carouselItems.length,this.selectCarouselItem(0),this.autoPlay&&this.setAutoPlayInterval()}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef},{type:icon_registry.g}];static#_2=this.propDecorators={description:[{type:core.Input}],headingLevel:[{type:core.Input}],loopMode:[{type:core.Input}],slideDuration:[{type:core.Input}],autoPlay:[{type:core.Input}],autoPlayDelay:[{type:core.Input}],carouselItems:[{type:core.ContentChildren,args:[LgCarouselItemComponent,{read:LgCarouselItemComponent}]}]}};LgCarouselComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lg-carousel",template:'<section class="lg-carousel" [attr.aria-labelledby]="description">\n  <lg-heading [level]="headingLevel" class="lg-carousel__heading lg-visually-hidden">{{\n    description\n  }}</lg-heading>\n  <lg-auto-play *ngIf="autoPlay" [pause]="pause"></lg-auto-play>\n  <div\n    class="lg-carousel__active-content lg-visually-hidden"\n    aria-atomic="true"\n    aria-live="polite"\n    [innerHTML]="selectedItemContent"\n  ></div>\n  <div\n    class="lg-carousel__wrapper"\n    [style.width.%]="100 * carouselItemCount"\n    [style.left.%]="-100 * selectedItemIndex"\n    [style.transition]="\'left \' + slideDuration / 1000 + \'s\'"\n  >\n    <ng-content></ng-content>\n  </div>\n\n  <div class="lg-carousel__navigation" role="tablist">\n    <button\n      role="tab"\n      class="lg-carousel__button"\n      (click)="previousCarouselItem()"\n      [disabled]="!loopMode && selectedItemIndex === 0"\n    >\n      <span class="lg-visually-hidden">Previous {{ description }} item</span>\n      <span class="lg-carousel__button__disk lg-carousel--centered">\n        <lg-icon name="chevron-left"></lg-icon>\n      </span>\n    </button>\n    <button\n      role="tab"\n      class="lg-carousel__button lg-carousel--centered"\n      (click)="selectCarouselItem(i)"\n      *ngFor="let item of carouselItems; let i = index"\n      [tabindex]="i === selectedItemIndex ? 0 : -1"\n      [attr.aria-selected]="i === selectedItemIndex"\n    >\n      <span class="lg-visually-hidden">{{ description }} {{ i + 1 }}</span>\n      <span class="lg-visually-hidden" *ngIf="i === selectedItemIndex">(selected)</span>\n      <span\n        class="lg-carousel__bullet"\n        [ngClass]="{ \'lg-carousel__bullet--active\': i === selectedItemIndex }"\n      ></span>\n      <svg\n        class="lg-carousel__button-timer"\n        *ngIf="\n          autoPlay &&\n          selectedItemIndex === carouselItemCount - 1 &&\n          i === 0 &&\n          !pause.value\n        "\n      >\n        <circle\n          class="lg-carousel__button-timer__circle"\n          [style.animation-duration.s]="autoPlayDelay / 1000"\n          r="18"\n          cx="20"\n          cy="20"\n        ></circle>\n      </svg>\n      <svg\n        class="lg-carousel__button-timer"\n        *ngIf="autoPlay && i === selectedItemIndex + 1 && !pause.value"\n      >\n        <circle\n          class="lg-carousel__button-timer__circle"\n          [style.animation-duration.s]="autoPlayDelay / 1000"\n          r="18"\n          cx="20"\n          cy="20"\n        ></circle>\n      </svg>\n    </button>\n    <button\n      role="tab"\n      class="lg-carousel__button"\n      (click)="nextCarouselItem()"\n      [disabled]="!loopMode && selectedItemIndex === carouselItemCount - 1"\n    >\n      <span class="lg-visually-hidden">Next {{ description }} item</span>\n      <span class="lg-carousel__button__disk lg-carousel--centered">\n        <lg-icon name="chevron-right"></lg-icon>\n      </span>\n    </button>\n  </div>\n</section>\n',encapsulation:core.ViewEncapsulation.None,changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[heading_component.v,common.NgIf,LgAutoplayComponent,icon_component.A,common.NgFor,common.NgClass],styles:[carousel_componentngResource_default()]})],LgCarouselComponent);const carousel_stories={title:"Components/Carousel/[DEPRECATED]/Examples",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,LgCarouselComponent,icon_component.A,LgAutoplayComponent,LgCarouselItemComponent]})],parameters:{docs:{description:{component:"\nCarousels allow customers to quickly navigate through grouped sections of content.\n\n## Usage\n~~~js\n@NgModule({\n  ...\n  imports: [ ..., LgCarouselModule ],\n})\n~~~\n\n## Inputs\n\n| Name                  | Description                                                                                              |  Type   |  Default  | Required |\n| --------------------- | -------------------------------------------------------------------------------------------------------- | :-----: | :-------: | :------: |\n| ``loopMode``      | Allows the carousel to navigation to loop when the first or last item is active.                         | boolean |   false   |   No     |\n| ``slideDuration`` | Duration in milliseconds of the transition between slides.                                               | number  |   500     |   No     |\n| ``description``   | Text used to describe the carousel content for screen readers. This is visually hidden.                  | string  | undefined |   Yes    |\n| ``headingLevel``  | The heading level of the description: ``1``, ``2``, ``3``, ``4``, ``5``, ``6``   | number  | undefined |   Yes    |\n| ``autoPlay``      | Enables auto play mode when set to true.                                                                 | boolean |   false   |   No     |\n| ``autoPlayDelay`` | Delay time in milliseconds to switch to next slide when autoPlay mode is set to true.                    | number  |   2000    |   No     |\n\n`PlayCarousel` and `PauseCarousel` methods can be exposed by targeting the Carousel with `ViewChild` decorators.\n"}}},argTypes:{headingLevel:{options:["1","2","3","4","5","6"],description:"The visually hidden heading level for the carousel.",table:{type:{summary:["1","2","3","4","5","6"]}},control:{type:"select"}},description:{description:"The visually hidden text used to describe the carousel content for screen readers.",table:{type:{summary:"string"}}},slideDuration:{control:{type:"range",min:0,max:5e3,step:100},description:"Duration in milliseconds of the transition between slides.",table:{type:{summary:"number"},defaultValue:{summary:500}}},loopMode:{description:"Allows the carousel navigation to loop when the first or last item is active.",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},autoPlayDelay:{description:"Delay time in milliseconds to switch to next slide when autoPlay mode is set to true.",control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:2e3}}},autoPlay:{description:"Enables auto play mode when set to true.",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},carouselItems='\n  <lg-carousel-item style="background-color: #028844; color: #FFFFFF">\n    <h3>Carousel item 1</h3>\n    <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>\n    <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>\n  </lg-carousel-item>\n\n  <lg-carousel-item style="background-color: #0076D6; color: #FFFFFF">\n    <h3>Carousel item 2</h3>\n    <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>\n    <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>\n  </lg-carousel-item>\n\n  <lg-carousel-item style="background-color: #028844; color: #FFFFFF">\n    <h3>Carousel item 3</h3>\n    <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>\n    <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>\n  </lg-carousel-item>\n\n  <lg-carousel-item style="background-color: #0076D6; color: #FFFFFF">\n    <h3>Carousel item 4</h3>\n    <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>\n    <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>\n  </lg-carousel-item>\n\n  <lg-carousel-item style="background-color: #0076D6; color: #FFFFFF">\n    <h3>Carousel item 5</h3>\n    <p>Carousel items scale vertically to the largest item in the carousel and scale horizontally to the width of the parent container.</p>\n    <p>Carousels are built to work with varied content sizes but will work best if the content of each carousel item is of a similar size</p>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maiores, dolor suscipit ullam omnis corrupti laboriosam, amet, rem fugiat id deleniti ipsum possimus. At assumenda, asperiores dolorem temporibus quaerat libero quos blanditiis quod in? Magni laborum tempora, laudantium facilis ut sunt totam beatae repellat doloribus blanditiis sed repellendus maiores necessitatibus iste ex quod voluptate? Nesciunt, libero officiis labore molestias enim doloribus id assumenda dicta numquam fuga velit reiciendis quae praesentium soluta eaque exercitationem? Ullam iste culpa accusantium tenetur repellendus sit sunt error nisi dicta deleniti cum amet, voluptates soluta et laudantium quis.</p>\n  </lg-carousel-item>\n',template=`\n  <h1>[DEPRECATED]</h1>\n  <lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration" [loopMode]="loopMode" [autoPlayDelay]="autoPlayDelay" [autoPlay]="autoPlay">${carouselItems}</lg-carousel>\n`,defaultTemplate=`\n  <h1>[DEPRECATED]</h1>\n  <lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration">${carouselItems}</lg-carousel>\n`,defaultStory=args=>({props:args,template}),defaultCarousel=defaultStory.bind({});defaultCarousel.storyName="Standard",defaultCarousel.args={headingLevel:2,description:"Example carousel",slideDuration:500,loopMode:null,autoPlayDelay:null,autoPlay:null},defaultCarousel.parameters={docs:{source:{code:defaultTemplate}}};const loopEnabledTemplate=`\n  <h1>[DEPRECATED]</h1>\n  <lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration" [loopMode]="loopMode">${carouselItems}</lg-carousel>\n`,loopModeEnabledCarousel=defaultStory.bind({});loopModeEnabledCarousel.storyName="Loop enabled",loopModeEnabledCarousel.args={headingLevel:2,description:"Example carousel",slideDuration:500,loopMode:!0,autoPlayDelay:null,autoPlay:null},loopModeEnabledCarousel.parameters={docs:{source:{code:loopEnabledTemplate}}};const autoPlayEnabledTemplate=`\n  <h1>[DEPRECATED]</h1>\n  <lg-carousel [description]="description" [headingLevel]="headingLevel" [slideDuration]="slideDuration" [autoPlayDelay]="5000" [autoPlay]="true">${carouselItems}</lg-carousel>\n`,autoPlayEnabledCarousel=defaultStory.bind({});autoPlayEnabledCarousel.storyName="Auto play enabled",autoPlayEnabledCarousel.args={headingLevel:2,description:"Example carousel",slideDuration:500,loopMode:null,autoPlayDelay:5e3,autoPlay:!0},autoPlayEnabledCarousel.parameters={docs:{source:{code:autoPlayEnabledTemplate}}},defaultCarousel.parameters={...defaultCarousel.parameters,docs:{...defaultCarousel.parameters?.docs,source:{originalSource:"(args: LgCarouselComponent) => ({\n  props: args,\n  template: template\n})",...defaultCarousel.parameters?.docs?.source}}},loopModeEnabledCarousel.parameters={...loopModeEnabledCarousel.parameters,docs:{...loopModeEnabledCarousel.parameters?.docs,source:{originalSource:"(args: LgCarouselComponent) => ({\n  props: args,\n  template: template\n})",...loopModeEnabledCarousel.parameters?.docs?.source}}},autoPlayEnabledCarousel.parameters={...autoPlayEnabledCarousel.parameters,docs:{...autoPlayEnabledCarousel.parameters?.docs,source:{originalSource:"(args: LgCarouselComponent) => ({\n  props: args,\n  template: template\n})",...autoPlayEnabledCarousel.parameters?.docs?.source}}};const __namedExportsOrder=["defaultCarousel","loopModeEnabledCarousel","autoPlayEnabledCarousel"]},"./projects/canopy/src/lib/carousel/auto-play/auto-play.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-carousel-autoplay {\n  position: absolute;\n  right: var(--space-sm);\n  top: var(--space-sm);\n  z-index: var(--z-index-carousel-autoplay);\n}\n.lg-carousel-autoplay__btn {\n  background-color: transparent;\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  font-size: var(--text-fs-3-size);\n  height: var(--space-xxl);\n  padding: 0;\n  width: var(--space-xxl);\n}\n.lg-carousel-autoplay__btn:focus-visible {\n  outline: 0 !important;\n  box-shadow: 0 0 0 var(--inner-focus-width) var(--default-inner-focus-color), 0 0 0 var(--outer-focus-width) var(--default-focus-color);\n}\n.lg-carousel-autoplay__btn .lg-icon {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.lg-carousel-autoplay__btn .lg-icon svg {\n  fill: var(--color-white);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/carousel/carousel-item/carousel-item.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-carousel-item {\n  padding: var(--component-padding);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/carousel/carousel.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*\n  $bg-color: background color of the element.\n  $color: colour of the outline.\n  Sets the focus outline inside the element, by using multiple box shadows\n*/\n/*\n  $breakpoint: string value for the breakpoint screen size.\n  Creates a mixin which allows breakpoints to be added to css blocks\n*/\n.lg-carousel {\n  overflow: hidden;\n  position: relative;\n}\n.lg-carousel__button-timer {\n  position: absolute;\n  width: var(--space-xl);\n  height: var(--space-xl);\n  transform: rotateY(-180deg) rotateZ(-90deg) rotateX(180deg);\n}\n.lg-carousel__button-timer__circle {\n  stroke-dasharray: calc(7 * var(--space-unit));\n  stroke-dashoffset: 0;\n  stroke-linecap: round;\n  stroke-width: calc(0.125 * var(--space-unit));\n  stroke: var(--carousel-active-bullet-color);\n  fill: none;\n  animation-name: countdown;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n}\n@keyframes countdown {\n  from {\n    stroke-dashoffset: 7rem;\n  }\n  to {\n    stroke-dashoffset: 0rem;\n  }\n}\n.lg-carousel__wrapper {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}\n.lg-carousel__navigation {\n  padding-top: var(--space-sm);\n  display: flex;\n  justify-content: center;\n}\n.lg-carousel--centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.lg-carousel__button {\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  width: var(--space-xl);\n  height: var(--space-xl);\n  cursor: pointer;\n  position: relative;\n}\n.lg-carousel__button:focus-visible {\n  outline: none;\n}\n.lg-carousel__button__disk {\n  width: var(--space-xl);\n  height: var(--space-xl);\n  border-radius: 100%;\n}\n.lg-carousel__button:hover:not([disabled]) .lg-carousel__button__disk {\n  background-color: var(--carousel-nav-background-color);\n}\n.lg-carousel__button[disabled] {\n  cursor: default;\n}\n.lg-carousel__bullet {\n  width: var(--space-xxs);\n  height: var(--space-xxs);\n  background-color: var(--carousel-bullet-color);\n  display: block;\n  border-radius: 100%;\n}\n.lg-carousel__bullet--active {\n  width: var(--space-xs);\n  height: var(--space-xs);\n  background-color: var(--carousel-active-bullet-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/canopy/src/lib/heading/heading.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".lg-heading[class*=lg-margin],\n.lg-heading[class*=lg-padding] {\n  display: block;\n}\n.lg-heading[class*=lg-margin] > h1,\n.lg-heading[class*=lg-margin] h2,\n.lg-heading[class*=lg-margin] h3,\n.lg-heading[class*=lg-margin] h4,\n.lg-heading[class*=lg-margin] h5,\n.lg-heading[class*=lg-margin] h6,\n.lg-heading[class*=lg-padding] > h1,\n.lg-heading[class*=lg-padding] h2,\n.lg-heading[class*=lg-padding] h3,\n.lg-heading[class*=lg-padding] h4,\n.lg-heading[class*=lg-padding] h5,\n.lg-heading[class*=lg-padding] h6 {\n  margin: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);