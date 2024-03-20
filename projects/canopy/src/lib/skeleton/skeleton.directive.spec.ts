import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LgSkeletonDirective } from './skeleton.directive';

@Component({
  template: ' <div lgSkeleton>{{ data?.label }}</div> ',
  standalone: true,
})
class TestComponent {
  @Input() data = null;
  @Input() height = '1';
  @Input() width = '2';
}

describe('LgSkeletonDirective', () => {
  const elem = document.createTextNode('Some text content');
  const mockMutationRecord = {
    addedNodes: null,
    attributeName: '',
    attributeNamespace: '',
    nextSibling: null,
    previousSibling: null,
    oldValue: null,
    type: 'characterData',
    target: elem,
    removedNodes: null,
  } as MutationRecord;
  let fixture: ComponentFixture<TestComponent>;
  let testElement: DebugElement;
  let directive: LgSkeletonDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ TestComponent, LgSkeletonDirective ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    testElement = fixture.debugElement.query(By.directive(LgSkeletonDirective));
    directive = testElement.injector.get(LgSkeletonDirective);
  }));

  it('adds default skeleton class if data is null', () => {
    fixture.detectChanges();

    expect(testElement.nativeElement.classList.contains('lg-skeleton')).toBeTruthy();
  });

  it('does not add default skeleton class if data is not null', () => {
    directive.observeChanges([ mockMutationRecord ]);
    fixture.detectChanges();

    expect(testElement.nativeElement.classList.contains('lg-skeleton')).not.toBeTruthy();
  });

  describe('set width', () => {
    it('sets the width if specified and the element is empty', () => {
      const mutationRecord = {
        ...mockMutationRecord,
        target: document.createTextNode(''),
      };

      directive.lgSkeletonWidth = '1';
      directive.observeChanges([ mutationRecord ]);
      fixture.detectChanges();

      expect(testElement.nativeElement.style.getPropertyValue('width')).toBe('1em');
    });

    it('sets the width to `100%` when host is empty and width is not specified', () => {
      const mutationRecord = {
        ...mockMutationRecord,
        target: document.createTextNode(''),
      };

      directive.lgSkeletonWidth = null;
      directive.observeChanges([ mutationRecord ]);
      fixture.detectChanges();

      expect(testElement.nativeElement.style.getPropertyValue('width')).toBe('100%');
    });

    it('does not set the width if host is not empty', () => {
      const mutationRecord = {
        ...mockMutationRecord,
        target: document.createTextNode('Some text content'),
      };

      directive.lgSkeletonWidth = '5';
      directive.observeChanges([ mutationRecord ]);
      fixture.detectChanges();

      expect(testElement.nativeElement.style.getPropertyValue('width')).toBe('');
    });
  });

  describe('set height', () => {
    it('sets the height if specified and the element is empty', () => {
      const mutationRecord = {
        ...mockMutationRecord,
        target: document.createTextNode(''),
      };

      directive.lgSkeletonHeight = '2';
      directive.observeChanges([ mutationRecord ]);
      fixture.detectChanges();

      expect(testElement.nativeElement.style.getPropertyValue('height')).toBe('2em');
    });

    it('sets the height to `auto` when host is empty and height is not specified', () => {
      const mutationRecord = {
        ...mockMutationRecord,
        target: document.createTextNode(''),
      };

      directive.lgSkeletonHeight = null;
      directive.observeChanges([ mutationRecord ]);
      fixture.detectChanges();

      expect(testElement.nativeElement.style.getPropertyValue('height')).toBe('auto');
    });

    it('does not set the height if host is not empty', () => {
      const mutationRecord = {
        ...mockMutationRecord,
        target: document.createTextNode('Some text content'),
      };

      directive.lgSkeletonHeight = '4';
      directive.observeChanges([ mutationRecord ]);
      fixture.detectChanges();

      expect(testElement.nativeElement.style.getPropertyValue('height')).toBe('');
    });
  });

  describe('set right alignment', () => {
    it('sets the alignment class if specified and host is empty', () => {
      const mutationRecord = {
        ...mockMutationRecord,
        target: document.createTextNode(''),
      };

      directive.lgSkeletonRightAlign = true;
      directive.observeChanges([ mutationRecord ]);
      fixture.detectChanges();

      expect(
        testElement.nativeElement.classList.contains('lg-skeleton--right'),
      ).toBeTruthy();
    });

    it('does not set the alignment class if is host is not empty', () => {
      const mutationRecord = {
        ...mockMutationRecord,
        target: document.createTextNode('I am not empty'),
      };

      directive.lgSkeletonRightAlign = true;
      directive.observeChanges([ mutationRecord ]);
      fixture.detectChanges();

      expect(
        testElement.nativeElement.classList.contains('lg-skeleton--right'),
      ).not.toBeTruthy();
    });

    it('does not set the alignment class if not specified', () => {
      const mutationRecord = {
        ...mockMutationRecord,
        target: document.createTextNode(''),
      };

      directive.lgSkeletonRightAlign = false;
      directive.observeChanges([ mutationRecord ]);
      fixture.detectChanges();

      expect(
        testElement.nativeElement.classList.contains('lg-skeleton--right'),
      ).not.toBeTruthy();
    });
  });
});
