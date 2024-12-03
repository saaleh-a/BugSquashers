import React, { useState, useEffect } from 'react';
import RewardListComponent from '../components/RewardListComponent';

function RewardContainer() {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/rewards')
      .then((response) => response.json())
      .then((data) => setRewards(data))
      .catch((error) => console.error('Error fetching rewards:', error));
  }, []);

  return <RewardListComponent rewards={rewards} />;
}

export default RewardContainer;
