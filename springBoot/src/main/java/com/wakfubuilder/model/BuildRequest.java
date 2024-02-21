package com.wakfubuilder.model;

import java.util.Map;
import java.util.LinkedHashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class BuildRequest {
    private String name;
    private int level;
    private Build.Cost cost;
    private Map<Integer, Integer> effects;
    private String[] userInfos;

    public BuildRequest() {
    }

    public BuildRequest(String name, int level, Build.Cost cost, JSONArray effects) {
        this.name = name;
        this.level = level;
        this.cost = cost;
        this.effects = new LinkedHashMap<Integer, Integer>();
        for (int i = 0; i < effects.length(); i++) {
            JSONObject effect = effects.getJSONObject(i);
            this.effects.put(effect.getInt("id"), effect.getInt("numberOfElements"));
        }

    }

    public String getName() {
        return name;
    }

    public int getLevel() {
        return level;
    }

    public Build.Cost getCost() {
        return cost;
    }

    public Map<Integer,Integer> getEffects() {
        return effects;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public void setCost(Build.Cost cost) {
        this.cost = cost;
    }

    public void setEffects(Map<Integer,Integer> effects) {
        this.effects = effects;
    }


    public String[] getUserInfos() {
        return userInfos;
    }

    public void setUserInfos(String[] userInfos) {
        this.userInfos = userInfos;
    }
}
