package com.wakfubuilder.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "itemProperties")
public class ItemProperties {
    
    @Id
    @JsonProperty("id")
    private String id;
    private String name;
    private String description;

    /* Constructors */
    public ItemProperties() {}

    public ItemProperties(String id, String name, String description) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
    }

    /* Getters */
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    /* Setters */
    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    


}
