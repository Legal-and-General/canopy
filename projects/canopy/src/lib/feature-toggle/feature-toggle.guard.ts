import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
} from '@angular/router';

import { first, map } from 'rxjs/operators';

import { LgFeatureToggleService } from './feature-toggle.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleGuard implements CanActivate, CanLoad {
  constructor(
    private featureToggleService: LgFeatureToggleService,
    private router: Router,
  ) {}

  canLoad(route: Route) {
    return this.isActive(route);
  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.isActive(route);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot) {
    return this.isActive(childRoute);
  }

  isActive(route: Route | ActivatedRouteSnapshot) {
    return this.featureToggleService.toggles$.pipe(
      first(),
      map((configToggles) => {
        const active = getDataPropertyValues(route, 'featureToggle')
          .map((t) => {
            const value = configToggles[t];
            return value === undefined || value;
          })
          .reduce((acc, current) => acc && current, true);
        if (!active) {
          this.router.navigate(['/'], { queryParamsHandling: 'merge' });
        }
        return active;
      }),
    );
  }
}

/*
  Gets the propertyName values in all the segments of the route
 */
export function getDataPropertyValues(
  snapshot: ActivatedRouteSnapshot | Route,
  propertyName: string,
  values = new Array<any>(),
) {
  if (snapshot.data && snapshot.data.hasOwnProperty(propertyName)) {
    values.push(snapshot.data[propertyName]);
  }
  if (snapshot.children && snapshot.children.length) {
    getDataPropertyValues(snapshot.children[0], propertyName, values);
  }
  return values;
}
