package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Categorie;
import com.chaj3ni.chaj3ni.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CategorieServiceImpl implements CategorieService {
    @Autowired
    CategorieRepository categorieRepository;
    @Override
    public Categorie ajouterCategorie(Categorie categorie) {

        return categorieRepository.save(categorie);
    }

    @Override
    public Categorie modifierCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }
    @Override
    public Categorie getCategorieById(Long idCategorie) {
        return categorieRepository.findById(idCategorie).get();
    }

    @Override
    public void supprimerCategorie(Categorie categorie) {
        categorieRepository.delete(categorie);
    }

    @Override
    public void suppeimerCategoriebyId(Long idCategorie) {
        categorieRepository.deleteById(idCategorie);
    }

    @Override
    public List<Categorie> listCategories() {
        return categorieRepository.findAll();
    }
}
