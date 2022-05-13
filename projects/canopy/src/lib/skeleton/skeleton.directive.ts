import { Directive, ElementRef, Input, HostBinding, OnDestroy } from '@angular/core';

@Directive({
  selector: '[lgSkeleton]',
})
export class LgSkeletonDirective implements OnDestroy {
  private changes: MutationObserver;
  private hasContent = false;

  @Input() lgSkeletonWidth: string = null;
  @Input() lgSkeletonHeight: string = null;
  @Input() lgSkeletonRightAlign = false;

  @HostBinding('class.lg-skeleton')
  get skeletonClass() {
    return !this.hasContent;
  }

  @HostBinding('class.lg-skeleton--right')
  get alignClass() {
    return this.lgSkeletonRightAlign && !this.hasContent;
  }

  @HostBinding('style.width')
  get backgroundWidth(): string {
    if (this.hasContent) {
      return null;
    }

    return this.lgSkeletonWidth
      ? `${this.lgSkeletonWidth}em`
      : '100%';
  }

  @HostBinding('style.height')
  get backgroundHeight(): string {
    if (this.hasContent) {
      return null;
    }

    return this.lgSkeletonHeight && !this.hasContent
      ? `${this.lgSkeletonHeight}em`
      : 'auto';
  }

  constructor(private hostElement: ElementRef) {
    this.changes = new MutationObserver(this.observeChanges);

    this.changes.observe(this.hostElement.nativeElement, {
      subtree: true,
      characterData: true,
    });
  }

  observeChanges = (mutations: Array<MutationRecord>) => {
    mutations.forEach((mutation: MutationRecord) => {
      this.hasContent = mutation.target.textContent.trim() !== '';
    });
  };

  ngOnDestroy() {
    this.changes.disconnect();
  }
}
