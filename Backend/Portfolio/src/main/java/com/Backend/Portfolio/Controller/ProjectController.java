package com.Backend.Portfolio.Controller;

import NeedClasses.RandomIdGenerator;
import com.Backend.Portfolio.Model.Project;
import com.Backend.Portfolio.Repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Projects")
@CrossOrigin("http://localhost:4200")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping("/upload")
    public boolean uploadInfo(@RequestBody Project project){

        RandomIdGenerator randomIdGenerator = new RandomIdGenerator();
        project.setId(randomIdGenerator.generateId());

        try {
            this.projectRepository.save(project);
            System.out.println("Project successfully uploaded");
            return  true;
        }catch (Exception ex){
            System.out.println("Project upload failed");
            System.out.println("Error: " + ex);
            return  false;
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
            List<Project> projects = this.projectRepository.findAll();
            System.out.println("Successfully retrieved all the projects");
            return  projects;
        }catch (Exception ex){
            System.out.println("Unable to retrieve projects in the db");
            System.out.println("Error: " + ex);
            return  null;
        }
    }
}
