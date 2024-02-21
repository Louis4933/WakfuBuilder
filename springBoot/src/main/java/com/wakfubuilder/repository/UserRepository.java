package com.wakfubuilder.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.wakfubuilder.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
}