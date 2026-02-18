import {
  AfterViewInit,
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
export class LgStatusDirective implements OnInit, AfterViewInit, OnDestroy {
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
    this.applyClasses();
  }

  get status(): Status {
    return this._status;
  }

  get statusTheme(): Theme {
    return this.getInheritedTheme() ?? this._statusTheme ?? 'neutral';
  }

  ngOnInit(): void {
    this.applyClasses();
    this.setupMutationObserver();
  }

  ngAfterViewInit(): void {
    this.validateHostElement();
  }

  ngOnDestroy(): void {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  private setupMutationObserver(): void {
    const element = this.hostElement.nativeElement as HTMLElement;

    this.colourModeContainer = this.findColourModeContainer(element);

    if (this.colourModeContainer) {
      this.mutationObserver = new MutationObserver(() => {
        this.applyClasses();
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

    const element = this.hostElement.nativeElement as HTMLElement;
    const tagName = element.tagName.toLowerCase();
    const classList = element.classList;

    const allowedComponents = [ 'lg-banner', 'lg-alert', 'lg-details', 'lg-validation' ];

    const isValidTag = allowedComponents.includes(tagName);
    const isValidClass = allowedComponents.some(className =>
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
