import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class LgCamelCasePipe implements PipeTransform {
  transform(str: string): string {
    return !str
      ? str
      : str
          .replace(/(['"])/g, '')
          .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) =>
            idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase(),
          )
          .replace(/(\s|-|\/|')+/g, '');
  }
}
