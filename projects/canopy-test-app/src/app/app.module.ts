import { NgModule } from '@angular/core';
import {
  lgBrandIconCalendar,
  LgBrandIconRegistry,
  lgIconAdd,
  lgIconArrowDown,
  lgIconClose,
  lgIconFilter,
  LgIconRegistry,
  lgIconRepeat,
  lgIconSearch,
  lgIconSecureMessaging,
  lgIconCheckmark,
} from 'canopy';

@NgModule(/* TODO(standalone-migration): clean up removed NgModule class manually.
{
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserModule,
        LgAccordionModule,
        LgAlertModule,
        LgBrandIconModule,
        LgBreadcrumbModule,
        LgButtonModule,
        LgCardModule,
        LgCarouselModule,
        LgCheckboxGroupModule,
        LgDataPointModule,
        LgDateFieldModule,
        LgDetailsModule,
        LgFilterContainerModule,
        LgFooterModule,
        LgGridModule,
        LgHeaderModule,
        LgHeadingModule,
        LgHeroModule,
        LgHintModule,
        LgIconModule,
        LgInputModule,
        LgListWithIconsModule,
        LgMarginModule,
        LgPaddingModule,
        LgPageModule,
        LgPaginationModule,
        LgPaddingModule,
        LgPrimaryMessageModule,
        LgPromoCardModule,
        LgQuickActionModule,
        LgRadioModule,
        LgSelectModule,
        LgSeparatorModule,
        LgSideNavModule,
        LgSortCodeModule,
        LgSpinnerModule,
        LgTabsModule,
        LgToggleModule,
        LgLinkMenuModule,
        StoryContentComponent,
    ],
    bootstrap: [AppComponent],
} */)
export class AppModule {
  constructor(
    private iconRegistry: LgIconRegistry,
    private brandIconRegistry: LgBrandIconRegistry,
  ) {
    this.iconRegistry.registerIcons([
      lgIconAdd,
      lgIconArrowDown,
      lgIconClose,
      lgIconSearch,
      lgIconRepeat,
      lgIconSecureMessaging,
      lgIconFilter,
      lgIconCheckmark,
    ]);

    this.brandIconRegistry.registerBrandIcon([ lgBrandIconCalendar ]);
  }
}
