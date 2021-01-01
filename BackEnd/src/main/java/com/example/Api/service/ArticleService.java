package com.example.Api.service;

import com.example.Api.dto.ArticleDto;
import com.example.Api.dto.UserDto;
import com.example.Api.entity.Article;

public interface ArticleService
{
    String addArticle(ArticleDto articleDto);
}
