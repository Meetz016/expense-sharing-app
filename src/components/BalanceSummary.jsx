import React from 'react';

const BalanceSummary = ({ members }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-all">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Member Balances
      </h2>
      
      {members.map(member => (
        <div
          key={member.id}
          className={`flex justify-between items-center p-3 rounded-md mb-2 transition-all ${
            member.balance > 0
              ? 'bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200'
              : member.balance < 0
              ? 'bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200'
              : 'bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
          }`}
        >
          <span className="font-medium">{member.name}</span>
          <span className="font-bold">
            {member.balance > 0 ? '+' : ''} ₹{member.balance.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BalanceSummary;
