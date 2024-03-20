import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardHeroImageComponent } from './card-hero-img.component';

describe('LgCardHeroImageComponent', () => {
  let component: LgCardHeroImageComponent;
  let fixture: ComponentFixture<LgCardHeroImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgCardHeroImageComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCardHeroImageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct element if it has cover true', () => {
    component.src = 'test';
    component.cover = true;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const innerEl: HTMLElement = el.querySelector('.lg-card-hero-image__cover-image');

    expect(innerEl.classList).toBeTruthy();
  });

  it('should render the correct element if it has cover false', () => {
    component.src = 'test';
    component.cover = false;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const innerEl: HTMLElement = el.querySelector('.lg-card-hero-image__img');

    expect(innerEl.classList).toBeTruthy();
  });

  it('should set the correct class if it has an image Src', () => {
    component.src = 'test';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.classList).toContain('lg-card-hero-img__img');
  });

  it('should set the correct alt text if it has an image Src and a image Alt', () => {
    component.src = 'test';
    component.alt = 'alt-test';

    fixture.detectChanges();

    expect(fixture.debugElement.children[0].nativeElement.getAttribute('alt')).toContain(
      'alt-test',
    );
  });

  it('should set the correct backgroundImage if it has a cover image URL', () => {
    component.cover = true;
    component.src = 'test';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const innerEl: HTMLElement = el.querySelector('.lg-card-hero-image__cover-image');

    expect(innerEl.style.backgroundImage).toContain('url("test")');
  });

  it('should set the correct class if it does not have a Image src', () => {
    component.src = undefined;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.classList).toContain('lg-card-hero-img__icon');
  });
});
