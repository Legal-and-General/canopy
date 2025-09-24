import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { provideRouter } from '@angular/router';

import { LgHeadingComponent } from '../../heading';
import { LgIconComponent } from '../../icon';
import { HeadingLevel } from '../../heading';

import { LgCardNavigationTitleComponent } from './card-navigation-title.component';

describe('LgCardNavigationTitleComponent', () => {
  let component: LgCardNavigationTitleComponent;
  let fixture: MockedComponentFixture<
    LgCardNavigationTitleComponent,
    { title: string; link: string; headingLevel: HeadingLevel }
  >;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgCardNavigationTitleComponent,
        LgHeadingComponent,
        MockComponents(LgIconComponent),
      ],
      providers: [ provideRouter([]) ],
    }).compileComponents();

    jest.spyOn(console, 'error').mockImplementation();
  }));

  afterEach(() => {
    ngMocks.flushTestBed();
  });

  describe('when the link, title and heading level are set', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      fixture = MockRender(
        `
        <lg-card-navigation-title [title]="title" [link]="link" [headingLevel]="headingLevel">
        </lg-card-navigation-title>
      `,
        {
          title: 'Payments',
          link: 'http://www.landg.com',
          headingLevel: 4,
        },
      );

      debugElement = fixture.debugElement;
      component = debugElement.children[0].componentInstance;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should contain the default class', () => {
      expect(debugElement.children[0].nativeElement.getAttribute('class')).toContain(
        'lg-card-navigation-title',
      );
    });

    it('should render the anchor tag and icon', () => {
      const anchorTag = fixture.debugElement.query(By.css('a'));
      const icon = fixture.debugElement.query(By.directive(LgIconComponent));

      expect(anchorTag.nativeElement.innerHTML).toContain('Payments');
      expect(icon).not.toBeNull();
    });

    it('should emit events', () => {
      const linkClickedEventSpy = jest.spyOn(component.linkClickedEvent, 'emit');

      component.linkClicked();

      expect(linkClickedEventSpy).toHaveBeenCalledTimes(1);
    });

    it('should know whether the link is external or internal', () => {
      expect(component.link).toBe('http://www.landg.com');
      expect(component['externalLink']).toBe(true);
      let anchorEL = fixture.debugElement.query(By.css('a'));

      expect(anchorEL.nativeElement.getAttribute('target')).toBe('_blank');

      ngMocks.flushTestBed();

      fixture = MockRender(
        `
        <lg-card-navigation-title [title]="title" [link]="link" [headingLevel]="headingLevel">
        </lg-card-navigation-title>
      `,
        {
          title: 'Payments',
          link: '/test-path',
          headingLevel: 4,
        },
      );

      debugElement = fixture.debugElement;
      component = debugElement.children[0].componentInstance;

      expect(component['externalLink']).toBe(false);
      expect(component.link).toBe('/test-path');
      anchorEL = fixture.debugElement.query(By.css('a'));

      expect(anchorEL.nativeElement.getAttribute('target')).toBeNull();
    });
  });

  describe('when the link is set but title is not set', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      fixture = MockRender(
        `
      <lg-card-navigation-title [title]="title" [link]="link" [headingLevel]="headingLevel">
      </lg-card-navigation-title>
    `,
        {
          title: null,
          link: 'http://www.landg.com',
          headingLevel: null,
        },
      );
    });

    it('should not render the anchor tag or icon', () => {
      const anchorTag = fixture.debugElement.query(By.css('a'));
      const icon = fixture.debugElement.query(By.directive(LgIconComponent));

      expect(anchorTag).toBeNull();
      expect(icon).toBeNull();
    });
  });

  describe('when the title is set but link and heading level is not set', () => {
    beforeEach(() => {
      fixture = MockRender(
        `
      <lg-card-navigation-title [title]="title" [link]="link" [headingLevel]="headingLevel">
      </lg-card-navigation-title>
    `,
        {
          title: 'Documents',
          link: null,
          headingLevel: null,
        },
      );
    });

    it('should not render the anchor tag or icon', () => {
      const anchorTag = fixture.debugElement.query(By.css('a'));
      const icon = fixture.debugElement.query(By.directive(LgIconComponent));

      expect(anchorTag).toBeNull();
      expect(icon).toBeNull();
    });
  });

  describe('when the heading level is set but link and title are not set', () => {
    beforeEach(() => {
      fixture = MockRender(
        `
      <lg-card-navigation-title [title]="title" [link]="link" [headingLevel]="headingLevel">
      </lg-card-navigation-title>
    `,
        {
          title: null,
          link: null,
          headingLevel: 1,
        },
      );
    });

    it('should not render the anchor tag or icon', () => {
      const anchorTag = fixture.debugElement.query(By.css('a'));
      const icon = fixture.debugElement.query(By.directive(LgIconComponent));

      expect(anchorTag).toBeNull();
      expect(icon).toBeNull();
    });
  });
});
