import React from 'react';

function BankDetails() {
  const bankDetails = {
    balance: 1500.75,
    directDebits: ['Netflix', 'Spotify', 'Gym Membership'],
    points: 320,
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h3 className="card-title text-primary">Bank Details</h3>
        <p className="card-text"><strong>Balance:</strong> £{bankDetails.balance}</p>
        <p className="card-text"><strong>Direct Debits:</strong> {bankDetails.directDebits.join(', ')}</p>
        <p className="card-text"><strong>Points:</strong> {bankDetails.points}</p>
      </div>
    </div>
  );
}

export default BankDetails;
