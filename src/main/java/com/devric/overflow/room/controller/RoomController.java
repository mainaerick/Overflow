package com.devric.overflow.room.controller;

import com.devric.overflow.room.RoomRequest;
import com.devric.overflow.room.dto.RoomResponseDTO;
import com.devric.overflow.room.service.RoomService;
import com.devric.overflow.room.entity.Room;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
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
    public void addRoom(@RequestBody RoomRequest roomRequest) {
        roomService.addRoom(roomRequest);
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

}
