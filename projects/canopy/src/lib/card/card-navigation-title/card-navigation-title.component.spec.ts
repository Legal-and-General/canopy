import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockComponents, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { spy, verify } from '@typestrong/ts-mockito';
import { RouterTestingModule } from '@angular/router/testing';

import { LgHeadingComponent } from '../../heading/heading.component';
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
      declarations: [
        LgCardNavigationTitleComponent,
        MockComponents(LgHeadingComponent, LgIconComponent),
      ],
      imports: [ RouterTestingModule ],
    }).compileComponents();
  }));

  afterEach(() => {
    ngMocks.flushTestBed();
  });

  describe('when the link, title and heading level are set', () => {
    beforeEach(() => {
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
      const linkClickedEventSpy = spy(component.linkClickedEvent);

      component.linkClicked();

      verify(linkClickedEventSpy.emit()).once();

      expect().nothing();
    });

    it('should know whether the link is external or internal', () => {
      expect(component['externalLink']).toBeTrue();

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

      expect(component['externalLink']).toBeFalse();
    });
  });

  describe('when the link is set but title is not set', () => {
    beforeEach(() => {
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
