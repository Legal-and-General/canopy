import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgColourDirective } from './colour.directive';
import type { Colour, ColourTheme } from './colour.interface';

@Component({
  template: ' <div [lgColour]="lgColour" [lgColourTheme]="lgColourTheme">Test</div> ',
  imports: [ LgColourDirective ],
})
class TestComponent {
  @Input() lgColour: Colour = 'blue';
  @Input() lgColourTheme: ColourTheme = 'neutral';
}

describe('LgColour', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let component: TestComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgColourDirective ],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

    testElement = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  }));

  describe('colour classes with default neutral theme', () => {
    it('adds the blue colour class', () => {
      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-mode-blue');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the green colour class', () => {
      component.lgColour = 'green';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-mode-green');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the red colour class', () => {
      component.lgColour = 'red';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-mode-red');
      expect(classes).toContain('lg-theme-neutral');
    });

    it('adds the yellow colour class', () => {
      component.lgColour = 'yellow';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-mode-yellow');
      expect(classes).toContain('lg-theme-neutral');
    });
  });

  describe('colour classes with bold theme', () => {
    beforeEach(() => {
      component.lgColourTheme = 'bold';
      fixture.detectChanges();
    });

    it('adds the blue colour class with bold theme', () => {
      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-mode-blue');
      expect(classes).toContain('lg-theme-bold');
    });

    it('adds the green colour class with bold theme', () => {
      component.lgColour = 'green';
      fixture.detectChanges();

      const classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-mode-green');
      expect(classes).toContain('lg-theme-bold');
    });
  });

  describe('changing colour and theme', () => {
    it('removes old classes and applies new ones when colour changes', () => {
      component.lgColour = 'green';
      fixture.detectChanges();

      let classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-mode-green');
      expect(classes).not.toContain('lg-mode-blue');

      component.lgColour = 'red';
      fixture.detectChanges();

      classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-mode-red');
      expect(classes).not.toContain('lg-mode-green');
    });

    it('removes old classes and applies new ones when theme changes', () => {
      component.lgColourTheme = 'bold';
      fixture.detectChanges();

      let classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-theme-bold');
      expect(classes).not.toContain('lg-theme-neutral');

      component.lgColourTheme = 'neutral';
      fixture.detectChanges();

      classes = testElement.nativeElement.getAttribute('class');

      expect(classes).toContain('lg-theme-neutral');
      expect(classes).not.toContain('lg-theme-bold');
    });
  });
});
