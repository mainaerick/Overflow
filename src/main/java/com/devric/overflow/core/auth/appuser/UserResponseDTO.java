package com.devric.overflow.core.auth.appuser;

import java.util.List;

import com.devric.overflow.room.dto.RoomUserResponseDTO;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserResponseDTO {

  @ApiModelProperty(position = 0)
  private Long id;
  @ApiModelProperty(position = 1)
  private String username;
  @ApiModelProperty(position = 2)
  private String email;
  @ApiModelProperty(position = 3)
  List<AppUserRole> appUserRoles;
  @ApiModelProperty(position = 4)
  List<RoomUserResponseDTO> rooms;
}
