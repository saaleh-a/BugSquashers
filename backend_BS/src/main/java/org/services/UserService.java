package services;

import models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.UserRepository;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    repositories.RewardRepository rewardRepository;

    public User getUserById(Long userId){
        User user = userRepository.findById(userId);
        return user;
    }
    public void addRewardToUser(Long rewardId, Long userId){
        models.Reward reward = rewardRepository.findById(rewardId);
        User user = userRepository.findById(userId);
        List<models.Reward> allRewards = user.getListOfRewards();
        allRewards.add(reward);
        userRepository.save(user);
    }
    public int addPointsToUser(Long rewardId, Long userId) {
       models.Reward reward = rewardRepository.findById(rewardId);
       User user = userRepository.findById(userId);
       int rewardPoints = reward.getPoints();
       int userPoints = user.getTotalRewardBalance();
       int newPoints = userPoints + rewardPoints;
       user.setTotalRewardBalance(newPoints);
       addRewardToUser(rewardId, userId);
       userRepository.save(user);
       return newPoints;
    }


    public void deleteRewardFromUser(Long rewardId, Long userId){
        Reward reward = rewardRepository.findById(rewardId);
        User user = userRepository.findById(userId);
        List<Reward> allRewards = user.getListOfRewards();
        allRewards.remove(reward);
        user.deletePointsFromUser(rewardId, userId);
        userRepository.save(user);
    }
    public void deletePointsFromUser(Long userId, Long rewardId){
        Reward reward = rewardRepository.findById(rewardId);
        User user = userRepository.findById(userId);
        int rewardPoints = reward.getPoints();
        int userPoints = user.getTotalRewardBalance();
        int newPoints = userPoints - rewardPoints;
        user.setTotalRewardBalance(newPoints);
        userRepository.save(user);
    }


}
