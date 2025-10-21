import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { LgFeatureToggleConfig, togglesInjectable } from './feature-toggle.interface';

@Injectable({
  providedIn: 'root',
})
export class LgFeatureToggleService {
  toggles$ = inject<Observable<LgFeatureToggleConfig>>(togglesInjectable);
}
