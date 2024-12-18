package services;

import models.Reward;
import repositories.RewardRepository;

import java.util.List;

@Service
public class RewardService {

    @Autowired
    RewardRepository rewardRepository;
    UserRepository userRepository;

    public Reward getReward(Long rewardId){
        Reward reward = rewardRepository.findById(rewardId);
        return reward;
    }
    public List<Reward> getAllRewards(){
        List<Reward> rewards = rewardRepository.findAll();
        return rewards;
    }
    public Reward addPointsForDirectDebit(Long userId){
        User user = userRepository.findById(userId);
        if(user.getDirectDebits >= 2){
            user.setRewardBalance(user.getRewardBalance + 50);
        }
        userRepository.save(user);

    }





}
