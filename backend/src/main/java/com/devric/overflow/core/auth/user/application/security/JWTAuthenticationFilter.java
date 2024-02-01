package com.devric.overflow.core.auth.user.application.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static java.util.Optional.ofNullable;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.security.core.context.SecurityContextHolder.getContext;
@Slf4j
class JWTAuthenticationFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.warn(request.getHeader(AUTHORIZATION));
        ofNullable(request.getHeader(AUTHORIZATION))
                .map(authHeader -> authHeader.substring("Bearer ".length()))
                .map(JWT::new)
                .ifPresent(getContext()::setAuthentication);
        filterChain.doFilter(request, response);
    }

    @SuppressWarnings("java:S2160")
    static class JWT extends AbstractAuthenticationToken {

        private final String token;

        private JWT(String token) {
            super(null);
            this.token = token;
        }

        @Override
        public Object getPrincipal() {
            return token;
        }

        @Override
        public Object getCredentials() {
            return null;
        }
    }
}
