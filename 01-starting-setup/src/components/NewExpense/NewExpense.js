import React from "react";
import classes from './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
 



const onSaveExpenseData=(enteredExpenseData)=>{
  const expenseData={
   ...enteredExpenseData, //previous value of title and amount and date
   id:Math.random().toString()
  };

  props.onAddExpense()
};


    return(
       <div className="new-expense">
          <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>

       </div>


    )
};
export default NewExpense;