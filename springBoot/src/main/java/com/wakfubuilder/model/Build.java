package com.wakfubuilder.model;

import java.util.Map;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Build {

    public enum Cost {
        low,
        medium,
        high
    }

    @Id
    private ObjectId id;
    private String name;
    private int level;
    private Cost cost;
    private Item[] items;
    private Map<Integer, Integer> effects;
    private String[] userInfos;

    public Build () {
        this.items = new Item[15];
    }
    public Build(String name, int level, Cost cost) {
        super();
        this.name = name;
        this.level = level;
        this.cost = cost;
        this.items = new Item[15];
    }

    public String getId() {
        return id.toHexString();
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public Cost getCost() {
        return cost;
    }

    public void setCost(Cost cost) {
        this.cost = cost;
    }

    public Item[] getItems() {
        return items;
    }

    public void setItems(Item[] items) {
        this.items = items;
    }

    public Map<Integer,Integer> getEffects() {
        return effects;
    }

    public void setEffects(Map<Integer, Integer> effects) {
        this.effects = effects;
    }

    public String[] getUserInfos() {
        return userInfos;
    }
    public void setUserInfos(String[] userInfos) {
        this.userInfos = userInfos;
    }
}