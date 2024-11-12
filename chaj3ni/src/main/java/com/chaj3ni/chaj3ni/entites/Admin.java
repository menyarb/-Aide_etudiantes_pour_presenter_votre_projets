package com.chaj3ni.chaj3ni.entites;
import lombok.Setter;

import javax.persistence.*;
@Setter
@Entity
public class Admin {
  // Cle primer id
    @Id
    //auto incrément
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private  String image;
    private  String nom;
    private String prenom;
    private String email;
    private String login ;
    private String mdp;
  private String role;

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }



  public long getId()
    {return id;}

    public String getNom() {
        return nom;
    }

  public void setId(long id) {
    this.id = id;
  }

  public void setNom(String nom) {
    this.nom = nom;
  }

  public void setPrenom(String prenom) {
    this.prenom = prenom;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setLogin(String login) {
    this.login = login;
  }

  public void setMdp(String mdp) {
    this.mdp = mdp;
  }

  public String getPrenom() {
        return prenom;
    }

    public String getEmail() {
        return email;
    }

    public String getLogin() {
        return login;
    }

    public String getMdp() {
        return mdp;
    }


}
