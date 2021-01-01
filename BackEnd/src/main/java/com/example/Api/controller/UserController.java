package com.example.Api.controller;

import com.example.Api.dto.UserDto;
import com.example.Api.entity.User;
import com.example.Api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequestMapping("api/users")
public class UserController
{
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody UserDto userDto)
    {
        User user1=userService.login(userDto.getEmail(),userDto.getPassword());
        System.out.println(user1);
        if(Objects.nonNull(user1))
        {
            return "Login";
        }
        else
        {
            return "Fale";
        }
    }



}
