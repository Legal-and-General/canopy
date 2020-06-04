import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { LgHeadingComponent } from '../../heading/heading.component';
import { LgIconComponent } from '../../icon/icon.component';
import { LgDetailsPanelHeadingComponent } from './details-panel-heading.component';

describe('LgDetailsPanelHeadingComponent', () => {
  let component: LgDetailsPanelHeadingComponent;
  let fixture: ComponentFixture<LgDetailsPanelHeadingComponent>;
  let triggerElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgDetailsPanelHeadingComponent,
        MockComponents(LgIconComponent, LgHeadingComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgDetailsPanelHeadingComponent);
    component = fixture.componentInstance;
    triggerElement = fixture.debugElement.query(
      By.css('.lg-details-panel-heading__toggle')
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the details container is toggled open', () => {
    it(`should set 'isActive' to false`, () => {
      component.isActive = true;
      component.toggle();

      expect(component.isActive).toBe(false);
    });

    it(`should set the 'active' class`, () => {
      expect(
        triggerElement.nativeElement.classList.contains(
          'lg-details-panel-heading__toggle--active'
        )
      ).toBe(false);

      triggerElement.nativeElement.click();
      fixture.detectChanges();
      expect(
        triggerElement.nativeElement.classList.contains(
          'lg-details-panel-heading__toggle--active'
        )
      ).toBe(true);
    });

    it('should set the aria expanded attribute to true', () => {
      expect(triggerElement.attributes['aria-expanded']).toBe('false');

      triggerElement.nativeElement.click();
      fixture.detectChanges();
      expect(triggerElement.attributes['aria-expanded']).toBe('true');
    });
  });

  describe('when the details item is toggled close', () => {
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
          'lg-details-panel-heading__toggle--active'
        )
      ).toBe(true);

      triggerElement.nativeElement.click();
      fixture.detectChanges();
      expect(
        triggerElement.nativeElement.classList.contains(
          'lg-details-panel-heading__toggle--active'
        )
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
});
