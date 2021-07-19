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

  it('should return the input in the correct format', () => {
    const time = [
      0,
      15,
      59,
      60,
      61,
      599,
      600,
      601,
      5999,
      '0',
      '15',
      '59',
      '60',
      '61',
      '599',
      '600',
      '601',
      '5999',
    ];
    const result = [
      '0:00',
      '0:15',
      '0:59',
      '1:00',
      '1:01',
      '9:59',
      '10:00',
      '10:01',
      '99:59',
      '0:00',
      '0:15',
      '0:59',
      '1:00',
      '1:01',
      '9:59',
      '10:00',
      '10:01',
      '99:59',
    ];
    time.forEach((value, index) => {
      component.timer = time[index];

      expect(component.formattedTime).toContain(result[index]);
    });
  });
});
