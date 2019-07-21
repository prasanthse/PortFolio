package com.Backend.Portfolio.Controller;

import com.Backend.Portfolio.Repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("ProfileHeader")
@CrossOrigin("http://localhost:4200")
public class ProfileController {

    @Autowired
    private ProjectRepository projectRepository;
}
