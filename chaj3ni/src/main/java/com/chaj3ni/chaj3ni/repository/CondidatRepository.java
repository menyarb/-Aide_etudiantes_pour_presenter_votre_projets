package com.chaj3ni.chaj3ni.repository;

import com.chaj3ni.chaj3ni.entites.Client;
import com.chaj3ni.chaj3ni.entites.Condidat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CondidatRepository extends JpaRepository<Condidat, Long > {
    Condidat findByEmail(String email) ;
    Condidat findByMdp(String mdp);
}
