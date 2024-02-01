package com.devric.overflow.room.dto;


import com.devric.overflow.core.auth.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class RoomRequest {
    private Long id;
    private String host;
    private String topic;
    private String name;
    private String description;
    private Set<User> participants;

}
