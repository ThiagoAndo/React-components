import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";
const NewExpenses = (props) => {
  const[click, setClick] =useState('showForm')
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const handleClickNew = (value) =>{
    setClick(value)
    console.log(click)
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onClickBtn={handleClickNew}
      />
    </div>
  );
};

export default NewExpenses;
