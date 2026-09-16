import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';

import { LgPictogramComponent } from '../pictogram';
import type { Status } from '../status';

import {
  LgNoticeComponent,
  LgNoticeDescriptionComponent,
  LgNoticeTitleComponent,
} from './';

describe('LgNoticeComponent', () => {
  let component: LgNoticeComponent;
  let fixture: MockedComponentFixture<LgNoticeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgNoticeComponent,
        MockComponents(
          LgPictogramComponent,
          LgNoticeTitleComponent,
          LgNoticeDescriptionComponent,
        ),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    ngMocks.flushTestBed();

    fixture = MockRender(`
      <lg-notice>
        <lg-pictogram name="calendar" />
        <lg-notice-title
          >This is a message with pictogram</lg-notice-title
        >
        <lg-notice-description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <a href="#">eiusmod tempor</a> incididunt ut labore et dolore magna aliqua.
        </lg-notice-description>
      </lg-notice>
    `);

    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(
      fixture.debugElement
        .query(By.css('.lg-notice'))
        .nativeElement.getAttribute('class'),
    ).toContain('lg-notice');
  });

  describe('the hasRole input', () => {
    it('should add the role "alert" when set to true', () => {
      component.hasRole = true;
      fixture.detectChanges();

      expect(
        fixture.debugElement
          .query(By.css('.lg-notice'))
          .nativeElement.getAttribute('role'),
      ).toEqual('alert');
    });

    it('should remove the role "alert" when set to false', () => {
      component.hasRole = false;
      fixture.detectChanges();

      expect(
        fixture.debugElement
          .query(By.css('.lg-notice'))
          .nativeElement.getAttribute('role'),
      ).toBeNull();
    });
  });

  describe('the status input', () => {
    function testStatus(status: Exclude<Status, 'generic'>, expectedRole: string | null) {
      component.status = status;
      fixture.detectChanges();

      const notice = fixture.debugElement.query(By.css('.lg-notice'));
      const pictogram = fixture.debugElement.query(By.css('lg-pictogram'));

      expect(notice.nativeElement.getAttribute('role')).toBe(expectedRole);

      expect(notice.nativeElement.getAttribute('class')).not.toContain(
        `lg-status-${status}`,
      );

      expect(notice.nativeElement.getAttribute('class')).not.toContain(
        'lg-theme-neutral',
      );

      expect(pictogram.nativeElement.getAttribute('class')).toContain(
        `lg-status-${status}`,
      );

      expect(pictogram.nativeElement.getAttribute('class')).toContain('lg-theme-neutral');
    }

    it('does not add an ARIA role for the info status', () => {
      testStatus('info', null);
    });

    for (const status of [ 'success', 'warning', 'error' ] as Array<
      Exclude<Status, 'generic'>
    >) {
      it(`adds the ARIA role "alert" for the ${status} status`, () => {
        testStatus(status, 'alert');
      });
    }
  });
});
