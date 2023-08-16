package com.onurcansever.taskify.service;

import com.onurcansever.taskify.dto.UserDto;

public interface UserService {
    UserDto getUserById(Long id);

    UserDto updateUser(UserDto userDto, Long id);

    void deleteUserById(Long id);
}
