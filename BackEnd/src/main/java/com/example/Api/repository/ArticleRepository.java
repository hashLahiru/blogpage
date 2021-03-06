package com.example.Api.repository;

import com.example.Api.entity.Article;
import com.example.Api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArticleRepository extends JpaRepository<Article,Long>
{
    Optional<Article> findById(Long articleId);

}
