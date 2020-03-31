import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LgDomService {
  /**
   * This function is used to help manipulate element string properties which
   * contain the ids of other elements (e.g. the aria describedBy property).
   *
   * @param property -
   * The current value of the property
   * @param oldElement -
   * The element whose id needs removing from the property
   * @param newElement -
   * The element whose id needs adding to the property
   * @return The new value for the property
   *
   * @example
   *     toggleIdInStringProperty('id-1 id-2', { id: 'id-1' }, { id: 'id-3' })
   *     // returns 'id-1 id-2'
   */
  toggleIdInStringProperty(
    property = '',
    oldElement: { id: string },
    newElement?: { id: string }
  ): string {
    if (oldElement && oldElement.id) {
      property = property.replace(oldElement.id, '');
    }

    if (newElement && newElement.id) {
      property = `${property} ${newElement.id}`;
    }

    return property.trim();
  }
}
