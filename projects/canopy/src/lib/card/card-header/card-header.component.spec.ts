import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardHeaderComponent } from './card-header.component';

describe('LgCardHeaderComponent', () => {
  let component: LgCardHeaderComponent;
  let fixture: ComponentFixture<LgCardHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgCardHeaderComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-header');
  });
});
