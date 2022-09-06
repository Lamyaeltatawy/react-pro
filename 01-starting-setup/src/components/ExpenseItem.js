import ExpenseDate from './ExpenseDate';
//import Card from './card';
//import {useCallback} from 'react';
import './ExpenseItem.css';
import React ,{useState}from 'react';
//import react from 'react';

const ExpenseItem=(props)=>{
  const [title, setTitle]= useState(props.title);
  const [amount, setAmount]= useState(props.title);
  const [date, setDate]= useState(props.title);
 //const ExpenseDate= new Date(2021,2,28);
 //const Expensetitle='car insurance';
 //const Expenseprice=224.5;
  //let title =props.title;
  
  const cliclkHandler=()=>{
   //title='updated!';
   setTitle('updated') ;//update the value on clicking button
   console.log('ExpenseItem evaluated by react');
  };    

 return(
 <li>
 <div className='expense-item'>
   <ExpenseDate date={props.date} /> 
   <div className='expense-item__description'> <h2>{title}</h2></div>
   <div className='expense-item__price'>${props.amount}</div>
   <button onClick={cliclkHandler}>click to change title</button>
 </div>
 </li> 
 );
  

};
export default ExpenseItem;