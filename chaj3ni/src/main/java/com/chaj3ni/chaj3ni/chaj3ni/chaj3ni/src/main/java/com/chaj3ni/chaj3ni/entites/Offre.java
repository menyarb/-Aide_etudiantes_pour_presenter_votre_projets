package com.chaj3ni.chaj3ni.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idOffre;
    private String image;
    private String titre;
    private  String description;
    private String type;
    private String categorie;

   // @Column(name="image",columnDefinition = "TEXT")




    @ManyToOne
    private User condidat;

    @ManyToOne
    @JoinColumn(name="idClient", nullable=false)
    private Client Clients;

    @ManyToOne
    private Categorie categories;

    public Offre() {
    }

    public User getCondidat() {
        return condidat;
    }

    public void setCondidat(User condidat) {
        this.condidat = condidat;
    }

    public Client getClients() {
        return Clients;
    }

    public void setClients(Client clients) {
        Clients = clients;
    }

    public Categorie getCategories() {
        return categories;
    }

    public void setCategories(Categorie categories) {
        this.categories = categories;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public void setIdOffre(long idOffre) {
        this.idOffre = idOffre;
    }





    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public long getIdOffre() {
        return idOffre;
    }

    public String getTitre() {
        return titre;
    }

    public String getDescription() {
        return description;
    }

    public String getType() {
        return type;
    }

    public String getCategorie() {
        return categorie;
    }
}
