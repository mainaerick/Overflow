package com.devric.overflow.message.repository;

import com.devric.overflow.message.dto.MessageDTO;
import com.devric.overflow.message.dto.MessageResponseDTO;
import com.devric.overflow.message.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message,Long> {

    List findMessagesByRoomId(Long roomId);

}
