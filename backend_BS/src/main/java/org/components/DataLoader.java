package components;
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RewardRepository rewardRepository;


//    DataLoader Information

    public DataLoader(){
    }

    @Override
    public void run(ApplicationArguments args) throws Exception{


//        make 1 user
        User rebootUser = new User(Reboot);
        userRepository.save(rebootUser);

//        create rewards
        Reward sainsburysReward = new Reward("Sainsburys cashback", 100);
        Reward tescoReward = new Reward("Tesco cashback", 100);
        Reward asdaReward = new Reward("Asda cashback", 100);

        Reward retailReward = new Reward("JohnLewis cashback", 150);

        Reward watchedVideoReward = new Reward("Reward for watching educational video", 50);
        Reward stepsReward = new Reward("Reward for being physically active", 50);


        rewardRepository.save(sainsburysReward);
        rewardRepository.save(retailReward);
        rewardRepository.save(tescoReward);
        rewardRepository.save(asdaReward);
        rewardRepository.save(watchedVideoReward);
        rewardRepository.save(stepsReward);
    }

}