package com.devric.overflow.topic.controller;

import com.devric.overflow.core.auth.user.User;
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
    public void addTopic(@AuthenticationPrincipal User userAuth, @RequestBody TopicRequest topicRequest) {
        topicService.addTopic(userAuth,topicRequest);
    }

    @GetMapping("/all")
    public List<TopicResponseDTO> getAllTopics() {
        return topicService.getAll();
    }

    @GetMapping("/{topicName}")
    public TopicResponseDTO getTopic(@AuthenticationPrincipal User userAuth,@PathVariable String topicName) {
//        return roomService.getRoombyId(roomId);
        return modelMapper.map(topicService.getTopicbyName(userAuth,topicName), TopicResponseDTO.class);

    }

    @PutMapping("/update/{topicId}")
    public TopicResponseDTO updateTopic(@AuthenticationPrincipal User userAuth,@PathVariable long topicId,@RequestBody TopicRequest topicRequest){

        return topicService.updateTopic(userAuth,topicId,topicRequest);
    }

    @DeleteMapping("/delete/{topicId}")
    public void deleteTopic(@AuthenticationPrincipal User userAuth,@PathVariable long topicId){
        topicService.deleteTopic(userAuth,topicId);
    }

}
