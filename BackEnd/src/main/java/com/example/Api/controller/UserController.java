package com.example.Api.controller;


import com.example.Api.dto.UserDto;
import com.example.Api.entity.Article;
import com.example.Api.entity.User;
import com.example.Api.repository.UserRepository;
import com.example.Api.service.ArticleService;
import com.example.Api.service.CommentService;
import com.example.Api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("api/users")
public class UserController
{
    @Autowired
    private UserService userService;

    @Autowired
    private ArticleService articleService;

    @Autowired
    private CommentService commentService;
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto)
    {
        User user1=userService.login(userDto.getEmail(),userDto.getPassword());
        if(Objects.nonNull(user1))
        {
            return ResponseEntity.ok(user1.getId());
        }
        else
        {
            return ResponseEntity.ok("Fail");
        }
    }

}
