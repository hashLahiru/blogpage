package com.example.Api.service;

import com.example.Api.dto.UserDto;
import com.example.Api.entity.User;

public interface UserService
{
    User login(String email, String password);

    User findId(String email, String password);
}
