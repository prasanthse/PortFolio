package com.Backend.Portfolio.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document("Projects")
public class Project {

    @Id
    private String id;

    private String dp;
    private String title;
    private String brief;
    private String[] gallery;
    private String category;
    private String type;

    //@Indexed(direction = IndexDirection.DESCENDING)
    private int year;

    private String technologies;
    private String explain;

    public Project() {
    }

    public Project(String dp, String title, String brief, String[] gallery, String category, String type, int year, String technologies, String explain) {
        this.dp = dp;
        this.title = title;
        this.brief = brief;
        this.gallery = gallery;
        this.category = category;
        this.type = type;
        this.year = year;
        this.technologies = technologies;
        this.explain = explain;
    }

    public String getId() {
        return id;
    }

    public String getDp() {
        return dp;
    }

    public String getTitle() {
        return title;
    }

    public String getBrief() {
        return brief;
    }

    public String[] getGallery() {
        return gallery;
    }

    public String getCategory() {
        return category;
    }

    public String getType() {
        return type;
    }

    public int getYear() {
        return year;
    }

    public String getTechnologies() {
        return technologies;
    }

    public String getExplain() {
        return explain;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setDp(String dp) {
        this.dp = dp;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setBrief(String brief) {
        this.brief = brief;
    }

    public void setGallery(String[] gallery) {
        this.gallery = gallery;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    public void setExplain(String explain) {
        this.explain = explain;
    }

    @Override
    public String toString() {
        return "Project{" +
                "id='" + id + '\'' +
                ", dp='" + dp + '\'' +
                ", title='" + title + '\'' +
                ", brief='" + brief + '\'' +
                ", gallery=" + (gallery == null ? null : Arrays.asList(gallery)) +
                ", category='" + category + '\'' +
                ", type='" + type + '\'' +
                ", year=" + year +
                ", technologies='" + technologies + '\'' +
                ", explain='" + explain + '\'' +
                '}';
    }
}
