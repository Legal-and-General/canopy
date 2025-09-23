import { By } from '@angular/platform-browser';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';

import { LgSuffixDirective } from './suffix.directive';

describe('LgSuffixDirective', () => {
  beforeEach(() => MockBuilder(LgSuffixDirective));

  it('automatically sets an id', () => {
    ngMocks.flushTestBed();

    const fixture = MockRender('<span lgSuffix>Suffix</span>');

    expect(
      fixture.debugElement.query(By.directive(LgSuffixDirective)).nativeElement.id,
    ).toContain('lg-suffix-');
  });
});
