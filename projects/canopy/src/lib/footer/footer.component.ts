import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { Link, SecondaryLink } from './footer.interface';

@Component({
  selector: '[lg-footer]',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgFooterComponent {
  private _logo: string;
  private _secondaryLogo: string;

  @Input()
  get logo(): string | null {
    return this._logo;
  }
  set logo(logo) {
    this._logo = logo;

    if (!this.logoAlt) {
      this.logoAlt = '';
    }
  }

  @Input()
  get secondaryLogo(): string | null {
    return this._secondaryLogo;
  }
  set secondaryLogo(secondaryLogo) {
    this._secondaryLogo = secondaryLogo;

    if (!this.secondaryLogoAlt) {
      this.secondaryLogoAlt = '';
    }
  }

  @Input() logoAlt: string | null;
  @Input() secondaryLogoAlt: string | null;
  @Input() copyright: string;
  @Input() primaryLinks: Array<Link> | null;
  @Input() secondaryLinks: Array<SecondaryLink> | null;

  @Output() primaryLinkClicked = new EventEmitter<Event>();
  @Output() secondaryLinkClicked = new EventEmitter<Event>();

  @HostBinding('class.lg-footer') class = true;
  @HostBinding('attr.role') role = 'contentinfo';

  handlePrimaryLinkClick(event: Event): void {
    this.primaryLinkClicked.emit(event);
  }

  handleSecondaryLinkClick(event: Event): void {
    this.secondaryLinkClicked.emit(event);
  }
}
