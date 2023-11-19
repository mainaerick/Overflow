package com.devric.overflow.room.dto;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.devric.overflow.core.auth.appuser.UserResponseDTO;
import com.devric.overflow.core.auth.appuser.UserRoomResponseDTO;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
public class RoomResponseDTO {
    @ApiModelProperty(position = 0)
    private Integer id;
    @ApiModelProperty(position = 1)
    private String host;
    @ApiModelProperty(position = 2)
    private String topic;
    @ApiModelProperty(position = 3)
    private String name;
    @ApiModelProperty(position = 4)
    private String description;
    @ApiModelProperty(position = 5)
    private Set<UserRoomResponseDTO> participants;
}

