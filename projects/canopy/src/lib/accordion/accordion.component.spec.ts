import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockComponents } from 'ng-mocks';

import { LgHeadingComponent } from '../heading';
import { LgIconComponent } from '../icon';
import { LgAccordionItemContentDirective } from './accordion-item/accordion-item-content.directive';
import { LgAccordionItemComponent } from './accordion-item/accordion-item.component';
import { LgAccordionPanelHeadingComponent } from './accordion-panel-heading/accordion-panel-heading.component';
import { LgAccordionComponent } from './accordion.component';

@Component({
  selector: 'lg-test',
  template: `
    <lg-accordion [headingLevel]="2" [multi]="isMulti">
      <lg-accordion-item>
        <lg-accordion-panel-heading>Test</lg-accordion-panel-heading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </lg-accordion-item>
      <lg-accordion-item [isActive]="true">
        <lg-accordion-panel-heading>Test</lg-accordion-panel-heading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </lg-accordion-item>
    </lg-accordion>
  `,
})
class TestAccordionComponent {
  isMulti = true;
}

describe('LgAccordionComponent', () => {
  let component: TestAccordionComponent;
  let fixture: ComponentFixture<TestAccordionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          TestAccordionComponent,
          LgAccordionComponent,
          LgAccordionItemComponent,
          LgAccordionItemContentDirective,
          LgAccordionPanelHeadingComponent,
          MockComponents(LgHeadingComponent, LgIconComponent),
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the heading level on the panel headings', () => {
    fixture.debugElement
      .queryAll(By.css('lg-accordion-panel-heading'))
      .forEach((heading) =>
        expect(
          heading.injector.get<LgAccordionPanelHeadingComponent>(
            LgAccordionPanelHeadingComponent,
          ).headingLevel,
        ).toBe(2),
      );
  });

  describe('when using single item active view', () => {
    let itemOne: DebugElement;
    let itemTwo: DebugElement;

    beforeEach(() => {
      component.isMulti = false;
      fixture.detectChanges();

      const items = fixture.debugElement.queryAll(By.css('lg-accordion-item'));
      itemOne = items[0];
      itemTwo = items[1];
    });

    it('should toggle the active open panel', () => {
      expect(itemOne.componentInstance.isActive).toBeFalsy();
      expect(itemTwo.componentInstance.isActive).toBeTruthy();

      itemOne.nativeElement.querySelector('.lg-accordion__heading-toggle').click();
      fixture.detectChanges();

      expect(itemOne.componentInstance.isActive).toBeTruthy();
      expect(itemTwo.componentInstance.isActive).toBeFalsy();
    });
  });
});
