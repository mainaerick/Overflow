package com.devric.overflow.room.dto;

import com.devric.overflow.core.auth.appuser.AppUser;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.Set;
@Getter
@Setter
@NoArgsConstructor
@Accessors(chain = true)
public class RoomUpdateRequest {
    private String topic;
    private String name;
    private String description;
}
