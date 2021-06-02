import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCarouselItemComponent } from './carousel-item.component';

describe('LgCarouselItemComponent', () => {
  let component: LgCarouselItemComponent;
  let fixture: ComponentFixture<LgCarouselItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgCarouselItemComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply initial host binding classes and attributes', () => {
    expect(component.element.nativeElement.classList.contains('lg-carousel-item')).toBe(
      true,
    );
    expect(component.element.nativeElement.attributes['aria-selected'].nodeValue).toBe(
      'false',
    );
    expect(component.element.nativeElement.attributes['role'].nodeValue).toBe(
      'tab-panel',
    );
  });

  it('should update the aria-selected attribute when selected', () => {
    component.selected = true;
    fixture.detectChanges();
    expect(component.element.nativeElement.attributes['aria-selected'].nodeValue).toBe(
      'true',
    );
  });
});
