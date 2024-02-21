package com.wakfubuilder.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.wakfubuilder.model.Item;

public interface ItemRepository extends MongoRepository<Item, String> {
    @Query("{ 'definition.item.baseParameters.itemTypeId': { $in: ?0 } }")
    List<Item> findByEquipmentItemTypeIds(List<Integer> itemTypeIds);

    @Query("{ 'definition.item.level': { $gte: ?0, $lte: ?1 }, 'definition.item.baseParameters.rarity': { $in: ?2 }, 'definition.equipEffects.effect.definition.actionId': { $in: ?3 }}")
    List<Item> findByCriteria(int minLevel, int maxLevel, List<Integer> rarities, List<Integer> effects);

    @Query("{ 'definition.item.idItemDef': { $eq: ?0 } }")
    Item findById(int id);

    @Query("{ 'definition.equipEffects.effect.definition.actionId': { $eq: ?0 }}")
    Item findByActionId(int actionId);
}
