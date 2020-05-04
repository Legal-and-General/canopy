import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardComponent } from './card.component';

describe('LgCardComponent', () => {
  let component: LgCardComponent;
  let fixture: ComponentFixture<LgCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
