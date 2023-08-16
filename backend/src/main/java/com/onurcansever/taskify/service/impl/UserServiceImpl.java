package com.onurcansever.taskify.service.impl;

import com.onurcansever.taskify.dto.UserDto;
import com.onurcansever.taskify.entity.User;
import com.onurcansever.taskify.exception.UserNotFoundException;
import com.onurcansever.taskify.repository.UserRepository;
import com.onurcansever.taskify.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public UserDto getUserById(Long id) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User", id));

        return convertToDto(user);
    }

    @Override
    @PreAuthorize(value = "#id == authentication.principal.userId")
    public UserDto updateUser(UserDto userDto, Long id) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User", id));

        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());

        User updatedUser = this.userRepository.save(user);

        return convertToDto(updatedUser);
    }

    @Override
    @PreAuthorize(value = "#id == authentication.principal.userId")
    public void deleteUserById(Long id) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User", id));

        this.userRepository.delete(user);
    }

    private UserDto convertToDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }

    private User convertToEntity(UserDto userDto) {
        return modelMapper.map(userDto, User.class);
    }
}
