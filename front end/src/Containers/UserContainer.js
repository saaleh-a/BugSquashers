import { useState, useEffect } from "react";
import UserComponent from "../components/UserComponent.js";

const UserContainer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mock user data for now
    setUser({
      id: 1,
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
