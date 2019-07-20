package com.prasanth.portfolio.Controllers;

import com.prasanth.portfolio.Repositories.ContactRepository;
import com.prasanth.portfolio.Sections.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Contacts/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/getAll")
    public List<Contact> getAllContacts(){
        List<Contact> contacts = this.contactRepository.findAll();
        return contacts;
    }

    @PostMapping("/send")
    public boolean insertContact(@RequestBody Contact contact){
        try{
            this.contactRepository.save(contact);
            System.out.println("Successfully uploaded the contact us details to the db");
            return true;
        }catch (Exception ex){
            System.out.println("Unable to upload the contact us details to the db");
            return false;
        }
    }

    @DeleteMapping("/deleteAll")
    public void deleteAllContacts(){
        try{
            this.contactRepository.deleteAll();
            System.out.println("Successfully deleted all the contacts in the db");
        }catch(Exception ex){
            System.out.println("Unable to delete all the contacts in the db");
        }
    }

    @DeleteMapping("/{id}")
    public boolean deleteSelectedContact(@PathVariable("id") String id){
        try{
            this.contactRepository.deleteById(id);
            System.out.println("Successfully deleted the selected contact in the db");
            return  true;
        }catch (Exception ex){
            System.out.println("Unable to delete the selected contact in the db");
            return false;
        }
    }
}
