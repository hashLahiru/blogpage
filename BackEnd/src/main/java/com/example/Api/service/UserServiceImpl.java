package com.example.Api.service;

import com.example.Api.entity.User;
import com.example.Api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService
{
    @Autowired
    private UserRepository userRepository;

    @Override
    public User login(String email, String password) {

        User user=userRepository.findByEmailAndPassword(email, password);
        return user;
    }



    public Optional<User> findUser(Long userId)
    {

        Optional<User> user= userRepository.findById(userId);
        return user;

    }

}
