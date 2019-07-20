package com.Backend.Portfolio.Controller;

import NeedClasses.RandomIdGenerator;
import com.Backend.Portfolio.Model.Contact;
import com.Backend.Portfolio.Repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Contacts")
@CrossOrigin("http://localhost:4200")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/sendInfo")
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
            System.out.println("Error: " + ex);
            return false;
        }
    }

    /*@GetMapping("/getAll")
    public List<Contact> getAllContacts(){
        try {
            List<Contact> contacts = this.contactRepository.findAll();
            System.out.println("Successfully retrieve all the contact us details");
            return  contacts;
        }catch (Exception ex){
            System.out.println("Unable to retrieve the contact us details");
            System.out.println("Error: " + ex);
            return null;
        }
    }*/

    @DeleteMapping("/deleteAll")
    public boolean deleteAllContact(){
        try {
            this.contactRepository.deleteAll();
            System.out.println("Successfully deleted all the contacts");
            return  true;
        }catch (Exception ex){
            System.out.println("Unable to deleted all the contacts");
            System.out.println("Error: " + ex);
            return  false;
        }
    }

    @DeleteMapping("/deleteId/{id}")
    public boolean deleteById(@PathVariable("id") String id){
        try{
            this.contactRepository.deleteById(id);
            System.out.println("Successfully deleted the contact");
            return  true;
        }catch (Exception ex){
            System.out.println("Unable to delete the selected contact in the db");
            System.out.println("Error: " + ex);
            return false;
        }
    }
}
