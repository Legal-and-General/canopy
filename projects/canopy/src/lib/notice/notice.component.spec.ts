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
        LgPictogramComponent,
        MockComponents(LgNoticeTitleComponent, LgNoticeDescriptionComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    ngMocks.flushTestBed();

    fixture = MockRender(`
      <lg-notice>
        <lg-pictogram />
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
    it('passes the default info status and enables pictogram fill', () => {
      const pictogram = fixture.debugElement.query(By.directive(LgPictogramComponent));

      expect(pictogram.componentInstance.status).toBe('info');
      expect(pictogram.componentInstance.hasFill).toBe(true);
      expect(pictogram.nativeElement.getAttribute('data-has-fill')).toBe('true');
    });

    it('updates the pictogram status and restores info when cleared', async () => {
      const pictogram = fixture.debugElement.query(By.directive(LgPictogramComponent));

      component.status = 'success';
      await fixture.whenStable();
      component.status = 'error';
      await fixture.whenStable();

      expect(pictogram.componentInstance.status).toBe('error');
      expect(pictogram.nativeElement.classList.contains('lg-status-success')).toBe(false);
      expect(pictogram.nativeElement.classList.contains('lg-status-error')).toBe(true);

      component.status = undefined;
      await fixture.whenStable();

      expect(pictogram.componentInstance.status).toBe('info');
      expect(pictogram.nativeElement.classList.contains('lg-status-error')).toBe(false);
      expect(pictogram.nativeElement.classList.contains('lg-status-info')).toBe(true);
    });

    function testStatus(status: Exclude<Status, 'generic'>, expectedRole: string | null) {
      component.status = status;
      fixture.detectChanges();

      const notice = fixture.debugElement.query(By.css('.lg-notice'));
      const pictogram = fixture.debugElement.query(By.css('lg-pictogram'));

      expect(pictogram.componentInstance.status).toBe(status);
      expect(pictogram.componentInstance.hasFill).toBe(true);
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
