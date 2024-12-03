import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BalanceSummary from './components/BalanceSummary';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [members, setMembers] = useState([
    { id: 1, name: 'Meet', balance: 0 },
    { id: 2, name: 'Harsh', balance: 0 },
    { id: 3, name: 'Neet', balance: 0 },
  ]);

  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    const { totalAmount, payer } = expense;
    const splitAmount = totalAmount / members.length;

    const updatedMembers = members.map((member) =>
      member.name === payer
        ? { ...member, balance: member.balance + totalAmount - splitAmount }
        : { ...member, balance: member.balance - splitAmount }
    );

    setMembers(updatedMembers);
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 transition-colors">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-colors">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            Expenses Sharing App
          </h1>
          <ThemeToggle />
        </div>
        <ExpenseForm members={members} onAddExpense={addExpense} />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <ExpenseList expenses={expenses} />
          <BalanceSummary members={members} />
        </div>
      </div>
    </div>
  );
}

export default App;
