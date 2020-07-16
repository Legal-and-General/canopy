import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockComponents } from 'ng-mocks';
import { spy, verify } from 'ts-mockito';

import { LgHeadingComponent } from '../../heading';
import { LgIconComponent } from '../../icon';

import { LgAccordionPanelHeadingComponent } from './accordion-panel-heading.component';

describe('LgAccordionPanelHeadingComponent', () => {
  let component: LgAccordionPanelHeadingComponent;
  let fixture: ComponentFixture<LgAccordionPanelHeadingComponent>;
  let triggerElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgAccordionPanelHeadingComponent,
        MockComponents(LgHeadingComponent, LgIconComponent),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgAccordionPanelHeadingComponent);
    component = fixture.componentInstance;
    component.headingLevel = 2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#toggle', () => {
    beforeEach(() => {
      triggerElement = fixture.debugElement.query(
        By.css('.lg-accordion__heading-toggle'),
      );
    });

    describe('when the accordion item is toggled open', () => {
      it(`should set 'isActive' to false`, () => {
        component.isActive = true;
        component.toggle();

        expect(component.isActive).toBe(false);
      });

      it(`should set the 'active' class`, () => {
        expect(
          triggerElement.nativeElement.classList.contains(
            'lg-accordion__heading-toggle--active',
          ),
        ).toBe(false);

        triggerElement.nativeElement.click();
        fixture.detectChanges();
        expect(
          triggerElement.nativeElement.classList.contains(
            'lg-accordion__heading-toggle--active',
          ),
        ).toBe(true);
      });

      it('should set the `aria-expanded` attribute to true', () => {
        expect(triggerElement.attributes['aria-expanded']).toBe('false');

        triggerElement.nativeElement.click();
        fixture.detectChanges();
        expect(triggerElement.attributes['aria-expanded']).toBe('true');
      });
    });

    describe('when the accordion item is toggled close', () => {
      it(`should set 'isActive' to true`, () => {
        component.isActive = false;
        component.toggle();

        expect(component.isActive).toBe(true);
      });

      it('should remove the `active` class', () => {
        triggerElement.nativeElement.click();
        fixture.detectChanges();
        expect(
          triggerElement.nativeElement.classList.contains(
            'lg-accordion__heading-toggle--active',
          ),
        ).toBe(true);

        triggerElement.nativeElement.click();
        fixture.detectChanges();
        expect(
          triggerElement.nativeElement.classList.contains(
            'lg-accordion__heading-toggle--active',
          ),
        ).toBe(false);
      });

      it('should set the `aria-expanded` attribute to false', () => {
        triggerElement.nativeElement.click();
        fixture.detectChanges();
        expect(triggerElement.attributes['aria-expanded']).toBe('true');

        triggerElement.nativeElement.click();
        fixture.detectChanges();
        expect(triggerElement.attributes['aria-expanded']).toBe('false');
      });
    });

    it(`should emit an event with the value of 'isActive'`, () => {
      const componentEventSpy = spy(component.toggleActive);
      component.toggle();

      verify(componentEventSpy.emit(true)).once();
      expect().nothing();
    });
  });
});
