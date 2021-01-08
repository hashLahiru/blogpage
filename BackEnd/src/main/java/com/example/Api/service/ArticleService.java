package com.example.Api.service;

import com.example.Api.dto.ArticleDto;
import com.example.Api.dto.UserDto;
import com.example.Api.entity.Article;
import com.example.Api.entity.User;

import java.util.Set;

public interface ArticleService
{

    String addArticle(User user, String articleTitle, String articleBody);
}
