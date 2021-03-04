package com.negen.repository;

import com.negen.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUserName(String username);

    User findByToken(String token);

    User findByIdAndPassword(Long id, String password);
}