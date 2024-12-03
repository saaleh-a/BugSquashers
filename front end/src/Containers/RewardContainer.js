import { useState, useEffect } from "react";
import RewardListComponent from "../components/RewardListComponent";

const RewardContainer = () => {
  const [rewards, setRewards] = useState([]);

  const fetchRewards = async () => {
    try {
      const response = await fetch("http://localhost:8080/rewards");
      if (!response.ok) throw new Error("Failed to fetch rewards data");
      const data = await response.json();
      setRewards(data);
    } catch (error) {
      console.error("Error fetching rewards:", error);
    }
  };
  

  useEffect(() => {
    fetchRewards();
  }, []);

  return (
    <div>
      {rewards.length > 0 ? (
        <RewardListComponent rewards={rewards} />
      ) : (
        <p>Loading rewards...</p>
      )}
    </div>
  );
};

export default RewardContainer;
