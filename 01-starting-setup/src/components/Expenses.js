import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpensesList';
//import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses=(props)=>{
  const [changedYear, setChangedYear] = useState("2020");
  

  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
      setChangedYear(selectedYear);
};
const filteredExpenses=props.items.filter((expense) => {
      return expense.date.getFullYear().toString()===changedYear;
});

 

    return(
        <div className="expenses">
            <ExpensesFilter 
            //changed={changedYear}
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
///////////////////////////////////

    )
}
export default Expenses;


