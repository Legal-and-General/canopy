import { Injectable } from '@angular/core';

import { ICON_LOADER } from './brand-icon-loader';
import { BrandIconName } from './brand-icons-files.interface';

@Injectable({
  providedIn: 'root',
})
export class LgBrandIconRegistry {
  private registry = new Map<BrandIconName, string>();

  async get(name: BrandIconName): Promise<string | undefined> {
    if (!this.registry.has(name)) {
      const loader = ICON_LOADER[name];

      if (loader) {
        const icon = await loader();

        this.registry.set(icon.name, icon.data);
      }
    }

    return this.registry.get(name);
  }
}
