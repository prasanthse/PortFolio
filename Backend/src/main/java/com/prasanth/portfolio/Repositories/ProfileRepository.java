package com.prasanth.portfolio.Repositories;

import com.prasanth.portfolio.Sections.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, String> {
}
