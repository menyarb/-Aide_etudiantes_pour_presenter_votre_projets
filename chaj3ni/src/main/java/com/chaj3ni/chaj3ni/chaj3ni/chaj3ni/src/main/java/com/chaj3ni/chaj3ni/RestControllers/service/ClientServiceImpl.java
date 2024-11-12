package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Client;

import com.chaj3ni.chaj3ni.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClientServiceImpl implements ClientService{
    @Autowired
    ClientRepository clientRepository;
    @Override
    public Client ajouterClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client modifierClient(Client client) {
        return clientRepository.save(client);
    }
    @Override
    public Client getClientById(Long idClient) {
        return clientRepository.findById(idClient).get();
    }
    @Override
    public void supprimerClient(Client client) {
        clientRepository.delete(client);
    }

    @Override
    public void suppeimerClientbyId(Long idClient) {
        clientRepository.deleteById(idClient);
    }

    @Override
    public List<Client> listclients() {
        return clientRepository.findAll();
    }
}
