import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

interface Link {
  text: string;
  href: string;
  target?: string;
}
@Component({
  selector: '[lg-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgFooterComponent {
  @HostBinding('class.lg-footer') class = true;
  @HostBinding('attr.role') role = 'contentinfo';

  @Output() primaryLinkClicked = new EventEmitter<any>();
  @Output() secondaryLinkClicked = new EventEmitter<any>();

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

  @Input() logoAlt: string | null;
  @Input() copyright: string;
  @Input() primaryLinks: Array<Link> | null;
  @Input() secondaryLinks: Array<Link> | null;

  handlePrimaryLinkClick(event) {
    this.primaryLinkClicked.emit(event);
  }

  handleSecondaryLinkClick(event) {
    this.secondaryLinkClicked.emit(event);
  }
}
