package com.chaj3ni.chaj3ni.entites;

import javax.persistence.*;

@Entity
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idChat;
    private int id_cond;
    private int id_Client;
    private String messages ;
    private String name;


    @ManyToOne
    private Condidat condidatchat;

    @ManyToOne
    private Client Clientchat;


    public Chat() {
    }

    public Chat(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void setIdChat(long idChat) {
        this.idChat = idChat;
    }

    public void setId_cond(int id_cond) {
        this.id_cond = id_cond;
    }

    public void setId_Client(int id_Client) {
        this.id_Client = id_Client;
    }

    public void setMessages(String messages) {
        this.messages = messages;
    }


    public String getMessages() {
        return messages;
    }

    public long getIdChat() {
        return idChat;
    }

    public int getId_Client() {
        return id_Client;
    }

    public int getId_cond() {
        return id_cond;
    }
}
