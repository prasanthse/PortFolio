package com.prasanth.portfolio.Sections;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Contacts")
public class Contact {

    @Id
    private String id;

    private String name;
    private String phoneNumber;
    private String email;
    private String message;

    public Contact() {
    }

    public Contact(String name, String phoneNumber, String email, String message) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.message = message;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getMessage() {
        return message;
    }

}
