import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgPromoCardImageComponent } from './promo-card-image.component';

describe('LgPromoCardImageComponent', () => {
  let component: LgPromoCardImageComponent;
  let fixture: ComponentFixture<LgPromoCardImageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgPromoCardImageComponent ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPromoCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the default class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-promo-card-image');
  });

  it('should set correct background', () => {
    component.imageUrl = 'test';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const innerEl: HTMLElement = el.querySelector('.lg-promo-card-image__content');

    expect(innerEl.style.backgroundImage).toContain('url("test")');
  });
});
