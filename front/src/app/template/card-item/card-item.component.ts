import { Component, Input } from '@angular/core';
import Waktrinser from '@methodwakfu-public/waktrinser';
import { ItemI } from 'src/app/shared/models/item-i';
import { ActionService } from 'src/app/shared/services/action.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() item : ItemI | undefined;

  constructor(public actions : ActionService) { }

  ngOnInit() {
  }

  parseString(sentence : string | undefined , params : number[], levelItem : number) : string{
    if(this.item?.definition.item.baseParameters.itemTypeId === 582 || this.item?.definition.item.baseParameters.itemTypeId === 611){
      levelItem = 50;
    }
    if(sentence === undefined) {
      return '';
    }
    return Waktrinser.decodeString(sentence, params, levelItem);
  }

  levelItem(lv : number) : number {
    if(this.item?.definition.item.baseParameters.itemTypeId === 582 || this.item?.definition.item.baseParameters.itemTypeId === 611){
      return 50;
    }
    return lv;
  }

}
