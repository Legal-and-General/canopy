import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardPrincipleDataPointDateComponent } from './card-principle-data-point-date.component';

describe('CardPrincipleDataPointDateComponent', () => {
  let component: LgCardPrincipleDataPointDateComponent;
  let fixture: ComponentFixture<LgCardPrincipleDataPointDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgCardPrincipleDataPointDateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardPrincipleDataPointDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-card-principle-data-point-date',
    );
  });
});
