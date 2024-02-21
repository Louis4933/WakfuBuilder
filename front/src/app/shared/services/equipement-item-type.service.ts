import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Model
import { EquipmentItemTypeI } from '../models/equipment-item-type-i';

@Injectable({
  providedIn: 'root'
})
export class EquipementItemTypeService {
  public arr_equipementItemTypes : EquipmentItemTypeI[] = [];
  public map_equipementItemTypes = new Map<number, EquipmentItemTypeI>();
  public map_equipementParentItemTypes = new Map<number, number[]>();

  constructor(private http : HttpClient) { }

  getAllEquipementItemTypes() {
    const url = 'http://localhost:8080/equipmentItemTypes';
    return this.http.get<EquipmentItemTypeI[]>(url).subscribe({
      next : (data : EquipmentItemTypeI[]) => {
        this.arr_equipementItemTypes = data;
        this.mapEquipementItemTypes();
        this.mapEquipementParentItemTypes();
      },
      error : (err) => {
        console.log(err);
      },
      complete : () => {
        console.log('Get all equipementItemTypes completed');
      }
    });
  }

  mapEquipementItemTypes() {
    this.arr_equipementItemTypes.forEach((equipementItemType) => {
      this.map_equipementItemTypes.set(equipementItemType.definition.idEITDefinition, equipementItemType);
    });
  }

  mapEquipementParentItemTypes() {
    this.arr_equipementItemTypes.forEach((equipementItemType) => {
      if(equipementItemType.definition.parentId !== undefined ) {
        if(this.map_equipementParentItemTypes.has(equipementItemType.definition.parentId)) {

          this.map_equipementParentItemTypes.get(equipementItemType.definition.parentId)?.push(equipementItemType.definition.idEITDefinition);

        } else if(this.map_equipementItemTypes.has(equipementItemType.definition.parentId)){

          this.map_equipementParentItemTypes.set(equipementItemType.definition.parentId, [equipementItemType.definition.idEITDefinition]);

        } else if(!this.map_equipementParentItemTypes.has(equipementItemType.definition.idEITDefinition)) {

          this.map_equipementParentItemTypes.set(equipementItemType.definition.idEITDefinition, [equipementItemType.definition.idEITDefinition]);

        }
      }
      this.map_equipementParentItemTypes.delete(647); //delete costume type
      this.map_equipementParentItemTypes.delete(537); //delete outil type
      this.map_equipementParentItemTypes.delete(480); //delete torche type

    });
  }
}
