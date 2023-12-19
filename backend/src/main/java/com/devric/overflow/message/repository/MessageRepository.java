package com.devric.overflow.message.repository;

import com.devric.overflow.message.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message,Long> {
}
