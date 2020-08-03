import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, search: string) {
    if (!search || search === ' ') {
      return value;
    }
    return value.replace(search, '<mark>$&</mark>');
  }

}
