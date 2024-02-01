package com.devric.overflow.core.auth.user.application.user;

import com.devric.overflow.core.auth.user.User;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Value;

import static com.fasterxml.jackson.annotation.JsonTypeInfo.As.WRAPPER_OBJECT;
import static com.fasterxml.jackson.annotation.JsonTypeInfo.Id.NAME;
import static java.lang.String.valueOf;

@JsonTypeName("user")
@JsonTypeInfo(include = WRAPPER_OBJECT, use = NAME)
@Value
class UserModel {

    String email;
    String username;
    String token;
    String bio;
    String image;

    static UserModel fromUserAndToken(User user, String token) {
        return new UserModel(
                valueOf(user.getEmail()),
                valueOf(user.getName()),
                token,
                "",
                "");
    }

}
