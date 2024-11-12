package com.chaj3ni.chaj3ni.repository;

import com.chaj3ni.chaj3ni.entites.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long > {
}
