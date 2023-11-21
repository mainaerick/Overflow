package com.devric.overflow.message.service;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.devric.overflow.core.auth.appuser.UserAuth;
import com.devric.overflow.core.auth.appuser.UserRepository;
import com.devric.overflow.core.auth.appuser.UserResponseDTO;
import com.devric.overflow.message.dto.MessageRequest;
import com.devric.overflow.message.dto.MessageResponseDTO;
import com.devric.overflow.message.entity.Message;
import com.devric.overflow.message.repository.MessageRepository;
import com.devric.overflow.room.entity.Room;
import com.devric.overflow.room.repository.RoomRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@AllArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    public MessageResponseDTO addMessage(MessageRequest messageRequest,Long roomId, UserAuth userAuth) {

        Room room = roomRepository.findById(roomId).get();
        AppUser appUser = userRepository.findById(userAuth.getId()).get();
//        Message message = Message.builder()
//                .body(messageRequest.getBody())
//                .host(appUser)
//                .room(room)
//                .build();
//        log.info(message);
        Message message = messageRepository.saveAndFlush(Message.builder()
                .body(messageRequest.getBody())
                .host(appUser)
                .room(room)
                .build());

       return convertComment(userAuth,message);
    }


    private MessageResponseDTO convertComment(UserAuth userAuth, Message message) {

//        ProfileResponse profile = profileService.getProfile(userAuth, userAuth.getUsername());
        return MessageResponseDTO.builder()
                .id(message.getId())
                .created(message.getCreated())
                .updated(message.getUpdated())
                .room(MessageResponseDTO.Room.builder().name(message.getRoom().getName()).build())
                .body(message.getBody())
                .host(MessageResponseDTO.AppUser.builder().username(userAuth.getUsername()).build()).build();
    }
}
