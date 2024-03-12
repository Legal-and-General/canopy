import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, Input, Renderer2 } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SpacingVariant } from '../spacing.interface';

import { LgRowGapDirective } from './row-gap.directive';

@Component({
  template: `
    <div id="test-0" lgRowGap>Test 0</div>
    <div id="test-1" [lgRowGap]="rowGap">Test 1</div>
  `,
  standalone: true,
  imports: [ LgRowGapDirective ],
})
class TestComponent {
  @Input() rowGap: SpacingVariant;
}

describe('LgRowGapDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElements: Array<DebugElement>;
  let component: TestComponent;
  let renderer: Renderer2;
  let rendererRemoveClassSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgRowGapDirective ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);

    renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2);

    rendererRemoveClassSpy = spyOn(renderer, 'removeClass').and.callThrough();

    fixture.detectChanges();
    component = fixture.componentInstance;

    testElements = fixture.debugElement.queryAll(By.css('div'));
  });

  it('should default to `sm` row-gap', () => {
    expect(testElements[0].nativeElement.getAttribute('class')).toEqual('lg-row-gap--sm');
  });

  it('should add row-gap class for the given value and remove any previous row-gap class', () => {
    const tests = [
      { rowGap: 'xs', expectedPrevious: 'sm' },
      { rowGap: 'xxxl', expectedPrevious: 'xs' },
    ];

    tests.forEach(t => {
      component.rowGap = t.rowGap as SpacingVariant;
      fixture.detectChanges();

      const el = testElements[1].nativeElement;
      const classPrefix = 'lg-row-gap--';

      expect(rendererRemoveClassSpy).toHaveBeenCalledWith(
        el,
        `${classPrefix}${t.expectedPrevious}`,
      );

      expect(el.getAttribute('class')).toEqual(`${classPrefix}${t.rowGap}`);
    });
  });
});
