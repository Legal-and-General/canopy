import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'lg-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: [ './footer-social.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-footer-social',
    role: 'navigation',
    'aria-label': 'Social media links',
  },
  standalone: true,
})
export class LgFooterSocialComponent implements AfterContentInit {
  private static readonly MAX_SOCIAL_LINKS = 8;
  private hostElement = inject(ElementRef);

  ngAfterContentInit(): void {
    const hostEl = this.hostElement.nativeElement as HTMLElement;
    const links = hostEl.querySelectorAll('a, button');

    if (links.length > LgFooterSocialComponent.MAX_SOCIAL_LINKS) {
      console.warn(
        `LgFooterSocialComponent: Maximum of ${LgFooterSocialComponent.MAX_SOCIAL_LINKS} social links allowed. Found ${links.length}.`,
      );
    }
  }
}
