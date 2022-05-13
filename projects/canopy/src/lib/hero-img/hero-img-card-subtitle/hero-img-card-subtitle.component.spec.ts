import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroImgCardSubtitleComponent } from './hero-img-card-subtitle.component';

describe('HeroImgCardSubtitleComponent', () => {
  let component: LgHeroImgCardSubtitleComponent;
  let fixture: ComponentFixture<LgHeroImgCardSubtitleComponent>;
  let debugElement: DebugElement;
  let componentElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgHeroImgCardSubtitleComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroImgCardSubtitleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    componentElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    expect(componentElement.getAttribute('class')).toContain('lg-hero-img-card-subtitle');
  });
});
