package com.chaj3ni.chaj3ni.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Condidat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public long idCondidat;
    public String image;
    private String nom ;
    private String prenom ;
    private String adress ;
    private String email ;
    private String tel ;
    private String login ;
    private String mdp ;
    private String role;
//offre
    @JsonIgnore
    @OneToMany(mappedBy = "condidatoffre")
    private List<Offre> offres;
//contact
    @JsonIgnore
    @OneToMany(mappedBy = "Contactcondidat")
    private List<Contact> contactcondidat;
//categorie
    @JsonIgnore
    @OneToMany(mappedBy = "condidatcategorie")
    private List<Categorie> categories;
//chat
    @JsonIgnore
    @OneToMany(mappedBy = "condidatchat")
    private List<Chat> chats;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


    public long getIdCondidat() {
        return idCondidat;
    }

    public void setIdCondidat(long idCondidat) {
        this.idCondidat = idCondidat;
    }


    public String getNom() {
        return nom;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPrenom() {
        return prenom;
    }
    public String getAdress() {
        return adress;
    }
    public String getEmail() {
        return email;
    }
    public String getTel() {
        return tel;
    }
    public String getLogin() {
        return login;
    }
    public String getMdp() {
        return mdp;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setMdp(String mdp) {
        this.mdp = mdp;
    }
}
