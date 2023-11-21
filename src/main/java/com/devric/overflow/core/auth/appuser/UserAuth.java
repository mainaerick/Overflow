package com.devric.overflow.core.auth.appuser;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserAuth
{
    @ApiModelProperty(position = 0)
    private Long id;
    private String username;
    private String email;
}
