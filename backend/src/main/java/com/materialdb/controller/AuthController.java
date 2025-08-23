package com.materialdb.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.HashMap;
import java.util.Map;
import com.materialdb.Login.Loginrequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    private final String username = "admin";
    private final String password = "admin123";

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Loginrequest req) {
        Map<String, Object> response = new HashMap<>();
        
        if (username.equals(req.getUsername()) && password.equals(req.getPassword())) {
            response.put("success", true);
            response.put("message", "Login successful");
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            response.put("message", "Invalid username or password");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
