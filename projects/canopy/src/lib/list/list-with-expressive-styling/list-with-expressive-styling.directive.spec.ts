import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgListWithExpressiveStylingDirective } from './list-with-expressive-styling.directive';

describe('LgListWithExpressiveStyling', () => {
  let fixture: MockedComponentFixture<LgListWithExpressiveStylingDirective, {}>;
  let orderedList: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgListWithExpressiveStylingDirective ],
    }).compileComponents();

    fixture = MockRender(
      `
      <ol lgListWithExpressiveStyling>
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
      expect(orderedList.getAttribute('class')).toContain('lg-expressive-list');
    });
  });
});
