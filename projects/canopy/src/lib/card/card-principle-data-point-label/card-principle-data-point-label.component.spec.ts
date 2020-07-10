import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardPrincipleDataPointLabelComponent } from './card-principle-data-point-label.component';

describe('LgCardPrincipleDataPointLabelComponent', () => {
  let component: LgCardPrincipleDataPointLabelComponent;
  let fixture: ComponentFixture<LgCardPrincipleDataPointLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgCardPrincipleDataPointLabelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardPrincipleDataPointLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain(
      'lg-card-principle-data-point-label'
    );
  });
});
