package com.Backend.Portfolio.Repository;

import com.Backend.Portfolio.Model.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends CrudRepository<Project, String> {

    List<Project> findAll();
    List<Project> findAllOrOrderByYear();
}
