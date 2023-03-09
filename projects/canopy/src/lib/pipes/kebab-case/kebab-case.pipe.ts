import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase',
})
export class LgKebabCasePipe implements PipeTransform {
  transform(str: string): any {
    return !str
      ? str
      : str
        .replace(/[_\-|]{1,}/g, ' ')
        .replace(/([a-z])([A-Z])/g, (match, group1, group2) => {
          return `${group1} ${group2.toLowerCase()}`;
        })
        .trim()
        .replace(/ +/g, '-')
        .toLowerCase();
  }
}
