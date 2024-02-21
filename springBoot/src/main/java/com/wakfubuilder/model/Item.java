package com.wakfubuilder.model;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

class UseParameters {
    public int useCostAP;
    public int useCostMP;
    public int useCostWP;
    public int useRangeMin;
    public int useRangeMax;
    public boolean useTestFreeCell;
    public boolean useTestLos;
    public boolean useTestOnlyLine;
    public boolean useTestNoBorderCell;
    public int useWorldTarget;
}

class GraphicParameters {
    public int gfxId;
    public int femaleGfxId;
}

@Document(collection = "items")
public class Item {

    public static class BaseParameters {
        public int itemTypeId;
        public int itemSetId;
        public int rarity;
        public int bindType;
        public int minimunShardSlot;
        public int maximumShardSlot;

        public int getItemTypeId() {
            return itemTypeId;
        }

        public int getRarity() {
            return rarity;
        }
    }

    public static class ItemDef {
        public int idItemDef;
        public int level;
        public BaseParameters baseParameters;
        public UseParameters useParameters;
        public GraphicParameters graphicParameters;
        public int[] properties;
    }
    
    public static class Definition {
        public ItemDef item;
        public UseEffect[] useEffects;
        public UseEffect[] useCriticalEffects;
        public EquipEffect[] equipEffects;
    }

    public static class DefinitionEffect {
        public int idEffectDef;
        public int actionId;
        public int areaShape;
        public int[] areaSize;
        public float[] params;

        public float[] getParams() {
            return params;
        }

        public int getActionId() {
            return actionId;
        }
    }

    public static class Effect {
        public DefinitionEffect definition;
        public InfoTranslate description;
    }
    
    public static class EquipEffect {
        public Effect effect;
    }
    public static class UseEffect {
        public Effect effect;
    }

    @Id
    @JsonProperty("id")
    private String id;
    private Definition definition;
    private InfoTranslate title;
    private InfoTranslate description;

    /* Constructors */
    public Item() {}

    public Item(Definition definition, InfoTranslate title, InfoTranslate description) {
        super();
        this.definition = definition;
        this.title = title;
        this.description = description;
    }

    /* Getters */
    public String getId() {
        return id;
    }

    public Definition getDefinition() {
        return definition;
    }

    public InfoTranslate getTitle() {
        return title;
    }

    public InfoTranslate getDescription() {
        return description;
    }

    /* Setters */
    public void setDefinition(Definition definition) {
        this.definition = definition;
    }

    public void setTitle(InfoTranslate title) {
        this.title = title;
    }

    public void setDescription(InfoTranslate description) {
        this.description = description;
    }

    public BaseParameters getBaseParameters() {
        return definition.item.baseParameters;
    }

    public List<DefinitionEffect> getDefinitionsEffect() {
        return Arrays.stream(definition.equipEffects)
                     .map(equipEffect -> equipEffect.effect.definition)
                     .collect(Collectors.toList());
    }
}
