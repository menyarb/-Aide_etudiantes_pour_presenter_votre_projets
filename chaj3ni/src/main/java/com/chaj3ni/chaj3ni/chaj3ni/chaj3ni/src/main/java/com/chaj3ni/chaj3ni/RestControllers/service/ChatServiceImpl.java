package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Chat;
import com.chaj3ni.chaj3ni.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ChatServiceImpl implements ChatService{
    @Autowired
    ChatRepository chatRepository;
    @Override
    public Chat ajouterChat(Chat chat) {
        return chatRepository.save(chat);
    }

    @Override
    public Chat modifierChat(Chat chat) {
        return chatRepository.save(chat);
    }

    @Override
    public void supprimerChat(Chat chat) {
        chatRepository.delete(chat);
    }

    @Override
    public void suppeimerChatbyId(Long idChat) {
        chatRepository.deleteById(idChat);
    }

    @Override
    public List<Chat> listChats() {
        return chatRepository.findAll();
    }
}
