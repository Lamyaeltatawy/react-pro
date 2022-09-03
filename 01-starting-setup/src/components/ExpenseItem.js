import ExpenseDate from './ExpenseDate';
import Card from './card';
import { useCallback } from 'react';
import './ExpenseItem.css';
const ExpenseItem=(props)=>{
    //const ExpenseDate= new Date(2021,2,28);
    //const Expensetitle='car insurance';
    //const Expenseprice=224.5;
const cliclkHandler=()=>{console.log('printed')};    

return(
   
 <div className='expense-item'>
   <ExpenseDate date={props.date} /> 
   <div className='expense-item__description'> <h2>{props.title}</h2></div>
   <div className='expense-item__price'>${props.amount}</div>
   <button onClick={cliclkHandler}>click</button>
 </div>
);

}
export default ExpenseItem;