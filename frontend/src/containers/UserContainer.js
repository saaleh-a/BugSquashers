import React, { useState, useEffect } from 'react';
import UserComponent from '../components/UserComponent';

function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/user')
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  if (!user) return <p>Loading...</p>;

  return <UserComponent user={user} />;
}

export default UserContainer;
