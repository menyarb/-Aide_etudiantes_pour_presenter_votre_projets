package com.chaj3ni.chaj3ni.repository;

import com.chaj3ni.chaj3ni.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

//interface
public interface UserRepository extends JpaRepository<User,Long> {
    @Query("SELECT u FROM User u WHERE u.login = :login and u.mdp = :password")
    User login(@Param("login") String login, @Param("password") String password);
}
