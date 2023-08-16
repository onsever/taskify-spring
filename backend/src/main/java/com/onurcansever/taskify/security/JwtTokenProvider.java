package com.onurcansever.taskify.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

/**
 * The JwtTokenProvider class is used to generate a JWT after a user logs in successfully, and to validate the JWT sent in the Authorization header of the requests.
 */

@Component
public final class JwtTokenProvider {

    @Value(value = "${app.jwt-secret}")
    private String jwtSecret;

    @Value(value = "${app.jwt-expiration-milliseconds}")
    private Long jwtExpirationDate;

    // Generate JWT Token
    public String generateToken(Authentication authentication) {
        String usernameOrEmail = authentication.getName();
        Long id = ((CustomUserDetails) authentication.getPrincipal()).getUserId();

        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime() + jwtExpirationDate);

        // Create JWT Token
        String jwtToken = Jwts.builder()
                .claim("userId", id)
                .setSubject(usernameOrEmail)
                .setIssuedAt(new Date())
                .setExpiration(expireDate)
                .signWith(this.key())
                .compact(); // compact creates the JWT token

        return jwtToken;
    }

    // Decoding Encrypted Secret Key
    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    // Get Username From JWT Token
    public String getUsername(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(this.key())
                .build()
                .parseClaimsJws(token)
                .getBody();

        String username = claims.getSubject();

        return username;
    }

    // Validate JWT Token
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(this.key())
                    .build()
                    .parse(token);

            return true;
        } catch (MalformedJwtException ex) {
            throw new MalformedJwtException("Invalid JWT Token");
        } catch (ExpiredJwtException ex) {
            throw new ExpiredJwtException(null, null, "JWT Token has expired");
        } catch (UnsupportedJwtException ex) {
            throw new UnsupportedJwtException("JWT Token is unsupported");
        } catch (IllegalArgumentException ex) {
            throw new IllegalArgumentException("JWT claims string is empty");
        }
    }
}
