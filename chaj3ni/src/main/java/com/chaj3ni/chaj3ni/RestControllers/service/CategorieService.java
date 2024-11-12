package com.chaj3ni.chaj3ni.RestControllers.service;


import com.chaj3ni.chaj3ni.entites.Categorie;

import java.util.List;

public interface CategorieService {
    Categorie ajouterCategorie (Categorie categorie);
    Categorie modifierCategorie (Categorie categorie);
    Categorie getCategorieById(Long idCategorie);
    void supprimerCategorie (Categorie categorie);
    void suppeimerCategoriebyId (Long idCategorie);
    List<Categorie> listCategories();
}
