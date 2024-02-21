import { Pipe, PipeTransform } from '@angular/core';
import { BuildI } from '../models/build-i';

@Pipe({
  name: 'costFiilter'
})
export class CostFiilterPipe implements PipeTransform {

  transform(builds : BuildI[], cost : string): BuildI[] {
    if(cost == 'all'){
      return builds
    }
    return builds.filter((build : BuildI) => build.cost == cost);
  }

}
