export interface ActionI {
  id: string;
  definition : {
    idActionDefinition : number;
    effect : string;
  };
  description : TranslationI;
}


export interface TranslationI {
  fr : string;
  en : string;
  es : string;
  pt : string;
}
