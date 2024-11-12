package com.chaj3ni.chaj3ni.RestControllers.service;

import com.chaj3ni.chaj3ni.entites.User;
import com.chaj3ni.chaj3ni.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;
    @Override
    public User ajouterUser(User admin) {
        return userRepository.save(admin);
    }

    @Override
    public User authentification(User user) {
       return userRepository.login(user.getLogin(), user.getMdp());
    }

    @Override
    public User modifierUser(User admin) {
        return userRepository.save(admin);
    }

    @Override
    public void supprimerUser(User admin) {
        userRepository.delete(admin);

    }

    @Override
    public void suppeimerUserbyId(Long idAdmin) {
        userRepository.deleteById(idAdmin);
    }

    @Override
    public User getUserById(Long idAdmin) {
        return userRepository.findById(idAdmin).get();
    }

    @Override
    public List<User> listUsers() {
        return userRepository.findAll();
    }
}
