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
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgFooterComponent {
  @HostBinding('class.lg-footer') class = true;
  @HostBinding('attr.role') role = 'contentinfo';

  @Output() primaryLinkClicked = new EventEmitter<Event>();
  @Output() secondaryLinkClicked = new EventEmitter<Event>();

  private _logo: string;
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

  private _secondLogo: string;
  @Input()
  get secondLogo(): string | null {
    return this._secondLogo;
  }
  set secondLogo(secondLogo) {
    this._secondLogo = secondLogo;
    if (!this.secondLogoAlt) {
      this.secondLogoAlt = '';
    }
  }

  @Input() logoAlt: string | null;
  @Input() secondLogoAlt: string | null;
  @Input() copyright: string;
  @Input() primaryLinks: Array<Link> | null;
  @Input() secondaryLinks: Array<SecondaryLink> | null;

  handlePrimaryLinkClick(event: Event): void {
    this.primaryLinkClicked.emit(event);
  }

  handleSecondaryLinkClick(event: Event): void {
    this.secondaryLinkClicked.emit(event);
  }
}
