package com.devric.overflow.room.dto;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.devric.overflow.core.auth.appuser.UserAuth;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.Set;

@Data
@Builder

public class RoomResponseDTO {
    @ApiModelProperty(position = 0)
    private Long id;
    @ApiModelProperty(position = 1)
    private String host;
    @ApiModelProperty(position = 2)
    private String topic;
    @ApiModelProperty(position = 3)
    private String name;
    @ApiModelProperty(position = 4)
    private String description;
    @ApiModelProperty(position = 5)
    private Set<AppUser> participants;

    @ApiModelProperty(position = 6)
    private Instant updated;
    @ApiModelProperty(position = 7)
    private  Instant created;
}

