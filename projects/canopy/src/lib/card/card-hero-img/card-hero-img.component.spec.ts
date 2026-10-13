import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgCardHeroImageComponent } from './card-hero-img.component';
import { LgCardHeroImgAspectRatio } from './card-hero-img.interface';

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

    expect(innerEl.style.backgroundImage.replaceAll('"', '')).toEqual('url(test)');
  });

  it('should set the correct class if it does not have a Image src', () => {
    component.src = undefined;

    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;

    expect(el.classList).toContain('lg-card-hero-img__icon');
  });

  describe('aspectRatio', () => {
    it('should not set an inline aspect-ratio style when aspectRatio is not provided', () => {
      fixture.detectChanges();

      const el: HTMLElement = fixture.nativeElement;

      expect(el.style.aspectRatio).toBeFalsy();
    });

    it('should not set an inline aspect-ratio style when aspectRatio is set but src is not (pictogram mode)', () => {
      component.aspectRatio = '4:3';
      component.src = undefined;

      fixture.detectChanges();

      const el: HTMLElement = fixture.nativeElement;

      expect(el.style.aspectRatio).toBeFalsy();
    });

    const ratioMap: Array<{ input: LgCardHeroImgAspectRatio; expected: string }> = [
      { input: '1:1', expected: '1 / 1' },
      { input: '5:4', expected: '5 / 4' },
      { input: '4:3', expected: '4 / 3' },
      { input: '16:9', expected: '16 / 9' },
      { input: '2:1', expected: '2 / 1' },
      { input: '4:5', expected: '4 / 5' },
      { input: '9:16', expected: '9 / 16' },
    ];

    ratioMap.forEach(({ input, expected }) => {
      it(`should set the inline aspect-ratio style to "${expected}" when aspectRatio is "${input}"`, () => {
        component.aspectRatio = input;
        component.src = 'test.jpg';

        fixture.detectChanges();

        const el: HTMLElement = fixture.nativeElement;

        expect(el.style.aspectRatio).toBe(expected);
      });
    });
  });
});
