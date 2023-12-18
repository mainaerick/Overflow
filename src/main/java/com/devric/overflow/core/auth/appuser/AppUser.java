package com.devric.overflow.core.auth.appuser;

import com.devric.overflow.room.entity.Room;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
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
public class AppUser implements UserDetails {

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


  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return appUserRoles;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }
//  @OneToMany
//  public Set<Room> rooms = new HashSet<>();
//  private Room room;
}
