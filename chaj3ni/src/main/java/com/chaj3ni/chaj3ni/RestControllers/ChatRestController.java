package com.chaj3ni.chaj3ni.RestControllers;


import com.chaj3ni.chaj3ni.entites.Chat;
import com.chaj3ni.chaj3ni.RestControllers.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/chat")
public class ChatRestController {
    //crud
    @Autowired
    ChatService chatService;
    //POST=ajoute
    //put=modifer
    //DELETE=supp
    //GET=affiche
    @RequestMapping(method = RequestMethod.POST)
    public Chat ajouterCategorie (@RequestBody Chat chat){
        return chatService.ajouterChat(chat);}

    @RequestMapping(method = RequestMethod.PUT)
    public Chat modifierChat (@RequestBody Chat chat){
        return chatService.modifierChat(chat);}

    @RequestMapping(value ="/{id}",method = RequestMethod.DELETE)
    public void supprimerChat(@PathVariable("id") Long id)
    {
        chatService.suppeimerChatbyId(id);
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<Chat> afficherChat(){
        return chatService.listChats();}
}
