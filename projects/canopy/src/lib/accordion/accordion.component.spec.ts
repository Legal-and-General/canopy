import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { LgHeadingComponent } from '../heading';
import { LgIconComponent } from '../icon';
import { LgAccordionItemComponent } from './accordion-item/accordion-item.component';
import { LgAccordionPanelHeadingComponent } from './accordion-panel-heading/accordion-panel-heading.component';

import { LgAccordionComponent } from './accordion.component';

@Component({
  selector: 'lg-test',
  template: `
    <lg-accordion [headingLevel]="2">
      <lg-accordion-item>
        <lg-accordion-panel-heading>Test</lg-accordion-panel-heading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </lg-accordion-item>
    </lg-accordion>
  `
})
class TestAccordionComponent {}

describe('LgAccordionComponent', () => {
  let component: TestAccordionComponent;
  let fixture: ComponentFixture<TestAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestAccordionComponent,
        LgAccordionComponent,
        LgAccordionItemComponent,
        LgAccordionPanelHeadingComponent,
        MockComponents(LgHeadingComponent, LgIconComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets the heading level on the accordion panel heading', () => {
    const accordionPanelHeadingElement = fixture.debugElement.query(
      By.css('lg-accordion-panel-heading')
    );
    const accordionPanelHeadingInstance = accordionPanelHeadingElement.injector.get<
      LgAccordionPanelHeadingComponent
    >(LgAccordionPanelHeadingComponent);

    expect(accordionPanelHeadingInstance.headingLevel).toBe(2);
  });
});
