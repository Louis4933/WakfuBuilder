package com.wakfubuilder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wakfubuilder.model.Item;
import com.wakfubuilder.service.ItemService;

@RestController
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @GetMapping("/item/{id}")
    public Item getItem(@PathVariable String id) {
        return itemService.getItem(id);
    }

    @GetMapping("/items/equipmentItemType")
    public List<Item> getItemsByEquipmentItemTypeIds(@RequestParam List<Integer> ids) {
        return itemService.getItemsByEquipmentItemTypeIds(ids);
    }
}
