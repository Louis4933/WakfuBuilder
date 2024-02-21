import { TranslationI } from "./action-i";

export interface EquipmentItemTypeI {
  id : string;
  definition : {
    idEITDefinition : number;
    parentId : number;
    equipmentPositions : string[];
    equipementDisabledPositions : string[];
    isRecyclable : boolean;
    isVisibleInAnimation : boolean;
  };
  title : TranslationI;
}
