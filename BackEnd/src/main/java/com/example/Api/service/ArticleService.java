package com.example.Api.service;

import com.example.Api.entity.Article;
import com.example.Api.entity.User;

import java.util.List;
import java.util.Optional;

public interface ArticleService
{
    String addArticle(User user, String articleTitle, String articleBody);
    Optional<Article> findArticle(Long articleId);
    String deleteArticle(Article article);
}
