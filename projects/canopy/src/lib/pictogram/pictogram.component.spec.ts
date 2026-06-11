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
});
