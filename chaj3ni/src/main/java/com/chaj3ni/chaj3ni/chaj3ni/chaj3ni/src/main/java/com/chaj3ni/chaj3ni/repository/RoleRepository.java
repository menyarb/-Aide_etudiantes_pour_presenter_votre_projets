package com.chaj3ni.chaj3ni.repository;

import com.chaj3ni.chaj3ni.entites.Role;
import com.chaj3ni.chaj3ni.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

//interface
public interface RoleRepository extends JpaRepository<Role,Long> {
}
