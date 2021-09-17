import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");

  const filterChangeHandler = (year) => {
    setFilterYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      {props.expenses
        .filter((expense) => {
          if (filterYear === "") return true;

          return expense.date.getFullYear().toString() === filterYear;
        })
        .map((expense, i) => {
          return <ExpenseItem key={i} expense={expense} />;
        })}
    </Card>
  );
};

export default Expenses;
