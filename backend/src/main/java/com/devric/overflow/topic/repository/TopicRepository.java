package com.devric.overflow.topic.repository;

import com.devric.overflow.room.entity.Room;
import com.devric.overflow.topic.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TopicRepository  extends JpaRepository<Topic,Long> {

    Room findTopicByName(String name);

    }
