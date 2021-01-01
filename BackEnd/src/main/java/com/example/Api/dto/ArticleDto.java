package com.example.Api.dto;

public class ArticleDto
{
    private String title;
    private String article;
    public ArticleDto(String title, String article)
    {
        this.title = title;
        this.article = article;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
    }

}
