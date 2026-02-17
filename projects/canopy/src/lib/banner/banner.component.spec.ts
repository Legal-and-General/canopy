import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgBannerComponent } from './banner.component';

describe('LgBannerComponent', () => {
  let component: LgBannerComponent;
  let fixture: ComponentFixture<LgBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgBannerComponent ],
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

  it('adds the Aria role "alert" for the warning status', () => {
    fixture.componentRef.setInput('status', 'warning');
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
  });
});
