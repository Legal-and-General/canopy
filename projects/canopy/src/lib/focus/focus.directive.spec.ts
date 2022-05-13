import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgFocusDirective } from './focus.directive';

@Component({
  template: ' <button type="button" [lgFocus]="testVar">Test button</button> ',
})
class TestFocusComponent {
  testVar = false;
}

describe('LgFocusDirective', () => {
  let component: TestFocusComponent;
  let fixture: ComponentFixture<TestFocusComponent>;
  let el: HTMLElement;
  let focusSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFocusComponent, LgFocusDirective ],
    });

    fixture = TestBed.createComponent(TestFocusComponent);
    component = fixture.componentInstance;
    const de = fixture.debugElement.query(By.css('button'));

    el = de.nativeElement;
    focusSpy = spyOn(el, 'focus');
  });

  describe('when the directive is set to "true"', () => {
    it('should set focus on the element', () => {
      component.testVar = true;
      fixture.detectChanges();

      expect(focusSpy).toHaveBeenCalled();
    });
  });

  describe('when the directive is set to "false"', () => {
    it('should not set focus on the element', () => {
      component.testVar = false;
      fixture.detectChanges();

      expect(focusSpy).not.toHaveBeenCalled();
    });
  });
});
