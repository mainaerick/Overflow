package com.devric.overflow.room.entity;

import com.devric.overflow.core.auth.user.User;
import com.devric.overflow.message.entity.Message;
import com.devric.overflow.topic.entity.Topic;
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
@Table(name = "room")
public class Room {


    @Id
    @SequenceGenerator(
            name = "room_id_sequence",
            sequenceName = "room_id_sequence"
    )

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;
    private String host;
    @ManyToOne
    @JoinColumn(name = "topic_name")
    private Topic topic;
    private String name;
    private String description;

//    user is in a room

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "appuser_room",
            joinColumns =  @JoinColumn(name = "room_id") ,
            inverseJoinColumns = @JoinColumn(name = "appuser_id"))
    public Set<User> participants = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "room", cascade = CascadeType.REMOVE)
    private Set<Message> messages = new HashSet<>();
    @UpdateTimestamp
    private Instant updated;
    @UpdateTimestamp
    private  Instant created;


    public void changeName(String name){
        this.name = name;

    }

    public void changeDescription(String description) {
        this.description = description;
    }

    public void changeHost(String host) {
        this.host = host;
    }

    public void changeTopic(Topic topic) {
        this.topic = topic;
    }


}
