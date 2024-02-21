import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCost'
})
export class SentenceCostPipe implements PipeTransform {
  map_cost : {[key : string] : string} = {
    "low" : "Bas",
    "medium" : "Moyen",
    "high" : "Élevé"
  }

  transform(sentence : string): string {
    return this.map_cost[sentence];
  }

}
