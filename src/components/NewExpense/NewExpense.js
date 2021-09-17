import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  const ChangeShowExpenseForm = () => {
    setShowExpenseForm((oldShowExpenseForm) => !oldShowExpenseForm);
  };

  let addExpenseContent = (
    <div className="add-expense__actions">
      <button onClick={ChangeShowExpenseForm} type="submit">
        Add Expense
      </button>
    </div>
  );
  if (showExpenseForm) {
    addExpenseContent = (
      <ExpenseForm
        changeShowExpenseForm={ChangeShowExpenseForm}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{addExpenseContent}</div>;
};

export default NewExpense;
