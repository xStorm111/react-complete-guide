//React component is a JavaScript function
import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expense = props.expense;

  //*1º arg: point to manage value
  //*2º arg: function to set a new value
  const [title, setTitle] = useState(expense.title);

  const clickHandler = () => {
    setTitle("Updated!"); //doesn't change right way, it schedule the set
    console.log("Clicked! c:");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expense.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
