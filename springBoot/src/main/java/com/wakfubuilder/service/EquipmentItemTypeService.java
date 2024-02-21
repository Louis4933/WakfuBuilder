package com.wakfubuilder.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wakfubuilder.model.EquipmentItemType;
import com.wakfubuilder.repository.EquipmentItemTypeRepository;


@Service
public class EquipmentItemTypeService {

    private final EquipmentItemTypeRepository equipmentItemTypeRepository;

    public EquipmentItemTypeService(EquipmentItemTypeRepository equipmentItemTypeRepository) {
        this.equipmentItemTypeRepository = equipmentItemTypeRepository;
    }

    public List<EquipmentItemType> getEquipmentItemTypes() {
        return equipmentItemTypeRepository.findAll();
    }

    public EquipmentItemType getEquipmentItemType(String id) {
        if (id == null) {
            return null;
        }
        Optional<EquipmentItemType> optionalEquipmentItemType = equipmentItemTypeRepository.findById(id);
        return optionalEquipmentItemType.orElse(null);
    }

    public String[] getEquipmentPositionByItemTypeId(Integer itemTypeId) {
        if (itemTypeId == null) {
            return null;
        }
        return equipmentItemTypeRepository.findByItemTypeId(itemTypeId).getDefinition().getEquipmentPositions();
    }
}
