import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgHeroCardFooterComponent } from './hero-card-footer.component';

describe('LgHeroCardFooterComponent', () => {
  let component: LgHeroCardFooterComponent;
  let fixture: ComponentFixture<LgHeroCardFooterComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgHeroCardFooterComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroCardFooterComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    el = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    expect(el.getAttribute('class')).toContain('lg-hero-card-footer');
  });
});
