import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rarity'
})
export class RarityPipe implements PipeTransform {
  map_rarity : {[key : number] : string} = {
    0: "Commun",
    1: "Inhabituel",
    2: "Rare",
    3: "Mythique",
    4: "Légendaire",
    5: "Relique",
    6: "Souvenir",
    7: "Épique"
  };

  transform(rarity: number): string {
    return this.map_rarity[rarity];
  }

}
