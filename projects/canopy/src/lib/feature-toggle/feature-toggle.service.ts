import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { togglesInjectable, FeatureToggleConfig } from './feature-toggle.interface';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleService {
  constructor(@Inject(togglesInjectable) public toggles$: Observable<FeatureToggleConfig>) { }
}
