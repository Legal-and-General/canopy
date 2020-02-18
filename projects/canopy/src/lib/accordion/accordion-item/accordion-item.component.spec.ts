import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { LgHeadingComponent } from '../../heading';
import { LgIconComponent } from '../../icon';
import { LgAccordionPanelHeadingComponent } from '../accordion-panel-heading/accordion-panel-heading.component';
import { LgAccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'lg-test',
  template: `
    <lg-accordion-item>
      <lg-accordion-panel-heading
        [headingLevel]="2"
      ></lg-accordion-panel-heading>
    </lg-accordion-item>
  `
})
class TestAccordionWrapperItemComponent {}

describe('LgAccordionItemComponent', () => {
  let component: LgAccordionItemComponent;
  let fixture: ComponentFixture<TestAccordionWrapperItemComponent>;
  let triggerElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestAccordionWrapperItemComponent,
        LgAccordionItemComponent,
        LgAccordionPanelHeadingComponent,
        MockComponents(LgHeadingComponent, LgIconComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionWrapperItemComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();

    triggerElement = fixture.debugElement.query(
      By.css('.lg-accordion__heading-toggle')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clicking on the child component trigger', () => {
    it(`should update 'isActive'`, () => {
      triggerElement.nativeElement.click();

      expect(component.isActive).toBe(true);

      triggerElement.nativeElement.click();
      expect(component.isActive).toBe(false);
    });
  });

  it('should toggle the `active` class on the panel', () => {
    const panelElement = fixture.debugElement.query(
      By.css('.lg-accordion__panel')
    );

    expect(
      panelElement.nativeElement.classList.contains(
        'lg-accordion__panel--active'
      )
    ).toBe(false);

    triggerElement.nativeElement.click();
    fixture.detectChanges();
    expect(
      panelElement.nativeElement.classList.contains(
        'lg-accordion__panel--active'
      )
    ).toBe(true);
  });
});
