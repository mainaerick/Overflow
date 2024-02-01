package com.devric.overflow.core.auth.user;

import org.springframework.data.repository.Repository;

import java.util.Optional;

public interface UserRepository extends Repository<User, Long> {

    User save(User user);

    Optional<User> findById(long id);
    Optional<User> findFirstByEmail(Email email);
    Optional<User> findFirstByProfileUserName(UserName userName);

}
