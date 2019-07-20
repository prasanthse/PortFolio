package com.Backend.Portfolio.Controller;

import NeedClasses.RandomIdGenerator;
import com.Backend.Portfolio.Model.Contact;
import com.Backend.Portfolio.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("Contacts")
@CrossOrigin("http://localhost:4200")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/sendContactInfo")
    public boolean contactAdmin(@RequestBody Contact contact){

        RandomIdGenerator randomIdGenerator = new RandomIdGenerator();
        contact.setId(randomIdGenerator.generateId());

        System.out.println(contact.toString());

        try{
            this.contactRepository.save(contact);
            System.out.println("Successfully uploaded the contact us details to the db");
            return true;
        }catch (Exception ex){
            System.out.println("Unable to upload the contact us details to the db");
            return false;
        }
    }
}
