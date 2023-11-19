package com.devric.overflow.room.service;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.devric.overflow.core.auth.appuser.UserRepository;
import com.devric.overflow.exception_handler.PropertyNotFound;
import com.devric.overflow.room.RoomRequest;
import com.devric.overflow.room.entity.Room;
import com.devric.overflow.room.repository.RoomRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Log4j2
@Service
@AllArgsConstructor
public class RoomService {
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public void addRoom(RoomRequest request) {

        Room room = Room.builder()
                .name(request.getName())
                .host(request.getHost())
                .topic(request.getTopic())
                .description(request.getDescription())
                .participants(request.getParticipants())
                .build();
        roomRepository.saveAndFlush(room);
    }

    Room addUserToRoom(Long roomId,Long userId){
        Set<AppUser> appUserSet =new HashSet<>();
        Room room = roomRepository.findById(roomId).get();
        AppUser appUser = userRepository.findById(userId).get();
        if (room == null){
            throw new PropertyNotFound("Room not found");
        }
        if (appUser ==null){
            throw new PropertyNotFound("User not found");
        }
        appUserSet.add(appUser);

        room.setParticipants(appUserSet);

        return roomRepository.save(room);

    }
    public List<Room> getAll(){
        return roomRepository.findAll();

    }

    public Room getRoombyId(long roomId){
        Room  room = roomRepository.findById(roomId).get();
        if (null == room.getName())
            throw new PropertyNotFound("property not found");
        log.warn(room);

        return room;
    }
}
