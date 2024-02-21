import { Component, ElementRef } from '@angular/core';
import { ActionService } from 'src/app/shared/services/action.service';
import { EquipementItemTypeService } from 'src/app/shared/services/equipement-item-type.service';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-wiki-items',
  templateUrl: './wiki-items.component.html',
  styleUrls: ['./wiki-items.component.css']
})
export class WikiItemsComponent {
  selectedType : number[] = [103];
  levelFilter: number[] = [0, 230];
  toShow: number = 20;
  nameItem : string = '';
  effectsFilter : number[] = [];

  constructor(public items : ItemService, public actions : ActionService, public equipementType : EquipementItemTypeService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.actions.getAllActions();
    this.equipementType.getAllEquipementItemTypes();
    this.items.getAllItemsByType(this.selectedType);
  }

  //Permet de savoir quel button est actif
  isArrayEqual(arr1: number[]): boolean {
    if (arr1.length !== this.selectedType.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== this.selectedType[i]) {
        return false;
      }
    }
    return true;
  }

  //Permet de récupérer les items en fonction du type
  selectType(type : number[]) {
    this.selectedType = type;
    this.toShow = 20;
    this.items.getAllItemsByType(type);
    //Permet de remonter en haut de la liste
    const element = this.elementRef.nativeElement.querySelector('.liste_items');
    element.scrollTop = 0;
  }

  //Permet de faire du lazy loading
  onScroll(event: any) {
    const element = this.elementRef.nativeElement.querySelector('.liste_items');
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // Le scroll a atteint le bas
      console.log('Scroll down detected!');
      this.toShow += 20;
    }
  }

  resetEffectFilter() {
    this.effectsFilter = [];
  }

}
