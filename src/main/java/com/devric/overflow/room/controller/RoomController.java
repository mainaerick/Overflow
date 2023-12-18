package com.devric.overflow.room.controller;

import com.devric.overflow.core.auth.appuser.UserAuth;
import com.devric.overflow.room.dto.RoomRequest;
import com.devric.overflow.room.dto.RoomResponseDTO;
import com.devric.overflow.room.dto.RoomUpdateRequest;
import com.devric.overflow.room.service.RoomService;
import com.devric.overflow.room.entity.Room;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/room")
//@AllArgsConstructor
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;
    private final ModelMapper modelMapper;


    @GetMapping("/all")
    public List<Room> getAllRooms() {
        return roomService.getAll();
    }

    @PostMapping
    public void addRoom(@AuthenticationPrincipal UserAuth userAuth,@RequestBody RoomRequest roomRequest) {
        roomService.addRoom(userAuth,roomRequest);
    }

    @PutMapping("/{roomId}/users/{userId}")
    RoomResponseDTO addUserToRoom(@PathVariable Long roomId, @PathVariable Long userId) {

        return modelMapper.map(roomService.addUserToRoom(roomId, userId), RoomResponseDTO.class);
    }

    @GetMapping("/{roomId}")
    public RoomResponseDTO getRoomById(@PathVariable long roomId) {
//        return roomService.getRoombyId(roomId);
        log.warn(modelMapper.map(roomService.getRoombyId(roomId), RoomResponseDTO.class).toString());
        return modelMapper.map(roomService.getRoombyId(roomId), RoomResponseDTO.class);

    }

    @PutMapping("/update/{roomId}")
    public RoomResponseDTO updateRoom(@AuthenticationPrincipal UserAuth userAuth,@PathVariable long roomId,@RequestBody RoomUpdateRequest roomUpdateRequest){

        return roomService.updateRoom(userAuth,roomId,roomUpdateRequest);
    }

    @DeleteMapping("/delete/{roomId}")
    public void deleteRoom(@AuthenticationPrincipal UserAuth userAuth,@PathVariable long roomId){
        roomService.deleteRoom(userAuth,roomId);
    }
}
