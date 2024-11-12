package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Offre;
import com.chaj3ni.chaj3ni.repository.OffreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OfferServiceImpl implements OfferService{
    @Autowired
    OffreRepository offreRepository;

    @Override
    public Offre ajouterOffer(Offre offre) {
        return offreRepository.save(offre);
    }

    @Override
    public Offre modifierOffer(Offre offre) {
        return offreRepository.save(offre);
    }
    @Override
    public Offre getOffreById(Long idOffre) {
        return offreRepository.findById(idOffre).get();
    }
    @Override
    public void supprimerOffer(Offre offre) {
        offreRepository.delete(offre);
    }

    @Override
    public void suppeimerOffrebyId(Long idOffre) {
        offreRepository.deleteById(idOffre);
    }

    @Override
    public List<Offre> listoffres() {
        return offreRepository.findAll();
    }
}
