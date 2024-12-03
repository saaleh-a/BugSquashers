import RewardComponent from "./RewardComponent";
import { motion } from "framer-motion";

const RewardListComponent = ({ rewards }) => {
  const rewardList = rewards.map((reward) => (
    <motion.div
      key={reward.id}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <RewardComponent reward={reward} />
    </motion.div>
  ));

  return <div className="reward-list">{rewardList}</div>;
};

export default RewardListComponent;
