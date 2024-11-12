package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Condidat;


import java.util.List;

public interface CondidatService {
    Condidat ajouterCondidat(Condidat condidat);
    Condidat modifierCondidat(Condidat condidat);
    void supprimerCondidat(Condidat condidat);
    void suppeimerCondidatbyId(Long idCondidat);
    Condidat getCondidatById(Long idCondidat);
    List<Condidat> listcondidats();
}
