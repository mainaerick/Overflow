package com.devric.overflow.core.auth.domain.jwt;


import com.devric.overflow.core.auth.user.User;

public interface JWTSerializer {

    String jwtFromUser(User user);

}
