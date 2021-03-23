import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import  sortBy  from 'sort-by';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(list: Object[], params?: string): Object[] {
    if (params.length) {
      return list.sort(sortBy(params));
    }
    return list;
  }

}
