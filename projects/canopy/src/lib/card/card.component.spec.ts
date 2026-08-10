import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockComponents, MockDirective, MockRender, ngMocks } from 'ng-mocks';

import { LgButtonToggleDirective } from '../button';

import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeaderComponent } from './card-header/card-header.component';
import { LgCardComponent } from './card.component';
import { LgCardFooterComponent } from './card-footer/card-footer.component';
import { lgCardPanelIdPrefix, lgCardToggleIdPrefix } from './card.interface';
import { LgCardToggableContentComponent } from './card-toggable-content/card-toggable-content.component';
import { LgCardNavigationTitleComponent } from './card-navigation-title/card-navigation-title.component';
import { LgCardHeroImageComponent } from './card-hero-img/card-hero-img.component';

describe('LgCardComponent', () => {
  let component: LgCardComponent;
  let fixture: ComponentFixture<LgCardComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgCardComponent,
        MockComponents(
          LgCardHeaderComponent,
          LgCardHeroImageComponent,
          LgCardContentComponent,
          LgCardToggableContentComponent,
          LgCardFooterComponent,
          LgCardNavigationTitleComponent,
        ),
        MockDirective(LgButtonToggleDirective),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    el = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-card');
  });

  it('should have the promo class if variant is promo', () => {
    component.variant = 'promo';
    fixture.detectChanges();

    expect(el.getAttribute('class')).toContain('lg-card--promo');
  });

  it('should not set the class lg-card--navigation on the lg-card', () => {
    expect(el.className).not.toContain('lg-card--navigation');
  });

  describe('when there is only lg-card-content', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card>
         <lg-card-content>Content</lg-card-content>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect card content to render', () => {
      expect(debugElement.query(By.directive(LgCardContentComponent))).toBeTruthy();
    });
  });

  describe('when there is lg-card-header and lg-card-content', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card>
         <lg-card-header>Top</lg-card-header>
         <lg-card-content>Content</lg-card-content>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect card header to render', () => {
      expect(debugElement.query(By.directive(LgCardHeaderComponent))).toBeTruthy();
    });

    it('should expect card content to render', () => {
      expect(debugElement.query(By.directive(LgCardContentComponent))).toBeTruthy();
    });
  });

  describe('when there is lg-card-hero-img and lg-card-content', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card>
         <lg-card-hero-img src="/test"></lg-card-hero-img>
         <lg-card-content>Content</lg-card-content>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect card hero-image to render', () => {
      expect(debugElement.query(By.directive(LgCardHeroImageComponent))).toBeTruthy();

      expect(debugElement.children[0].children[0].componentInstance.src).toContain(
        '/test',
      );
    });

    it('should expect card content to render', () => {
      expect(debugElement.query(By.directive(LgCardContentComponent))).toBeTruthy();
    });
  });

  describe('when placing pictogram hero media based on orientation', () => {
    it('should move pictogram hero media into card content for horizontal orientation', () => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card class="lg-orientation--sm--horizontal">
         <lg-card-hero-img></lg-card-hero-img>
         <lg-card-content>Content</lg-card-content>
        </lg-card>
      `);

      localFixture.detectChanges();

      const cardElement = localFixture.debugElement.children[0]
        .nativeElement as HTMLElement;
      const cardContent = cardElement.querySelector('lg-card-content');
      const heroInContent = cardContent?.querySelector('lg-card-hero-img');

      expect(cardContent).toBeTruthy();
      expect(heroInContent).toBeTruthy();
    });

    it('should keep hero media before card body for vertical orientation', () => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card class="lg-orientation--sm--vertical">
         <lg-card-hero-img></lg-card-hero-img>
         <lg-card-content>Content</lg-card-content>
        </lg-card>
      `);

      localFixture.detectChanges();

      const cardElement = localFixture.debugElement.children[0]
        .nativeElement as HTMLElement;
      const hero = cardElement.querySelector('lg-card-hero-img');
      const body = cardElement.querySelector('.lg-card__body');

      expect(hero).toBeTruthy();
      expect(body).toBeTruthy();
      expect(cardElement.firstElementChild).toBe(hero);
    });

    it('should keep image hero media before card body when src is present', () => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card class="lg-orientation--sm--horizontal">
         <lg-card-hero-img src="/test"></lg-card-hero-img>
         <lg-card-content>Content</lg-card-content>
        </lg-card>
      `);

      localFixture.detectChanges();

      const cardElement = localFixture.debugElement.children[0]
        .nativeElement as HTMLElement;
      const hero = cardElement.querySelector('lg-card-hero-img');

      expect(hero).toBeTruthy();
      expect(cardElement.firstElementChild).toBe(hero);
    });

    it('should re-place hero media when viewport breakpoint changes', () => {
      ngMocks.flushTestBed();

      const initialWindowWidth = window.innerWidth;

      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        writable: true,
        value: 500,
      });

      const localFixture = MockRender(`
        <lg-card class="lg-orientation--sm--vertical lg-orientation--md--horizontal">
         <lg-card-hero-img></lg-card-hero-img>
         <lg-card-content>Content</lg-card-content>
        </lg-card>
      `);

      localFixture.detectChanges();

      const cardComponent = localFixture.debugElement.children[0]
        .componentInstance as LgCardComponent;
      const cardElement = localFixture.debugElement.children[0]
        .nativeElement as HTMLElement;

      expect(cardElement.firstElementChild?.tagName.toLowerCase()).toBe(
        'lg-card-hero-img',
      );

      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        writable: true,
        value: 1024,
      });

      cardComponent.onWindowResize();
      localFixture.detectChanges();

      const cardContent = cardElement.querySelector('lg-card-content');
      const heroInContent = cardContent?.querySelector('lg-card-hero-img');

      expect(heroInContent).toBeTruthy();

      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        writable: true,
        value: initialWindowWidth,
      });
    });
  });

  describe('when there is lg-card-content and lg-card-footer', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card>
         <lg-card-content>Content</lg-card-content>
         <lg-card-footer>Footer</lg-card-footer>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect card content to render', () => {
      expect(debugElement.query(By.directive(LgCardContentComponent))).toBeTruthy();
    });

    it('should expect card footer to render', () => {
      expect(debugElement.query(By.directive(LgCardFooterComponent))).toBeTruthy();
    });
  });

  describe('when there is lg-card-header, lg-card-content and lg-card-footer', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card>
         <lg-card-header>Top</lg-card-header>
         <lg-card-content>Content</lg-card-content>
         <lg-card-footer>Footer</lg-card-footer>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should expect card header to render', () => {
      expect(debugElement.query(By.directive(LgCardHeaderComponent))).toBeTruthy();
    });

    it('should expect card content to render', () => {
      expect(debugElement.query(By.directive(LgCardContentComponent))).toBeTruthy();
    });

    it('should expect card footer to render', () => {
      expect(debugElement.query(By.directive(LgCardFooterComponent))).toBeTruthy();
    });
  });

  describe('when there is a button toggle and the lg-card-toggable-content', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card>
         <lg-card-header>Top</lg-card-header>
         <lg-card-content>
            <lg-card-toggable-content></lg-card-toggable-content>
            <button lgButtonToggle></button>
         </lg-card-content>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should set the id and aria-controls of the toggle', () => {
      expect(component.buttonToggle.id).toBe(
        `${lgCardToggleIdPrefix}${component['uniqueId']}`,
      );

      expect(component.buttonToggle.ariaControls).toBe(
        `${lgCardPanelIdPrefix}${component['uniqueId']}`,
      );
    });

    it('should set the unique id of the panel and its state', () => {
      expect(component.cardToggableContent.uniqueId).toBe(component['uniqueId']);
      component.buttonToggle.toggleActive.emit(true);

      expect(component.cardToggableContent.isActive).toBe(true);

      component.buttonToggle.toggleActive.emit(false);

      expect(component.cardToggableContent.isActive).toBe(false);
    });
  });

  describe('when there is the lg-card-navigation-title', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      const localFixture = MockRender(`
        <lg-card>
         <lg-card-header>
            <lg-card-navigation-title title="Greetings" link="https://www.landg.com" headingLevel="2"></lg-card-navigation-title>
         </lg-card-header>
         <lg-card-content>
            Hello
         </lg-card-content>
        </lg-card>
      `);

      debugElement = localFixture.debugElement;
      el = debugElement.children[0].nativeElement;
      component = debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('should set the variant to interactive on the lg-card', () => {
      expect(component.variant).toContain('interactive');
    });

    it('should set the class lg-card--interactive on the lg-card', () => {
      expect(el.className).toContain('lg-card--interactive');
    });
  });
});
