import { useState, useEffect } from "react";
import UserComponent from "../components/UserComponent.js";

const UserContainer = () => {
  const [user, setUser] = useState(null);

  const fetchRewards = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/1");
      if (!response.ok) throw new Error("Failed to fetch user");
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.error("Error fetching rewards:", error);
    }
  };
  useEffect(() => {
    // Mock user data for now
    setUser({
      id: 2,
      name: "Jon Doe",
      email: "john.doe@example.com",
    });
  }, []);

  return (
    <div>
      {user ? <UserComponent user={user} /> : <p>Loading user...</p>}
    </div>
  );
};

export default UserContainer;
