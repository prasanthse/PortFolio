package com.Backend.Portfolio.Controller;

import NeedClasses.RandomIdGenerator;
import com.Backend.Portfolio.Model.Profile;
import com.Backend.Portfolio.Model.Project;
import com.Backend.Portfolio.Repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("Projects")
@CrossOrigin("http://localhost:4200")
public class ProjectController {

    public final String directory = System.getProperty("user.dir")+"\\Images\\Projects\\";

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping("/upload")
    public boolean uploadInfo(@RequestBody Project project, @RequestParam("gallery") MultipartFile[] galleries){

        try {
            RandomIdGenerator randomIdGenerator = new RandomIdGenerator();
            project.setId(randomIdGenerator.generateId());
        }catch (Exception ex){
            System.out.println("Error: " + ex);
        }

        int index = 0;
        String[] temperoryGalleryPath = new String[5];

        for(MultipartFile image : galleries){
            if(image == null){
                System.out.println("Null Image File");
            } else {
                try {
                    byte[] imageBytes = image.getBytes();
                    Path path = Paths.get(this.directory + UUID.randomUUID().toString() + ".jpg");
                    Files.write(path, imageBytes);

                    temperoryGalleryPath[index++] = path.toString();

                } catch (Exception ex) {
                    System.out.println("Unable to upload the project info");
                    System.out.println("Error: " + ex);
                }
            }
        }

        try {
            project.setGallery(temperoryGalleryPath);
            this.projectRepository.save(project);
            System.out.println("Successfully uploaded the project info");
            return  true;
        }catch (Exception ex){
            System.out.println("Unable to upload the project info");
            System.out.println("Error: " + ex);
            return false;
        }
    }

    @DeleteMapping("/deleteAll")
    public boolean deleteAllProjects(){
        try {
            this.projectRepository.deleteAll();
            System.out.println("All the Projects are deleted");
            return  true;
        }catch (Exception ex){
            System.out.println("Projects deleted failed");
            System.out.println("Error: " + ex);
            return  false;
        }
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteById(@PathVariable("id") String id){
        try{
            this.projectRepository.deleteById(id);
            System.out.println("Successfully deleted the project");
            return  true;
        }catch (Exception ex){
            System.out.println("Unable to delete the selected project in the db");
            System.out.println("Error: " + ex);
            return false;
        }
    }

    @GetMapping("/getAll")
    public List<Project> getAllProjects(){
        try {
            //List<Project> projects = this.projectRepository.findAll();
            List<Project> projects = this.projectRepository.findAllOrOrderByYear();
            System.out.println("Successfully retrieved all the projects");
            return  projects;
        }catch (Exception ex){
            System.out.println("Unable to retrieve projects in the db");
            System.out.println("Error: " + ex);
            return  null;
        }
    }
}
