import React from 'react';

import Expenses from './components/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 10,
      date: new Date(2022, 7, 14),
    },
    { id: 'e2', 
    title: 'New TV',
     amount: 700, 
     date: new Date(2023, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 130,
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 300,
      date: new Date(2023, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Expensetracker</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;