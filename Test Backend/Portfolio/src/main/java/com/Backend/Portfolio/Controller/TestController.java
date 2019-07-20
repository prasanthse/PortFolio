package com.Backend.Portfolio.Controller;

import NeedClasses.RandomIdGenerator;
import com.Backend.Portfolio.Model.Test;
import com.Backend.Portfolio.Repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("test")
@CrossOrigin("http://localhost:4200")
public class TestController {

    @Autowired
    private TestRepository testRepository;

    @PostMapping("/sendInfo")
    public boolean insertContact(@RequestBody Test testInfo){

        RandomIdGenerator randomIdGenerator = new RandomIdGenerator();
        testInfo.setId(randomIdGenerator.generateId());

        System.out.println(testInfo.toString());

        try{
            this.testRepository.save(testInfo);
            System.out.println("Successfully uploaded the contact us details to the db");
            return true;
        }catch (Exception ex){
            System.out.println("Unable to upload the contact us details to the db");
            return false;
        }
    }
}
