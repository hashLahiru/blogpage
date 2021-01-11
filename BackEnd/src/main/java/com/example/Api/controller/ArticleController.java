package com.example.Api.controller;

import com.example.Api.dto.ArticleDto;
import com.example.Api.dto.UserDto;
import com.example.Api.entity.Article;
import com.example.Api.entity.User;
import com.example.Api.repository.ArticleRepository;
import com.example.Api.service.ArticleService;
import com.example.Api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/article")
public class ArticleController
{
    @Autowired
    private ArticleService articleService;

    @Autowired
    private UserService userService;

    @PostMapping("/post")
    public ResponseEntity<?> postArticle(@RequestBody ArticleDto articleDto)
    {

        Optional<User> user= userService.findUser(articleDto.getUserId());
        if(user.isPresent())
        {
            return ResponseEntity.ok(articleService.addArticle(user.get(), articleDto.getTitle(), articleDto.getArticle()));
        }
        else{
            return ResponseEntity.ok("Fail");
        }
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id)
    {
        Optional<Article> article=articleService.findArticle(id);
        if(article.isPresent())
        {
            return ResponseEntity.ok(articleService.deleteArticle(article.get()));
        }
        else{
            return ResponseEntity.ok("Fail");
        }
    }

   /* @GetMapping("/get/{id}")
    public ResponseEntity<?> getArticleById(@PathVariable Long id)
    {
        //Optional<Article> article=articleService.findArticle(id);
        Optional<Article> article=articleService.findArticle(id);
        if (article.isPresent())
        {
            return ResponseEntity.ok(article.get().getId()+" "+article.get().getArticleTitle()+" "+article.get().getArticleBody()+" "+article.get().getLoadDate()+" "+article.get().getUser());
        }
        else
        {
            return ResponseEntity.ok("No articles");
        }
    }*/
}
