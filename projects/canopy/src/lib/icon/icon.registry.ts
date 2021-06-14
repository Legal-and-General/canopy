import { Injectable } from '@angular/core';

import { Icon, IconName } from './icons.interface';

@Injectable({
  providedIn: 'root',
})
export class LgIconRegistry {
  private registry = new Map<IconName, string>();

  registerIcons(icons: Array<Icon>): void {
    icons.forEach((icon) => {
      this.registry.set(icon.name, icon.data);
    });
  }

  getIcon(name: IconName): string | undefined {
    if (!this.registry.has(name)) {
      console.warn(`${name}: Icon not found, ensure it is added to the icon registry`);
    }

    return this.registry.get(name);
  }
}
