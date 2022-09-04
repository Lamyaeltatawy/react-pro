import './ExpenseForm.css';
import React,{useState} from "react";

const ExpenseForm =()=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
 const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);
 };
 const amountChangeHandler=(event)=>{
    setEnteredAmount(event.target.value);
 };
 const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
 };




    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'></div>
                 <label className='new-expense__control label'>title</label>
                 <input className='new-expense__control input' type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                 <label className='new-expense__control label'>Amount</label>
                 <input className='new-expense__control input' type='number' min="0.01" step='0.01' onChange={amountChangeHandler}/>
                <div/>
                <div className='new-expense__control'>
                 <label className='new-expense__control label'>date</label>
                 <input className='new-expense__control input' type='date' min='2019-01-01' max='2022-12-30' onChange={dateChangeHandler}/>
                </div>   
            </div>
            <div className='new-expense__actions'>
              <button type='submit'>Add Expense</button>
            </div>
            
        </form>
    );
};
export default ExpenseForm;