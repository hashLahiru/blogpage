package com.example.Api.controller;

import com.example.Api.dto.ArticleDto;
import com.example.Api.dto.UserDto;
import com.example.Api.entity.User;
import com.example.Api.repository.UserRepository;
import com.example.Api.service.ArticleService;
import com.example.Api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @Autowired
    private ArticleService articleService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto)
    {
        User user1=userService.login(userDto.getEmail(),userDto.getPassword());
        if(Objects.nonNull(user1))
        {
            return ResponseEntity.ok("Logged");
        }
        else
        {
            return ResponseEntity.ok("Fail");
        }
    }
    @PostMapping("/post")
    public ResponseEntity<?> postArticle(@RequestBody ArticleDto articleDto)
    {

        User user= userService.findId(articleDto.getEmail(),articleDto.getPassword());
        if(Objects.nonNull(user))
        {
            return ResponseEntity.ok(articleService.addArticle(user, articleDto.getTitle(), articleDto.getArticle()));
        }
        else{
            return ResponseEntity.ok("Fail");
        }
    }



}
