package com.example.Api.service;

import com.example.Api.entity.User;

import java.util.Optional;

public interface UserService
{
    User login(String email, String password);

    Optional<User> findUser(Long userId);
}
