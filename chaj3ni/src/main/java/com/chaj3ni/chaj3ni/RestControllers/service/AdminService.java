package com.chaj3ni.chaj3ni.RestControllers.service;


import com.chaj3ni.chaj3ni.entites.Admin;

import java.util.List;


public interface AdminService {
 Admin ajouterAdmin (Admin admin);
 Admin modifierAdmin (Admin admin);
 void supprimerAdmin(Admin admin);
 void suppeimerAdminbyId (Long idAdmin);
 Admin getAdminById (Long id);
 List<Admin> listAdmins();
}
