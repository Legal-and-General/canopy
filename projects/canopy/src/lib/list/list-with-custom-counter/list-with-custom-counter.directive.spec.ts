import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgListWithCustomCounterDirective } from './list-with-custom-counter.directive';

describe('LgListWithCustomCounterDirective', () => {
  let fixture: MockedComponentFixture<LgListWithCustomCounterDirective, {}>;
  let orderedList: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgListWithCustomCounterDirective ],
    }).compileComponents();

    fixture = MockRender(
      `
      <ol lgListWithCustomCounter>
        <li>Item 1</li>
        <li>Item 2</li>
      </ol>
    `,
      {},
      { reset: true },
    );

    orderedList = fixture.debugElement.children[0].nativeElement;
    fixture.detectChanges();
  }));

  describe('when the directive is set', () => {
    it('should add a CSS class to the list', () => {
      expect(orderedList.getAttribute('class')).toContain('lg-list-with-custom-counter');
    });
  });
});
