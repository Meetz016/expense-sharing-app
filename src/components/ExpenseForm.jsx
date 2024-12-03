import React, { useState } from 'react';

const ExpenseForm = ({ members, onAddExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [payer, setPayer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!expenseName || !totalAmount || !payer) {
      alert('Please fill all fields');
      return;
    }

    onAddExpense({
      name: expenseName,
      totalAmount: parseFloat(totalAmount),
      payer,
    });

    // Reset form
    setExpenseName('');
    setTotalAmount('');
    setPayer('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transform transition-all hover:scale-[1.01]"
    >
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          className="w-full px-4 py-2 border dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
        />

        <input
          type="number"
          placeholder="Total Amount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          className="w-full px-4 py-2 border dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
        />

        <select
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
          className="w-full px-4 py-2 border dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
        >
          <option value="">Select Payer</option>
          {members.map((member) => (
            <option key={member.id} value={member.name}>
              {member.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-indigo-600 dark:bg-indigo-700 text-white py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
