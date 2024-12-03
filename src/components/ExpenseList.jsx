import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-all">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Expense History
      </h2>

      {expenses.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center">
          No expenses yet
        </p>
      ) : (
        <ul className="space-y-2">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {expense.name}
              </span>
              <div className="flex space-x-4">
                <span className="text-green-600 dark:text-green-400">
                  ₹{expense.totalAmount}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  Paid by {expense.payer}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
