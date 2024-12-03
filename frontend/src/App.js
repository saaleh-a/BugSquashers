import React, { useState } from 'react';
import UserPage from './pages/UserPage';
import RewardsPage from './pages/RewardsPage';
import BankDetails from './components/BankDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('user'); // State to track current page

  const renderPage = () => {
    switch (currentPage) {
      case 'user':
        return <UserPage />;
      case 'bank-details':
        return <BankDetails />;
      case 'rewards':
        return <RewardsPage />;
      default:
        return <UserPage />;
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          <a className="navbar-brand" href="#">Lloyds Rewards</a>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-light"
                  onClick={() => setCurrentPage('user')}
                >
                  User Info
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-light"
                  onClick={() => setCurrentPage('bank-details')}
                >
                  Bank Details
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-light"
                  onClick={() => setCurrentPage('rewards')}
                >
                  Rewards
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container my-4">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
