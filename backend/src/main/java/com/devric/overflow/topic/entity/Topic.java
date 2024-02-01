package com.devric.overflow.topic.entity;

import com.devric.overflow.message.entity.Message;
import com.devric.overflow.room.entity.Room;
import com.devric.overflow.topic.dto.TopicResponseDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "topic")
public class Topic {
    @Id
    @SequenceGenerator(
            name = "topic_id_sequence",
            sequenceName = "topic_id_sequence"
    )

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "topic", cascade = CascadeType.PERSIST)
    private Set<Room> rooms = new HashSet<>();

    @UpdateTimestamp
    private Instant updated;
    @UpdateTimestamp
    private  Instant created;

    public void changeName(String name){
        this.name = name;

    }
    public static Topic fromTopicResponseDTO(TopicResponseDTO topicResponseDTO) {
        Topic topic = new Topic();
        topic.setId(topicResponseDTO.getId());
        topic.setName(topicResponseDTO.getName());
        return topic;
    }
    public void addRoom(Room room) {
        if (room != null) {
            rooms.add(room);
            room.setTopic(this); // Set the back-reference in the Room entity
        }
    }
}
