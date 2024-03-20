import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroImgCardComponent } from './hero-img-card.component';

describe('HeroImgCardComponent', () => {
  let component: LgHeroImgCardComponent;
  let fixture: ComponentFixture<LgHeroImgCardComponent>;
  let debugElement: DebugElement;
  let componentElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgHeroImgCardComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroImgCardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    componentElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    expect(componentElement.getAttribute('class')).toContain('lg-hero-img-card');
  });
});
