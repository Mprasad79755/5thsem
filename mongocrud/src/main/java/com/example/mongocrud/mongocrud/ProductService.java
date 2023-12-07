package com.example.mongocrud.mongocrud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service 
public class ProductService {
	@Autowired
    private ProductRepo db;

    public List<Product> getall() {
        return db.findAll();
    }

    public Optional<Product> getbyid(String id) {
        return db.findById(id);
    }

    public Product save(Product p) {
        return db.save(p);
    }

    public void del(String id) {
        db.deleteById(id);
    }


}
