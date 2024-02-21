import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Model
import { ActionI } from '../models/action-i';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  public arr_actions : ActionI[] = [];
  public map_actions = new Map<number, ActionI>();
  public keyEffects : string[] = ["Gain", "Boost"]
  public map_Effects !: Map<string, ActionI[]>;
  public arr_actions_filtered : ActionI[] = [];


  constructor(private http : HttpClient) { }

  getAllActions() {
    const url = 'http://localhost:8080/actions';
    return this.http.get<ActionI[]>(url).subscribe({
      next : (data : ActionI[]) => {
        this.arr_actions = data;
        this.mapActions();
        this.mapEffects();
        this.arr_actions_filtered = this.filterEffects(this.arr_actions);
      },
      error : (err) => {
        console.log(err);
      },
      complete : () => {
        console.log('Get all actions completed');
      }
    });
  }

  mapActions() {
    this.arr_actions.forEach((action) => {
      this.map_actions.set(action.definition.idActionDefinition, action);
    });
  }

  mapEffects() {
    let filteredActions = this.filterEffects(this.arr_actions);
    this.map_Effects = filteredActions.reduce((map, action) => {
        this.keyEffects.forEach(effect => {
            if (action.definition.effect.search(effect + " :") !== -1) {
                const existingActions = map.get(effect) || [];
                existingActions.push(action);
                map.set(effect, existingActions);
            }
        });
        return map;
    }, new Map<string, ActionI[]>());
  }

  filterEffects(arr_actions : ActionI[] ) : ActionI[] {
    let arr : ActionI[] = [];
    let deboost : string = 'Deboost';
    let id_to_remove : number[] = [979,832,1020,400, 2001, 300, 865,330,843,304, 24, 1084, 1, 1083, 39, 166];
    for (let i = 0; i < arr_actions.length; i++) {
      if (arr_actions[i].definition.effect.search(deboost) == -1 && !id_to_remove.includes(arr_actions[i].definition.idActionDefinition) ){
        arr.push(arr_actions[i]);
      }
    }
    arr.sort((a, b) => (a.definition.idActionDefinition < b.definition.idActionDefinition) ? 1 : -1);
    return arr;
  }


}
