import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { togglesInjectable, LgFeatureToggleConfig } from './feature-toggle.interface';

@Injectable({
  providedIn: 'root',
})
export class LgFeatureToggleService {
  constructor(@Inject(togglesInjectable) public toggles$: Observable<LgFeatureToggleConfig>) { }
}
