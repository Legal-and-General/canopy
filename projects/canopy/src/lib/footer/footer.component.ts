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
  @HostBinding('class.lg-footer') class = true;
  @HostBinding('attr.role') role = 'contentinfo';

  @Output() primaryLinkClicked = new EventEmitter<any>();
  @Output() secondaryLinkClicked = new EventEmitter<any>();

  @Input() logo: string;
  @Input() logoAlt = '';
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
