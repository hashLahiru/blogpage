package com.example.Api.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "article")
public class Article
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "articleId")
    private Long id;

    @Column(name = "articleTitle")
    private String articleTitle;

    @Column(name = "article")
    private String articleBody;
/*
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private User user;
*/
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public String getArticleBody() {
        return articleBody;
    }

    public void setArticleBody(String articleBody) {
        this.articleBody = articleBody;
    }
/*
 public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }*/
}
