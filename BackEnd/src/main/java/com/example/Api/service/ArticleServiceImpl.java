package com.example.Api.service;

import com.example.Api.controller.UserController;
import com.example.Api.dto.ArticleDto;
import com.example.Api.dto.UserDto;
import com.example.Api.entity.Article;
import com.example.Api.entity.User;
import com.example.Api.repository.ArticleRepository;
import com.example.Api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
@Transactional
public class ArticleServiceImpl implements ArticleService
{

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserService userService;
    @Override
    public String addArticle(User user, String articleTitle, String articleBody)
    {
            Article a=new Article();
            a.setArticleTitle(articleTitle);
            a.setArticleBody(articleBody);

            a.setUser(user);
            articleRepository.save(a);
            return "Posted";
    }

}
