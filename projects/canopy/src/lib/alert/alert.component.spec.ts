import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgAlertComponent } from './alert.component';

describe('LgAlertComponent', () => {
  let component: LgAlertComponent;
  let fixture: ComponentFixture<LgAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgAlertComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds generic as the default variant', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('generic');
  });

  it('adds the variant class to the alert component', () => {
    component.variant = 'success';
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('class')).toContain('success');
  });

  it('does not add a Aria role for the info variant', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBeNull();
  });

  it('adds the Aria role "alert" for all other variants', () => {
    component.variant = 'warning';
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
  });
});
