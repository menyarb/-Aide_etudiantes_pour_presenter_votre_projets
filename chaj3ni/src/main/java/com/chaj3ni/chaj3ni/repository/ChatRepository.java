package com.chaj3ni.chaj3ni.repository;

import com.chaj3ni.chaj3ni.entites.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Long> {

}
