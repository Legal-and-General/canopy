import { Injectable } from '@angular/core';

import { LgCamelCasePipe } from '../pipes';

import { BrandIconName } from './brand-icons-files.interface';

@Injectable({
  providedIn: 'root',
})
export class LgBrandIconRegistry {
  private registry = new Map<BrandIconName, string>();

  async get(name: BrandIconName): Promise<string | undefined> {
    if (!this.registry.has(name)) {
      const str = new LgCamelCasePipe().transform(name);

      const iconName = `lgBrandIcon${str.replace(/^./, str[0].toUpperCase())}`;

      const { [iconName]: icon } = await import(
        `../brand-icons-files/set/lgBrandIcon-${name}.icon`
      );

      this.registry.set(icon.name, icon.data);
    }

    return this.registry.get(name);
  }
}
