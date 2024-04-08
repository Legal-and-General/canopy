import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { instance, mock, when } from '@typestrong/ts-mockito';

import { LgBrandIconComponent } from './brand-icon.component';
import { LgBrandIconRegistry } from './brand-icon.registry';

describe('LgBrandIconComponent', () => {
  let component: LgBrandIconComponent;
  let fixture: ComponentFixture<LgBrandIconComponent>;
  let brandIconRegistryMock: LgBrandIconRegistry;

  beforeEach(waitForAsync(() => {
    brandIconRegistryMock = mock(LgBrandIconRegistry);

    TestBed.configureTestingModule({
      imports: [ LgBrandIconComponent ],
      providers: [
        {
          provide: LgBrandIconRegistry,
          useFactory: () => instance(brandIconRegistryMock),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgBrandIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the generic brand-icon class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-brand-icon');
  });

  it('should set `aria-hidden` to true', () => {
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toBe('true');
  });

  describe('setting the name', () => {
    it('should append the correct svg element to the component', () => {
      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(fixture.nativeElement.querySelector('svg')).toBeNull();

      when(brandIconRegistryMock.getBrandIcon('sun')).thenReturn(
        '<svg id="test">test-svg<path id="lg-icon-fill-primary"></path></svg>',
      );

      component.name = 'sun';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#test')).toBeNull();

      expect(
        /lg-brand-icon-\d+-\d/.test(
          fixture.nativeElement.querySelector('svg').getAttribute('id'),
        ),
      ).toBeTrue();

      const pathEl = fixture.nativeElement.querySelector('path');

      expect(pathEl.getAttribute('id')).not.toContain('lg-icon-fill-primary');
      expect(pathEl.getAttribute('data-colour')).toContain('lg-icon-fill-primary');
    });
  });

  describe('the colour input', () => {
    beforeEach(() => {
      when(brandIconRegistryMock.getBrandIcon('sun')).thenReturn(
        '<svg id="test">test-svg<path id="lg-icon-fill-primary"></path></svg>',
      );

      component.name = 'sun';
    });

    describe('when not specified', () => {
      it('shouldn\'t set the fill colour', () => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector(
          '[data-colour="lg-icon-fill-primary"]',
        );

        expect(el.style.fill).toEqual('');
      });
    });

    describe('when specified', () => {
      it('should apply the specific colour', () => {
        component.colour = '--colour-css-variable';
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector(
          '[data-colour="lg-icon-fill-primary"]',
        );

        expect(el.style.fill).toEqual('var(--colour-css-variable)');
      });
    });

    it('when the icon isn\'t coloured it should not set the fill style', () => {
      when(brandIconRegistryMock.getBrandIcon('sun')).thenReturn(
        '<svg id="test">test-svg<path id="no-color"></path></svg>',
      );

      component.name = 'sun';

      fixture.detectChanges();
      const el = fixture.nativeElement.querySelector('path[id^="lg-brand-icon-"]');

      expect(el.getAttribute('data-colour')).toBeNull();
      expect(el.style.fill).toEqual('');
    });
  });

  describe('the half tone colour input', () => {
    it('should apply the specific colour', () => {
      when(brandIconRegistryMock.getBrandIcon('sun')).thenReturn(
        '<svg id="test">test-svg<path id="Half-tone"></path></svg>',
      );

      component.name = 'sun';
      component.halfToneColour = '--colour-css-variable';
      fixture.detectChanges();
      const el = fixture.nativeElement.querySelector(
        '[data-colour="lg-icon-half-tone-fill"]',
      );

      expect(el.style.fill).toEqual('var(--colour-css-variable)');
    });
  });

  describe('the outlines colour input', () => {
    it('should apply the specific colour', () => {
      when(brandIconRegistryMock.getBrandIcon('sun')).thenReturn(
        '<svg id="test">test-svg<path id="Outlines"></path></svg>',
      );

      component.name = 'sun';
      component.outlinesColour = 'rgb(102, 102, 102)';
      fixture.detectChanges();
      const el = fixture.nativeElement.querySelector(
        '[data-colour="lg-icon-outlines-fill"]',
      );

      expect(el.style.fill).toEqual('rgb(102, 102, 102)');
    });
  });

  describe('the size input', () => {
    describe('when not specified', () => {
      it('should set the `sm` class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-brand-icon--sm',
        );
      });
    });

    describe('when specified', () => {
      it('should set the correct class modifier', () => {
        component.size = 'md';
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-brand-icon--sm',
        );

        expect(fixture.nativeElement.getAttribute('class')).toContain(
          'lg-brand-icon--md',
        );
      });
    });
  });
});
