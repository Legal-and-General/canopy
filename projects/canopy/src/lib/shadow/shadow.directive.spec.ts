import { By } from '@angular/platform-browser';
import { MockBuilder, MockRender } from 'ng-mocks';

import { LgShadowDirective } from './shadow.directive';

describe('LgShadowDirective', () => {
  beforeEach(() => MockBuilder(LgShadowDirective));

  it('automatically sets the class', () => {
    const fixture = MockRender('<div lgShadow>Shadow</div>');
    const hostElem: HTMLDivElement = fixture.debugElement.query(
      By.directive(LgShadowDirective),
    ).nativeElement;

    expect(hostElem.getAttribute('class')).toContain('lg-shadow');
  });
});
