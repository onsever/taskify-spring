package com.onurcansever.taskify.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public final class RegisterDto {
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String password;
}
