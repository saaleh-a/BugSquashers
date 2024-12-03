package controllers;

import models.Reward;
import services.RewardService;

@RestController
@RequestMapping("rewards")
public class RewardController {
    @Autowired
    RewardService rewardService;

    @GetMapping(value = "/reward/{rewardId}")
    public ResponseEntity<Reward> getRewardById(Long rewardId){
        Reward reward = rewardService.getReward(rewardId);
        return new ResponseEntity<>(reward, HttpStatus.OK)
    }

    @GetMapping(value = "/reward")
    public ResponseEntity<List<Reward>> getAllRewards(){
        List<Reward> rewards = rewardService.getAllRewards();
        return new ResponseEntity<>(rewards, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Reward> addPointsToUserProfile(int points,  ){
        User user = userService.addPoints(points);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

}
