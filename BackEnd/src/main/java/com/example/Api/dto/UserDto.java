package com.example.Api.dto;

import java.util.HashSet;
import java.util.Set;

public class UserDto
{
    private String email;
    private String password;


    public UserDto(String email, String password) {
        this.email = email;
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
