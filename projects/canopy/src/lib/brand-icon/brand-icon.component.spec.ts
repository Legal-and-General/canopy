import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { instance, mock, when } from 'ts-mockito';

import { LgBrandIconComponent } from './brand-icon.component';
import { LgBrandIconRegistry } from './brand-icon.registry';

describe('LgBrandIconComponent', () => {
  let component: LgBrandIconComponent;
  let fixture: ComponentFixture<LgBrandIconComponent>;
  let brandIconRegistryMock: LgBrandIconRegistry;

  beforeEach(
    waitForAsync(() => {
      brandIconRegistryMock = mock(LgBrandIconRegistry);

      TestBed.configureTestingModule({
        declarations: [LgBrandIconComponent],
        providers: [
          {
            provide: LgBrandIconRegistry,
            useFactory: () => instance(brandIconRegistryMock),
          },
        ],
      }).compileComponents();
    }),
  );

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
        '<svg id="test">test-svg</svg>',
      );

      component.name = 'sun';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(
        /lg-brand-icon-\d-\d/.test(
          fixture.nativeElement.querySelector('svg').getAttribute('id'),
        ),
      ).toBeTrue();
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
