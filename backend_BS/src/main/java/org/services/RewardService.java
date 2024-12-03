package services;

import models.Reward;
import repositories.RewardRepository;

import java.util.List;

@Service
public class RewardService {

    @Autowired
    RewardRepository rewardRepository;

    public Reward getReward(Long rewardId){
        Reward reward = rewardRepository.findById(rewardId);
        return reward;
    }
    public List<Reward> getAllRewards(){
        List<Reward> rewards = rewardRepository.findAll();
        return rewards;
    }






}
