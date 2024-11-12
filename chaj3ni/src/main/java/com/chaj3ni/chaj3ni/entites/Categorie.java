package com.chaj3ni.chaj3ni.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.List;

@Entity
public class Categorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idCategorie;
    private String nom;
    private String img_categorie;
    @JsonIgnore
    @OneToMany(mappedBy = "categorie")
    private List<Offre> Offres;
//condidat
    @ManyToOne
    private Categorie condidatcategorie;

    public Categorie() {
    }

    public void setIdCategorie(long idCategorie) {
        this.idCategorie = idCategorie;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setImg_categorie(String img_categorie) {
        this.img_categorie = img_categorie;
    }



    public String getImg_categorie() {
        return img_categorie;
    }

    public String getNom() {return nom;}

    public long getIdCategorie() {
        return idCategorie;
    }
}
