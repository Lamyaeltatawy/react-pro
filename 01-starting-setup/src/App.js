import React from "react";
import ExpenseItem from "./components/ExpenseItem.js";
import Card from './components/card.js';
import Expenses from "./components/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
     title: 'New TV',
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const AddExpenseHandler=(expense)=>{
    console.log('added');
    console.log(expense);
  };

  return (
    <div>
    <h2>let's start</h2>
    <NewExpense onAddExpense={AddExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
