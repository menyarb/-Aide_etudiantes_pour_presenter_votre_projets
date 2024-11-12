package com.chaj3ni.chaj3ni.RestControllers.service;
import com.chaj3ni.chaj3ni.entites.Categorie;
import com.chaj3ni.chaj3ni.entites.Offre;

import java.util.List;

public interface OfferService {

    Offre ajouterOffer (Offre offre);
    Offre modifierOffer (Offre offre);
    Offre getOffreById(Long id);
    void supprimerOffer (Offre offre);
   void suppeimerOffrebyId(Long idOffre);

    List<Offre> listoffres();


}
