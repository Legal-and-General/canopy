import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
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
   *     toggleIdInStringProperty('red blue', { id: 'red' }, { id: 'green' })
   *     // returns 'blue green'
   */
  toggleIdInStringProperty(
    property = '',
    oldElement: { id: string },
    newElement?: { id: string },
  ): string {
    if (!newElement && property === null) {
      return property;
    }

    if (property === null) {
      property = '';
    }

    if (oldElement && oldElement.id) {
      property = property.replace(oldElement.id, '');
    }

    if (newElement && newElement.id) {
      property = `${property} ${newElement.id}`;
    }

    return property.trim();
  }
}
