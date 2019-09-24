import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase'
})
export class LgKebabCasePipe implements PipeTransform {
  transform(str: string): any {
    return !str ? str : str.toLowerCase().replace(/\s/g, '-');
  }
}
