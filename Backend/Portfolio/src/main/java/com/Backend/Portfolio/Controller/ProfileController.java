package com.Backend.Portfolio.Controller;

import NeedClasses.RandomIdGenerator;
import com.Backend.Portfolio.Model.Profile;
import com.Backend.Portfolio.Repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;
import java.util.List;

@RestController
@RequestMapping("ProfileHeader")
@CrossOrigin("http://localhost:4200")
public class ProfileController {

    public final String directory = System.getProperty("user.dir")+"\\Images\\Dp\\";

    @Autowired
    private ProfileRepository profileRepository;

    @PostMapping("/upload")
    public boolean uploadDp(@RequestParam("dp") MultipartFile image){
        if(image == null){
            System.out.println("Null Image File");
            return false;
        } else {
            try {
                byte[] imageBytes = image.getBytes();
                Path path = Paths.get(this.directory + UUID.randomUUID().toString() + ".jpg");
                Files.write(path, imageBytes);

                RandomIdGenerator randomIdGenerator = new RandomIdGenerator();
                Profile profile = new Profile();
                profile.setId(randomIdGenerator.generateId());
                profile.setDp(path.toString());

                this.profileRepository.save(profile);

                System.out.println("Successfully uploaded the profile picture");
                return  true;

            } catch (Exception ex) {
                System.out.println("Unable to upload the profile picture");
                System.out.println("Error: " + ex);
                return false;
            }
        }
    }

    @GetMapping("/getDp")
    public List<Profile> getDp(){
        try {
            List<Profile> profiles = this.profileRepository.findAll();
            System.out.println("Successfully retrieve the profile picture");
            return profiles;
        }catch (Exception ex){
            System.out.println("Unable to get profile picture");
            System.out.println("Error: " + ex);
            return null;
        }
    }

    @DeleteMapping("/delete")
    public boolean removeDp(){
        try {
            this.profileRepository.deleteAll();
            System.out.println("Successfully deleted the profile picture");
            return true;
        }catch (Exception ex){
            System.out.println("Unable to delete profile picture");
            System.out.println("Error: " + ex);
            return false;
        }
    }

    @PostMapping("/update")
    public List<Profile> updateDp(@RequestParam("dp") MultipartFile image){
        try{
            if(removeDp()){
                uploadDp(image);
                return getDp();
            }else{
                System.out.println("Unable to delete profile picture for update in deleting previous image");
                return null;
            }
        }catch (Exception ex){
            System.out.println("Unable to delete profile picture for update");
            System.out.println("Error: " + ex);
            return null;
        }
    }
}
