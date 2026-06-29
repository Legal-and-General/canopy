import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardHeaderComponent } from './card-header.component';

describe('LgCardHeaderComponent', () => {
  let component: LgCardHeaderComponent;
  let fixture: ComponentFixture<LgCardHeaderComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ LgCardHeaderComponent ],
    }).compileComponents();
  });

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
