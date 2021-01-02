package com.example.Api.repository;

import com.example.Api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
    //User findById(String email, String password);

    User findByEmailAndPassword(String email,String password);
}