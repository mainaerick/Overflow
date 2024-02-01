package com.devric.overflow.topic.service;

import com.devric.overflow.core.auth.user.User;
import com.devric.overflow.exception_handler.CustomException;
import com.devric.overflow.exception_handler.PropertyNotFound;
import com.devric.overflow.topic.dto.TopicRequest;
import com.devric.overflow.topic.dto.TopicResponseDTO;
import com.devric.overflow.topic.entity.Topic;
import com.devric.overflow.topic.repository.TopicRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@Service
@AllArgsConstructor
public class TopicService {

    private final TopicRepository topicRepository;

    public void addTopic(User userAuth, TopicRequest request) {
        if (null == userAuth) {
            throw new CustomException("Not Authorised", HttpStatus.FORBIDDEN);
        }
        Topic topic = Topic.builder()
                .name(request.getName())
                .build();
        topicRepository.saveAndFlush(topic);
    }

    public List<TopicResponseDTO> getAll() {
        List<Topic> topic = topicRepository.findAll();
        return topic.stream()
                .map(this::convertAllTopic)
                .collect(Collectors.toList());

    }

    public TopicResponseDTO getTopicbyName(User userAuth, String topicName) {
        Topic topic = topicRepository.findTopicByName(topicName);
        if (null == userAuth) {
            throw new CustomException("Not Authorised", HttpStatus.FORBIDDEN);
        }
        if (null == topic) {
            topic =  topicRepository.saveAndFlush(Topic.builder()
                    .name(topicName)
                    .build());

        }
//            throw new PropertyNotFound("Topic not found");

        return convertTopic(userAuth, topic);
    }

    @Transactional
    public TopicResponseDTO updateTopic(User userAuth, Long id, TopicRequest topicRequest) {
        if (null == userAuth) {
            throw new CustomException("Not Authorised", HttpStatus.FORBIDDEN);
        }
        Topic topic = topicRepository.findById(id).get();
        if (topic == null) {
            throw new PropertyNotFound("Topic not found");
        }

        if (topicRequest.getName() != null) {
            topic.changeName(topicRequest.getName());
        }
        return convertTopic(userAuth, topic);
    }

    public void deleteTopic(User userAuth, Long id) {
        Topic topic = topicRepository.findById(id).get();
        try {
//            check if user authenticated
            if (!userAuth.toString().isEmpty()) {
                topicRepository.delete(topic);
            } else {
                throw new CustomException("Not Authorised", HttpStatus.FORBIDDEN);
            }
        } catch (Exception e) {
            log.error(e.toString());
            throw new CustomException(e.toString(), HttpStatus.UNPROCESSABLE_ENTITY);
        }

    }

    private TopicResponseDTO convertTopic(User userAuth, Topic topic) {
//        ProfileResponse profile = profileService.getProfile(userAuth, userAuth.getUsername());
        return TopicResponseDTO.builder()
                .id(topic.getId())
                .created(topic.getCreated())
                .updated(topic.getUpdated())
                .name(topic.getName())
                .roomcount((topic.getRooms() != null) ? topic.getRooms().size() : 0)
                .build();
    }

    private TopicResponseDTO convertAllTopic(Topic topic) {
//        ProfileResponse profile = profileService.getProfile(userAuth, userAuth.getUsername());
        return TopicResponseDTO.builder()
                .id(topic.getId())
                .created(topic.getCreated())
                .roomcount((topic.getRooms() != null) ? topic.getRooms().size() : 0)
                .updated(topic.getUpdated())
                .name(topic.getName())
                .build();
    }

}
