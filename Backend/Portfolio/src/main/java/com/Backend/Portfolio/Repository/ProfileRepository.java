package com.Backend.Portfolio.Repository;

import com.Backend.Portfolio.Model.Profile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepository extends CrudRepository<Profile, String> {

    List<Profile> findAll();
}
