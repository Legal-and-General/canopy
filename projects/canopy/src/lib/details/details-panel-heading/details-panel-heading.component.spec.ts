import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { take } from 'rxjs/operators';

import { LgHeadingComponent } from '../../heading';
import { LgIconComponent } from '../../icon';
import type { IconName } from '../../icon';
import type { Status } from '../../status';

import { LgDetailsPanelHeadingComponent } from './details-panel-heading.component';

describe('LgDetailsPanelHeadingComponent', () => {
  let component: LgDetailsPanelHeadingComponent;
  let fixture: ComponentFixture<LgDetailsPanelHeadingComponent>;
  let triggerElement;
  const getStatusIconElement = (): HTMLElement | null =>
    fixture.nativeElement.querySelector('.lg-details-panel-heading__icon lg-icon');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgDetailsPanelHeadingComponent,
        MockComponents(LgIconComponent, LgHeadingComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgDetailsPanelHeadingComponent);
    component = fixture.componentInstance;

    triggerElement = fixture.debugElement.query(
      By.css('.lg-details-panel-heading__toggle'),
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the details container is toggled open', () => {
    it('should set \'isActive\' to false', () => {
      component.isActive = true;
      component.toggle();

      expect(component.isActive).toBe(false);
    });

    it('should emit toggleActive event', () => {
      component.toggleActive.pipe(take(1)).subscribe(isActive => {
        expect(isActive).toBeFalsy();
      });

      component.isActive = true;
      component.toggle();
    });

    it('should set the \'active\' class', () => {
      expect(
        triggerElement.nativeElement.classList.contains(
          'lg-details-panel-heading__toggle--active',
        ),
      ).toBe(false);

      triggerElement.nativeElement.click();
      fixture.detectChanges();

      expect(
        triggerElement.nativeElement.classList.contains(
          'lg-details-panel-heading__toggle--active',
        ),
      ).toBe(true);
    });

    it('should set the aria expanded attribute to true', () => {
      expect(triggerElement.attributes['aria-expanded']).toBe('false');

      triggerElement.nativeElement.click();
      fixture.detectChanges();

      expect(triggerElement.attributes['aria-expanded']).toBe('true');
    });
  });

  describe('when the details item is toggled close', () => {
    it('should set \'isActive\' to true', () => {
      component.isActive = false;
      component.toggle();

      expect(component.isActive).toBe(true);
    });

    it('should emit toggleActive event', () => {
      component.toggleActive.pipe(take(1)).subscribe(isActive => {
        expect(isActive).toBeTruthy();
      });

      component.isActive = false;
      component.toggle();
    });

    it('should remove the `active` class', () => {
      triggerElement.nativeElement.click();
      fixture.detectChanges();

      expect(
        triggerElement.nativeElement.classList.contains(
          'lg-details-panel-heading__toggle--active',
        ),
      ).toBe(true);

      triggerElement.nativeElement.click();
      fixture.detectChanges();

      expect(
        triggerElement.nativeElement.classList.contains(
          'lg-details-panel-heading__toggle--active',
        ),
      ).toBe(false);
    });

    it('should set the `aria-expanded` attribute to false', () => {
      triggerElement.nativeElement.click();
      fixture.detectChanges();

      expect(triggerElement.attributes['aria-expanded']).toBe('true');

      triggerElement.nativeElement.click();
      fixture.detectChanges();

      expect(triggerElement.attributes['aria-expanded']).toBe('false');
    });
  });

  describe('status icon rendering', () => {
    it('renders the status icon when showIcon is true', () => {
      component.status = 'generic';
      component.showIcon = true;
      fixture.detectChanges();

      expect(getStatusIconElement()).toBeTruthy();
    });

    it('hides the status icon when showIcon is false', () => {
      component.showIcon = false;
      fixture.detectChanges();

      expect(getStatusIconElement()).toBeNull();
    });

    const statusIconMap: Array<{ status: Status; icon: IconName }> = [
      { status: 'generic', icon: 'globe' },
      { status: 'info', icon: 'information-filled' },
      { status: 'success', icon: 'checkmark-spot-filled' },
      { status: 'warning', icon: 'warning-filled' },
      { status: 'error', icon: 'crossmark-spot-filled' },
    ];

    statusIconMap.forEach(({ status, icon }) => {
      it(`resolves the correct icon for ${status} status`, () => {
        component.status = status;
        fixture.detectChanges();

        expect(component.statusIcon).toBe(icon);
      });
    });

    it('uses a custom icon for generic status', () => {
      component.status = 'generic';
      component.icon = 'chat';
      fixture.detectChanges();

      expect(component.statusIcon).toBe('chat');
    });

    it('uses a custom icon for info status', () => {
      component.status = 'info';
      component.icon = 'chat';
      fixture.detectChanges();

      expect(component.statusIcon).toBe('chat');
    });

    const fixedStatusIconMap: Array<{ status: Status; icon: IconName }> = [
      { status: 'success', icon: 'checkmark-spot-filled' },
      { status: 'warning', icon: 'warning-filled' },
      { status: 'error', icon: 'crossmark-spot-filled' },
    ];

    fixedStatusIconMap.forEach(({ status, icon }) => {
      it(`keeps fixed icon mapping for ${status} status`, () => {
        component.icon = 'chat';
        component.status = status;
        fixture.detectChanges();

        expect(component.statusIcon).toBe(icon);
      });
    });
  });
});
