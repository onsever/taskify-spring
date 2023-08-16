package com.onurcansever.taskify.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public final class JwtAuthResponse {
    private String accessToken;
    private String tokenType = "Bearer";
}
