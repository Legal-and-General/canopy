import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { Component, Input } from '@angular/core';

import { LgIconComponent } from '../../icon';
import { LgLinkMenuItemTextComponent } from '../link-menu-item-text/link-menu-item-text.component';

import { LgLinkMenuItemComponent } from './link-menu-item.component';

@Component({
  template: ` <lg-link-menu-item>
    <lg-link-menu-item-text class="bold">Update my direct debit</lg-link-menu-item-text>
    <lg-link-menu-item-text>Do it online</lg-link-menu-item-text>
  </lg-link-menu-item>`,
  standalone: true,
  imports: [ LgLinkMenuItemTextComponent, LgLinkMenuItemComponent ],
})
class TestComponent {
  @Input() target: string = undefined;
}

describe('LgLinkMenuItemComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestComponent,
        LgLinkMenuItemComponent,
        MockComponents(LgLinkMenuItemTextComponent, LgIconComponent),
      ],
    }).compileComponents();
  });

  describe('component tests', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
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

    it('should render the text', () => {
      expect(
        fixture.debugElement.query(By.directive(LgLinkMenuItemTextComponent)),
      ).toBeTruthy();
    });

    it('should render the "chevron-right" icon if the parent is not an anchor element', () => {
      expect(fixture.debugElement.query(By.css('[name="chevron-right"]'))).toBeDefined();
      expect(fixture.debugElement.query(By.css('[name="link-external"]'))).toBeNull();
    });

    it('should log a warning if the parent is not an anchor element', () => {
      const consoleSpy = spyOn(console, 'warn').and.stub();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      expect(consoleSpy).toHaveBeenCalledOnceWith(
        'expected \'lg-link-menu-item\' parent to be an HTML Anchor but got DIV',
      );
    });
  });

  describe('integration', () => {
    const createComponentWithTarget = (target: string) => {
      const template = `
        <a href="#" [attr.target]="target">
          <lg-link-menu-item>
            <lg-icon [name]="'account'"></lg-icon>
            <lg-link-menu-item-text isBold="true">Update my direct debit</lg-link-menu-item-text>
            <lg-link-menu-item-text>Do it online</lg-link-menu-item-text>
          </lg-link-menu-item>
        </a>
      `;

      fixture = TestBed.overrideTemplate(TestComponent, template).createComponent(
        TestComponent,
      );

      component = fixture.componentInstance;
      component.target = target;

      fixture.detectChanges();
    };

    describe('opens in a new tab text', () => {
      const getTextOfElementUnderTest = () =>
        fixture.debugElement.query(By.css('.lg-link-menu-item__icon-container'))
          .nativeElement.textContent;

      it('should not render the text when the parent anchor target attribute is not "_blank"', () => {
        createComponentWithTarget('_parent');

        expect(getTextOfElementUnderTest()).toEqual('');
      });

      it('should render the text when the parent anchor target attribute is "_blank"', () => {
        createComponentWithTarget('_blank');

        expect(getTextOfElementUnderTest()).toEqual(' opens in a new tab');
      });
    });

    describe('icon displayed', () => {
      it('should render the "chevron-right" icon when the parent anchor target attribute is not "_blank"', () => {
        createComponentWithTarget('_parent');

        expect(
          fixture.debugElement.query(By.css('[name="chevron-right"]')),
        ).toBeDefined();

        expect(fixture.debugElement.query(By.css('[name="link-external"]'))).toBeNull();
      });

      it('should render the "link-external" icon when the parent anchor target attribute is "_blank"', () => {
        createComponentWithTarget('_blank');

        expect(
          fixture.debugElement.query(By.css('[name="link-external"]')),
        ).toBeDefined();

        expect(fixture.debugElement.query(By.css('[name="chevron-right"]'))).toBeNull();
      });
    });
  });
});
