package com.devric.overflow.room.entity;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.Instant;
import java.util.HashSet;
import java.util.List;
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
    private String topic;
    private String name;
    private String description;

//    user is in a room

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "appuser_room",
            joinColumns =  @JoinColumn(name = "room_id") ,
            inverseJoinColumns = @JoinColumn(name = "appuser_id"))
    public Set<AppUser> participants = new HashSet<>();

    @UpdateTimestamp
    private Instant updated;
    @UpdateTimestamp
    private  Instant created;

}
