import { Injectable } from '@angular/core';

import { PICTOGRAM_LOADER } from './pictogram-loader';
import { PictogramName } from './pictogram-files.interface';

@Injectable({
  providedIn: 'root',
})
export class LgPictogramRegistry {
  private registry = new Map<PictogramName, string>();

  async get(name: PictogramName): Promise<string | undefined> {
    if (!this.registry.has(name)) {
      const loader = PICTOGRAM_LOADER[name];

      if (loader) {
        const icon = await loader();

        this.registry.set(icon.name, icon.data);
      }
    }

    return this.registry.get(name);
  }
}
