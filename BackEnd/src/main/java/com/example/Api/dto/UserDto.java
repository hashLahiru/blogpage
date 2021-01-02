package com.example.Api.dto;

import java.util.HashSet;
import java.util.Set;

public class UserDto
{
    private String email;
    private String password;
    //private Set<ArticleDto> articleDtos =new HashSet<>();
    //private ArticleDto articleDto;

    public UserDto(String email, String password) {
        this.email = email;
        this.password = password;
    }

/*

    public ArticleDto getArticleDto() {
        return articleDto;
    }

    public void setArticleDto(ArticleDto articleDto) {
        this.articleDto = articleDto;
        articleDto.setUserDto(this);
    }

    public Set<ArticleDto> getArticleDtos() {
        return articleDtos;
    }

    public void setArticleDtos(Set<ArticleDto> articleDtos) {
        this.articleDtos = articleDtos;

        for (ArticleDto a:articleDtos)
        {
            a.setUserDto(this);
        }
    }*/

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
