package com.example.Api.service;

import com.example.Api.entity.Article;
import com.example.Api.entity.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ArticleService
{
    String addArticle(User user, String title,String description, MultipartFile multipartFile) throws IOException;
    Optional<Article> findArticle(Long articleId);
    String deleteArticle(Article article);
}
