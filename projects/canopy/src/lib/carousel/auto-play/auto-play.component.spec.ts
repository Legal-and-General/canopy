import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { LgIconComponent } from '../../icon';

import { LgAutoplayComponent } from './auto-play.component';

describe('LgButtonComponent', () => {
  let component: LgAutoplayComponent;
  let fixture: ComponentFixture<LgAutoplayComponent>;
  let pause: DebugElement;
  let play: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ LgAutoplayComponent, MockComponents(LgIconComponent) ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgAutoplayComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('pause', new BehaviorSubject<boolean>(false));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply initial host binding classes and attributes', () => {
    expect(
      component.element.nativeElement.classList.contains('lg-carousel-autoplay'),
    ).toBe(true);
  });

  it('should pause the autoPlay functionality', () => {
    pause = fixture.debugElement.query(
      By.css('.lg-carousel-autoplay__btn.lg-carousel-autoplay__btn--pause'),
    );

    const spy = jest.spyOn(component.pause, 'next');

    pause.nativeElement.click();

    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should play autoPlay functionality', () => {
    fixture.componentRef.setInput('pause', new BehaviorSubject<boolean>(true));
    fixture.detectChanges();

    play = fixture.debugElement.query(
      By.css('.lg-carousel-autoplay__btn.lg-carousel-autoplay__btn--play'),
    );

    const spy = jest.spyOn(component.pause, 'next');

    play.nativeElement.click();

    expect(spy).toHaveBeenCalledWith(false);
  });
});
