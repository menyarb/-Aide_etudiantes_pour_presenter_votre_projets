package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Categorie;
import com.chaj3ni.chaj3ni.entites.Chat;

import java.util.List;

public interface ChatService {
    Chat ajouterChat (Chat chat);
    Chat modifierChat (Chat chat);
    void supprimerChat (Chat chat);
    void suppeimerChatbyId (Long idChat);
     List<Chat> listChats();
}
