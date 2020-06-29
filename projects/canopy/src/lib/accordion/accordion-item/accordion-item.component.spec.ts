import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { take } from 'rxjs/operators';
import { LgHeadingComponent } from '../../heading';
import { LgIconComponent } from '../../icon';
import { LgAccordionPanelHeadingComponent } from '../accordion-panel-heading/accordion-panel-heading.component';
import { LgAccordionItemContentDirective } from './accordion-item-content.directive';
import { LgAccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'lg-test',
  template: `
    <lg-accordion-item [isActive]="isActive">
      <lg-accordion-panel-heading [headingLevel]="2"></lg-accordion-panel-heading>
      <div class="default-content">Hello!</div>
    </lg-accordion-item>

    <lg-accordion-item [isActive]="lazyIsOpen">
      <lg-accordion-panel-heading [headingLevel]="2"></lg-accordion-panel-heading>
      <ng-template lgAccordionItemContent>
        <div class="lazy-content">Hola!</div>
      </ng-template>
    </lg-accordion-item>
  `
})
class TestAccordionWrapperItemComponent {
  isActive: boolean;
  lazyIsOpen = false;
}

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
        LgAccordionItemContentDirective,
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

  it('should render panel content', () => {
    expect(fixture.debugElement.query(By.css('.default-content'))).toBeDefined();
  });

  describe('when panel content is lazy loaded', () => {
    describe('and panel is not active', () => {
      it('should not show content', () => {
        expect(fixture.debugElement.query(By.css('.lazy-content'))).toBeNull();
      });
    });

    describe('and panel is active', () => {
      beforeEach(() => {
        fixture.debugElement.componentInstance.lazyIsOpen = true;
        fixture.detectChanges();
      });

      it('should show content', () => {
        expect(fixture.debugElement.query(By.css('.lazy-content'))).toBeDefined();
      });
    });
  });

  describe('clicking on the child component trigger', () => {
    let openedSpy: jasmine.Spy;
    let closedSpy: jasmine.Spy;

    beforeEach(() => {
      openedSpy = spyOn(component.opened, 'emit');
      closedSpy = spyOn(component.closed, 'emit');
    });

    it(`should update 'isActive'`, () => {
      triggerElement.nativeElement.click();
      expect(component.isActive).toBe(true);

      triggerElement.nativeElement.click();
      expect(component.isActive).toBe(false);
    });

    it('should emit events', async(() => {
      triggerElement.nativeElement.click();
      expect(openedSpy).toHaveBeenCalled();

      triggerElement.nativeElement.click();
      expect(closedSpy).toHaveBeenCalled();
    }));
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

  describe('when updating isActive input', () => {
    it('should set heading active', () => {
      fixture.debugElement.componentInstance.isActive = true;
      fixture.detectChanges();

      expect(component.isActive).toBeTruthy();
      expect(component.accordionPanelHeading.isActive).toBeTruthy();
    });

    it('should emit opened event', async(() => {
      component.opened.pipe(take(1)).subscribe(ev => expect(ev).toBeUndefined());
      fixture.debugElement.componentInstance.isActive = true;
      fixture.detectChanges();
    }));

    it('should emit closed event', async(() => {
      component.closed.pipe(take(1)).subscribe(ev => expect(ev).toBeUndefined());
      fixture.debugElement.componentInstance.isActive = false;
      fixture.detectChanges();
    }));
  });
});
