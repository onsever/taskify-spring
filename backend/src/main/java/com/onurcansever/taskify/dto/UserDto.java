package com.onurcansever.taskify.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public final class UserDto {
    private Long userId;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
}
