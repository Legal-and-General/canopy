import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'lg-more-less-box-more-info',
  templateUrl: './more-less-box-more-info.component.html',
})
export class LgMoreLessBoxMoreInfoComponent {
  @HostBinding('class.lg-more-less-box-more-info') class = true;
}
