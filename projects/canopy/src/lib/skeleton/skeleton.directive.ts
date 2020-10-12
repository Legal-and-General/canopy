import { Directive, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgSkeleton]',
})
export class LgSkeletonDirective {
  @Input('lgSkeleton') lgSkeletonWidth = 4;

  @HostBinding('style.width')
  get backgroundSize(): string {
    return `${this.lgSkeletonWidth}em`;
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
    console.log('adds skeleton');
    this.hostElement.nativeElement.innerHTML = 'loading...';
    this.renderer.addClass(this.hostElement.nativeElement, 'lg-skeleton');
  }
}
