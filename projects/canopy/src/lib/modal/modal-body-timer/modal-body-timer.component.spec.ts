import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgModalBodyTimerComponent } from './modal-body-timer.component';

describe('LgModalBodyTimerComponent', () => {
  let component: LgModalBodyTimerComponent;
  let fixture: ComponentFixture<LgModalBodyTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgModalBodyTimerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgModalBodyTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-modal-body__timer');
  });
});
