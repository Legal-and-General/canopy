import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ColourClassService } from './colour-class.service';
import type { Colour, ColourTheme } from './colour.interface';

describe('ColourClassService', () => {
  let service: ColourClassService;
  let mockRenderer: jest.Mocked<Renderer2>;
  let mockElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ColourClassService ],
    });

    service = TestBed.inject(ColourClassService);
    mockElement = document.createElement('div');

    mockRenderer = {
      addClass: jest.fn(),
      removeClass: jest.fn(),
    } as unknown as jest.Mocked<Renderer2>;
  });

  describe('applyColourClasses', () => {
    it('should apply colour classes with default neutral theme when no theme is provided', () => {
      const colour: Colour = 'blue';
      const appliedClasses = service.applyColourClasses(
        mockRenderer,
        mockElement,
        colour,
      );

      expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElement, 'lg-mode-blue');
      expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElement, 'lg-theme-neutral');
      expect(appliedClasses).toEqual([ 'lg-mode-blue', 'lg-theme-neutral' ]);
      expect(mockRenderer.addClass).toHaveBeenCalledTimes(2);
    });

    it('should apply colour classes when theme is provided', () => {
      const colour: Colour = 'green';
      const theme: ColourTheme = 'bold';
      const appliedClasses = service.applyColourClasses(
        mockRenderer,
        mockElement,
        colour,
        theme,
      );

      expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElement, 'lg-mode-green');

      expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElement, 'lg-theme-bold');
      expect(appliedClasses).toEqual([ 'lg-mode-green', 'lg-theme-bold' ]);
      expect(mockRenderer.addClass).toHaveBeenCalledTimes(2);
    });

    it('should remove previous classes before applying new ones', () => {
      const colour: Colour = 'red';
      const theme: ColourTheme = 'neutral';
      const previousClasses = [ 'lg-mode-yellow', 'lg-theme-bold', 'old-class' ];

      service.applyColourClasses(
        mockRenderer,
        mockElement,
        colour,
        theme,
        previousClasses,
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(
        mockElement,
        'lg-mode-yellow',
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'lg-theme-bold');
      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'old-class');
      expect(mockRenderer.removeClass).toHaveBeenCalledTimes(3);
    });

    it('should apply correct classes for all colour types', () => {
      const colours: Array<Colour> = [ 'blue', 'green', 'red', 'yellow' ];
      const theme: ColourTheme = 'neutral';

      colours.forEach(colour => {
        jest.clearAllMocks();
        const appliedClasses = service.applyColourClasses(
          mockRenderer,
          mockElement,
          colour,
          theme,
        );

        expect(appliedClasses).toEqual([ `lg-mode-${colour}`, 'lg-theme-neutral' ]);

        expect(mockRenderer.addClass).toHaveBeenCalledWith(
          mockElement,
          `lg-mode-${colour}`,
        );
      });
    });

    it('should apply correct classes for all theme types', () => {
      const themes: Array<ColourTheme> = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];
      const colour: Colour = 'blue';

      themes.forEach(theme => {
        jest.clearAllMocks();
        const appliedClasses = service.applyColourClasses(
          mockRenderer,
          mockElement,
          colour,
          theme,
        );

        expect(appliedClasses).toContain('lg-mode-blue');
        expect(appliedClasses).toContain(`lg-theme-${theme}`);

        expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElement, 'lg-mode-blue');

        expect(mockRenderer.addClass).toHaveBeenCalledWith(
          mockElement,
          `lg-theme-${theme}`,
        );
      });
    });

    it('should switch colour classes correctly', () => {
      const colour: Colour = 'red';
      const previousClasses = [ 'lg-mode-blue', 'lg-theme-neutral' ];

      const appliedClasses = service.applyColourClasses(
        mockRenderer,
        mockElement,
        colour,
        'subtle',
        previousClasses,
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'lg-mode-blue');

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(
        mockElement,
        'lg-theme-neutral',
      );

      expect(appliedClasses).toEqual([ 'lg-mode-red', 'lg-theme-subtle' ]);
    });

    it('should switch theme classes correctly', () => {
      const colour: Colour = 'yellow';
      const previousClasses = [ 'lg-mode-yellow', 'lg-theme-bold' ];

      const appliedClasses = service.applyColourClasses(
        mockRenderer,
        mockElement,
        colour,
        'neutral',
        previousClasses,
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(
        mockElement,
        'lg-mode-yellow',
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'lg-theme-bold');

      expect(appliedClasses).toEqual([ 'lg-mode-yellow', 'lg-theme-neutral' ]);
    });
  });

  describe('removeColourClasses', () => {
    it('should remove all provided classes', () => {
      const classes = [ 'lg-mode-blue', 'lg-theme-bold', 'extra-class' ];

      service.removeColourClasses(mockRenderer, mockElement, classes);

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'lg-mode-blue');

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'lg-theme-bold');

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'extra-class');

      expect(mockRenderer.removeClass).toHaveBeenCalledTimes(3);
    });

    it('should handle empty array gracefully', () => {
      service.removeColourClasses(mockRenderer, mockElement, []);

      expect(mockRenderer.removeClass).not.toHaveBeenCalled();
    });

    it('should handle undefined classes gracefully', () => {
      service.removeColourClasses(mockRenderer, mockElement, undefined as any);

      expect(mockRenderer.removeClass).not.toHaveBeenCalled();
    });
  });
});
