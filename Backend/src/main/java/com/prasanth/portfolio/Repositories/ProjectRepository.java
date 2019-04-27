package com.prasanth.portfolio.Repositories;

import com.prasanth.portfolio.Sections.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {
}
