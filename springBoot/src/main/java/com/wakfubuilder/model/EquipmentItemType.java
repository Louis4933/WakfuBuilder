package com.wakfubuilder.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "equipmentItemTypes")
public class EquipmentItemType {
    
    public static class EquipmentItemTypeDefinition {
        public int idEITDefinition;
        public int parentId;
        public String[] equipmentPositions;
        public String[] equipmentDisabledPositions;
        public boolean isRecyclable;
        public boolean isVisibleInAnimation;

        public String[] getEquipmentPositions() {
            return equipmentPositions;
        }
    }

    @Id
    @JsonProperty("id")
    private String id;
    private EquipmentItemTypeDefinition definition;
    private InfoTranslate title;

    /* Constructors */
    public EquipmentItemType() {}

    public EquipmentItemType(EquipmentItemTypeDefinition definition, InfoTranslate title) {
        super();
        this.definition = definition;
        this.title = title;
    }

    /* Getters */
    public String getId() {
        return id;
    }

    public EquipmentItemTypeDefinition getDefinition() {
        return definition;
    }
    
    public InfoTranslate getTitle() {
        return title;
    }

    /* Setters */
    public void setDefinition(EquipmentItemTypeDefinition definition) {
        this.definition = definition;
    }

    public void setTitle(InfoTranslate title) {
        this.title = title;
    }
}
