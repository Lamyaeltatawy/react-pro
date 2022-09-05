import ExpenseItem from "./components/ExpenseItem.js";
import Card from './components/card.js';
import React,{useState} from "react";
import Expenses from "./components/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
//////////////////////////
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'toilet Paper',
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

const App=()=> {
  /////////////////////////
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);
  
  const AddExpenseHandler=(expense)=>{
     setExpenses((prevExpenses)=>{
      return (
        [expense, ... prevExpenses] //new expense+old expenses
      );
     });//set expense array to a new array
  };
///////////////////////////
  return (
    <div>
    <h2>let's start</h2>
    <NewExpense onAddExpense={AddExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
