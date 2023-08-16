package com.onurcansever.taskify.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public final class UserNotFoundException extends RuntimeException {
    private final String fieldName;
    private final Long fieldValue;

    public UserNotFoundException(String fieldName, Long fieldValue) {
        super(String.format("User with %s: 'User with id %d' not found", fieldName, fieldValue));
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }

    public String getFieldName() {
        return fieldName;
    }

    public Long getFieldValue() {
        return fieldValue;
    }
}
