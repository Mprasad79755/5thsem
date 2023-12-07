package com.example.crudoperation.crudoperation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

	private final StudentService db;

    @Autowired
    public Controller(StudentService userService) {
        this.db = userService;
    }

    @GetMapping
    public List<Student> getAllUsers() {
        return db.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<Student> getUserById(@PathVariable Long id) {
        return db.getUserById(id);
    }

    @PostMapping
    public Student createUser(@RequestBody Student user) {
        return db.createUser(user);
    }

    @PutMapping("/{id}")
    public Student updateUser(@PathVariable Long id, @RequestBody Student updatedUser) {
        return db.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
    	db.deleteUser(id);
    }
	
	
}
