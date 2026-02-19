import { Directive, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';

import type { Colour, ColourTheme } from './colour.interface';
import { ColourClassService } from './colour-class.service';

@Directive({
  selector: '[lgColour]',
  standalone: true,
  providers: [ ColourClassService ],
})
export class LgColourDirective implements OnInit {
  private readonly renderer = inject(Renderer2);
  private readonly hostElement = inject(ElementRef);
  private readonly colourClassService = inject(ColourClassService);

  private _colour: Colour = 'blue';
  private _colourTheme: ColourTheme = 'neutral';
  private appliedClasses: Array<string> = [];

  @Input()
  set lgColour(colour: Colour) {
    this._colour = colour;
    this.applyClasses();
  }

  @Input()
  set lgColourTheme(theme: ColourTheme) {
    this._colourTheme = theme || 'neutral';
    this.applyClasses();
  }

  get colour(): Colour {
    return this._colour;
  }

  get colourTheme(): ColourTheme {
    return this._colourTheme;
  }

  ngOnInit(): void {
    if (this.appliedClasses.length === 0) {
      this.applyClasses();
    }
  }

  private applyClasses(): void {
    this.appliedClasses = this.colourClassService.applyColourClasses(
      this.renderer,
      this.hostElement.nativeElement as HTMLElement,
      this._colour,
      this._colourTheme,
      this.appliedClasses,
    );
  }
}
