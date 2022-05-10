import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgHeroImgCardTitleComponent } from './hero-img-card-title.component';

describe('HeroImgCardTitleComponent', () => {
  let component: LgHeroImgCardTitleComponent;
  let fixture: ComponentFixture<LgHeroImgCardTitleComponent>;
  let debugElement: DebugElement;
  let componentElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgHeroImgCardTitleComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroImgCardTitleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    componentElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct class', () => {
    expect(componentElement.getAttribute('class')).toContain('lg-hero-img-card-title');
  });
});
