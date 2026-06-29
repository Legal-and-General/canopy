import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgBannerComponent } from './banner.component';

@Component({
  template: `
    <lg-banner> Banner <strong class="projected-content">message</strong> </lg-banner>
  `,
  imports: [ LgBannerComponent ],
  changeDetection: ChangeDetectionStrategy.Default,
})
class TestHostComponent {}

describe('LgBannerComponent', () => {
  let component: LgBannerComponent;
  let fixture: ComponentFixture<LgBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgBannerComponent, TestHostComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(LgBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds generic as the default status', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('generic');
  });

  it('adds the status class to the banner component', () => {
    fixture.componentRef.setInput('status', 'warning');
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('class')).toContain('warning');
  });

  it('does not add a Aria role for the generic status', () => {
    fixture.componentRef.setInput('status', 'generic');
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('role')).toBeNull();
  });

  it('does not add an Aria role for the info status', () => {
    fixture.componentRef.setInput('status', 'info');
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('role')).toBeNull();
  });

  it('adds the Aria role "alert" for the warning status', () => {
    fixture.componentRef.setInput('status', 'warning');
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
  });

  [
    { status: 'generic', icon: 'globe' },
    { status: 'info', icon: 'information-filled' },
    { status: 'success', icon: 'checkmark-spot-filled' },
    { status: 'warning', icon: 'warning-filled' },
    { status: 'error', icon: 'crossmark-spot-filled' },
  ].forEach(({ status, icon }) => {
    it(`renders the correct icon for ${status} status`, () => {
      fixture.componentRef.setInput('status', status);
      fixture.detectChanges();

      const renderedIcon = fixture.nativeElement.querySelector('lg-icon');

      expect(renderedIcon).toBeTruthy();
      expect(component.statusIcon).toBe(icon);
    });
  });

  it('hides the status icon when showIcon is false', () => {
    fixture.componentRef.setInput('showIcon', false);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('lg-icon')).toBeNull();
  });

  it('uses a custom icon for generic status', () => {
    fixture.componentRef.setInput('status', 'generic');
    fixture.componentRef.setInput('icon', 'warning-filled');
    fixture.detectChanges();

    expect(component.statusIcon).toBe('warning-filled');
  });

  it('uses a custom icon for info status', () => {
    fixture.componentRef.setInput('status', 'info');
    fixture.componentRef.setInput('icon', 'warning-filled');
    fixture.detectChanges();

    expect(component.statusIcon).toBe('warning-filled');
  });

  it('keeps fixed icon mapping for non-generic and non-info statuses', () => {
    fixture.componentRef.setInput('status', 'success');
    fixture.componentRef.setInput('icon', 'warning-filled');
    fixture.detectChanges();

    expect(component.statusIcon).toBe('checkmark-spot-filled');
  });

  it('does not render a built-in dismiss button', () => {
    fixture.detectChanges();

    const dismissButton = fixture.nativeElement.querySelector(
      'button[aria-label="Dismiss"]',
    );

    expect(dismissButton).toBeNull();
  });

  it('renders projected HTML content without altering structure', waitForAsync(() => {
    const hostFixture = TestBed.createComponent(TestHostComponent);

    hostFixture.detectChanges();

    const projectedStrongElement =
      hostFixture.nativeElement.querySelector('.projected-content');

    expect(projectedStrongElement).toBeTruthy();
    expect(projectedStrongElement.tagName).toBe('STRONG');
    expect(projectedStrongElement.textContent.trim()).toBe('message');
  }));
});
