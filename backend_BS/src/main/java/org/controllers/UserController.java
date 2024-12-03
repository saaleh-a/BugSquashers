package controllers;

import java.lang.annotation.Target;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping(value = "/user/{userId}")
    public ResponseEntity<User> getUser(Long userId){
        User user = userService.getUserById(Long userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<User> addPointsToUser()


    @
}
