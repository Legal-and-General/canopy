import { Injectable } from '@angular/core';
import { Pictogram, PictogramName } from './pictograms.interface';

@Injectable({
  providedIn: 'root'
})
export class LgPictogramRegistry {
  private registry = new Map<PictogramName, string>();

  registerPictogram(pictograms: Pictogram[]): void {
    pictograms.forEach(pictogram => {
      this.registry.set(pictogram.name, pictogram.data);
    });
  }

  getPictogram(name: PictogramName): string | undefined {
    if (!this.registry.has(name)) {
      console.warn(
        `${name}: Pictogram not found, ensure it is added to the pictogram registry`
      );
    }

    return this.registry.get(name);
  }
}
