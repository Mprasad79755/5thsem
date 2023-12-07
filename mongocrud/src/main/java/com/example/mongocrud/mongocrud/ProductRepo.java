package com.example.mongocrud.mongocrud;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepo extends MongoRepository<Product , String> {

}
