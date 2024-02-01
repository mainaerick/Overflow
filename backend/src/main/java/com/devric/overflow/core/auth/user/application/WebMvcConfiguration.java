package com.devric.overflow.core.auth.user.application;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.web.config.PageableHandlerMethodArgumentResolverCustomizer;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
class WebMvcConfiguration {

    @Bean
    PageableHandlerMethodArgumentResolverCustomizer pageableHandlerMethodArgumentResolverCustomizer() {
        return pageableResolver -> {
            pageableResolver.setSizeParameterName("limit");
            pageableResolver.setPageParameterName("offset");
        };
    }
}
