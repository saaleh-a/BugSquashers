package services;

import models.User;
import repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User getUserById(Long userId){
        User user = userRepository.findById(userId);
        return user;
    }

    //remove a reward from reward list

    //add a reward to the reward list

    public User addReward() {

    }

}
