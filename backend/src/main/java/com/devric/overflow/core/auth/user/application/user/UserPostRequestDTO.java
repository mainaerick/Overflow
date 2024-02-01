package com.devric.overflow.core.auth.user.application.user;

import com.devric.overflow.core.auth.user.Email;
import com.devric.overflow.core.auth.user.UserName;
import com.devric.overflow.core.auth.user.UserSignUpRequest;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Value;

import javax.validation.constraints.NotBlank;

import static com.fasterxml.jackson.annotation.JsonTypeInfo.As.WRAPPER_OBJECT;
import static com.fasterxml.jackson.annotation.JsonTypeInfo.Id.NAME;

@JsonTypeName("user")
@JsonTypeInfo(include = WRAPPER_OBJECT, use = NAME)
@Value
class UserPostRequestDTO {

    @javax.validation.constraints.Email
    String email;
    @NotBlank
    String username;
    @NotBlank
    String password;

    UserSignUpRequest toSignUpRequest() {
        return new UserSignUpRequest(
                new Email(email),
                new UserName(username),
                password);
    }

}
