package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Condidat;
import com.chaj3ni.chaj3ni.repository.CondidatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CondidatServiceImpl implements CondidatService{
    @Autowired
    CondidatRepository condidatRepository;
    @Override
    public Condidat ajouterCondidat(Condidat condidat) {
        return condidatRepository.save(condidat);
    }

    @Override
    public Condidat modifierCondidat(Condidat condidat) {
        return condidatRepository.save(condidat);
    }

    @Override
    public void supprimerCondidat(Condidat condidat) {
        condidatRepository.delete(condidat);
    }

    @Override
    public void suppeimerCondidatbyId(Long idCondidat) {
        condidatRepository.deleteById(idCondidat);
    }
    @Override
    public List<Condidat> listcondidats() {
        return condidatRepository.findAll();
    }
    @Override
    public Condidat getCondidatById(Long idCondidat) {
        return condidatRepository.findById(idCondidat).get();
    }

}

