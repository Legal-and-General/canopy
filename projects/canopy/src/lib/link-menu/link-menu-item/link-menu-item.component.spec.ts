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
  @Input() target: string = undefined;
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

  describe('component tests', () => {
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
    describe('opens in a new tab text', () => {
      const createComponentWithTarget = (target: string) => {
        const template = `
        <a href="#" [target]="target">
          <lg-link-menu-item>
            <lg-link-menu-item-heading>Update my direct debit</lg-link-menu-item-heading>
            <lg-link-menu-item-content>Do it online</lg-link-menu-item-content>
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
  });
});
