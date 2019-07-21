package com.Backend.Portfolio.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Profile_Body")
public class ProfileBody {

    @Id
    private String id;

    private String type;
    private String content;
    private String subContent;

    public ProfileBody() {
    }

    public ProfileBody(String type, String content, String subContent) {
        this.type = type;
        this.content = content;
        this.subContent = subContent;
    }

    public ProfileBody(String type, String content) {
        this.type = type;
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSubContent() {
        return subContent;
    }

    public void setSubContent(String subContent) {
        this.subContent = subContent;
    }

    @Override
    public String toString() {
        return "ProfileBody{" +
                "id='" + id + '\'' +
                ", type='" + type + '\'' +
                ", content='" + content + '\'' +
                ", subContent='" + subContent + '\'' +
                '}';
    }
}
