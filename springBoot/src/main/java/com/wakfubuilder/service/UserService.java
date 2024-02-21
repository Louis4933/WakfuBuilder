package com.wakfubuilder.service;

import org.springframework.stereotype.Service;
import com.wakfubuilder.model.User;
import com.wakfubuilder.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(String username, String password) {
        if (userRepository.findByUsername(username) != null) {
            return null;
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        User userSave = userRepository.save(user);

        return userSave;
    }

    public User getUserLogin(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return null;
        }else if (user.getPassword().equals(password)) {
            return user;
        }
        return user;
    }

}