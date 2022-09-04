
import './ExpenseForm.css';
import React from "react";
const ExpenseForm =()=>{



    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'></div>
                 <label>title</label>
                 <input type='text'/>
                </div>
                <div className='new-expense__control'>
                 <label>Amount</label>
                 <input type='number' min="0.01" step='0.01'/>
                <div/>
                <div className='new-expense__control'>
                 <label>date</label>
                 <input type='date' min='2019-01-01' max='2022-12-30'/>
                </div>   
            </div>
            <div className='new-expense__actions'>
              <button type='submit'>Add Expense</button>
            </div>
            
        </form>
);
};
export default ExpenseForm;