package com.devric.overflow.message.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class MessageDTO {
    @ApiModelProperty(position = 3)
    private String body;
}
