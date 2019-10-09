import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation
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
  encapsulation: ViewEncapsulation.None
})
export class LgFooterComponent {
  @HostBinding('class') class = 'lg-footer';
  @HostBinding('attr.role') role = 'contentinfo';

  @Output() primaryLinkClicked = new EventEmitter<any>();
  @Output() secondaryLinkClicked = new EventEmitter<any>();

  @Input() logo: string;
  @Input() logoHeight = '3rem';
  @Input() logoAlt: string;
  @Input() copyright: string;
  @Input() primaryLinks: Link[];
  @Input() secondaryLinks: Link[];

  handlePrimaryLinkClick(event) {
    this.primaryLinkClicked.emit(event);
  }

  handleSecondaryLinkClick(event) {
    this.secondaryLinkClicked.emit(event);
  }
}
