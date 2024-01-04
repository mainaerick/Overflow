package com.devric.overflow.topic.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Builder
@Data
public class TopicResponseDTO {
    @ApiModelProperty(position = 0)
    private Long id;
    @ApiModelProperty(position = 1)
    private String name;
    @ApiModelProperty(position = 2)
    private Instant updated;
    @ApiModelProperty(position = 3)
    private  Instant created;
}
