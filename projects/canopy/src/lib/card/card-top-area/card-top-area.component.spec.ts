import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardTopAreaComponent } from './card-top-area.component';

describe('LgCardTopAreaComponent', () => {
  let component: LgCardTopAreaComponent;
  let fixture: ComponentFixture<LgCardTopAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgCardTopAreaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardTopAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-top-area');
  });
});
