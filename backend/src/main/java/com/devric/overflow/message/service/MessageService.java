package com.devric.overflow.message.service;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.devric.overflow.core.auth.appuser.UserAuth;
import com.devric.overflow.core.auth.appuser.UserRepository;
import com.devric.overflow.exception_handler.PropertyNotFound;
import com.devric.overflow.message.dto.MessageRequest;
import com.devric.overflow.message.dto.MessageResponseDTO;
import com.devric.overflow.message.entity.Message;
import com.devric.overflow.message.repository.MessageRepository;
import com.devric.overflow.room.entity.Room;
import com.devric.overflow.room.repository.RoomRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Log4j2
@Service
@AllArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;

    public MessageResponseDTO addMessage(MessageRequest messageRequest, Long roomId, UserAuth userAuth) {
        Room room = roomRepository.findById(roomId).get();
        Set<AppUser> appUserSet = room.getParticipants();
        AppUser appUser = userRepository.findById(userAuth.getId()).get();

//        add sender as participant if not available

        if (appUser == null) {
            throw new PropertyNotFound("User not found");
        }
        appUserSet.add(appUser);

        room.setParticipants(appUserSet);


        Message message = messageRepository.saveAndFlush(Message.builder()
                .body(messageRequest.getBody())
                .host(appUser)
                .room(room)
                .build());
        if (room.getParticipants().contains(appUserSet)) {
            log.warn("Participant is available");
        } else {
            roomRepository.save(room);

        }

        return convertMessage(userAuth, message);
    }

    public List<MessageResponseDTO> getMessagesbyRoomId(long roomId) {
        List<Message> messages = messageRepository.findMessagesByRoomId(roomId);

        return messages.stream()
                .map(this::convertAllMessage)
                .collect(Collectors.toList());
    }
    public List<MessageResponseDTO> getMessagesAll(UserAuth userAuth) {
        List<Message> messages = messageRepository.findAll();
        return messages.stream()
                .map(this::convertAllMessage)
                .collect(Collectors.toList());
    }

    private MessageResponseDTO convertMessage(UserAuth userAuth, Message message) {

//        ProfileResponse profile = profileService.getProfile(userAuth, userAuth.getUsername());
        return MessageResponseDTO.builder()
                .id(message.getId())
                .created(message.getCreated())
                .updated(message.getUpdated())
                .room(MessageResponseDTO.Room.builder().name(message.getRoom().getName()).id(message.getRoom().getId()).build())
                .body(message.getBody())
                .host(MessageResponseDTO.AppUser.builder()
                        .id(message.getHost().getId())
                        .username(userAuth.getUsername())
                        .build())
                .build();
    }

    private MessageResponseDTO convertAllMessage(Message message) {
//        ProfileResponse profile = profileService.getProfile(userAuth, userAuth.getUsername());
        return MessageResponseDTO.builder()
                .id(message.getId())
                .created(message.getCreated())
                .updated(message.getUpdated())
                .room(MessageResponseDTO.Room.builder().name(message.getRoom().getName()).id(message.getRoom().getId()).build())
                .body(message.getBody())
                .host(MessageResponseDTO.AppUser.builder()
                        .id(message.getHost().getId())
                        .username(message.getHost().getUsername())
                        .build())
                .build();
    }

}
