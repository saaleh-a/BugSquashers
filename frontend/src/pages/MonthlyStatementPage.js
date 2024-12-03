import React from 'react';

function MonthlyStatementPage() {
  // Example statement data
  const statements = [
    { date: '2024-12-01', reward: 'Cashback Offer', value: 10, points: 50 },
    { date: '2024-11-25', reward: 'Dining Discount', value: 15, points: 75 },
    { date: '2024-11-15', reward: 'Travel Rewards', value: 20, points: 100 },
  ];

  return (
    <div>
      <h3 className="text-primary mb-4">Monthly Reward Statement</h3>
      {statements.length > 0 ? (
        <table className="table table-striped shadow-sm">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Reward</th>
              <th>Value (£)</th>
              <th>Points Used</th>
            </tr>
          </thead>
          <tbody>
            {statements.map((statement, index) => (
              <tr key={index}>
                <td>{statement.date}</td>
                <td>{statement.reward}</td>
                <td>{statement.value}</td>
                <td>{statement.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-muted">No rewards redeemed this month.</p>
      )}
    </div>
  );
}

export default MonthlyStatementPage;
