import { Injectable } from '@angular/core';
import { Icon, IconName } from './icons.interface';

@Injectable({
  providedIn: 'root'
})
export class LgIconRegistry {
  private _registry = new Map<IconName, string>();

  registerIcons(icons: Icon[]): void {
    icons.forEach(icon => {
      this._registry.set(icon.name, icon.data);
    });
  }

  getIcon(name: IconName): string | undefined {
    if (!this._registry.has(name)) {
      console.warn(
        `${name}: Icon not found, ensure it is added to the icon registry`
      );
    }

    return this._registry.get(name);
  }
}
