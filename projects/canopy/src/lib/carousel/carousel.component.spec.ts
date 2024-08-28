import { Component, DebugElement } from '@angular/core';
import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { Subscription } from 'rxjs';

import { HeadingLevel, LgHeadingComponent } from '../heading';
import { LgIconComponent } from '../icon';

import { LgCarouselItemComponent } from './carousel-item/carousel-item.component';
import { LgCarouselComponent } from './carousel.component';

@Component({
  selector: 'lg-test-carousel',
  template: `
    <lg-carousel
      [description]="description"
      [headingLevel]="headingLevel"
      [slideDuration]="slideDuration"
      [loopMode]="loopMode"
    >
      <lg-carousel-item>
        <h3>Carousel item 1</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </lg-carousel-item>
      <lg-carousel-item>
        <h3>Carousel item 2</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </lg-carousel-item>
      <lg-carousel-item>
        <h3>Carousel item 3</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </lg-carousel-item>
    </lg-carousel>
  `,
  standalone: true,
  imports: [ LgCarouselComponent, LgCarouselItemComponent ],
})
class TestCarouselComponent {
  carouselComponentRef: LgCarouselComponent;
  description = 'Test Carousel';
  headingLevel: HeadingLevel = 1;
  slideDuration = 500;
  loopMode = false;
}

@Component({
  selector: 'lg-test-wrapper-component',
  template: '<lg-test-carousel></lg-test-carousel>',
  standalone: true,
  imports: [ TestCarouselComponent ],
})
class TestWrapperComponent {}

describe('LgCarouselComponent', () => {
  let component: LgCarouselComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;
  let subscription: Subscription;

  const timerSelectionCheck = () => {
    component.ngAfterContentInit();

    expect(component.selectedItemIndex).toBe(0);
    component['pause'].next(true);
    tick(100);
    fixture.detectChanges();

    expect(component.selectedItemIndex).toBe(0);
    tick(100);
    fixture.detectChanges();

    expect(component.selectedItemIndex).toBe(0);
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestWrapperComponent,
        TestWrapperComponent,
        TestCarouselComponent,
        LgCarouselItemComponent,
        LgCarouselComponent,
        MockComponents(LgHeadingComponent, LgIconComponent),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.debugElement.children[0].children[0].componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    subscription?.unsubscribe();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the pause to true when pauseCarousel is invoked', fakeAsync(() => {
    component.pauseCarousel();
    fixture.detectChanges();

    component.pause.subscribe(pause => {
      expect(pause).toBeDefined();
      expect(pause).toBeTruthy();
    });
  }));

  it('should set the pause to false when playCarousel is invoked', fakeAsync(() => {
    component.playCarousel();
    fixture.detectChanges();

    component.pause.subscribe(pause => {
      expect(pause).toBeDefined();
      expect(pause).toBeFalsy();
    });
  }));

  xit('should detect the amount of carousel item components are nested in order to build the navigation and apply styles to the carousel wrapper', () => {
    const wrapperElement = fixture.debugElement.query(By.css('.lg-carousel__wrapper'));

    expect(component.carouselItemCount).toBe(3);

    expect(wrapperElement.attributes['style']).toBe(
      'width: 300%; left: 0%; transition: left 0.5s ease 0s;',
    );
  });

  describe('navigation', () => {
    let prevButton: DebugElement;
    let bullet1: DebugElement;
    let bullet2: DebugElement;
    let bullet3: DebugElement;
    let nextButton: DebugElement;
    let bullet1Icon: DebugElement;
    let bullet2Icon: DebugElement;
    let bullet3Icon: DebugElement;

    beforeEach(() => {
      const buttons = fixture.debugElement.queryAll(By.css('.lg-carousel__button'));

      prevButton = buttons[0];
      bullet1 = buttons[1];
      bullet2 = buttons[2];
      bullet3 = buttons[3];
      nextButton = buttons[4];

      bullet1Icon = bullet1.query(By.css('.lg-carousel__bullet'));
      bullet2Icon = bullet2.query(By.css('.lg-carousel__bullet'));
      bullet3Icon = bullet3.query(By.css('.lg-carousel__bullet'));
    });

    it('should select the chosen carousel item as expected', () => {
      subscription = component.selectedItemIndexSet$.subscribe(selectedItem => {
        expect(component.selectedItemIndex).toBe(selectedItem);
        bullet2.nativeElement.click();

        expect(component.selectedItemIndex).toBe(1);
      });

      fixture.detectChanges();

      expect(
        bullet2Icon.nativeElement.classList.contains('lg-carousel__bullet--active'),
      ).toBe(true);
    });

    it('should navigate to the previous slide as expected', () => {
      subscription = component.selectedItemIndexSet$.subscribe(selectedItem => {
        expect(component.selectedItemIndex).toBe(selectedItem);
      });

      expect(component.selectedItemIndex).toBe(0);
      bullet2.nativeElement.click();
      fixture.detectChanges();

      expect(component.selectedItemIndex).toBe(1);
      prevButton.nativeElement.click();

      expect(component.selectedItemIndex).toBe(0);

      fixture.detectChanges();

      expect(
        bullet1Icon.nativeElement.classList.contains('lg-carousel__bullet--active'),
      ).toBe(true);
    });

    it('should navigate to the next slide as expected', () => {
      subscription = component.selectedItemIndexSet$.subscribe(selectedItem => {
        expect(component.selectedItemIndex).toBe(selectedItem);
      });

      expect(component.selectedItemIndex).toBe(0);
      nextButton.nativeElement.click();

      expect(component.selectedItemIndex).toBe(1);
      fixture.detectChanges();

      nextButton.nativeElement.click();

      expect(component.selectedItemIndex).toBe(2);

      fixture.detectChanges();

      expect(
        bullet3Icon.nativeElement.classList.contains('lg-carousel__bullet--active'),
      ).toBe(true);
    });

    it('should toggle the disabled attribute for the previous button when loopMode is true - disabled when the first slide is active', () => {
      expect(prevButton.attributes['disabled']).toBe('');
      bullet3.nativeElement.click();
      fixture.detectChanges();

      expect(prevButton.attributes['disabled']).toBeUndefined();
    });

    it('should toggle the disabled attribute for the next button when loopMode is true - disabled when the last slide is active', () => {
      expect(nextButton.attributes['disabled']).toBeUndefined();
      bullet3.nativeElement.click();
      fixture.detectChanges();

      expect(nextButton.attributes['disabled']).toBe('');
    });

    describe('accessibility', () => {
      it('should populate the aria-live region with selected item text', () => {
        const ariaLiveRegion = fixture.debugElement.query(
          By.css('.lg-carousel__active-content'),
        );

        expect(ariaLiveRegion.nativeNode.innerText).toBe(
          'Carousel item 1\n\nLorem ipsum dolor sit amet',
        );

        bullet2.nativeElement.click();
        fixture.detectChanges();

        expect(ariaLiveRegion.nativeNode.innerText).toBe(
          'Carousel item 2\n\nLorem ipsum dolor sit amet',
        );

        bullet3.nativeElement.click();
        fixture.detectChanges();

        expect(ariaLiveRegion.nativeNode.innerText).toBe(
          'Carousel item 3\n\nLorem ipsum dolor sit amet',
        );
      });
    });

    describe('loop mode enabled', () => {
      beforeEach(() => {
        component.loopMode = true;
        fixture.detectChanges();
      });

      it('should navigate to the last slide when previousCarouselItem is invoked and the first slide is active', () => {
        expect(component.selectedItemIndex).toBe(0);
        component.previousCarouselItem();

        expect(component.selectedItemIndex).toBe(2);
      });

      it('should navigate to the first slide when nextCarouselItem is invoked and the last slide is active', () => {
        expect(component.selectedItemIndex).toBe(0);
        bullet3.nativeElement.click();

        expect(component.selectedItemIndex).toBe(2);
        nextButton.nativeElement.click();

        expect(component.selectedItemIndex).toBe(0);
      });
    });

    describe('auto play', () => {
      beforeEach(() => {
        component.autoPlay = true;
        component.autoPlayDelay = 100;
        fixture.detectChanges();
      });

      it('should set the timer correctly', fakeAsync(() => {
        const checkSelectedItemIndex = () => {
          expect(component.selectedItemIndex).toBe(0);
          tick(100);
          fixture.detectChanges();

          expect(component.selectedItemIndex).toBe(1);
          tick(100);
          fixture.detectChanges();

          expect(component.selectedItemIndex).toBe(2);
        };

        component.ngAfterContentInit();

        checkSelectedItemIndex();
        tick(100);
        fixture.detectChanges();
        checkSelectedItemIndex();
        discardPeriodicTasks();
      }));

      it('should pause the timer', fakeAsync(() => {
        timerSelectionCheck();
        discardPeriodicTasks();
      }));

      it('should restart a paused timer', fakeAsync(() => {
        timerSelectionCheck();
        component['pause'].next(false);
        tick(100);
        fixture.detectChanges();

        expect(component.selectedItemIndex).toBe(1);
        tick(100);
        fixture.detectChanges();

        expect(component.selectedItemIndex).toBe(2);
        discardPeriodicTasks();
      }));
    });
  });
});
