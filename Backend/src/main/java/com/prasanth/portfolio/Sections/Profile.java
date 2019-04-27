package com.prasanth.portfolio.Sections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Profile")
public class Profile {

    @Id
    private String id;

    private String content;
    private String subcontent;

    public Profile() {
    }

    public Profile(String content, String subcontent) {
        this.content = content;
        this.subcontent = subcontent;
    }

    public String getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public String getSubcontent() {
        return subcontent;
    }
}
