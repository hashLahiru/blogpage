package com.example.Api.controller;

import com.example.Api.dto.CommentDto;
import com.example.Api.entity.Article;
import com.example.Api.entity.Comment;
import com.example.Api.entity.User;
import com.example.Api.service.ArticleService;
import com.example.Api.service.CommentService;
import com.example.Api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("api/comment")
public class CommentController
{
    @Autowired
    private UserService userService;

    @Autowired
    private ArticleService articleService;

    @Autowired
    private CommentService commentService;

    @PostMapping("/post")
    public ResponseEntity<?> postComment(@RequestBody CommentDto commentDto)
    {
        Optional<User> user=userService.findUser(commentDto.getUserId());
        Optional<Article> article=articleService.findArticle(commentDto.getArticleId());
        if(user.isPresent() && article.isPresent())
        {
            return ResponseEntity.ok(commentService.addComment(user.get(),article.get(),commentDto.getComment()));
        }
        else{
            return ResponseEntity.ok("Fail");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id)
    {
        Optional<Comment> comment=commentService.findComment(id);
        if(comment.isPresent())
        {
            return ResponseEntity.ok(commentService.deleteComment(comment.get()));
        }
        else{
            return ResponseEntity.ok("Fail");
        }
    }
}
