package com.prasanth.portfolio.Sections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Project")
public class Project {

    @Id
    private String id;

    private String dp;
    private String title;
    private String brief;
    private String[] gallery;
    private String category;
    private String type;

    @Indexed(direction = IndexDirection.DESCENDING)
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
}
