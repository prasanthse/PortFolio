package com.Backend.Portfolio.Repository;

import com.Backend.Portfolio.Model.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends CrudRepository<Contact, String> {

    public List<Contact> findAll();
}
