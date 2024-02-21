package com.wakfubuilder.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.wakfubuilder.model.Action;

public interface ActionRepository extends MongoRepository<Action, String> {
}