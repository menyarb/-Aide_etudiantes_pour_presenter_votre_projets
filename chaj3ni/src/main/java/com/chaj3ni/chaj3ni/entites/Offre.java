package com.chaj3ni.chaj3ni.entites;

import javax.persistence.*;

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
//condidat
   @ManyToOne
    private Offre condidatoffre;

    @ManyToOne
    private Client Clients;

    @ManyToOne
    private Categorie categories;

    public Offre() {
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public void setDescription(String description) {
        this.description = description;
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



    public String getCategorie() {
        return categorie;
    }
}
