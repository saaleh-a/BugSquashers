import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

const RewardComponent = ({ reward }) => {
  return (
    <div className="reward">
      <FontAwesomeIcon icon={faGift} size="2x" color="#00a95c" />
      <h3>{reward.name}</h3>
      <p>{reward.description}</p>
      <p>
        <strong>
          <FontAwesomeIcon icon={faMoneyBillWave} /> £{reward.value}
        </strong>
      </p>
    </div>
  );
};

export default RewardComponent;
