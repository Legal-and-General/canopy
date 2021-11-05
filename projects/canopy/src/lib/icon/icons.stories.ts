import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { moduleMetadata, Story } from '@storybook/angular';

import { LgIconComponent } from './icon.component';
import { notes } from './icon.notes';
import { LgIconRegistry } from './icon.registry';
import * as iconSet from './icons.interface';

export const iconsArray: Array<iconSet.Icon> = [
  iconSet.lgIconAdd,
  iconSet.lgIconAlignCentre,
  iconSet.lgIconAlignLeft,
  iconSet.lgIconAlignRight,
  iconSet.lgIconAnalytics,
  iconSet.lgIconAnnouncement,
  iconSet.lgIconArrowDecreasing,
  iconSet.lgIconArrowDown,
  iconSet.lgIconArrowIncreasing,
  iconSet.lgIconArrowLeft,
  iconSet.lgIconArrowRight,
  iconSet.lgIconArrowUp,
  iconSet.lgIconAt,
  iconSet.lgIconAttach,
  iconSet.lgIconBlog,
  iconSet.lgIconBolt,
  iconSet.lgIconBookmarkFill,
  iconSet.lgIconBookmark,
  iconSet.lgIconCalculator,
  iconSet.lgIconCalendar,
  iconSet.lgIconCall,
  iconSet.lgIconCamera,
  iconSet.lgIconCaretDown,
  iconSet.lgIconCaretLeft,
  iconSet.lgIconCaretRight,
  iconSet.lgIconCaretUp,
  iconSet.lgIconCart,
  iconSet.lgIconChartBar,
  iconSet.lgIconChartDonut,
  iconSet.lgIconChartLine,
  iconSet.lgIconChartPie,
  iconSet.lgIconChatGroup,
  iconSet.lgIconChat,
  iconSet.lgIconCheckboxChecked,
  iconSet.lgIconCheckboxEmpty,
  iconSet.lgIconCheckboxIndeterminate,
  iconSet.lgIconCheckmarkSpotFill,
  iconSet.lgIconCheckmarkSpot,
  iconSet.lgIconCheckmark,
  iconSet.lgIconChevronDownFilled,
  iconSet.lgIconChevronDownSlim,
  iconSet.lgIconChevronDown,
  iconSet.lgIconChevronLeftCircle,
  iconSet.lgIconChevronLeftSlim,
  iconSet.lgIconChevronLeft,
  iconSet.lgIconChevronRightCircle,
  iconSet.lgIconChevronRightSlim,
  iconSet.lgIconChevronRight,
  iconSet.lgIconChevronUpFilled,
  iconSet.lgIconChevronUpSlim,
  iconSet.lgIconChevronUp,
  iconSet.lgIconCloseSpot,
  iconSet.lgIconClose,
  iconSet.lgIconCloud,
  iconSet.lgIconCode,
  iconSet.lgIconCollaborate,
  iconSet.lgIconCompass,
  iconSet.lgIconConnect,
  iconSet.lgIconConsole,
  iconSet.lgIconContributions,
  iconSet.lgIconCopy,
  iconSet.lgIconCount,
  iconSet.lgIconCouple,
  iconSet.lgIconCreditCard,
  iconSet.lgIconCrossmarkSpotFill,
  iconSet.lgIconCsv,
  iconSet.lgIconData,
  iconSet.lgIconDatabase,
  iconSet.lgIconDataset,
  iconSet.lgIconDelete,
  iconSet.lgIconDesktop,
  iconSet.lgIconDiagram,
  iconSet.lgIconDigg,
  iconSet.lgIconDoc,
  iconSet.lgIconDocumentAdd,
  iconSet.lgIconDocumentSubtract,
  iconSet.lgIconDocumentTasks,
  iconSet.lgIconDocument,
  iconSet.lgIconDownload,
  iconSet.lgIconDragHandle,
  iconSet.lgIconDrilldown,
  iconSet.lgIconEdit,
  iconSet.lgIconEditNote,
  iconSet.lgIconEmail,
  iconSet.lgIconErrorFill,
  iconSet.lgIconError,
  iconSet.lgIconEvent,
  iconSet.lgIconExitFill,
  iconSet.lgIconExit,
  iconSet.lgIconExport,
  iconSet.lgIconFaceDissatisfiedFill,
  iconSet.lgIconFaceDissatisfied,
  iconSet.lgIconFaceHappyFill,
  iconSet.lgIconFaceHappy,
  iconSet.lgIconFaceNeutralFill,
  iconSet.lgIconFaceNeutral,
  iconSet.lgIconFaceSatisfiedFill,
  iconSet.lgIconFaceSatisfied,
  iconSet.lgIconFaceUnhappyFill,
  iconSet.lgIconFacebook,
  iconSet.lgIconFamily,
  iconSet.lgIconFavouriteFill,
  iconSet.lgIconFavourite,
  iconSet.lgIconFilter,
  iconSet.lgIconFolderAdd,
  iconSet.lgIconFolder,
  iconSet.lgIconFollow,
  iconSet.lgIconForum,
  iconSet.lgIconFunds,
  iconSet.lgIconFurntiure,
  iconSet.lgIconGenderFemale,
  iconSet.lgIconGenderMale,
  iconSet.lgIconGif,
  iconSet.lgIconGithub,
  iconSet.lgIconGlobe,
  iconSet.lgIconGoogle,
  iconSet.lgIconGotoBottom,
  iconSet.lgIconGotoFirst,
  iconSet.lgIconGotoLast,
  iconSet.lgIconGotoTop,
  iconSet.lgIconGroup,
  iconSet.lgIconGuillemetLeft,
  iconSet.lgIconGuillemetRight,
  iconSet.lgIconHamburgerMenu,
  iconSet.lgIconHd,
  iconSet.lgIconHdr,
  iconSet.lgIconHedgingCurrency,
  iconSet.lgIconHedging,
  iconSet.lgIconHelp,
  iconSet.lgIconHighlight,
  iconSet.lgIconHomeFill,
  iconSet.lgIconHome,
  iconSet.lgIconHouse,
  iconSet.lgIconIdea,
  iconSet.lgIconImage,
  iconSet.lgIconInformationFill,
  iconSet.lgIconInformation,
  iconSet.lgIconInsert,
  iconSet.lgIconInstagram,
  iconSet.lgIconJuniorIsa,
  iconSet.lgIconLandlord,
  iconSet.lgIconLaunch,
  iconSet.lgIconLearn,
  iconSet.lgIconLikeFill,
  iconSet.lgIconLike,
  iconSet.lgIconLinkExternal,
  iconSet.lgIconLink,
  iconSet.lgIconLinkedin,
  iconSet.lgIconListBullets,
  iconSet.lgIconListChecked,
  iconSet.lgIconListNumbered,
  iconSet.lgIconList,
  iconSet.lgIconLocationArrow,
  iconSet.lgIconLocation,
  iconSet.lgIconLockedFill,
  iconSet.lgIconLocked,
  iconSet.lgIconMaLgi,
  iconSet.lgIconMail,
  iconSet.lgIconMap,
  iconSet.lgIconMaximise,
  iconSet.lgIconMicrophoneOff,
  iconSet.lgIconMicrophoneOn,
  iconSet.lgIconMinimise,
  iconSet.lgIconMisuseFill,
  iconSet.lgIconMisuse,
  iconSet.lgIconMobile,
  iconSet.lgIconModule,
  iconSet.lgIconMoney,
  iconSet.lgIconMove,
  iconSet.lgIconNeedHelp,
  iconSet.lgIconNewTab,
  iconSet.lgIconNews,
  iconSet.lgIconNotes,
  iconSet.lgIconNotificationOff,
  iconSet.lgIconNotificationOn,
  iconSet.lgIconOpenInNewWindow,
  iconSet.lgIconOverflowHorizontal,
  iconSet.lgIconOverflowVertical,
  iconSet.lgIconOverlay,
  iconSet.lgIconPage,
  iconSet.lgIconPages,
  iconSet.lgIconPartnership,
  iconSet.lgIconPassword,
  iconSet.lgIconPause,
  iconSet.lgIconPdf,
  iconSet.lgIconPensionPot,
  iconSet.lgIconPerson,
  iconSet.lgIconPet,
  iconSet.lgIconPhoneOff,
  iconSet.lgIconPhoneOn,
  iconSet.lgIconPlaySpot,
  iconSet.lgIconPlay,
  iconSet.lgIconPng,
  iconSet.lgIconPopUp,
  iconSet.lgIconPresentationFile,
  iconSet.lgIconPrinter,
  iconSet.lgIconProfile,
  iconSet.lgIconQueryFill,
  iconSet.lgIconQuery,
  iconSet.lgIconQuestionMark,
  iconSet.lgIconRadioButtonSelected,
  iconSet.lgIconRadioButtonUnselected,
  iconSet.lgIconRecommend,
  iconSet.lgIconRenew,
  iconSet.lgIconRepeat,
  iconSet.lgIconReply,
  iconSet.lgIconReport,
  iconSet.lgIconReset,
  iconSet.lgIconRestart,
  iconSet.lgIconRetirement,
  iconSet.lgIconReward,
  iconSet.lgIconRss,
  iconSet.lgIconScaleDown,
  iconSet.lgIconScaleUp,
  iconSet.lgIconScan,
  iconSet.lgIconSearch,
  iconSet.lgIconSecureMessaging,
  iconSet.lgIconSecurity,
  iconSet.lgIconSend,
  iconSet.lgIconSettings,
  iconSet.lgIconShare,
  iconSet.lgIconSignIn,
  iconSet.lgIconSign,
  iconSet.lgIconSkipBack,
  iconSet.lgIconSkipForward,
  iconSet.lgIconSlack,
  iconSet.lgIconStarFill,
  iconSet.lgIconStarHalfFill,
  iconSet.lgIconStar,
  iconSet.lgIconStop,
  iconSet.lgIconSubtract,
  iconSet.lgIconSvg,
  iconSet.lgIconSwitchFunds,
  iconSet.lgIconTag,
  iconSet.lgIconTime,
  iconSet.lgIconTimeDelay,
  iconSet.lgIconTrash,
  iconSet.lgIconTwitter,
  iconSet.lgIconUnhappy,
  iconSet.lgIconUnlockedFill,
  iconSet.lgIconUnlocked,
  iconSet.lgIconUpload,
  iconSet.lgIconUserOnline,
  iconSet.lgIconUsers,
  iconSet.lgIconVideo,
  iconSet.lgIconViewModeOff,
  iconSet.lgIconViewModeOn,
  iconSet.lgIconViewTransactions,
  iconSet.lgIconVolumeDown,
  iconSet.lgIconVolumeMute,
  iconSet.lgIconVolumeUp,
  iconSet.lgIconWarningFill,
  iconSet.lgIconWarning,
  iconSet.lgIconYoutube,
  iconSet.lgIconZoomInFill,
  iconSet.lgIconZoomIn,
  iconSet.lgIconZoomOutFill,
  iconSet.lgIconZoomOut,
];

@Component({
  selector: 'lg-swatch-icon',
  template: `
    <div class="swatch" *ngFor="let icon of icons">
      <lg-icon class="swatch__svg" [name]="icon.name" [attr.style]="colourVar"> </lg-icon>
      <span class="swatch__name">{{ icon.name }}</span>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
      }

      .swatch {
        margin: var(--space-sm);
        flex: 1 1 225px;
      }

      .swatch__svg {
        margin-right: var(--space-md);
      }
    `,
  ],
})
class SwatchIconComponent implements OnChanges {
  @Input() colour: string;

  icons = iconsArray;
  colourVar: SafeStyle;

  constructor(private registry: LgIconRegistry, private sanitizer: DomSanitizer) {
    this.registry.registerIcons(this.icons);
  }

  ngOnChanges({ colour }: SimpleChanges) {
    if (colour && colour.currentValue) {
      this.colourVar = this.sanitizer.bypassSecurityTrustStyle(
        `color: var(${colour.currentValue})`,
      );
    }
  }
}

const colours = [
  '--color-charcoal',
  '--color-super-blue',
  '--color-leafy-green-dark',
  '--color-poppy-red-dark',
];

export default {
  title: 'Components/Icon',
  excludeStories: ['iconsArray'],
  decorators: [
    moduleMetadata({
      declarations: [SwatchIconComponent, LgIconComponent],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    colour: {
      options: colours,
      description: 'Example of changing the colour of the icon',
      control: {
        type: 'select',
      },
    },
  },
};

const exampleTemplate = `
<lg-icon name="call"></lg-icon>
`;

const iconsTemplate: Story<LgIconComponent> = (args: LgIconComponent) => ({
  props: args,
  template: '<lg-swatch-icon [colour]="colour"></lg-swatch-icon>',
});

export const standardIcons = iconsTemplate.bind({});
standardIcons.storyName = 'Standard';
standardIcons.parameters = {
  docs: {
    description: {
      component: notes,
    },
    source: {
      code: exampleTemplate,
    },
  },
};
