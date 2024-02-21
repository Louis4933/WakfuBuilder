import { ItemI } from "./item-i";

export interface BuildI {
  id : string;
  name : string;
  level : number;
  cost : string;
  items : ItemI[];
  effects : { [key: number]: number };
  userInfos : string[];
}
