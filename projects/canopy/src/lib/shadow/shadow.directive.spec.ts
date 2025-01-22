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

  it('does not set the hover class by default', () => {
    const fixture = MockRender('<div lgShadow>Shadow</div>');
    const hostElem: HTMLDivElement = fixture.debugElement.query(
      By.directive(LgShadowDirective),
    ).nativeElement;

    expect(hostElem.getAttribute('class')).not.toContain('lg-shadow-hover');
  });

  it('sets the hover class when hasHoverState is true', () => {
    const fixture = MockRender('<div lgShadow [hasHoverState]="true">Shadow</div>');
    const hostElem: HTMLDivElement = fixture.debugElement.query(
      By.directive(LgShadowDirective),
    ).nativeElement;

    expect(hostElem.getAttribute('class')).toContain('lg-shadow-hover');
  });

  it('does not set the hover class when hasHoverState is false', () => {
    const fixture = MockRender('<div lgShadow [hasHoverState]="false">Shadow</div>');
    const hostElem: HTMLDivElement = fixture.debugElement.query(
      By.directive(LgShadowDirective),
    ).nativeElement;

    expect(hostElem.getAttribute('class')).not.toContain('lg-shadow-hover');
  });
});
