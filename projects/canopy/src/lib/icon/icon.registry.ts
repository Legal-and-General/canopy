import { Injectable } from '@angular/core';

import { LgCamelCasePipe } from '../pipes';

import { IconName } from './ui-icons-files.interface';

@Injectable({
  providedIn: 'root',
})
export class LgIconRegistry {
  private registry = new Map<IconName, string>();

  async get(name: IconName): Promise<string | undefined> {
    if (!this.registry.has(name)) {
      const str = new LgCamelCasePipe().transform(name);

      const iconName = `lgIcon${str.replace(/^./, str[0].toUpperCase())}`;

      const { [iconName]: icon } = await import(
        `../ui-icons-files/set/lgIcon-${name}.icon`
      );

      this.registry.set(icon.name, icon.data);
    }

    return this.registry.get(name);
  }
}
