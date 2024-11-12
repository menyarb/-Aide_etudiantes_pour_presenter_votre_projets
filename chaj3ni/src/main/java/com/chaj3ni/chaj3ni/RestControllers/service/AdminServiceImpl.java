package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.Admin;
import com.chaj3ni.chaj3ni.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    AdminRepository adminRepository;
    @Override
    public Admin ajouterAdmin(Admin admin) {
        return adminRepository.save(admin);
    }


    @Override
    public Admin modifierAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public void supprimerAdmin(Admin admin) {
        adminRepository.delete(admin);

    }

    @Override
    public void suppeimerAdminbyId(Long idAdmin) {
        adminRepository.deleteById(idAdmin);
    }

    @Override
    public Admin getAdminById(Long id) {
        return adminRepository.findById(id).get();
    }

    @Override
    public List<Admin> listAdmins() {
        return adminRepository.findAll();
    }
}
