import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockComponents, MockDirective, MockRender } from 'ng-mocks';

import { LgButtonToggleDirective } from '../button';

import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeaderComponent } from './card-header/card-header.component';
import { LgCardComponent } from './card.component';
import { LgCardFooterComponent } from './card-footer/card-footer.component';
import { lgCardPanelIdPrefix, lgCardToggleIdPrefix } from './card.interface';
import { LgCardToggableContentComponent } from './card-toggable-content/card-toggable-content.component';
import { LgCardNavigationTitleComponent } from './card-navigation-title/card-navigation-title.component';

describe('LgCardComponent', () => {
  let component: LgCardComponent;
  let fixture: ComponentFixture<LgCardComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgCardComponent,
        MockComponents(
          LgCardHeaderComponent,
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

  it('should not set the class lg-card--navigation on the lg-card', () => {
    expect(el.className).not.toContain('lg-card--navigation');
  });

  describe('when there is only lg-card-content', () => {
    beforeEach(() => {
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
      expect(
        fixture.debugElement.query(By.directive(LgCardContentComponent)),
      ).toBeDefined();
    });
  });

  describe('when there is lg-card-header and lg-card-content', () => {
    beforeEach(() => {
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
      expect(
        fixture.debugElement.query(By.directive(LgCardHeaderComponent)),
      ).toBeDefined();
    });

    it('should expect card content to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardContentComponent)),
      ).toBeDefined();
    });
  });

  describe('when there is lg-card-content and lg-card-footer', () => {
    beforeEach(() => {
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
      expect(
        fixture.debugElement.query(By.directive(LgCardContentComponent)),
      ).toBeDefined();
    });

    it('should expect card footer to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardFooterComponent)),
      ).toBeDefined();
    });
  });

  describe('when there is lg-card-header, lg-card-content and lg-card-footer', () => {
    beforeEach(() => {
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
      expect(
        fixture.debugElement.query(By.directive(LgCardHeaderComponent)),
      ).toBeDefined();
    });

    it('should expect card content to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardContentComponent)),
      ).toBeDefined();
    });

    it('should expect card footer to render', () => {
      expect(
        fixture.debugElement.query(By.directive(LgCardFooterComponent)),
      ).toBeDefined();
    });
  });

  describe('when there is a button toggle and the lg-card-toggable-content', () => {
    beforeEach(() => {
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

    it('should set the class lg-card--navigation on the lg-card', () => {
      expect(el.className).toContain('lg-card--navigation');
    });
  });
});
