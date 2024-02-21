package com.wakfubuilder.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.wakfubuilder.model.Item;
import com.wakfubuilder.model.Item.DefinitionEffect;
import com.wakfubuilder.repository.ItemRepository;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    public Item getItem(String id) {
        if (id == null) {
            return null;
        }
        Optional<Item> optionalItem = itemRepository.findById(id);
        return optionalItem.orElse(null);
    }

    public List<Item> getItemsByEquipmentItemTypeIds(List<Integer> ids) {
        return itemRepository.findByEquipmentItemTypeIds(ids);
    }

    public List<Item> getItemsWithTheMostEffects(List<Item> items, List<Integer> effects) {

        // Le nombre maximum d'effets possibles pour ces items, avec ces effets
        int maxNumberOfEffects = 0;

        // Le nombre d'effets qu'a un item
        int numberOfEffectsOfTheItem = 0;

        List<Item> itemsSelected = new ArrayList<>();
        
        // On obtient le nombre maximum d'effets possibles
        for (Item item : items) {

            numberOfEffectsOfTheItem = 0;

            List<DefinitionEffect> definitionsEffectOfTheItem = item.getDefinitionsEffect();

            for (DefinitionEffect definitionEffect : definitionsEffectOfTheItem) {

                    // Si l'id de l'effet de l'item est dans la liste des ids des effets demandés
                    if (effects.contains(definitionEffect.getActionId())) {

                        numberOfEffectsOfTheItem += 1;

                    }
            }

            if (numberOfEffectsOfTheItem > maxNumberOfEffects) {
                maxNumberOfEffects = numberOfEffectsOfTheItem;
            }
        }

        // On récupère tous les items avec le maximum d'effets possibles pour ce set d'items
        for (Item item : items) {

            numberOfEffectsOfTheItem = 0;

            List<DefinitionEffect> definitionsEffectOfTheItem = item.getDefinitionsEffect();

            for (DefinitionEffect definitionEffect : definitionsEffectOfTheItem) {

                    // Si l'id de l'effet de l'item est dans la liste des ids des effets demandés
                    if (effects.contains(definitionEffect.getActionId())) {

                        numberOfEffectsOfTheItem += 1;

                    }
            }

            if (numberOfEffectsOfTheItem == maxNumberOfEffects) {
                itemsSelected.add(item);
            }
        }

        return itemsSelected;
    }
}
