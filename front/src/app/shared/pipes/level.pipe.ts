import { Pipe, PipeTransform } from '@angular/core';
import { ItemI } from '../models/item-i';
import { BuildI } from '../models/build-i';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(arr: any[], levelMin: number, levelMax: number): any[]{
    if (arr.length > 0 && 'definition' in arr[0]) {
      return arr.filter(i => i.definition.item.level >= levelMin && i.definition.item.level <= levelMax);
    }else if (arr.length > 0 && 'items' in arr[0]) {
      return arr.filter(b => b.level >= levelMin && b.level <= levelMax);
    }else {
      return arr;
    }
  }

}
