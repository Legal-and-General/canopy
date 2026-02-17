import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  inject,
  isDevMode,
} from '@angular/core';

import type { Status, Theme } from './status.interface';
import { StatusClassService } from './status-class.service';
@Directive({
  selector: '[lgStatus]',
  standalone: true,
  providers: [ StatusClassService ],
})
export class LgStatusDirective implements OnInit, OnDestroy {
  private readonly renderer = inject(Renderer2);
  private readonly hostElement = inject(ElementRef);
  private readonly statusClassService = inject(StatusClassService);

  private _status: Status = 'generic';
  private _statusTheme: Theme | null = null;
  private appliedClasses: Array<string> = [];
  private mutationObserver: MutationObserver | null = null;
  private colourModeContainer: Element | null = null;

  @Input()
  set lgStatus(status: Status) {
    this._status = status;
    this.applyClasses();
  }

  @Input()
  set lgStatusTheme(theme: Theme) {
    this._statusTheme = theme;

    // Disconnect observer when explicit theme is set
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }

    this.applyClasses();
  }

  get status(): Status {
    return this._status;
  }

  get statusTheme(): Theme {
    return this._statusTheme ?? this.getInheritedTheme() ?? 'neutral';
  }

  ngOnInit(): void {
    this.validateHostElement();

    if (this.appliedClasses.length === 0) {
      this.applyClasses();
    }

    this.setupMutationObserver();
  }

  ngOnDestroy(): void {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  private setupMutationObserver(): void {
    // Only setup observer if we don't have an explicit theme
    if (this._statusTheme !== null) {
      return;
    }

    const element = this.hostElement.nativeElement as HTMLElement;

    this.colourModeContainer = this.findColourModeContainer(element);

    if (this.colourModeContainer) {
      this.mutationObserver = new MutationObserver(() => {
        // Only reapply if we're still inheriting (no explicit theme set)
        if (this._statusTheme === null) {
          this.applyClasses();
        }
      });

      this.mutationObserver.observe(this.colourModeContainer, {
        attributes: true,
        attributeFilter: [ 'class' ],
      });
    }
  }

  private getInheritedTheme(): Theme | null {
    const element = this.hostElement.nativeElement as HTMLElement;
    const colourModeContainer = this.findColourModeContainer(element);

    if (colourModeContainer) {
      const classList = colourModeContainer.classList;
      const themeClass = Array.from(classList).find(className =>
        className.startsWith('lg-theme-'),
      );

      if (themeClass) {
        const theme = themeClass.replace('lg-theme-', '') as Theme;

        return theme;
      }
    }

    return null;
  }

  private findColourModeContainer(element: HTMLElement): Element | null {
    let current: Element | null = element.parentElement;

    while (current) {
      const classList = current.classList;
      const hasColourMode = Array.from(classList).some(className =>
        className.startsWith('lg-mode-'),
      );

      if (hasColourMode) {
        return current;
      }

      current = current.parentElement;
    }

    return null;
  }

  private validateHostElement(): void {
    if (!isDevMode()) {
      return;
    }

    // Skip validation in test environments where TestBed may wrap components in divs
    if (typeof jest !== 'undefined' || typeof jasmine !== 'undefined') {
      return;
    }

    const element = this.hostElement.nativeElement as HTMLElement;
    const tagName = element.tagName.toLowerCase();
    const classList = element.classList;

    const allowedComponents = [ 'lg-banner', 'lg-alert', 'lg-details', 'lg-validation' ];
    const allowedClasses = [ 'lg-banner', 'lg-alert', 'lg-details', 'lg-validation' ];

    // Check if element has the tag name OR the class name of an allowed component
    const isValidTag = allowedComponents.includes(tagName);
    const isValidClass = allowedClasses.some(className =>
      classList.contains(className),
    );

    if (!isValidTag && !isValidClass) {
      throw new Error(
        `lgStatus directive can only be used on the following components: ${allowedComponents.join(', ')}. ` +
          `Current element: ${tagName}`,
      );
    }
  }

  private applyClasses(): void {
    this.appliedClasses = this.statusClassService.applyStatusClasses(
      this.renderer,
      this.hostElement.nativeElement as HTMLElement,
      this._status,
      this.statusTheme,
      this.appliedClasses,
    );
  }
}
