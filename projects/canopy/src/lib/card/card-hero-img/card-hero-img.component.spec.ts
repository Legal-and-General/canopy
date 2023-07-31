import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardHeroImageComponent } from './card-hero-img.component';

describe('LgCardHeroImageComponent', () => {
  let component: LgCardHeroImageComponent;
  let fixture: ComponentFixture<LgCardHeroImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgCardHeroImageComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardHeroImageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct class if it has an image URL', () => {
    component.imageUrl = 'test';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.classList).toContain('lg-card-hero-img');
  });

  it('should set the correct backgroundImage if it has an image URL', () => {
    component.imageUrl = 'test';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const innerEl: HTMLElement = el.querySelector('.lg-card-hero-image__content');

    expect(innerEl.style.backgroundImage).toContain('url("test")');
  });

  it('should set the correct class if it does not have an image URL', () => {
    component.imageUrl = undefined;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.classList).toContain('lg-card-hero-icon');
  });
});
