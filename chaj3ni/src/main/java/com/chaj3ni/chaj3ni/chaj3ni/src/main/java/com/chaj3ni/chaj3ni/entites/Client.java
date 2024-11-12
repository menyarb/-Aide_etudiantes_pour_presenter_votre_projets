package com.chaj3ni.chaj3ni.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idClient;
    private  String image;
    private String nom;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    private String prenom;
    private String adress;
    private String email;
    private String tel;
    private String login;
    private String mdp;
    private String role;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @JsonIgnore
    @OneToMany(mappedBy = "Clients")
    private List<Offre> Offres;
    // cho l hne lezm ki tji t3mlrelation many to one lezm mappedBy lesm ili mawjoud fyha ikoun nafes esm l variable ili 7atetou fl class ili bch torbtou byh
    // mfi realtion hedhy ili bin ckient w offer nty fl offer esm 7atetou Clients donc hen mappedBy lezm tkoun Clients fhmtni ?

    @JsonIgnore
    @OneToMany(mappedBy = "Clients")
    private List<Chat> clientchat;

    public Client() {
    }

    public void setIdClient(long idClient) {
        this.idClient = idClient;
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




    public long getIdClient() {
        return idClient;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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




}
