import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardContentComponent } from './card-content.component';

describe('LgCardContentComponent', () => {
  let component: LgCardContentComponent;
  let fixture: ComponentFixture<LgCardContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgCardContentComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-content');
  });
});
