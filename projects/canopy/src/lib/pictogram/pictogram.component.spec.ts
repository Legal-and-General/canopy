import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgPictogramComponent } from './pictogram.component';
import { LgPictogramRegistry } from './pictogram.registry';

describe('LgPictogramComponent', () => {
  let component: LgPictogramComponent;
  let fixture: ComponentFixture<LgPictogramComponent>;
  let pictogramRegistryMock: jest.Mocked<LgPictogramRegistry>;

  beforeEach(waitForAsync(() => {
    pictogramRegistryMock = {
      get: jest.fn(),
    } as unknown as jest.Mocked<LgPictogramRegistry>;

    TestBed.configureTestingModule({
      imports: [ LgPictogramComponent ],
      providers: [
        {
          provide: LgPictogramRegistry,
          useValue: pictogramRegistryMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgPictogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the generic pictogram class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-pictogram');
  });

  it('should set `aria-hidden` to true', () => {
    expect(fixture.nativeElement.getAttribute('aria-hidden')).toBe('true');
  });

  it('should not apply fill by default', () => {
    expect(fixture.nativeElement.getAttribute('data-has-fill')).toBe('false');
  });

  it('should apply fill when hasFill is true', () => {
    component.hasFill = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('data-has-fill')).toBe('true');
  });

  it('should remove fill when hasFill is false', () => {
    component.hasFill = false;
    fixture.detectChanges();

    expect(fixture.nativeElement.getAttribute('data-has-fill')).toBe('false');
  });

  describe('setting the name', () => {
    it('should append the correct svg element to the component', async () => {
      expect(fixture.nativeElement.querySelector('#test')).toBeNull();
      expect(fixture.nativeElement.querySelector('svg')).toBeNull();

      pictogramRegistryMock.get.mockResolvedValue(
        '<svg id="test">test-svg<path id="lg-icon-fill-primary"></path></svg>',
      );

      component.name = 'accessible' as any;
      fixture.detectChanges();
      await fixture.whenStable();

      expect(fixture.nativeElement.querySelector('#test')).toBeNull();

      const svgElement = fixture.nativeElement.querySelector('svg');

      expect(svgElement.getAttribute('id')).toMatch(/lg-pictogram-\d+-\d/);

      const pathElement = svgElement.querySelector('path');

      expect(pathElement.getAttribute('id')).toBeNull();
      expect(pathElement.getAttribute('data-colour')).toBe('content-pictogram-fill');
    });

    it('should not throw an error when a pictogram is not registered', () => {
      expect(() => {
        component.name = 'accessible' as any;
      }).not.toThrow();
    });

    it('should log a console error when a pictogram cannot be found', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      pictogramRegistryMock.get.mockResolvedValue(undefined);

      component.name = 'accessible' as any;
      fixture.detectChanges();
      await fixture.whenStable();

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('[Canopy] Pictogram "accessible" cannot be found.'),
      );

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('https://legal-and-general.github.io/canopy/'),
      );

      consoleSpy.mockRestore();
    });
  });

  describe('the size input', () => {
    describe('when not specified', () => {
      it('should set the `sm` class modifier', () => {
        expect(fixture.nativeElement.getAttribute('class')).toContain('lg-pictogram--sm');
      });
    });

    describe('when specified', () => {
      it('should set the correct class modifier', () => {
        component.size = 'md';
        fixture.detectChanges();

        expect(fixture.nativeElement.getAttribute('class')).not.toContain(
          'lg-pictogram--sm',
        );

        expect(fixture.nativeElement.getAttribute('class')).toContain('lg-pictogram--md');
      });
    });
  });

  describe('the colour input', () => {
    it('should set the custom colour CSS variable', () => {
      component.colour = '#005dba';
      fixture.detectChanges();

      expect(fixture.nativeElement.style.getPropertyValue('--lg-pictogram-colour')).toBe(
        '#005dba',
      );
    });
  });

  describe('hasFill input', () => {
    it('should remove the fill style when set to false', () => {
      component.hasFill = false;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.style.getPropertyValue('--lg-pictogram-fill-colour'),
      ).toBe('none');
    });

    it('should restore default when set to true', () => {
      component.hasFill = false;
      fixture.detectChanges();
      component.hasFill = true;
      fixture.detectChanges();

      expect(
        fixture.nativeElement.style.getPropertyValue('--lg-pictogram-fill-colour'),
      ).toBe('');
    });
  });
});
