import React from 'react';

function UserPage() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-primary">User Info</h3>
        <p className="card-text"><strong>Name:</strong> John Doe</p>
        <p className="card-text"><strong>Email:</strong> john.doe@example.com</p>
      </div>
    </div>
  );
}

export default UserPage;
