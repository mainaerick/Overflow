package com.devric.overflow.core.auth.domain.jwt;

import java.io.Serializable;

public interface JWTPayload extends Serializable {

    long getUserId();
    boolean isExpired();

}
