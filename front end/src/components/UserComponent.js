const UserComponent = ({ user }) => {
    return (
      <div className="user-profile">
        <h2>Welcome, {user.name}!</h2>
        <p>Email: {user.email}</p>
      </div>
    );
  };
  
  export default UserComponent;
  