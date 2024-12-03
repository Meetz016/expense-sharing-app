import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BalanceSummary from './components/BalanceSummary';

function App() {
  const [members, setMembers] = useState([
    { id: 1, name: 'Meet', balance: 0 },
    { id: 2, name: 'Harsh', balance: 0 },
    { id: 3, name: 'Neet', balance: 0 }
  ]);

  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    const { name, totalAmount, payer } = expense;
    const payerMember = members.find(m => m.name === payer);
    const otherMembers = members.filter(m => m.name !== payer);
    const splitAmount = totalAmount / members.length;

    // Update payer's balance
    const updatedMembers = members.map(member => 
      member.id === payerMember.id 
        ? { ...member, balance: member.balance + totalAmount - splitAmount }
        : { ...member, balance: member.balance - splitAmount }
    );

    setMembers(updatedMembers);
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        Expenses sharing app
        </h1>
        <ExpenseForm members={members} onAddExpense={addExpense}/>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <ExpenseList expenses={expenses} />
          <BalanceSummary members={members} />
        </div>
      </div>
    </div>
  );
}

export default App;