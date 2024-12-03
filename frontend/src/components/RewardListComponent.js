import React from 'react';
import RewardComponent from './RewardComponent';
const RewardListComponent = ({ rewards }) => {
  return (
    <div className="row">
      {rewards.map((reward) => (
        <RewardComponent key={reward.id} reward={reward} />
      ))}
    </div>
  );
};

export default RewardListComponent;
