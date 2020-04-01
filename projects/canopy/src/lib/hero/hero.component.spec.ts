import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LgHeroComponent } from './hero.component';

describe('LgHeroComponent', () => {
  let component: LgHeroComponent;
  let fixture: ComponentFixture<LgHeroComponent>;
  let debugElement: DebugElement;
  let componentElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgHeroComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgHeroComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    componentElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(componentElement.getAttribute('class')).toContain('lg-hero');
  });

  describe('when the overlap is set to -2', () => {
    it('should set the margin-bottom style to 2rem', () => {
      component.overlap = -2;
      fixture.detectChanges();
      expect(componentElement.style['margin-bottom']).toEqual('2rem');
    });
  });

  describe('when the overlap is set to 10', () => {
    it('should set the margin-bottom style to -10rem', () => {
      component.overlap = 10;
      fixture.detectChanges();
      expect(componentElement.style['margin-bottom']).toEqual('-10rem');
    });
  });

  describe('when the overlap is set to null', () => {
    it('should set the margin-bottom style to -2rem', () => {
      component.overlap = null;
      fixture.detectChanges();
      expect(componentElement.style['margin-bottom']).toEqual('-2rem');
    });
  });

  describe('when the overlap is set to undefined', () => {
    it('should set the margin-bottom style to -2rem', () => {
      component.overlap = undefined;
      fixture.detectChanges();
      expect(componentElement.style['margin-bottom']).toEqual('-2rem');
    });
  });
});
