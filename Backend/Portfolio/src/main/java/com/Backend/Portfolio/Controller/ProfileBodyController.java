package com.Backend.Portfolio.Controller;

import NeedClasses.RandomIdGenerator;
import com.Backend.Portfolio.Model.ProfileBody;
import com.Backend.Portfolio.Repository.ProfileBodyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ProfileBody")
@CrossOrigin("http://localhost:4200")
public class ProfileBodyController {

    @Autowired
    private ProfileBodyRepository profileBodyRepository;

    @PostMapping("/upload")
    public boolean contactAdmin(@RequestBody ProfileBody profileBody){

        RandomIdGenerator randomIdGenerator = new RandomIdGenerator();
        profileBody.setId(randomIdGenerator.generateId());

        System.out.println(profileBody.toString());

        try{
            this.profileBodyRepository.save(profileBody);
            System.out.println("Successfully uploaded the profile information us details to the db");
            return true;
        }catch (Exception ex){
            System.out.println("Unable to upload the profile information details to the db");
            System.out.println("Error: " + ex);
            return false;
        }
    }

    @GetMapping("/getAll")
    public List<ProfileBody> getAllContacts(){
        try {
            List<ProfileBody> profileBodies = this.profileBodyRepository.findAll();
            System.out.println("Successfully retrieve all the profile information");
            return  profileBodies;
        }catch (Exception ex){
            System.out.println("Unable to retrieve the profile information");
            System.out.println("Error: " + ex);
            return null;
        }
    }

    @GetMapping("/getTypeInfo/{type}")
    public List<ProfileBody> getInfoByType(@PathVariable("type") String type){
        try{
            List<ProfileBody> profileBodies = this.profileBodyRepository.findAllByTypeEquals(type);
            System.out.println("Successfully retrieve the profile type information");
            return  profileBodies;
        }catch (Exception ex){
            System.out.println("Unable to retrieve the profile type information");
            System.out.println("Error: " + ex);
            return null;
        }
    }

    @DeleteMapping("/deleteAll")
    public boolean deleteAllContact(){
        try {
            this.profileBodyRepository.deleteAll();
            System.out.println("Successfully deleted all the profile information");
            return  true;
        }catch (Exception ex){
            System.out.println("Unable to deleted all the profile information");
            System.out.println("Error: " + ex);
            return  false;
        }
    }

    @DeleteMapping("/deleteId/{id}")
    public boolean deleteById(@PathVariable("id") String id){
        try{
            this.profileBodyRepository.deleteById(id);
            System.out.println("Successfully deleted the profile information");
            return  true;
        }catch (Exception ex){
            System.out.println("Unable to delete the selected profile information in the db");
            System.out.println("Error: " + ex);
            return false;
        }
    }
}
