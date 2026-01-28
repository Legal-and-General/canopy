import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { StatusClassService } from './status-class.service';
import type { Status, Theme } from './status.interface';

describe('StatusClassService', () => {
  let service: StatusClassService;
  let mockRenderer: jest.Mocked<Renderer2>;
  let mockElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ StatusClassService ],
    });

    service = TestBed.inject(StatusClassService);
    mockElement = document.createElement('div');

    mockRenderer = {
      addClass: jest.fn(),
      removeClass: jest.fn(),
    } as unknown as jest.Mocked<Renderer2>;
  });

  describe('applyStatusClasses', () => {
    it('should apply status classes with default neutral theme when no theme is provided', () => {
      const status: Status = 'info';
      const appliedClasses = service.applyStatusClasses(
        mockRenderer,
        mockElement,
        status,
      );

      expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElement, 'lg-status-info');
      expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElement, 'lg-theme-neutral');
      expect(appliedClasses).toEqual([ 'lg-status-info', 'lg-theme-neutral' ]);
      expect(mockRenderer.addClass).toHaveBeenCalledTimes(2);
    });

    it('should apply status classes when theme is provided', () => {
      const status: Status = 'success';
      const theme: Theme = 'bold';
      const appliedClasses = service.applyStatusClasses(
        mockRenderer,
        mockElement,
        status,
        theme,
      );

      expect(mockRenderer.addClass).toHaveBeenCalledWith(
        mockElement,
        'lg-status-success',
      );

      expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElement, 'lg-theme-bold');
      expect(appliedClasses).toEqual([ 'lg-status-success', 'lg-theme-bold' ]);
      expect(mockRenderer.addClass).toHaveBeenCalledTimes(2);
    });

    it('should remove previous classes before applying new ones', () => {
      const status: Status = 'warning';
      const theme: Theme = 'neutral';
      const previousClasses = [ 'lg-status-error', 'lg-theme-bold', 'old-class' ];

      service.applyStatusClasses(
        mockRenderer,
        mockElement,
        status,
        theme,
        previousClasses,
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(
        mockElement,
        'lg-status-error',
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'lg-theme-bold');
      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'old-class');
      expect(mockRenderer.removeClass).toHaveBeenCalledTimes(3);
    });

    it('should apply correct classes for all status types', () => {
      const statuses: Array<Status> = [ 'generic', 'info', 'success', 'warning', 'error' ];
      const theme: Theme = 'neutral';

      statuses.forEach(status => {
        jest.clearAllMocks();
        const appliedClasses = service.applyStatusClasses(
          mockRenderer,
          mockElement,
          status,
          theme,
        );

        expect(appliedClasses).toEqual([ `lg-status-${status}`, 'lg-theme-neutral' ]);

        expect(mockRenderer.addClass).toHaveBeenCalledWith(
          mockElement,
          `lg-status-${status}`,
        );
      });
    });

    it('should apply correct classes for all theme types', () => {
      const themes: Array<Theme> = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];
      const status: Status = 'info';

      themes.forEach(theme => {
        jest.clearAllMocks();
        const appliedClasses = service.applyStatusClasses(
          mockRenderer,
          mockElement,
          status,
          theme,
        );

        expect(appliedClasses).toContain('lg-status-info');
        expect(appliedClasses).toContain(`lg-theme-${theme}`);

        expect(mockRenderer.addClass).toHaveBeenCalledWith(mockElement, 'lg-status-info');

        expect(mockRenderer.addClass).toHaveBeenCalledWith(
          mockElement,
          `lg-theme-${theme}`,
        );
      });
    });

    it('should switch status classes correctly', () => {
      const status: Status = 'error';
      const previousClasses = [ 'lg-status-warning', 'lg-theme-neutral' ];

      const appliedClasses = service.applyStatusClasses(
        mockRenderer,
        mockElement,
        status,
        'subtle',
        previousClasses,
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(
        mockElement,
        'lg-status-warning',
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(
        mockElement,
        'lg-theme-neutral',
      );

      expect(appliedClasses).toEqual([ 'lg-status-error', 'lg-theme-subtle' ]);
    });

    it('should switch theme classes correctly', () => {
      const status: Status = 'warning';
      const previousClasses = [ 'lg-status-warning', 'lg-theme-bold' ];

      const appliedClasses = service.applyStatusClasses(
        mockRenderer,
        mockElement,
        status,
        'neutral',
        previousClasses,
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(
        mockElement,
        'lg-status-warning',
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'lg-theme-bold');

      expect(appliedClasses).toEqual([ 'lg-status-warning', 'lg-theme-neutral' ]);
    });
  });

  describe('removeStatusClasses', () => {
    it('should remove all provided classes', () => {
      const classes = [ 'lg-status-info', 'lg-theme-bold', 'extra-class' ];

      service.removeStatusClasses(mockRenderer, mockElement, classes);

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(
        mockElement,
        'lg-status-info',
      );

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'lg-theme-bold');

      expect(mockRenderer.removeClass).toHaveBeenCalledWith(mockElement, 'extra-class');

      expect(mockRenderer.removeClass).toHaveBeenCalledTimes(3);
    });

    it('should handle empty array gracefully', () => {
      service.removeStatusClasses(mockRenderer, mockElement, []);

      expect(mockRenderer.removeClass).not.toHaveBeenCalled();
    });

    it('should handle undefined classes gracefully', () => {
      service.removeStatusClasses(mockRenderer, mockElement, undefined as any);

      expect(mockRenderer.removeClass).not.toHaveBeenCalled();
    });
  });
});
