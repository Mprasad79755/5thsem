package com.example.mongocrud.mongocrud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/")
public class RequestHandler {

	 @Autowired
	    private ProductService db;

	    @GetMapping
	    public List<Product> getAllEntities() {
	        return db.getall();	
	    }

	    @GetMapping("/{id}")
	    public Optional<Product> getEntityById(@PathVariable String id) {
	        return db.getbyid(id);
	    }

	    @PostMapping
	    public Product saveEntity(@RequestBody Product p) {
	        return db.save(p);
	    }

	    @DeleteMapping("/{id}")
	    public String deleteEntity(@PathVariable String id) {
	        db.del(id);
	        return "Product Deleted Sucessfully";
	    }
	
}
