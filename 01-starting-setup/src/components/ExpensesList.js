import React from "react";
//import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList=(props)=>{
    //let expensesContent=<p>no expenses found</p>;
    if(props.items.length===0){
      return (
        <h2 className="expense-list__fallback">no expenses found</h2>
      );
    };

    return(
      <ul className="expenses-list">
       {props.items.map((expense)=>(
          <ExpenseItem 
           key={expense.id}
           title={expense.title}             
            amount={expense.amount} 
            date={expense.date}
          />
        ))}
        
      </ul>
    );  
      
    
};
export default ExpensesList;