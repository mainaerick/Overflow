package com.devric.overflow.core.auth.appuser;

import com.devric.overflow.room.entity.Room;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Getter // Create getters and setters
@Setter
@NoArgsConstructor
@Table(name = "appuser")
public class AppUser {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Size(min = 4, max = 255, message = "Minimum username length: 4 characters")
  @Column(unique = true, nullable = false)
  private String username;

  @Column(unique = true, nullable = false)
  private String email;

  @Size(min = 8, message = "Minimum password length: 8 characters")
  private String password;


  @ElementCollection(fetch = FetchType.EAGER)
  List<AppUserRole> appUserRoles;

  @JsonIgnore
  @ManyToMany(mappedBy = "participants", fetch = FetchType.LAZY)
  public Set<Room> rooms = new HashSet<>();
//  @OneToMany
//  public Set<Room> rooms = new HashSet<>();
//  private Room room;
}
