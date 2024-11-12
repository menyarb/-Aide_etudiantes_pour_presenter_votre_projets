package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Client;

import java.util.List;

public interface ClientService {
    Client ajouterClient (Client client);
    Client modifierClient (Client client);
    void supprimerClient (Client client);
    void suppeimerClientbyId (Long idClient);
    List<Client> listclients();

    Client getClientById(Long idClient);
}
