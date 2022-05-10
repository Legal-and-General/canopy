import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LgFeatureToggleConfig, togglesInjectable } from './feature-toggle.interface';

@Injectable({
  providedIn: 'root',
})
export class LgFeatureToggleService {
  constructor(
    @Inject(togglesInjectable) public toggles$: Observable<LgFeatureToggleConfig>,
  ) {}
}
