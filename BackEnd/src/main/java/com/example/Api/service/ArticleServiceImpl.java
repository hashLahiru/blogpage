package com.example.Api.service;


import com.example.Api.entity.Article;
import com.example.Api.entity.User;
import com.example.Api.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class ArticleServiceImpl implements ArticleService
{

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private UserService userService;
    private Object Iterable;

    @Override
    public String addArticle(User user, String title,String description, MultipartFile multipartFile) throws IOException {
            Article a=new Article();
            a.setArticleTitle(title);
            a.setDescription(description);
            a.setImage(multipartFile.getBytes());
            a.setUser(user);
            Date date=new Date();
            a.setLoadDate(date);
            articleRepository.save(a);
            return "Posted";
    }

    @Override
    public Optional<Article> findArticle(Long articleId)
    {
        Optional<Article> article=articleRepository.findById(articleId);
        return article;
    }

    @Override
    public String deleteArticle(Article article)
    {
        articleRepository.delete(article);
        return "deleted ";
    }

}
