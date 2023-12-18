package com.devric.overflow.core.auth.security;

import com.devric.overflow.core.auth.appuser.AppUser;
import com.devric.overflow.core.auth.appuser.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class UserServiceDetail implements UserDetailsService {

  private final UserRepository userRepository;

  @Transactional(readOnly = true)
  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    return userRepository.findByUsername(email);
  }
}

//@Service
//@RequiredArgsConstructor
//public class MyUserDetails implements UserDetailsService {
//
//  private final UserRepository userRepository;
//
////  @Override
//  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//    final AppUser appUser = userRepository.findByUsername(username);
//
//    if (appUser == null) {
//      throw new UsernameNotFoundException("User '" + username + "' not found");
//    }
//
//    return org.springframework.security.core.userdetails.User//
//        .withUsername(username)//
//        .password(appUser.getPassword())//
//
//        .authorities(appUser.getAppUserRoles())//
//        .accountExpired(false)//
//        .accountLocked(false)//
//        .credentialsExpired(false)//
//        .disabled(false)//
//        .build();
//  }
//
//}
