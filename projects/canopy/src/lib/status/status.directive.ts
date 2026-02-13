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

const SUPPORTED_SELECTORS = [ 'lg-alert', 'lg-banner', 'lg-validation', 'lg-details' ];

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
    this.validateSupportedComponent();

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

  private validateSupportedComponent(): void {
    if (!isDevMode()) {
      return;
    }

    const element = this.hostElement.nativeElement as HTMLElement;
    const tagName = element.tagName.toLowerCase();
    const isSupported = SUPPORTED_SELECTORS.includes(tagName);

    if (!isSupported) {
      console.error(
        `[lgStatus] The status directive is not supported on <${tagName}>. ` +
          `It can only be used on the following components: ${SUPPORTED_SELECTORS.join(', ')}. ` +
          'Please remove the lgStatus directive from this element.',
      );
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
      const classList = Array.from(colourModeContainer.classList);
      const themeClass = classList.find(className => className.startsWith('lg-theme-'));

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
      const classList = Array.from(current.classList);
      const hasColourMode = classList.some(className =>
        className.startsWith('lg-mode-'),
      );

      if (hasColourMode) {
        return current;
      }

      current = current.parentElement;
    }

    return null;
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
