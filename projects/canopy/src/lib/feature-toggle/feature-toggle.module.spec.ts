import { TestBed } from '@angular/core/testing';
import { togglesOptionsInjectable } from './feature-toggle.interface';
import { LgFeatureToggleModule } from './feature-toggle.module';

import { LgFeatureToggleService } from './feature-toggle.service';

describe('FeatureToggleModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LgFeatureToggleModule]
    });
  });

  describe('when FeatureToggleModule is created', () => {
    it(`should provide 'LgFeatureToggleService' service`, () => {
      expect(() => TestBed.get(LgFeatureToggleService)).toBeTruthy();
    });

    it(`should provide 'togglesOptionsInjectable'`, () => {
      expect(() => TestBed.get(togglesOptionsInjectable)).toBeTruthy();
    });
  });
});
