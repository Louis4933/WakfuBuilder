import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'element'
})
export class ElementPipe implements PipeTransform {
  map_element : {[key : string] : string} = {
    "[el 1]": "Feu",
    "[el 2]": "Eau",
    "[el 3]": "Terre",
    "[el 4]": "Air",
  };

  transform(sentence : string): string {
    for (let key in this.map_element) {
      if (sentence.includes(key)) {
        return sentence.replace(key, this.map_element[key]);
      }
    }
    return sentence;
  }

}
