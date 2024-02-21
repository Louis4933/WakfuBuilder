package com.wakfubuilder.repository;

import com.wakfubuilder.model.Build;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface BuildRepository extends MongoRepository<Build, ObjectId> {

  @Query("{ 'userInfos.0' : { $eq: ?0 } }")
  List<Build> findByUserInfos(String idUser);


}