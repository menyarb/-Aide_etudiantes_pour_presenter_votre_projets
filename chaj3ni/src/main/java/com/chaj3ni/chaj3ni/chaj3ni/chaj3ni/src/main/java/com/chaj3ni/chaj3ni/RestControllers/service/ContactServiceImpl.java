package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Contact;

import com.chaj3ni.chaj3ni.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ContactServiceImpl implements ContactService{
    @Autowired
    ContactRepository contactRepository;
    @Override
    public Contact ajouterContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public Contact modifierContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public void supprimerContact(Contact contact) {
        contactRepository.delete(contact);
    }

    @Override
    public void suppeimerContactbyId(Long idContact) {
        contactRepository.deleteById(idContact);
    }

    @Override
    public List<Contact> listcontacts() {
        return contactRepository.findAll();
    }
}
