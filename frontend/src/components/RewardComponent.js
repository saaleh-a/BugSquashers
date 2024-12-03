import React from 'react';

function RewardsPage() {
  const rewards = [
    { id: 1, name: 'Cashback Offer', description: 'Earn 5% cashback on groceries.', value: 10 },
    { id: 2, name: 'Travel Rewards', description: 'Get £20 off flights.', value: 20 },
    { id: 3, name: 'Dining Discount', description: 'Save 10% at partner restaurants.', value: 15 },
  ];

  return (
    <div>
      <h3 className="text-success mb-4">Rewards</h3>
      <div className="row">
        {rewards.map((reward) => (
          <div key={reward.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">{reward.name}</h5>
                <p className="card-text">{reward.description}</p>
                <p className="card-text"><strong>Value:</strong> £{reward.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RewardsPage;
