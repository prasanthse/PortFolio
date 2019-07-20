package com.Backend.Portfolio.Repository;

import com.Backend.Portfolio.Model.Test;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends CrudRepository<Test, String> {
}
