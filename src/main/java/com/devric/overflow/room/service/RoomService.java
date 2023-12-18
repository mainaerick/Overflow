package com.devric.overflow.room.service;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.devric.overflow.core.auth.appuser.UserAuth;
import com.devric.overflow.core.auth.appuser.UserRepository;
import com.devric.overflow.exception_handler.CustomException;
import com.devric.overflow.exception_handler.PropertyNotFound;
import com.devric.overflow.message.dto.MessageResponseDTO;
import com.devric.overflow.message.entity.Message;
import com.devric.overflow.room.dto.RoomRequest;
import com.devric.overflow.room.dto.RoomResponseDTO;
import com.devric.overflow.room.dto.RoomUpdateRequest;
import com.devric.overflow.room.entity.Room;
import com.devric.overflow.room.repository.RoomRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;

@Log4j2
@Service
@AllArgsConstructor
public class RoomService {
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public void addRoom(UserAuth userAuth,RoomRequest request) {

        Room room = Room.builder()
                .name(request.getName())
                .host(userAuth.getUsername())
                .topic(request.getTopic())
                .description(request.getDescription())
                .participants(request.getParticipants())
                .build();
        roomRepository.saveAndFlush(room);
    }
    @Transactional
    public RoomResponseDTO updateRoom(UserAuth userAuth, Long id, RoomUpdateRequest roomRequest){
        Room room = roomRepository.findById(id).get();
        if (room == null){
            throw new PropertyNotFound("Room not found");
        }

        if (roomRequest.getName()!=null){
            room.changeName(roomRequest.getName());

        }

//        if (roomRequest.getHost()!=null){
//            room.changeHost(roomRequest.getHost());
//        }
        if (roomRequest.getName()!=null){
            room.changeName(roomRequest.getName());
        }
        if (roomRequest.getTopic()!=null){
            room.changeTopic(roomRequest.getTopic());
        }
        if (roomRequest.getDescription()!=null){
            room.changeDescription(roomRequest.getDescription());
        }
//        roomRepository.saveAndFlush(room);
        return convertRoom(userAuth,room);
    }
    public Room addUserToRoom(Long roomId,Long userId){
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

    public void deleteRoom(UserAuth userAuth, Long id) {
        Room room = roomRepository.findById(id).get();
        try{
            if (room.getHost().equals(userAuth.getUsername())) {
                roomRepository.delete(room);
            }
            else {
                throw new CustomException("Not the owner of the room", HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }catch (Exception e){
            log.error(e.toString());
            throw new CustomException(e.toString(), HttpStatus.UNPROCESSABLE_ENTITY);
        }




    }

    private RoomResponseDTO convertRoom(UserAuth userAuth, Room room) {

//        ProfileResponse profile = profileService.getProfile(userAuth, userAuth.getUsername());
        return RoomResponseDTO.builder()
                .id(room.getId())
                .created(room.getCreated())
                .updated(room.getUpdated())
                .host(userAuth.getUsername())
                .name(room.getName())
                .topic(room.getTopic())
                .participants(room.getParticipants())
                .description(room.getDescription())
                .build();
    }
}
