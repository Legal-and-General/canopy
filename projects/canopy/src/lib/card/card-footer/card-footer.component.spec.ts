import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardFooterComponent } from './card-footer.component';

describe('LgCardFooterComponent', () => {
  let component: LgCardFooterComponent;
  let fixture: ComponentFixture<LgCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgCardFooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-card-footer');
  });
});
