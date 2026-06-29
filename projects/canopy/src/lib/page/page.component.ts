import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
@Component({
  selector: 'lg-page',
  templateUrl: './page.component.html',
  styleUrls: [ './page.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgPageComponent {
  @HostBinding('class.lg-page') class = true;

  public skipToMain(event: Event, $element: HTMLElement) {
    event.preventDefault();
    $element.focus();
  }
}
