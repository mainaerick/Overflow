package com.devric.overflow.room.dto;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.devric.overflow.core.auth.appuser.UserAuth;
import com.devric.overflow.topic.entity.Topic;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Set;

@Data
@Builder

@NoArgsConstructor
public class RoomResponseDTO {

    @ApiModelProperty(position = 0)
    private Long id;
    @ApiModelProperty(position = 1)
    private String host;
    @ApiModelProperty(position = 2)
    private Topic topic;
    @ApiModelProperty(position = 3)
    private String name;
    @ApiModelProperty(position = 4)
    private String description;
    @ApiModelProperty(position = 5)
    public Set<AppUser> participants;

    @ApiModelProperty(position = 6)
    private Instant updated;
    @ApiModelProperty(position = 7)
    private  Instant created;

    public RoomResponseDTO(Long id, String host, Topic topic, String name, String description,
                           Set<AppUser> participants, Instant updated, Instant created) {
        this.id = id;
        this.host = host;
        this.topic = topic;
        this.name = name;
        this.description = description;
        this.participants = participants;
        this.updated = updated;
        this.created = created;
    }
}

