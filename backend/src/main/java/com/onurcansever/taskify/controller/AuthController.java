package com.onurcansever.taskify.controller;

import com.onurcansever.taskify.dto.LoginDto;
import com.onurcansever.taskify.dto.RegisterDto;
import com.onurcansever.taskify.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    private final AuthService authService;

    @Autowired
    public AuthenticationController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<String> login(@RequestBody  LoginDto loginDto) {
        return new ResponseEntity<>(this.authService.login(loginDto), HttpStatus.CREATED);
    }

    @PostMapping(value = "/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        return new ResponseEntity<>(this.authService.register(registerDto), HttpStatus.OK);
    }
}
