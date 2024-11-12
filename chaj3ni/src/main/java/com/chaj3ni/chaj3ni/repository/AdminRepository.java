package com.chaj3ni.chaj3ni.repository;

import com.chaj3ni.chaj3ni.entites.Admin;
import org.springframework.data.jpa.repository.JpaRepository;


//interface
public interface AdminRepository extends JpaRepository<Admin,Long> {

  Admin findByEmail(String email) ;
  Admin findByMdp(String mdp);


}
    // @Query("SELECT u FROM User u WHERE u.login = :login and u.mdp = :password")
  //  Admin login(@Param("login") String login, @Param("password") String password);

