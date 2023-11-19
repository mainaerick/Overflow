package com.devric.overflow.core.auth.appuser;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<AppUser, Long> {

  boolean existsByUsername(String username);

  AppUser findByUsername(String username);

  @Transactional
  void deleteByUsername(String username);

}
