import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { Component, Input } from '@angular/core';

import { LgIconComponent } from '../../icon';
import { LgLinkMenuItemHeadingComponent } from '../link-menu-item-heading/link-menu-item-heading.component';
import { LgLinkMenuItemContentComponent } from '../link-menu-item-content/link-menu-item-content.component';

import { LgLinkMenuItemComponent } from './link-menu-item.component';

@Component({
  template: ` <lg-link-menu-item [internal]="internal">
    <lg-link-menu-item-heading>Update my direct debit</lg-link-menu-item-heading>
    <lg-link-menu-item-content>Do it online</lg-link-menu-item-content>
  </lg-link-menu-item>`,
})
class TestComponent {
  @Input() internal = true;
}

describe('LgLinkMenuItemComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        LgLinkMenuItemComponent,
        MockComponents(
          LgLinkMenuItemHeadingComponent,
          LgLinkMenuItemContentComponent,
          LgIconComponent,
        ),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    component.internal = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(
      fixture.debugElement
        .query(By.directive(LgLinkMenuItemComponent))
        .nativeElement.getAttribute('class'),
    ).toContain('lg-link-menu-item');
  });

  it('should render the link item component', () => {
    expect(
      fixture.debugElement.query(By.directive(LgLinkMenuItemComponent)),
    ).toBeTruthy();
  });

  it('should render the internal icon', () => {
    expect(fixture.debugElement.query(By.css('[name="chevron-right"]'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('[name="link-external"]'))).toBeNull();
  });

  it('should render the external icon when the internal input is set to false', () => {
    component.internal = false;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('[name="link-external"]'))).toBeDefined();
    expect(fixture.debugElement.query(By.css('[name="chevron-right"]'))).toBeNull();
  });

  it('should render the heading', () => {
    expect(
      fixture.debugElement.query(By.directive(LgLinkMenuItemHeadingComponent)),
    ).toBeTruthy();
  });

  it('should render the content', () => {
    expect(
      fixture.debugElement.query(By.directive(LgLinkMenuItemContentComponent)),
    ).toBeTruthy();
  });
});
