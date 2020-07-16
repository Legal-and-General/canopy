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
      declarations: [LgHeroComponent],
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
    beforeEach(() => {
      component.overlap = -2;
      fixture.detectChanges();
      fixture.detectChanges();
    });

    it('should set the margin-bottom style to 2rem', () => {
      expect(componentElement.style['margin-bottom']).toEqual('2rem');
    });

    it('should not set the padding-bottom', () => {
      expect(componentElement.style['padding-bottom']).toEqual('');
    });
  });

  describe('when the overlap is set to 10', () => {
    beforeEach(() => {
      component.overlap = 10;
      fixture.detectChanges();
    });

    it('should set the margin-bottom style to -10rem', () => {
      expect(componentElement.style['margin-bottom']).toEqual('-10rem');
    });

    it('should set the padding-bottom style to 10rem', () => {
      expect(componentElement.style['padding-bottom']).toEqual('10rem');
    });
  });

  describe('when the overlap is set to null', () => {
    beforeEach(() => {
      component.overlap = null;
      fixture.detectChanges();
    });

    it('should not set the margin-bottom style', () => {
      expect(componentElement.style['margin-bottom']).toEqual('');
    });

    it('should not set the padding-bottom style', () => {
      expect(componentElement.style['padding-bottom']).toEqual('');
    });
  });

  describe('when the overlap is set to undefined', () => {
    beforeEach(() => {
      component.overlap = undefined;
      fixture.detectChanges();
    });

    it('should not set the margin-bottom', () => {
      expect(componentElement.style['margin-bottom']).toEqual('');
    });

    it('should not set the padding-bottom', () => {
      expect(componentElement.style['padding-bottom']).toEqual('');
    });
  });
});
