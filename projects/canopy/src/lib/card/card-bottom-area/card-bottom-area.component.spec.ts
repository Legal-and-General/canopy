import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardBottomAreaComponent } from './card-bottom-area.component';

describe('LgCardBottomAreaComponent', () => {
  let component: LgCardBottomAreaComponent;
  let fixture: ComponentFixture<LgCardBottomAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgCardBottomAreaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardBottomAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-bottom-area');
  });
});
