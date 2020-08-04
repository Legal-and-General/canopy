import { Injectable } from '@angular/core';

import { BrandIcon, BrandIconName } from './brand-icons.interface';

@Injectable({
  providedIn: 'root',
})
export class LgBrandIconRegistry {
  private registry = new Map<BrandIconName, string>();

  registerBrandIcon(icons: Array<BrandIcon>): void {
    icons.forEach(icon => {
      this.registry.set(icon.name, icon.data);
    });
  }

  getBrandIcon(name: BrandIconName): string | undefined {
    if (!this.registry.has(name)) {
      console.warn(
        `${name}: Brand icon not found, ensure it is added to the brand icon registry`,
      );
    }

    return this.registry.get(name);
  }
}
