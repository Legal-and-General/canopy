import { Injectable } from '@angular/core';

import { ICON_LOADER as FLAG_ICON_LOADER } from './flag-icon-loader';
import { FlagIconName } from './flag-icons-files.interface';

@Injectable({
  providedIn: 'root',
})
export class LgFlagIconRegistry {
  private registry = new Map<FlagIconName, string>();

  async get(name: FlagIconName): Promise<string | undefined> {
    if (!this.registry.has(name)) {
      const loader = FLAG_ICON_LOADER[name];

      if (loader) {
        const icon = await loader();

        this.registry.set(icon.name, icon.data);
      }
    }

    return this.registry.get(name);
  }
}
