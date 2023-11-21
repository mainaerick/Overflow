package com.devric.overflow.message.controller;

import com.devric.overflow.core.auth.appuser.UserAuth;
import com.devric.overflow.core.auth.appuser.UserDataDTO;
import com.devric.overflow.message.dto.MessageDTO;
import com.devric.overflow.message.dto.MessageRequest;
import com.devric.overflow.message.dto.MessageResponseDTO;
import com.devric.overflow.message.service.MessageService;
import com.devric.overflow.room.dto.RoomRequest;
import com.devric.overflow.room.dto.RoomResponseDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/v1/message")
//@AllArgsConstructor
@RequiredArgsConstructor
public class MessageController {
    private final ModelMapper modelMapper;
    private final MessageService messageService;
    @PutMapping("/room/{roomId}")
    MessageResponseDTO addMessageToRoom(@PathVariable Long roomId, @RequestBody MessageRequest messageRequest,@AuthenticationPrincipal UserAuth userAuth) {

        return messageService.addMessage(messageRequest,roomId,userAuth);
    }


}
