package com.example.Api.service;

import com.example.Api.entity.Article;
import com.example.Api.entity.Comment;
import com.example.Api.entity.User;
import com.example.Api.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Optional;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Override
    public String addComment(User user,Article article, String comments)
    {
        Comment comment=new Comment();
        comment.setComments(comments);
        Date date=new Date();
        comment.setLoadDate(date);
        comment.setUser(user);
        comment.setArticle(article);
        commentRepository.save(comment);

        return "post";
    }

    @Override
    public Optional<Comment> findComment(Long commentId) {
        Optional<Comment> comment=commentRepository.findById(commentId);
        return comment;
    }

    @Override
    public String deleteComment(Comment comment)
    {
        commentRepository.delete(comment);
        return "deleted";
    }
}
