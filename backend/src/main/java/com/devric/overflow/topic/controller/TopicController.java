package com.devric.overflow.topic.controller;

import com.devric.overflow.core.auth.appuser.UserAuth;
import com.devric.overflow.room.dto.RoomRequest;
import com.devric.overflow.room.dto.RoomResponseDTO;
import com.devric.overflow.room.dto.RoomUpdateRequest;
import com.devric.overflow.room.entity.Room;
import com.devric.overflow.room.service.RoomService;
import com.devric.overflow.topic.dto.TopicRequest;
import com.devric.overflow.topic.dto.TopicResponseDTO;
import com.devric.overflow.topic.service.TopicService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/topic")
//@AllArgsConstructor
@RequiredArgsConstructor
public class TopicController {
    private final TopicService topicService;
    private final ModelMapper modelMapper;

    @PostMapping
    public void addTopic(@AuthenticationPrincipal UserAuth userAuth, @RequestBody TopicRequest topicRequest) {
        topicService.addTopic(userAuth,topicRequest);
    }

    @GetMapping("/all")
    public List<TopicResponseDTO> getAllTopics() {
        return topicService.getAll();
    }

    @GetMapping("/{roomId}")
    public TopicResponseDTO getTopic(@AuthenticationPrincipal UserAuth userAuth,@PathVariable long roomId) {
//        return roomService.getRoombyId(roomId);
        return modelMapper.map(topicService.getTopicbyId(userAuth,roomId), TopicResponseDTO.class);

    }

    @PutMapping("/update/{topicId}")
    public TopicResponseDTO updateTopic(@AuthenticationPrincipal UserAuth userAuth,@PathVariable long topicId,@RequestBody TopicRequest topicRequest){

        return topicService.updateTopic(userAuth,topicId,topicRequest);
    }

    @DeleteMapping("/delete/{topicId}")
    public void deleteTopic(@AuthenticationPrincipal UserAuth userAuth,@PathVariable long topicId){
        topicService.deleteTopic(userAuth,topicId);
    }

}
