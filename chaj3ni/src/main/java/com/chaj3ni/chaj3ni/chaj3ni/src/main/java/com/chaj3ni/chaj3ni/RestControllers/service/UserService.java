package com.chaj3ni.chaj3ni.RestControllers.service;


import com.chaj3ni.chaj3ni.entites.User;

import java.util.List;


public interface UserService  {
 User ajouterUser (User user);
 User authentification (User user);
 User modifierUser (User user);

 void supprimerUser(User user);
 void suppeimerUserbyId (Long idAdmin);
 User getUserById (Long id);
 List<User> listUsers();
}
