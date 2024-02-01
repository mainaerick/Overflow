package com.devric.overflow.core.auth.user.application.user;

import com.devric.overflow.core.auth.user.Email;
import com.devric.overflow.core.auth.user.Image;
import com.devric.overflow.core.auth.user.UserName;
import com.devric.overflow.core.auth.user.UserUpdateRequest;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Value;

import static com.fasterxml.jackson.annotation.JsonTypeInfo.As.WRAPPER_OBJECT;
import static com.fasterxml.jackson.annotation.JsonTypeInfo.Id.NAME;
import static java.util.Optional.ofNullable;

@JsonTypeName("user")
@JsonTypeInfo(include = WRAPPER_OBJECT, use = NAME)
@Value
class UserPutRequestDTO {

    String email;
    String username;
    String password;
    String bio;
    String image;

    UserUpdateRequest toUpdateRequest() {
        return UserUpdateRequest.builder()
                .emailToUpdate(ofNullable(email).map(Email::new).orElse(null))
                .userNameToUpdate(ofNullable(username).map(UserName::new).orElse(null))
                .imageToUpdate(ofNullable(image).map(Image::new).orElse(null))
                .passwordToUpdate(password)
                .bioToUpdate(bio)
                .build();

    }
}
