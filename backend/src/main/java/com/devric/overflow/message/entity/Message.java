package com.devric.overflow.message.entity;

import com.devric.overflow.core.auth.user.User;
import com.devric.overflow.room.entity.Room;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.Instant;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "message")
public class Message {
    @Id
    @SequenceGenerator(
            name = "message_id_sequence",
            sequenceName = "message_id_sequence"
    )

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    private User host;

    @ManyToOne
    private Room room;
    private String body;

    @UpdateTimestamp
    private Instant updated;
    @UpdateTimestamp
    private  Instant created;


}
