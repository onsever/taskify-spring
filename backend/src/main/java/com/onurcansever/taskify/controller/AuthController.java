package com.onurcansever.taskify.controller;

import com.onurcansever.taskify.dto.JwtAuthResponse;
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
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody  LoginDto loginDto) {
        String token = this.authService.login(loginDto);

        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setAccessToken(token);

        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.CREATED);
    }

    @PostMapping(value = "/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        return new ResponseEntity<>(this.authService.register(registerDto), HttpStatus.OK);
    }
}
