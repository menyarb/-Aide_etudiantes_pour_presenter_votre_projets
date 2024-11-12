package com.chaj3ni.chaj3ni.RestControllers.service;
import com.chaj3ni.chaj3ni.entites.Contact;

import java.util.List;

public interface ContactService {
    Contact ajouterContact (Contact contact);
    Contact modifierContact (Contact contact);
    void supprimerContact (Contact contact);
    void suppeimerContactbyId (Long idContact);
    List<Contact> listcontacts();
}
