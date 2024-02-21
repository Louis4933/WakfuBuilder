package com.wakfubuilder.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

class ActionDefinition {
    public int idActionDefinition;
    public String effect;
}
class ActionDescription {
    public String fr;
    public String en;
    public String es;
    public String pt;
}

@Document(collection = "actions")
public class Action {

    @Id
    @JsonProperty("id")
    private String id;
    private ActionDefinition definition;
    private InfoTranslate description;

    /* Constructors */
    public Action() {}

    public Action(ActionDefinition definition, InfoTranslate description) {
        super();
        this.definition = definition;
        this.description = description;
    }
    
    /* Getters */
    public String getId() {
        return id;
    }

    public ActionDefinition getDefinition() {
        return definition;
    }
    
    public InfoTranslate getDescription() {
        return description;
    }

    /* Setters */
    public void setDefinition(ActionDefinition definition) {
        this.definition = definition;
    }


    public void setDescription(InfoTranslate description) {
        this.description = description;
    }
}