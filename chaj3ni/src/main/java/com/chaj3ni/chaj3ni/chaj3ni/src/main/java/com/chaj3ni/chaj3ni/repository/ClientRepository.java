package com.chaj3ni.chaj3ni.repository;

import com.chaj3ni.chaj3ni.entites.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
        }
