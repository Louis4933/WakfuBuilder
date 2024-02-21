package com.wakfubuilder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wakfubuilder.model.EquipmentItemType;
import com.wakfubuilder.service.EquipmentItemTypeService;

@RestController
public class EquipmentItemTypeController {
    
    @Autowired
    private EquipmentItemTypeService equipmentItemTypeService;

    @GetMapping("/equipmentItemTypes")
    public List<EquipmentItemType> getEquipmentItemTypes() {
        return equipmentItemTypeService.getEquipmentItemTypes();
    }

    @GetMapping("/equipmentItemType/{id}")
    public EquipmentItemType getEquipmentItemType(@PathVariable String id) {
        return equipmentItemTypeService.getEquipmentItemType(id);
    }
}
