package com.chaj3ni.chaj3ni.RestControllers;

import com.chaj3ni.chaj3ni.entites.Contact;
import com.chaj3ni.chaj3ni.RestControllers.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/contact")
public class ContactRestController {
    //crud
    @Autowired
    ContactService contactService;
    //POST=ajoute
    //put=modifer
    //DELETE=supp
    //GET=affiche
    @RequestMapping(method = RequestMethod.POST)
    public Contact ajouterContact (@RequestBody  Contact  contact){
        return  contactService.ajouterContact(contact);}

    @RequestMapping(method = RequestMethod.PUT)
    public  Contact modifierContact (@RequestBody  Contact  contact){
        return  contactService.modifierContact(contact);}

    @RequestMapping(value ="/{id}",method = RequestMethod.DELETE)
    public void supprimerContact(@PathVariable("id") Long id)
    {
        contactService.suppeimerContactbyId(id);
    }
    @RequestMapping(method = RequestMethod.GET)
    public List< Contact> afficherContact(){
        return  contactService.listcontacts();}
}
