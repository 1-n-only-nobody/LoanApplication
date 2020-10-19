import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(collection: any[], field: string, value: string): any {

    console.log(field + ' : ' + value);

    console.log(collection.toString());

    if (collection.includes(value)) {
      console.log('Hello');
    }

    return collection;
  }
}
