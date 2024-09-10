import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgListWithIconsComponent } from './list-with-icons.component';

describe('LgListWithIconsComponent', () => {
  let component: LgListWithIconsComponent;
  let fixture: MockedComponentFixture<LgListWithIconsComponent, {}>;
  let listWithIconsEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgListWithIconsComponent ],
    }).compileComponents();

    fixture = MockRender(
      `
      <ul lg-list-with-icons>
        <li lg-list-with-icons-item iconName="help">List item 1</li>
        <li lg-list-with-icons-item iconName="idea"
          >List item 2
          <ul lg-list-with-icons id="nested-list">
            <li lg-list-with-icons-item iconName="at">List item 2.1</li>
            <li lg-list-with-icons-item iconName="phone-on">List item 2.2</li>
          </ul>
        </li>
        <li lg-list-with-icons-item iconName="house">List item 3</li>
      </ul>
    `,
      {},
      { reset: true },
    );

    component = fixture.debugElement.children[0].componentInstance;
    listWithIconsEl = fixture.debugElement.children[0].nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(listWithIconsEl.getAttribute('class')).toContain('lg-list-with-icons');
  });

  it('should add neutral as the default variant', () => {
    expect(listWithIconsEl.getAttribute('class')).toContain('neutral-foreground');
  });

  it('should add the variant class to the component', () => {
    component.variant = 'light-foreground';
    fixture.detectChanges();

    expect(listWithIconsEl.getAttribute('class')).toContain('light');
  });

  it('should add the variant class to a nested list', () => {
    component.variant = 'dark-foreground';
    component.ngAfterContentInit();

    expect(listWithIconsEl.querySelector('#nested-list').getAttribute('class')).toContain(
      'dark-foreground',
    );
  });
});
