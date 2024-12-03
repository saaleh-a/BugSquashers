import React from 'react';

function RewardsPage() {
  // User's total points
  const userPoints = 320;

  // List of rewards
  const rewards = [
    { id: 1, name: 'Cashback Offer', description: 'Earn 5% cashback on groceries.', value: 10 },
    { id: 2, name: 'Travel Rewards', description: 'Get £20 off flights.', value: 20 },
    { id: 3, name: 'Dining Discount', description: 'Save 10% at partner restaurants.', value: 15 },
    { id: 4, name: 'Luxury Hotel Stay', description: 'Get a free night at a luxury hotel.', value: 500 },
    { id: 5, name: 'Gadget Discount', description: 'Save £100 on select gadgets.', value: 300 },
  ];

  // Separate rewards into available and unavailable
  const availableRewards = rewards.filter((reward) => reward.value <= userPoints);
  const unavailableRewards = rewards.filter((reward) => reward.value > userPoints);

  return (
    <div>
      <div className="text-center mb-4">
        <h3 className="text-success">Your Points: {userPoints}</h3>
      </div>

      <div>
        {/* Available Rewards */}
        <h4 className="text-primary">Available Rewards</h4>
        {availableRewards.length > 0 ? (
          <div className="row">
            {availableRewards.map((reward) => (
              <div key={reward.id} className="col-md-4 mb-4">
                <div className="card shadow-sm border-success">
                  <div className="card-body">
                    <h5 className="card-title text-success">{reward.name}</h5>
                    <p className="card-text">{reward.description}</p>
                    <p className="card-text"><strong>Points Required:</strong> {reward.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">No rewards available with your current points.</p>
        )}
      </div>

      <hr />

      {/* Unavailable Rewards */}
      <div>
        <h4 className="text-danger">Unavailable Rewards</h4>
        {unavailableRewards.length > 0 ? (
          <div className="row">
            {unavailableRewards.map((reward) => (
              <div key={reward.id} className="col-md-4 mb-4">
                <div className="card shadow-sm border-danger">
                  <div className="card-body">
                    <h5 className="card-title text-danger">{reward.name}</h5>
                    <p className="card-text">{reward.description}</p>
                    <p className="card-text"><strong>Points Required:</strong> {reward.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">All rewards are available to you!</p>
        )}
      </div>
    </div>
  );
}

export default RewardsPage;
