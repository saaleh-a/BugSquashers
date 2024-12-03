import React from 'react'; // Add this line at the top
const UserComponent = ({ user }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-primary">User Information</h3>
        <p className="card-text"><strong>Name:</strong> {user.name}</p>
        <p className="card-text"><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserComponent;
