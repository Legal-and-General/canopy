import { By } from '@angular/platform-browser';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { LgPrefixDirective } from './prefix.directive';

describe('LgPrefixDirective', () => {
  beforeEach(() => MockBuilder(LgPrefixDirective));

  it('automatically sets an id', () => {
    ngMocks.flushTestBed();

    const fixture = MockRender('<span lgPrefix>Prefix</span>');

    expect(
      fixture.debugElement.query(By.directive(LgPrefixDirective)).nativeElement.id,
    ).toContain('lg-prefix-');
  });
});
