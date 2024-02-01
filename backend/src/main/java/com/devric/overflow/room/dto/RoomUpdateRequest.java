package com.devric.overflow.room.dto;

import com.devric.overflow.topic.entity.Topic;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;


@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class RoomUpdateRequest {
    private Topic topic;
    private String name;
    private String description;
}
