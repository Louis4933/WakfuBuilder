import { Pipe, PipeTransform } from '@angular/core';
import { ItemI } from '../models/item-i';
import { BuildI } from '../models/build-i';

@Pipe({
  name: 'name'
})
export class ItemPipe implements PipeTransform {

  transform(arr: any[], filter: string): any[] {
    if (arr.length > 0 && 'title' in arr[0]) {
        return arr.filter((i: any) => i.title.fr.toLowerCase().indexOf(filter.toLowerCase()) > -1);
    } else if (arr.length > 0 && 'name' in arr[0]) {
        return arr.filter((b: any) => b.name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
    } else {
        return arr;
    }
}



}
