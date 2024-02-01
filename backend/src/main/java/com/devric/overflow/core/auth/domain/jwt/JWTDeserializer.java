package com.devric.overflow.core.auth.domain.jwt;

public interface JWTDeserializer {

    JWTPayload jwtPayloadFromJWT(String jwtToken);

}
