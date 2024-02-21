import { Pipe, PipeTransform } from '@angular/core';
import { BuildI } from '../models/build-i';
import { ItemI } from '../models/item-i';

@Pipe({
  name: 'effectFilter'
})
export class EffectFilterPipe implements PipeTransform {

  transform(arr : any[], effectsFilter : number[]): any[] {
    if (effectsFilter.length === 0) {
      return arr;
    }
    if (arr.length > 0 && 'definition' in arr[0]) {
      return arr.filter((i : ItemI) => {
        for (let effect of effectsFilter) {
          for (let action of i.definition.equipEffects) {
            if (action.effect.definition.actionId === effect) {
              return true;
            }
          }
        }
        return false;

      });
    }else if (arr.length > 0 && 'effects' in arr[0]) {
      return arr.filter((b : BuildI) => {
        for (let effect of effectsFilter) {
          if (effect in b.effects) {
            return true;
          }
        }
        return false;
      });
    }else {
      return arr;
    }
  }

}
