import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardGroupComponent } from './card-group.component';

describe('LgCardGroupComponent', () => {
  let component: LgCardGroupComponent;
  let fixture: ComponentFixture<LgCardGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgCardGroupComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-group');
  });
});
