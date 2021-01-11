package com.example.Api.service;

import com.example.Api.entity.Article;
import com.example.Api.entity.Comment;
import com.example.Api.entity.User;

import java.util.Optional;

public interface CommentService
{
    String addComment(User user,Article article, String comments);
    String deleteComment(Comment comment);
    Optional<Comment> findComment(Long commentId);
}
