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

  it('should set the correct class if it has a cover image URL', () => {
    component.coverImageUrl = 'test';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.classList).toContain('lg-card-hero-img');
  });

  it('should set the correct class if it has an image Src', () => {
    component.imageSrc = 'test';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.classList).toContain('lg-card-hero-img');
  });

  it('should set the default alt text if it has an image Src and no image Alt', () => {
    component.imageSrc = 'test';

    fixture.detectChanges();

    expect(fixture.debugElement.children[0].nativeElement.getAttribute('alt')).toContain(
      'card-hero-img',
    );
  });

  it('should set the correct alt text if it has an image Src and a image Alt', () => {
    component.imageSrc = 'test';
    component.imageAlt = 'alt-test';

    fixture.detectChanges();

    expect(fixture.debugElement.children[0].nativeElement.getAttribute('alt')).toContain(
      'alt-test',
    );
  });

  it('should set the correct backgroundImage if it has a cover image URL', () => {
    component.coverImageUrl = 'test';

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    const innerEl: HTMLElement = el.querySelector('.lg-card-hero-image__cover-image');

    expect(innerEl.style.backgroundImage).toContain('url("test")');
  });

  it('should set the correct class if it does not have a cover image URL', () => {
    component.coverImageUrl = undefined;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.classList).toContain('lg-card-hero-icon');
  });
});
