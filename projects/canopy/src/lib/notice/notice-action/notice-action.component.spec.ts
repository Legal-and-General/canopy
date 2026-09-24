import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgButtonComponent, LgButtonGroupComponent } from '../../button';

import { LgNoticeActionComponent } from './notice-action.component';

@Component({
  template: `
    <lg-notice-action [type]="type">
      @if (type === 'link') {
        <a href="#">Continue</a>
      } @else if (type === 'button-group') {
        <lg-button-group>
          <button lg-button type="button">Continue</button>
          <button lg-button type="button">Cancel</button>
        </lg-button-group>
      } @else {
        <button lg-button type="button">Continue</button>
      }
    </lg-notice-action>
  `,
  imports: [ LgButtonComponent, LgButtonGroupComponent, LgNoticeActionComponent ],
})
class TestHostComponent {
  type: 'link' | 'button' | 'button-group' = 'button';
}

@Component({
  template: `
    <lg-notice-action type="link">
      <button lg-button type="button">Continue</button>
    </lg-notice-action>
  `,
  imports: [ LgButtonComponent, LgNoticeActionComponent ],
})
class InvalidTestHostComponent {}

describe('LgNoticeActionComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestHostComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it.each([ 'link', 'button', 'button-group' ])('accepts the %s action type', type => {
    host.type = type as TestHostComponent['type'];

    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('rejects an action that does not match its declared type', () => {
    const invalidFixture = TestBed.createComponent(InvalidTestHostComponent);

    expect(() => {
      invalidFixture.detectChanges();
    }).toThrow('LgNoticeActionComponent: type "link" must contain exactly one link.');
  });
});
