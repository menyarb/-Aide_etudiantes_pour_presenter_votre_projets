package com.chaj3ni.chaj3ni.repository;

import com.chaj3ni.chaj3ni.entites.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}
