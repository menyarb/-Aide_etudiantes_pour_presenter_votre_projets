package com.chaj3ni.chaj3ni.entites;

import javax.persistence.*;

@Entity
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idContact;

    private String nom;
    private String email;
    private  String tel;
    private String sujet;
    private String message;

    @ManyToOne
    private User condidatcont;


    public String getNom() {
        return nom;
    }

    public long getIdContact() {
        return idContact;
    }

    public void setIdContact(long idContact) {
        this.idContact = idContact;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setSujet(String sujet) {
        this.sujet = sujet;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getEmail() {
        return email;
    }



    public String getTel() {
        return tel;
    }



    public String getSujet() {
        return sujet;
    }



    public String getMessage() {
        return message;
    }


}
