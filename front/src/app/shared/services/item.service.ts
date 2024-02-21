import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Model
import { ItemI } from '../models/item-i';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public arr_items : ItemI[] = [];

  constructor(private http : HttpClient) { }

  getAllItems() {
    const url = 'http://localhost:8080/items';
    return this.http.get<ItemI[]>(url).subscribe({
      next : (data : ItemI[]) => {
        this.arr_items = data;
      },
      error : (err) => {
        console.log(err);
      },
      complete : () => {
        console.log('Get all items completed');
      }
    });
  }

  getAllItemsByType(idTypes : number[]) {
    const url = 'http://localhost:8080/items/equipmentItemType';
    const params = { ids: idTypes.join(',') };
    return this.http.get<ItemI[]>(url, { params }).subscribe({
      next : (data : ItemI[]) => {
        this.arr_items = data;

        //sort by level
        this.arr_items = this.arr_items.sort((a, b) => {
          return b.definition.item.level - a.definition.item.level;
        });
      },
      error : (err) => {
        console.log(err);
      },
      complete : () => {
        console.log('Get all items completed');
      }
    });
  }

  getItemById(id : number) {
    const url = 'http://localhost:8080/items/'+id;
    return this.http.get<ItemI[]>('assets/data/items.json').subscribe({
      next : (data : ItemI[]) => {
        this.arr_items = data;
      },
      error : (err) => {
        console.log(err);
      },
      complete : () => {
        console.log('Get all items completed');
      }
    });
  }


}
