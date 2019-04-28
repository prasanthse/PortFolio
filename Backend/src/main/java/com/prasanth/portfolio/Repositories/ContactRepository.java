package com.prasanth.portfolio.Repositories;

import com.prasanth.portfolio.Sections.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends MongoRepository<Contact, String> {

}
