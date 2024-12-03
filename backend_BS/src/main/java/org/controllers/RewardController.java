package controllers;

import models.Reward;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import services.RewardService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("rewards")
public class RewardController {
    @Autowired
    RewardService rewardService;

    @Autowired
    services.UserService userService;

    @GetMapping(value = "/reward/{rewardId}")
    public ResponseEntity<Reward> getRewardById(Long rewardId){
        Reward reward = rewardService.getReward(rewardId);
        return new ResponseEntity<>(reward, HttpStatus.OK);
    }

    @GetMapping(value = "/reward")
    public ResponseEntity<List<Reward>> getAllRewards(){
        List<Reward> rewards = rewardService.getAllRewards();
        return new ResponseEntity<>(rewards, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<models.User> addPointsToUserProfile(Long rewardId, Long userId ){
        models.User user = userService.addPointsToUser(rewardId, userId);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

}
