package controllers;

import models.Reward;
import services.RewardService;

@RestController
@RequestMapping("rewards")
public class RewardController {
    @Autowired
    RewardService rewardService;

    @GetMapping


    @GetMapping
    public ResponseEntity<List<Reward>> getAllRewards(){
        List<Reward> rewards = rewardService.getAllRewards();
        return new ResponseEntity<>(rewards, HttpStatus.OK);
    }


}
