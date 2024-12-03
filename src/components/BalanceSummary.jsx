import React from 'react';

const BalanceSummary = ({ members }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Member Balances
      </h2>
      
      {members.map(member => (
        <div 
          key={member.id} 
          className={`flex justify-between items-center p-3 rounded-md mb-2 ${
            member.balance > 0 
              ? 'bg-green-50 text-green-800' 
              : member.balance < 0 
                ? 'bg-red-50 text-red-800' 
                : 'bg-gray-50 text-gray-800'
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