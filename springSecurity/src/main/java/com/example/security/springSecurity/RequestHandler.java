package com.example.security.springSecurity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.Model;
@RestController
public class RequestHandler {

	@GetMapping("/")
    public String welcome(Model model) {
        model.addAttribute("message", "Welcome to the Cool Welcome Page!");
        return "<h1>welcome</h1>";
    }
}
