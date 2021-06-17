import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgButtonGroupComponent } from './button-group.component';

describe('LgButtonGroupComponent', () => {
  let component: LgButtonGroupComponent;
  let fixture: ComponentFixture<LgButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgButtonGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-btn-group');
  });
});
