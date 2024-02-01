package com.devric.overflow.message.dto;

import com.devric.overflow.core.auth.user.UserName;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;

@Builder
@Data
public class MessageResponseDTO {
    @ApiModelProperty(position = 0)
    private Long id;
    @ApiModelProperty(position = 1)
    private AppUser host;
    @ApiModelProperty(position = 2)
    private Room room;
    @ApiModelProperty(position = 3)
    private String body;

    @ApiModelProperty(position = 4)
    private Instant updated;
    @ApiModelProperty(position = 5)
    private  Instant created;

    @Builder
    @Getter
    public static class AppUser{
        private Long id;
        private UserName username;
    }
    @Builder
    @Getter
    public static class Room{
        private Long id;
        private String name;
    }
}
