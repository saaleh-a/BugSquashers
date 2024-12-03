package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.annotation.Target;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    services.UserService userService;

    @GetMapping(value = "/user/{userId}")
    public ResponseEntity<models.User> getUser(Long userId){
        models.User user = userService.getUserById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

//    @PostMapping
//    public ResponseEntity<User> addPointsToUser()
//
//
//    @
}
