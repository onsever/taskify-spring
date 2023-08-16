package com.onurcansever.taskify.service;

import com.onurcansever.taskify.dto.LoginDto;
import com.onurcansever.taskify.dto.RegisterDto;

public interface AuthService {
    String login(LoginDto loginDto);

    String register(RegisterDto registerDto);
}
