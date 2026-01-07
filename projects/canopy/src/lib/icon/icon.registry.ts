import { Injectable } from '@angular/core';

import { ICON_LOADER } from './icon-loader';
import { IconName } from './ui-icons-files.interface';

@Injectable({
  providedIn: 'root',
})
export class LgIconRegistry {
  private registry = new Map<IconName, string>();

  async get(name: IconName): Promise<string | undefined> {
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
