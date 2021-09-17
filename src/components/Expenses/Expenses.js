import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense, i) => {
        return <ExpenseItem key={i} expense={expense} />;
      })}
    </Card>
  );
};

export default Expenses;
