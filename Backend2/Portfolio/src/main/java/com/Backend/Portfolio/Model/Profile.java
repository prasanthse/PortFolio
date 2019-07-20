package com.Backend.Portfolio.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Profile")
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

    public void setId(String id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSubcontent() {
        return subcontent;
    }

    public void setSubcontent(String subcontent) {
        this.subcontent = subcontent;
    }

    @Override
    public String toString() {
        return "Profile{" +
                "id='" + id + '\'' +
                ", content='" + content + '\'' +
                ", subcontent='" + subcontent + '\'' +
                '}';
    }
}
