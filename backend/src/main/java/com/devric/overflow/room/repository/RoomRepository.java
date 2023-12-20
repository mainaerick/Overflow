package com.devric.overflow.room.repository;

import com.devric.overflow.room.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

    Room deleteRoomById(Long id);
}
