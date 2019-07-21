package com.Backend.Portfolio.Repository;

import com.Backend.Portfolio.Model.ProfileBody;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileBodyRepository extends CrudRepository<ProfileBody, String> {

    List<ProfileBody> findAll();
    List<ProfileBody> findAllByTypeEquals(String type);
}
