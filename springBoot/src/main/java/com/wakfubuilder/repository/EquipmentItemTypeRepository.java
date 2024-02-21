package com.wakfubuilder.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.wakfubuilder.model.EquipmentItemType;

public interface EquipmentItemTypeRepository extends MongoRepository<EquipmentItemType, String> {
    @Query("{ 'definition.idEITDefinition': ?0 }")
    EquipmentItemType findByItemTypeId(Integer itemTypeId);
}
