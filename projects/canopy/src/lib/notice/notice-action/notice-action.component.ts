import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';

export type NoticeActionType = 'link' | 'button' | 'button-group';

@Component({
  selector: 'lg-notice-action',
  template: '<ng-content />',
  styleUrls: [ './notice-action.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgNoticeActionComponent implements AfterContentInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  @HostBinding('class.lg-notice-action') class = true;

  @Input() type: NoticeActionType = 'button';

  ngAfterContentInit(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    const children = Array.from(element.children);

    const isValid =
      children.length === 1 &&
      ((this.type === 'link' && this.isLink(children[0])) ||
        (this.type === 'button' && this.isButton(children[0])) ||
        (this.type === 'button-group' && this.isButtonGroup(children[0])));

    if (!isValid) {
      throw new Error(
        `LgNoticeActionComponent: type "${this.type}" must contain exactly one ` +
          `${this.expectedAction}.`,
      );
    }
  }

  private get expectedAction(): string {
    switch (this.type) {
      case 'link':
        return 'link';
      case 'button':
        return 'button';
      case 'button-group':
        return 'button group';
    }
  }

  private isLink(element: Element): boolean {
    return element.matches('a[href]');
  }

  private isButton(element: Element): boolean {
    return element.matches('button[lg-button]');
  }

  private isButtonGroup(element: Element): boolean {
    return element.matches('lg-button-group');
  }
}
