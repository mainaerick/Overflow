package com.devric.overflow.message.dto;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.devric.overflow.room.entity.Room;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class MessageRequest {
    @ApiModelProperty(position = 0)
    private Integer id;
    @ApiModelProperty(position = 1)
    private AppUser host;
    @ApiModelProperty(position = 2)
    private Room room;
    @ApiModelProperty(position = 3)
    private String body;
}
